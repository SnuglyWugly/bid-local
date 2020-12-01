const { v4: uuidv4}  = require('uuid');

exports.item = async(_, { id }, { models }) => {
  const item = await models.items.findOne({id:id})
  return item
}

exports.items = async(_, agrs, { models }) => {
  const items = await models.items.findAll();
  return items
}

exports.get_users = async(item, _, { models }) => {
      const user = await models.users.findOne({id:item.userId})
      return user;
    }

exports.createItem = async (_, { name }, { models }) => {
    //let id = uuidv4();
    //console.log(id);
    const item = {
      //id,
      name,
      userId: 1,
    }
    const createdItem = await models.items.create(item);

    return createdItem;
  }
exports.deleteItem = async (_, { id }, { models }) => {
  const destroyed = await models.items.destroy({
    where: {
      id:id
    }
  })
  if (!destroyed) {
    return false;
  }
  return true;
}