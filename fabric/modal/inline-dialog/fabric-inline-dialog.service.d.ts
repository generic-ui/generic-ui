import { ApplicationRef, ComponentFactoryResolver, ElementRef, Injector, OnDestroy, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { InlineDialogPlacement } from './placement';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { DialogService } from '../common/dialog.service';
import { Theme } from '../../themes/theme';
import { FabricNestedDialogComponent } from '../common/fabric.nested-dialog.component';
export declare class FabricInlineDialogService extends DialogService implements OnDestroy {
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
    open(element: ElementRef, component: Type<FabricNestedDialogComponent>, config?: {
        injector?: Injector;
        placement?: InlineDialogPlacement;
        offset?: number;
        theme?: Theme;
    }): void;
    close(): void;
    isOpened(): boolean;
    onOpened(): Observable<boolean>;
    private appendInlineDialogToElement;
    private removeInlineDialog;
    private setOpened;
}
