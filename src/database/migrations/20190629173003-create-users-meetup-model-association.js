module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('subscriptions', {
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'users', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            meetup_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'meetups', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('subscriptions');
    },
};
