import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().url(),
		NODE_ENV: z.enum(["development", "production"]).default("development"),
	},
	client: {
		NEXT_PUBLIC_APP_URL: z.string().url(),
	},
	runtimeEnv: {
		DATABASE_URL: process.env.DATABASE_URL,
		NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
	},
	emptyStringAsUndefined: true,
});
