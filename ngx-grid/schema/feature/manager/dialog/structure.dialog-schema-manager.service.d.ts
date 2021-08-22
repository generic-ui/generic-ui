import { Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SchemaReadModelRootId } from '../../../core/api/schema.read-model-root-id';
import { Reactive } from '../../../../common/cdk/reactive/reactive';
export declare class StructureDialogSchemaManagerService extends Reactive {
    private readonly injector;
    private readonly fabricDialogService;
    constructor(injector: Injector, fabricDialogService: FabricDialogService);
    open(readModelId: SchemaReadModelRootId, parentInjector?: Injector): void;
}
