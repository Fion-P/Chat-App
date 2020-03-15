json.chatroom do
  json.partial! '/api/chatrooms/chatroom', chatroom: @chatroom
  # json.reviewIds @chatroom.users.pluck(:id)
  json.users chatroom.users.pluck(:first_name, :last_name).map{|e| e.join(' ')}
  chatroom.users @chatrooms.users.pluck(:username)
end

# json.