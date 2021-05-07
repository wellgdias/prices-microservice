import priceRepository from '../databases/price-repository';

export default async function getSupermarketSerive(supermarkets: string[]) {
  const prices = await priceRepository.getBySupermarkets(supermarkets);
  return prices;
}
