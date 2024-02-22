import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function ScreenWithButton(screenName: string, navigateTo: string) {
  return function ({ navigation }: any) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>`{screenName} Screen`</Text>
        {navigateTo && (
          <Button
            title={`Go to ${navigateTo}`}
            onPress={() => navigation.navigate(navigateTo)}
          />
        )}
      </View>
    );
  };
}
