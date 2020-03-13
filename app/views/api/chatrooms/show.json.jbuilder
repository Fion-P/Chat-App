json.chatroom do
  json.partial! '/api/chatrooms/chatroom', chatroom: @chatroom
  json.reviewIds @chatroom.users.pluck(:id)
end

# json.