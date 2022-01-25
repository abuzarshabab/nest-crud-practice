import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessageServices } from './messages.services';
import { CreateMessageDto } from './dtos/cratate.message.dto';

@Controller('messages')
export class MessagesController {
  constructor(public appService: MessageServices) {}

  @Get()
  getHello(): string {
    return 'Hello Dear one';
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
