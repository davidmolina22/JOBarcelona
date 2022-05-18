export interface Tag {
  name: string;
}

export interface Card {
  title: string;
  description: string;
  tags: Tag[];
}
