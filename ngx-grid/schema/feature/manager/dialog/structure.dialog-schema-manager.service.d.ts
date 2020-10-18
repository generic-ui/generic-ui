import { Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SchemaWarehouse } from '../../../core/api/schema.warehouse';
import { StructureThemeConverter } from '../../../../structure/grid/feature/schema/structure.theme.converter';
import { SchemaReadModelRootId } from '../../../core/domain-read/schema.read-model-root-id';
import { Reactive } from '../../../../common/cdk/reactive';
export declare class StructureDialogSchemaManagerService extends Reactive {
    private readonly injector;
    private readonly schemaReadModelRepository;
    private readonly structureThemeConverter;
    private readonly fabricDialogService;
    constructor(injector: Injector, schemaReadModelRepository: SchemaWarehouse, structureThemeConverter: StructureThemeConverter, fabricDialogService: FabricDialogService);
    open(readModelId: SchemaReadModelRootId, parentInjector?: Injector): void;
}
