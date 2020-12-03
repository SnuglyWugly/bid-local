
exports.get_user_by_email = async (_, { email }, { models }) => {
  const user = await models.users.findOne({ email: email });
  return user;
};

exports.get_users = async (_, __, { models }) => {
  const users = await models.users.findAll();
  return users;
};

exports.get_items = async (user, _, { models }) => {
  const items = await models.items.findAll({
    where: {
      userId: user.id
    }
  });
  return items;
};

exports.get_address = async (user, _, { models }) => {
  const address = await models.addresses.findOne({
    where: {
      userId: user.id
    }
  });
  return address;
};

exports.create_user = async (_, { email, password, firstName, lastName, phoneNumber }, { models }) => {
  const createdUser = await models.users.create({ email: email, password: password, firstName: firstName, lastName: lastName, phoneNumber: phoneNumber });
  return createdUser;
};