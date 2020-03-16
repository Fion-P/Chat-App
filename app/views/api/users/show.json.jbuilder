json.user do 
  json.partial! "api/users/user", user: @user
end

json.friends do 
  @user.friendships.each do |friendship|
      json.set! friendship.id do
        json.extract! friendship, :user_id, :friend_id
        json.friend_name friendship.friend.full_name
        json.friend_username friendship.friend.username
      end
  end
end

json.chatrooms do 
  @user.chatrooms.each do |chatroom| 
    json.set! chatroom.id do 
      json.extract! chatroom, :id, :title
      # json.users chatroom.users.pluck(:first_name, :last_name).map{|e| e.join(' ')}
      json.other_users chatroom.users.select{|user| user.id != @user.id}.map{ |e| e.full_name}
      json.userIds chatroom.users.pluck(:id)
    end
  end
end