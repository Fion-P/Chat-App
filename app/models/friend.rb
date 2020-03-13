# == Schema Information
#
# Table name: friends
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friend < ApplicationRecord
  validates :user_id, :friend_id, presence: true
  validates :user_id, uniqueness: {scope: :friend_id}
  validate :not_self


  belongs_to :user

  belongs_to :friend, 
    foreign_key: :friend_id,
    class_name: :User

  private

  def create_friendship
    Friend.create(user_id: friend.id, friend_id: user.id ) unless friend.friends.include?(user)
  end

  def destroy_inverse_relationship
    friendship = friend.friendships.find_by(friend_id: user.id)
    friendship.destroy if friendship
  end

  def not_self
    errors[:friend] << "can't be user" if user == friend
  end
    
end
