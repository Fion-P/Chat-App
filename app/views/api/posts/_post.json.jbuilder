json.extract! post, :id, :body, :author_id, :profile_id, :created_at
json.author_name post.author.full_name