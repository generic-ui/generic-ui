/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricDialogService } from './fabric-dialog.service';
export class FabricDialogComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} dialogService
     */
    constructor(componentFactoryResolver, changeDetectorRef, elementRef, dialogService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.dialogService = dialogService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.createNestedComponent(this.dialogNestedComponent);
        this.changeDetectorRef.detectChanges();
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
        const dialogContentRef = this.elementRef.nativeElement.querySelector('.gui-dialog-content');
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
                template: "<div class=\"gui-dialog-blanket\"></div>\n<div (click)=\"clickOutside($event)\"\n\t class=\"gui-dialog-wrapper\">\n\t<div class=\"gui-dialog-content\">\n\t\t<a (click)=\"closeDialog()\" class=\"gui-dialog-close\"></a>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-dialog-blanket{background:rgba(0,0,0,.32);position:fixed;height:100%;width:100%;left:0;top:0;pointer-events:none;z-index:1000}.gui-dialog-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:Arial;position:fixed;height:100%;width:100%;left:0;top:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:auto;z-index:1000}.gui-dialog-wrapper .gui-dialog-content{background-color:#fff;max-width:400px;position:relative;border-radius:4px;box-shadow:0 3px 7px #999;-webkit-animation:.1s ease-in display-dialog;animation:.1s ease-in display-dialog;padding:24px}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-title{color:#333;font-size:20px;margin:0 0 16px}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close{position:absolute;cursor:pointer;right:8px;top:8px;width:16px;height:16px;opacity:.4}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:hover{opacity:.8}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after,.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before{position:absolute;left:7px;content:' ';height:16px;width:2px;background-color:#333}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}@-webkit-keyframes display-dialog{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes display-dialog{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}", ".gui-dark .gui-dialog-wrapper .gui-dialog-content{background:#424242;color:#bdbdbd;box-shadow:0 1px 2px #424242}.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after,.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before{background:#bdbdbd}"]
            }] }
];
/** @nocollapse */
FabricDialogComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: ElementRef },
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
    FabricDialogComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricDialogComponent.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJsYXlvdXQvZGlhbG9nL2ZhYnJpYy1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUVOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBVzlELE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7SUFPakMsWUFBb0Isd0JBQWtELEVBQzNELGlCQUFvQyxFQUNwQyxVQUFzQixFQUN5QixhQUFrQztRQUh4RSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN5QixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7SUFDNUYsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3RCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0I7SUFDRixDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxLQUFVOztjQUM5QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUM7UUFFM0YsSUFBSSxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUFDLFNBQW9COztjQUMzQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO1FBRXpGLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBakRELFNBQVMsU0FBQztnQkFDVixxU0FBNkM7Z0JBSzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDckM7Ozs7WUFwQkEsd0JBQXdCO1lBRnhCLGlCQUFpQjtZQUdqQixVQUFVO1lBU0YsbUJBQW1CLHVCQXFCdkIsTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQzs7O3dCQVIvQyxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFBakUsMENBQzRCOztJQUU1QixzREFBaUM7Ozs7O0lBRXJCLHlEQUEwRDs7Ozs7SUFDbkUsa0RBQTRDOzs7OztJQUM1QywyQ0FBOEI7Ozs7O0lBQzlCLDhDQUF5RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdEVsZW1lbnRSZWYsXG5cdGZvcndhcmRSZWYsXG5cdEluamVjdCxcblx0VHlwZSxcblx0Vmlld0NoaWxkLFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRpYWxvZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWRpYWxvZy5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1kaWFsb2cuZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuXHRkaWFsb2dOZXN0ZWRDb21wb25lbnQ6IFR5cGU8YW55PjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRmFicmljRGlhbG9nU2VydmljZSkpIHByaXZhdGUgZGlhbG9nU2VydmljZTogRmFicmljRGlhbG9nU2VydmljZSkge1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuY3JlYXRlTmVzdGVkQ29tcG9uZW50KHRoaXMuZGlhbG9nTmVzdGVkQ29tcG9uZW50KTtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdGNsb3NlRGlhbG9nKCkge1xuXHRcdHRoaXMuZGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0Y2xpY2tPdXRzaWRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLmRpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyQ2xpY2tlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgZGlhbG9nQ29udGVudFJlZiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWktZGlhbG9nLWNvbnRlbnQnKTtcblxuXHRcdGlmIChkaWFsb2dDb250ZW50UmVmKSB7XG5cdFx0XHRyZXR1cm4gIWRpYWxvZ0NvbnRlbnRSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU5lc3RlZENvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8YW55Pik6IHZvaWQge1xuXHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXG5cdFx0dGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXHR9XG59XG4iXX0=