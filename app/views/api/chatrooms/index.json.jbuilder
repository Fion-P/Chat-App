@chatrooms.each do |chatroom|
  json.set! chatroom.id do
    json.extract! chatroom, :title
  end
end