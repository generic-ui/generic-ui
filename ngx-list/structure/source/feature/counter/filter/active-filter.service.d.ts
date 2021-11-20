import { Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SchemaWarehouse } from '../../../../../schema/core/api/schema.warehouse';
import { StructureThemeConverter } from '../../../../grid/feature/schema/structure.theme.converter';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { StructureId } from '../../../../core/api/structure.id';
import { Reactive } from '@generic-ui/hermes';
export declare class ActiveFilterService extends Reactive {
    private readonly injector;
    private readonly schemaWarehouse;
    private readonly structureThemeConverter;
    private readonly fabricDialogService;
    constructor(injector: Injector, schemaWarehouse: SchemaWarehouse, structureThemeConverter: StructureThemeConverter, fabricDialogService: FabricDialogService);
    open(readModelId: SchemaReadModelRootId, structureId: StructureId): void;
}
