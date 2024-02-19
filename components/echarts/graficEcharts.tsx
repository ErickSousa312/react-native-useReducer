import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { SVGRenderer, SkiaChart, SvgChart } from '@wuba/react-native-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import axios from 'axios';
import Color from 'color';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  ToolboxComponent,
  LegendComponent,
} from 'echarts/components';

// register extensions
echarts.use([
  LegendComponent,
  ToolboxComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  SVGRenderer,
  DataZoomComponent,
  // ...
  BarChart,
  LineChart,
  PieChart,
]);

export function SkiaComponent({
  option,
  width,
  height,
}: {
  option: any;
  width?: number;
  height?: number;
}) {
  console.log(option);
  const E_HEIGHT = height !== undefined ? height | 0 : 520;
  const E_WIDTH =
    Dimensions.get('screen').width + (width !== undefined ? width | 0 : 0);
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

  return <SkiaChart style={{ marginLeft: 0, width: 'auto' }} ref={skiaRef} />;
}
