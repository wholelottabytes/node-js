/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Получить все сообщения
*
* returns List
* */
const messagesGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Удалить сообщение
*
* id Integer 
* no response value expected for this operation
* */
const messagesIdDELETE = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Обновить сообщение
*
* id Integer 
* messagesIdPutRequest MessagesIdPutRequest 
* returns _messages_get_200_response_inner
* */
const messagesIdPUT = ({ id, messagesIdPutRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        messagesIdPutRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Отправить сообщение
*
* messagesPostRequest MessagesPostRequest 
* returns _messages_get_200_response_inner
* */
const messagesPOST = ({ messagesPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        messagesPostRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Удалить пользователя
*
* id Integer 
* no response value expected for this operation
* */
const usersIdDELETE = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Добавить пользователя
*
* usersPostRequest UsersPostRequest 
* returns _users_post_201_response
* */
const usersPOST = ({ usersPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        usersPostRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  messagesGET,
  messagesIdDELETE,
  messagesIdPUT,
  messagesPOST,
  usersIdDELETE,
  usersPOST,
};
