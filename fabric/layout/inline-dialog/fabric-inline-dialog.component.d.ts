import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, OnDestroy, OnInit, Type, ViewContainerRef, Injector } from '@angular/core';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
export declare class FabricInlineDialogComponent implements OnInit, AfterViewInit, OnDestroy {
    private componentFactoryResolver;
    private changeDetectorRef;
    private inlineDialogService;
    private elementRef;
    container: ViewContainerRef;
    inlineDialogNestedComponent: Type<any>;
    inlineDialogNestedInjector: Injector;
    dialogTopAttribute: number;
    dialogLeftAttribute: number;
    private inlineDialogCordsSubscription;
    constructor(componentFactoryResolver: ComponentFactoryResolver, changeDetectorRef: ChangeDetectorRef, inlineDialogService: FabricInlineDialogService, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    clickOutside(event: any): void;
    private isContainerClicked;
    private createNestedComponent;
}
