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
require 'test_helper'

class ChatroomUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
