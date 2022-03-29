export type User = {
  _id: string;
  email: string;
  emoji: string;
  username: string;
  codes?: string[];
  favCodes?: string[];
};

export type UserData = {
  token: string | null;
  user: User | null;
};
