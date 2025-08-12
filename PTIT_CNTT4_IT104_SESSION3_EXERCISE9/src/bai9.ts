class Comment {
    public id: number;
    public userId: number;
    public content: string;
    public replies: Comment[];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

    addReply(reply: Comment): void {
        this.replies.push(reply);
    }
}

class Post {
    public id: number;
    public userId: number;
    public content: string;
    public likes: number[];
    public comments: Comment[];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }

    addLike(userId: number): void {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }

    addComment(comment: Comment): void {
        this.comments.push(comment);
    }
}

class User {
    public id: number;
    public posts: Post[];
    public followers: User[];

    constructor(id: number) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }

    createPost(content: string): void {
        let newPost = new Post(this.posts.length + 1, this.id, content);
        this.posts.push(newPost);
    }

    comment(postId: number, commentContent: string): void {
        for (const user of this.followers) {
            for (const post of user.posts) {
                if (post.id === postId) {
                    const newComment = new Comment(post.comments.length + 1, this.id, commentContent);
                    post.addComment(newComment);
                    return;
                }
            }
        }
    }

    follow(user: User): void {
        if (!this.followers.some(f => f.id === user.id)) {
            this.followers.push(user);
        }
    }

    likePost(postId: number): void {
        for (const user of this.followers) {
            for (const post of user.posts) {
                if (post.id === postId) {
                    post.addLike(this.id);
                    return;
                }
            }
        }
    }

    viewFeed(): void {
        console.log(`Thông tin của User ${this.id}:`);
        for (const user of this.followers) {
            for (const post of user.posts) {
                console.log(`Post ${post.id} của User ${user.id}: ${post.content}`);
            }
        }
    }
}

let user1 = new User(1);
let user2 = new User(2);

user1.follow(user2);
user2.createPost("Hello");
user1.likePost(1);
user1.comment(1, "Test");
user1.viewFeed();
