class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  def speak(data)
    message = Message.create(body: data['body'], user_id: data['user_id'], chatroom_id: data['chatroom_id'])
    socket = { id: message.id, body: message.body, user_id: message.user_id, chatroom_id: message.chatroom_id }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end

