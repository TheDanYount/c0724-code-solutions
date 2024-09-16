import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: { rejectUnauthorized: false },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades";
    `;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId))
      throw new ClientError(400, 'gradeId must be an integer');
    const sql = `
    select *
    from "grades"
    where "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    if (!result.rows[0])
      throw new ClientError(404, `gradeId ${gradeId} not found`);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name) throw new ClientError(400, "request must include a 'name'");
    if (!course) throw new ClientError(400, "request must include a 'course'");
    if (!score) throw new ClientError(400, "request must include a 'score'");
    if (!Number.isInteger(+score))
      throw new ClientError(400, 'score must be an integer');
    if (+score > 100 || +score < 0)
      throw new ClientError(400, 'score must be 0-100');
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
    `;
    const result = await db.query(sql, [name, course, score]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId))
      throw new ClientError(400, 'gradeId must be an integer');
    const { name, course, score } = req.body;
    if (!name) throw new ClientError(400, "request must include a 'name'");
    if (!course) throw new ClientError(400, "request must include a 'course'");
    if (!score) throw new ClientError(400, "request must include a 'score'");
    if (!Number.isInteger(+score))
      throw new ClientError(400, 'score must be an integer');
    if (+score > 100 || +score < 0)
      throw new ClientError(400, 'score must be 0-100');
    const sql = `
  update "grades"
  set "name" = $1, "course" = $2, "score" = $3
  where "gradeId" = $4
  returning *;
  `;
    const result = await db.query(sql, [name, course, score, gradeId]);
    if (!result.rows[0])
      throw new ClientError(404, `gradeId ${gradeId} not found`);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId))
      throw new ClientError(400, 'gradeId must be an integer');
    const sql = `
      delete
      from "grades"
      where "gradeId" = $1
      returning *;
    `;
    const result = await db.query(sql, [gradeId]);
    if (!result.rows[0])
      throw new ClientError(404, `gradeId ${gradeId} not found`);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

// Not necessary, but nice to have to ensure our server is online when developing
app.listen(8080, () => {
  console.log('listening on port 8080');
});
