import AsyncStorage from '@react-native-async-storage/async-storage';

const Network = async (url, method, body) => {
  const token = await AsyncStorage.getItem('token');
  console.log('fetch', url, method);

  return fetch(
    `http://192.168.0.10:3000/api/${url}${
      token ? `?access_token=${token}` : ''
    }`,
    {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : null,
    },
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log('NETWOTKSERVICE', error);
      return error;
    });
};
export default Network;
