module ApplicationCable
  class Channel < ActionCable::Channel::Base
    def speak(data)
      message = Message.create(body: data['message'])
      socket = { message: message.body }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end
end
