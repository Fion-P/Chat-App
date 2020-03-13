
export const createChatroomUser = chatroom_user => {
  // console.log(chatroomUser);
  return $.ajax({
    method: 'POST',
    url: `/api/chatroom_users`,
    data: { chatroom_user }
  });
};