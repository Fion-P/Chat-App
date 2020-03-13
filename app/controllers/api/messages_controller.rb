class Api::MessagesController < ApplicationController
  def index 
    chatroom = Chatroom.find_by_id(params[:chatroom_id])
    @messages = Chatroom.messages
    render "api/messages/index"
  end
end
