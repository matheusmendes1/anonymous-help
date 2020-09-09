import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddLikeAndCommentsTableInPosts1599605901947
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('posts', 'likes');

    await queryRunner.addColumn(
      'posts',
      new TableColumn({
        name: 'number_likes',
        type: 'integer',
        default: 0,
      })
    );

    await queryRunner.addColumn(
      'posts',
      new TableColumn({
        name: 'number_comments',
        type: 'integer',
        default: 0,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('posts', 'number_comments');
    await queryRunner.dropColumn('posts', 'number_likes');

    await queryRunner.addColumn(
      'posts',
      new TableColumn({
        name: 'likes',
        type: 'integer',
        default: 0,
      })
    );
  }
}
