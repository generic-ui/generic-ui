import { Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { StructureComponent } from '../structure.component';
export declare class StructureFilterMenuTriggerComponent {
    private readonly injector;
    private readonly drawerService;
    private readonly structureComponent;
    constructor(injector: Injector, drawerService: FabricDrawerService, structureComponent: StructureComponent);
    openDrawer(): void;
}
