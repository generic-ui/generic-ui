import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { SchemaApiModule } from '../core/api/schema.api-module';
export declare class SchemaFeatureModule extends FeatureModule {
    constructor(schemaApiModule: SchemaApiModule);
    static forComponent(): Array<Provider>;
}
