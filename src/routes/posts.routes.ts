import { Router } from 'express';

import { getRepository } from 'typeorm';
import CreatePostService from '../services/CreatePostService';
import Post from '../models/Post';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const postsRouter = Router();

postsRouter.use(ensureAuthenticated);

postsRouter.get('/', async (request, response) => {
  const postsRepository = getRepository(Post);
  const posts = await postsRepository.find();

  return response.json(posts);
});

postsRouter.post('/', async (request, response) => {
  const { content, likes } = request.body;
  const owner_id = request.user.id;

  const createPost = new CreatePostService();

  const post = await createPost.execute({
    owner_id,
    content,
    likes,
  });

  return response.json(post);
});

export default postsRouter;
