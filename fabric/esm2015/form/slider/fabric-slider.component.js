import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class FabricSliderComponent {
    constructor() {
        this.changed = new EventEmitter();
    }
    toggle(event) {
        event.stopPropagation();
        this.toggled = !this.toggled;
        this.changed.emit(this.toggled);
    }
}
FabricSliderComponent.ɵfac = function FabricSliderComponent_Factory(t) { return new (t || FabricSliderComponent)(); };
FabricSliderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricSliderComponent, selectors: [["gui-slider"]], inputs: { toggled: "toggled" }, outputs: { changed: "changed" }, decls: 2, vars: 2, consts: [[1, "gui-slider", 3, "click"], [1, "gui-slider-indicator"]], template: function FabricSliderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function FabricSliderComponent_Template_div_click_0_listener($event) { return ctx.toggle($event); });
        i0.ɵɵelement(1, "span", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("is-toggled", ctx.toggled);
    } }, styles: [".gui-slider{background:#cccccc;border-radius:4px;cursor:pointer;display:block;height:12px;position:relative;width:32px}.gui-slider .gui-slider-indicator{background:#2185d0;border-radius:50%;box-sizing:border-box;height:16px;overflow:hidden;position:absolute;top:-2px;-ms-transform:translateX(-5.33333px);transform:translate(-5.33333px);transition:all .2s ease-in-out;width:16px}.gui-slider .gui-slider-indicator.is-toggled{-ms-transform:translateX(calc(100% + 16px / 3));transform:translate(calc(100% + 16px / 3))}\n", ".gui-dark .gui-slider{background:#424242}.gui-dark .gui-slider .gui-slider-indicator{background:#ce93d8}\n", ".gui-material .gui-slider .gui-slider-indicator{background:#6200ee}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricSliderComponent, [{
        type: Component,
        args: [{
                selector: 'gui-slider',
                templateUrl: './fabric-slider.component.html',
                styleUrls: [
                    './fabric-slider.ngx.scss',
                    './themes/fabric-slider.dark.ngx.scss',
                    './themes/fabric-slider.material.ngx.scss'
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { toggled: [{
            type: Input
        }], changed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXNsaWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9zbGlkZXIvZmFicmljLXNsaWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9zbGlkZXIvZmFicmljLXNsaWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWFuSCxNQUFNLE9BQU8scUJBQXFCO0lBWGxDO1FBZ0JDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBTzdCO0lBTEEsTUFBTSxDQUFDLEtBQVk7UUFDbEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzswRkFYVyxxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ2JsQyw4QkFDcUI7UUFEaEIscUdBQVMsa0JBQWMsSUFBQztRQUU1QiwwQkFDdUM7UUFDeEMsaUJBQU07O1FBRkMsZUFBNEI7UUFBNUIseUNBQTRCOzt1RkRXdEIscUJBQXFCO2NBWGpDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFO29CQUNWLDBCQUEwQjtvQkFDMUIsc0NBQXNDO29CQUN0QywwQ0FBMEM7aUJBQzFDO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQztnQkFHQSxPQUFPO2tCQUROLEtBQUs7WUFJTixPQUFPO2tCQUROLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zbGlkZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLXNsaWRlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1zbGlkZXIubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtc2xpZGVyLmRhcmsubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtc2xpZGVyLm1hdGVyaWFsLm5neC5zY3NzJ1xuXHRdLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNTbGlkZXJDb21wb25lbnQge1xuXHRASW5wdXQoKVxuXHR0b2dnbGVkOiBib29sZWFuO1xuXG5cdEBPdXRwdXQoKVxuXHRjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHRvZ2dsZShldmVudDogRXZlbnQpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnRvZ2dsZWQgPSAhdGhpcy50b2dnbGVkO1xuXHRcdHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMudG9nZ2xlZCk7XG5cdH1cbn1cbiIsIjxkaXYgKGNsaWNrKT1cInRvZ2dsZSgkZXZlbnQpXCJcblx0IGNsYXNzPVwiZ3VpLXNsaWRlclwiPlxuXHQ8c3BhbiBbY2xhc3MuaXMtdG9nZ2xlZF09XCJ0b2dnbGVkXCJcblx0XHQgIGNsYXNzPVwiZ3VpLXNsaWRlci1pbmRpY2F0b3JcIj48L3NwYW4+XG48L2Rpdj5cbiJdfQ==