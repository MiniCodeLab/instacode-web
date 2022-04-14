export type SnippetAuthor = {
  _id: string;
  username: string;
  email: string;
  password: string;
  emoji: string;
  codes: string[];
  favCodes: string[];
  createdAt: string;
  updatedAt: string;
};

export type Snippet = {
  _id: string;
  title: string;
  code: string;
  language: string;
  description: string;
  author: SnippetAuthor;
  likes: string[];
  createdAt: string;
  updatedAt: string;
};

export type SnippetFormValues = Omit<Snippet, 'author' | '_id' | 'createdAt' | 'likes' | 'updatedAt'>;
