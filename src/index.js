//import fetch from 'node-fetch';
import axios from 'axios';

async function getData(tradable = true) {
  const url = 'https://api.skinport.com/v1/items/?' + new URLSearchParams({ tradable });
  console.log('start');
  //const response = await (await fetch(url)).json();
  // const response = await axios.get(url);
  //console.log(response);
  return await (
    await axios.get(url)
  ).data;
}
async function start() {
  const [tradable, untradable] = await Promise.all([getData(), getData(false)]);
  console.log(tradable.length, untradable.length);
  //console.log(await getData());
  //console.log(await getData(false));
  const result = tradable.map((element, index) => {
    return { ...element, untradablePrice: untradable[index].min_price };
  });
  console.log(result[3]);
}
start();
//const [tradable, untradable] = Promise.all([getData(), getData(false)]);
//console.log(tradable.data.length, untradable.data.length);
