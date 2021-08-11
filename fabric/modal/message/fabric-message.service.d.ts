import { ApplicationRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricMessageComponent } from './fabric-message.component';
export declare class FabricMessageService extends FabricModal<FabricMessageComponent> {
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any);
    getComponent(): Type<FabricMessageComponent>;
    open(text: string): void;
    close(): void;
}
