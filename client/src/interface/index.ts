export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isAdmin: boolean;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
}
