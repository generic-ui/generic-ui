/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, Renderer2, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { DialogComponent } from '../../common/dialog/dialog.component';
import { themeToken } from '../../themes/theme.token';
import { Theme } from '../../themes/theme';
export class FabricInlineDialogComponent extends DialogComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} changeDetectorRef
     * @param {?} inlineDialogService
     * @param {?} elRef
     * @param {?} renderer
     * @param {?} theme
     * @param {?} inlineDialogGeometryService
     */
    constructor(componentFactoryResolver, changeDetectorRef, inlineDialogService, elRef, renderer, theme, inlineDialogGeometryService) {
        super(elRef, renderer, theme);
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
        this.createNestedComponent(this.inlineDialogNestedComponent);
        this.inlineDialogGeometryService.changeGeometry(this.elRef);
        this.addTheme();
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
                template: "<div [style.left.px]=\"dialogLeftAttribute\"\n\t [style.top.px]=\"dialogTopAttribute\"\n\t class=\"gui-inline-dialog-wrapper\">\n\n\t<div (document:click)=\"clickOutside($event)\"\n\t\t class=\"gui-inline-dialog-content\">\n\n\t\t<ng-template #container></ng-template>\n\n\t</div>\n\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-inline-dialog-wrapper{position:absolute;z-index:1}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fff;max-width:400px;box-shadow:0 3px 7px #999;border-radius:4px;z-index:1000;display:block}", ".gui-dark .gui-inline-dialog-content{background:#424242;color:#bdbdbd;box-shadow:0 1px 2px #424242}"]
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
    { type: Renderer2 },
    { type: Theme, decorators: [{ type: Inject, args: [themeToken,] }] },
    { type: InlineDialogGeometryService }
];
FabricInlineDialogComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }]
};
if (false) {
    /** @type {?} */
    FabricInlineDialogComponent.prototype.container;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibGF5b3V0L2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUlOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQWEzQyxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZUFBZTs7Ozs7Ozs7OztJQVkvRCxZQUE2Qix3QkFBa0QsRUFDM0QsaUJBQW9DLEVBQ2lCLG1CQUE4QyxFQUNuRyxLQUFpQixFQUNsQyxRQUFtQixFQUNDLEtBQVksRUFDZiwyQkFBd0Q7UUFDM0UsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFQRiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDaUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUEyQjtRQUNuRyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBR2pCLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7SUFFNUUsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsMkJBQTJCO2FBQzlCLHdCQUF3QixFQUFFO2FBQzFCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsaUJBQW9DLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNsRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNyRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsMkJBQTJCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBVTtRQUN0QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakM7SUFDRixDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxLQUFVO1FBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUFDLFNBQW9COztjQUMzQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO1FBRXpGLElBQUksSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUN4RjthQUFNO1lBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7WUExRUQsU0FBUyxTQUFDO2dCQUNWLGdUQUFrRDtnQkFLbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUNyQzs7OztZQTlCQSx3QkFBd0I7WUFGeEIsaUJBQWlCO1lBZ0JULHlCQUF5Qix1QkErQjdCLE1BQU0sU0FBQyxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLEVBQUM7WUE1Q3RELFVBQVU7WUFNVixTQUFTO1lBV0QsS0FBSyx1QkE4QlQsTUFBTSxTQUFDLFVBQVU7WUFqQ2IsMkJBQTJCOzs7d0JBa0JsQyxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFBakUsZ0RBQzRCOztJQUU1QixrRUFBdUM7O0lBRXZDLGlFQUFxQzs7SUFFckMseURBQTJCOztJQUMzQiwwREFBNEI7Ozs7O0lBRWhCLCtEQUFtRTs7Ozs7SUFDNUUsd0RBQXFEOzs7OztJQUNyRCwwREFBb0g7Ozs7O0lBQ3BILDRDQUFrQzs7Ozs7SUFHbEMsa0VBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0RWxlbWVudFJlZixcblx0Zm9yd2FyZFJlZixcblx0SW5qZWN0LFxuXHRJbmplY3Rvcixcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdFJlbmRlcmVyMixcblx0VHlwZSxcblx0Vmlld0NoaWxkLFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLWdlb21ldHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IHRoZW1lVG9rZW4gfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUudG9rZW4nO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nQ29yZHMgfSBmcm9tICcuL2lubGluZS1kaWFsb2ctY29yZHMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1pbmxpbmUtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWlubGluZS1kaWFsb2cubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtaW5saW5lLWRpYWxvZy5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNJbmxpbmVEaWFsb2dDb21wb25lbnQgZXh0ZW5kcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuXHRpbmxpbmVEaWFsb2dOZXN0ZWRDb21wb25lbnQ6IFR5cGU8YW55PjtcblxuXHRpbmxpbmVEaWFsb2dOZXN0ZWRJbmplY3RvcjogSW5qZWN0b3I7XG5cblx0ZGlhbG9nVG9wQXR0cmlidXRlOiBudW1iZXI7XG5cdGRpYWxvZ0xlZnRBdHRyaWJ1dGU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0QEluamVjdChmb3J3YXJkUmVmKCgpID0+IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UpKSBwcml2YXRlIHJlYWRvbmx5IGlubGluZURpYWxvZ1NlcnZpY2U6IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdEBJbmplY3QodGhlbWVUb2tlbikgdGhlbWU6IFRoZW1lLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZTogSW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoZWxSZWYsIHJlbmRlcmVyLCB0aGVtZSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlXG5cdFx0XHQub2JzZXJ2ZUlubGluZURpYWxvZ0NvcmRzKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChpbmxpbmVEaWFsb2dDb3JkczogSW5saW5lRGlhbG9nQ29yZHMpID0+IHtcblx0XHRcdFx0dGhpcy5kaWFsb2dUb3BBdHRyaWJ1dGUgPSBpbmxpbmVEaWFsb2dDb3Jkcy5nZXRWZXJ0aWNhbFBvc2l0aW9uKCk7XG5cdFx0XHRcdHRoaXMuZGlhbG9nTGVmdEF0dHJpYnV0ZSA9IGlubGluZURpYWxvZ0NvcmRzLmdldEhvcml6b250YWxQb3NpdGlvbigpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuY3JlYXRlTmVzdGVkQ29tcG9uZW50KHRoaXMuaW5saW5lRGlhbG9nTmVzdGVkQ29tcG9uZW50KTtcblx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZS5jaGFuZ2VHZW9tZXRyeSh0aGlzLmVsUmVmKTtcblx0XHR0aGlzLmFkZFRoZW1lKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRjbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyQ2xpY2tlZChldmVudCkpIHtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJDbGlja2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVOZXN0ZWRDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPGFueT4pOiB2b2lkIHtcblx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblxuXHRcdGlmICh0aGlzLmlubGluZURpYWxvZ05lc3RlZEluamVjdG9yKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSwgbnVsbCwgdGhpcy5pbmxpbmVEaWFsb2dOZXN0ZWRJbmplY3Rvcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblx0XHR9XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cbn1cbiJdfQ==