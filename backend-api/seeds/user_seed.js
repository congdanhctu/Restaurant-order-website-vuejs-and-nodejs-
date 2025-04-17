exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        {
          user_name: "John Doe",
          user_email: "john.doe@example.com",
          user_phone: "123456789",
          user_password: "password",
          user_birth: "1990-01-01",
          user_gender: "Male",
          user_type: 1, // Client
        },
        {
          user_name: "Jane Smith",
          user_email: "jane.smith@example.com",
          user_phone: "987654321",
          user_password: "securepassword",
          user_birth: "1992-05-12",
          user_gender: "Female",
          user_type: 1, // Client
        },
        {
          user_name: "Admin User",
          user_email: "admin@example.com",
          user_phone: "555444333",
          user_password: "adminpassword",
          user_birth: "1985-10-20",
          user_gender: "Female",
          user_type: 2, // Admin
        },
      ]);
    });
};
