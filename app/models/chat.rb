# == Schema Information
#
# Table name: chats
#
#  id         :bigint           not null, primary key
#  channel_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Chat < ApplicationRecord

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
