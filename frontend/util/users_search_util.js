export const searchUsers = query => {
  return $.ajax({
    url: `/api/users_search?query=${query}`,
    method: `GET`,
    data: { query }
  });
};