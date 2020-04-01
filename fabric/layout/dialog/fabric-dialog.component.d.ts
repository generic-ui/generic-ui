import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, Renderer2, Type, ViewContainerRef } from '@angular/core';
import { FabricDialogService } from './fabric-dialog.service';
import { Theme } from '../../themes/theme';
import { DialogComponent } from '../../common/dialog/dialog.component';
export declare class FabricDialogComponent extends DialogComponent implements AfterViewInit {
    private readonly componentFactoryResolver;
    private readonly changeDetectorRef;
    private readonly elRef;
    private readonly dialogService;
    container: ViewContainerRef;
    dialogNestedComponent: Type<any>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, changeDetectorRef: ChangeDetectorRef, elRef: ElementRef, renderer: Renderer2, theme: Theme, dialogService: FabricDialogService);
    ngAfterViewInit(): void;
    closeDialog(): void;
    clickOutside(event: any): void;
    private isContainerClicked;
    private createNestedComponent;
}
