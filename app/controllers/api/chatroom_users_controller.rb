class Api::ChatroomUsersController < ApplicationController

  def create #add user to chat

    @chatroom_user = ChatroomUser.new(
      user_id: current_user.id,
      chatroom_id: chatroom_user_params[:chatroom_id]
    )
    
    if @chatroom_user.save
      render 'api/chatroom_users/show'
    else
      render json: ["Failed to join chat"], status: 401
    end

  end

  private

  def chatroom_user_params
    params.require(:chatroom_user).permit(:chatroom_id)
  end
end
