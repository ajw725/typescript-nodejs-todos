import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';

import todoRoutes from './routes/todos';

const app = express();

app.use(json()); // parse incoming request body as JSON -> req.body

app.use('/todos', todoRoutes);

// typical express middleware
// app.use((req, res, next) => {});

// error-handling middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
