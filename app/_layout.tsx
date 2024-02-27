import { StatusBar } from 'expo-status-bar';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import {
  useNavigation,
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from '@/components/customDrawer';
import { LogBox } from 'react-native';
import React from 'react';
import { useColorScheme } from '@/components/useColorScheme';
LogBox.ignoreLogs(['Reanimated']);

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Drawer
        screenOptions={{
          swipeEdgeWidth: Dimensions.get('screen').width * 0.35,
          headerStyle: {
            borderBottomStartRadius: 15,
            borderBottomEndRadius: 15,
          },
          headerTransparent: true,
          unmountOnBlur: false,
          headerTitleAlign: 'center',
          // headerTintColor: 'black',
          headerShadowVisible: false,
          // headerStatusBarHeight: 10,
          // headerLeftLabelVisible: false,
          // headerPressColor: 'red',
          headerLeftContainerStyle: {
            // backgroundColor: 'red',
            paddingLeft: '0%',
            marginLeft: 7,
            // alignItems: 'center',
            // backgroundColor: 'blue',
          },
          headerRightContainerStyle: {
            paddingRight: '0%',
            alignItems: 'center',
            marginRight: 7,
            // backgroundColor: 'blue',
          },
          headerTitleStyle: {
            // backgroundColor: 'red',
            paddingHorizontal: 0,
            fontSize: 15,
          },
          headerTitleContainerStyle: {
            paddingHorizontal: '0%',
            // backgroundColor: 'blue',
          },
          headerBackgroundContainerStyle: {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderBottomStartRadius: 28,
            borderBottomEndRadius: 28,
            // marginHorizontal: '10%',
          },
          // freezeOnBlur: false,
          // overlayColor: 'red',
          // headerShown: false,
        }}
        drawerContent={CustomDrawerContent}
        initialRouteName="index"
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Atendimentos por Sexo',
            title: 'Atendimentos por Sexo',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="home" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        {/* <Drawer.Screen
          name="TodoList"
          options={{
            drawerLabel: 'To do list',
            title: 'Lista',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="albums" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        /> */}
        {/* //3 */}
        <Drawer.Screen
          name="atendimentoFaixaEtaria"
          options={{
            title: 'Atendimentos por Faixa Etária',
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
            title: 'Atendimentos por Tipo',
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
            title: 'Atendimentos por Veículo',
            drawerLabel: 'atendimento por Veículo',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="bag-add" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="chamadasDiaNoite"
          options={{
            title: 'Chamadas por Dia/Noite',
            drawerLabel: 'chamadas por Dia/Noite',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="pulse" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="(tabsAtendimentosMotivos)"
          options={{
            title: 'Atendimentos por motivo',
            drawerLabel: 'Atendimentos por motivo',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="shapes" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="tempoDeResposta"
          options={{
            title: 'Tempo de Resposta',
            drawerLabel: 'tempo de Resposta',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="pie-chart" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="tempoNoLocal"
          options={{
            title: 'Tempo no local',
            drawerLabel: 'Tempo no Local',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="pie-chart" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="tempoSaidaLocal"
          options={{
            title: 'Tempo Saida do local',
            drawerLabel: 'Tempo Saida do local',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="pie-chart" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="destinoPaciente"
          options={{
            title: 'Destino Pacientes',
            drawerLabel: 'Destino Pacientes',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="pie-chart" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="transferencias"
          options={{
            title: 'Transferencias',
            drawerLabel: 'Transferencias',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="pie-chart" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="obitos"
          options={{
            title: 'obitos',
            drawerLabel: 'Obitos',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="pie-chart" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="bairro"
          options={{
            title: 'Atendimento por Bairros',
            drawerLabel: 'Atendimento por Bairros',
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerIcon: () => <Ionicons name="pie-chart" size={20}></Ionicons>,
            drawerLabelStyle: { marginLeft: -15 },
          }}
        />
        <Drawer.Screen
          name="cancelamentoChamada"
          options={{
            title: 'Motivos de Cancelamento',
            drawerLabel: 'Motivos de Cancelamento',
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
