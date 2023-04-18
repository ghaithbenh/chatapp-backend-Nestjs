import { Module } from '@nestjs/common';
import { MessageService } from './messages.service';
import { MessageController } from './messages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from 'src/schemas/messages.schema';
import { MessageGateway } from '../gateway/message.gateway';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: 'Message',
          schema: MessageSchema,
        },
      ],
      'chat',
    ),
  ],
  controllers: [MessageController],
  providers: [MessageService, MessageGateway],
})
export class MessageModule {}
