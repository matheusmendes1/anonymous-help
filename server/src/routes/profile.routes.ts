import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import ShowProfileService from '../services/ShowProfileService';
import UpdateProfileService from '../services/UpdateProfileService';

const profileRouter = Router();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', async (request, response) => {
  const user_id = request.user.id;

  const showProfile = new ShowProfileService();

  const user = await showProfile.execute({ user_id });

  delete user.password;

  return response.json(user);
});

profileRouter.put('/', async (request, response) => {
  const { name, avatar_name, email, old_password, password } = request.body;
  const user_id = request.user.id;

  const updateUser = new UpdateProfileService();

  const userToUpdate = await updateUser.execute({
    user_id,
    name,
    avatar_name,
    email,
    old_password,
    password,
  });

  return response.json(userToUpdate);
});

export default profileRouter;
