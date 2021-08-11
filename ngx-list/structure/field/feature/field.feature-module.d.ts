import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { FieldApiModule } from '../core/api/field.api-module';
export declare class FieldFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    constructor(fieldApiModule: FieldApiModule);
}
