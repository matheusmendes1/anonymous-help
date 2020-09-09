import { Router } from 'express';

import { getRepository } from 'typeorm';
import CreatePostService from '../services/CreatePostService';
import Post from '../models/Post';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const postsRouter = Router();

postsRouter.use(ensureAuthenticated);

postsRouter.get('/', async (request, response) => {
  const postsRepository = getRepository(Post);
  const user_id = request.user.id;

  const posts = await postsRepository.find({ where: { owner_id: user_id } });

  return response.json(posts);
});

postsRouter.post('/', async (request, response) => {
  const { content, number_likes, number_comments } = request.body;
  const owner_id = request.user.id;

  const createPost = new CreatePostService();

  const post = await createPost.execute({
    owner_id,
    content,
    number_likes,
    number_comments,
  });

  return response.json(post);
});

export default postsRouter;
