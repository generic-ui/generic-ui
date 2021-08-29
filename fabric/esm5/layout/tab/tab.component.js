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
                    styles: [".gui-tab{font:14px Arial}.gui-tab .gui-tab-content{background:#fff;border-radius:0 0 4px 4px;padding:12px;border:1px solid #d6d6d6}.gui-tab .gui-tab-menu{display:-ms-flexbox;display:flex;margin-bottom:-1px}.gui-tab .gui-tab-menu .gui-tab-menu-list{border-radius:4px 4px 0 0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden}.gui-tab .gui-tab-menu .gui-tab-menu-item{background:#fafafa;border-radius:4px 4px 0 0;box-sizing:border-box;cursor:pointer;display:inline-block;height:34px;margin-right:2px;padding:8px 16px;position:relative;text-align:center;white-space:nowrap;border:1px solid #d6d6d6}.gui-tab .gui-tab-menu .gui-tab-menu-item:nth-last-child(1){margin-right:0}.gui-tab .gui-tab-menu .gui-tab-menu-item svg{height:16px;width:16px}.gui-tab .gui-tab-menu .gui-tab-menu-item svg path{fill:#aaa}.gui-tab .gui-tab-menu .scroll-button{background:0 0;box-sizing:border-box;color:#ccc;cursor:pointer;font-weight:700;height:34px;padding:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-tab .gui-tab-menu .scroll-button:hover svg path{stroke:#464646}.gui-tab .gui-tab-item{display:none}.gui-tab .gui-active.gui-tab-menu-item{background:#fff;border-color:#d6d6d6 #d6d6d6 #fff;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;color:#2185d0}.gui-tab .gui-active.gui-tab-menu-item svg path{fill:#2185d0}.gui-tab .gui-active.gui-tab-item{display:block}", ".gui-material .gui-tab{font:14px Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-tab{color:#bdbdbd}.gui-dark .gui-tab .gui-tab-content{background:#424242;border-color:#616161}.gui-dark .gui-tab .gui-tab-menu-item{background:#616161;border-color:transparent}.gui-dark .gui-tab .gui-active.gui-tab-menu-item{background:#424242;border-color:#616161 #616161 transparent;color:#ce93d8}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHcEQ7SUFjd0MsOENBQWM7SUE0QnJELDRCQUFvQixRQUFtQixFQUM1QixpQkFBb0MsRUFDZixVQUFlO1FBRi9DLFlBR0MsaUJBQU8sU0FDUDtRQUptQixjQUFRLEdBQVIsUUFBUSxDQUFXO1FBQzVCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDZixnQkFBVSxHQUFWLFVBQVUsQ0FBSztRQVYvQyxlQUFTLEdBQUcsU0FBUyxDQUFDO1FBRWQsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFDakIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFFbEIsMkJBQXFCLEdBQUcsWUFBWSxDQUFDOztJQU10RCxDQUFDOzs7O0lBRUQsNENBQWU7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFD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QUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNMLGlCQUFpQixFQUFFLE1BQU07cUJBQ3pCOztpQkFDRDs7OztnQkF4QkEsU0FBUztnQkFQVCxpQkFBaUI7Z0RBOERiLE1BQU0sU0FBQyxXQUFXOzs7eUJBNUJyQixTQUFTLFNBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs2QkFHbEMsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7OEJBR3RDLFlBQVksU0FBQyxhQUFhO3VCQUcxQixLQUFLO3lCQUdMLEtBQUs7K0JBR0wsS0FBSzs7SUEwR1AseUJBQUM7Q0FBQSxBQXpJRCxDQWN3QyxjQUFjLEdBMkhyRDtTQTNIWSxrQkFBa0I7OztJQUU5QixvQ0FDbUI7O0lBRW5CLHdDQUN1Qjs7SUFFdkIseUNBQ21DOztJQUVuQyxrQ0FDaUM7O0lBRWpDLG9DQUNlOztJQUVmLDBDQUNzQjs7SUFFdEIsdUNBQXNCOzs7OztJQUV0QiwwQ0FBaUM7Ozs7O0lBQ2pDLDJDQUFrQzs7Ozs7SUFDbEMsMENBQW1DOzs7OztJQUVuQyxtREFBc0Q7Ozs7O0lBRTFDLHNDQUEyQjs7Ozs7SUFDcEMsK0NBQTRDOzs7OztJQUM1Qyx3Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0UExBVEZPUk1fSUQsXG5cdFF1ZXJ5TGlzdCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdDaGlsZHJlbixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9kaXJlY3Rpb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR3VpVGFiSXRlbSB9IGZyb20gJy4vZmFicmljLXRhYi1pdGVtJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXRhYicsXG5cdHRlbXBsYXRlVXJsOiAnLi90YWIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi90YWIubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy90YWIubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy90YWIuZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS10YWJdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljVGFiQ29tcG9uZW50IGV4dGVuZHMgRmFicmljUmVhY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRAVmlld0NoaWxkKCd0YWInLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0dGFiUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBWaWV3Q2hpbGQoJ3RhYkl0ZW0nLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0dGFiSXRlbVJlZjogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkcmVuKCd0YWJNZW51TGlzdCcpXG5cdHRhYk1lbnVMaXN0OiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cblx0QElucHV0KClcblx0bWVudTogQXJyYXk8c3RyaW5nIHwgR3VpVGFiSXRlbT47XG5cblx0QElucHV0KClcblx0YWN0aXZlOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0c2Nyb2xsQWN0aXZlOiBib29sZWFuO1xuXG5cdERpcmVjdGlvbiA9IERpcmVjdGlvbjtcblxuXHRwcml2YXRlIGxpc3RQb3NpdGlvbjogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBtZW51TGlzdFdpZHRoOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHJlYWRvbmx5IHNjcm9sbEFtb3VudCA9IDYwO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgQUNUSVZFX1RBQl9DTEFTU19OQU1FID0gJ2d1aS1hY3RpdmUnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnRvZ2dsZVRhYih0aGlzLmFjdGl2ZSk7XG5cdFx0dGhpcy5jYWxjdWxhdGVNZW51V2lkdGgoKTtcblx0XHR0aGlzLnNob3dNZW51QXJyb3dzKCk7XG5cdFx0dGhpcy5jaGVja0lmTWVudUZpdHNPblJlc2l6ZSgpO1xuXHR9XG5cblx0dG9nZ2xlVGFiKHRhYjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVBY3RpdmUoKTtcblx0XHR0aGlzLnNldEFjdGl2ZSh0YWIpO1xuXHR9XG5cblx0aXNTdmcoaXRlbTogc3RyaW5nIHwgR3VpVGFiSXRlbSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCc7XG5cdH1cblxuXHRnZXRUYWJOYW1lKGl0ZW06IHN0cmluZyB8IEd1aVRhYkl0ZW0pOiBzdHJpbmcge1xuXHRcdHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgPyBpdGVtLm5hbWUgOiBpdGVtO1xuXHR9XG5cblx0c2Nyb2xsVGFiTGlzdChzY3JvbGxSaWdodENsaWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRjb25zdCBsaXN0V2lkdGggPSB0aGlzLnRhYlJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWktdGFiLW1lbnUtbGlzdCcpLm9mZnNldFdpZHRoLFxuXHRcdFx0bWVudU92ZXJmbG93ID0gdGhpcy5tZW51TGlzdFdpZHRoIC0gbGlzdFdpZHRoO1xuXG5cdFx0aWYgKHNjcm9sbFJpZ2h0Q2xpY2tlZCAmJiBtZW51T3ZlcmZsb3cgPiB0aGlzLmxpc3RQb3NpdGlvbikge1xuXHRcdFx0dGhpcy5saXN0UG9zaXRpb24gKz0gdGhpcy5zY3JvbGxBbW91bnQ7XG5cdFx0fSBlbHNlIGlmICghc2Nyb2xsUmlnaHRDbGlja2VkICYmIHRoaXMubGlzdFBvc2l0aW9uID4gMCkge1xuXHRcdFx0dGhpcy5saXN0UG9zaXRpb24gLT0gdGhpcy5zY3JvbGxBbW91bnQ7XG5cdFx0fVxuXG5cdFx0dGhpcy50YWJSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArICdndWktdGFiLW1lbnUtbGlzdCcpLnNjcm9sbExlZnQgPSB0aGlzLmxpc3RQb3NpdGlvbjtcblx0fVxuXG5cdHByaXZhdGUgc2V0QWN0aXZlKHRhYjogc3RyaW5nIHwgR3VpVGFiSXRlbSk6IHZvaWQge1xuXHRcdGlmICh0eXBlb2YgdGFiID09PSAnb2JqZWN0Jykge1xuXHRcdFx0dGFiID0gdGFiLm5hbWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmF2TWVudVRhYkVsID0gdGhpcy50YWJSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YWI9XCInICsgdGFiICsgJ1wiXScpLFxuXHRcdFx0bmF2VGFiSXRlbUVsID0gdGhpcy50YWJJdGVtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFiPVwiJyArIHRhYiArICdcIl0nKTtcblxuXHRcdHRoaXMuYWRkQ2xhc3MobmF2TWVudVRhYkVsLCB0aGlzLkFDVElWRV9UQUJfQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy5hZGRDbGFzcyhuYXZUYWJJdGVtRWwsIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQWN0aXZlKCk6IHZvaWQge1xuXHRcdGNvbnN0IG5hdk1lbnVUYWJFbCA9IHRoaXMudGFiUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkFDVElWRV9UQUJfQ0xBU1NfTkFNRSksXG5cdFx0XHRuYXZUYWJJdGVtRWwgPSB0aGlzLnRhYkl0ZW1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMucmVtb3ZlQ2xhc3MobmF2TWVudVRhYkVsLCB0aGlzLkFDVElWRV9UQUJfQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy5yZW1vdmVDbGFzcyhuYXZUYWJJdGVtRWwsIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcpIHtcblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuYW1lKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGVsZW1lbnQ6IGFueSwgbmFtZTogc3RyaW5nKSB7XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgbmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0lmTWVudUZpdHNPblJlc2l6ZSgpOiB2b2lkIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXG5cdFx0XHRmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcblx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0LnN1YnNjcmliZSgoKSA9PiB0aGlzLnNob3dNZW51QXJyb3dzKCkpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlTWVudVdpZHRoKCk6IHZvaWQge1xuXHRcdHRoaXMubWVudUxpc3RXaWR0aCA9IDA7XG5cdFx0dGhpcy50YWJNZW51TGlzdFxuXHRcdFx0LmZvckVhY2goKGxpc3RJdGVtOiBFbGVtZW50UmVmKSA9PiB7XG5cdFx0XHRcdHRoaXMubWVudUxpc3RXaWR0aCArPSBsaXN0SXRlbS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHNob3dNZW51QXJyb3dzKCk6IHZvaWQge1xuXHRcdGNvbnN0IG1lbnVXaWR0aCA9IHRoaXMudGFiUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS10YWItbWVudScpLm9mZnNldFdpZHRoO1xuXG5cdFx0dGhpcy5zY3JvbGxBY3RpdmUgPSBtZW51V2lkdGggPCB0aGlzLm1lbnVMaXN0V2lkdGg7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxufVxuIl19