import { Router } from 'express';
import healthCheckRouter from './health-check';
import pricesRouter from './prices';

export default Router().use(healthCheckRouter).use(pricesRouter);
