/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, Input, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GeometryService } from './geometry.service';
import { Placement } from './placement';
var FabricDropdownComponent = /** @class */ (function () {
    function FabricDropdownComponent(platformId, elementRef, renderer, changeDetectorRef, geometryService) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.geometryService = geometryService;
        this.disabled = false;
        this.dropdownText = 'Dropdown';
        this.arrow = true;
        this.width = 120;
        this.showOnHover = false;
        this.isArrowEnabled = this.arrow;
        this.open = false;
        this.topBorderWidth = 1;
        this.onResize();
    }
    /**
     * @return {?}
     */
    FabricDropdownComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.windowSize = window.innerHeight;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricDropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.placement) {
            this.changePlacement();
        }
        if (changes.arrow) {
            this.isArrowEnabled = this.arrow;
        }
    };
    /**
     * @return {?}
     */
    FabricDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.observeGeometry();
    };
    /**
     * @return {?}
     */
    FabricDropdownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabricDropdownComponent.prototype.tryToOpen = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isContainerDisabled(event)) {
            event.stopPropagation();
        }
        else {
            this.openMenu(!this.open);
            this.changeDetectorRef.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    FabricDropdownComponent.prototype.tryToOpenOnHover = /**
     * @return {?}
     */
    function () {
        if (this.showOnHover) {
            this.openMenu(!this.open);
            this.changeDetectorRef.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    FabricDropdownComponent.prototype.hideOnHover = /**
     * @return {?}
     */
    function () {
        if (this.showOnHover) {
            this.hideItems();
            this.open = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabricDropdownComponent.prototype.clickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isContainerClicked(event)) {
            this.openMenu(false);
        }
    };
    /**
     * @private
     * @param {?} opened
     * @return {?}
     */
    FabricDropdownComponent.prototype.openMenu = /**
     * @private
     * @param {?} opened
     * @return {?}
     */
    function (opened) {
        this.open = opened;
        if (this.open) {
            this.showItems();
        }
        else {
            this.hideItems();
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.showItems = /**
     * @private
     * @return {?}
     */
    function () {
        this.addClass(this.elementRef.nativeElement, 'gui-menu-opened');
        this.geometryService.changeGeometry(this.containerRef, this.dropdownMenuRef, this.windowSize);
        if (this.canOpenDownward || !this.canOpenUpward) {
            this.openDownward();
        }
        else {
            this.openUpward();
        }
        if (this.placement === Placement.Right) {
            this.openRight();
        }
        if (this.placement === Placement.Left) {
            this.openLeft();
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.observeGeometry = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription =
            this.geometryService
                .watchGeometry()
                .subscribe((/**
             * @param {?} geometry
             * @return {?}
             */
            function (geometry) {
                _this.containerHeight = geometry.getContainerHeight();
                _this.containerWidth = geometry.getContainerWidth();
                _this.canOpenUpward = geometry.canOpenUpward();
                _this.canOpenDownward = geometry.canOpenDownward();
            }));
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.openDownward = /**
     * @private
     * @return {?}
     */
    function () {
        this.topPosition = null;
        this.bottomPosition = this.containerHeight;
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.openUpward = /**
     * @private
     * @return {?}
     */
    function () {
        this.bottomPosition = null;
        this.topPosition = this.containerHeight;
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.openRight = /**
     * @private
     * @return {?}
     */
    function () {
        this.bottomPosition = -this.topBorderWidth;
        this.topPosition = null;
        this.horizontalPosition = this.containerWidth;
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.openLeft = /**
     * @private
     * @return {?}
     */
    function () {
        this.bottomPosition = -this.topBorderWidth;
        this.topPosition = null;
        this.horizontalPosition = -(this.containerWidth + 1);
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.changePlacement = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.placement === Placement.Right) {
            this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
            this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
        }
        else {
            this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
            this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.hideItems = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var itemsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-menu-opened');
        if (itemsElHasOpenClass) {
            this.removeClass(this.elementRef.nativeElement, 'gui-menu-opened');
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FabricDropdownComponent.prototype.isContainerClicked = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return !this.elementRef.nativeElement.contains(event.target);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FabricDropdownComponent.prototype.isContainerDisabled = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.target.classList.contains('gui-disabled');
    };
    /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    FabricDropdownComponent.prototype.addClass = /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        this.renderer.addClass(element, name);
    };
    /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    FabricDropdownComponent.prototype.removeClass = /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        this.renderer.removeClass(element, name);
    };
    FabricDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-dropdown',
                    template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t (mouseenter)=\"tryToOpenOnHover()\"\n\t (mouseleave)=\"hideOnHover()\"\n\t [ngClass]=\"{'gui-disabled': disabled}\"\n\t [style.width.px]=\"width\"\n\t class=\"gui-dropdown-container\">\n\t<div class=\"gui-dropdown-text\">{{dropdownText}}</div>\n\t<span [ngClass]=\"{'gui-dropdown-arrow': isArrowEnabled}\"></span>\n\t<div #dropdownMenu\n\t\t [style.bottom.px]=\"topPosition\"\n\t\t [style.left.px]=\"horizontalPosition\"\n\t\t [style.top.px]=\"bottomPosition\"\n\t\t class=\"gui-dropdown-menu\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-dropdown]': 'true'
                    },
                    providers: [
                        GeometryService
                    ],
                    styles: [".gui-dropdown .gui-dropdown-container{background:#fff;box-sizing:border-box;border-radius:4px;cursor:pointer;color:#333;display:inline-block;font:14px Arial;padding:8px 32px 8px 12px;position:relative;width:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d6d6d6}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{position:absolute;cursor:pointer;top:8px;right:12px;height:16px;width:16px;opacity:.6;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACkSURBVDhPtdOxCsIwFIXhoOjS1+kqLjro4lQUwUEdfGpdOlhXLY7qfzABKaXcS/HAR7okublJwz8zjGNnBnFsyxrb76c/Ba54YYMRzFHpE9zxxg1HuDODqtAiNXZwJ0cFLfLAHmO4ssAZrcfpuoWU5o5qrCnq/BRpdx3hhAymrPA72dXEJUpo8gWabG6e3sEcT+j6DnA9pBRVoWvrFdMP1SMhfACzqx/mas6VwQAAAABJRU5ErkJggg==)}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow:hover{opacity:.8}.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{box-sizing:border-box;background:inherit;display:none;left:-1px;overflow:hidden;width:inherit;position:absolute;z-index:2;border-radius:4px;border:1px solid #d6d6d6}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{padding:8px 32px 8px 12px;width:inherit;list-style-type:none}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#ccc}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACMSURBVDhPrZJLCoAwDESruNRT9dw9lRvBhXbKEKTNpwsfSGLtY6I1/UIp5cHFW5eFtUlsGzlneaaxsg5EySLWhIOt4Mn9OHvdfLIXtLG195iSrQ8QypYIXNkTgSmbx0Eu1gEvcatpN3shGtWVgCaGEujFKQl8F6YlIItVGv5LSwLmcXjSAFK15B9J6QWDkUXx1vE/hQAAAABJRU5ErkJggg==) 0 0/contain no-repeat;border-color:#ce93d8 transparent transparent}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-arrow{border-color:transparent transparent #ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}"]
                }] }
    ];
    /** @nocollapse */
    FabricDropdownComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: GeometryService }
    ]; };
    FabricDropdownComponent.propDecorators = {
        dropdownMenuRef: [{ type: ViewChild, args: ['dropdownMenu', { static: true },] }],
        containerRef: [{ type: ViewChild, args: ['container', { static: true },] }],
        onResize: [{ type: HostListener, args: ['window:resize',] }],
        disabled: [{ type: Input }],
        dropdownText: [{ type: Input }],
        arrow: [{ type: Input }],
        placement: [{ type: Input }],
        width: [{ type: Input }],
        showOnHover: [{ type: Input }]
    };
    return FabricDropdownComponent;
}());
export { FabricDropdownComponent };
if (false) {
    /** @type {?} */
    FabricDropdownComponent.prototype.dropdownMenuRef;
    /** @type {?} */
    FabricDropdownComponent.prototype.containerRef;
    /** @type {?} */
    FabricDropdownComponent.prototype.disabled;
    /** @type {?} */
    FabricDropdownComponent.prototype.dropdownText;
    /** @type {?} */
    FabricDropdownComponent.prototype.arrow;
    /** @type {?} */
    FabricDropdownComponent.prototype.placement;
    /** @type {?} */
    FabricDropdownComponent.prototype.width;
    /** @type {?} */
    FabricDropdownComponent.prototype.showOnHover;
    /** @type {?} */
    FabricDropdownComponent.prototype.isArrowEnabled;
    /** @type {?} */
    FabricDropdownComponent.prototype.containerWidth;
    /** @type {?} */
    FabricDropdownComponent.prototype.containerHeight;
    /** @type {?} */
    FabricDropdownComponent.prototype.windowSize;
    /** @type {?} */
    FabricDropdownComponent.prototype.horizontalPosition;
    /** @type {?} */
    FabricDropdownComponent.prototype.bottomPosition;
    /** @type {?} */
    FabricDropdownComponent.prototype.topPosition;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.canOpenDownward;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.canOpenUpward;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.open;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.topBorderWidth;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.geometryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibGF5b3V0L2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxXQUFXLEVBQ1gsU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHeEM7SUFvRUMsaUNBQXlDLFVBQWUsRUFDN0MsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsaUJBQW9DLEVBQ3BDLGVBQWdDO1FBSkYsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUF2QzNDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsaUJBQVksR0FBVyxVQUFVLENBQUM7UUFHbEMsVUFBSyxHQUFZLElBQUksQ0FBQztRQU10QixVQUFLLEdBQVcsR0FBRyxDQUFDO1FBR3BCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLG1CQUFjLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQztRQVk3QixTQUFJLEdBQVksS0FBSyxDQUFDO1FBSWIsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFPM0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxD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Qyx3Q0FDc0I7O0lBRXRCLDRDQUNxQjs7SUFFckIsd0NBQ29COztJQUVwQiw4Q0FDNkI7O0lBRTdCLGlEQUFxQzs7SUFFckMsaURBQXVCOztJQUN2QixrREFBd0I7O0lBQ3hCLDZDQUFtQjs7SUFFbkIscURBQTJCOztJQUMzQixpREFBdUI7O0lBQ3ZCLDhDQUFvQjs7Ozs7SUFFcEIsa0RBQWlDOzs7OztJQUNqQyxnREFBK0I7Ozs7O0lBQy9CLHVDQUE4Qjs7Ozs7SUFFOUIsK0NBQW1DOzs7OztJQUVuQyxpREFBNEM7Ozs7O0lBRWhDLDZDQUE0Qzs7Ozs7SUFDckQsNkNBQThCOzs7OztJQUM5QiwyQ0FBMkI7Ozs7O0lBQzNCLG9EQUE0Qzs7Ozs7SUFDNUMsa0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEhvc3RMaXN0ZW5lcixcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRPbkluaXQsXG5cdFBMQVRGT1JNX0lELFxuXHRSZW5kZXJlcjIsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9nZW9tZXRyeS5zZXJ2aWNlJztcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSc7XG5cbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gJy4vcGxhY2VtZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZHJvcGRvd24nLFxuXHR0ZW1wbGF0ZVVybDogYGRyb3Bkb3duLmNvbXBvbmVudC5odG1sYCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZHJvcGRvd24ubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9kcm9wZG93bi5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2Ryb3Bkb3duLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktZHJvcGRvd25dJzogJ3RydWUnXG5cdH0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEdlb21ldHJ5U2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0Ryb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duTWVudScsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGRyb3Bkb3duTWVudVJlZjogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRjb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG5cdG9uUmVzaXplKCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLndpbmRvd1NpemUgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0fVxuXHR9XG5cblx0QElucHV0KClcblx0ZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRkcm9wZG93blRleHQ6IHN0cmluZyA9ICdEcm9wZG93bic7XG5cblx0QElucHV0KClcblx0YXJyb3c6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdEBJbnB1dCgpXG5cdHBsYWNlbWVudDogUGxhY2VtZW50O1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXIgPSAxMjA7XG5cblx0QElucHV0KClcblx0c2hvd09uSG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRpc0Fycm93RW5hYmxlZDogYm9vbGVhbiA9IHRoaXMuYXJyb3c7XG5cblx0Y29udGFpbmVyV2lkdGg6IG51bWJlcjtcblx0Y29udGFpbmVySGVpZ2h0OiBudW1iZXI7XG5cdHdpbmRvd1NpemU6IG51bWJlcjtcblxuXHRob3Jpem9udGFsUG9zaXRpb246IG51bWJlcjtcblx0Ym90dG9tUG9zaXRpb246IG51bWJlcjtcblx0dG9wUG9zaXRpb246IG51bWJlcjtcblxuXHRwcml2YXRlIGNhbk9wZW5Eb3dud2FyZDogYm9vbGVhbjtcblx0cHJpdmF0ZSBjYW5PcGVuVXB3YXJkOiBib29sZWFuO1xuXHRwcml2YXRlIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdG9wQm9yZGVyV2lkdGg6IG51bWJlciA9IDE7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBnZW9tZXRyeVNlcnZpY2U6IEdlb21ldHJ5U2VydmljZSkge1xuXHRcdHRoaXMub25SZXNpemUoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5wbGFjZW1lbnQpIHtcblx0XHRcdHRoaXMuY2hhbmdlUGxhY2VtZW50KCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuYXJyb3cpIHtcblx0XHRcdHRoaXMuaXNBcnJvd0VuYWJsZWQgPSB0aGlzLmFycm93O1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub2JzZXJ2ZUdlb21ldHJ5KCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0dHJ5VG9PcGVuKGV2ZW50OiBhbnkpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyRGlzYWJsZWQoZXZlbnQpKSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcGVuTWVudSghdGhpcy5vcGVuKTtcblx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxuXG5cdHRyeVRvT3Blbk9uSG92ZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2hvd09uSG92ZXIpIHtcblx0XHRcdHRoaXMub3Blbk1lbnUoIXRoaXMub3Blbik7XG5cdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHR9XG5cdH1cblxuXHRoaWRlT25Ib3ZlcigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zaG93T25Ib3Zlcikge1xuXHRcdFx0dGhpcy5oaWRlSXRlbXMoKTtcblx0XHRcdHRoaXMub3BlbiA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGNsaWNrT3V0c2lkZShldmVudDogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJDbGlja2VkKGV2ZW50KSkge1xuXHRcdFx0dGhpcy5vcGVuTWVudShmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvcGVuTWVudShvcGVuZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLm9wZW4gPSBvcGVuZWQ7XG5cblx0XHRpZiAodGhpcy5vcGVuKSB7XG5cdFx0XHR0aGlzLnNob3dJdGVtcygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhpZGVJdGVtcygpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2hvd0l0ZW1zKCk6IHZvaWQge1xuXHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktbWVudS1vcGVuZWQnKTtcblx0XHR0aGlzLmdlb21ldHJ5U2VydmljZS5jaGFuZ2VHZW9tZXRyeSh0aGlzLmNvbnRhaW5lclJlZiwgdGhpcy5kcm9wZG93bk1lbnVSZWYsIHRoaXMud2luZG93U2l6ZSk7XG5cblx0XHRpZiAodGhpcy5jYW5PcGVuRG93bndhcmQgfHwgIXRoaXMuY2FuT3BlblVwd2FyZCkge1xuXHRcdFx0dGhpcy5vcGVuRG93bndhcmQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcGVuVXB3YXJkKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGxhY2VtZW50ID09PSBQbGFjZW1lbnQuUmlnaHQpIHtcblx0XHRcdHRoaXMub3BlblJpZ2h0KCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGxhY2VtZW50ID09PSBQbGFjZW1lbnQuTGVmdCkge1xuXHRcdFx0dGhpcy5vcGVuTGVmdCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuc3Vic2NyaXB0aW9uID1cblx0XHRcdHRoaXMuZ2VvbWV0cnlTZXJ2aWNlXG5cdFx0XHRcdC53YXRjaEdlb21ldHJ5KClcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHQoZ2VvbWV0cnk6IEdlb21ldHJ5KSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRhaW5lckhlaWdodCA9IGdlb21ldHJ5LmdldENvbnRhaW5lckhlaWdodCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5jb250YWluZXJXaWR0aCA9IGdlb21ldHJ5LmdldENvbnRhaW5lcldpZHRoKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNhbk9wZW5VcHdhcmQgPSBnZW9tZXRyeS5jYW5PcGVuVXB3YXJkKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNhbk9wZW5Eb3dud2FyZCA9IGdlb21ldHJ5LmNhbk9wZW5Eb3dud2FyZCgpO1xuXHRcdFx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBvcGVuRG93bndhcmQoKTogdm9pZCB7XG5cdFx0dGhpcy50b3BQb3NpdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBvcGVuVXB3YXJkKCk6IHZvaWQge1xuXHRcdHRoaXMuYm90dG9tUG9zaXRpb24gPSBudWxsO1xuXHRcdHRoaXMudG9wUG9zaXRpb24gPSB0aGlzLmNvbnRhaW5lckhlaWdodDtcblx0fVxuXG5cdHByaXZhdGUgb3BlblJpZ2h0KCk6IHZvaWQge1xuXHRcdHRoaXMuYm90dG9tUG9zaXRpb24gPSAtdGhpcy50b3BCb3JkZXJXaWR0aDtcblx0XHR0aGlzLnRvcFBvc2l0aW9uID0gbnVsbDtcblx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IHRoaXMuY29udGFpbmVyV2lkdGg7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5MZWZ0KCk6IHZvaWQge1xuXHRcdHRoaXMuYm90dG9tUG9zaXRpb24gPSAtdGhpcy50b3BCb3JkZXJXaWR0aDtcblx0XHR0aGlzLnRvcFBvc2l0aW9uID0gbnVsbDtcblx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IC0odGhpcy5jb250YWluZXJXaWR0aCArIDEpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGFuZ2VQbGFjZW1lbnQoKSB7XG5cdFx0aWYgKHRoaXMucGxhY2VtZW50ID09PSBQbGFjZW1lbnQuUmlnaHQpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5kcm9wZG93bk1lbnVSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kcm9wZG93bi1sZWZ0Jyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMuZHJvcGRvd25NZW51UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZHJvcGRvd24tcmlnaHQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcyh0aGlzLmRyb3Bkb3duTWVudVJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRyb3Bkb3duLXJpZ2h0Jyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMuZHJvcGRvd25NZW51UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZHJvcGRvd24tbGVmdCcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaGlkZUl0ZW1zKCk6IHZvaWQge1xuXHRcdGNvbnN0IGl0ZW1zRWxIYXNPcGVuQ2xhc3MgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2d1aS1tZW51LW9wZW5lZCcpO1xuXG5cdFx0aWYgKGl0ZW1zRWxIYXNPcGVuQ2xhc3MpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktbWVudS1vcGVuZWQnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyQ2xpY2tlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckRpc2FibGVkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ3VpLWRpc2FibGVkJyk7XG5cdH1cblxuXHRwcml2YXRlIGFkZENsYXNzKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgbmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgbmFtZSk7XG5cdH1cbn1cbiJdfQ==