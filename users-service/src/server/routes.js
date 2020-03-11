import { User } from '#root/db/models';
import generateUUID from '#root/helpers/generateUUID';
import hashPassword from '#root/helpers/hashPassword';

const setupRoutes = app => {
  app.post('/user', async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
      return next(new Error('Invalid email or password'));
    }

    try {
      const newUser = await User.create({
        email: req.body.email,
        id: generateUUID(),
        passwordHash: hashPassword(req.body.password)
      });

      return res.json(newUser);
    } catch (error) {
      return next(error);
    }
  });

  app.get('/users', async (req, res, next) => {
    const user = await User.findAll();
    return res.json(user);
  });
};

export default setupRoutes;
