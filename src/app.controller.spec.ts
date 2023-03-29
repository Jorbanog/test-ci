import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'postgres_test',
          port: 5432,
          username: 'test-ppm-requests',
          password: '1234',
          database: 'test-ppm-requests',
          entities: [User],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User]),
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
      expect(appService).toBeDefined();
    });
  });

  describe('test', () => {
    it('should be testtt', async () => {
      await appController.create();
    });
    it('kek', async () => {
      await appController.create();
      const users = await appController.find();
      console.log(users.length);
      expect(users.length).toBeGreaterThan(2);
    });
  });
});
