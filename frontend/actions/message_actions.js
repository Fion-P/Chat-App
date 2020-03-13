import * as MessageAPI from '../util/messages_util';

export const LOAD_MESSAGES = 'LOAD_MESSAGES';

const loadMessages = messages => {
  return {
    type: LOAD_MESSAGES,
    messages,
  };
};

export const fetchMessages = chatroom_id => {
  return MessageAPI
    .fetchMessages(chatroom_id)
    .then( messages => loadMessages(messages));
};