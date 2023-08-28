import { Injectable } from "@nestjs/common";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";

import { ConfigurationService, ENV } from "../../../modules/env-configuration/services/env-configuration.service";

@Injectable()
export class MongooseConfigurationService implements MongooseOptionsFactory {
  private readonly env: ENV;

  constructor(configurationService: ConfigurationService) {
    this.env = configurationService.env;
  }

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.env.MONGO_URL,
    };
  }
}
