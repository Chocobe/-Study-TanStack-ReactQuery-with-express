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
export type TGetTodosApiRequestParams = TApiRequestParams<
  void,
  {
    completed?: boolean;
  }
>;

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

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//
// toggleTodoCompletedApi
//
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
export type TToggleTodoCompletedApiRequestParams = TApiRequestParams<
  {
    id: number;
  }
>;

export type TToggleTodoCompletedApiResponse = TTodoModel;

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//
// postTodoApi
//
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
export type TPostTodoApiRequestParams = TApiRequestParams<void, void, {
  content: string;
}>;

export type TPostTodoApiResponse = TTodoModel;
