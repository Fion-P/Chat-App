# == Schema Information
#
# Table name: messages
#
#  id          :bigint           not null, primary key
#  body        :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  chatroom_id :integer          not null
#

class Message < ApplicationRecord

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :chatroom,
    foreign_key: :chatroom_id,
    class_name: :Chatroom
end
