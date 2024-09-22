require('dotenv').config();
const { Sequelize } = require('sequelize');

//
//  
//
const sequelize = new Sequelize(process.env.DB_DBNAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Kết nối tới database thành công.');
  } catch (error) {
    console.error('Kết nối với database thất bại :', error);
  }
}

connect();