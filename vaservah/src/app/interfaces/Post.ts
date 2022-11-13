export class Post {
    id: number;
    title: string;
    body: string;
    teaserPath: string;

    postPath: string;
    category: string;

    constructor(id: number, title: string, body: string, teaserPath: string, postPath: string, category: string) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.teaserPath = teaserPath;
        this.postPath = postPath;
        this.category = category;
    }
}