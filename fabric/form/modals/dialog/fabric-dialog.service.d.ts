import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, OnDestroy, Type } from '@angular/core';
export declare class FabricDialogService implements OnDestroy {
    private componentFactoryResolver;
    private applicationRef;
    private injector;
    dialogRef: ComponentRef<any>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector);
    ngOnDestroy(): void;
    open(component: Type<any>): void;
    close(): void;
    private appendDialogToBody;
    private removeDialog;
}
