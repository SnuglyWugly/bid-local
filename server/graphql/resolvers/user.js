
exports.user = async (_, { id }, { models }) => {
  const user = await models.users.findOne({id:id})
  return user
}

exports.users = async (_, __, { models }) => {
  const users = await models.users.findAll()
  return users
}

exports.get_items = async (user, _, { models }) => {
  console.log('USERID PASSED',user.id);
  const items = await models.items.findAll({
    where: {
      userId:user.id
    }})
  return items
}

exports.createUser = async (_, { user }, { models }) => {
  const createdUser = await models.users.create({ username: user });
  return createdUser;
}