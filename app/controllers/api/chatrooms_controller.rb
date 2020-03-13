class Api::ChatroomsController < ApplicationController

  def index
    chatroom_ids = ChatroomUser.where(user_id: params[:id]).pluck(:chatroom_id)
    @chatrooms = Chatroom.where(:id => chatroom_ids)
    render :index
  end

  def create
    @chatroom = Channel.new(channel_params)

    if @chatroom.save
      render :show
    else
      render @chat.errors.full_messages, status: 401
    end
  end

  private 

  def chatroom_params 
    params.require(:chatroom).permit(:title)
  end
end
