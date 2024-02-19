import { FlatList, SafeAreaView, View, Text, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
function Item(props: any) {
  console.log(props);
  return (
    <View style={styles.item}>
      <View style={styles.item2}>
        <Text style={styles.title1}>
          {props.title !== null ? props.title : 'Não informado'}
        </Text>
      </View>
      <Text style={styles.div}>|</Text>
      <View style={styles.item2}>
        <Text style={styles.title2}>{props.other}</Text>
      </View>
    </View>
  );
}

export function TableData(props: any) {
  console.log(props);
  return (
    <FlatList
      style={styles.flatList}
      data={props.dados}
      renderItem={({ item }: any) => (
        <Item
          title={item[Object.keys(item)[0]]}
          other={item[Object.keys(item)[1]]}
        />
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (StatusBar.currentHeight || 0) + 500,
  },
  flatList: {
    marginTop: (StatusBar.currentHeight || 0) + 20,
    marginHorizontal: '6%',
  },
  item: {
    backgroundColor: 'rgb(205 205 215)',
    padding: 5,
    marginVertical: '3%',
    marginHorizontal: '5%',
    borderRadius: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize: 22,
  },
  item2: {
    alignItems: 'center',
    width: '49%',
  },
  title1: {
    display: 'flex',
    flex: 1,
    fontSize: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title2: {
    display: 'flex',
    flex: 1,
    fontSize: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  div: {
    width: '1.5%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  //   div: {
  //     width: '20%',
  //     paddingVertical: 6,
  //     paddingHorizontal: 6,
  //     marginVertical: 2,
  //     borderRadius: 50,
  //   },
});
// <table>
//   <thead>
//     <tr>
//       <th>Sexo</th>
//       <th>Total de Atendimentos</th>
//     </tr>
//   </thead>
//   <tbody>
//     {props.dados?.map((item: any, index: any) => (
//       <tr key={index}>
//         <td>{item.SexoDS || 'Não_informado'}</td>
//         <td>{item.Total_Ocorrencias}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>
