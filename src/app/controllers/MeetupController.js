import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore } from 'date-fns';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
    async index(req, res) {
        const { page = 1 } = req.query;
        const meetups = await Meetup.findAll({
            where: { user_id: req.userId },
            order: ['date'],
            attributes: ['id', 'title', 'description', 'location', 'date'],
            limit: 20,
            offset: (page - 1) * 20,
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'name', 'email'],
                    include: [
                        {
                            model: File,
                            as: 'avatar',
                            attributes: ['id', 'url', 'path'],
                        },
                    ],
                },
                {
                    model: File,
                    as: 'banner',
                    attributes: ['id', 'url', 'path'],
                },
            ],
        });

        return res.json(meetups);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
            location: Yup.string().required(),
            date: Yup.date().required(),
            banner_id: Yup.number().required(),
        });

        /**
         * Data validation
         */
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { title, description, location, date, banner_id } = req.body;

        const hourStart = startOfHour(parseISO(date));

        /**
         * Check for past dates
         */
        if (isBefore(hourStart, new Date())) {
            return res
                .status(400)
                .json({ error: 'Past dates are not permitted' });
        }

        const meetup = await Meetup.create({
            title,
            description,
            location,
            date,
            banner_id,
            user_id: req.userId,
        });

        return res.json(meetup);
    }
}

export default new MeetupController();
