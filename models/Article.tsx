export interface ArticleAttributes {
  id: number;
  title: string;
  author: string;
  summary: string;
  up: number;
  down: number;
  view: number;
}

export class ArticleModel implements ArticleAttributes {
  id: number;
  title: string;
  author: string;
  summary: string;
  up: number;
  down: number;
  view: number;

  constructor(params: Partial<ArticleAttributes>) {
  this.id= params.id!;
  this.title= params.title!;
  this.author= params.author!;
  this.summary= params.summary!;
  this.up= params.up!;
  this.down= params.down!;
  this.view= params.view!;
  }

  factory({  id,
  title,
  author,
  summary,
  up,
  down,
  view,
  }: Partial<ArticleAttributes>) {
    return new ArticleModel({  id,
  title,
  author,
  summary,
  up,
  down,
  view, });
  }

  fromJSON () {
    
  }
}
