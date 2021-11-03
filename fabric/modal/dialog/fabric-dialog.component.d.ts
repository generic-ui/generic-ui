import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, Renderer2, Type, ViewContainerRef } from '@angular/core';
import { FabricDialogService } from './fabric-dialog.service';
import { FabricNestedDialogComponent } from '../common/fabric.nested-dialog.component';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../themes/fabric-modal-theme.service';
import * as i0 from "@angular/core";
export declare class FabricDialogComponent extends FabricThemedComponent implements AfterViewInit {
    private readonly componentFactoryResolver;
    private readonly changeDetectorRef;
    private readonly elRef;
    private readonly dialogService;
    container: ViewContainerRef;
    dialogNestedComponent: Type<FabricNestedDialogComponent>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, changeDetectorRef: ChangeDetectorRef, elRef: ElementRef, themeModalService: FabricModalThemeService, renderer: Renderer2, dialogService: FabricDialogService);
    ngAfterViewInit(): void;
    closeDialog(): void;
    clickOutside(event: any): void;
    private isContainerClicked;
    private createNestedComponent;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricDialogComponent, "gui-fabric-dialog", never, {}, {}, never, never>;
}
//# sourceMappingURL=fabric-dialog.component.d.ts.map