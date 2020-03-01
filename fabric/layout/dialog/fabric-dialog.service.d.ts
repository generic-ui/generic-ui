import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, OnDestroy, Type } from '@angular/core';
export declare class FabricDialogService implements OnDestroy {
    private componentFactoryResolver;
    private applicationRef;
    private injector;
    private document;
    dialogRef: ComponentRef<any>;
    private readonly destroy$;
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any);
    ngOnDestroy(): void;
    open(component: Type<any>, injector?: Injector): void;
    close(): void;
    private closeOnEscKey;
    private createAndAppend;
    private removeDialog;
}
