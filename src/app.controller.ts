import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMessageDto } from './messages/dtos/cratate.message.dto';

@Controller('/message')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/list')
  listMessages() {
    return 'You are in listMessage';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return `You are in createMessage()${body.content}`;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return `You are in getMessage() ${id}`;
  }
}
