/* eslint-disable */
import { Controller, Get } from '@nestjs/common';
import { SignUpInterface } from './interface/sign-up-interface';
@Controller('user')
export class UserController {
  @Get('saveUser')
  saveUser(): SignUpInterface {
    return {
      Username: 'test',
      Password: 'test',
      repeatPassword: 'test',
    };
  }
}
