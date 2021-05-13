import priceRepository from '../databases/price-repository';

export default async function getPricesService(supermarkets: string[]) {
  const prices = await priceRepository.getPricesBySupermarkets(supermarkets);
  return prices;
}
