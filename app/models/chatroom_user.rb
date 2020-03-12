# == Schema Information
#
# Table name: chatroom_users
#
#  id          :bigint           not null, primary key
#  chatroom_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class ChatroomUser < ApplicationRecord

  belongs_to :chatroom,
    foreign_key: :chatroom_id,
    class_name: :Chatroom

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
