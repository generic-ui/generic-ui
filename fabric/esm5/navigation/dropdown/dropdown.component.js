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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsV0FBVyxFQUNYLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3hDO0lBb0VDLGlDQUF5QyxVQUFlLEVBQzdDLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLGlCQUFvQyxFQUNwQyxlQUFnQztRQUpGLGVBQVUsR0FBVixVQUFVLENBQUs7UUFDN0MsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBdkMzQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLGlCQUFZLEdBQVcsVUFBVSxDQUFDO1FBR2xDLFVBQUssR0FBWSxJQUFJLENBQUM7UUFNdEIsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixtQkFBYyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUM7UUFZN0IsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUliLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBTzNDLElBQUksQ0FBQyxRQUFRLEVB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SUFFbEMsd0NBQ3NCOztJQUV0Qiw0Q0FDcUI7O0lBRXJCLHdDQUNvQjs7SUFFcEIsOENBQzZCOztJQUU3QixpREFBcUM7O0lBRXJDLGlEQUF1Qjs7SUFDdkIsa0RBQXdCOztJQUN4Qiw2Q0FBbUI7O0lBRW5CLHFEQUEyQjs7SUFDM0IsaURBQXVCOztJQUN2Qiw4Q0FBb0I7Ozs7O0lBRXBCLGtEQUFpQzs7Ozs7SUFDakMsZ0RBQStCOzs7OztJQUMvQix1Q0FBOEI7Ozs7O0lBRTlCLCtDQUFtQzs7Ozs7SUFFbkMsaURBQTRDOzs7OztJQUVoQyw2Q0FBNEM7Ozs7O0lBQ3JELDZDQUE4Qjs7Ozs7SUFDOUIsMkNBQTJCOzs7OztJQUMzQixvREFBNEM7Ozs7O0lBQzVDLGtEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRIb3N0TGlzdGVuZXIsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0T25Jbml0LFxuXHRQTEFURk9STV9JRCxcblx0UmVuZGVyZXIyLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEdlb21ldHJ5U2VydmljZSB9IGZyb20gJy4vZ2VvbWV0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknO1xuXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tICcuL3BsYWNlbWVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRyb3Bkb3duJyxcblx0dGVtcGxhdGVVcmw6IGBkcm9wZG93bi5jb21wb25lbnQuaHRtbGAsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2Ryb3Bkb3duLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZHJvcGRvd24ubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9kcm9wZG93bi5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWRyb3Bkb3duXSc6ICd0cnVlJ1xuXHR9LFxuXHRwcm92aWRlcnM6IFtcblx0XHRHZW9tZXRyeVNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKCdkcm9wZG93bk1lbnUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRkcm9wZG93bk1lbnVSZWY6IEVsZW1lbnRSZWY7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSlcblx0Y29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuXHRvblJlc2l6ZSgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy53aW5kb3dTaXplID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdH1cblx0fVxuXG5cdEBJbnB1dCgpXG5cdGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0ZHJvcGRvd25UZXh0OiBzdHJpbmcgPSAnRHJvcGRvd24nO1xuXG5cdEBJbnB1dCgpXG5cdGFycm93OiBib29sZWFuID0gdHJ1ZTtcblxuXHRASW5wdXQoKVxuXHRwbGFjZW1lbnQ6IFBsYWNlbWVudDtcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyID0gMTIwO1xuXG5cdEBJbnB1dCgpXG5cdHNob3dPbkhvdmVyOiBib29sZWFuID0gZmFsc2U7XG5cblx0aXNBcnJvd0VuYWJsZWQ6IGJvb2xlYW4gPSB0aGlzLmFycm93O1xuXG5cdGNvbnRhaW5lcldpZHRoOiBudW1iZXI7XG5cdGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuXHR3aW5kb3dTaXplOiBudW1iZXI7XG5cblx0aG9yaXpvbnRhbFBvc2l0aW9uOiBudW1iZXI7XG5cdGJvdHRvbVBvc2l0aW9uOiBudW1iZXI7XG5cdHRvcFBvc2l0aW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBjYW5PcGVuRG93bndhcmQ6IGJvb2xlYW47XG5cdHByaXZhdGUgY2FuT3BlblVwd2FyZDogYm9vbGVhbjtcblx0cHJpdmF0ZSBvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRvcEJvcmRlcldpZHRoOiBudW1iZXIgPSAxO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgZ2VvbWV0cnlTZXJ2aWNlOiBHZW9tZXRyeVNlcnZpY2UpIHtcblx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMucGxhY2VtZW50KSB7XG5cdFx0XHR0aGlzLmNoYW5nZVBsYWNlbWVudCgpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmFycm93KSB7XG5cdFx0XHR0aGlzLmlzQXJyb3dFbmFibGVkID0gdGhpcy5hcnJvdztcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9ic2VydmVHZW9tZXRyeSgpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHRyeVRvT3BlbihldmVudDogYW55KTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckRpc2FibGVkKGV2ZW50KSkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3Blbk1lbnUoIXRoaXMub3Blbik7XG5cdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHR9XG5cdH1cblxuXHR0cnlUb09wZW5PbkhvdmVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnNob3dPbkhvdmVyKSB7XG5cdFx0XHR0aGlzLm9wZW5NZW51KCF0aGlzLm9wZW4pO1xuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0aGlkZU9uSG92ZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2hvd09uSG92ZXIpIHtcblx0XHRcdHRoaXMuaGlkZUl0ZW1zKCk7XG5cdFx0XHR0aGlzLm9wZW4gPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRjbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyQ2xpY2tlZChldmVudCkpIHtcblx0XHRcdHRoaXMub3Blbk1lbnUoZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb3Blbk1lbnUob3BlbmVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5vcGVuID0gb3BlbmVkO1xuXG5cdFx0aWYgKHRoaXMub3Blbikge1xuXHRcdFx0dGhpcy5zaG93SXRlbXMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5oaWRlSXRlbXMoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNob3dJdGVtcygpOiB2b2lkIHtcblx0XHR0aGlzLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLW1lbnUtb3BlbmVkJyk7XG5cdFx0dGhpcy5nZW9tZXRyeVNlcnZpY2UuY2hhbmdlR2VvbWV0cnkodGhpcy5jb250YWluZXJSZWYsIHRoaXMuZHJvcGRvd25NZW51UmVmLCB0aGlzLndpbmRvd1NpemUpO1xuXG5cdFx0aWYgKHRoaXMuY2FuT3BlbkRvd253YXJkIHx8ICF0aGlzLmNhbk9wZW5VcHdhcmQpIHtcblx0XHRcdHRoaXMub3BlbkRvd253YXJkKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlblVwd2FyZCgpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBsYWNlbWVudCA9PT0gUGxhY2VtZW50LlJpZ2h0KSB7XG5cdFx0XHR0aGlzLm9wZW5SaWdodCgpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBsYWNlbWVudCA9PT0gUGxhY2VtZW50LkxlZnQpIHtcblx0XHRcdHRoaXMub3BlbkxlZnQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVHZW9tZXRyeSgpIHtcblx0XHR0aGlzLnN1YnNjcmlwdGlvbiA9XG5cdFx0XHR0aGlzLmdlb21ldHJ5U2VydmljZVxuXHRcdFx0XHQud2F0Y2hHZW9tZXRyeSgpXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0KGdlb21ldHJ5OiBHZW9tZXRyeSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5jb250YWluZXJIZWlnaHQgPSBnZW9tZXRyeS5nZXRDb250YWluZXJIZWlnaHQoKTtcblx0XHRcdFx0XHRcdHRoaXMuY29udGFpbmVyV2lkdGggPSBnZW9tZXRyeS5nZXRDb250YWluZXJXaWR0aCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5jYW5PcGVuVXB3YXJkID0gZ2VvbWV0cnkuY2FuT3BlblVwd2FyZCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5jYW5PcGVuRG93bndhcmQgPSBnZW9tZXRyeS5jYW5PcGVuRG93bndhcmQoKTtcblx0XHRcdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgb3BlbkRvd253YXJkKCk6IHZvaWQge1xuXHRcdHRoaXMudG9wUG9zaXRpb24gPSBudWxsO1xuXHRcdHRoaXMuYm90dG9tUG9zaXRpb24gPSB0aGlzLmNvbnRhaW5lckhlaWdodDtcblx0fVxuXG5cdHByaXZhdGUgb3BlblVwd2FyZCgpOiB2b2lkIHtcblx0XHR0aGlzLmJvdHRvbVBvc2l0aW9uID0gbnVsbDtcblx0XHR0aGlzLnRvcFBvc2l0aW9uID0gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5SaWdodCgpOiB2b2lkIHtcblx0XHR0aGlzLmJvdHRvbVBvc2l0aW9uID0gLXRoaXMudG9wQm9yZGVyV2lkdGg7XG5cdFx0dGhpcy50b3BQb3NpdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSB0aGlzLmNvbnRhaW5lcldpZHRoO1xuXHR9XG5cblx0cHJpdmF0ZSBvcGVuTGVmdCgpOiB2b2lkIHtcblx0XHR0aGlzLmJvdHRvbVBvc2l0aW9uID0gLXRoaXMudG9wQm9yZGVyV2lkdGg7XG5cdFx0dGhpcy50b3BQb3NpdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSAtKHRoaXMuY29udGFpbmVyV2lkdGggKyAxKTtcblx0fVxuXG5cdHByaXZhdGUgY2hhbmdlUGxhY2VtZW50KCkge1xuXHRcdGlmICh0aGlzLnBsYWNlbWVudCA9PT0gUGxhY2VtZW50LlJpZ2h0KSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKHRoaXMuZHJvcGRvd25NZW51UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZHJvcGRvd24tbGVmdCcpO1xuXHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLmRyb3Bkb3duTWVudVJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRyb3Bkb3duLXJpZ2h0Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5kcm9wZG93bk1lbnVSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kcm9wZG93bi1yaWdodCcpO1xuXHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLmRyb3Bkb3duTWVudVJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRyb3Bkb3duLWxlZnQnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGhpZGVJdGVtcygpOiB2b2lkIHtcblx0XHRjb25zdCBpdGVtc0VsSGFzT3BlbkNsYXNzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdndWktbWVudS1vcGVuZWQnKTtcblxuXHRcdGlmIChpdGVtc0VsSGFzT3BlbkNsYXNzKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLW1lbnUtb3BlbmVkJyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJEaXNhYmxlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2d1aS1kaXNhYmxlZCcpO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGRDbGFzcyhlbGVtZW50OiBFbGVtZW50UmVmLCBuYW1lOiBzdHJpbmcpIHtcblx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5hbWUpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVDbGFzcyhlbGVtZW50OiBFbGVtZW50UmVmLCBuYW1lOiBzdHJpbmcpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG5hbWUpO1xuXHR9XG59XG4iXX0=