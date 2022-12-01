import { Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SchemaReadModelRootId } from '../../../../../core/schema/src/api/global/schema.read-model-root-id';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class StructureDialogSchemaManagerService extends Reactive {
    private readonly injector;
    private readonly fabricDialogService;
    constructor(injector: Injector, fabricDialogService: FabricDialogService);
    open(readModelId: SchemaReadModelRootId, parentInjector?: Injector): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureDialogSchemaManagerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureDialogSchemaManagerService>;
}
