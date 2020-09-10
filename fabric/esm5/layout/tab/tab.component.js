/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, QueryList, Renderer2, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Direction } from '../../common/icons/arrow-icon/direction';
import { fromEvent } from 'rxjs';
import { FabricReactive } from '../../common/fabric-reactive';
import { isPlatformBrowser } from '@angular/common';
var FabricTabComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricTabComponent, _super);
    function FabricTabComponent(renderer, changeDetectorRef, platformId) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.changeDetectorRef = changeDetectorRef;
        _this.platformId = platformId;
        _this.Direction = Direction;
        _this.listPosition = 0;
        _this.menuListWidth = 0;
        _this.scrollAmount = 60;
        _this.ACTIVE_TAB_CLASS_NAME = 'gui-active';
        return _this;
    }
    /**
     * @return {?}
     */
    FabricTabComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.toggleTab(this.active);
        this.calculateMenuWidth();
        this.showMenuArrows();
        this.checkIfMenuFitsOnResize();
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    FabricTabComponent.prototype.toggleTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.removeActive();
        this.setActive(tab);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FabricTabComponent.prototype.isSvg = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return typeof item === 'object';
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FabricTabComponent.prototype.getTabName = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return typeof item === 'object' ? item.name : item;
    };
    /**
     * @param {?} scrollRightClicked
     * @return {?}
     */
    FabricTabComponent.prototype.scrollTabList = /**
     * @param {?} scrollRightClicked
     * @return {?}
     */
    function (scrollRightClicked) {
        /** @type {?} */
        var listWidth = this.tabRef.nativeElement.querySelector('.gui-tab-menu-list').offsetWidth;
        /** @type {?} */
        var menuOverflow = this.menuListWidth - listWidth;
        if (scrollRightClicked && menuOverflow > this.listPosition) {
            this.listPosition += this.scrollAmount;
        }
        else if (!scrollRightClicked && this.listPosition > 0) {
            this.listPosition -= this.scrollAmount;
        }
        this.tabRef.nativeElement.querySelector('.' + 'gui-tab-menu-list').scrollLeft = this.listPosition;
    };
    /**
     * @private
     * @param {?} tab
     * @return {?}
     */
    FabricTabComponent.prototype.setActive = /**
     * @private
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        if (typeof tab === 'object') {
            tab = tab.name;
        }
        /** @type {?} */
        var navMenuTabEl = this.tabRef.nativeElement.querySelector('[data-tab="' + tab + '"]');
        /** @type {?} */
        var navTabItemEl = this.tabItemRef.nativeElement.querySelector('[data-tab="' + tab + '"]');
        this.addClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
        this.addClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
    };
    /**
     * @private
     * @return {?}
     */
    FabricTabComponent.prototype.removeActive = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var navMenuTabEl = this.tabRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME);
        /** @type {?} */
        var navTabItemEl = this.tabItemRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME);
        this.removeClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
        this.removeClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
    };
    /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    FabricTabComponent.prototype.addClass = /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        if (element) {
            this.renderer.addClass(element, name);
        }
    };
    /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    FabricTabComponent.prototype.removeClass = /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        if (element) {
            this.renderer.removeClass(element, name);
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricTabComponent.prototype.checkIfMenuFitsOnResize = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            fromEvent(window, 'resize')
                .pipe(this.takeUntil())
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.showMenuArrows(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricTabComponent.prototype.calculateMenuWidth = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.menuListWidth = 0;
        this.tabMenuList
            .forEach((/**
         * @param {?} listItem
         * @return {?}
         */
        function (listItem) {
            _this.menuListWidth += listItem.nativeElement.offsetWidth;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    FabricTabComponent.prototype.showMenuArrows = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var menuWidth = this.tabRef.nativeElement.querySelector('.gui-tab-menu').offsetWidth;
        this.scrollActive = menuWidth < this.menuListWidth;
        this.changeDetectorRef.detectChanges();
    };
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
    FabricTabComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    FabricTabComponent.propDecorators = {
        tabRef: [{ type: ViewChild, args: ['tab', { static: false },] }],
        tabItemRef: [{ type: ViewChild, args: ['tabItem', { static: false },] }],
        tabMenuList: [{ type: ViewChildren, args: ['tabMenuList',] }],
        menu: [{ type: Input }],
        active: [{ type: Input }],
        scrollActive: [{ type: Input }]
    };
    return FabricTabComponent;
}(FabricReactive));
export { FabricTabComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHcEQ7SUFjd0MsOENBQWM7SUE0QnJELDRCQUFvQixRQUFtQixFQUM1QixpQkFBb0MsRUFDZixVQUFlO1FBRi9DLFlBR0MsaUJBQU8sU0FDUDtRQUptQixjQUFRLEdBQVIsUUFBUSxDQUFXO1FBQzVCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDZixnQkFBVSxHQUFWLFVBQVUsQ0FBSztRQVYvQyxlQUFTLEdBQUcsU0FBUyxDQUFDO1FBRWQsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFDakIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFFbEIsMkJBQXFCLEdBQUcsWUFBWSxDQUFDOztJQU10RCxDQUFDOzs7O0lBRUQsNENBQWU7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFD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QUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNMLGlCQUFpQixFQUFFLE1BQU07cUJBQ3pCOztpQkFDRDs7OztnQkF4QkEsU0FBUztnQkFQVCxpQkFBaUI7Z0RBOERiLE1BQU0sU0FBQyxXQUFXOzs7eUJBNUJyQixTQUFTLFNBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs2QkFHbEMsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7OEJBR3RDLFlBQVksU0FBQyxhQUFhO3VCQUcxQixLQUFLO3lCQUdMLEtBQUs7K0JBR0wsS0FBSzs7SUEwR1AseUJBQUM7Q0FBQSxBQXpJRCxDQWN3QyxjQUFjLEdBMkhyRDtTQTNIWSxrQkFBa0I7OztJQUU5QixvQ0FDbUI7O0lBRW5CLHdDQUN1Qjs7SUFFdkIseUNBQ21DOztJQUVuQyxrQ0FDaUM7O0lBRWpDLG9DQUNlOztJQUVmLDBDQUNzQjs7SUFFdEIsdUNBQXNCOzs7OztJQUV0QiwwQ0FBaUM7Ozs7O0lBQ2pDLDJDQUFrQzs7Ozs7SUFDbEMsMENBQW1DOzs7OztJQUVuQyxtREFBc0Q7Ozs7O0lBRTFDLHNDQUEyQjs7Ozs7SUFDcEMsK0NBQTRDOzs7OztJQUM1Qyx3Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0UExBVEZPUk1fSUQsXG5cdFF1ZXJ5TGlzdCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdDaGlsZHJlbixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9kaXJlY3Rpb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR3VpVGFiSXRlbSB9IGZyb20gJy4vZmFicmljLXRhYi1pdGVtJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXRhYicsXG5cdHRlbXBsYXRlVXJsOiBgdGFiLmNvbXBvbmVudC5odG1sYCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vdGFiLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvdGFiLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvdGFiLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktdGFiXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1RhYkNvbXBvbmVudCBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QFZpZXdDaGlsZCgndGFiJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdHRhYlJlZjogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkKCd0YWJJdGVtJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdHRhYkl0ZW1SZWY6IEVsZW1lbnRSZWY7XG5cblx0QFZpZXdDaGlsZHJlbigndGFiTWVudUxpc3QnKVxuXHR0YWJNZW51TGlzdDogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG5cdEBJbnB1dCgpXG5cdG1lbnU6IEFycmF5PHN0cmluZyB8IEd1aVRhYkl0ZW0+O1xuXG5cdEBJbnB1dCgpXG5cdGFjdGl2ZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNjcm9sbEFjdGl2ZTogYm9vbGVhbjtcblxuXHREaXJlY3Rpb24gPSBEaXJlY3Rpb247XG5cblx0cHJpdmF0ZSBsaXN0UG9zaXRpb246IG51bWJlciA9IDA7XG5cdHByaXZhdGUgbWVudUxpc3RXaWR0aDogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSByZWFkb25seSBzY3JvbGxBbW91bnQgPSA2MDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IEFDVElWRV9UQUJfQ0xBU1NfTkFNRSA9ICdndWktYWN0aXZlJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy50b2dnbGVUYWIodGhpcy5hY3RpdmUpO1xuXHRcdHRoaXMuY2FsY3VsYXRlTWVudVdpZHRoKCk7XG5cdFx0dGhpcy5zaG93TWVudUFycm93cygpO1xuXHRcdHRoaXMuY2hlY2tJZk1lbnVGaXRzT25SZXNpemUoKTtcblx0fVxuXG5cdHRvZ2dsZVRhYih0YWI6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVtb3ZlQWN0aXZlKCk7XG5cdFx0dGhpcy5zZXRBY3RpdmUodGFiKTtcblx0fVxuXG5cdGlzU3ZnKGl0ZW06IHN0cmluZyB8IEd1aVRhYkl0ZW0pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnO1xuXHR9XG5cblx0Z2V0VGFiTmFtZShpdGVtOiBzdHJpbmcgfCBHdWlUYWJJdGVtKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnID8gaXRlbS5uYW1lIDogaXRlbTtcblx0fVxuXG5cdHNjcm9sbFRhYkxpc3Qoc2Nyb2xsUmlnaHRDbGlja2VkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0bGV0IGxpc3RXaWR0aCA9IHRoaXMudGFiUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS10YWItbWVudS1saXN0Jykub2Zmc2V0V2lkdGgsXG5cdFx0XHRtZW51T3ZlcmZsb3cgPSB0aGlzLm1lbnVMaXN0V2lkdGggLSBsaXN0V2lkdGg7XG5cblx0XHRpZiAoc2Nyb2xsUmlnaHRDbGlja2VkICYmIG1lbnVPdmVyZmxvdyA+IHRoaXMubGlzdFBvc2l0aW9uKSB7XG5cdFx0XHR0aGlzLmxpc3RQb3NpdGlvbiArPSB0aGlzLnNjcm9sbEFtb3VudDtcblx0XHR9IGVsc2UgaWYgKCFzY3JvbGxSaWdodENsaWNrZWQgJiYgdGhpcy5saXN0UG9zaXRpb24gPiAwKSB7XG5cdFx0XHR0aGlzLmxpc3RQb3NpdGlvbiAtPSB0aGlzLnNjcm9sbEFtb3VudDtcblx0XHR9XG5cblx0XHR0aGlzLnRhYlJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgJ2d1aS10YWItbWVudS1saXN0Jykuc2Nyb2xsTGVmdCA9IHRoaXMubGlzdFBvc2l0aW9uO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRBY3RpdmUodGFiOiBzdHJpbmcgfCBHdWlUYWJJdGVtKTogdm9pZCB7XG5cdFx0aWYgKHR5cGVvZiB0YWIgPT09ICdvYmplY3QnKSB7XG5cdFx0XHR0YWIgPSB0YWIubmFtZTtcblx0XHR9XG5cblx0XHRjb25zdCBuYXZNZW51VGFiRWwgPSB0aGlzLnRhYlJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhYj1cIicgKyB0YWIgKyAnXCJdJyksXG5cdFx0XHRuYXZUYWJJdGVtRWwgPSB0aGlzLnRhYkl0ZW1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YWI9XCInICsgdGFiICsgJ1wiXScpO1xuXG5cdFx0dGhpcy5hZGRDbGFzcyhuYXZNZW51VGFiRWwsIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblx0XHR0aGlzLmFkZENsYXNzKG5hdlRhYkl0ZW1FbCwgdGhpcy5BQ1RJVkVfVEFCX0NMQVNTX05BTUUpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVBY3RpdmUoKTogdm9pZCB7XG5cdFx0Y29uc3QgbmF2TWVudVRhYkVsID0gdGhpcy50YWJSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKSxcblx0XHRcdG5hdlRhYkl0ZW1FbCA9IHRoaXMudGFiSXRlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5BQ1RJVkVfVEFCX0NMQVNTX05BTUUpO1xuXG5cdFx0dGhpcy5yZW1vdmVDbGFzcyhuYXZNZW51VGFiRWwsIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblx0XHR0aGlzLnJlbW92ZUNsYXNzKG5hdlRhYkl0ZW1FbCwgdGhpcy5BQ1RJVkVfVEFCX0NMQVNTX05BTUUpO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGRDbGFzcyhlbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZykge1xuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5hbWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQ2xhc3MoZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcpIHtcblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBuYW1lKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSWZNZW51Rml0c09uUmVzaXplKCk6IHZvaWQge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cblx0XHRcdGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuXHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2hvd01lbnVBcnJvd3MoKSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVNZW51V2lkdGgoKTogdm9pZCB7XG5cdFx0dGhpcy5tZW51TGlzdFdpZHRoID0gMDtcblx0XHR0aGlzLnRhYk1lbnVMaXN0XG5cdFx0XHQuZm9yRWFjaCgobGlzdEl0ZW06IEVsZW1lbnRSZWYpID0+IHtcblx0XHRcdFx0dGhpcy5tZW51TGlzdFdpZHRoICs9IGxpc3RJdGVtLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc2hvd01lbnVBcnJvd3MoKTogdm9pZCB7XG5cdFx0Y29uc3QgbWVudVdpZHRoID0gdGhpcy50YWJSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3VpLXRhYi1tZW51Jykub2Zmc2V0V2lkdGg7XG5cblx0XHR0aGlzLnNjcm9sbEFjdGl2ZSA9IG1lbnVXaWR0aCA8IHRoaXMubWVudUxpc3RXaWR0aDtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG59XG4iXX0=