import getSupermarketSerive from '../../services/get-prices-service';

export default async function getPrices(supermarkets: string[]) {
  const prices = await getSupermarketSerive(supermarkets);
  return prices;
}
