import { ApplicationRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { FabricDialogComponent } from './fabric-dialog.component';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricDialogConfig } from './fabric-dialog.config';
export declare class FabricDialogService extends FabricModal<FabricDialogComponent> {
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any);
    getComponent(): Type<FabricDialogComponent>;
    open(config: FabricDialogConfig): void;
    close(): void;
    private closeOnEscKey;
    private afterComponentCreation;
}
