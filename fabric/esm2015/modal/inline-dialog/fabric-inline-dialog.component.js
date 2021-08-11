/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, Renderer2, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { themeToken } from '../../themes/theme.token';
import { Theme } from '../../themes/theme';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../themes/fabric-modal-theme.service';
export class FabricInlineDialogComponent extends FabricThemedComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} changeDetectorRef
     * @param {?} inlineDialogService
     * @param {?} elRef
     * @param {?} inlineDialogGeometryService
     * @param {?} renderer
     * @param {?} themeService
     * @param {?} theme
     */
    constructor(componentFactoryResolver, changeDetectorRef, inlineDialogService, elRef, inlineDialogGeometryService, renderer, themeService, theme) {
        super(elRef, renderer, themeService);
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.inlineDialogService = inlineDialogService;
        this.elRef = elRef;
        this.inlineDialogGeometryService = inlineDialogGeometryService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inlineDialogGeometryService
            .observeInlineDialogCords()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} inlineDialogCords
         * @return {?}
         */
        (inlineDialogCords) => {
            this.dialogTopAttribute = inlineDialogCords.getVerticalPosition();
            this.dialogLeftAttribute = inlineDialogCords.getHorizontalPosition();
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.createNestedComponent(this.inlineDialogNestedComponent);
        this.inlineDialogGeometryService.changeGeometry(this.elRef);
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickOutside(event) {
        if (this.isContainerClicked(event)) {
            this.inlineDialogService.close();
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    isContainerClicked(event) {
        return !this.elRef.nativeElement.contains(event.target);
    }
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    createNestedComponent(component) {
        /** @type {?} */
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        if (this.inlineDialogNestedInjector) {
            this.container.createComponent(componentFactory, null, this.inlineDialogNestedInjector);
        }
        else {
            this.container.createComponent(componentFactory);
        }
        this.changeDetectorRef.detectChanges();
    }
}
FabricInlineDialogComponent.decorators = [
    { type: Component, args: [{
                template: "<div [ngClass]=\"customClass\"\n\t [style.left.px]=\"dialogLeftAttribute\"\n\t [style.top.px]=\"dialogTopAttribute\"\n\t class=\"gui-inline-dialog-wrapper\">\n\n\t<div (document:click)=\"clickOutside($event)\"\n\t\t class=\"gui-inline-dialog-content\">\n\n\t\t<ng-template #container></ng-template>\n\n\t</div>\n\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-inline-dialog-wrapper{box-sizing:border-box;position:absolute;z-index:1}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fff;border-radius:4px;box-shadow:0 3px 7px #999;box-sizing:border-box;display:block;max-width:400px;z-index:1000}", ".gui-dark .gui-inline-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}"]
            }] }
];
/** @nocollapse */
FabricInlineDialogComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: FabricInlineDialogService, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => FabricInlineDialogService)),] }] },
    { type: ElementRef },
    { type: InlineDialogGeometryService },
    { type: Renderer2 },
    { type: FabricModalThemeService },
    { type: Theme, decorators: [{ type: Inject, args: [themeToken,] }] }
];
FabricInlineDialogComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }]
};
if (false) {
    /** @type {?} */
    FabricInlineDialogComponent.prototype.container;
    /** @type {?} */
    FabricInlineDialogComponent.prototype.customClass;
    /** @type {?} */
    FabricInlineDialogComponent.prototype.inlineDialogNestedComponent;
    /** @type {?} */
    FabricInlineDialogComponent.prototype.inlineDialogNestedInjector;
    /** @type {?} */
    FabricInlineDialogComponent.prototype.dialogTopAttribute;
    /** @type {?} */
    FabricInlineDialogComponent.prototype.dialogLeftAttribute;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.inlineDialogService;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.inlineDialogGeometryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvaW5saW5lLWRpYWxvZy9mYWJyaWMtaW5saW5lLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLFVBQVUsRUFDVixNQUFNLEVBSU4sU0FBUyxFQUVULFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFZbEYsTUFBTSxPQUFPLDJCQUE0QixTQUFRLHFCQUFxQjs7Ozs7Ozs7Ozs7SUFlckUsWUFBNkIsd0JBQWtELEVBQzNELGlCQUFvQyxFQUNpQixtQkFBOEMsRUFDbkcsS0FBaUIsRUFDakIsMkJBQXdELEVBQ3pFLFFBQW1CLEVBQ25CLFlBQXFDLEVBQ2pCLEtBQVk7UUFDbEMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFSVCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDaUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUEyQjtRQUNuRyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7SUFLNUUsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsMkJBQTJCO2FBQzlCLHdCQUF3QixFQUFFO2FBQzFCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsaUJBQW9DLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNsRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNyRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2pDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsS0FBVTtRQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxTQUE0Qzs7Y0FDbkUsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztRQUV6RixJQUFJLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDeEY7YUFBTTtZQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7O1lBOUVELFNBQVMsU0FBQztnQkFDViw4VUFBa0Q7Z0JBS2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDckM7Ozs7WUFoQ0Esd0JBQXdCO1lBRnhCLGlCQUFpQjtZQWdCVCx5QkFBeUIsdUJBb0M3QixNQUFNLFNBQUMsVUFBVTs7O29CQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixFQUFDO1lBakR0RCxVQUFVO1lBY0YsMkJBQTJCO1lBUm5DLFNBQVM7WUFjRCx1QkFBdUI7WUFKdkIsS0FBSyx1QkFzQ1QsTUFBTSxTQUFDLFVBQVU7Ozt3QkFwQnBCLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7OztJQUFqRSxnREFDNEI7O0lBRTVCLGtEQUFvQjs7SUFFcEIsa0VBQStEOztJQUUvRCxpRUFBcUM7O0lBRXJDLHlEQUEyQjs7SUFFM0IsMERBQTRCOzs7OztJQUVoQiwrREFBbUU7Ozs7O0lBQzVFLHdEQUFxRDs7Ozs7SUFDckQsMERBQW9IOzs7OztJQUNwSCw0Q0FBa0M7Ozs7O0lBQ2xDLGtFQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdEVsZW1lbnRSZWYsXG5cdGZvcndhcmRSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0b3IsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRSZW5kZXJlcjIsXG5cdFR5cGUsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0NvbnRhaW5lclJlZixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtaW5saW5lLWRpYWxvZy1nZW9tZXRyeS5zZXJ2aWNlJztcbmltcG9ydCB7IHRoZW1lVG9rZW4gfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUudG9rZW4nO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nQ29yZHMgfSBmcm9tICcuL2lubGluZS1kaWFsb2ctY29yZHMnO1xuaW1wb3J0IHsgRmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2ZhYnJpYy5uZXN0ZWQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNUaGVtZWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvZmFicmljLXRoZW1lZC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1pbmxpbmUtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWlubGluZS1kaWFsb2cubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtaW5saW5lLWRpYWxvZy5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNJbmxpbmVEaWFsb2dDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNUaGVtZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuXHRjdXN0b21DbGFzczogc3RyaW5nO1xuXG5cdGlubGluZURpYWxvZ05lc3RlZENvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+O1xuXG5cdGlubGluZURpYWxvZ05lc3RlZEluamVjdG9yOiBJbmplY3RvcjtcblxuXHRkaWFsb2dUb3BBdHRyaWJ1dGU6IG51bWJlcjtcblxuXHRkaWFsb2dMZWZ0QXR0cmlidXRlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlKSkgcHJpdmF0ZSByZWFkb25seSBpbmxpbmVEaWFsb2dTZXJ2aWNlOiBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZTogSW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlLFxuXHRcdFx0XHRyZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHR0aGVtZVNlcnZpY2U6IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLFxuXHRcdFx0XHRASW5qZWN0KHRoZW1lVG9rZW4pIHRoZW1lOiBUaGVtZSkge1xuXHRcdHN1cGVyKGVsUmVmLCByZW5kZXJlciwgdGhlbWVTZXJ2aWNlKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlXG5cdFx0XHQub2JzZXJ2ZUlubGluZURpYWxvZ0NvcmRzKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChpbmxpbmVEaWFsb2dDb3JkczogSW5saW5lRGlhbG9nQ29yZHMpID0+IHtcblx0XHRcdFx0dGhpcy5kaWFsb2dUb3BBdHRyaWJ1dGUgPSBpbmxpbmVEaWFsb2dDb3Jkcy5nZXRWZXJ0aWNhbFBvc2l0aW9uKCk7XG5cdFx0XHRcdHRoaXMuZGlhbG9nTGVmdEF0dHJpYnV0ZSA9IGlubGluZURpYWxvZ0NvcmRzLmdldEhvcml6b250YWxQb3NpdGlvbigpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXHRcdHRoaXMuY3JlYXRlTmVzdGVkQ29tcG9uZW50KHRoaXMuaW5saW5lRGlhbG9nTmVzdGVkQ29tcG9uZW50KTtcblx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZS5jaGFuZ2VHZW9tZXRyeSh0aGlzLmVsUmVmKTtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdGNsaWNrT3V0c2lkZShldmVudDogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJDbGlja2VkKGV2ZW50KSkge1xuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU5lc3RlZENvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50Pik6IHZvaWQge1xuXHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXG5cdFx0aWYgKHRoaXMuaW5saW5lRGlhbG9nTmVzdGVkSW5qZWN0b3IpIHtcblx0XHRcdHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5LCBudWxsLCB0aGlzLmlubGluZURpYWxvZ05lc3RlZEluamVjdG9yKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXHRcdH1cblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxufVxuIl19