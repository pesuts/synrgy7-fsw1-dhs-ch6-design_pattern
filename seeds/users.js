/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    { 
      name: 'John Doe', 
      email: 'john@example.com', 
      password: 'password123', 
      phone_number: '+1234567890', 
    },
    { 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      password: 'password456', 
      phone_number: '+0987654321', 
    },
    { 
      name: 'Michael Johnson', 
      email: 'michael@example.com', 
      password: 'password789', 
      phone_number: '+2468013579', 
    },
    { 
      name: 'Emily Johnson', 
      email: 'emily@example.com', 
      password: 'password246', 
      phone_number: '+1357924680', 
    },
    { 
      name: 'David Brown', 
      email: 'david@example.com', 
      password: 'password789', 
      phone_number: '+9876543210', 
    },
    { 
      name: 'Sophia Wilson', 
      email: 'sophia@example.com', 
      password: 'password369', 
      phone_number: '+3698521470', 
    },
    { 
      name: 'Oliver Taylor', 
      email: 'oliver@example.com', 
      password: 'password852', 
      phone_number: '+7539514862', 
    },
    { 
      name: 'Emma Martinez', 
      email: 'emma@example.com', 
      password: 'password753', 
      phone_number: '+1592637480', 
    },
    { 
      name: 'Noah Anderson', 
      email: 'noah@example.com', 
      password: 'password159', 
      phone_number: '+8527419630', 
    },
    { 
      name: 'Isabella Thompson', 
      email: 'isabella@example.com', 
      password: 'password753', 
      phone_number: '+4561237890', 
    }
  ]);
};
