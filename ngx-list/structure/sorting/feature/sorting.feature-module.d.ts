import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { SortingApiModule } from '../core/api/sorting.api-module';
export declare class SortingFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    constructor(sortingApiModule: SortingApiModule);
}
