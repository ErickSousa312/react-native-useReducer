import { ReducerState, useState } from 'react';
import { Taks, Tasks } from '@/@types/forms';
import { TextInput, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type props = {
  tasks: Tasks;
  onChangeTask: any;
  onDeleteTask: any;
};

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: props) {
  return (
    <>
      {tasks.map((task: any) => (
        <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
      ))}
    </>
  );
}

function Task({ task, onChange, onDelete }: any) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <TextInput
          value={task.text}
          onChange={(text) => {
            onChange({
              ...task,
              text: text,
            });
          }}
        />
        <Button title="Save" onPress={() => setIsEditing(false)}></Button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <Button title="Edit" onPress={() => setIsEditing(true)}></Button>
      </>
    );
  }
  return (
    <>
      <Button title="Delete" onPress={() => onDelete(task.id)}></Button>
    </>
  );
}

export const initialTasks: Tasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false },
];
