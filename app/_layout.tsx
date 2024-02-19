import { StatusBar } from 'expo-status-bar';
// import { Modal, StyleSheet, Text, View, Button } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from '@/components/customDrawer';
import { LogBox } from 'react-native';
import React from 'react';
LogBox.ignoreLogs(['Reanimated']);

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawerContent}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Dashboard',
            title: 'Dashboard',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="home" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="TodoList"
          options={{
            drawerLabel: 'Meta Venda',
            title: 'Lista',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="albums" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        {/* //3 */}
        <Drawer.Screen
          name="atendimentoFaixaEtaria"
          options={{
            title: 'Dashboard',
            drawerLabel: 'Atendimentos por Faixa Etária',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="cellular" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        {/* //4 */}
        <Drawer.Screen
          name="atendimentoTipoOcorrencia"
          options={{
            title: 'Dashboard',
            drawerLabel: 'Atendimentos por Tipo',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="compass" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="atendimentoVeiculo"
          options={{
            drawerLabel: 'atendimento por Veiculo',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="bag-add" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="modal copy 6"
          options={{
            drawerLabel: 'Dermo',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="pulse" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="modal copy 7"
          options={{
            drawerLabel: 'Cmv',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="shapes" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="modal copy 8"
          options={{
            drawerLabel: 'Pec',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="pie-chart" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
