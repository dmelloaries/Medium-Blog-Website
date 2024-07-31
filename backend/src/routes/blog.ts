import { Hono } from "hono";

export const blogRouter=new Hono


const app = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string,
    }
  }>();

  
app.get('/api/v1/blog/:id', (c) => {
    const id = c.req.param('id');
    console.log(id);
    return c.text('get blog route');
  });
  
  app.post('/api/v1/blog', (c) => {
    return c.text('signin route');
  });
  
  app.put('/api/v1/blog', (c) => {
    return c.text('signin route');
  });