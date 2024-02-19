import axios, { AxiosResponse } from 'axios';

export async function AxiosGet(rota: string, query?: any): Promise<any> {
  return new Promise(async (resolver, reject) => {
    console.log(query);
    try {
      const data: AxiosResponse<any> = await axios.get(
        `http://192.168.100.133:3000/api/v1/${rota}?nameTipo=${query}`,
      );
      console.log(data);
      resolver(data);
    } catch (err) {
      reject({ error: err });
    }
  });
}
