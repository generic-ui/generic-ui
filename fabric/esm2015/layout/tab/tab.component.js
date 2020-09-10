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
     * @param {?} item
     * @return {?}
     */
    isSvg(item) {
        return typeof item === 'object';
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getTabName(item) {
        return typeof item === 'object' ? item.name : item;
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
        if (typeof tab === 'object') {
            tab = tab.name;
        }
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
                template: "<div #tab>\n\n\t<div class=\"gui-tab-menu\">\n\n\t\t<div (click)=\"scrollTabList(false)\"\n\t\t\t *ngIf=\"scrollActive\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<gui-arrow-icon [direction]=\"Direction.LEFT\"></gui-arrow-icon>\n\t\t</div>\n\n\t\t<div class=\"gui-tab-menu-list\">\n\t\t\t<div #tabMenuList\n\t\t\t\t (click)=\"toggleTab(tab)\"\n\t\t\t\t *ngFor=\"let tab of menu\"\n\t\t\t\t [attr.data-tab]=\"getTabName(tab)\"\n\t\t\t\t class=\"gui-tab-menu-item\">\n\t\t\t\t<span *ngIf=\"!isSvg(tab)\">{{tab}}</span>\n\t\t\t\t<ng-container *ngIf=\"isSvg(tab)\">\n\t\t\t\t\t<gui-svg-template [svg]=\"tab.svg\"></gui-svg-template>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div (click)=\"scrollTabList(true)\"\n\t\t\t *ngIf=\"scrollActive\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<gui-arrow-icon></gui-arrow-icon>\n\t\t</div>\n\n\t</div>\n\n\t<div #tabItem\n\t\t class=\"gui-tab-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-tab]': 'true'
                },
                styles: [".gui-tab{font:14px Arial}.gui-tab .gui-tab-content{background:#fff;border-radius:0 0 4px 4px;padding:12px;border:1px solid #d6d6d6}.gui-tab .gui-tab-menu{display:-ms-flexbox;display:flex;margin-bottom:-1px}.gui-tab .gui-tab-menu .gui-tab-menu-list{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden;border-radius:4px 4px 0 0}.gui-tab .gui-tab-menu .gui-tab-menu-item{background:#fafafa;box-sizing:border-box;position:relative;border-radius:4px 4px 0 0;cursor:pointer;display:inline-block;height:34px;margin-right:2px;padding:8px 16px;text-align:center;white-space:nowrap;border:1px solid #d6d6d6}.gui-tab .gui-tab-menu .gui-tab-menu-item:nth-last-child(1){margin-right:0}.gui-tab .gui-tab-menu .gui-tab-menu-item svg{height:16px;width:16px}.gui-tab .gui-tab-menu .gui-tab-menu-item svg path{fill:#aaa}.gui-tab .gui-tab-menu .scroll-button{box-sizing:border-box;color:#ccc;background:0 0;height:34px;font-weight:700;padding:8px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-tab .gui-tab-menu .scroll-button:hover svg path{stroke:#464646}.gui-tab .gui-tab-item{display:none}.gui-tab .gui-active.gui-tab-menu-item{background:#fff;border-color:#d6d6d6 #d6d6d6 #fff;border-style:solid;border-width:1px;border-radius:4px 4px 0 0;color:#2185d0}.gui-tab .gui-active.gui-tab-menu-item svg path{fill:#2185d0}.gui-tab .gui-active.gui-tab-item{display:block}", ".gui-material .gui-tab{font:14px Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-tab{color:#bdbdbd}.gui-dark .gui-tab .gui-tab-content{background:#424242;border-color:#616161}.gui-dark .gui-tab .gui-tab-menu-item{background:#616161;border-color:transparent}.gui-dark .gui-tab .gui-active.gui-tab-menu-item{background:#424242;border-color:#616161 #616161 transparent;color:#ce93d8}"]
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
    tabItemRef: [{ type: ViewChild, args: ['tabItem', { static: false },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWlCcEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGNBQWM7Ozs7OztJQTRCckQsWUFBb0IsUUFBbUIsRUFDNUIsaUJBQW9DLEVBQ2YsVUFBZTtRQUM5QyxLQUFLLEVBQUUsQ0FBQztRQUhXLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFWL0MsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUVkLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLDBCQUFxQixHQUFHLFlBQVksQ0FBQztJQU10RCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxD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V0FBVzs7O3FCQTVCckIsU0FBUyxTQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUJBR2xDLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzBCQUd0QyxZQUFZLFNBQUMsYUFBYTttQkFHMUIsS0FBSztxQkFHTCxLQUFLOzJCQUdMLEtBQUs7Ozs7SUFmTixvQ0FDbUI7O0lBRW5CLHdDQUN1Qjs7SUFFdkIseUNBQ21DOztJQUVuQyxrQ0FDaUM7O0lBRWpDLG9DQUNlOztJQUVmLDBDQUNzQjs7SUFFdEIsdUNBQXNCOzs7OztJQUV0QiwwQ0FBaUM7Ozs7O0lBQ2pDLDJDQUFrQzs7Ozs7SUFDbEMsMENBQW1DOzs7OztJQUVuQyxtREFBc0Q7Ozs7O0lBRTFDLHNDQUEyQjs7Ozs7SUFDcEMsK0NBQTRDOzs7OztJQUM1Qyx3Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0UExBVEZPUk1fSUQsXG5cdFF1ZXJ5TGlzdCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdDaGlsZHJlbixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9kaXJlY3Rpb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR3VpVGFiSXRlbSB9IGZyb20gJy4vZmFicmljLXRhYi1pdGVtJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXRhYicsXG5cdHRlbXBsYXRlVXJsOiBgdGFiLmNvbXBvbmVudC5odG1sYCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vdGFiLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvdGFiLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvdGFiLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktdGFiXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1RhYkNvbXBvbmVudCBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QFZpZXdDaGlsZCgndGFiJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdHRhYlJlZjogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkKCd0YWJJdGVtJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdHRhYkl0ZW1SZWY6IEVsZW1lbnRSZWY7XG5cblx0QFZpZXdDaGlsZHJlbigndGFiTWVudUxpc3QnKVxuXHR0YWJNZW51TGlzdDogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG5cdEBJbnB1dCgpXG5cdG1lbnU6IEFycmF5PHN0cmluZyB8IEd1aVRhYkl0ZW0+O1xuXG5cdEBJbnB1dCgpXG5cdGFjdGl2ZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNjcm9sbEFjdGl2ZTogYm9vbGVhbjtcblxuXHREaXJlY3Rpb24gPSBEaXJlY3Rpb247XG5cblx0cHJpdmF0ZSBsaXN0UG9zaXRpb246IG51bWJlciA9IDA7XG5cdHByaXZhdGUgbWVudUxpc3RXaWR0aDogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSByZWFkb25seSBzY3JvbGxBbW91bnQgPSA2MDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IEFDVElWRV9UQUJfQ0xBU1NfTkFNRSA9ICdndWktYWN0aXZlJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy50b2dnbGVUYWIodGhpcy5hY3RpdmUpO1xuXHRcdHRoaXMuY2FsY3VsYXRlTWVudVdpZHRoKCk7XG5cdFx0dGhpcy5zaG93TWVudUFycm93cygpO1xuXHRcdHRoaXMuY2hlY2tJZk1lbnVGaXRzT25SZXNpemUoKTtcblx0fVxuXG5cdHRvZ2dsZVRhYih0YWI6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVtb3ZlQWN0aXZlKCk7XG5cdFx0dGhpcy5zZXRBY3RpdmUodGFiKTtcblx0fVxuXG5cdGlzU3ZnKGl0ZW06IHN0cmluZyB8IEd1aVRhYkl0ZW0pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnO1xuXHR9XG5cblx0Z2V0VGFiTmFtZShpdGVtOiBzdHJpbmcgfCBHdWlUYWJJdGVtKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnID8gaXRlbS5uYW1lIDogaXRlbTtcblx0fVxuXG5cdHNjcm9sbFRhYkxpc3Qoc2Nyb2xsUmlnaHRDbGlja2VkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0bGV0IGxpc3RXaWR0aCA9IHRoaXMudGFiUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS10YWItbWVudS1saXN0Jykub2Zmc2V0V2lkdGgsXG5cdFx0XHRtZW51T3ZlcmZsb3cgPSB0aGlzLm1lbnVMaXN0V2lkdGggLSBsaXN0V2lkdGg7XG5cblx0XHRpZiAoc2Nyb2xsUmlnaHRDbGlja2VkICYmIG1lbnVPdmVyZmxvdyA+IHRoaXMubGlzdFBvc2l0aW9uKSB7XG5cdFx0XHR0aGlzLmxpc3RQb3NpdGlvbiArPSB0aGlzLnNjcm9sbEFtb3VudDtcblx0XHR9IGVsc2UgaWYgKCFzY3JvbGxSaWdodENsaWNrZWQgJiYgdGhpcy5saXN0UG9zaXRpb24gPiAwKSB7XG5cdFx0XHR0aGlzLmxpc3RQb3NpdGlvbiAtPSB0aGlzLnNjcm9sbEFtb3VudDtcblx0XHR9XG5cblx0XHR0aGlzLnRhYlJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgJ2d1aS10YWItbWVudS1saXN0Jykuc2Nyb2xsTGVmdCA9IHRoaXMubGlzdFBvc2l0aW9uO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRBY3RpdmUodGFiOiBzdHJpbmcgfCBHdWlUYWJJdGVtKTogdm9pZCB7XG5cdFx0aWYgKHR5cGVvZiB0YWIgPT09ICdvYmplY3QnKSB7XG5cdFx0XHR0YWIgPSB0YWIubmFtZTtcblx0XHR9XG5cblx0XHRjb25zdCBuYXZNZW51VGFiRWwgPSB0aGlzLnRhYlJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhYj1cIicgKyB0YWIgKyAnXCJdJyksXG5cdFx0XHRuYXZUYWJJdGVtRWwgPSB0aGlzLnRhYkl0ZW1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YWI9XCInICsgdGFiICsgJ1wiXScpO1xuXG5cdFx0dGhpcy5hZGRDbGFzcyhuYXZNZW51VGFiRWwsIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblx0XHR0aGlzLmFkZENsYXNzKG5hdlRhYkl0ZW1FbCwgdGhpcy5BQ1RJVkVfVEFCX0NMQVNTX05BTUUpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVBY3RpdmUoKTogdm9pZCB7XG5cdFx0Y29uc3QgbmF2TWVudVRhYkVsID0gdGhpcy50YWJSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKSxcblx0XHRcdG5hdlRhYkl0ZW1FbCA9IHRoaXMudGFiSXRlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5BQ1RJVkVfVEFCX0NMQVNTX05BTUUpO1xuXG5cdFx0dGhpcy5yZW1vdmVDbGFzcyhuYXZNZW51VGFiRWwsIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblx0XHR0aGlzLnJlbW92ZUNsYXNzKG5hdlRhYkl0ZW1FbCwgdGhpcy5BQ1RJVkVfVEFCX0NMQVNTX05BTUUpO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGRDbGFzcyhlbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZykge1xuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5hbWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQ2xhc3MoZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcpIHtcblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBuYW1lKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSWZNZW51Rml0c09uUmVzaXplKCk6IHZvaWQge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cblx0XHRcdGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuXHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2hvd01lbnVBcnJvd3MoKSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVNZW51V2lkdGgoKTogdm9pZCB7XG5cdFx0dGhpcy5tZW51TGlzdFdpZHRoID0gMDtcblx0XHR0aGlzLnRhYk1lbnVMaXN0XG5cdFx0XHQuZm9yRWFjaCgobGlzdEl0ZW06IEVsZW1lbnRSZWYpID0+IHtcblx0XHRcdFx0dGhpcy5tZW51TGlzdFdpZHRoICs9IGxpc3RJdGVtLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc2hvd01lbnVBcnJvd3MoKTogdm9pZCB7XG5cdFx0Y29uc3QgbWVudVdpZHRoID0gdGhpcy50YWJSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3VpLXRhYi1tZW51Jykub2Zmc2V0V2lkdGg7XG5cblx0XHR0aGlzLnNjcm9sbEFjdGl2ZSA9IG1lbnVXaWR0aCA8IHRoaXMubWVudUxpc3RXaWR0aDtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG59XG4iXX0=