export type TTodoModel = {
  id: number;
  content: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
};

export type TGetTodosApiResponse = TTodoModel[];
