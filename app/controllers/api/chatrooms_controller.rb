class Api::ChatroomsController < ApplicationController

  def index
    chatroom_ids = ChatroomUser.where(user_id: params[:id]).pluck(:chatroom_id)
    @chatrooms = Chatroom.where(:id => chatroom_ids)
    render :index
  end
end
