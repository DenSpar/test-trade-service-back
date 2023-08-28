import { Injectable } from "@nestjs/common";
import { z } from "zod";

const envSchema = z.object({
  CUSTOM_PORT: z.coerce.number().min(1),
  TELEGRAM_TOKEN: z.string().min(1),
  MONGO_URL: z.string().min(1),
  VERIFICATION_CODE_LENGTH: z.coerce.number().min(6),
  VERIFICATION_CODE_LIVE_TIME: z.coerce.number().min(60),
});

export type ENV = z.infer<typeof envSchema>;

@Injectable()
export class ConfigurationService {
  readonly env: ENV;

  constructor() {
    this.env = envSchema.parse(this.getEnv());
  }

  private getEnv() {
    return Object.fromEntries(
      Object.entries(envSchema.keyof().Enum).map(([key, value]) => [key, process.env?.[`${value}`]])
    );
  }
}
