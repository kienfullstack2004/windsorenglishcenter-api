const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('windsorcenter', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const connect = async() => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối tới database thành công.');
      } catch (error) {
        console.error('Kết nối với database thất bại :', error);
      }
}

connect();