
export const createChatroomUser = chatroom_user => {
  return $.ajax({
    method: 'POST',
    url: `/api/chatroom_users`,
    data: { chatroom_user }
  });
};