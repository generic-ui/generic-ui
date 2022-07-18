import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { SchemaPublisher } from '../../core/schema/src/api/schema.publisher';
import { SchemaWarehouse } from '../../core/schema/src/api/schema.warehouse';
import { SchemaEventRepository } from '../../core/schema/src/api/schema.event-repository';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare function useFactorySchemaCommandInvoker(): SchemaPublisher;
export declare function useFactorySchemaWarehouse(): SchemaWarehouse;
export declare function useFactorySchemaEventRepository(): SchemaEventRepository;
export declare class SchemaFeatureModule extends FeatureModule {
    constructor();
    static forComponent(): Array<Provider>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SchemaFeatureModule, never, [typeof i1.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SchemaFeatureModule>;
}
