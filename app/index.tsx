import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Button,
  RefreshControl,
  ActivityIndicator,
  Dimensions,
  TextInput,
  Pressable,
  Text,
} from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { SkiaComponent } from '@/components/echarts/graficEcharts';
import { AxiosGet } from '@/components/axios/axiosGet';
import { TableData } from '@/components/viewsTables/tableData';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from '@/components/Themed';
import { useNavigation } from '@react-navigation/native';
import { ExternalLink } from '../components/ExternalLink';
import Color from 'color';

function ModalScreen() {
  const [option, setData] = useState({});
  const [dataFetch, setDataFetch] = useState();
  const [refreshing, setRefreshing] = useState(true);
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      const response = await AxiosGet('atendimentosSexo', {
        mes: mes,
        ano: ano,
      });
      setRefreshing(false);
      setDataFetch(response.data);
      const totalAtendimentosArray = response.data.map(
        (item: any) => item.Total_Ocorrencias,
      );
      const arrayString = response.data.map((item: any) =>
        String(item.Total_Ocorrencias),
      );

      const labelVeiculos = response.data.map((item: any) => item.SexoDS);

      setData((prevState) => ({
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        // title: {
        //   text: 'Atendimentos por Sexo',
        //   left: 'center',
        //   top: '1%',
        // },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          bottom: 0,
          left: 'center',
          Data: arrayString,
        },
        grid: {
          top: '0%',
          left: '0%',
          right: '0%',
          bottom: '0%',
          containLabel: true,
        },
        series: [
          {
            label: {
              formatter: '{d|%{d}}',
              show: true,
              position: 'inside',
              size: 40,
              length: 200,
              lineHeight: 56,
              rich: {
                d: {
                  color: '#4C5058',
                  padding: [10, 10, 10, 10],
                  fontSize: 14,
                  fontWeight: 'bold',
                  lineHeight: 33,
                  marginLeft: 100,
                },
              },
            },
            labelLine: {
              show: false,
            },
            radius: ['30%', '60%'],
            avoidLabelOverlap: false,
            type: 'pie',
            itemStyle: {
              borderRadius: 8,
            },
            data: response.data.map((item: any) => ({
              name: item.SexoDS !== null ? item.SexoDS : 'Não informado',
              value: item.Total_Ocorrencias,
            })),
            top: -40,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={fetchData}
          progressViewOffset={60}
        />
      }
    >
      <View style={styles.container2}>
        <TextInput
          style={[styles.input]}
          placeholder="Selecione o Mês"
          value={mes}
          onChangeText={setMes}
          cursorColor={'red'}
          maxLength={2}
          keyboardType="numeric"
          placeholderTextColor="white"
        />
        <TextInput
          style={[styles.input2]}
          placeholder="Selecione o Ano"
          value={ano}
          onChangeText={setAno}
          cursorColor={'red'}
          maxLength={4}
          keyboardType="numeric"
          placeholderTextColor="white"
        />
        <Pressable
          onPress={() => {
            setRefreshing(true);
            fetchData();
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#5cacf7' : '#2196F3',
            },
            styles.button,
          ]}
        >
          <Text style={{ color: 'white' }}>Pesquisar</Text>
        </Pressable>
      </View>
      <SkiaComponent option={option} height={350} />
      <TableData dados={dataFetch}></TableData>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100C2A',
    width: 'auto',
  },
  container2: {
    flex: 1,
    backgroundColor: '#100C2A',
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 90,
    paddingVertical: 8,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 1,
    borderColor: 'black',
    marginLeft: 7,
  },
  input: {
    marginLeft: '1%',
    width: 140,
    paddingLeft: 14,
    paddingVertical: 8,
    borderRadius: 10,
    margin: 1,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 100,
    color: 'white',
  },
  input2: {
    marginLeft: '1%',
    width: 140,
    paddingLeft: 14,
    paddingVertical: 8,
    borderRadius: 10,
    margin: 1,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 100,
    color: 'white',
  },
});
export default gestureHandlerRootHOC(ModalScreen);
