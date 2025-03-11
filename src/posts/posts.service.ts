import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async getPosts() {
    const posts = await this.prisma.post.findMany();
    return posts;
  }

  async getPublishedPosts() {
    const posts = await this.prisma.post.findMany({
      where: {
        isPublished: true,
      },
      orderBy: {
        publishedAt: {
          start: 'desc',
        },
      },
    });
    return posts;
  }

  async get5MostRecents() {
    const posts = await this.prisma.post.findMany({
      where: {
        isPublished: true,
      },
      orderBy: {
        publishedAt: {
          start: 'desc',
        },
      },
      take: 5,
    });
    return posts;
  }

  async getPostBySlug(slug: string) {
    const posts = await this.prisma.post.findUnique({
      where: { slug: slug },
    });
    return posts;
  }

  async paginated_getPublishedPosts(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const posts = await this.prisma.post.findMany({
        skip,
        take: limit,
      where: {
        isPublished: true,
      },
      orderBy: {
        publishedAt: {
          start: 'desc',
        },
      },
    });
    return posts;
  }
}
