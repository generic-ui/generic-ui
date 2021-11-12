import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, OnDestroy, Type } from '@angular/core';
import { FabricReactive } from '../fabric-reactive';
import { FabricModalConfig } from './fabric-modal.config';
import { Observable } from 'rxjs/';
export declare abstract class FabricModal<T> extends FabricReactive implements OnDestroy {
    private readonly componentFactoryResolver;
    private readonly applicationRef;
    private readonly injector;
    private readonly document;
    componentRef: ComponentRef<T>;
    protected constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any);
    ngOnDestroy(): void;
    abstract getComponent(): Type<T>;
    createAndAppend(config?: FabricModalConfig): void;
    removeComponent(): void;
    getComponentRef(): ComponentRef<T>;
    getInjector(): Injector;
    getDocument(): any;
    onCloseOnEsc(): Observable<any>;
    private getElement;
}
