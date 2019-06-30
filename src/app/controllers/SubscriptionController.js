import * as Yup from 'yup';
import { Op } from 'sequelize';

import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';
import User from '../models/User';

class SubscriptionController {
    async index(req, res) {
        const subscriptions = await Subscription.findAll({
            where: { user_id: req.userId },
            attributes: ['meetup_id'],
            order: [['meetup', 'date', 'ASC']],
            include: [
                {
                    model: Meetup,
                    as: 'meetup',
                    where: {
                        date: {
                            [Op.gt]: new Date(),
                        },
                    },
                    attributes: ['title', 'description', 'date', 'location'],
                    include: [
                        {
                            model: User,
                            as: 'user',
                            attributes: ['id', 'name', 'email'],
                        },
                    ],
                },
            ],
        });

        return res.json(subscriptions);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            meetup_id: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res
                .status(400)
                .json({ error: 'You must inform the meetup' });
        }

        const { meetup_id } = req.body;

        const checkMeetupDate = await Meetup.findOne({
            where: {
                id: meetup_id,
                date: {
                    [Op.lt]: new Date(),
                },
            },
        });

        /**
         * Check for past dates
         */
        if (checkMeetupDate) {
            return res
                .status(401)
                .json({ error: 'You can not subscribe in past meetups' });
        }

        const checkDuplicateSubscription = await Subscription.findOne({
            where: { meetup_id, user_id: req.userId },
        });

        /**
         * Check for same subscription
         */
        if (checkDuplicateSubscription) {
            return res
                .status(401)
                .json({ error: 'You already subscribe for this meetup' });
        }

        const meetup = await Meetup.findByPk(meetup_id);

        const checkMeetupTime = await Subscription.findOne({
            where: { user_id: req.userId },
            include: [
                {
                    model: Meetup,
                    as: 'meetup',
                    where: {
                        date: meetup.date,
                    },
                },
            ],
        });

        if (checkMeetupTime) {
            return res.status(401).json({
                error: "You can't subscribe for meetups at the same time",
            });
        }

        const subscription = await Subscription.create({
            meetup_id,
            user_id: req.userId,
        });

        return res.json(subscription);
    }
}

export default new SubscriptionController();
