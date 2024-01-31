export type Action = {
  task?: {
    id: number;
    text: string;
    done: boolean;
    task: string;
  };
  type: string;
  id: number;
  text: string;
  done?: boolean;
};

export type Taks = Omit<Action, 'task' | 'type'>;

export type Tasks = Taks[];

export type ReducerType = {
  tasks: Taks[];
  action: Action;
};
export type DispatchType = (args: Action) => Action;
