import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { VerticalFormationApiModule } from '../core/api/vertical-formation.api-module';
export declare class VerticalFormationFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    constructor(verticalFormationApiModule: VerticalFormationApiModule);
}
