export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isAdmin: boolean;
}

export interface Book {
  id: string;
  name: string;
  author: string;
  image: string;
  genre?: string;
  url?: "string";
  description: string;
}
