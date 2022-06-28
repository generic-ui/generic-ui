import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AbstractSpinner {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.width = 5;
        this.diameter = 90;
        this.primary = false;
        this.secondary = false;
        this.r = 0;
        this.circumference = 0;
        this.croppedCircle = 0;
        this.circleSize = 0;
    }
    ngOnChanges(changes) {
        this.calculateCircle();
        if (changes['primary']) {
            if (this.primary) {
                this.addClass('gui-primary');
            }
            else {
                this.removeClass('gui-primary');
            }
        }
        if (changes['secondary']) {
            if (this.secondary) {
                this.addClass('gui-secondary');
            }
            else {
                this.removeClass('gui-secondary');
            }
        }
    }
    ngOnInit() {
        this.calculateCircle();
    }
    calculateCircle() {
        this.circumference = this.calculateCircumference(this.diameter);
        this.r = this.calculateR(this.diameter);
        this.croppedCircle = this.calculateDashes(this.circumference);
        this.circleSize = this.calculateSize(this.diameter, this.width);
    }
    calculateCircumference(diameter) {
        return diameter * Math.PI;
    }
    calculateR(diameter) {
        return diameter / 2;
    }
    calculateDashes(circumference) {
        return circumference * 0.25;
    }
    calculateSize(diameter, width) {
        return diameter + width;
    }
    addClass(className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    }
    removeClass(className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    }
}
AbstractSpinner.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: AbstractSpinner, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
AbstractSpinner.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: AbstractSpinner, inputs: { width: "width", diameter: "diameter", primary: "primary", secondary: "secondary" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: AbstractSpinner, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { width: [{
                type: Input
            }], diameter: [{
                type: Input
            }], primary: [{
                type: Input
            }], secondary: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9nZW5lcmFsL3NwaW5uZXJzL2Fic3RyYWN0LXNwaW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDOztBQUcxRyxNQUFNLE9BQWdCLGVBQWU7SUFzQnBDLFlBQWdDLFVBQXNCLEVBQ3JDLFFBQW1CO1FBREosZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBcEJwQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFHdEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUd6QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFFZCxrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUUxQixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUUxQixlQUFVLEdBQVcsQ0FBQyxDQUFDO0lBSXZCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUM3QjtpQkFBTTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Q7UUFFRCxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDL0I7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNsQztTQUNEO0lBQ0YsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLGVBQWU7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVPLHNCQUFzQixDQUFDLFFBQWdCO1FBQzlDLE9BQU8sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLFVBQVUsQ0FBQyxRQUFnQjtRQUNsQyxPQUFPLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVPLGVBQWUsQ0FBQyxhQUFxQjtRQUM1QyxPQUFPLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVPLGFBQWEsQ0FBQyxRQUFnQixFQUFFLEtBQWE7UUFDcEQsT0FBTyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFUyxRQUFRLENBQUMsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVTLFdBQVcsQ0FBQyxTQUFpQjtRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs0R0EvRW9CLGVBQWU7Z0dBQWYsZUFBZTsyRkFBZixlQUFlO2tCQURwQyxTQUFTO3lIQUlULEtBQUs7c0JBREosS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sT0FBTztzQkFETixLQUFLO2dCQUlOLFNBQVM7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTcGlubmVyIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXIgPSA1O1xuXG5cdEBJbnB1dCgpXG5cdGRpYW1ldGVyOiBudW1iZXIgPSA5MDtcblxuXHRASW5wdXQoKVxuXHRwcmltYXJ5OiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0c2Vjb25kYXJ5OiBib29sZWFuID0gZmFsc2U7XG5cblx0cjogbnVtYmVyID0gMDtcblxuXHRjaXJjdW1mZXJlbmNlOiBudW1iZXIgPSAwO1xuXG5cdGNyb3BwZWRDaXJjbGU6IG51bWJlciA9IDA7XG5cblx0Y2lyY2xlU2l6ZTogbnVtYmVyID0gMDtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVDaXJjbGUoKTtcblxuXHRcdGlmIChjaGFuZ2VzWydwcmltYXJ5J10pIHtcblx0XHRcdGlmICh0aGlzLnByaW1hcnkpIHtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLXByaW1hcnknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1wcmltYXJ5Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXNbJ3NlY29uZGFyeSddKSB7XG5cdFx0XHRpZiAodGhpcy5zZWNvbmRhcnkpIHtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLXNlY29uZGFyeScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLXNlY29uZGFyeScpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuY2FsY3VsYXRlQ2lyY2xlKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNpcmNsZSgpOiB2b2lkIHtcblx0XHR0aGlzLmNpcmN1bWZlcmVuY2UgPSB0aGlzLmNhbGN1bGF0ZUNpcmN1bWZlcmVuY2UodGhpcy5kaWFtZXRlcik7XG5cdFx0dGhpcy5yID0gdGhpcy5jYWxjdWxhdGVSKHRoaXMuZGlhbWV0ZXIpO1xuXHRcdHRoaXMuY3JvcHBlZENpcmNsZSA9IHRoaXMuY2FsY3VsYXRlRGFzaGVzKHRoaXMuY2lyY3VtZmVyZW5jZSk7XG5cdFx0dGhpcy5jaXJjbGVTaXplID0gdGhpcy5jYWxjdWxhdGVTaXplKHRoaXMuZGlhbWV0ZXIsIHRoaXMud2lkdGgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDaXJjdW1mZXJlbmNlKGRpYW1ldGVyOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiBkaWFtZXRlciAqIE1hdGguUEk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVIoZGlhbWV0ZXI6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIGRpYW1ldGVyIC8gMjtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlRGFzaGVzKGNpcmN1bWZlcmVuY2U6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIGNpcmN1bWZlcmVuY2UgKiAwLjI1O1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVTaXplKGRpYW1ldGVyOiBudW1iZXIsIHdpZHRoOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiBkaWFtZXRlciArIHdpZHRoO1xuXHR9XG5cblx0cHJvdGVjdGVkIGFkZENsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxuXG5cdHByb3RlY3RlZCByZW1vdmVDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cbn1cbiJdfQ==