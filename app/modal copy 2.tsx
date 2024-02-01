import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { useReducer, useState } from 'react';
import TaskList from '@/components/takeList';
import { tasksReducer } from '@/utils/reducer/TaskReducer';
import { Action } from '@/@types/forms';
import { initialTasks } from '@/components/takeList';
import EditScreenInfo from '@/components/EditScreenInfo';
import AddTask from '@/components/addTask';
import { SafeAreaView } from 'react-native';

import { Text, View } from '@/components/Themed';
import { DispatchType } from '../@types/forms';

export default function Forms() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [idTaks, setIdTaks] = useState<number>(3);
  function handleAddTask(text: string) {
    setIdTaks(idTaks + 1);
    console.log(idTaks + 'oi');
    dispatch({
      type: 'added',
      id: idTaks,
      text: text,
    });
  }

  function handleChangeTask(task: any) {
    console.log(task);
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId: any) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <SafeAreaView>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
