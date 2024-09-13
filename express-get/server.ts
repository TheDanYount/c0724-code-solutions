import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
    select
        "title"
    from
        "films"
    order by "replacementCost" desc
    limit 2;
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.json(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    if (!Number.isInteger(+filmId)) {
      throw new ClientError(400, 'filmId must be an integer');
    }
    const sql = `
    select
        "title"
    from
        "films"
    where "filmId" = $1
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    if (result.rowCount === 0) {
      throw new ClientError(404, `Match to filmId of ${filmId} not found.`);
    }
    const film = result.rows[0];
    res.json(film);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
