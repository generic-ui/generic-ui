import { Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
import { Reactive } from '../../../../../common/cdk/reactive';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
import { SchemaWarehouse } from '../../../../../schema/core/api/schema.warehouse';
import { SchemaReadModelRootId } from '../../../../../schema/core/domain-read/schema.read-model-root-id';
export declare class StructureDialogColumnManagerService extends Reactive {
    private readonly injector;
    private readonly schemaReadModelRepository;
    private readonly structureThemeConverter;
    private readonly fabricDialogService;
    constructor(injector: Injector, schemaReadModelRepository: SchemaWarehouse, structureThemeConverter: StructureThemeConverter, fabricDialogService: FabricDialogService);
    open(compositionId: CompositionId, readModelId: SchemaReadModelRootId, parentInjector?: Injector): void;
}
