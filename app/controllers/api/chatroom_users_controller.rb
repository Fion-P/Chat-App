class Api::ChatroomUsersController < ApplicationController

  def create
    @chatroom_user = ChatroomUser.find_by(
      user_id: current_user.id,
      chatroom_id: chatroom_user_params[:chatroom_id]
    )

    if @chatroom_user
      render json: ["User is already in the chat"], status: 401
    else
      @chatroom_user = ChatroomUser.new(
        user_id: current_user.id,
        channel_id: chatroom_user_params[:chatroom_id]
      )
      if @chatroom_user.save
        render 'api/chatroom_users/show'
      else
        render json: ["Failed to join chat"], status: 401
      end
    end
  end

  def chatroom_user_params
    params.require(:chatroom_user).permit(:chatroom_id)
  end
end
