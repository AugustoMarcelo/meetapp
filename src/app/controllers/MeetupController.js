// import Meetup from '../models/Meetup';

class MeetupController {
    async store(req, res) {
        return res.json({ ok: true });
    }
}

export default new MeetupController();
