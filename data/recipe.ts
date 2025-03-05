export interface Recipe {
  id: number;
  author: string;
  email: string;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  imageUrl: string;
  dateCreated: string;
  isFavorite: boolean;
}