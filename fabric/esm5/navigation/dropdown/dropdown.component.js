/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, Input, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GeometryService } from './geometry.service';
import { Placement } from './placement';
import { FabricReactive } from '../../common/fabric-reactive';
import { Direction } from '../../common/icons/arrow-icon/direction';
var FabricDropdownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricDropdownComponent, _super);
    function FabricDropdownComponent(platformId, elementRef, renderer, changeDetectorRef, geometryService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.changeDetectorRef = changeDetectorRef;
        _this.geometryService = geometryService;
        _this.disabled = false;
        _this.dropdownText = 'Dropdown';
        _this.arrow = true;
        _this.width = 120;
        _this.showOnHover = false;
        _this.isArrowEnabled = _this.arrow;
        _this.arrowDirection = Direction.BOTTOM;
        _this.open = false;
        _this.topBorderWidth = 1;
        _this.onResize();
        return _this;
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
        var _this = this;
        this.geometryService
            .watchGeometry()
            .pipe(this.takeUntil())
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
     * @return {?}
     */
    FabricDropdownComponent.prototype.isDirectionLeft = /**
     * @return {?}
     */
    function () {
        return this.isArrowEnabled && this.arrowDirection === Direction.LEFT;
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
        switch (this.placement) {
            case Placement.Right: {
                this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
                this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
                this.arrowDirection = Direction.RIGHT;
                break;
            }
            case Placement.Left: {
                this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
                this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
                this.arrowDirection = Direction.LEFT;
                break;
            }
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
                    template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t (mouseenter)=\"tryToOpenOnHover()\"\n\t (mouseleave)=\"hideOnHover()\"\n\t [class.gui-arrow-left]=\"isDirectionLeft()\"\n\t [class.gui-disabled]=\"disabled\"\n\t [style.width.px]=\"width\"\n\t class=\"gui-dropdown-container\">\n\t<div class=\"gui-dropdown-text\">{{dropdownText}}</div>\n\t<div [class.gui-dropdown-arrow]=\"isArrowEnabled\">\n\t\t<gui-arrow-icon [direction]=\"arrowDirection\"></gui-arrow-icon>\n\t</div>\n\n\t<div #dropdownMenu\n\t\t [style.bottom.px]=\"topPosition\"\n\t\t [style.left.px]=\"horizontalPosition\"\n\t\t [style.top.px]=\"bottomPosition\"\n\t\t class=\"gui-dropdown-menu\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-dropdown]': 'true'
                    },
                    providers: [
                        GeometryService
                    ],
                    styles: [".gui-dropdown .gui-dropdown-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-radius:4px;box-sizing:border-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 12px;position:relative;width:auto;border:1px solid #d6d6d6}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container:hover .gui-arrow-icon svg path{stroke:#464646}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{cursor:pointer;position:absolute;right:12px;top:8px}.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{background:inherit;border-radius:4px;box-sizing:border-box;display:none;left:-1px;overflow:hidden;position:absolute;width:inherit;z-index:2;border:1px solid #d6d6d6}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{list-style-type:none;padding:8px 12px;width:inherit}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#ccc}.gui-dropdown .gui-dropdown-container.gui-arrow-left{padding:8px 12px 8px 32px}.gui-dropdown .gui-dropdown-container.gui-arrow-left .gui-dropdown-arrow{left:12px;right:initial}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow svg path{stroke:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#616161}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}"]
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
}(FabricReactive));
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
    /** @type {?} */
    FabricDropdownComponent.prototype.arrowDirection;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLFdBQVcsRUFDWCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBR3BFO0lBaUI2QyxtREFBYztJQXlEMUQsaUNBQWtELFVBQWUsRUFDN0MsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsaUJBQW9DLEVBQ3BDLGVBQWdDO1FBSnBELFlBS0MsaUJBQU8sU0FFUDtRQVBpRCxnQkFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBN0NwRCxjQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLGtCQUFZLEdBQVcsVUFBVSxDQUFDO1FBR2xDLFdBQUssR0FBWSxJQUFJLENBQUM7UUFNdEIsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixpQkFBVyxH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QkFBaUI7Z0JBZ0JULGVBQWU7OztrQ0EyQnRCLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUcxQyxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHdkMsWUFBWSxTQUFDLGVBQWU7MkJBTzVCLEtBQUs7K0JBR0wsS0FBSzt3QkFHTCxLQUFLOzRCQUdMLEtBQUs7d0JBR0wsS0FBSzs4QkFHTCxLQUFLOztJQTBMUCw4QkFBQztDQUFBLEFBek9ELENBaUI2QyxjQUFjLEdBd04xRDtTQXhOWSx1QkFBdUI7OztJQUVuQyxrREFDNEI7O0lBRTVCLCtDQUN5Qjs7SUFTekIsMkNBQzBCOztJQUUxQiwrQ0FDa0M7O0lBRWxDLHdDQUNzQjs7SUFFdEIsNENBQ3FCOztJQUVyQix3Q0FDb0I7O0lBRXBCLDhDQUM2Qjs7SUFFN0IsaURBQXFDOztJQUVyQyxpREFBdUI7O0lBRXZCLGtEQUF3Qjs7SUFFeEIsNkNBQW1COztJQUVuQixxREFBMkI7O0lBRTNCLGlEQUF1Qjs7SUFFdkIsOENBQW9COztJQUVwQixpREFBNkM7Ozs7O0lBRTdDLGtEQUFpQzs7Ozs7SUFFakMsZ0RBQStCOzs7OztJQUUvQix1Q0FBOEI7Ozs7O0lBRTlCLGlEQUE0Qzs7Ozs7SUFFaEMsNkNBQXFEOzs7OztJQUM5RCw2Q0FBdUM7Ozs7O0lBQ3ZDLDJDQUFvQzs7Ozs7SUFDcEMsb0RBQXFEOzs7OztJQUNyRCxrREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SG9zdExpc3RlbmVyLFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE9uSW5pdCxcblx0UExBVEZPUk1fSUQsXG5cdFJlbmRlcmVyMixcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9nZW9tZXRyeS5zZXJ2aWNlJztcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSc7XG5cbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gJy4vcGxhY2VtZW50JztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9kaXJlY3Rpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1kcm9wZG93bicsXG5cdHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2Ryb3Bkb3duLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZHJvcGRvd24ubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9kcm9wZG93bi5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWRyb3Bkb3duXSc6ICd0cnVlJ1xuXHR9LFxuXHRwcm92aWRlcnM6IFtcblx0XHRHZW9tZXRyeVNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEcm9wZG93bkNvbXBvbmVudCBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duTWVudScsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGRyb3Bkb3duTWVudVJlZjogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRjb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG5cdG9uUmVzaXplKCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLndpbmRvd1NpemUgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0fVxuXHR9XG5cblx0QElucHV0KClcblx0ZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRkcm9wZG93blRleHQ6IHN0cmluZyA9ICdEcm9wZG93bic7XG5cblx0QElucHV0KClcblx0YXJyb3c6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdEBJbnB1dCgpXG5cdHBsYWNlbWVudDogUGxhY2VtZW50O1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXIgPSAxMjA7XG5cblx0QElucHV0KClcblx0c2hvd09uSG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRpc0Fycm93RW5hYmxlZDogYm9vbGVhbiA9IHRoaXMuYXJyb3c7XG5cblx0Y29udGFpbmVyV2lkdGg6IG51bWJlcjtcblxuXHRjb250YWluZXJIZWlnaHQ6IG51bWJlcjtcblxuXHR3aW5kb3dTaXplOiBudW1iZXI7XG5cblx0aG9yaXpvbnRhbFBvc2l0aW9uOiBudW1iZXI7XG5cblx0Ym90dG9tUG9zaXRpb246IG51bWJlcjtcblxuXHR0b3BQb3NpdGlvbjogbnVtYmVyO1xuXG5cdGFycm93RGlyZWN0aW9uOiBEaXJlY3Rpb24gPSBEaXJlY3Rpb24uQk9UVE9NO1xuXG5cdHByaXZhdGUgY2FuT3BlbkRvd253YXJkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgY2FuT3BlblVwd2FyZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRvcEJvcmRlcldpZHRoOiBudW1iZXIgPSAxO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZ2VvbWV0cnlTZXJ2aWNlOiBHZW9tZXRyeVNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub25SZXNpemUoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5wbGFjZW1lbnQpIHtcblx0XHRcdHRoaXMuY2hhbmdlUGxhY2VtZW50KCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuYXJyb3cpIHtcblx0XHRcdHRoaXMuaXNBcnJvd0VuYWJsZWQgPSB0aGlzLmFycm93O1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnlTZXJ2aWNlXG5cdFx0XHQud2F0Y2hHZW9tZXRyeSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZ2VvbWV0cnk6IEdlb21ldHJ5KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29udGFpbmVySGVpZ2h0ID0gZ2VvbWV0cnkuZ2V0Q29udGFpbmVySGVpZ2h0KCk7XG5cdFx0XHRcdHRoaXMuY29udGFpbmVyV2lkdGggPSBnZW9tZXRyeS5nZXRDb250YWluZXJXaWR0aCgpO1xuXHRcdFx0XHR0aGlzLmNhbk9wZW5VcHdhcmQgPSBnZW9tZXRyeS5jYW5PcGVuVXB3YXJkKCk7XG5cdFx0XHRcdHRoaXMuY2FuT3BlbkRvd253YXJkID0gZ2VvbWV0cnkuY2FuT3BlbkRvd253YXJkKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRyeVRvT3BlbihldmVudDogYW55KTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckRpc2FibGVkKGV2ZW50KSkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3Blbk1lbnUoIXRoaXMub3Blbik7XG5cdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHR9XG5cdH1cblxuXHR0cnlUb09wZW5PbkhvdmVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnNob3dPbkhvdmVyKSB7XG5cdFx0XHR0aGlzLm9wZW5NZW51KCF0aGlzLm9wZW4pO1xuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0aGlkZU9uSG92ZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2hvd09uSG92ZXIpIHtcblx0XHRcdHRoaXMuaGlkZUl0ZW1zKCk7XG5cdFx0XHR0aGlzLm9wZW4gPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRjbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyQ2xpY2tlZChldmVudCkpIHtcblx0XHRcdHRoaXMub3Blbk1lbnUoZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdGlzRGlyZWN0aW9uTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc0Fycm93RW5hYmxlZCAmJiB0aGlzLmFycm93RGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTEVGVDtcblx0fVxuXG5cdHByaXZhdGUgb3Blbk1lbnUob3BlbmVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5vcGVuID0gb3BlbmVkO1xuXG5cdFx0aWYgKHRoaXMub3Blbikge1xuXHRcdFx0dGhpcy5zaG93SXRlbXMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5oaWRlSXRlbXMoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNob3dJdGVtcygpOiB2b2lkIHtcblx0XHR0aGlzLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLW1lbnUtb3BlbmVkJyk7XG5cdFx0dGhpcy5nZW9tZXRyeVNlcnZpY2UuY2hhbmdlR2VvbWV0cnkodGhpcy5jb250YWluZXJSZWYsIHRoaXMuZHJvcGRvd25NZW51UmVmLCB0aGlzLndpbmRvd1NpemUpO1xuXG5cdFx0aWYgKHRoaXMuY2FuT3BlbkRvd253YXJkIHx8ICF0aGlzLmNhbk9wZW5VcHdhcmQpIHtcblx0XHRcdHRoaXMub3BlbkRvd253YXJkKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlblVwd2FyZCgpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBsYWNlbWVudCA9PT0gUGxhY2VtZW50LlJpZ2h0KSB7XG5cdFx0XHR0aGlzLm9wZW5SaWdodCgpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBsYWNlbWVudCA9PT0gUGxhY2VtZW50LkxlZnQpIHtcblx0XHRcdHRoaXMub3BlbkxlZnQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9wZW5Eb3dud2FyZCgpOiB2b2lkIHtcblx0XHR0aGlzLnRvcFBvc2l0aW9uID0gbnVsbDtcblx0XHR0aGlzLmJvdHRvbVBvc2l0aW9uID0gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5VcHdhcmQoKTogdm9pZCB7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IG51bGw7XG5cdFx0dGhpcy50b3BQb3NpdGlvbiA9IHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBvcGVuUmlnaHQoKTogdm9pZCB7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IC10aGlzLnRvcEJvcmRlcldpZHRoO1xuXHRcdHRoaXMudG9wUG9zaXRpb24gPSBudWxsO1xuXHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gdGhpcy5jb250YWluZXJXaWR0aDtcblx0fVxuXG5cdHByaXZhdGUgb3BlbkxlZnQoKTogdm9pZCB7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IC10aGlzLnRvcEJvcmRlcldpZHRoO1xuXHRcdHRoaXMudG9wUG9zaXRpb24gPSBudWxsO1xuXHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gLSh0aGlzLmNvbnRhaW5lcldpZHRoICsgMSk7XG5cdH1cblxuXHRwcml2YXRlIGNoYW5nZVBsYWNlbWVudCgpIHtcblxuXHRcdHN3aXRjaCAodGhpcy5wbGFjZW1lbnQpIHtcblxuXHRcdFx0Y2FzZSBQbGFjZW1lbnQuUmlnaHQ6IHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcyh0aGlzLmRyb3Bkb3duTWVudVJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRyb3Bkb3duLWxlZnQnKTtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLmRyb3Bkb3duTWVudVJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRyb3Bkb3duLXJpZ2h0Jyk7XG5cdFx0XHRcdHRoaXMuYXJyb3dEaXJlY3Rpb24gPSBEaXJlY3Rpb24uUklHSFQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFBsYWNlbWVudC5MZWZ0OiB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5kcm9wZG93bk1lbnVSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kcm9wZG93bi1yaWdodCcpO1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMuZHJvcGRvd25NZW51UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZHJvcGRvd24tbGVmdCcpO1xuXHRcdFx0XHR0aGlzLmFycm93RGlyZWN0aW9uID0gRGlyZWN0aW9uLkxFRlQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaGlkZUl0ZW1zKCk6IHZvaWQge1xuXHRcdGNvbnN0IGl0ZW1zRWxIYXNPcGVuQ2xhc3MgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2d1aS1tZW51LW9wZW5lZCcpO1xuXG5cdFx0aWYgKGl0ZW1zRWxIYXNPcGVuQ2xhc3MpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktbWVudS1vcGVuZWQnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyQ2xpY2tlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckRpc2FibGVkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ3VpLWRpc2FibGVkJyk7XG5cdH1cblxuXHRwcml2YXRlIGFkZENsYXNzKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgbmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgbmFtZSk7XG5cdH1cbn1cbiJdfQ==