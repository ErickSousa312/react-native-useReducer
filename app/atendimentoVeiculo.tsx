import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Button, Dimensions } from 'react-native';
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
      const response = await AxiosGet('atendimentoVeiculo');
      setDataFetch(response.data);

      const arrayString = response.data.map((item: any) =>
        String(item.VeiculoDS),
      );

      setData((prevState) => ({
        ...prevState,
        with: 500,
        title: {
          text: 'Atendimentos por Veiculo',
          left: 'center',
          top: '0%',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          bottom: '',
          left: 'center',
          Data: arrayString,
        },
        grid: {
          top: '7%',
          left: '0%',
          right: '0%',
          bottom: '0%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.12],
          axisLabel: { interval: 0, rotate: 0 },
          with: '100',
        },
        yAxis: {
          type: 'category',
          data: arrayString,
        },
        series: [
          {
            label: {
              formatter: '{d|{c}}',
              show: true,
              position: 'right',
              size: 40,
              lineHeight: 56,
              rich: {
                d: {
                  color: 'white',
                  fontSize: 14,
                  fontWeight: 'bold',
                  lineHeight: 33,
                  marginLeft: 0,
                },
              },
            },
            labelLine: {
              show: false,
              length: 10,
            },
            barWidth: '10%',
            roseType: 'area',
            avoidLabelOverlap: false,
            type: 'bar',
            itemStyle: {
              borderRadius: 8,
              with: '100%',
            },
            data: response.data.map((item: any) => ({
              name: item.VeiculoDS !== null ? item.VeiculoDS : 'Não informado',
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
    <ScrollView horizontal={false} style={styles.container}>
      <View style={styles.button}>
        <Icon
          name="reload"
          size={30}
          color="white"
          onPress={fetchData}
          style={{ paddingHorizontal: 4, paddingVertical: 4 }}
        />
      </View>
      <SkiaComponent option={option} width={-20} height={800} />
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
