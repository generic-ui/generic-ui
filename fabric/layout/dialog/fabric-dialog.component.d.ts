import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, Type, ViewContainerRef } from '@angular/core';
import { FabricDialogService } from './fabric-dialog.service';
export declare class FabricDialogComponent implements AfterViewInit {
    private componentFactoryResolver;
    private changeDetectorRef;
    private elementRef;
    private dialogService;
    container: ViewContainerRef;
    dialogNestedComponent: Type<any>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, dialogService: FabricDialogService);
    ngAfterViewInit(): void;
    closeDialog(): void;
    clickOutside(event: any): void;
    private isContainerClicked;
    private createNestedComponent;
}
