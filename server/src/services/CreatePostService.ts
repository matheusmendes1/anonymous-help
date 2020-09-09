import { getRepository } from 'typeorm';
import Post from '../models/Post';

interface IRequest {
  owner_id: string;
  content: string;
  number_likes: number;
  number_comments: number;
}

class CreatePostService {
  public async execute({
    owner_id,
    content,
    number_likes,
    number_comments,
  }: IRequest): Promise<Post> {
    const postsRepository = getRepository(Post);

    const post = postsRepository.create({
      owner_id,
      content,
      number_likes,
      number_comments,
    });

    await postsRepository.save(post);

    return post;
  }
}

export default CreatePostService;
