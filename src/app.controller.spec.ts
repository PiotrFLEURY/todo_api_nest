import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return 302 redirection to /api', () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        redirect: jest.fn().mockReturnThis(),
      };
      const result = appController.getHome(res);
      expect(res.status).toBeCalledWith(302);
      expect(result.redirect).toBeCalledWith('/api');
    });
  });
});
