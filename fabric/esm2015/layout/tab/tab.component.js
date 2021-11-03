import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, PLATFORM_ID, Renderer2, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Direction } from '../../common/icons/arrow-icon/direction';
import { fromEvent } from 'rxjs';
import { FabricReactive } from '../../common/fabric-reactive';
import { isPlatformBrowser } from '@angular/common';
export class FabricTabComponent extends FabricReactive {
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
    ngAfterViewInit() {
        this.toggleTab(this.active);
        this.calculateMenuWidth();
        this.showMenuArrows();
        this.checkIfMenuFitsOnResize();
    }
    toggleTab(tab) {
        this.removeActive();
        this.setActive(tab);
    }
    isSvg(item) {
        return typeof item === 'object';
    }
    getTabName(item) {
        return typeof item === 'object' ? item.name : item;
    }
    scrollTabList(scrollRightClicked) {
        const listWidth = this.tabRef.nativeElement.querySelector('.gui-tab-menu-list').offsetWidth, menuOverflow = this.menuListWidth - listWidth;
        if (scrollRightClicked && menuOverflow > this.listPosition) {
            this.listPosition += this.scrollAmount;
        }
        else if (!scrollRightClicked && this.listPosition > 0) {
            this.listPosition -= this.scrollAmount;
        }
        this.tabRef.nativeElement.querySelector('.' + 'gui-tab-menu-list').scrollLeft = this.listPosition;
    }
    setActive(tab) {
        if (typeof tab === 'object') {
            tab = tab.name;
        }
        const navMenuTabEl = this.tabRef.nativeElement.querySelector('[data-tab="' + tab + '"]'), navTabItemEl = this.tabItemRef.nativeElement.querySelector('[data-tab="' + tab + '"]');
        this.addClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
        this.addClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
    }
    removeActive() {
        const navMenuTabEl = this.tabRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME), navTabItemEl = this.tabItemRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME);
        this.removeClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
        this.removeClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
    }
    addClass(element, name) {
        if (element) {
            this.renderer.addClass(element, name);
        }
    }
    removeClass(element, name) {
        if (element) {
            this.renderer.removeClass(element, name);
        }
    }
    checkIfMenuFitsOnResize() {
        if (isPlatformBrowser(this.platformId)) {
            fromEvent(window, 'resize')
                .pipe(this.takeUntil())
                .subscribe(() => this.showMenuArrows());
        }
    }
    calculateMenuWidth() {
        this.menuListWidth = 0;
        this.tabMenuList
            .forEach((listItem) => {
            this.menuListWidth += listItem.nativeElement.offsetWidth;
        });
    }
    showMenuArrows() {
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
                styles: [".gui-tab{font:14px Arial}.gui-tab .gui-tab-content{background:#fff;border-color:#d6d6d6;border-radius:0 0 4px 4px;border-style:solid;border-width:1px;padding:12px}.gui-tab .gui-tab-menu{display:-ms-flexbox;display:flex;margin-bottom:-1px}.gui-tab .gui-tab-menu .gui-tab-menu-list{border-radius:4px 4px 0 0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden}.gui-tab .gui-tab-menu .gui-tab-menu-item{background:#fafafa;border-color:#d6d6d6;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;box-sizing:border-box;cursor:pointer;display:inline-block;height:34px;margin-right:2px;padding:8px 16px;position:relative;text-align:center;white-space:nowrap}.gui-tab .gui-tab-menu .gui-tab-menu-item:nth-last-child(1){margin-right:0}.gui-tab .gui-tab-menu .gui-tab-menu-item svg{height:16px;width:16px}.gui-tab .gui-tab-menu .gui-tab-menu-item svg path{fill:#aaa}.gui-tab .gui-tab-menu .scroll-button{background:transparent;box-sizing:border-box;color:#ccc;cursor:pointer;font-weight:bold;height:34px;padding:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-tab .gui-tab-menu .scroll-button:hover svg path{stroke:#464646}.gui-tab .gui-tab-item{display:none}.gui-tab .gui-active.gui-tab-menu-item{background:#fff;border-color:#d6d6d6 #d6d6d6 #fff #d6d6d6;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;color:#2185d0}.gui-tab .gui-active.gui-tab-menu-item svg path{fill:#2185d0}.gui-tab .gui-active.gui-tab-item{display:block}\n", ".gui-material .gui-tab{font:14px Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-tab{color:#bdbdbd}.gui-dark .gui-tab .gui-tab-content{background:#424242;border-color:#616161}.gui-dark .gui-tab .gui-tab-menu-item{background:#616161;border-color:transparent}.gui-dark .gui-tab .gui-active.gui-tab-menu-item{background:#424242;border-color:#616161 #616161 transparent #616161;color:#ce93d8}\n"]
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9sYXlvdXQvdGFiL3RhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUVULE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUVYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFpQnBELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxjQUFjO0lBNEJyRCxZQUFvQixRQUFtQixFQUM1QixpQkFBb0MsRUFDZixVQUFlO1FBQzlDLEtBQUssRUFBRSxDQUFDO1FBSFcsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2YsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQVYvQyxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBRWQsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFFbEIsMEJBQXFCLEdBQUcsWUFBWSxDQUFDO0lBTXRELENBQUM7SUFFRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIs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RUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUJBR2xDLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzBCQUd0QyxZQUFZLFNBQUMsYUFBYTttQkFHMUIsS0FBSztxQkFHTCxLQUFLOzJCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0UExBVEZPUk1fSUQsXG5cdFF1ZXJ5TGlzdCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdDaGlsZHJlbixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9kaXJlY3Rpb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR3VpVGFiSXRlbSB9IGZyb20gJy4vZmFicmljLXRhYi1pdGVtJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXRhYicsXG5cdHRlbXBsYXRlVXJsOiAnLi90YWIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi90YWIubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy90YWIubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy90YWIuZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS10YWJdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljVGFiQ29tcG9uZW50IGV4dGVuZHMgRmFicmljUmVhY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRAVmlld0NoaWxkKCd0YWInLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0dGFiUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBWaWV3Q2hpbGQoJ3RhYkl0ZW0nLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0dGFiSXRlbVJlZjogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkcmVuKCd0YWJNZW51TGlzdCcpXG5cdHRhYk1lbnVMaXN0OiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cblx0QElucHV0KClcblx0bWVudTogQXJyYXk8c3RyaW5nIHwgR3VpVGFiSXRlbT47XG5cblx0QElucHV0KClcblx0YWN0aXZlOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0c2Nyb2xsQWN0aXZlOiBib29sZWFuO1xuXG5cdERpcmVjdGlvbiA9IERpcmVjdGlvbjtcblxuXHRwcml2YXRlIGxpc3RQb3NpdGlvbjogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBtZW51TGlzdFdpZHRoOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHJlYWRvbmx5IHNjcm9sbEFtb3VudCA9IDYwO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgQUNUSVZFX1RBQl9DTEFTU19OQU1FID0gJ2d1aS1hY3RpdmUnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnRvZ2dsZVRhYih0aGlzLmFjdGl2ZSk7XG5cdFx0dGhpcy5jYWxjdWxhdGVNZW51V2lkdGgoKTtcblx0XHR0aGlzLnNob3dNZW51QXJyb3dzKCk7XG5cdFx0dGhpcy5jaGVja0lmTWVudUZpdHNPblJlc2l6ZSgpO1xuXHR9XG5cblx0dG9nZ2xlVGFiKHRhYjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVBY3RpdmUoKTtcblx0XHR0aGlzLnNldEFjdGl2ZSh0YWIpO1xuXHR9XG5cblx0aXNTdmcoaXRlbTogc3RyaW5nIHwgR3VpVGFiSXRlbSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCc7XG5cdH1cblxuXHRnZXRUYWJOYW1lKGl0ZW06IHN0cmluZyB8IEd1aVRhYkl0ZW0pOiBzdHJpbmcge1xuXHRcdHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgPyBpdGVtLm5hbWUgOiBpdGVtO1xuXHR9XG5cblx0c2Nyb2xsVGFiTGlzdChzY3JvbGxSaWdodENsaWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRjb25zdCBsaXN0V2lkdGggPSB0aGlzLnRhYlJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWktdGFiLW1lbnUtbGlzdCcpLm9mZnNldFdpZHRoLFxuXHRcdFx0bWVudU92ZXJmbG93ID0gdGhpcy5tZW51TGlzdFdpZHRoIC0gbGlzdFdpZHRoO1xuXG5cdFx0aWYgKHNjcm9sbFJpZ2h0Q2xpY2tlZCAmJiBtZW51T3ZlcmZsb3cgPiB0aGlzLmxpc3RQb3NpdGlvbikge1xuXHRcdFx0dGhpcy5saXN0UG9zaXRpb24gKz0gdGhpcy5zY3JvbGxBbW91bnQ7XG5cdFx0fSBlbHNlIGlmICghc2Nyb2xsUmlnaHRDbGlja2VkICYmIHRoaXMubGlzdFBvc2l0aW9uID4gMCkge1xuXHRcdFx0dGhpcy5saXN0UG9zaXRpb24gLT0gdGhpcy5zY3JvbGxBbW91bnQ7XG5cdFx0fVxuXG5cdFx0dGhpcy50YWJSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArICdndWktdGFiLW1lbnUtbGlzdCcpLnNjcm9sbExlZnQgPSB0aGlzLmxpc3RQb3NpdGlvbjtcblx0fVxuXG5cdHByaXZhdGUgc2V0QWN0aXZlKHRhYjogc3RyaW5nIHwgR3VpVGFiSXRlbSk6IHZvaWQge1xuXHRcdGlmICh0eXBlb2YgdGFiID09PSAnb2JqZWN0Jykge1xuXHRcdFx0dGFiID0gdGFiLm5hbWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmF2TWVudVRhYkVsID0gdGhpcy50YWJSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YWI9XCInICsgdGFiICsgJ1wiXScpLFxuXHRcdFx0bmF2VGFiSXRlbUVsID0gdGhpcy50YWJJdGVtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFiPVwiJyArIHRhYiArICdcIl0nKTtcblxuXHRcdHRoaXMuYWRkQ2xhc3MobmF2TWVudVRhYkVsLCB0aGlzLkFDVElWRV9UQUJfQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy5hZGRDbGFzcyhuYXZUYWJJdGVtRWwsIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQWN0aXZlKCk6IHZvaWQge1xuXHRcdGNvbnN0IG5hdk1lbnVUYWJFbCA9IHRoaXMudGFiUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkFDVElWRV9UQUJfQ0xBU1NfTkFNRSksXG5cdFx0XHRuYXZUYWJJdGVtRWwgPSB0aGlzLnRhYkl0ZW1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMucmVtb3ZlQ2xhc3MobmF2TWVudVRhYkVsLCB0aGlzLkFDVElWRV9UQUJfQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy5yZW1vdmVDbGFzcyhuYXZUYWJJdGVtRWwsIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcpIHtcblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuYW1lKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGVsZW1lbnQ6IGFueSwgbmFtZTogc3RyaW5nKSB7XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgbmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0lmTWVudUZpdHNPblJlc2l6ZSgpOiB2b2lkIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXG5cdFx0XHRmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcblx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0LnN1YnNjcmliZSgoKSA9PiB0aGlzLnNob3dNZW51QXJyb3dzKCkpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlTWVudVdpZHRoKCk6IHZvaWQge1xuXHRcdHRoaXMubWVudUxpc3RXaWR0aCA9IDA7XG5cdFx0dGhpcy50YWJNZW51TGlzdFxuXHRcdFx0LmZvckVhY2goKGxpc3RJdGVtOiBFbGVtZW50UmVmKSA9PiB7XG5cdFx0XHRcdHRoaXMubWVudUxpc3RXaWR0aCArPSBsaXN0SXRlbS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHNob3dNZW51QXJyb3dzKCk6IHZvaWQge1xuXHRcdGNvbnN0IG1lbnVXaWR0aCA9IHRoaXMudGFiUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS10YWItbWVudScpLm9mZnNldFdpZHRoO1xuXG5cdFx0dGhpcy5zY3JvbGxBY3RpdmUgPSBtZW51V2lkdGggPCB0aGlzLm1lbnVMaXN0V2lkdGg7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxufVxuIl19