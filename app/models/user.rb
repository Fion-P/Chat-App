# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  attr_reader :password

  validates :username, uniqueness: true, presence: true
  validates :first_name, :last_name, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :messages,
    foreign_key: :user_id,
    class_name: :Message

  has_many :chatroom_memberships,
    foreign_key: :user_id,
    class_name: :ChatroomUser

  has_many :chatrooms,
    through: :chatroom_memberships,
    source: :chatroom

  has_many :friendships,
    foreign_key: :user_id,
    class_name: :Friend

  has_many :friends,
    through: :friendships,
    source: :friend

  def self.find_by_credentials(username, password)
    # find the user by the username
    user = User.find_by(username: username)

    # check is user exists and if so if the password is correct
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    # use BCrypt to create password digest
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    # Password.new reverses password digest to the password 
    # is_password in the line below is a Bcrypy method to check if password is correct
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    # use Secure Random to create a new session token
    self.update!(session_token: SecureRandom.urlsafe_base64)
    # return the updated session token
    self.session_token
  end

  private

  def ensure_session_token
    # lazy initialization for the session token if one isn't there
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
