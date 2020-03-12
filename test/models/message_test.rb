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
require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
