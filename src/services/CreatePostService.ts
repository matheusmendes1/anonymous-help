import { getRepository } from 'typeorm';
import Post from '../models/Post';

interface IRequest {
  owner_id: string;
  content: string;
  likes: number;
}

class CreatePostService {
  public async execute({ owner_id, content, likes }: IRequest): Promise<Post> {
    const postsRepository = getRepository(Post);

    const post = postsRepository.create({
      owner_id,
      content,
      likes,
    });

    await postsRepository.save(post);

    return post;
  }
}

export default CreatePostService;
