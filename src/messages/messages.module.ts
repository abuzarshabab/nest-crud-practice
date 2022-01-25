import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageRepository } from './message.repository';
import { MessageServices } from './messages.services';

@Module({
  controllers: [MessagesController],
  providers: [MessageServices, MessageRepository],
})
export class MessagesModule {}
