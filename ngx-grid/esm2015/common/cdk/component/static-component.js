import { Directive } from '@angular/core';
import { GuiComponent } from './gui-component';
import * as i0 from "@angular/core";
export class StaticComponent extends GuiComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef);
        this.changeDetectorRef = changeDetectorRef;
    }
    ngOnInit() {
        this.changeDetectorRef.detach();
    }
}
StaticComponent.ɵfac = function StaticComponent_Factory(t) { return new (t || StaticComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
StaticComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StaticComponent, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StaticComponent, [{
        type: Directive
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tbW9uL2Nkay9jb21wb25lbnQvc3RhdGljLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUkvQyxNQUFNLE9BQWdCLGVBQWdCLFNBQVEsWUFBWTtJQUV6RCxZQUFzQixVQUFzQixFQUNwQixpQkFBb0M7UUFDM0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBREssc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUU1RCxDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs4RUFUb0IsZUFBZTtrRUFBZixlQUFlO3VGQUFmLGVBQWU7Y0FEcEMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlDb21wb25lbnQgfSBmcm9tICcuL2d1aS1jb21wb25lbnQnO1xuXG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0YXRpY0NvbXBvbmVudCBleHRlbmRzIEd1aUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGFjaCgpO1xuXHR9XG5cbn1cbiJdfQ==