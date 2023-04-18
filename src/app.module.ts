import { GatewayModule } from './chat/gateway/gateway.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './user/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ghaith:415149152546240@cluster0.7pd9lsh.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
    AuthModule,
    GatewayModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
