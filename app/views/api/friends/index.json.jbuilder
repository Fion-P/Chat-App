@friends.each do |friend|
  json.set! friend.id do
    # json.partial! '/api/friends/friend', friend: friend

    json.extract! friend, :user_id, :friend_id
    # json.extract! friend.friend, :username, :first_name, :last_name, :created_at
    json.friend_name friend.friend.first_name + " " + friend.friend.last_name 
    json.friend_username friend.friend.username
  end
end