import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Button,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { SkiaComponent } from '@/components/echarts/graficEcharts';
import { AxiosGet } from '@/components/axios/axiosGet';
import { TableData } from '@/components/viewsTables/tableData';
import MonthYear from '@/components/formData/monthAndYear';

function ModalScreen() {
  const [option, setData] = useState({});
  const [dataFetch, setDataFetch] = useState();
  const [refreshing, setRefreshing] = useState(true);

  const fetchData = async (ano?: any, mes?: any) => {
    try {
      const response = await AxiosGet('atendimentosPorBairo', {
        mes: mes || '',
        ano: ano || '',
      });
      setDataFetch(response.data);
      setRefreshing(false);

      const arrayString = response.data.map((item: any) => String(item.Bairro));

      setData((prevState) => ({
        ...prevState,
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: 'Distribuição de chamadas dia/noite',
          left: 'center',
          top: 20,
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: 500,
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
              formatter: '{d|{d}%}',
              show: true,
              size: 40,
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
              show: true,
              length: 10,
              length2: 10,
            },
            radius: ['30%', '60%'],
            avoidLabelOverlap: false,
            type: 'pie',
            itemStyle: {
              borderRadius: 8,
            },
            data: response.data.map((item: any) => ({
              name: item.Bairro !== null ? item.Bairro : 'Não informado',
              value: item.Total_Ocorrencias,
            })),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
            top: -490,
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
      <MonthYear fetchData={fetchData} setRefreshing={setRefreshing} />
      <SkiaComponent option={option} height={1000} />
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
