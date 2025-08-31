import { DurableObject } from "cloudflare:workers";


export class MyDurableObject extends DurableObject<Env> {
	
	constructor(ctx: DurableObjectState, env: Env) {
		super(ctx, env);
	}
	async sayHello(name: string): Promise<string> {
		return `Hello, ${name}!`;
	}
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		
			return Response.json({
				message: "you did not send a get request"
			});
	},
} satisfies ExportedHandler<Env>;
