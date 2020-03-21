json.extract! post, :id, :body, :author_id, :profile_id, :created_at
json.author_name post.author.full_name

if (post.author.photo.attached? )
  json.author_profile url_for(post.author.photo)
end