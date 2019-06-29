import { Model } from 'sequelize';

class Subscription extends Model {
    static init(sequelize) {
        super.init({ sequelize });
    }

    static associate(models) {
        this.belongsToMany(models.Meetup, {
            foreignKey: 'meetup_id',
            as: 'meetup',
        });
        this.belongsToMany(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

export default Subscription;
