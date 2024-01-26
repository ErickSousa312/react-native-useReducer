import { StatusBar } from 'expo-status-bar';
// import { Modal, StyleSheet, Text, View, Button } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from '@/components/customDrawer';
import { LogBox } from 'react-native';
import React from 'react';
LogBox.ignoreLogs(['Reanimated']);
//suprimir aviso reanimated
// function HomeScreen({ navigation }: any): React.JSX.Element {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button
//         onPress={() => navigation.navigate("Notifications")}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }: any) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawerContent}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'overview1',
            drawerIcon: () => <Ionicons name="home" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="modal copy 2"
          options={{
            drawerLabel: 'Meta Venda',
            drawerPosition: 'left',
            drawerType: 'front',
            drawerIcon: () => <Ionicons name="albums" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        {/* //3 */}
        <Drawer.Screen
          name="modal copy 3"
          options={{
            drawerLabel: 'Meta Vitaminas',
            drawerPosition: 'left',
            drawerType: 'front',
            drawerIcon: () => <Ionicons name="cellular" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        {/* //4 */}
        <Drawer.Screen
          name="modal copy 4"
          options={{
            drawerLabel: 'Nossas Marcas',
            drawerPosition: 'left',
            drawerType: 'front',
            drawerIcon: () => <Ionicons name="compass" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="modal copy 5"
          options={{
            drawerLabel: 'Varejo',
            drawerPosition: 'left',
            drawerType: 'front',
            drawerIcon: () => <Ionicons name="bag-add" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="modal copy 6"
          options={{
            drawerLabel: 'Dermo',
            drawerPosition: 'left',
            drawerType: 'front',
            drawerIcon: () => <Ionicons name="pulse" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="modal copy 7"
          options={{
            drawerLabel: 'Cmv',
            drawerPosition: 'left',
            drawerType: 'front',
            drawerIcon: () => <Ionicons name="shapes" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="modal copy 8"
          options={{
            drawerLabel: 'Pec',
            drawerPosition: 'left',
            drawerType: 'front',
            drawerIcon: () => <Ionicons name="pie-chart" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
