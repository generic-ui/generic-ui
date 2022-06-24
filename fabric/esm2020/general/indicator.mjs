import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class Indicator {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.primary = false;
        this.secondary = false;
        this.outline = false;
    }
    ngOnChanges(changes) {
        if (changes['primary']) {
            if (this.primary) {
                this.addClass(Indicator.PRIMARY_CLASS_NAME);
            }
            else {
                this.removeClass(Indicator.PRIMARY_CLASS_NAME);
            }
        }
        if (changes['secondary']) {
            if (this.secondary) {
                this.addClass(Indicator.SECONDARY_CLASS_NAME);
            }
            else {
                this.removeClass(Indicator.SECONDARY_CLASS_NAME);
            }
        }
        if (changes['outline']) {
            if (this.outline) {
                this.addClass(Indicator.OUTLINE_CLASS_NAME);
            }
            else {
                this.removeClass(Indicator.OUTLINE_CLASS_NAME);
            }
        }
    }
    addClass(className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    }
    removeClass(className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    }
}
Indicator.PRIMARY_CLASS_NAME = 'gui-primary';
Indicator.SECONDARY_CLASS_NAME = 'gui-secondary';
Indicator.OUTLINE_CLASS_NAME = 'gui-outline';
Indicator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: Indicator, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
Indicator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: Indicator, inputs: { primary: "primary", secondary: "secondary", outline: "outline" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: Indicator, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { primary: [{
                type: Input
            }], secondary: [{
                type: Input
            }], outline: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2dlbmVyYWwvaW5kaWNhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQzs7QUFHdkYsTUFBTSxPQUFnQixTQUFTO0lBaUI5QixZQUFnQyxVQUFzQixFQUNyQyxRQUFtQjtRQURKLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVRwQyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBR3pCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUl6QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBRWpDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUM1QztpQkFBTTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Q7UUFFRCxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDOUM7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUNqRDtTQUNEO1FBRUQsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDL0M7U0FDRDtJQUNGLENBQUM7SUFFUyxRQUFRLENBQUMsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVTLFdBQVcsQ0FBQyxTQUFpQjtRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyRSxDQUFDOztBQXBEdUIsNEJBQWtCLEdBQUcsYUFBYyxDQUFBO0FBRW5DLDhCQUFvQixHQUFHLGVBQWdCLENBQUE7QUFFdkMsNEJBQWtCLEdBQUcsYUFBYyxDQUFBO3VHQU50QyxTQUFTOzJGQUFULFNBQVM7NEZBQVQsU0FBUztrQkFEOUIsU0FBUzt5SEFVVCxPQUFPO3NCQUROLEtBQUs7Z0JBSU4sU0FBUztzQkFEUixLQUFLO2dCQUlOLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbmRpY2F0b3Ige1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFBSSU1BUllfQ0xBU1NfTkFNRSA9ICdndWktcHJpbWFyeSc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU0VDT05EQVJZX0NMQVNTX05BTUUgPSAnZ3VpLXNlY29uZGFyeSc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgT1VUTElORV9DTEFTU19OQU1FID0gJ2d1aS1vdXRsaW5lJztcblxuXHRASW5wdXQoKVxuXHRwcmltYXJ5OiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0c2Vjb25kYXJ5OiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0b3V0bGluZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzWydwcmltYXJ5J10pIHtcblx0XHRcdGlmICh0aGlzLnByaW1hcnkpIHtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyhJbmRpY2F0b3IuUFJJTUFSWV9DTEFTU19OQU1FKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoSW5kaWNhdG9yLlBSSU1BUllfQ0xBU1NfTkFNRSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXNbJ3NlY29uZGFyeSddKSB7XG5cdFx0XHRpZiAodGhpcy5zZWNvbmRhcnkpIHtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyhJbmRpY2F0b3IuU0VDT05EQVJZX0NMQVNTX05BTUUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhJbmRpY2F0b3IuU0VDT05EQVJZX0NMQVNTX05BTUUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzWydvdXRsaW5lJ10pIHtcblx0XHRcdGlmICh0aGlzLm91dGxpbmUpIHtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyhJbmRpY2F0b3IuT1VUTElORV9DTEFTU19OQU1FKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoSW5kaWNhdG9yLk9VVExJTkVfQ0xBU1NfTkFNRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGFkZENsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxuXG5cdHByb3RlY3RlZCByZW1vdmVDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cbn1cbiJdfQ==