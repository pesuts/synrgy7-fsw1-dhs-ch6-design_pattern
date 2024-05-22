const { ModelObject, Model } = require('objection')

// class UserModel extends Model { 
  
// }

class UsersModel extends Model {
  static get tableName() {
    return "users";
  }

  // static get relationMappings() { 
  //   return {
  //     orders: {
  //       relation: Model.HasManyRelation,
  //       modelClass: OrdersModel,
  //       join: {
  //         from: 'customers.id',
  //         to: 'orders.customer_id'
  //       }
  //     },
  //   }
  // }
}

module.exports = UsersModel

// export type Users = ModelObject<UsersModel>;
