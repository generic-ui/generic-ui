import { ApplicationRef, ComponentFactoryResolver, ElementRef, Injector, OnDestroy, Type } from '@angular/core';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { Theme } from '../../themes/theme';
import { FabricNestedDialogComponent } from '../common/fabric.nested-dialog.component';
import { Observable } from 'rxjs';
import { FabricPlacement } from '../../common/modal/cords/fabric-placement';
import * as i0 from "@angular/core";
export declare class FabricInlineDialogService implements OnDestroy {
    private readonly componentFactoryResolver;
    private readonly applicationRef;
    private readonly injector;
    private readonly document;
    private readonly inlineDialogGeometryService;
    private inlineDialogRef;
    private opened;
    private opened$;
    private readonly destroy$;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricInlineDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FabricInlineDialogService>;
}
