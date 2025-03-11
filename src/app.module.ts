import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [PostsModule, ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService, PrismaService],
})
export class AppModule {}
