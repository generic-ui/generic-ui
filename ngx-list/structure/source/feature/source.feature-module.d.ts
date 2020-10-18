import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { SourceApiModule } from '../core/api/source.api-module';
export declare class SourceFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    constructor(sourceApiModule: SourceApiModule);
}
