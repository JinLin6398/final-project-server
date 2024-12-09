/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  // Change Made : email - not allow null/empty
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },

  // Change Made : imageUrl - with a default value, allow null/empty
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true, // Optional
    defaultValue: 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg',
  },

  // Change Made : gpa - decimal between 0.0 and 4.0, allow null/empty
  gpa: {
    type: Sequelize.DECIMAL(2, 1),
    allowNull: true,
    validate: {
      isDecimal: true,
      min: 0.0,
      max: 4.0,
    },
  }
});

// Export the student model
module.exports = Student;