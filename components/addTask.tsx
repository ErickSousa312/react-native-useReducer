import { useState } from 'react';
import { TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { Text, View } from './Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AddTask({ onAddTask }: any) {
  const [text, setText] = useState('');
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingVertical: 10 }]}>
      <TextInput
        style={[styles.input]}
        placeholder="Add task"
        value={text}
        onChangeText={setText}
      />
      <Pressable
        onPress={() => {
          setText('');
          onAddTask(text);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.button,
        ]}
      >
        <Text style={styles.text}>Adicionar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    marginLeft: '1%',
    width: '75%',
    paddingLeft: 14,
    paddingVertical: 8,
    borderRadius: 10,
    margin: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    color: 'white',
    alignSelf: 'center',
    borderRadius: 8,
    padding: 6,
    backgroundColor: '#2196F3',
    marginHorizontal: '2%',
    width: '20%',
    alignItems: 'center',
    paddingVertical: 12,
  },
  text: {
    color: 'white',
  },
});
