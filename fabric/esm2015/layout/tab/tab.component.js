/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, QueryList, Renderer2, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
export class FabricTabComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.scrollActive = false;
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
    calculateMenuWidth() {
        if (this.scrollActive) {
            this.tabMenuList
                .forEach((/**
             * @param {?} listItem
             * @return {?}
             */
            (listItem) => this.menuListWidth += listItem.nativeElement.offsetWidth));
        }
    }
}
FabricTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-tab',
                template: "<div #tab>\n\n\t<div class=\"gui-tab-menu\">\n\n\t\t<div (click)=\"scrollTabList(false)\"\n\t\t\t *ngIf=\"scrollActive\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<\n\t\t</div>\n\n\t\t<div class=\"gui-tab-menu-list\">\n\t\t\t<div #tabMenuList\n\t\t\t\t (click)=\"toggleTab(tab)\"\n\t\t\t\t *ngFor=\"let tab of menu\"\n\t\t\t\t [attr.data-tab]=\"tab\"\n\t\t\t\t class=\"gui-tab-menu-item\">\n\t\t\t\t{{tab}}\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div (click)=\"scrollTabList(true)\"\n\t\t\t *ngIf=\"scrollActive\"\n\t\t\t class=\"scroll-button\">\n\t\t\t>\n\t\t</div>\n\n\t</div>\n\n\t<div #tabitem\n\t\t class=\"gui-tab-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-tab]': 'true'
                },
                styles: [".gui-tab{font:14px Arial}.gui-tab .gui-tab-content{background:#fff;border-radius:0 0 4px 4px;padding:12px;border:1px solid #d6d6d6}.gui-tab .gui-tab-menu{display:-ms-flexbox;display:flex;-ms-transform:translateY(1px);transform:translateY(1px)}.gui-tab .gui-tab-menu .gui-tab-menu-list{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden}.gui-tab .gui-tab-menu .gui-tab-menu-item{position:relative;cursor:pointer;display:inline-block;padding:8px 16px;text-align:center;border:1px solid transparent}.gui-tab .gui-tab-menu .scroll-button{color:#ccc;background:0 0;font-weight:700;padding:8px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-tab .gui-tab-item{display:none}.gui-tab .gui-active.gui-tab-menu-item{background:#fff;border-color:#d6d6d6 #d6d6d6 #fff;border-style:solid;border-width:1px;border-radius:4px 4px 0 0}.gui-tab .gui-active.gui-tab-item{display:block}", ".gui-material .gui-tab{font:14px Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-tab{color:#bdbdbd}.gui-dark .gui-tab .gui-tab-content{background:#424242;border-color:#616161}.gui-dark .gui-tab .gui-tab-menu-item{border-color:transparent}.gui-dark .gui-tab .gui-active.gui-tab-menu-item{background:#424242;border-color:#616161 #616161 transparent}"]
            }] }
];
/** @nocollapse */
FabricTabComponent.ctorParameters = () => [
    { type: Renderer2 }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBZ0J2QixNQUFNLE9BQU8sa0JBQWtCOzs7O0lBMEI5QixZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBUnZDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBRXRCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLDBCQUFxQixHQUFHLFlBQVksQ0FBQztJQUd0RCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsa0JBQTJCOztZQUVwQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUMsV0FBVzs7WUFDeEYsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUztRQUU5QyxJQUFJLGtCQUFrQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzNELElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN2QzthQUFNLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDdkM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLG1CQUFtQixDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDbkcsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLEdBQVc7O2NBRXRCLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7O2NBQ3ZGLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFFdkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFTyxZQUFZOztjQUViLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQzs7Y0FDN0YsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBRTdGLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7Ozs7SUFFTyxRQUFRLENBQUMsT0FBWSxFQUFFLElBQVk7UUFDMUMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEM7SUFDRixDQUFDOzs7Ozs7O0lBRU8sV0FBVyxDQUFDLE9BQVksRUFBRSxJQUFZO1FBQzdDLElBQUksT0FBTyxFQUFFO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3pDO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxrQkFBa0I7UUFFekIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxXQUFXO2lCQUNkLE9BQU87Ozs7WUFDUCxDQUFDLFFBQW9CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQ2xGLENBQUM7U0FDSDtJQUNGLENBQUM7OztZQXpHRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLDhxQkFBaUM7Z0JBTWpDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNMLGlCQUFpQixFQUFFLE1BQU07aUJBQ3pCOzthQUNEOzs7O1lBbkJBLFNBQVM7OztxQkFzQlIsU0FBUyxTQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUJBR2xDLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzBCQUd0QyxZQUFZLFNBQUMsYUFBYTttQkFHMUIsS0FBSztxQkFHTCxLQUFLOzJCQUdMLEtBQUs7Ozs7SUFmTixvQ0FDbUI7O0lBRW5CLHdDQUN1Qjs7SUFFdkIseUNBQ21DOztJQUVuQyxrQ0FDb0I7O0lBRXBCLG9DQUNlOztJQUVmLDBDQUM4Qjs7Ozs7SUFFOUIsMENBQWlDOzs7OztJQUNqQywyQ0FBa0M7Ozs7O0lBQ2xDLDBDQUFtQzs7Ozs7SUFFbkMsbURBQXNEOzs7OztJQUUxQyxzQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbnB1dCxcblx0UXVlcnlMaXN0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0NoaWxkcmVuLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXRhYicsXG5cdHRlbXBsYXRlVXJsOiBgdGFiLmNvbXBvbmVudC5odG1sYCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vdGFiLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvdGFiLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvdGFiLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktdGFiXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1RhYkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ3RhYicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHR0YWJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QFZpZXdDaGlsZCgndGFiaXRlbScsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHR0YWJJdGVtUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBWaWV3Q2hpbGRyZW4oJ3RhYk1lbnVMaXN0Jylcblx0dGFiTWVudUxpc3Q6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuXHRASW5wdXQoKVxuXHRtZW51OiBBcnJheTxzdHJpbmc+O1xuXG5cdEBJbnB1dCgpXG5cdGFjdGl2ZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNjcm9sbEFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgbGlzdFBvc2l0aW9uOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIG1lbnVMaXN0V2lkdGg6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgcmVhZG9ubHkgc2Nyb2xsQW1vdW50ID0gNjA7XG5cblx0cHJpdmF0ZSByZWFkb25seSBBQ1RJVkVfVEFCX0NMQVNTX05BTUUgPSAnZ3VpLWFjdGl2ZSc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy50b2dnbGVUYWIodGhpcy5hY3RpdmUpO1xuXHRcdHRoaXMuY2FsY3VsYXRlTWVudVdpZHRoKCk7XG5cdH1cblxuXHR0b2dnbGVUYWIodGFiOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZUFjdGl2ZSgpO1xuXHRcdHRoaXMuc2V0QWN0aXZlKHRhYik7XG5cdH1cblxuXHRzY3JvbGxUYWJMaXN0KHNjcm9sbFJpZ2h0Q2xpY2tlZDogYm9vbGVhbik6IHZvaWQge1xuXG5cdFx0bGV0IGxpc3RXaWR0aCA9IHRoaXMudGFiUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS10YWItbWVudS1saXN0Jykub2Zmc2V0V2lkdGgsXG5cdFx0XHRtZW51T3ZlcmZsb3cgPSB0aGlzLm1lbnVMaXN0V2lkdGggLSBsaXN0V2lkdGg7XG5cblx0XHRpZiAoc2Nyb2xsUmlnaHRDbGlja2VkICYmIG1lbnVPdmVyZmxvdyA+IHRoaXMubGlzdFBvc2l0aW9uKSB7XG5cdFx0XHR0aGlzLmxpc3RQb3NpdGlvbiArPSB0aGlzLnNjcm9sbEFtb3VudDtcblx0XHR9IGVsc2UgaWYgKCFzY3JvbGxSaWdodENsaWNrZWQgJiYgdGhpcy5saXN0UG9zaXRpb24gPiAwKSB7XG5cdFx0XHR0aGlzLmxpc3RQb3NpdGlvbiAtPSB0aGlzLnNjcm9sbEFtb3VudDtcblx0XHR9XG5cblx0XHR0aGlzLnRhYlJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgJ2d1aS10YWItbWVudS1saXN0Jykuc2Nyb2xsTGVmdCA9IHRoaXMubGlzdFBvc2l0aW9uO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRBY3RpdmUodGFiOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGNvbnN0IG5hdk1lbnVUYWJFbCA9IHRoaXMudGFiUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFiPVwiJyArIHRhYiArICdcIl0nKSxcblx0XHRcdG5hdlRhYkl0ZW1FbCA9IHRoaXMudGFiSXRlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhYj1cIicgKyB0YWIgKyAnXCJdJyk7XG5cblx0XHR0aGlzLmFkZENsYXNzKG5hdk1lbnVUYWJFbCwgdGhpcy5BQ1RJVkVfVEFCX0NMQVNTX05BTUUpO1xuXHRcdHRoaXMuYWRkQ2xhc3MobmF2VGFiSXRlbUVsLCB0aGlzLkFDVElWRV9UQUJfQ0xBU1NfTkFNRSk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUFjdGl2ZSgpOiB2b2lkIHtcblxuXHRcdGNvbnN0IG5hdk1lbnVUYWJFbCA9IHRoaXMudGFiUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkFDVElWRV9UQUJfQ0xBU1NfTkFNRSksXG5cdFx0XHRuYXZUYWJJdGVtRWwgPSB0aGlzLnRhYkl0ZW1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMucmVtb3ZlQ2xhc3MobmF2TWVudVRhYkVsLCB0aGlzLkFDVElWRV9UQUJfQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy5yZW1vdmVDbGFzcyhuYXZUYWJJdGVtRWwsIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcpIHtcblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuYW1lKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGVsZW1lbnQ6IGFueSwgbmFtZTogc3RyaW5nKSB7XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgbmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVNZW51V2lkdGgoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5zY3JvbGxBY3RpdmUpIHtcblx0XHRcdHRoaXMudGFiTWVudUxpc3Rcblx0XHRcdFx0LmZvckVhY2goXG5cdFx0XHRcdFx0KGxpc3RJdGVtOiBFbGVtZW50UmVmKSA9PiB0aGlzLm1lbnVMaXN0V2lkdGggKz0gbGlzdEl0ZW0ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aFxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=