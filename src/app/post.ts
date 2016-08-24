/* Defines the product entity */
export interface iPost {
    _id: any;
    title: string;
    body: string;
    pre: string;
    source: string;
}

export class Post implements iPost {
    _id: any;
    title: string;
    body: string;
    pre: string;
    source: string;

}
