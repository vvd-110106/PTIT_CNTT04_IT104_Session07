class Comment {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
class Post {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }
    addLike(userId) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class User {
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content) {
        let newPost = new Post(this.posts.length + 1, this.id, content);
        this.posts.push(newPost);
    }
    comment(postId, commentContent) {
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
    follow(user) {
        if (!this.followers.some(f => f.id === user.id)) {
            this.followers.push(user);
        }
    }
    likePost(postId) {
        for (const user of this.followers) {
            for (const post of user.posts) {
                if (post.id === postId) {
                    post.addLike(this.id);
                    return;
                }
            }
        }
    }
    viewFeed() {
        console.log(`Thông tin của User ${this.id}:`);
        for (const user of this.followers) {
            for (const post of user.posts) {
                console.log(`Post ${post.id} của User ${user.id}: ${post.content}`);
            }
        }
    }
}
// Test
let user1 = new User(1);
let user2 = new User(2);
user1.follow(user2);
user2.createPost("Hello");
user1.likePost(1);
user1.comment(1, "Test");
user1.viewFeed();
