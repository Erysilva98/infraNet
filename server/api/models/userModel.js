const { DataTypes } = require('sequelize');
const sequelize = require('../data/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'user',
    timestamps: false
});

module.exports = {
    getAllUsers: async () => {
        try {
            return await User.findAll();
        } catch (error) {
            throw error;
        }
    },

    getUser: async (id) => {
        try {
            return await User.findByPk(id);
        } catch (error) {
            throw error;
        }
    },

    addUser: async (username, password, data_nascimento) => {
        try {
            const newUser = await User.create({
                username,
                password,
                data_nascimento
            });
            return newUser.id;
        } catch (error) {
            throw error;
        }
    },

    updateUser: async (id, updatedData) => {
        try {
            const user = await User.findByPk(id);
            if (user) {
                await user.update(updatedData);
                return user;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    },

    deleteUser: async (id) => {
        try {
            const user = await User.findByPk(id);
            if (user) {
                await user.destroy();
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw error;
        }
    }
};
