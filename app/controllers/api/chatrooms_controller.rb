class Api::ChatroomsController < ApplicationController

  def index
    chatroom_ids = ChatroomUser.includes(:chatroom_users, :users).where(user_id: current_user.id).pluck(:chatroom_id)
    @chatrooms = Chatroom.where(:id => chatroom_ids)
    # debugger
    render 'api/chatrooms/index'
  end

  def show
    @chatroom = Chatroom.includes(:chatroom_users, :users).find_by_id(params[:id])
    if @chatroom
      render 'api/chatrooms/show'
    else
      render json: ["Chat doesn't exist"], status: 401
    end
  end
  
  def create
    @chatroom = Chatroom.new(chatroom_params)

    if @chatroom.save
      render 'api/chatrooms/show'
    else
      render @chat.errors.full_messages, status: 401
    end
  end


  private 

  def chatroom_params 
    params.require(:chatroom).permit(:title)
  end
end
