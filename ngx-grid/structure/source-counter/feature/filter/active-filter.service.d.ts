import { Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { Reactive } from '../../../../common/cdk/reactive';
import { SchemaWarehouse } from '../../../../schema/domain-api/schema.warehouse';
import { StructureThemeConverter } from '../../../../lib/structure/feature/schema/structure.theme.converter';
import { SchemaReadModelRootId } from '../../../../schema/domain-api/read/schema.read-model-root-id';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class ActiveFilterService extends Reactive {
    private readonly injector;
    private readonly schemaReadModelRepository;
    private readonly structureThemeConverter;
    private readonly fabricDialogService;
    constructor(injector: Injector, schemaReadModelRepository: SchemaWarehouse, structureThemeConverter: StructureThemeConverter, fabricDialogService: FabricDialogService);
    open(readModelId: SchemaReadModelRootId, structureId: StructureId): void;
}
