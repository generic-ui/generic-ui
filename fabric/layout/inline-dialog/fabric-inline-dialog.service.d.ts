import { ApplicationRef, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, OnDestroy, Type } from '@angular/core';
import { InlineDialogPlacement } from './placement';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
export declare class FabricInlineDialogService implements OnDestroy {
    private componentFactoryResolver;
    private applicationRef;
    private injector;
    private document;
    private inlineDialogGeometryService;
    inlineDialogRef: ComponentRef<any>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any, inlineDialogGeometryService: InlineDialogGeometryService);
    ngOnDestroy(): void;
    open(element: ElementRef, component: Type<any>, injector?: Injector, placement?: InlineDialogPlacement, offset?: number): void;
    close(): void;
    private appendInlineDialogToElement;
    private removeInlineDialog;
}
