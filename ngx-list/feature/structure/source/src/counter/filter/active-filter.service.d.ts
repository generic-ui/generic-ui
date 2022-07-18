import { Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SchemaWarehouse } from '../../../../../../core/schema/src/api/schema.warehouse';
import { StructureThemeConverter } from '../../../../../../feature-view/grid-view/src/schema/structure.theme.converter';
import { SchemaReadModelRootId } from '../../../../../../core/schema/src/api/global/schema.read-model-root-id';
import { StructureId } from '../../../../../../core/structure/structure-core/src/api/global/structure.id';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class ActiveFilterService extends Reactive {
    private readonly injector;
    private readonly schemaWarehouse;
    private readonly structureThemeConverter;
    private readonly fabricDialogService;
    constructor(injector: Injector, schemaWarehouse: SchemaWarehouse, structureThemeConverter: StructureThemeConverter, fabricDialogService: FabricDialogService);
    open(readModelId: SchemaReadModelRootId, structureId: StructureId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveFilterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActiveFilterService>;
}
