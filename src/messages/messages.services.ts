import { MessageRepository } from './message.repository';

export class MessageServices {
  messageRepo: MessageRepository;
  constructor() {
    // Service is creating it's own dependencies
    // Don't do this on Real App
    this.messageRepo = new MessageRepository();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }
}
