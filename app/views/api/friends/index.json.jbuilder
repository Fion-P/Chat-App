@friends.each do |friend|
  json.set! friend.id do
    json.extract! friend, :user_id, :friend_id
    # json.partial! '/api/friends/friend', friend: friend
  end
end