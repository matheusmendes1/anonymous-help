import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class UpdateContentColumn1599319969384
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('posts', 'content');

    await queryRunner.addColumn(
      'posts',
      new TableColumn({
        name: 'content',
        type: 'varchar',
        isUnique: false,
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('posts', 'content');

    await queryRunner.addColumn(
      'posts',
      new TableColumn({
        name: 'content',
        type: 'varchar',
        isUnique: true,
        isNullable: false,
      })
    );
  }
}
