import { useState } from 'react';
import { TextInput, Button } from 'react-native';
import { Text } from './Themed';

export default function AddTask({ onAddTask }: any) {
  const [text, setText] = useState('');
  return (
    <>
      <TextInput placeholder="Add task" value={text} onChangeText={setText} />
      <Button
        title="Add"
        onPress={() => {
          setText('');
          onAddTask(text);
        }}
      ></Button>
    </>
  );
}
