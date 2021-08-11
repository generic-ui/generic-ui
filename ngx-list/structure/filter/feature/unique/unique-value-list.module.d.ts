import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { FilterApiModule } from '../../core/api/filter.api-module';
export declare class UniqueValueListModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    constructor(filterApiModule: FilterApiModule);
}
