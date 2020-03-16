class Api::ChatroomUsersController < ApplicationController

  def create #add user to chat

    @chatroom_user = ChatroomUser.new(chatroom_user_params)
    
    if @chatroom_user.save
      render 'api/chatroom_users/show'
    else
      render json: ["Failed to join chat"], status: 401
    end

  end

  private

  def chatroom_user_params
    params.require(:chatroom_user).permit(:chatroom_id, :user_id)
  end
end
