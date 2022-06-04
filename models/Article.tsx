export interface ArticleAttributes {
  title?: string;
  body?: string;
  upvote?: number;
  view?: number;
  board?: number;
  user_id?: number;
}

export class ArticleModel implements ArticleAttributes {
  title?: string;
  body?: string;
  upvote?: number;
  view?: number;
  board?: number;
  user_id?: number;

  constructor(params: Partial<ArticleAttributes>) {
    this.title = params.title;
    this.body = params.body;
    this.upvote = params.upvote;
    this.view = params.view;
    this.board = params.board;
    this.user_id = params.user_id;
  }

  factory({
    title,
    body,
    upvote,
    view,
    board,
    user_id,
  }: Partial<ArticleAttributes>) {
    return new ArticleModel({ title, body, upvote, view, board, user_id });
  }

  fromJSON () {
    
  }
}
