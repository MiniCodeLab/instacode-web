export type Snippet = {
  _id: string;
  title: string;
  code: string;
  language: string;
  description: string;
  author: {
    id: string;
    username: string;
  };
  // likes: [];
};

export type SnippetFormValues = Omit<Snippet, 'author' | '_id'>;
