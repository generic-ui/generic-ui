import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { CompositionApiModule } from '../core/api/composition.api-module';
export declare class CompositionFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    constructor(compositionApiModule: CompositionApiModule);
}
