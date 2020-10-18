import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { SummariesApiModule } from '../core/api/summaries.api-module';
export declare class SummariesFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    constructor(summariesApiModule: SummariesApiModule);
}
