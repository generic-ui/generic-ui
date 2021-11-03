import { Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
import { SchemaWarehouse } from '../../../../../schema/core/api/schema.warehouse';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { Reactive } from '@generic-ui/hermes';
export declare class StructureDialogColumnManagerService extends Reactive {
    private readonly injector;
    private readonly schemaWarehouse;
    private readonly structureThemeConverter;
    private readonly fabricDialogService;
    constructor(injector: Injector, schemaWarehouse: SchemaWarehouse, structureThemeConverter: StructureThemeConverter, fabricDialogService: FabricDialogService);
    open(compositionId: CompositionId, readModelId: SchemaReadModelRootId, parentInjector?: Injector): void;
}
