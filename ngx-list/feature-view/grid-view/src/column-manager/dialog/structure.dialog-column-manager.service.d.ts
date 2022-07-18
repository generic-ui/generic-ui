import { Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { CompositionId } from '../../../../../core/composition/src/api/global/composition.id';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
import { SchemaWarehouse } from '../../../../../core/schema/src/api/schema.warehouse';
import { SchemaReadModelRootId } from '../../../../../core/schema/src/api/global/schema.read-model-root-id';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class StructureDialogColumnManagerService extends Reactive {
    private readonly injector;
    private readonly schemaWarehouse;
    private readonly structureThemeConverter;
    private readonly fabricDialogService;
    constructor(injector: Injector, schemaWarehouse: SchemaWarehouse, structureThemeConverter: StructureThemeConverter, fabricDialogService: FabricDialogService);
    open(compositionId: CompositionId, readModelId: SchemaReadModelRootId, parentInjector?: Injector): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureDialogColumnManagerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureDialogColumnManagerService>;
}
