import { ApplicationRef, ComponentFactoryResolver, Injector, OnDestroy, Type } from '@angular/core';
import { FabricDrawerComponent } from './fabric-drawer.component';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricDrawerConfig } from './fabric-drawer.config';
import * as i0 from "@angular/core";
export declare class FabricDrawerService extends FabricModal<FabricDrawerComponent> implements OnDestroy {
    /** To prevent multiple timers **/
    inProgress: boolean;
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any);
    getComponent(): Type<FabricDrawerComponent>;
    open(config: FabricDrawerConfig): void;
    close(): void;
    private createDrawer;
    private waitAndCreateNewDrawer;
    private applyInstanceVars;
    private closeOnEscKey;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDrawerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FabricDrawerService>;
}
