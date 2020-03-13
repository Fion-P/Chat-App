export const fetchMessages = chatroom_id => {
  return $.ajax({
    method: 'GET',
    url: `/api/chatrooms/${chatroom_id}/messages`
  });
};