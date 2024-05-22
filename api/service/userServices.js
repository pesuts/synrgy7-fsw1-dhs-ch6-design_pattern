const userRepository = require('../repository/userRepository');

module.exports = {
  async getUsers() { 
    return await userRepository.getUsers();
  },
  async getUserById(id) {
    return userRepository.getUserById(id);
  },
  async createUser(args) { 
    await userRepository.createUser(args);
  },
  async updateUser(args) { 
    await userRepository.updateUser(args);
  },
  async deleteUser(id) { 
    await userRepository.deleteUser(id);
  },
}