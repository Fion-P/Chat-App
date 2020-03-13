json.chatrooms do
  json.partial! '/api/chatroomss/chatrooms', chatrooms: @chatrooms
  json.reviewIds @chatrooms.users.pluck(:id)
end

# json.