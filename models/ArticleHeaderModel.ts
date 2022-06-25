/* this header class used only want to show articles regardness of boardKey */

export interface ArticleHeaderAttributes {
  id: number;
  title: string;
  author: string;
  summary: string;
  up: number;
  down: number;
  view: number;
  thumbnail: string;
  authorImage: string;
  tags: [string];
  board: string;
  writeTime: Date;
  comments: number;
  bookmark: number;
}

export class ArticleHeaderModel implements ArticleHeaderAttributes {
  id: number;
  title: string;
  author: string;
  summary: string;
  up: number;
  down: number;
  view: number;
  thumbnail: string;
  authorImage: string;
  writeTime: Date;
  board: string;
  tags: [string];
  comments: number;
  bookmark: number;

  constructor(params: Partial<ArticleHeaderAttributes>) {
    this.id = params.id!;
    this.title = params.title!;
    this.author = params.author!;
    this.summary = params.summary!;
    this.up = params.up!;
    this.down = params.down!;
    this.view = params.view!;
    this.thumbnail = params.thumbnail!;
    this.authorImage = params.authorImage!;
    this.tags = params.tags!;
    this.board = params.board!;
    this.writeTime = params.writeTime!;
    this.comments = params.comments!;
    this.bookmark = params.bookmark!;
  }

  static factory({
    id,
    title,
    author,
    summary,
    up,
    down,
    view,
    thumbnail,
    authorImage,
    board,
    tags,
    writeTime,
    comments,
    bookmark,
  }: Partial<ArticleHeaderAttributes>) {
    return new ArticleHeaderModel({
      id,
      title,
      author,
      summary,
      up,
      down,
      view,
      thumbnail,
      authorImage,
      board,
      tags,
      writeTime,
      comments,
      bookmark,
    });
  }

  fromJSON() {}
}
