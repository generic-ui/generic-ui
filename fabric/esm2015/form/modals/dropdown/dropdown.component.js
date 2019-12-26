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
        this.isArrowEnabled = this.arrow;
        this.open = false;
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
        this.bottomPosition = 0;
        this.topPosition = null;
        this.horizontalPosition = this.containerWidth;
    }
    /**
     * @private
     * @return {?}
     */
    openLeft() {
        this.bottomPosition = 0;
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
                template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t [ngClass]=\"{'gui-disabled': disabled}\"\n\t class=\"gui-dropdown-container\">\n\t<div>{{dropdownText}}</div>\n\t<span [ngClass]=\"{'gui-dropdown-arrow': isArrowEnabled}\"></span>\n\t<div #dropdownMenu\n\t\t [style.left.px]=\"horizontalPosition\"\n\t\t [style.top.px]=\"bottomPosition\"\n\t\t [style.bottom.px]=\"topPosition\"\n\t\t class=\"gui-dropdown-menu\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-dropdown]': 'true'
                },
                providers: [GeometryService],
                styles: [".gui-dropdown .gui-dropdown-container{background:#fefdfc;box-sizing:content-box;border-radius:4px;cursor:pointer;color:#333;display:inline-block;font:14px Arial;padding:8px 32px 8px 12px;position:relative;width:70px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d6d6d6}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{border:4px solid transparent;border-color:#595959 transparent transparent;position:absolute;top:5px;right:10px;margin:8px;width:0;height:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{background:inherit;display:none;left:-1px;overflow:hidden;position:absolute;z-index:2;border-radius:4px;border:1px solid #d6d6d6}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{padding:8px 32px 8px 12px;width:70px;list-style-type:none}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#dcdcdc}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{border-color:#ce93d8 transparent transparent}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-arrow{border-color:transparent transparent #ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}"]
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
    placement: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9tb2RhbHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLFdBQVcsRUFDWCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUdwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWtCeEMsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7Ozs7SUEyQ25DLFlBQXlDLFVBQWUsRUFDN0MsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsaUJBQW9DLEVBQ3BDLGVBQWdDO1FBSkYsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUEvQjNDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsaUJBQVksR0FBVyxVQUFVLENBQUM7UUFHbEMsVUFBSyxHQUFZLElBQUksQ0FBQztRQUt0QixtQkFBYyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUM7UUFZN0IsU0FBSSxHQUFZLEtBQUssQ0FBQztRQVM3QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQXhDRCxRQUFRO1FBQ1AsSUFBSSxpQkFBaUIsQ0FB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QkFHMUMsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBR3ZDLFlBQVksU0FBQyxlQUFlO3VCQU81QixLQUFLOzJCQUdMLEtBQUs7b0JBR0wsS0FBSzt3QkFHTCxLQUFLOzs7O0lBdEJOLGtEQUM0Qjs7SUFFNUIsK0NBQ3lCOztJQVN6QiwyQ0FDMEI7O0lBRTFCLCtDQUNrQzs7SUFFbEMsd0NBQ3NCOztJQUV0Qiw0Q0FDcUI7O0lBRXJCLGlEQUFxQzs7SUFFckMsaURBQXVCOztJQUN2QixrREFBd0I7O0lBQ3hCLDZDQUFtQjs7SUFFbkIscURBQTJCOztJQUMzQixpREFBdUI7O0lBQ3ZCLDhDQUFvQjs7Ozs7SUFFcEIsa0RBQWlDOzs7OztJQUNqQyxnREFBK0I7Ozs7O0lBQy9CLHVDQUE4Qjs7Ozs7SUFFOUIsK0NBQW1DOzs7OztJQUV2Qiw2Q0FBNEM7Ozs7O0lBQ3JELDZDQUE4Qjs7Ozs7SUFDOUIsMkNBQTJCOzs7OztJQUMzQixvREFBNEM7Ozs7O0lBQzVDLGtEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRIb3N0TGlzdGVuZXIsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0T25Jbml0LFxuXHRQTEFURk9STV9JRCxcblx0UmVuZGVyZXIyLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEdlb21ldHJ5U2VydmljZSB9IGZyb20gJy4vZ2VvbWV0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknO1xuXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tICcuL3BsYWNlbWVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRyb3Bkb3duJyxcblx0dGVtcGxhdGVVcmw6IGBkcm9wZG93bi5jb21wb25lbnQuaHRtbGAsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2Ryb3Bkb3duLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZHJvcGRvd24ubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9kcm9wZG93bi5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWRyb3Bkb3duXSc6ICd0cnVlJ1xuXHR9LFxuXHRwcm92aWRlcnM6IFtHZW9tZXRyeVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0Ryb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duTWVudScsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGRyb3Bkb3duTWVudVJlZjogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRjb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG5cdG9uUmVzaXplKCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLndpbmRvd1NpemUgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0fVxuXHR9XG5cblx0QElucHV0KClcblx0ZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRkcm9wZG93blRleHQ6IHN0cmluZyA9ICdEcm9wZG93bic7XG5cblx0QElucHV0KClcblx0YXJyb3c6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdEBJbnB1dCgpXG5cdHBsYWNlbWVudDogUGxhY2VtZW50O1xuXG5cdGlzQXJyb3dFbmFibGVkOiBib29sZWFuID0gdGhpcy5hcnJvdztcblxuXHRjb250YWluZXJXaWR0aDogbnVtYmVyO1xuXHRjb250YWluZXJIZWlnaHQ6IG51bWJlcjtcblx0d2luZG93U2l6ZTogbnVtYmVyO1xuXG5cdGhvcml6b250YWxQb3NpdGlvbjogbnVtYmVyO1xuXHRib3R0b21Qb3NpdGlvbjogbnVtYmVyO1xuXHR0b3BQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgY2FuT3BlbkRvd253YXJkOiBib29sZWFuO1xuXHRwcml2YXRlIGNhbk9wZW5VcHdhcmQ6IGJvb2xlYW47XG5cdHByaXZhdGUgb3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBnZW9tZXRyeVNlcnZpY2U6IEdlb21ldHJ5U2VydmljZSkge1xuXHRcdHRoaXMub25SZXNpemUoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5wbGFjZW1lbnQpIHtcblx0XHRcdHRoaXMuY2hhbmdlUGxhY2VtZW50KCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vYnNlcnZlR2VvbWV0cnkoKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHR0cnlUb09wZW4oZXZlbnQ6IGFueSk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJEaXNhYmxlZChldmVudCkpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW5NZW51KCF0aGlzLm9wZW4pO1xuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xpY2tPdXRzaWRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLm9wZW5NZW51KGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9wZW5NZW51KG9wZW5lZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMub3BlbiA9IG9wZW5lZDtcblxuXHRcdGlmICh0aGlzLm9wZW4pIHtcblx0XHRcdHRoaXMuc2hvd0l0ZW1zKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaGlkZUl0ZW1zKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzaG93SXRlbXMoKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1tZW51LW9wZW5lZCcpO1xuXHRcdHRoaXMuZ2VvbWV0cnlTZXJ2aWNlLmNoYW5nZUdlb21ldHJ5KHRoaXMuY29udGFpbmVyUmVmLCB0aGlzLmRyb3Bkb3duTWVudVJlZiwgdGhpcy53aW5kb3dTaXplKTtcblxuXHRcdGlmICh0aGlzLmNhbk9wZW5Eb3dud2FyZCB8fCAhdGhpcy5jYW5PcGVuVXB3YXJkKSB7XG5cdFx0XHR0aGlzLm9wZW5Eb3dud2FyZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW5VcHdhcmQoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wbGFjZW1lbnQgPT09IFBsYWNlbWVudC5SaWdodCkge1xuXHRcdFx0dGhpcy5vcGVuUmlnaHQoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wbGFjZW1lbnQgPT09IFBsYWNlbWVudC5MZWZ0KSB7XG5cdFx0XHR0aGlzLm9wZW5MZWZ0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5zdWJzY3JpcHRpb24gPVxuXHRcdFx0dGhpcy5nZW9tZXRyeVNlcnZpY2Vcblx0XHRcdFx0LndhdGNoR2VvbWV0cnkoKVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdChnZW9tZXRyeTogR2VvbWV0cnkpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuY29udGFpbmVySGVpZ2h0ID0gZ2VvbWV0cnkuZ2V0Q29udGFpbmVySGVpZ2h0KCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRhaW5lcldpZHRoID0gZ2VvbWV0cnkuZ2V0Q29udGFpbmVyV2lkdGgoKTtcblx0XHRcdFx0XHRcdHRoaXMuY2FuT3BlblVwd2FyZCA9IGdlb21ldHJ5LmNhbk9wZW5VcHdhcmQoKTtcblx0XHRcdFx0XHRcdHRoaXMuY2FuT3BlbkRvd253YXJkID0gZ2VvbWV0cnkuY2FuT3BlbkRvd253YXJkKCk7XG5cdFx0XHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5Eb3dud2FyZCgpOiB2b2lkIHtcblx0XHR0aGlzLnRvcFBvc2l0aW9uID0gbnVsbDtcblx0XHR0aGlzLmJvdHRvbVBvc2l0aW9uID0gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5VcHdhcmQoKTogdm9pZCB7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IG51bGw7XG5cdFx0dGhpcy50b3BQb3NpdGlvbiA9IHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBvcGVuUmlnaHQoKTogdm9pZCB7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IDA7XG5cdFx0dGhpcy50b3BQb3NpdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSB0aGlzLmNvbnRhaW5lcldpZHRoO1xuXHR9XG5cblx0cHJpdmF0ZSBvcGVuTGVmdCgpOiB2b2lkIHtcblx0XHR0aGlzLmJvdHRvbVBvc2l0aW9uID0gMDtcblx0XHR0aGlzLnRvcFBvc2l0aW9uID0gbnVsbDtcblx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IC0odGhpcy5jb250YWluZXJXaWR0aCArIDEpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGFuZ2VQbGFjZW1lbnQoKSB7XG5cdFx0aWYgKHRoaXMucGxhY2VtZW50ID09PSBQbGFjZW1lbnQuUmlnaHQpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5kcm9wZG93bk1lbnVSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kcm9wZG93bi1sZWZ0Jyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMuZHJvcGRvd25NZW51UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZHJvcGRvd24tcmlnaHQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcyh0aGlzLmRyb3Bkb3duTWVudVJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRyb3Bkb3duLXJpZ2h0Jyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMuZHJvcGRvd25NZW51UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZHJvcGRvd24tbGVmdCcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaGlkZUl0ZW1zKCk6IHZvaWQge1xuXHRcdGNvbnN0IGl0ZW1zRWxIYXNPcGVuQ2xhc3MgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2d1aS1tZW51LW9wZW5lZCcpO1xuXG5cdFx0aWYgKGl0ZW1zRWxIYXNPcGVuQ2xhc3MpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktbWVudS1vcGVuZWQnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyQ2xpY2tlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckRpc2FibGVkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ3VpLWRpc2FibGVkJyk7XG5cdH1cblxuXHRwcml2YXRlIGFkZENsYXNzKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgbmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgbmFtZSk7XG5cdH1cbn1cbiJdfQ==