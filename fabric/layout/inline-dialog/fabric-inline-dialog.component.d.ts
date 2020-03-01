import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, Injector, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
export declare class FabricInlineDialogComponent implements OnInit, AfterViewInit, OnDestroy {
    private componentFactoryResolver;
    private changeDetectorRef;
    private inlineDialogService;
    private elementRef;
    private inlineDialogGeometryService;
    container: ViewContainerRef;
    inlineDialogNestedComponent: Type<any>;
    inlineDialogNestedInjector: Injector;
    dialogTopAttribute: number;
    dialogLeftAttribute: number;
    private inlineDialogCordsSubscription;
    constructor(componentFactoryResolver: ComponentFactoryResolver, changeDetectorRef: ChangeDetectorRef, inlineDialogService: FabricInlineDialogService, elementRef: ElementRef, inlineDialogGeometryService: InlineDialogGeometryService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    clickOutside(event: any): void;
    private isContainerClicked;
    private createNestedComponent;
}
