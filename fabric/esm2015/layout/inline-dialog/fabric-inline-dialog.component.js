/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
export class FabricInlineDialogComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} changeDetectorRef
     * @param {?} inlineDialogService
     * @param {?} elementRef
     * @param {?} inlineDialogGeometryService
     */
    constructor(componentFactoryResolver, changeDetectorRef, inlineDialogService, elementRef, inlineDialogGeometryService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.inlineDialogService = inlineDialogService;
        this.elementRef = elementRef;
        this.inlineDialogGeometryService = inlineDialogGeometryService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inlineDialogCordsSubscription =
            this.inlineDialogGeometryService
                .observeInlineDialogCords()
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
        this.inlineDialogGeometryService.changeGeometry(this.elementRef);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.inlineDialogCordsSubscription) {
            this.inlineDialogCordsSubscription.unsubscribe();
        }
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
        return !this.elementRef.nativeElement.contains(event.target);
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
    FabricInlineDialogComponent.prototype.inlineDialogCordsSubscription;
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
    FabricInlineDialogComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.inlineDialogGeometryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibGF5b3V0L2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUtOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBWXRGLE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7O0lBY3ZDLFlBQW9CLHdCQUFrRCxFQUMzRCxpQkFBb0MsRUFDaUIsbUJBQThDLEVBQ25HLFVBQXNCLEVBQ3RCLDJCQUF3RDtRQUovQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDaUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUEyQjtRQUNuRyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7SUFDbkUsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsNkJBQTZCO1lBQ2pDLElBQUksQ0FBQywyQkFBMkI7aUJBQzlCLHdCQUF3QixFQUFFO2lCQUMxQixTQUFTOzs7O1lBQUMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsNkJBQTZCLEVBQUU7WUFDdkMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pEO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBVTtRQUN0QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakM7SUFDRixDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxLQUFVO1FBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUFDLFNBQW9COztjQUMzQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO1FBRXpGLElBQUksSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUN4RjthQUFNO1lBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7WUF4RUQsU0FBUyxTQUFDO2dCQUNWLGdUQUFrRDtnQkFLbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUNyQzs7OztZQXpCQSx3QkFBd0I7WUFGeEIsaUJBQWlCO1lBY1QseUJBQXlCLHVCQThCN0IsTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsRUFBQztZQXpDdEQsVUFBVTtZQWFGLDJCQUEyQjs7O3dCQWNsQyxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFBakUsZ0RBQzRCOztJQUU1QixrRUFBdUM7O0lBRXZDLGlFQUFxQzs7SUFFckMseURBQTJCOztJQUMzQiwwREFBNEI7Ozs7O0lBRTVCLG9FQUFvRDs7Ozs7SUFFeEMsK0RBQTBEOzs7OztJQUNuRSx3REFBNEM7Ozs7O0lBQzVDLDBEQUEyRzs7Ozs7SUFDM0csaURBQThCOzs7OztJQUM5QixrRUFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRFbGVtZW50UmVmLFxuXHRmb3J3YXJkUmVmLFxuXHRJbmplY3QsXG5cdEluamVjdG9yLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0VHlwZSxcblx0Vmlld0NoaWxkLFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLWdlb21ldHJ5LnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1pbmxpbmUtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWlubGluZS1kaWFsb2cubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtaW5saW5lLWRpYWxvZy5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNJbmxpbmVEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuXHRpbmxpbmVEaWFsb2dOZXN0ZWRDb21wb25lbnQ6IFR5cGU8YW55PjtcblxuXHRpbmxpbmVEaWFsb2dOZXN0ZWRJbmplY3RvcjogSW5qZWN0b3I7XG5cblx0ZGlhbG9nVG9wQXR0cmlidXRlOiBudW1iZXI7XG5cdGRpYWxvZ0xlZnRBdHRyaWJ1dGU6IG51bWJlcjtcblxuXHRwcml2YXRlIGlubGluZURpYWxvZ0NvcmRzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlKSkgcHJpdmF0ZSBpbmxpbmVEaWFsb2dTZXJ2aWNlOiBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlOiBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UpIHtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dDb3Jkc1N1YnNjcmlwdGlvbiA9XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZVxuXHRcdFx0XHQub2JzZXJ2ZUlubGluZURpYWxvZ0NvcmRzKClcblx0XHRcdFx0LnN1YnNjcmliZSgoaW5saW5lRGlhbG9nQ29yZHMpID0+IHtcblx0XHRcdFx0XHR0aGlzLmRpYWxvZ1RvcEF0dHJpYnV0ZSA9IGlubGluZURpYWxvZ0NvcmRzLmdldFZlcnRpY2FsUG9zaXRpb24oKTtcblx0XHRcdFx0XHR0aGlzLmRpYWxvZ0xlZnRBdHRyaWJ1dGUgPSBpbmxpbmVEaWFsb2dDb3Jkcy5nZXRIb3Jpem9udGFsUG9zaXRpb24oKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5jcmVhdGVOZXN0ZWRDb21wb25lbnQodGhpcy5pbmxpbmVEaWFsb2dOZXN0ZWRDb21wb25lbnQpO1xuXHRcdHRoaXMuaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlLmNoYW5nZUdlb21ldHJ5KHRoaXMuZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5pbmxpbmVEaWFsb2dDb3Jkc1N1YnNjcmlwdGlvbikge1xuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dDb3Jkc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdH1cblx0fVxuXG5cdGNsaWNrT3V0c2lkZShldmVudDogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJDbGlja2VkKGV2ZW50KSkge1xuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTmVzdGVkQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxhbnk+KTogdm9pZCB7XG5cdFx0Y29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cblx0XHRpZiAodGhpcy5pbmxpbmVEaWFsb2dOZXN0ZWRJbmplY3Rvcikge1xuXHRcdFx0dGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnksIG51bGwsIHRoaXMuaW5saW5lRGlhbG9nTmVzdGVkSW5qZWN0b3IpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdFx0fVxuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG59XG4iXX0=