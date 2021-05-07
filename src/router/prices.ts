import { Router } from 'express';
import getPrices from '../business/rules/get-prices';

const pricesRouter = Router();
pricesRouter.get('/v1/prices', async (req, res, next) => {
  try {
    const idSupermarkets = req.body;
    const response = await getPrices(idSupermarkets);
    res.status(200).json(response);
    return next();
  } catch (error) {
    return next(error);
  }
});

export default pricesRouter;
