import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { TranslationApiModule } from '../core/api/translation.api-module';
export declare class TranslationFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    constructor(apiModule: TranslationApiModule);
}
