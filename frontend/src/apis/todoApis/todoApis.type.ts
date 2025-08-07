import { TApiRequestParams } from '../apiClient.type';

export type TTodoModel = {
  id: number;
  content: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//
// getTodosApi
//
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
export type TGetTodosApiResponse = TTodoModel[];

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//
// patchTodoContentApi
//
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
export type TPatchTodoContentApiRequestParams = TApiRequestParams<
  { 
    id: number;
  },
  void,
  { 
    content: string;
  }
>;

export type TPatchTodoContentApiResponse = TTodoModel;
