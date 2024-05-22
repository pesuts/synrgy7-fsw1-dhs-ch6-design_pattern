const UserModel = require('../models/user.model')

module.exports = {
  async getUsers() { 
    return await UserModel.query();
  },
  async getUserById(id) {
    return await UserModel.query().where("id", id);
  },
  async createUser(args) { 
    await UserModel.query().insert(args);
  },
  async updateUser(args) { 
    await UserModel.query().where("id", id).update(args);
  },
  async deleteUser(id) { 
    await UserModel.query().deleteById(id);
  },
}