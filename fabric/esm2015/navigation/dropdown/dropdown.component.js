/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, Input, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GeometryService } from './geometry.service';
import { Placement } from './placement';
import { FabricReactive } from '../../common/fabric-reactive';
import { Direction } from '../../common/icons/arrow-icon/direction';
export class FabricDropdownComponent extends FabricReactive {
    /**
     * @param {?} platformId
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} changeDetectorRef
     * @param {?} geometryService
     */
    constructor(platformId, elementRef, renderer, changeDetectorRef, geometryService) {
        super();
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
        this.arrowDirection = Direction.BOTTOM;
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
        this.geometryService
            .watchGeometry()
            .pipe(this.takeUntil())
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
     * @return {?}
     */
    isDirectionLeft() {
        return this.isArrowEnabled && this.arrowDirection === Direction.LEFT;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsV0FBVyxFQUNYLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFvQnBFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjOzs7Ozs7OztJQXlEMUQsWUFBa0QsVUFBZSxFQUM3QyxVQUFzQixFQUN0QixRQUFtQixFQUNuQixpQkFBb0MsRUFDcEMsZUFBZ0M7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFMeUMsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUE3Q3BELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsaUJBQVksR0FBVyxVQUFVLENBQUM7UUFHbEMsVUFBSyxHQUFZLElBQUksQ0FBQztRQU10QixVQUFLLEdBQVcsR0FBRyxDQUFDO1FBR3BCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLG1CQUFjLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQztRQWNyQyxtQkFBYyxHQUFjLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFNckMsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUViLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBUTNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBdkRELFFBQVE7UUFDUCxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7U0FDckM7SUFDRixDQUFDOzs7OztJQXFERCxXQUFXLENBQUMsT0FBc0I7UUFDakMsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN2QjtRQUVELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDakM7SUFDRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlO2FBQ2xCLGFBQWEsRUFBRTthQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsUUFBa0IsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDckQsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNuRCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQVU7UUFFbkIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN2QztJQUNGLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdkM7SUFDRixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDbEI7SUFDRixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3RCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckI7SUFDRixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDdEUsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLE1BQWU7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFFbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2pCO2FBQU07WUFDTixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDakI7SUFDRixDQUFDOzs7OztJQUVPLFNBQVM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFOUYsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNsQjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNqQjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNoQjtJQUNGLENBQUM7Ozs7O0lBRU8sWUFBWTtRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFTyxVQUFVO1FBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVPLFNBQVM7UUFDaEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFTyxRQUFRO1FBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRU8sZUFBZTtRQUV0QixRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFFdkIsS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztnQkFDMUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO2dCQUN4RSxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3RDLE1BQU07YUFDTjtZQUVELEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7Z0JBQzNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztnQkFDdkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNyQyxNQUFNO2FBQ047U0FDRDtJQUNGLENBQUM7Ozs7O0lBRU8sU0FBUzs7Y0FDVixtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1FBRS9GLElBQUksbUJBQW1CLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQ25FO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsS0FBVTtRQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxLQUFVO1FBQ3JDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFFTyxRQUFRLENBQUMsT0FBbUIsRUFBRSxJQUFZO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7O0lBRU8sV0FBVyxDQUFDLE9BQW1CLEVBQUUsSUFBWTtRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBeE9ELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsY0FBYztnQkFDeEIsK3ZCQUF3QztnQkFNeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsc0JBQXNCLEVBQUUsTUFBTTtpQkFDOUI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLGVBQWU7aUJBQ2Y7O2FBQ0Q7Ozs7NENBMERhLE1BQU0sU0FBQyxXQUFXO1lBaEcvQixVQUFVO1lBT1YsU0FBUztZQVRULGlCQUFpQjtZQWdCVCxlQUFlOzs7OEJBMkJ0QixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHMUMsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBR3ZDLFlBQVksU0FBQyxlQUFlO3VCQU81QixLQUFLOzJCQUdMLEtBQUs7b0JBR0wsS0FBSzt3QkFHTCxLQUFLO29CQUdMLEtBQUs7MEJBR0wsS0FBSzs7OztJQTVCTixrREFDNEI7O0lBRTVCLCtDQUN5Qjs7SUFTekIsMkNBQzBCOztJQUUxQiwrQ0FDa0M7O0lBRWxDLHdDQUNzQjs7SUFFdEIsNENBQ3FCOztJQUVyQix3Q0FDb0I7O0lBRXBCLDhDQUM2Qjs7SUFFN0IsaURBQXFDOztJQUVyQyxpREFBdUI7O0lBRXZCLGtEQUF3Qjs7SUFFeEIsNkNBQW1COztJQUVuQixxREFBMkI7O0lBRTNCLGlEQUF1Qjs7SUFFdkIsOENBQW9COztJQUVwQixpREFBNkM7Ozs7O0lBRTdDLGtEQUFpQzs7Ozs7SUFFakMsZ0RBQStCOzs7OztJQUUvQix1Q0FBOEI7Ozs7O0lBRTlCLGlEQUE0Qzs7Ozs7SUFFaEMsNkNBQXFEOzs7OztJQUM5RCw2Q0FBdUM7Ozs7O0lBQ3ZDLDJDQUFvQzs7Ozs7SUFDcEMsb0RBQXFEOzs7OztJQUNyRCxrREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SG9zdExpc3RlbmVyLFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE9uSW5pdCxcblx0UExBVEZPUk1fSUQsXG5cdFJlbmRlcmVyMixcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9nZW9tZXRyeS5zZXJ2aWNlJztcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSc7XG5cbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gJy4vcGxhY2VtZW50JztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9kaXJlY3Rpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1kcm9wZG93bicsXG5cdHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2Ryb3Bkb3duLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZHJvcGRvd24ubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9kcm9wZG93bi5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWRyb3Bkb3duXSc6ICd0cnVlJ1xuXHR9LFxuXHRwcm92aWRlcnM6IFtcblx0XHRHZW9tZXRyeVNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEcm9wZG93bkNvbXBvbmVudCBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duTWVudScsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGRyb3Bkb3duTWVudVJlZjogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRjb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG5cdG9uUmVzaXplKCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLndpbmRvd1NpemUgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0fVxuXHR9XG5cblx0QElucHV0KClcblx0ZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRkcm9wZG93blRleHQ6IHN0cmluZyA9ICdEcm9wZG93bic7XG5cblx0QElucHV0KClcblx0YXJyb3c6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdEBJbnB1dCgpXG5cdHBsYWNlbWVudDogUGxhY2VtZW50O1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXIgPSAxMjA7XG5cblx0QElucHV0KClcblx0c2hvd09uSG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRpc0Fycm93RW5hYmxlZDogYm9vbGVhbiA9IHRoaXMuYXJyb3c7XG5cblx0Y29udGFpbmVyV2lkdGg6IG51bWJlcjtcblxuXHRjb250YWluZXJIZWlnaHQ6IG51bWJlcjtcblxuXHR3aW5kb3dTaXplOiBudW1iZXI7XG5cblx0aG9yaXpvbnRhbFBvc2l0aW9uOiBudW1iZXI7XG5cblx0Ym90dG9tUG9zaXRpb246IG51bWJlcjtcblxuXHR0b3BQb3NpdGlvbjogbnVtYmVyO1xuXG5cdGFycm93RGlyZWN0aW9uOiBEaXJlY3Rpb24gPSBEaXJlY3Rpb24uQk9UVE9NO1xuXG5cdHByaXZhdGUgY2FuT3BlbkRvd253YXJkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgY2FuT3BlblVwd2FyZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRvcEJvcmRlcldpZHRoOiBudW1iZXIgPSAxO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZ2VvbWV0cnlTZXJ2aWNlOiBHZW9tZXRyeVNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub25SZXNpemUoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5wbGFjZW1lbnQpIHtcblx0XHRcdHRoaXMuY2hhbmdlUGxhY2VtZW50KCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuYXJyb3cpIHtcblx0XHRcdHRoaXMuaXNBcnJvd0VuYWJsZWQgPSB0aGlzLmFycm93O1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnlTZXJ2aWNlXG5cdFx0XHQud2F0Y2hHZW9tZXRyeSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZ2VvbWV0cnk6IEdlb21ldHJ5KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29udGFpbmVySGVpZ2h0ID0gZ2VvbWV0cnkuZ2V0Q29udGFpbmVySGVpZ2h0KCk7XG5cdFx0XHRcdHRoaXMuY29udGFpbmVyV2lkdGggPSBnZW9tZXRyeS5nZXRDb250YWluZXJXaWR0aCgpO1xuXHRcdFx0XHR0aGlzLmNhbk9wZW5VcHdhcmQgPSBnZW9tZXRyeS5jYW5PcGVuVXB3YXJkKCk7XG5cdFx0XHRcdHRoaXMuY2FuT3BlbkRvd253YXJkID0gZ2VvbWV0cnkuY2FuT3BlbkRvd253YXJkKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRyeVRvT3BlbihldmVudDogYW55KTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckRpc2FibGVkKGV2ZW50KSkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3Blbk1lbnUoIXRoaXMub3Blbik7XG5cdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHR9XG5cdH1cblxuXHR0cnlUb09wZW5PbkhvdmVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnNob3dPbkhvdmVyKSB7XG5cdFx0XHR0aGlzLm9wZW5NZW51KCF0aGlzLm9wZW4pO1xuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0aGlkZU9uSG92ZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2hvd09uSG92ZXIpIHtcblx0XHRcdHRoaXMuaGlkZUl0ZW1zKCk7XG5cdFx0XHR0aGlzLm9wZW4gPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRjbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyQ2xpY2tlZChldmVudCkpIHtcblx0XHRcdHRoaXMub3Blbk1lbnUoZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdGlzRGlyZWN0aW9uTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc0Fycm93RW5hYmxlZCAmJiB0aGlzLmFycm93RGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTEVGVDtcblx0fVxuXG5cdHByaXZhdGUgb3Blbk1lbnUob3BlbmVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5vcGVuID0gb3BlbmVkO1xuXG5cdFx0aWYgKHRoaXMub3Blbikge1xuXHRcdFx0dGhpcy5zaG93SXRlbXMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5oaWRlSXRlbXMoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNob3dJdGVtcygpOiB2b2lkIHtcblx0XHR0aGlzLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLW1lbnUtb3BlbmVkJyk7XG5cdFx0dGhpcy5nZW9tZXRyeVNlcnZpY2UuY2hhbmdlR2VvbWV0cnkodGhpcy5jb250YWluZXJSZWYsIHRoaXMuZHJvcGRvd25NZW51UmVmLCB0aGlzLndpbmRvd1NpemUpO1xuXG5cdFx0aWYgKHRoaXMuY2FuT3BlbkRvd253YXJkIHx8ICF0aGlzLmNhbk9wZW5VcHdhcmQpIHtcblx0XHRcdHRoaXMub3BlbkRvd253YXJkKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlblVwd2FyZCgpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBsYWNlbWVudCA9PT0gUGxhY2VtZW50LlJpZ2h0KSB7XG5cdFx0XHR0aGlzLm9wZW5SaWdodCgpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBsYWNlbWVudCA9PT0gUGxhY2VtZW50LkxlZnQpIHtcblx0XHRcdHRoaXMub3BlbkxlZnQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9wZW5Eb3dud2FyZCgpOiB2b2lkIHtcblx0XHR0aGlzLnRvcFBvc2l0aW9uID0gbnVsbDtcblx0XHR0aGlzLmJvdHRvbVBvc2l0aW9uID0gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5VcHdhcmQoKTogdm9pZCB7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IG51bGw7XG5cdFx0dGhpcy50b3BQb3NpdGlvbiA9IHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBvcGVuUmlnaHQoKTogdm9pZCB7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IC10aGlzLnRvcEJvcmRlcldpZHRoO1xuXHRcdHRoaXMudG9wUG9zaXRpb24gPSBudWxsO1xuXHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gdGhpcy5jb250YWluZXJXaWR0aDtcblx0fVxuXG5cdHByaXZhdGUgb3BlbkxlZnQoKTogdm9pZCB7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IC10aGlzLnRvcEJvcmRlcldpZHRoO1xuXHRcdHRoaXMudG9wUG9zaXRpb24gPSBudWxsO1xuXHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gLSh0aGlzLmNvbnRhaW5lcldpZHRoICsgMSk7XG5cdH1cblxuXHRwcml2YXRlIGNoYW5nZVBsYWNlbWVudCgpIHtcblxuXHRcdHN3aXRjaCAodGhpcy5wbGFjZW1lbnQpIHtcblxuXHRcdFx0Y2FzZSBQbGFjZW1lbnQuUmlnaHQ6IHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcyh0aGlzLmRyb3Bkb3duTWVudVJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRyb3Bkb3duLWxlZnQnKTtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLmRyb3Bkb3duTWVudVJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRyb3Bkb3duLXJpZ2h0Jyk7XG5cdFx0XHRcdHRoaXMuYXJyb3dEaXJlY3Rpb24gPSBEaXJlY3Rpb24uUklHSFQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFBsYWNlbWVudC5MZWZ0OiB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5kcm9wZG93bk1lbnVSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kcm9wZG93bi1yaWdodCcpO1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMuZHJvcGRvd25NZW51UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZHJvcGRvd24tbGVmdCcpO1xuXHRcdFx0XHR0aGlzLmFycm93RGlyZWN0aW9uID0gRGlyZWN0aW9uLkxFRlQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaGlkZUl0ZW1zKCk6IHZvaWQge1xuXHRcdGNvbnN0IGl0ZW1zRWxIYXNPcGVuQ2xhc3MgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2d1aS1tZW51LW9wZW5lZCcpO1xuXG5cdFx0aWYgKGl0ZW1zRWxIYXNPcGVuQ2xhc3MpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktbWVudS1vcGVuZWQnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyQ2xpY2tlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckRpc2FibGVkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ3VpLWRpc2FibGVkJyk7XG5cdH1cblxuXHRwcml2YXRlIGFkZENsYXNzKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgbmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgbmFtZSk7XG5cdH1cbn1cbiJdfQ==