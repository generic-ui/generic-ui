import { ApplicationRef, ComponentFactoryResolver, ElementRef, Injector, OnDestroy, Type } from '@angular/core';
import { InlineDialogPlacement } from './placement';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { Theme } from '../../themes/theme';
import { FabricNestedDialogComponent } from '../common/fabric.nested-dialog.component';
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
    private readonly unsub$;
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any, inlineDialogGeometryService: InlineDialogGeometryService);
    ngOnDestroy(): void;
    open(element: ElementRef, component: Type<FabricNestedDialogComponent>, config?: {
        injector?: Injector;
        placement?: InlineDialogPlacement;
        offset?: number;
        theme?: Theme;
        customClass?: string;
    }): void;
    close(): void;
    isOpened(): boolean;
    onOpened(): Observable<boolean>;
    private appendInlineDialogToElement;
    private removeInlineDialog;
    private setOpened;
    private closeOnEscKey;
}
