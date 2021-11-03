import { Input, Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class AbstractSpinner {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.width = 5;
        this.diameter = 90;
    }
    ngOnChanges(changes) {
        this.calculateCircle();
        if (changes.primary) {
            if (this.primary) {
                this.addClass('gui-primary');
            }
            else {
                this.removeClass('gui-primary');
            }
        }
        if (changes.secondary) {
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
AbstractSpinner.ɵfac = function AbstractSpinner_Factory(t) { return new (t || AbstractSpinner)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
AbstractSpinner.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AbstractSpinner, inputs: { width: "width", diameter: "diameter", primary: "primary", secondary: "secondary" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractSpinner, [{
        type: Directive
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { width: [{
            type: Input
        }], diameter: [{
            type: Input
        }], primary: [{
            type: Input
        }], secondary: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9nZW5lcmFsL3NwaW5uZXJzL2Fic3RyYWN0LXNwaW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLEtBQUssRUFBMEQsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUdySCxNQUFNLE9BQWdCLGVBQWU7SUFzQnBDLFlBQWdDLFVBQXNCLEVBQ3JDLFFBQW1CO1FBREosZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBcEJwQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLGFBQVEsR0FBVyxFQUFFLENBQUM7SUFrQnRCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDN0I7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNoQztTQUNEO1FBRUQsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Q7SUFDRixDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sZUFBZTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU8sc0JBQXNCLENBQUMsUUFBZ0I7UUFDOUMsT0FBTyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sVUFBVSxDQUFDLFFBQWdCO1FBQ2xDLE9BQU8sUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRU8sZUFBZSxDQUFDLGFBQXFCO1FBQzVDLE9BQU8sYUFBYSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRU8sYUFBYSxDQUFDLFFBQWdCLEVBQUUsS0FBYTtRQUNwRCxPQUFPLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVTLFFBQVEsQ0FBQyxTQUFpQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRVMsV0FBVyxDQUFDLFNBQWlCO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7OzhFQS9Fb0IsZUFBZTtrRUFBZixlQUFlO3VGQUFmLGVBQWU7Y0FEcEMsU0FBUztxRkFJVCxLQUFLO2tCQURKLEtBQUs7WUFJTixRQUFRO2tCQURQLEtBQUs7WUFJTixPQUFPO2tCQUROLEtBQUs7WUFJTixTQUFTO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgQ29tcG9uZW50LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTcGlubmVyIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXIgPSA1O1xuXG5cdEBJbnB1dCgpXG5cdGRpYW1ldGVyOiBudW1iZXIgPSA5MDtcblxuXHRASW5wdXQoKVxuXHRwcmltYXJ5OiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNlY29uZGFyeTogYm9vbGVhbjtcblxuXHRyOiBudW1iZXI7XG5cblx0Y2lyY3VtZmVyZW5jZTogbnVtYmVyO1xuXG5cdGNyb3BwZWRDaXJjbGU6IG51bWJlcjtcblxuXHRjaXJjbGVTaXplOiBudW1iZXI7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdHRoaXMuY2FsY3VsYXRlQ2lyY2xlKCk7XG5cblx0XHRpZiAoY2hhbmdlcy5wcmltYXJ5KSB7XG5cdFx0XHRpZiAodGhpcy5wcmltYXJ5KSB7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1wcmltYXJ5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktcHJpbWFyeScpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnNlY29uZGFyeSkge1xuXHRcdFx0aWYgKHRoaXMuc2Vjb25kYXJ5KSB7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1zZWNvbmRhcnknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1zZWNvbmRhcnknKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZUNpcmNsZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDaXJjbGUoKTogdm9pZCB7XG5cdFx0dGhpcy5jaXJjdW1mZXJlbmNlID0gdGhpcy5jYWxjdWxhdGVDaXJjdW1mZXJlbmNlKHRoaXMuZGlhbWV0ZXIpO1xuXHRcdHRoaXMuciA9IHRoaXMuY2FsY3VsYXRlUih0aGlzLmRpYW1ldGVyKTtcblx0XHR0aGlzLmNyb3BwZWRDaXJjbGUgPSB0aGlzLmNhbGN1bGF0ZURhc2hlcyh0aGlzLmNpcmN1bWZlcmVuY2UpO1xuXHRcdHRoaXMuY2lyY2xlU2l6ZSA9IHRoaXMuY2FsY3VsYXRlU2l6ZSh0aGlzLmRpYW1ldGVyLCB0aGlzLndpZHRoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQ2lyY3VtZmVyZW5jZShkaWFtZXRlcjogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZGlhbWV0ZXIgKiBNYXRoLlBJO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVSKGRpYW1ldGVyOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiBkaWFtZXRlciAvIDI7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZURhc2hlcyhjaXJjdW1mZXJlbmNlOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiBjaXJjdW1mZXJlbmNlICogMC4yNTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU2l6ZShkaWFtZXRlcjogbnVtYmVyLCB3aWR0aDogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZGlhbWV0ZXIgKyB3aWR0aDtcblx0fVxuXG5cdHByb3RlY3RlZCBhZGRDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXHR9XG59XG4iXX0=