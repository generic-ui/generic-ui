import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, OnInit, Renderer2, Type, ViewContainerRef } from '@angular/core';
import { FabricDialogService } from './fabric-dialog.service';
import { Theme } from '../../themes/theme';
import { DialogComponent } from '../common/dialog.component';
import { FabricNestedDialogComponent } from '../common/fabric.nested-dialog.component';
import { FabricDialogThemeService } from './fabric-dialog-theme.service';
export declare class FabricDialogComponent extends DialogComponent implements OnInit, AfterViewInit {
    private readonly componentFactoryResolver;
    private readonly changeDetectorRef;
    private readonly elRef;
    private readonly themeService;
    private readonly dialogService;
    container: ViewContainerRef;
    dialogNestedComponent: Type<FabricNestedDialogComponent>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, changeDetectorRef: ChangeDetectorRef, elRef: ElementRef, themeService: FabricDialogThemeService, renderer: Renderer2, theme: Theme, dialogService: FabricDialogService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    closeDialog(): void;
    clickOutside(event: any): void;
    private isContainerClicked;
    private createNestedComponent;
}
