# debugger
json.extract! friend, :id, :user_id, :friend_id
json.friend_name friend.friend.first_name + " " + friend.friend.last_name 
json.friend_username friend.friend.username

# json.friends do 
#   friends.bookings.each do |booking|
#       json.set! booking.id do
#         json.partial! "api/bookings/booking", booking: booking
#       end
#   end
# end

# json.set! friend.friend.id do 
#   json.extract! user, :id, :username, :first_name, :last_name, :created_at
# end