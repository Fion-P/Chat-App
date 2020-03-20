export const fetchPosts = user_id => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/posts`
  });
};

export const createPost = post => {
  // debugger;

  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: { post }
  });
};

export const deletePost = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`,
  });
};