import { ApplicationRef, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, OnDestroy, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { InlineDialogCords } from './inline-dialog-cords';
export declare class FabricInlineDialogService implements OnDestroy {
    private componentFactoryResolver;
    private applicationRef;
    private injector;
    private platformId;
    private document;
    inlineDialogRef: ComponentRef<any>;
    private inlineDialogState$;
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, platformId: any, document: any);
    ngOnDestroy(): void;
    open(element: ElementRef, component: Type<any>): void;
    close(): void;
    observeInlineDialogCords(): Observable<InlineDialogCords>;
    private appendInlineDialogToElement;
    private removeInlineDialog;
    private getInlineDialogCords;
}
