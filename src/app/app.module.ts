import { Module } from "@nestjs/common";

import { ConfigurationModule } from "../modules/env-configuration/env-configuration.module";
import { MongoModule } from "../modules/mongoose/mongoose.module";
// import { TelegramModule } from "@modules/telegram/telegram.module";
// import { MarketModule } from "@modules/market/market.module";

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [
    ConfigurationModule,
    MongoModule,
    // TelegramModule,
    // MarketModule,
  ],
})
export class AppModule {}
