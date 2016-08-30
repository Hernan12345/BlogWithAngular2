/* Defines the product entity */
export interface iPost {
    id: string;
    title: string;
    summary: string;
    pre: string;
    source: string;
}

export class Post implements iPost {
    id: string;
    title: string;
    summary: string;
    pre: string;
    source: string;

}
