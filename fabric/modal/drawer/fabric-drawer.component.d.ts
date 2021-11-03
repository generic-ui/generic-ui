import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, Renderer2, Type, ViewContainerRef } from '@angular/core';
import { FabricNestedDialogComponent } from '../common/fabric.nested-dialog.component';
import { FabricDrawerService } from './fabric-drawer.service';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../themes/fabric-modal-theme.service';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDrawerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricDrawerComponent, "ng-component", never, { "closeOnClickOutside": "closeOnClickOutside"; }, {}, never, never>;
}
//# sourceMappingURL=fabric-drawer.component.d.ts.map