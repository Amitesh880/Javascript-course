import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      const prisma = new PrismaClient({
        datasourceUrl: env.DATABASE_URL,
      }).$extends(withAccelerate());

      const logEntry = await prisma.log.create({
        data: {
          level: "Info",
          message: "Hello from Prisma on Cloudflare Workers!",
          meta: {
            headers: JSON.stringify(Object.fromEntries(request.headers)),
          },
        },
      });

      return new Response(`Logged: ${logEntry.message}`, {
        headers: { "Content-Type": "text/plain" },
      });
    } catch (err) {
      return new Response("Internal Error: " + (err as Error).message, {
        status: 500,
      });
    }
  },
};