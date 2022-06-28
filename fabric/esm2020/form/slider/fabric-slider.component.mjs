import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class FabricSliderComponent {
    constructor() {
        this.toggled = false;
        this.changed = new EventEmitter();
    }
    toggle(event) {
        event.stopPropagation();
        this.toggled = !this.toggled;
        this.changed.emit(this.toggled);
    }
}
FabricSliderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricSliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricSliderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: FabricSliderComponent, selector: "gui-slider", inputs: { toggled: "toggled" }, outputs: { changed: "changed" }, ngImport: i0, template: "<div (click)=\"toggle($event)\"\n\t class=\"gui-slider\">\n\t<span [class.is-toggled]=\"toggled\"\n\t\t  class=\"gui-slider-indicator\"></span>\n</div>\n", styles: [".gui-slider{background:#cccccc;border-radius:4px;cursor:pointer;display:block;height:12px;position:relative;width:32px}.gui-slider .gui-slider-indicator{background:#2185d0;border-radius:50%;box-sizing:border-box;height:16px;overflow:hidden;position:absolute;top:-2px;-ms-transform:translateX(-5.3333333333px);transform:translate(-5.3333333333px);transition:all .2s ease-in-out;width:16px}.gui-slider .gui-slider-indicator.is-toggled{-ms-transform:translateX(calc(100% + 16px / 3));transform:translate(calc(100% + 16px / 3))}\n", ".gui-dark .gui-slider{background:#424242}.gui-dark .gui-slider .gui-slider-indicator{background:#ce93d8}\n", ".gui-material .gui-slider .gui-slider-indicator{background:#6200ee}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricSliderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-slider', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div (click)=\"toggle($event)\"\n\t class=\"gui-slider\">\n\t<span [class.is-toggled]=\"toggled\"\n\t\t  class=\"gui-slider-indicator\"></span>\n</div>\n", styles: [".gui-slider{background:#cccccc;border-radius:4px;cursor:pointer;display:block;height:12px;position:relative;width:32px}.gui-slider .gui-slider-indicator{background:#2185d0;border-radius:50%;box-sizing:border-box;height:16px;overflow:hidden;position:absolute;top:-2px;-ms-transform:translateX(-5.3333333333px);transform:translate(-5.3333333333px);transition:all .2s ease-in-out;width:16px}.gui-slider .gui-slider-indicator.is-toggled{-ms-transform:translateX(calc(100% + 16px / 3));transform:translate(calc(100% + 16px / 3))}\n", ".gui-dark .gui-slider{background:#424242}.gui-dark .gui-slider .gui-slider-indicator{background:#ce93d8}\n", ".gui-material .gui-slider .gui-slider-indicator{background:#6200ee}\n"] }]
        }], propDecorators: { toggled: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXNsaWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9zbGlkZXIvZmFicmljLXNsaWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9zbGlkZXIvZmFicmljLXNsaWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWFuSCxNQUFNLE9BQU8scUJBQXFCO0lBWGxDO1FBY0MsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUdoQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQU90QztJQUxBLE1BQU0sQ0FBQyxLQUFZO1FBQ2xCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7a0hBWlcscUJBQXFCO3NHQUFyQixxQkFBcUIsbUhDYmxDLDJKQUtBOzJGRFFhLHFCQUFxQjtrQkFYakMsU0FBUzsrQkFDQyxZQUFZLGlCQU9QLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07OEJBSy9DLE9BQU87c0JBRE4sS0FBSztnQkFJRyxPQUFPO3NCQURmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zbGlkZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLXNsaWRlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1zbGlkZXIubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtc2xpZGVyLmRhcmsubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtc2xpZGVyLm1hdGVyaWFsLm5neC5zY3NzJ1xuXHRdLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNTbGlkZXJDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRAT3V0cHV0KClcblx0cmVhZG9ubHkgY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHR0b2dnbGUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy50b2dnbGVkID0gIXRoaXMudG9nZ2xlZDtcblx0XHR0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLnRvZ2dsZWQpO1xuXHR9XG59XG4iLCI8ZGl2IChjbGljayk9XCJ0b2dnbGUoJGV2ZW50KVwiXG5cdCBjbGFzcz1cImd1aS1zbGlkZXJcIj5cblx0PHNwYW4gW2NsYXNzLmlzLXRvZ2dsZWRdPVwidG9nZ2xlZFwiXG5cdFx0ICBjbGFzcz1cImd1aS1zbGlkZXItaW5kaWNhdG9yXCI+PC9zcGFuPlxuPC9kaXY+XG4iXX0=