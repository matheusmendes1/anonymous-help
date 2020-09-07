import { getRepository } from 'typeorm';
import { hash, compare } from 'bcryptjs';
import AppError from '../errors/AppError';
import User from '../models/User';

interface IRequest {
  user_id: string;
  name: string;
  avatar_name: string;
  email: string;
  old_password?: string;
  password?: string;
}

class UpdateProfileService {
  public async execute({
    user_id,
    name,
    avatar_name,
    email,
    old_password,
    password,
  }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('User not found!');
    }

    const userWithUpdatedEmail = await usersRepository.findOne({
      where: { email },
    });

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user_id) {
      throw new AppError('E-mail already in use.');
    }

    const userWithUpdatedAvatarName = await usersRepository.findOne({
      where: { avatar_name },
    });

    if (userWithUpdatedAvatarName && userWithUpdatedAvatarName.id !== user_id) {
      throw new AppError('Avatar name already in use.');
    }

    user.name = name;
    user.email = email;
    user.avatar_name = avatar_name;

    if (password && !old_password) {
      throw new AppError(
        'You need to inform the old password to set a new password'
      );
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError('Old Password does not match.');
      }

      user.password = await hash(password, 8);
    }

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateProfileService;
