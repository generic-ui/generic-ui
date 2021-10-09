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
            default:
                break;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsV0FBVyxFQUNYLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFvQnBFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjOzs7Ozs7OztJQXlEMUQsWUFBa0QsVUFBZSxFQUM3QyxVQUFzQixFQUN0QixRQUFtQixFQUNuQixpQkFBb0MsRUFDcEMsZUFBZ0M7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFMeUMsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUE3Q3BELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsaUJBQVksR0FBVyxVQUFVLENBQUM7UUFHbEMsVUFBSyxHQUFZLElBQUksQ0FBQztRQU10QixVQUFLLEdBQVcsR0FBRyxD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QUFLO29CQUdMLEtBQUs7d0JBR0wsS0FBSztvQkFHTCxLQUFLOzBCQUdMLEtBQUs7Ozs7SUE1Qk4sa0RBQzRCOztJQUU1QiwrQ0FDeUI7O0lBU3pCLDJDQUMwQjs7SUFFMUIsK0NBQ2tDOztJQUVsQyx3Q0FDc0I7O0lBRXRCLDRDQUNxQjs7SUFFckIsd0NBQ29COztJQUVwQiw4Q0FDNkI7O0lBRTdCLGlEQUFxQzs7SUFFckMsaURBQXVCOztJQUV2QixrREFBd0I7O0lBRXhCLDZDQUFtQjs7SUFFbkIscURBQTJCOztJQUUzQixpREFBdUI7O0lBRXZCLDhDQUFvQjs7SUFFcEIsaURBQTZDOzs7OztJQUU3QyxrREFBaUM7Ozs7O0lBRWpDLGdEQUErQjs7Ozs7SUFFL0IsdUNBQThCOzs7OztJQUU5QixpREFBNEM7Ozs7O0lBRWhDLDZDQUFxRDs7Ozs7SUFDOUQsNkNBQXVDOzs7OztJQUN2QywyQ0FBb0M7Ozs7O0lBQ3BDLG9EQUFxRDs7Ozs7SUFDckQsa0RBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEhvc3RMaXN0ZW5lcixcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRPbkluaXQsXG5cdFBMQVRGT1JNX0lELFxuXHRSZW5kZXJlcjIsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEdlb21ldHJ5U2VydmljZSB9IGZyb20gJy4vZ2VvbWV0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknO1xuXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tICcuL3BsYWNlbWVudCc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2Fycm93LWljb24vZGlyZWN0aW9uJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZHJvcGRvd24nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9kcm9wZG93bi5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2Ryb3Bkb3duLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZHJvcGRvd24uZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1kcm9wZG93bl0nOiAndHJ1ZSdcblx0fSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R2VvbWV0cnlTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRHJvcGRvd25Db21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKCdkcm9wZG93bk1lbnUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRkcm9wZG93bk1lbnVSZWY6IEVsZW1lbnRSZWY7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSlcblx0Y29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuXHRvblJlc2l6ZSgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy53aW5kb3dTaXplID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdH1cblx0fVxuXG5cdEBJbnB1dCgpXG5cdGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0ZHJvcGRvd25UZXh0OiBzdHJpbmcgPSAnRHJvcGRvd24nO1xuXG5cdEBJbnB1dCgpXG5cdGFycm93OiBib29sZWFuID0gdHJ1ZTtcblxuXHRASW5wdXQoKVxuXHRwbGFjZW1lbnQ6IFBsYWNlbWVudDtcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyID0gMTIwO1xuXG5cdEBJbnB1dCgpXG5cdHNob3dPbkhvdmVyOiBib29sZWFuID0gZmFsc2U7XG5cblx0aXNBcnJvd0VuYWJsZWQ6IGJvb2xlYW4gPSB0aGlzLmFycm93O1xuXG5cdGNvbnRhaW5lcldpZHRoOiBudW1iZXI7XG5cblx0Y29udGFpbmVySGVpZ2h0OiBudW1iZXI7XG5cblx0d2luZG93U2l6ZTogbnVtYmVyO1xuXG5cdGhvcml6b250YWxQb3NpdGlvbjogbnVtYmVyO1xuXG5cdGJvdHRvbVBvc2l0aW9uOiBudW1iZXI7XG5cblx0dG9wUG9zaXRpb246IG51bWJlcjtcblxuXHRhcnJvd0RpcmVjdGlvbjogRGlyZWN0aW9uID0gRGlyZWN0aW9uLkJPVFRPTTtcblxuXHRwcml2YXRlIGNhbk9wZW5Eb3dud2FyZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIGNhbk9wZW5VcHdhcmQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSB0b3BCb3JkZXJXaWR0aDogbnVtYmVyID0gMTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGdlb21ldHJ5U2VydmljZTogR2VvbWV0cnlTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMucGxhY2VtZW50KSB7XG5cdFx0XHR0aGlzLmNoYW5nZVBsYWNlbWVudCgpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmFycm93KSB7XG5cdFx0XHR0aGlzLmlzQXJyb3dFbmFibGVkID0gdGhpcy5hcnJvdztcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmdlb21ldHJ5U2VydmljZVxuXHRcdFx0LndhdGNoR2VvbWV0cnkoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGdlb21ldHJ5OiBHZW9tZXRyeSkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lckhlaWdodCA9IGdlb21ldHJ5LmdldENvbnRhaW5lckhlaWdodCgpO1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lcldpZHRoID0gZ2VvbWV0cnkuZ2V0Q29udGFpbmVyV2lkdGgoKTtcblx0XHRcdFx0dGhpcy5jYW5PcGVuVXB3YXJkID0gZ2VvbWV0cnkuY2FuT3BlblVwd2FyZCgpO1xuXHRcdFx0XHR0aGlzLmNhbk9wZW5Eb3dud2FyZCA9IGdlb21ldHJ5LmNhbk9wZW5Eb3dud2FyZCgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0cnlUb09wZW4oZXZlbnQ6IGFueSk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJEaXNhYmxlZChldmVudCkpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW5NZW51KCF0aGlzLm9wZW4pO1xuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0dHJ5VG9PcGVuT25Ib3ZlcigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zaG93T25Ib3Zlcikge1xuXHRcdFx0dGhpcy5vcGVuTWVudSghdGhpcy5vcGVuKTtcblx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxuXG5cdGhpZGVPbkhvdmVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnNob3dPbkhvdmVyKSB7XG5cdFx0XHR0aGlzLmhpZGVJdGVtcygpO1xuXHRcdFx0dGhpcy5vcGVuID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Y2xpY2tPdXRzaWRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLm9wZW5NZW51KGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRpc0RpcmVjdGlvbkxlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNBcnJvd0VuYWJsZWQgJiYgdGhpcy5hcnJvd0RpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxFRlQ7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5NZW51KG9wZW5lZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMub3BlbiA9IG9wZW5lZDtcblxuXHRcdGlmICh0aGlzLm9wZW4pIHtcblx0XHRcdHRoaXMuc2hvd0l0ZW1zKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaGlkZUl0ZW1zKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzaG93SXRlbXMoKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1tZW51LW9wZW5lZCcpO1xuXHRcdHRoaXMuZ2VvbWV0cnlTZXJ2aWNlLmNoYW5nZUdlb21ldHJ5KHRoaXMuY29udGFpbmVyUmVmLCB0aGlzLmRyb3Bkb3duTWVudVJlZiwgdGhpcy53aW5kb3dTaXplKTtcblxuXHRcdGlmICh0aGlzLmNhbk9wZW5Eb3dud2FyZCB8fCAhdGhpcy5jYW5PcGVuVXB3YXJkKSB7XG5cdFx0XHR0aGlzLm9wZW5Eb3dud2FyZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW5VcHdhcmQoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wbGFjZW1lbnQgPT09IFBsYWNlbWVudC5SaWdodCkge1xuXHRcdFx0dGhpcy5vcGVuUmlnaHQoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wbGFjZW1lbnQgPT09IFBsYWNlbWVudC5MZWZ0KSB7XG5cdFx0XHR0aGlzLm9wZW5MZWZ0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvcGVuRG93bndhcmQoKTogdm9pZCB7XG5cdFx0dGhpcy50b3BQb3NpdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBvcGVuVXB3YXJkKCk6IHZvaWQge1xuXHRcdHRoaXMuYm90dG9tUG9zaXRpb24gPSBudWxsO1xuXHRcdHRoaXMudG9wUG9zaXRpb24gPSB0aGlzLmNvbnRhaW5lckhlaWdodDtcblx0fVxuXG5cdHByaXZhdGUgb3BlblJpZ2h0KCk6IHZvaWQge1xuXHRcdHRoaXMuYm90dG9tUG9zaXRpb24gPSAtdGhpcy50b3BCb3JkZXJXaWR0aDtcblx0XHR0aGlzLnRvcFBvc2l0aW9uID0gbnVsbDtcblx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IHRoaXMuY29udGFpbmVyV2lkdGg7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5MZWZ0KCk6IHZvaWQge1xuXHRcdHRoaXMuYm90dG9tUG9zaXRpb24gPSAtdGhpcy50b3BCb3JkZXJXaWR0aDtcblx0XHR0aGlzLnRvcFBvc2l0aW9uID0gbnVsbDtcblx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IC0odGhpcy5jb250YWluZXJXaWR0aCArIDEpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGFuZ2VQbGFjZW1lbnQoKTogdm9pZCB7XG5cblx0XHRzd2l0Y2ggKHRoaXMucGxhY2VtZW50KSB7XG5cblx0XHRcdGNhc2UgUGxhY2VtZW50LlJpZ2h0OiB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5kcm9wZG93bk1lbnVSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kcm9wZG93bi1sZWZ0Jyk7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5kcm9wZG93bk1lbnVSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kcm9wZG93bi1yaWdodCcpO1xuXHRcdFx0XHR0aGlzLmFycm93RGlyZWN0aW9uID0gRGlyZWN0aW9uLlJJR0hUO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBQbGFjZW1lbnQuTGVmdDoge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKHRoaXMuZHJvcGRvd25NZW51UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZHJvcGRvd24tcmlnaHQnKTtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLmRyb3Bkb3duTWVudVJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRyb3Bkb3duLWxlZnQnKTtcblx0XHRcdFx0dGhpcy5hcnJvd0RpcmVjdGlvbiA9IERpcmVjdGlvbi5MRUZUO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBoaWRlSXRlbXMoKTogdm9pZCB7XG5cdFx0Y29uc3QgaXRlbXNFbEhhc09wZW5DbGFzcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZ3VpLW1lbnUtb3BlbmVkJyk7XG5cblx0XHRpZiAoaXRlbXNFbEhhc09wZW5DbGFzcykge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1tZW51LW9wZW5lZCcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJDbGlja2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyRGlzYWJsZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdndWktZGlzYWJsZWQnKTtcblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoZWxlbWVudDogRWxlbWVudFJlZiwgbmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuYW1lKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQ2xhc3MoZWxlbWVudDogRWxlbWVudFJlZiwgbmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBuYW1lKTtcblx0fVxufVxuIl19