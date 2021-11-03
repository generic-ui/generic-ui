import { ApplicationRef, ComponentFactoryResolver, ElementRef, Injector, OnDestroy, Type } from '@angular/core';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { Theme } from '../../themes/theme';
import { FabricNestedDialogComponent } from '../common/fabric.nested-dialog.component';
import { Observable } from 'rxjs';
import { FabricPlacement } from '../../common/modal/cords/fabric-placement';
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
        placement?: FabricPlacement;
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
