import { ApplicationRef, ComponentFactoryResolver, ElementRef, Injector, OnDestroy, Type } from '@angular/core';
import { InlineDialogPlacement } from './placement';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { Observable } from 'rxjs';
export declare class FabricInlineDialogService implements OnDestroy {
    private componentFactoryResolver;
    private applicationRef;
    private injector;
    private document;
    private inlineDialogGeometryService;
    private inlineDialogRef;
    private opened;
    private opened$;
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any, inlineDialogGeometryService: InlineDialogGeometryService);
    ngOnDestroy(): void;
    open(element: ElementRef, component: Type<any>, injector?: Injector, placement?: InlineDialogPlacement, offset?: number): void;
    close(): void;
    isOpened(): boolean;
    onOpened(): Observable<boolean>;
    private appendInlineDialogToElement;
    private removeInlineDialog;
    private setOpened;
}
