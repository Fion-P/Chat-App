@chatrooms.each do |chatroom|
  json.set! chatroom.id do
    json.extract! chatroom, :title
    # json.reviewIds @chatroom.users.pluck(:id)
    # json.users chatroom.users.pluck(:username)
    json.users chatroom.users.pluck(:first_name, :last_name).map{|e| e.join(' ')}
    # json.userIds chatroom.users.pluck(:id)
    json.otherUserId chatroom.users.select{|user| user.id != @user.id}[0].id
  end
end