import { Router } from 'express';
import getPrices from '../business/rules/get-prices';

const pricesRouter = Router();
pricesRouter.get('/v1/prices', async (req, res, next) => {
  try {
    const { data: supermarkets } = req.body;
    const response = await getPrices(supermarkets);
    res.status(200).json(response);
    return next();
  } catch (error) {
    return next(error);
  }
});

export default pricesRouter;
