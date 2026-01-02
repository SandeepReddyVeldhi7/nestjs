import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';

@Module({
  import :[MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  exports: [UserService],
  providers: [UserService],
})
export class UserModule {}
