import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { SchemaApiModule } from '../core/api/schema.api-module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../core/api/schema.api-module";
export declare class SchemaFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    constructor(schemaApiModule: SchemaApiModule);
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaFeatureModule, [{ optional: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SchemaFeatureModule, never, [typeof i1.CommonModule, typeof i2.SchemaApiModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SchemaFeatureModule>;
}
//# sourceMappingURL=schema.feature-module.d.ts.map