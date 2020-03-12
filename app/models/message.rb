# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  user_id    :integer          not null
#  channel_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Message < ApplicationRecord

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
