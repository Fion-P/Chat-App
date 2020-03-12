# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Channel < ApplicationRecord

  has_many :messages,
    foreign_key: :channel_id,
    class_name: :Message
  
  has_many :chats,
    foreign_key: :channel_id,
    class_name: :Chat

  has_many :users,
    through: :chats,
    source: :user

    
end
