import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, OnDestroy, Type } from '@angular/core';
import { FabricReactive } from '../fabric-reactive';
import { FabricModalConfig } from './fabric-modal.config';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class FabricModal<T> extends FabricReactive implements OnDestroy {
    private readonly componentFactoryResolver;
    private readonly applicationRef;
    private readonly injector;
    private readonly document;
    private componentRef;
    protected constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any);
    ngOnDestroy(): void;
    abstract getComponent(): Type<T>;
    createAndAppend(config?: FabricModalConfig): void;
    removeComponent(): void;
    getComponentRef(): ComponentRef<T> | 'destroyed';
    getInjector(): Injector;
    getDocument(): any;
    onCloseOnEsc(): Observable<any>;
    isComponentCreated(): boolean;
    private getElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricModal<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FabricModal<any>, never, never, {}, {}, never, never, false>;
}
