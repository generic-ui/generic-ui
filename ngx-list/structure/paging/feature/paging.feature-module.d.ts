import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { PagingApiModule } from '../core/api/paging.api-module';
export declare class PagingFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    constructor(pagingApiModule: PagingApiModule);
}
