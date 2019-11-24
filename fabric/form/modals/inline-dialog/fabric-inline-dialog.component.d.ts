import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
export declare class FabricInlineDialogComponent implements OnInit, AfterViewInit {
    private componentFactoryResolver;
    private changeDetectorRef;
    private inlineDialogService;
    private elementRef;
    container: ViewContainerRef;
    inlineDialogNestedComponent: Type<any>;
    dialogTopAttribute: number;
    dialogLeftAttribute: number;
    private inlineDialogCordsSubscription;
    private readonly spaceBetweenElementAndInlineDialog;
    constructor(componentFactoryResolver: ComponentFactoryResolver, changeDetectorRef: ChangeDetectorRef, inlineDialogService: FabricInlineDialogService, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    clickOutside(event: any): void;
    private isContainerClicked;
    private createNestedComponent;
}
