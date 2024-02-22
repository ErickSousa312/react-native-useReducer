import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { SkiaComponent } from '@/components/echarts/graficEcharts';
import { AxiosGet } from '@/components/axios/axiosGet';
import { TableData } from '@/components/viewsTables/tableData2';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from '@/components/Themed';

function ModalScreen() {
  const [option, setData] = useState({});
  const [dataFetch, setDataFetch] = useState();

  const fetchData = async () => {
    try {
      const response = await AxiosGet(
        'atendimentoMotivosOcorrencia',
        'PSIQUIÁTRICO',
      );
      setDataFetch(response.data);

      const arrayString = response.data.map((item: any) =>
        String(item.MotivoDS),
      );

      setData((prevState) => ({
        ...prevState,
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: 'Atendimentos Psiquiátricos',
          left: 'center',
          top: 0,
        },
        tooltip: {
          trigger: 'item',
          left: 'right',
        },
        legend: {
          top: 420,
          Data: arrayString,
        },
        grid: {
          top: '0%',
          left: '0%',
          right: '0%',
          bottom: '20%',
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
                  marginLeft: 1,
                },
              },
            },
            labelLine: {
              show: true,
              length: 1,
              length2: 10,
            },
            avoidLabelOverlap: false,
            type: 'pie',
            itemStyle: {
              borderRadius: 0,
            },
            data: response.data.map((item: any) => ({
              name: item.MotivoDS !== null ? item.MotivoDS : 'Não informado',
              value: item.Total_Ocorrencias,
            })),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
            radius: ['40%', '60%'],
            // clockwise: false,
            // startAngle: 360,
            // endAngle: 180,
            minAngle: 5,
            padAngle: 0,
            minShowLabelAngle: 0,
            bottom: 1,
            top: 0,
            left: '0%',
            right: '0%',
            width: '100%',
            height: '65%',
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
      <SkiaComponent option={option} width={0} height={680} />
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
