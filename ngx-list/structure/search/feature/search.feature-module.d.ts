import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { SearchApiModule } from '../domain-api/search.api-module';
export declare class SearchFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    constructor(searchApiModule: SearchApiModule);
}
