import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { SkiaComponent } from '@/components/echarts/graficEcharts';
import { AxiosGet } from '@/components/axios/axiosGet';
import { TableData } from '@/components/viewsTables/tableData';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from '@/components/Themed';

function ModalScreen() {
  const [option, setData] = useState({});
  const [dataFetch, setDataFetch] = useState();

  const fetchData = async () => {
    try {
      const response = await AxiosGet('atendimentosSexo');
      setDataFetch(response.data);
      console.log(response.data);
      const totalAtendimentosArray = response.data.map(
        (item: any) => item.Total_Ocorrencias,
      );
      const arrayString = response.data.map((item: any) =>
        String(item.Total_Ocorrencias),
      );

      console.log(arrayString);
      const labelVeiculos = response.data.map((item: any) => item.SexoDS);

      setData((prevState) => ({
        ...prevState,
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: 'Atendimentos por Sexo',
          left: 'center',
          top: '1%',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          bottom: '1%',
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
    <ScrollView style={styles.container}>
      <View style={styles.button}>
        <Icon
          name="reload"
          size={30}
          color="white"
          onPress={fetchData}
          style={{ paddingHorizontal: 10, paddingVertical: 10 }}
        />
      </View>
      <SkiaComponent option={option} />
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
  button: {
    backgroundColor: '#100C2A',
    marginLeft: 2,
    alignSelf: 'flex-end',
  },
});
export default gestureHandlerRootHOC(ModalScreen);
