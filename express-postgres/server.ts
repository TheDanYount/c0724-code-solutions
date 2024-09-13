import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select
        "filmID",
        "title",
      from "films";
      order by "replacementCost" desc
    `;
    const result = await db.query(sql);
    const actors = result.rows;
    res.send(actors);
  } catch (err) {
    next(err);
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
      select
        "filmId",
        "title"
      from "films"
      where "filmId" = $1;
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    const actors = result.rows;
    res.send(actors);
  } catch (err) {
    next(err);
  }
});

app.put('/api/film', async (req, res, next) => {
  try {
    const { filmId, title } = req.query;
    const sql = `
      update
        "films"
      set
        "title" = $2
      where "filmId" = $1
    `;
    const params = [filmId, title];
    const result = await db.query(sql, params);
    const actors = result.rows;
    res.send(actors);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
