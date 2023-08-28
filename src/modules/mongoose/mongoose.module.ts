import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { MongooseConfigurationService } from "./services/mongoose-configuration.service";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigurationService,
    }),
  ],
})
export class MongoModule {}
