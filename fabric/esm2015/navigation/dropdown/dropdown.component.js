/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, Input, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GeometryService } from './geometry.service';
import { Placement } from './placement';
export class FabricDropdownComponent {
    /**
     * @param {?} platformId
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} changeDetectorRef
     * @param {?} geometryService
     */
    constructor(platformId, elementRef, renderer, changeDetectorRef, geometryService) {
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
    onResize() {
        if (isPlatformBrowser(this.platformId)) {
            this.windowSize = window.innerHeight;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.placement) {
            this.changePlacement();
        }
        if (changes.arrow) {
            this.isArrowEnabled = this.arrow;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.observeGeometry();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    tryToOpen(event) {
        if (this.isContainerDisabled(event)) {
            event.stopPropagation();
        }
        else {
            this.openMenu(!this.open);
            this.changeDetectorRef.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    tryToOpenOnHover() {
        if (this.showOnHover) {
            this.openMenu(!this.open);
            this.changeDetectorRef.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    hideOnHover() {
        if (this.showOnHover) {
            this.hideItems();
            this.open = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickOutside(event) {
        if (this.isContainerClicked(event)) {
            this.openMenu(false);
        }
    }
    /**
     * @private
     * @param {?} opened
     * @return {?}
     */
    openMenu(opened) {
        this.open = opened;
        if (this.open) {
            this.showItems();
        }
        else {
            this.hideItems();
        }
    }
    /**
     * @private
     * @return {?}
     */
    showItems() {
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
    }
    /**
     * @private
     * @return {?}
     */
    observeGeometry() {
        this.subscription =
            this.geometryService
                .watchGeometry()
                .subscribe((/**
             * @param {?} geometry
             * @return {?}
             */
            (geometry) => {
                this.containerHeight = geometry.getContainerHeight();
                this.containerWidth = geometry.getContainerWidth();
                this.canOpenUpward = geometry.canOpenUpward();
                this.canOpenDownward = geometry.canOpenDownward();
            }));
    }
    /**
     * @private
     * @return {?}
     */
    openDownward() {
        this.topPosition = null;
        this.bottomPosition = this.containerHeight;
    }
    /**
     * @private
     * @return {?}
     */
    openUpward() {
        this.bottomPosition = null;
        this.topPosition = this.containerHeight;
    }
    /**
     * @private
     * @return {?}
     */
    openRight() {
        this.bottomPosition = -this.topBorderWidth;
        this.topPosition = null;
        this.horizontalPosition = this.containerWidth;
    }
    /**
     * @private
     * @return {?}
     */
    openLeft() {
        this.bottomPosition = -this.topBorderWidth;
        this.topPosition = null;
        this.horizontalPosition = -(this.containerWidth + 1);
    }
    /**
     * @private
     * @return {?}
     */
    changePlacement() {
        if (this.placement === Placement.Right) {
            this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
            this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
        }
        else {
            this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
            this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
        }
    }
    /**
     * @private
     * @return {?}
     */
    hideItems() {
        /** @type {?} */
        const itemsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-menu-opened');
        if (itemsElHasOpenClass) {
            this.removeClass(this.elementRef.nativeElement, 'gui-menu-opened');
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
     * @param {?} event
     * @return {?}
     */
    isContainerDisabled(event) {
        return event.target.classList.contains('gui-disabled');
    }
    /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    addClass(element, name) {
        this.renderer.addClass(element, name);
    }
    /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    removeClass(element, name) {
        this.renderer.removeClass(element, name);
    }
}
FabricDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-dropdown',
                template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t (mouseenter)=\"tryToOpenOnHover()\"\n\t (mouseleave)=\"hideOnHover()\"\n\t [ngClass]=\"{'gui-disabled': disabled}\"\n\t [style.width.px]=\"width\"\n\t class=\"gui-dropdown-container\">\n\t<div class=\"gui-dropdown-text\">{{dropdownText}}</div>\n\t<div [class.gui-dropdown-arrow]=\"isArrowEnabled\">\n\t\t<gui-arrow-icon></gui-arrow-icon>\n\t</div>\n\t<div #dropdownMenu\n\t\t [style.bottom.px]=\"topPosition\"\n\t\t [style.left.px]=\"horizontalPosition\"\n\t\t [style.top.px]=\"bottomPosition\"\n\t\t class=\"gui-dropdown-menu\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-dropdown]': 'true'
                },
                providers: [
                    GeometryService
                ],
                styles: [".gui-dropdown .gui-dropdown-container{background:#fff;box-sizing:border-box;border-radius:4px;cursor:pointer;color:#333;display:inline-block;font:14px Arial;padding:8px 32px 8px 12px;position:relative;width:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d6d6d6}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow svg path{stroke:#464646}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{position:absolute;cursor:pointer;top:8px;right:12px}.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{box-sizing:border-box;background:inherit;display:none;left:-1px;overflow:hidden;width:inherit;position:absolute;z-index:2;border-radius:4px;border:1px solid #d6d6d6}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{padding:8px 32px 8px 12px;width:inherit;list-style-type:none}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#ccc}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACMSURBVDhPrZJLCoAwDESruNRT9dw9lRvBhXbKEKTNpwsfSGLtY6I1/UIp5cHFW5eFtUlsGzlneaaxsg5EySLWhIOt4Mn9OHvdfLIXtLG195iSrQ8QypYIXNkTgSmbx0Eu1gEvcatpN3shGtWVgCaGEujFKQl8F6YlIItVGv5LSwLmcXjSAFK15B9J6QWDkUXx1vE/hQAAAABJRU5ErkJggg==) 0 0/contain no-repeat;border-color:#ce93d8 transparent transparent}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-arrow{border-color:transparent transparent #ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}"]
            }] }
];
/** @nocollapse */
FabricDropdownComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: GeometryService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsV0FBVyxFQUNYLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBb0J4QyxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7OztJQW1EbkMsWUFBeUMsVUFBZSxFQUM3QyxVQUFzQixFQUN0QixRQUFtQixFQUNuQixpQkFBb0MsRUFDcEMsZUFBZ0M7UUFKRixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQzdDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQXZDM0MsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixpQkFBWSxHQUFXLFVBQVUsQ0FBQztRQUdsQyxVQUFLLEdBQVksSUFBSSxDQUFDO1FBTXRCLFVBQUssR0FBVyxHQUFHLENBQUM7UUFHcEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsbUJBQWMsR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBWTdCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFJYixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQU8zQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQWhERCxRQUFRO1FBQ1AsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1NBQ3JDO0lBQ0YsQ0FBQzs7Ozs7SUE4Q0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdkI7UUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2pDO0lBQ0YsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQVU7UUFFbkIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN2QztJQUNGLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdkM7SUFDRixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDbEI7SUFDRixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3RCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckI7SUFDRixDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsTUFBZTtRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUVuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDakI7YUFBTTtZQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNqQjtJQUNGLENBQUM7Ozs7O0lBRU8sU0FBUztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU5RixJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNwQjthQUFNO1lBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxlQUFlO1FBQ3RCLElBQUksQ0FBQyxZQUFZO1lBQ2hCLElBQUksQ0FBQyxlQUFlO2lCQUNsQixhQUFhLEVBQUU7aUJBQ2YsU0FBUzs7OztZQUNULENBQUMsUUFBa0IsRUFBRSxFQUFFO2dCQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUNyRCxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDbkQsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVPLFlBQVk7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRU8sVUFBVTtRQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRU8sUUFBUTtRQUNmLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVPLGVBQWU7UUFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztTQUN2RTtJQUNGLENBQUM7Ozs7O0lBRU8sU0FBUzs7Y0FDVixtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1FBRS9GLElBQUksbUJBQW1CLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQ25FO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsS0FBVTtRQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxLQUFVO1FBQ3JDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFFTyxRQUFRLENBQUMsT0FBbUIsRUFBRSxJQUFZO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7O0lBRU8sV0FBVyxDQUFDLE9BQW1CLEVBQUUsSUFBWTtRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBNU5ELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsY0FBYztnQkFDeEIsb3JCQUFzQztnQkFNdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsc0JBQXNCLEVBQUUsTUFBTTtpQkFDOUI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLGVBQWU7aUJBQ2Y7O2FBQ0Q7Ozs7NENBb0RhLE1BQU0sU0FBQyxXQUFXO1lBekYvQixVQUFVO1lBT1YsU0FBUztZQVRULGlCQUFpQjtZQWlCVCxlQUFlOzs7OEJBeUJ0QixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHMUMsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBR3ZDLFlBQVksU0FBQyxlQUFlO3VCQU81QixLQUFLOzJCQUdMLEtBQUs7b0JBR0wsS0FBSzt3QkFHTCxLQUFLO29CQUdMLEtBQUs7MEJBR0wsS0FBSzs7OztJQTVCTixrREFDNEI7O0lBRTVCLCtDQUN5Qjs7SUFTekIsMkNBQzBCOztJQUUxQiwrQ0FDa0M7O0lBRWxDLHdDQUNzQjs7SUFFdEIsNENBQ3FCOztJQUVyQix3Q0FDb0I7O0lBRXBCLDhDQUM2Qjs7SUFFN0IsaURBQXFDOztJQUVyQyxpREFBdUI7O0lBQ3ZCLGtEQUF3Qjs7SUFDeEIsNkNBQW1COztJQUVuQixxREFBMkI7O0lBQzNCLGlEQUF1Qjs7SUFDdkIsOENBQW9COzs7OztJQUVwQixrREFBaUM7Ozs7O0lBQ2pDLGdEQUErQjs7Ozs7SUFDL0IsdUNBQThCOzs7OztJQUU5QiwrQ0FBbUM7Ozs7O0lBRW5DLGlEQUE0Qzs7Ozs7SUFFaEMsNkNBQTRDOzs7OztJQUNyRCw2Q0FBOEI7Ozs7O0lBQzlCLDJDQUEyQjs7Ozs7SUFDM0Isb0RBQTRDOzs7OztJQUM1QyxrREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SG9zdExpc3RlbmVyLFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE9uSW5pdCxcblx0UExBVEZPUk1fSUQsXG5cdFJlbmRlcmVyMixcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL2dlb21ldHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5JztcblxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnLi9wbGFjZW1lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1kcm9wZG93bicsXG5cdHRlbXBsYXRlVXJsOiBgZHJvcGRvd24uY29tcG9uZW50Lmh0bWxgLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9kcm9wZG93bi5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2Ryb3Bkb3duLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZHJvcGRvd24uZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1kcm9wZG93bl0nOiAndHJ1ZSdcblx0fSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R2VvbWV0cnlTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnZHJvcGRvd25NZW51JywgeyBzdGF0aWM6IHRydWUgfSlcblx0ZHJvcGRvd25NZW51UmVmOiBFbGVtZW50UmVmO1xuXG5cdEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcblx0b25SZXNpemUoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMud2luZG93U2l6ZSA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHR9XG5cdH1cblxuXHRASW5wdXQoKVxuXHRkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdGRyb3Bkb3duVGV4dDogc3RyaW5nID0gJ0Ryb3Bkb3duJztcblxuXHRASW5wdXQoKVxuXHRhcnJvdzogYm9vbGVhbiA9IHRydWU7XG5cblx0QElucHV0KClcblx0cGxhY2VtZW50OiBQbGFjZW1lbnQ7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlciA9IDEyMDtcblxuXHRASW5wdXQoKVxuXHRzaG93T25Ib3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGlzQXJyb3dFbmFibGVkOiBib29sZWFuID0gdGhpcy5hcnJvdztcblxuXHRjb250YWluZXJXaWR0aDogbnVtYmVyO1xuXHRjb250YWluZXJIZWlnaHQ6IG51bWJlcjtcblx0d2luZG93U2l6ZTogbnVtYmVyO1xuXG5cdGhvcml6b250YWxQb3NpdGlvbjogbnVtYmVyO1xuXHRib3R0b21Qb3NpdGlvbjogbnVtYmVyO1xuXHR0b3BQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgY2FuT3BlbkRvd253YXJkOiBib29sZWFuO1xuXHRwcml2YXRlIGNhbk9wZW5VcHdhcmQ6IGJvb2xlYW47XG5cdHByaXZhdGUgb3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSB0b3BCb3JkZXJXaWR0aDogbnVtYmVyID0gMTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIGdlb21ldHJ5U2VydmljZTogR2VvbWV0cnlTZXJ2aWNlKSB7XG5cdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnBsYWNlbWVudCkge1xuXHRcdFx0dGhpcy5jaGFuZ2VQbGFjZW1lbnQoKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5hcnJvdykge1xuXHRcdFx0dGhpcy5pc0Fycm93RW5hYmxlZCA9IHRoaXMuYXJyb3c7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vYnNlcnZlR2VvbWV0cnkoKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHR0cnlUb09wZW4oZXZlbnQ6IGFueSk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJEaXNhYmxlZChldmVudCkpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW5NZW51KCF0aGlzLm9wZW4pO1xuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0dHJ5VG9PcGVuT25Ib3ZlcigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zaG93T25Ib3Zlcikge1xuXHRcdFx0dGhpcy5vcGVuTWVudSghdGhpcy5vcGVuKTtcblx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxuXG5cdGhpZGVPbkhvdmVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnNob3dPbkhvdmVyKSB7XG5cdFx0XHR0aGlzLmhpZGVJdGVtcygpO1xuXHRcdFx0dGhpcy5vcGVuID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Y2xpY2tPdXRzaWRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLm9wZW5NZW51KGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9wZW5NZW51KG9wZW5lZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMub3BlbiA9IG9wZW5lZDtcblxuXHRcdGlmICh0aGlzLm9wZW4pIHtcblx0XHRcdHRoaXMuc2hvd0l0ZW1zKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaGlkZUl0ZW1zKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzaG93SXRlbXMoKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1tZW51LW9wZW5lZCcpO1xuXHRcdHRoaXMuZ2VvbWV0cnlTZXJ2aWNlLmNoYW5nZUdlb21ldHJ5KHRoaXMuY29udGFpbmVyUmVmLCB0aGlzLmRyb3Bkb3duTWVudVJlZiwgdGhpcy53aW5kb3dTaXplKTtcblxuXHRcdGlmICh0aGlzLmNhbk9wZW5Eb3dud2FyZCB8fCAhdGhpcy5jYW5PcGVuVXB3YXJkKSB7XG5cdFx0XHR0aGlzLm9wZW5Eb3dud2FyZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW5VcHdhcmQoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wbGFjZW1lbnQgPT09IFBsYWNlbWVudC5SaWdodCkge1xuXHRcdFx0dGhpcy5vcGVuUmlnaHQoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wbGFjZW1lbnQgPT09IFBsYWNlbWVudC5MZWZ0KSB7XG5cdFx0XHR0aGlzLm9wZW5MZWZ0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5zdWJzY3JpcHRpb24gPVxuXHRcdFx0dGhpcy5nZW9tZXRyeVNlcnZpY2Vcblx0XHRcdFx0LndhdGNoR2VvbWV0cnkoKVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdChnZW9tZXRyeTogR2VvbWV0cnkpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuY29udGFpbmVySGVpZ2h0ID0gZ2VvbWV0cnkuZ2V0Q29udGFpbmVySGVpZ2h0KCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRhaW5lcldpZHRoID0gZ2VvbWV0cnkuZ2V0Q29udGFpbmVyV2lkdGgoKTtcblx0XHRcdFx0XHRcdHRoaXMuY2FuT3BlblVwd2FyZCA9IGdlb21ldHJ5LmNhbk9wZW5VcHdhcmQoKTtcblx0XHRcdFx0XHRcdHRoaXMuY2FuT3BlbkRvd253YXJkID0gZ2VvbWV0cnkuY2FuT3BlbkRvd253YXJkKCk7XG5cdFx0XHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5Eb3dud2FyZCgpOiB2b2lkIHtcblx0XHR0aGlzLnRvcFBvc2l0aW9uID0gbnVsbDtcblx0XHR0aGlzLmJvdHRvbVBvc2l0aW9uID0gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5VcHdhcmQoKTogdm9pZCB7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IG51bGw7XG5cdFx0dGhpcy50b3BQb3NpdGlvbiA9IHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBvcGVuUmlnaHQoKTogdm9pZCB7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IC10aGlzLnRvcEJvcmRlcldpZHRoO1xuXHRcdHRoaXMudG9wUG9zaXRpb24gPSBudWxsO1xuXHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gdGhpcy5jb250YWluZXJXaWR0aDtcblx0fVxuXG5cdHByaXZhdGUgb3BlbkxlZnQoKTogdm9pZCB7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IC10aGlzLnRvcEJvcmRlcldpZHRoO1xuXHRcdHRoaXMudG9wUG9zaXRpb24gPSBudWxsO1xuXHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gLSh0aGlzLmNvbnRhaW5lcldpZHRoICsgMSk7XG5cdH1cblxuXHRwcml2YXRlIGNoYW5nZVBsYWNlbWVudCgpIHtcblx0XHRpZiAodGhpcy5wbGFjZW1lbnQgPT09IFBsYWNlbWVudC5SaWdodCkge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcyh0aGlzLmRyb3Bkb3duTWVudVJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRyb3Bkb3duLWxlZnQnKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5kcm9wZG93bk1lbnVSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kcm9wZG93bi1yaWdodCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKHRoaXMuZHJvcGRvd25NZW51UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZHJvcGRvd24tcmlnaHQnKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5kcm9wZG93bk1lbnVSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kcm9wZG93bi1sZWZ0Jyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBoaWRlSXRlbXMoKTogdm9pZCB7XG5cdFx0Y29uc3QgaXRlbXNFbEhhc09wZW5DbGFzcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZ3VpLW1lbnUtb3BlbmVkJyk7XG5cblx0XHRpZiAoaXRlbXNFbEhhc09wZW5DbGFzcykge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1tZW51LW9wZW5lZCcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJDbGlja2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyRGlzYWJsZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdndWktZGlzYWJsZWQnKTtcblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoZWxlbWVudDogRWxlbWVudFJlZiwgbmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuYW1lKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQ2xhc3MoZWxlbWVudDogRWxlbWVudFJlZiwgbmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBuYW1lKTtcblx0fVxufVxuIl19