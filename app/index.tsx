import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { SVGRenderer, SkiaChart, SvgChart } from '@wuba/react-native-echarts';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import axios from 'axios';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from 'echarts/components';

// register extensions
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  SVGRenderer,
  // ...
  BarChart,
]);

const E_HEIGHT = 320;
const E_WIDTH = Dimensions.get('screen').width + 15;

function SkiaComponent({ option }: any) {
  const skiaRef = useRef<any>(null);

  useEffect(() => {
    let chart: any;
    if (skiaRef.current) {
      // @ts-ignore
      chart = echarts.init(skiaRef.current, 'dark', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT,
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, [option]);

  return <SkiaChart style={{ marginLeft: 12 }} ref={skiaRef} />;
}

function SvgComponent({ option }: any) {
  const svgRef = useRef<any>(null);

  useEffect(() => {
    let chart: any;
    if (svgRef.current) {
      // @ts-ignore
      chart = echarts.init(svgRef.current, 'dark', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT,
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, [option]);

  return <SvgChart style={{ marginLeft: 29 }} ref={svgRef} useRNGH />;
}

function ModalScreen() {
  const [option, setData] = useState({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [100, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  });

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.100.133:3000/hello');

      response.data.forEach((item: any) => {
        item.VeiculoDS = item.VeiculoDS.replace(/\s/g, '');
        item.VeiculoDS = item.VeiculoDS.replace(/01(?!\d)/g, '1');
        item.VeiculoDS = item.VeiculoDS.replace(/02(?!\d)/g, '2');
        const hyphenIndex = item.VeiculoDS.indexOf('-');
        if (hyphenIndex !== -1) {
          const secondHyphenIndex = item.VeiculoDS.indexOf(
            '-',
            hyphenIndex + 1,
          );
          if (secondHyphenIndex !== -1) {
            const firstPart = item.VeiculoDS.slice(0, secondHyphenIndex).trim();
            item.VeiculoDS = firstPart;
          }
        }
        item.VeiculoDS = item.VeiculoDS.replace('MARABA', 'MAB');
        item.VeiculoDS = item.VeiculoDS.replace(/-{2,}/g, '-');
      });
      console.log(response.data);
      const totalAtendimentosArray = response.data.map(
        (item: any) => item.total_atendimentos,
      );
      const labelVeiculos = response.data.map((item: any) => item.VeiculoDS);

      setData((prevState) => ({
        ...prevState,
        xAxis: {
          type: 'category',
          data: labelVeiculos,
          yAxis: {
            type: 'value',
          },
        },
        series: [
          {
            data: totalAtendimentosArray,
            type: 'bar',
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
    <View style={styles.container}>
      <SkiaComponent option={option} />
      <SvgComponent option={option} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#100C2A',
  },
});
export default gestureHandlerRootHOC(ModalScreen);
