/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, QueryList, Renderer2, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Direction } from '../../common/icons/arrow-icon/direction';
import { fromEvent } from 'rxjs';
import { FabricReactive } from '../../common/fabric-reactive';
import { isPlatformBrowser } from '@angular/common';
export class FabricTabComponent extends FabricReactive {
    /**
     * @param {?} renderer
     * @param {?} changeDetectorRef
     * @param {?} platformId
     */
    constructor(renderer, changeDetectorRef, platformId) {
        super();
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.platformId = platformId;
        this.Direction = Direction;
        this.listPosition = 0;
        this.menuListWidth = 0;
        this.scrollAmount = 60;
        this.ACTIVE_TAB_CLASS_NAME = 'gui-active';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.toggleTab(this.active);
        this.calculateMenuWidth();
        this.showMenuArrows();
        this.checkIfMenuFitsOnResize();
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    toggleTab(tab) {
        this.removeActive();
        this.setActive(tab);
    }
    /**
     * @param {?} scrollRightClicked
     * @return {?}
     */
    scrollTabList(scrollRightClicked) {
        /** @type {?} */
        let listWidth = this.tabRef.nativeElement.querySelector('.gui-tab-menu-list').offsetWidth;
        /** @type {?} */
        let menuOverflow = this.menuListWidth - listWidth;
        if (scrollRightClicked && menuOverflow > this.listPosition) {
            this.listPosition += this.scrollAmount;
        }
        else if (!scrollRightClicked && this.listPosition > 0) {
            this.listPosition -= this.scrollAmount;
        }
        this.tabRef.nativeElement.querySelector('.' + 'gui-tab-menu-list').scrollLeft = this.listPosition;
    }
    /**
     * @private
     * @param {?} tab
     * @return {?}
     */
    setActive(tab) {
        /** @type {?} */
        const navMenuTabEl = this.tabRef.nativeElement.querySelector('[data-tab="' + tab + '"]');
        /** @type {?} */
        const navTabItemEl = this.tabItemRef.nativeElement.querySelector('[data-tab="' + tab + '"]');
        this.addClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
        this.addClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
    }
    /**
     * @private
     * @return {?}
     */
    removeActive() {
        /** @type {?} */
        const navMenuTabEl = this.tabRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME);
        /** @type {?} */
        const navTabItemEl = this.tabItemRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME);
        this.removeClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
        this.removeClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
    }
    /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    addClass(element, name) {
        if (element) {
            this.renderer.addClass(element, name);
        }
    }
    /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    removeClass(element, name) {
        if (element) {
            this.renderer.removeClass(element, name);
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkIfMenuFitsOnResize() {
        if (isPlatformBrowser(this.platformId)) {
            fromEvent(window, 'resize')
                .pipe(this.takeUntil())
                .subscribe((/**
             * @return {?}
             */
            () => this.showMenuArrows()));
        }
    }
    /**
     * @private
     * @return {?}
     */
    calculateMenuWidth() {
        this.menuListWidth = 0;
        this.tabMenuList
            .forEach((/**
         * @param {?} listItem
         * @return {?}
         */
        (listItem) => {
            this.menuListWidth += listItem.nativeElement.offsetWidth;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    showMenuArrows() {
        /** @type {?} */
        const menuWidth = this.tabRef.nativeElement.querySelector('.gui-tab-menu').offsetWidth;
        this.scrollActive = menuWidth < this.menuListWidth;
        this.changeDetectorRef.detectChanges();
    }
}
FabricTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-tab',
                template: "<div #tab>\n\n\t<div class=\"gui-tab-menu\">\n\n\t\t<div (click)=\"scrollTabList(false)\"\n\t\t\t *ngIf=\"scrollActive\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<gui-arrow-icon [direction]=\"Direction.LEFT\"></gui-arrow-icon>\n\t\t</div>\n\n\t\t<div class=\"gui-tab-menu-list\">\n\t\t\t<div #tabMenuList\n\t\t\t\t (click)=\"toggleTab(tab)\"\n\t\t\t\t *ngFor=\"let tab of menu\"\n\t\t\t\t [attr.data-tab]=\"tab\"\n\t\t\t\t class=\"gui-tab-menu-item\">\n\t\t\t\t{{tab}}\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div (click)=\"scrollTabList(true)\"\n\t\t\t *ngIf=\"scrollActive\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<gui-arrow-icon></gui-arrow-icon>\n\t\t</div>\n\n\t</div>\n\n\t<div #tabitem\n\t\t class=\"gui-tab-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-tab]': 'true'
                },
                styles: [".gui-tab{font:14px Arial}.gui-tab .gui-tab-content{background:#fff;border-radius:0 0 4px 4px;padding:12px;border:1px solid #d6d6d6}.gui-tab .gui-tab-menu{display:-ms-flexbox;display:flex;-ms-transform:translateY(1px);transform:translateY(1px)}.gui-tab .gui-tab-menu .gui-tab-menu-list{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden}.gui-tab .gui-tab-menu .gui-tab-menu-item{box-sizing:border-box;height:34px;position:relative;cursor:pointer;display:inline-block;padding:8px 16px;text-align:center;white-space:nowrap;border:1px solid transparent}.gui-tab .gui-tab-menu .scroll-button{box-sizing:border-box;color:#ccc;background:0 0;height:34px;font-weight:700;padding:8px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-tab .gui-tab-menu .scroll-button:hover svg path{stroke:#464646}.gui-tab .gui-tab-item{display:none}.gui-tab .gui-active.gui-tab-menu-item{background:#fff;border-color:#d6d6d6 #d6d6d6 #fff;border-style:solid;border-width:1px;border-radius:4px 4px 0 0}.gui-tab .gui-active.gui-tab-item{display:block}", ".gui-material .gui-tab{font:14px Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-tab{color:#bdbdbd}.gui-dark .gui-tab .gui-tab-content{background:#424242;border-color:#616161}.gui-dark .gui-tab .gui-tab-menu-item{border-color:transparent}.gui-dark .gui-tab .gui-active.gui-tab-menu-item{background:#424242;border-color:#616161 #616161 transparent}"]
            }] }
];
/** @nocollapse */
FabricTabComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
FabricTabComponent.propDecorators = {
    tabRef: [{ type: ViewChild, args: ['tab', { static: false },] }],
    tabItemRef: [{ type: ViewChild, args: ['tabitem', { static: false },] }],
    tabMenuList: [{ type: ViewChildren, args: ['tabMenuList',] }],
    menu: [{ type: Input }],
    active: [{ type: Input }],
    scrollActive: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FabricTabComponent.prototype.tabRef;
    /** @type {?} */
    FabricTabComponent.prototype.tabItemRef;
    /** @type {?} */
    FabricTabComponent.prototype.tabMenuList;
    /** @type {?} */
    FabricTabComponent.prototype.menu;
    /** @type {?} */
    FabricTabComponent.prototype.active;
    /** @type {?} */
    FabricTabComponent.prototype.scrollActive;
    /** @type {?} */
    FabricTabComponent.prototype.Direction;
    /**
     * @type {?}
     * @private
     */
    FabricTabComponent.prototype.listPosition;
    /**
     * @type {?}
     * @private
     */
    FabricTabComponent.prototype.menuListWidth;
    /**
     * @type {?}
     * @private
     */
    FabricTabComponent.prototype.scrollAmount;
    /**
     * @type {?}
     * @private
     */
    FabricTabComponent.prototype.ACTIVE_TAB_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    FabricTabComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FabricTabComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    FabricTabComponent.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWdCcEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGNBQWM7Ozs7OztJQTRCckQsWUFBb0IsUUFBbUIsRUFDNUIsaUJBQW9DLEVBQ2YsVUFBZTtRQUM5QyxLQUFLLEVBQUUsQ0FBQztRQUhXLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFWL0MsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUVkLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLDBCQUFxQixHQUFHLFlBQVksQ0FBQztJQU10RCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxD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RXRCLDBDQUFpQzs7Ozs7SUFDakMsMkNBQWtDOzs7OztJQUNsQywwQ0FBbUM7Ozs7O0lBRW5DLG1EQUFzRDs7Ozs7SUFFMUMsc0NBQTJCOzs7OztJQUNwQywrQ0FBNEM7Ozs7O0lBQzVDLHdDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRQTEFURk9STV9JRCxcblx0UXVlcnlMaXN0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0NoaWxkcmVuLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbW1vbi9pY29ucy9hcnJvdy1pY29uL2RpcmVjdGlvbic7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS10YWInLFxuXHR0ZW1wbGF0ZVVybDogYHRhYi5jb21wb25lbnQuaHRtbGAsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3RhYi5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3RhYi5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3RhYi5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXRhYl0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNUYWJDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ3RhYicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHR0YWJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QFZpZXdDaGlsZCgndGFiaXRlbScsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHR0YWJJdGVtUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBWaWV3Q2hpbGRyZW4oJ3RhYk1lbnVMaXN0Jylcblx0dGFiTWVudUxpc3Q6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuXHRASW5wdXQoKVxuXHRtZW51OiBBcnJheTxzdHJpbmc+O1xuXG5cdEBJbnB1dCgpXG5cdGFjdGl2ZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNjcm9sbEFjdGl2ZTogYm9vbGVhbjtcblxuXHREaXJlY3Rpb24gPSBEaXJlY3Rpb247XG5cblx0cHJpdmF0ZSBsaXN0UG9zaXRpb246IG51bWJlciA9IDA7XG5cdHByaXZhdGUgbWVudUxpc3RXaWR0aDogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSByZWFkb25seSBzY3JvbGxBbW91bnQgPSA2MDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IEFDVElWRV9UQUJfQ0xBU1NfTkFNRSA9ICdndWktYWN0aXZlJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy50b2dnbGVUYWIodGhpcy5hY3RpdmUpO1xuXHRcdHRoaXMuY2FsY3VsYXRlTWVudVdpZHRoKCk7XG5cdFx0dGhpcy5zaG93TWVudUFycm93cygpO1xuXHRcdHRoaXMuY2hlY2tJZk1lbnVGaXRzT25SZXNpemUoKTtcblx0fVxuXG5cdHRvZ2dsZVRhYih0YWI6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVtb3ZlQWN0aXZlKCk7XG5cdFx0dGhpcy5zZXRBY3RpdmUodGFiKTtcblx0fVxuXG5cdHNjcm9sbFRhYkxpc3Qoc2Nyb2xsUmlnaHRDbGlja2VkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0bGV0IGxpc3RXaWR0aCA9IHRoaXMudGFiUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS10YWItbWVudS1saXN0Jykub2Zmc2V0V2lkdGgsXG5cdFx0XHRtZW51T3ZlcmZsb3cgPSB0aGlzLm1lbnVMaXN0V2lkdGggLSBsaXN0V2lkdGg7XG5cblx0XHRpZiAoc2Nyb2xsUmlnaHRDbGlja2VkICYmIG1lbnVPdmVyZmxvdyA+IHRoaXMubGlzdFBvc2l0aW9uKSB7XG5cdFx0XHR0aGlzLmxpc3RQb3NpdGlvbiArPSB0aGlzLnNjcm9sbEFtb3VudDtcblx0XHR9IGVsc2UgaWYgKCFzY3JvbGxSaWdodENsaWNrZWQgJiYgdGhpcy5saXN0UG9zaXRpb24gPiAwKSB7XG5cdFx0XHR0aGlzLmxpc3RQb3NpdGlvbiAtPSB0aGlzLnNjcm9sbEFtb3VudDtcblx0XHR9XG5cblx0XHR0aGlzLnRhYlJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgJ2d1aS10YWItbWVudS1saXN0Jykuc2Nyb2xsTGVmdCA9IHRoaXMubGlzdFBvc2l0aW9uO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRBY3RpdmUodGFiOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCBuYXZNZW51VGFiRWwgPSB0aGlzLnRhYlJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhYj1cIicgKyB0YWIgKyAnXCJdJyksXG5cdFx0XHRuYXZUYWJJdGVtRWwgPSB0aGlzLnRhYkl0ZW1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YWI9XCInICsgdGFiICsgJ1wiXScpO1xuXG5cdFx0dGhpcy5hZGRDbGFzcyhuYXZNZW51VGFiRWwsIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblx0XHR0aGlzLmFkZENsYXNzKG5hdlRhYkl0ZW1FbCwgdGhpcy5BQ1RJVkVfVEFCX0NMQVNTX05BTUUpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVBY3RpdmUoKTogdm9pZCB7XG5cdFx0Y29uc3QgbmF2TWVudVRhYkVsID0gdGhpcy50YWJSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKSxcblx0XHRcdG5hdlRhYkl0ZW1FbCA9IHRoaXMudGFiSXRlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5BQ1RJVkVfVEFCX0NMQVNTX05BTUUpO1xuXG5cdFx0dGhpcy5yZW1vdmVDbGFzcyhuYXZNZW51VGFiRWwsIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblx0XHR0aGlzLnJlbW92ZUNsYXNzKG5hdlRhYkl0ZW1FbCwgdGhpcy5BQ1RJVkVfVEFCX0NMQVNTX05BTUUpO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGRDbGFzcyhlbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZykge1xuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5hbWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQ2xhc3MoZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcpIHtcblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBuYW1lKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSWZNZW51Rml0c09uUmVzaXplKCk6IHZvaWQge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cblx0XHRcdGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuXHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2hvd01lbnVBcnJvd3MoKSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVNZW51V2lkdGgoKTogdm9pZCB7XG5cdFx0dGhpcy5tZW51TGlzdFdpZHRoID0gMDtcblx0XHR0aGlzLnRhYk1lbnVMaXN0XG5cdFx0XHQuZm9yRWFjaCgobGlzdEl0ZW06IEVsZW1lbnRSZWYpID0+IHtcblx0XHRcdFx0dGhpcy5tZW51TGlzdFdpZHRoICs9IGxpc3RJdGVtLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc2hvd01lbnVBcnJvd3MoKTogdm9pZCB7XG5cdFx0Y29uc3QgbWVudVdpZHRoID0gdGhpcy50YWJSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3VpLXRhYi1tZW51Jykub2Zmc2V0V2lkdGg7XG5cblx0XHR0aGlzLnNjcm9sbEFjdGl2ZSA9IG1lbnVXaWR0aCA8IHRoaXMubWVudUxpc3RXaWR0aDtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG59XG4iXX0=