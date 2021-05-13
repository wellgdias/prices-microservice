import getPricesService from '../../services/get-prices-service';

export default async function getPrices(supermarkets: string[]) {
  const prices = await getPricesService(supermarkets);
  return prices;
}
