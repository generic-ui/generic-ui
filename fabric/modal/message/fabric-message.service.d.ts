import { ApplicationRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricMessageComponent } from './fabric-message.component';
import * as i0 from "@angular/core";
export declare class FabricMessageService extends FabricModal<FabricMessageComponent> {
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any);
    getComponent(): Type<FabricMessageComponent>;
    open(text: string): void;
    close(): void;
    private afterCompCreation;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricMessageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FabricMessageService>;
}
