import { ReducerState, useState } from 'react';
import { Taks, Tasks } from '@/@types/forms';
import { TextInput, Button, FlatList, Text, SafeAreaView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { View } from './Themed';

type props = {
  tasks: Tasks;
  onChangeTask: any;
  onDeleteTask: any;
};

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: props) {
  return (
    <SafeAreaView>
      {tasks.map((task) => (
        <View key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </View>
      ))}
    </SafeAreaView>
  );
}

function Task({ index, task, onChange, onDelete }: any) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  isEditing;
  if (isEditing) {
    taskContent = (
      <>
        <TextInput
          value={task.text}
          onChangeText={(text) => {
            task;
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
        <Text>{task.text}</Text>
        <Button title="Edit" onPress={() => setIsEditing(true)}></Button>
      </>
    );
  }
  return (
    <>
      <View>{taskContent}</View>
      <Button title="Delete" onPress={() => onDelete(task.id)}></Button>
    </>
  );
}

export const initialTasks: Tasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false },
];
