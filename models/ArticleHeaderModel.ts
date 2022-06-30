/* this header class used only want to show articles regardness of boardKey */

export interface ArticleHeaderModel {
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
