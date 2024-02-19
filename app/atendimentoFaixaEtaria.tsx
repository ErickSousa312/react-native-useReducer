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
      const response = await AxiosGet('atendimentoFaixaEtaria');
      setDataFetch(response.data);
      console.log(response.data);

      const arrayString = response.data.map((item: any) => String(item.TipoDS));

      setData((prevState) => ({
        ...prevState,
        title: {
          text: 'Atendimentos por Faixa Etária',
          left: 'center',
          top: '0%',
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
          left: '10%',
          right: '10%',
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
                  fontSize: 14,
                  fontWeight: 'bold',
                  lineHeight: 33,
                  marginLeft: 0,
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
              name:
                item.faixa_etaria !== null
                  ? item.faixa_etaria
                  : 'Não informado',
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
