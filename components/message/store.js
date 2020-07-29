const db = require("mongoose");
const Model = require("./model");
/**
 * mongodb+srv://db_user_backend_node:db_user_backend_node@cluster0.ocf3j.mongodb.net/telegrom?retryWrites=true&w=majority
 */
db.Promise = global.Promise;
db.connect(
  "mongodb+srv://db_user_backend_node:db_user_backend_node@cluster0.ocf3j.mongodb.net/telegrom?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

console.log("[db] Conectada con éxito");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {};

  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage,
};
