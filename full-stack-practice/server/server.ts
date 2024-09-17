import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!Number.isInteger(+productId))
      throw new ClientError(400, 'productId must be an integer');
    const sql = `
      select *
      from "products"
      where "productId" = $1
    `;
    const product = await db.query(sql, [productId]);
    if (!product.rows[0])
      throw new ClientError(
        404,
        `Product with productId of ${productId} not found`
      );
    res.json(product.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      select *
      from "products"
    `;
    const products = await db.query(sql);
    if (!products.rows[0]) throw new ClientError(404, `Products not found`);
    console.log(products.rows);
    res.json(products.rows);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
