import { Hono, HonoRequest } from "hono";
import { env } from "hono/adapter";
import { join } from "path";
import { WindowsToaster } from "node-notifier";


const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!');
})

app.get('/create-or-open-ob', async (c) => {
  const ob_f_name = c.req.query('ob_f_name');
  if (!ob_f_name) {
    return c.text('error: ob_f_name required.', 400);
  }

  const { OB_F_DIR } = env<{ OB_F_DIR: string }>(c);
  const of_flle_full_path = join(OB_F_DIR,ob_f_name);
  await Bun.write(of_flle_full_path, "");
  return c.text(of_flle_full_path);
})

export default app;