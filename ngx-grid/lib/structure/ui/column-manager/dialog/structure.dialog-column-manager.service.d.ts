import { Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { CompositionId } from '../../../../composition/domain/composition-id';
export declare class StructureDialogColumnManagerService {
    private injector;
    private fabricDialogService;
    constructor(injector: Injector, fabricDialogService: FabricDialogService);
    open(compositionId: CompositionId): void;
}
