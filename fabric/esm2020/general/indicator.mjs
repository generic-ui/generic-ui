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
Indicator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: Indicator, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
Indicator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.2", type: Indicator, inputs: { primary: "primary", secondary: "secondary", outline: "outline" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: Indicator, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { primary: [{
                type: Input
            }], secondary: [{
                type: Input
            }], outline: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2dlbmVyYWwvaW5kaWNhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQzs7QUFHdkYsTUFBTSxPQUFnQixTQUFTO0lBaUI5QixZQUFnQyxVQUFzQixFQUNyQyxRQUFtQjtRQURKLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVRwQyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBR3pCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUl6QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBRWpDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUM1QztpQkFBTTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Q7UUFFRCxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDOUM7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUNqRDtTQUNEO1FBRUQsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDL0M7U0FDRDtJQUNGLENBQUM7SUFFUyxRQUFRLENBQUMsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVTLFdBQVcsQ0FBQyxTQUFpQjtRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyRSxDQUFDOztBQXBEdUIsNEJBQWtCLEdBQUcsYUFBYSxDQUFDO0FBRW5DLDhCQUFvQixHQUFHLGVBQWUsQ0FBQztBQUV2Qyw0QkFBa0IsR0FBRyxhQUFhLENBQUM7c0dBTnRDLFNBQVM7MEZBQVQsU0FBUzsyRkFBVCxTQUFTO2tCQUQ5QixTQUFTO3lIQVVULE9BQU87c0JBRE4sS0FBSztnQkFJTixTQUFTO3NCQURSLEtBQUs7Z0JBSU4sT0FBTztzQkFETixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluZGljYXRvciB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUFJJTUFSWV9DTEFTU19OQU1FID0gJ2d1aS1wcmltYXJ5JztcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBTRUNPTkRBUllfQ0xBU1NfTkFNRSA9ICdndWktc2Vjb25kYXJ5JztcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBPVVRMSU5FX0NMQVNTX05BTUUgPSAnZ3VpLW91dGxpbmUnO1xuXG5cdEBJbnB1dCgpXG5cdHByaW1hcnk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRzZWNvbmRhcnk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRvdXRsaW5lOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKGNoYW5nZXNbJ3ByaW1hcnknXSkge1xuXHRcdFx0aWYgKHRoaXMucHJpbWFyeSkge1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKEluZGljYXRvci5QUklNQVJZX0NMQVNTX05BTUUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhJbmRpY2F0b3IuUFJJTUFSWV9DTEFTU19OQU1FKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlc1snc2Vjb25kYXJ5J10pIHtcblx0XHRcdGlmICh0aGlzLnNlY29uZGFyeSkge1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKEluZGljYXRvci5TRUNPTkRBUllfQ0xBU1NfTkFNRSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKEluZGljYXRvci5TRUNPTkRBUllfQ0xBU1NfTkFNRSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXNbJ291dGxpbmUnXSkge1xuXHRcdFx0aWYgKHRoaXMub3V0bGluZSkge1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKEluZGljYXRvci5PVVRMSU5FX0NMQVNTX05BTUUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhJbmRpY2F0b3IuT1VUTElORV9DTEFTU19OQU1FKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWRkQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHJlbW92ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxufVxuIl19