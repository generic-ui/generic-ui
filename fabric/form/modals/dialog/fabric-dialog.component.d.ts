import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, Type, ViewContainerRef } from '@angular/core';
import { FabricDialogService } from './fabric-dialog.service';
export declare class FabricDialogComponent implements AfterViewInit {
    private componentFactoryResolver;
    private changeDetectorRef;
    private dialogService;
    container: ViewContainerRef;
    dialogNestedComponent: Type<any>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, changeDetectorRef: ChangeDetectorRef, dialogService: FabricDialogService);
    ngAfterViewInit(): void;
    closeDialog(): void;
    private createNestedComponent;
}
