export const fetchUserChatrooms = user_id => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/chatrooms`
  });
};

export const fetchChatroom = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/chatrooms/${id}`
  });
};

export const createChatroom = chatroom => {
  return $.ajax({
    method: 'POST',
    url: `/api/chatrooms`,
    data: { chatroom }
  });
};