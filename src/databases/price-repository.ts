/* eslint-disable no-underscore-dangle */
import { ServiceError } from '../business/errors';
import MongoHelper from '../helpers/mongodb/mongodb';

async function getPricesBySupermarkets(supermarkets: string[]) {
  try {
    const pricesCollection = await MongoHelper.getCollection('prices');
    const response = await pricesCollection.find({ id_supermarket: { $in: supermarkets } }).toArray();

    if (!response.length) {
      return { data: [] };
    }

    const prices = response.map((price) => ({
      ...price,
      _id: price._id.toString(),
      price: parseFloat(price.price),
      date: new Date(price.date).toISOString().split('T')[0],
    }));

    return { data: prices };
  } catch (error) {
    throw new ServiceError(error);
  }
}

export default { getPricesBySupermarkets };
