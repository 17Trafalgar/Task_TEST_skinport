function findPrice(Array) {
  let result = {
    tradable: [],
    otherPrice: [],
  };
  for (const value of Object.values(array)) {
    if (value.min_price == null) {
      result.otherPrice.push(value.min_price);
    } else {
      result.tradable.push(value.min_price);
    }
  }
  return result;
}
const array = [
  {
    market_hash_name: "AK-47 | Aquamarine Revenge (Battle-Scarred)",
    currency: "EUR",
    suggested_price: 13.18,
    item_page:
      "https://skinport.com/item/csgo/ak-47-aquamarine-revenge-battle-scarred",
    market_page:
      "https://skinport.com/market/730?cat=Rifle&item=Aquamarine+Revenge",
    min_price: 11.33,
    max_price: 18.22,
    mean_price: 12.58,
    quantity: 25,
    created_at: 15359825А3,
    updated_at: 1568073728,
  },
  {
    market_hash_name: "★ M9 Bayonet | Fade (Factory New)",
    currency: "EUR",
    suggested_price: 319.11,
    item_page: "https://skinport.com/item/csgo/m9-bayonet-fade-factory-new",
    market_page: "https://skinport.com/market/730?cat=Knife&item=Fade",
    min_price: null,
    max_price: null,
    mean_price: null,
    quantity: 0,
    created_at: 1535988302,
    updated_at: 1568073725,
  },
];
console.log(findPrice(Array));
