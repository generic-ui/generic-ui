/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, Renderer2, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricDialogService } from './fabric-dialog.service';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { DialogComponent } from '../common/dialog.component';
import { FabricDialogThemeService } from './fabric-dialog-theme.service';
export class FabricDialogComponent extends DialogComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} changeDetectorRef
     * @param {?} elRef
     * @param {?} themeService
     * @param {?} renderer
     * @param {?} theme
     * @param {?} dialogService
     */
    constructor(componentFactoryResolver, changeDetectorRef, elRef, themeService, renderer, theme, dialogService) {
        super(elRef, renderer, theme);
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.elRef = elRef;
        this.themeService = themeService;
        this.dialogService = dialogService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.themeService
            .onTheme()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => {
            this.addTheme(theme);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.createNestedComponent(this.dialogNestedComponent);
        this.changeDetectorRef.detectChanges();
        this.addTheme();
    }
    /**
     * @return {?}
     */
    closeDialog() {
        this.dialogService.close();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickOutside(event) {
        if (this.isContainerClicked(event)) {
            this.dialogService.close();
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    isContainerClicked(event) {
        /** @type {?} */
        const dialogContentRef = this.elRef.nativeElement.querySelector('.gui-dialog-content');
        if (dialogContentRef) {
            return !dialogContentRef.contains(event.target);
        }
    }
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    createNestedComponent(component) {
        /** @type {?} */
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.container.createComponent(componentFactory);
    }
}
FabricDialogComponent.decorators = [
    { type: Component, args: [{
                template: "<div class=\"gui-dialog-blanket\"></div>\n<div (click)=\"clickOutside($event)\"\n\t class=\"gui-dialog-wrapper\">\n\t<div class=\"gui-dialog-content\">\n\t\t<ng-template #container></ng-template>\n\t\t<gui-close-icon (click)=\"closeDialog()\"></gui-close-icon>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-dialog-blanket{background:rgba(0,0,0,.32);position:fixed;height:100%;width:100%;left:0;top:0;pointer-events:none;z-index:1000}.gui-dialog-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;position:fixed;height:100%;width:100%;left:0;top:0;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;pointer-events:auto;z-index:1000}.gui-dialog-wrapper .gui-dialog-content{background-color:#fff;max-width:400px;position:relative;border-radius:4px;box-shadow:0 3px 7px #999;-webkit-animation:.1s ease-in display-dialog;animation:.1s ease-in display-dialog;padding:24px}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-title{color:#333;font-size:20px;margin:0 0 16px}@-webkit-keyframes display-dialog{from{transform:scale(0)}to{transform:scale(1)}}@keyframes display-dialog{from{transform:scale(0)}to{transform:scale(1)}}", ".gui-dark .gui-dialog-wrapper .gui-dialog-content{background:#424242;color:#bdbdbd;box-shadow:0 1px 2px #424242}.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after,.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before{background:#bdbdbd}"]
            }] }
];
/** @nocollapse */
FabricDialogComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: FabricDialogThemeService },
    { type: Renderer2 },
    { type: Theme, decorators: [{ type: Inject, args: [themeToken,] }] },
    { type: FabricDialogService, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => FabricDialogService)),] }] }
];
FabricDialogComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }]
};
if (false) {
    /** @type {?} */
    FabricDialogComponent.prototype.container;
    /** @type {?} */
    FabricDialogComponent.prototype.dialogNestedComponent;
    /**
     * @type {?}
     * @private
     */
    FabricDialogComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricDialogComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    FabricDialogComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    FabricDialogComponent.prototype.themeService;
    /**
     * @type {?}
     * @private
     */
    FabricDialogComponent.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJtb2RhbC9kaWFsb2cvZmFicmljLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLFVBQVUsRUFDVixNQUFNLEVBRU4sU0FBUyxFQUVULFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBV3pFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUFlOzs7Ozs7Ozs7O0lBT3pELFlBQTZCLHdCQUFrRCxFQUMzRCxpQkFBb0MsRUFDcEMsS0FBaUIsRUFDakIsWUFBc0MsRUFDdkQsUUFBbUIsRUFDQyxLQUFZLEVBQ2dDLGFBQWtDO1FBQ3BHLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBUEYsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUMzRCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQTBCO1FBR1Msa0JBQWEsR0FBYixhQUFhLENBQXFCO0lBRXJHLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFlBQVk7YUFDZixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3RCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0I7SUFDRixDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxLQUFVOztjQUM5QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUM7UUFFdEYsSUFBSSxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUFDLFNBQTRDOztjQUNuRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO1FBRXpGLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBL0RELFNBQVMsU0FBQztnQkFDVixvU0FBNkM7Z0JBSzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDckM7Ozs7WUEzQkEsd0JBQXdCO1lBRnhCLGlCQUFpQjtZQUdqQixVQUFVO1lBZ0JGLHdCQUF3QjtZQVpoQyxTQUFTO1lBUUQsS0FBSyx1QkEyQlQsTUFBTSxTQUFDLFVBQVU7WUE1QmIsbUJBQW1CLHVCQTZCdkIsTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQzs7O3dCQVgvQyxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFBakUsMENBQzRCOztJQUU1QixzREFBeUQ7Ozs7O0lBRTdDLHlEQUFtRTs7Ozs7SUFDNUUsa0RBQXFEOzs7OztJQUNyRCxzQ0FBa0M7Ozs7O0lBQ2xDLDZDQUF1RDs7Ozs7SUFHdkQsOENBQWtHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0RWxlbWVudFJlZixcblx0Zm9yd2FyZFJlZixcblx0SW5qZWN0LFxuXHRPbkluaXQsXG5cdFJlbmRlcmVyMixcblx0VHlwZSxcblx0Vmlld0NoaWxkLFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IHRoZW1lVG9rZW4gfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUudG9rZW4nO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2RpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2ZhYnJpYy5uZXN0ZWQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dUaGVtZVNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kaWFsb2ctdGhlbWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1kaWFsb2cubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtZGlhbG9nLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RpYWxvZ0NvbXBvbmVudCBleHRlbmRzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuXHRkaWFsb2dOZXN0ZWRDb21wb25lbnQ6IFR5cGU8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0aGVtZVNlcnZpY2U6IEZhYnJpY0RpYWxvZ1RoZW1lU2VydmljZSxcblx0XHRcdFx0cmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0QEluamVjdCh0aGVtZVRva2VuKSB0aGVtZTogVGhlbWUsXG5cdFx0XHRcdEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBGYWJyaWNEaWFsb2dTZXJ2aWNlKSkgcHJpdmF0ZSByZWFkb25seSBkaWFsb2dTZXJ2aWNlOiBGYWJyaWNEaWFsb2dTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoZWxSZWYsIHJlbmRlcmVyLCB0aGVtZSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnRoZW1lU2VydmljZVxuXHRcdFx0Lm9uVGhlbWUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHRoZW1lOiBUaGVtZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmFkZFRoZW1lKHRoZW1lKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuY3JlYXRlTmVzdGVkQ29tcG9uZW50KHRoaXMuZGlhbG9nTmVzdGVkQ29tcG9uZW50KTtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHR0aGlzLmFkZFRoZW1lKCk7XG5cdH1cblxuXHRjbG9zZURpYWxvZygpIHtcblx0XHR0aGlzLmRpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdGNsaWNrT3V0c2lkZShldmVudDogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJDbGlja2VkKGV2ZW50KSkge1xuXHRcdFx0dGhpcy5kaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGRpYWxvZ0NvbnRlbnRSZWYgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS1kaWFsb2ctY29udGVudCcpO1xuXG5cdFx0aWYgKGRpYWxvZ0NvbnRlbnRSZWYpIHtcblx0XHRcdHJldHVybiAhZGlhbG9nQ29udGVudFJlZi5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTmVzdGVkQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+KTogdm9pZCB7XG5cdFx0Y29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdH1cblxufVxuIl19