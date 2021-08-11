import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, Renderer2, Type, ViewContainerRef } from '@angular/core';
import { FabricNestedDialogComponent } from '../common/fabric.nested-dialog.component';
import { FabricDrawerService } from './fabric-drawer.service';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../themes/fabric-modal-theme.service';
export declare class FabricDrawerComponent extends FabricThemedComponent implements AfterViewInit {
    private readonly componentFactoryResolver;
    private readonly changeDetectorRef;
    private readonly elRef;
    private readonly dialogService;
    container: ViewContainerRef;
    closeOnClickOutside: boolean;
    dialogNestedComponent: Type<FabricNestedDialogComponent>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, changeDetectorRef: ChangeDetectorRef, elRef: ElementRef, dialogService: FabricDrawerService, themeModalService: FabricModalThemeService, renderer: Renderer2);
    ngAfterViewInit(): void;
    closeDrawer(): void;
    clickOutside(event: any): void;
    private isContainerClicked;
    private createNestedComponent;
}
