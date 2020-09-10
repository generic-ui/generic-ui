import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, OnDestroy, Type } from '@angular/core';
export declare abstract class FabricModal<T> implements OnDestroy {
    private readonly componentFactoryResolver;
    private readonly applicationRef;
    private readonly injector;
    private readonly document;
    componentRef: ComponentRef<T>;
    protected constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: Document);
    ngOnDestroy(): void;
    abstract getComponent(): Type<T>;
    createAndAppend(): void;
    removeComponent(): void;
    getComponentRef(): ComponentRef<T>;
}
