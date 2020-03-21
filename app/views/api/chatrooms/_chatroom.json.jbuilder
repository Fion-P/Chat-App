json.extract! chatroom, :id, :title
      # json.users chatroom.users.pluck(:first_name, :last_name).map{|e| e.join(' ')}
# if chatroom.users 
#       json.other_users chatroom.users.select{|user| user.id != @user.id}.map{ |e| e.full_name}
#       json.otherUserId chatroom.users.select{|user| user.id != @user.id}[0].id
# end