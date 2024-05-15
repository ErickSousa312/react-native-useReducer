import { Action, ReducerType, Taks, Tasks } from '@/@types/forms';
import { initialTasks } from '@/components/takeList';

type teste<T> = { 
  [P in keyof T]?: T[P]
}

export function tasksReducer(tasks: Tasks, action: teste<Action>): Tasks {
  switch (action.type) {
    case 'added': {
      action.id!;
      return [
        ...tasks,
        {
          id: action.id!,
          text: action.text!,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task?.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
