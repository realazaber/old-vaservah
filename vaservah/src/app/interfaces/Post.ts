export class Post {
    id: number;
    title: string;
    body: string;
    excerpt: string;
    teaserPath: string;

    postPath: string;
    wpPostPath: string;
    category: string;

    constructor(id: number, title: string, body: string, teaserPath: string, postPath: string, wpPostPath: string) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.excerpt = body.substring(0, 50);
        this.teaserPath = teaserPath;
        this.postPath = postPath;
        this.wpPostPath = wpPostPath;

        const splitWpPath: string[] = this.wpPostPath.split("/");
        this.category = splitWpPath[splitWpPath.length - 3];

        console.log(this.wpPostPath.split("/"));
    }
}