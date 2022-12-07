import fetch from 'node-fetch';
//import axios from 'axios';

async function getData(tradable = true) {
  const url = 'https://api.skinport.com/v1/items/?' + new URLSearchParams({ tradable });
  console.log('start');
  return await (await fetch(url)).json();
  //return await (
  //await axios.get(url)
  //).data;
}
async function start() {
  const [tradable, untradable] = await Promise.all([getData(), getData(false)]);
  console.log(tradable.length, untradable.length);
  const result = tradable.map((element, index) => {
    return { ...element, untradablePrice: untradable[index].min_price };
  });
  console.log(result[20457]);
}
start();
