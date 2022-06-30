export interface ArticleModel {
  id: number;
  title: string;
  author: string;
  body: string;
  up: number;
  down: number;
  view: number;
  thumbnail: string;
  authorImage: string;
  tags: [string];
  board: string;
  writeTime: Date;
  updateTime: Date;
  comments: number;
  bookmark: number;
}
