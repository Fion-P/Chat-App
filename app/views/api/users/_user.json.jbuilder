json.extract! user, :id, :username, :first_name, :last_name

if user.photo.attached? 
  # json.photoUrl url_for(user.photo)
  json.profile_pic url_for(user.photo)
end

json.extract! user, :created_at