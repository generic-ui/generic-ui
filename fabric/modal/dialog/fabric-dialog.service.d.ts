import { ApplicationRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { FabricDialogComponent } from './fabric-dialog.component';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricDialogConfig } from './fabric-dialog.config';
import * as i0 from "@angular/core";
export declare class FabricDialogService extends FabricModal<FabricDialogComponent> {
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any);
    getComponent(): Type<FabricDialogComponent>;
    open(config: FabricDialogConfig): void;
    close(): void;
    private closeOnEscKey;
    private afterComponentCreation;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FabricDialogService>;
}
