import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) {}
    @Get()
    findAll() {
        return this.postService.getPosts();
    }

    @Get("/published")
    findAllPublished() {
        return this.postService.getPublishedPosts();
    }
    @Get("/published/recents")
    findRecents() {
        return this.postService.get5MostRecents();
    }

    @Get("/:slug")
    findBySlug(@Param('slug') slug: string) {
        return this.postService.getPostBySlug(slug);
    }
}
