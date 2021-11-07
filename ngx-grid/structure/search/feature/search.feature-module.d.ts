import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { SearchApiModule } from '../core/api/search.api-module';
export declare class SearchFeatureModule extends FeatureModule {
    constructor(searchApiModule: SearchApiModule);
    static forComponent(): Array<Provider>;
}
