import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, OnDestroy, Renderer2, Type, ViewContainerRef } from '@angular/core';
import { Theme } from '../../themes/theme';
import { DialogComponent } from '../common/dialog.component';
import { FabricNestedDialogComponent } from '../common/fabric.nested-dialog.component';
import { FabricDrawerService } from './fabric-drawer.service';
export declare class FabricDrawerComponent extends DialogComponent implements AfterViewInit, OnDestroy {
    private readonly componentFactoryResolver;
    private readonly changeDetectorRef;
    private readonly elRef;
    private readonly dialogService;
    container: ViewContainerRef;
    closeOnClickOutside: boolean;
    dialogNestedComponent: Type<FabricNestedDialogComponent>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, changeDetectorRef: ChangeDetectorRef, elRef: ElementRef, dialogService: FabricDrawerService, renderer: Renderer2, theme: Theme);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    closeDrawer(): void;
    clickOutside(event: any): void;
    private isContainerClicked;
    private createNestedComponent;
}
