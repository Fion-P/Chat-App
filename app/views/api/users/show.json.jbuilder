json.user do 
  json.partial! "api/users/user", user: @user
end

json.friends do 
  @user.friendships.each do |friendship|
      json.set! friendship.id do
        json.extract! friendship, :user_id, :friend_id
        json.friend_name friendship.friend.first_name + " " + friendship.friend.last_name 
        json.friend_username friendship.friend.username
      end
  end
end

# json.chatrooms do 

# end