import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, OnDestroy, Type } from '@angular/core';
import { Theme } from '../../themes/theme';
import { FabricNestedDialogComponent } from '../common/fabric.nested-dialog.component';
export declare class FabricDialogService implements OnDestroy {
    private componentFactoryResolver;
    private applicationRef;
    private injector;
    private document;
    dialogRef: ComponentRef<FabricNestedDialogComponent>;
    private readonly unsub$;
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any);
    ngOnDestroy(): void;
    open(component: Type<FabricNestedDialogComponent>, config?: {
        injector?: Injector;
        theme?: Theme;
    }): void;
    close(): void;
    private closeOnEscKey;
    private createAndAppend;
    private removeDialog;
}
