import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, Injector, OnDestroy, OnInit, Renderer2, Type, ViewContainerRef } from '@angular/core';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { DialogComponent } from '../../common/dialog/dialog.component';
import { Theme } from '../../themes/theme';
export declare class FabricInlineDialogComponent extends DialogComponent implements OnInit, AfterViewInit, OnDestroy {
    private readonly componentFactoryResolver;
    private readonly changeDetectorRef;
    private readonly inlineDialogService;
    private readonly elRef;
    private readonly inlineDialogGeometryService;
    container: ViewContainerRef;
    inlineDialogNestedComponent: Type<any>;
    inlineDialogNestedInjector: Injector;
    dialogTopAttribute: number;
    dialogLeftAttribute: number;
    constructor(componentFactoryResolver: ComponentFactoryResolver, changeDetectorRef: ChangeDetectorRef, inlineDialogService: FabricInlineDialogService, elRef: ElementRef, renderer: Renderer2, theme: Theme, inlineDialogGeometryService: InlineDialogGeometryService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    clickOutside(event: any): void;
    private isContainerClicked;
    private createNestedComponent;
}
