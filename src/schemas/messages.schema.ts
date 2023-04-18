import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Message extends Document {
  @Prop({ nullable: true })
  conversation_id: string;

  @Prop({ default: true })
  status: boolean;

  @Prop({ required: true, length: 255 })
  message: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
