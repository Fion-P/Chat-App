# == Schema Information
#
# Table name: chatrooms
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Chatroom < ApplicationRecord

  has_many :messages,
    foreign_key: :chatroom_id,
    class_name: :Message

  has_many :chatroom_users,
    foreign_key: :chatroom_id,
    class_name: :ChatroomUser

  has_many :users,
    through: :chatroom_users,
    source: :user
end
