
export const createChatroomUser = chatroomUser => {
  return $.ajax({
    method: 'POST',
    url: `/api/chatroom_users`,
    data: { chatroomUser }
  });
};