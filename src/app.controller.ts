import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(@Res() res) {
    // Redirect to the API documentation
    return res.status(302).redirect('/api');
  }
}
