import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AbstractSpinner {
    elementRef;
    renderer;
    width = 5;
    diameter = 90;
    primary = false;
    secondary = false;
    r = 0;
    circumference = 0;
    croppedCircle = 0;
    circleSize = 0;
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AbstractSpinner, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: AbstractSpinner, inputs: { width: "width", diameter: "diameter", primary: "primary", secondary: "secondary" }, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AbstractSpinner, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9nZW5lcmFsL3NwaW5uZXJzL2Fic3RyYWN0LXNwaW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDOztBQUcxRyxNQUFNLE9BQWdCLGVBQWU7SUFzQko7SUFDZjtJQXBCakIsS0FBSyxHQUFXLENBQUMsQ0FBQztJQUdsQixRQUFRLEdBQVcsRUFBRSxDQUFDO0lBR3RCLE9BQU8sR0FBWSxLQUFLLENBQUM7SUFHekIsU0FBUyxHQUFZLEtBQUssQ0FBQztJQUUzQixDQUFDLEdBQVcsQ0FBQyxDQUFDO0lBRWQsYUFBYSxHQUFXLENBQUMsQ0FBQztJQUUxQixhQUFhLEdBQVcsQ0FBQyxDQUFDO0lBRTFCLFVBQVUsR0FBVyxDQUFDLENBQUM7SUFFdkIsWUFBZ0MsVUFBc0IsRUFDckMsUUFBbUI7UUFESixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JDLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDcEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDaEM7U0FDRDtRQUVELElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3pCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Q7SUFDRixDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sZUFBZTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU8sc0JBQXNCLENBQUMsUUFBZ0I7UUFDOUMsT0FBTyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sVUFBVSxDQUFDLFFBQWdCO1FBQ2xDLE9BQU8sUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRU8sZUFBZSxDQUFDLGFBQXFCO1FBQzVDLE9BQU8sYUFBYSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRU8sYUFBYSxDQUFDLFFBQWdCLEVBQUUsS0FBYTtRQUNwRCxPQUFPLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVTLFFBQVEsQ0FBQyxTQUFpQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRVMsV0FBVyxDQUFDLFNBQWlCO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7d0dBL0VvQixlQUFlOzRGQUFmLGVBQWU7OzRGQUFmLGVBQWU7a0JBRHBDLFNBQVM7eUhBSVQsS0FBSztzQkFESixLQUFLO2dCQUlOLFFBQVE7c0JBRFAsS0FBSztnQkFJTixPQUFPO3NCQUROLEtBQUs7Z0JBSU4sU0FBUztzQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFNwaW5uZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlciA9IDU7XG5cblx0QElucHV0KClcblx0ZGlhbWV0ZXI6IG51bWJlciA9IDkwO1xuXG5cdEBJbnB1dCgpXG5cdHByaW1hcnk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRzZWNvbmRhcnk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRyOiBudW1iZXIgPSAwO1xuXG5cdGNpcmN1bWZlcmVuY2U6IG51bWJlciA9IDA7XG5cblx0Y3JvcHBlZENpcmNsZTogbnVtYmVyID0gMDtcblxuXHRjaXJjbGVTaXplOiBudW1iZXIgPSAwO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZUNpcmNsZSgpO1xuXG5cdFx0aWYgKGNoYW5nZXNbJ3ByaW1hcnknXSkge1xuXHRcdFx0aWYgKHRoaXMucHJpbWFyeSkge1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKCdndWktcHJpbWFyeScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLXByaW1hcnknKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlc1snc2Vjb25kYXJ5J10pIHtcblx0XHRcdGlmICh0aGlzLnNlY29uZGFyeSkge1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKCdndWktc2Vjb25kYXJ5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktc2Vjb25kYXJ5Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5jYWxjdWxhdGVDaXJjbGUoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQ2lyY2xlKCk6IHZvaWQge1xuXHRcdHRoaXMuY2lyY3VtZmVyZW5jZSA9IHRoaXMuY2FsY3VsYXRlQ2lyY3VtZmVyZW5jZSh0aGlzLmRpYW1ldGVyKTtcblx0XHR0aGlzLnIgPSB0aGlzLmNhbGN1bGF0ZVIodGhpcy5kaWFtZXRlcik7XG5cdFx0dGhpcy5jcm9wcGVkQ2lyY2xlID0gdGhpcy5jYWxjdWxhdGVEYXNoZXModGhpcy5jaXJjdW1mZXJlbmNlKTtcblx0XHR0aGlzLmNpcmNsZVNpemUgPSB0aGlzLmNhbGN1bGF0ZVNpemUodGhpcy5kaWFtZXRlciwgdGhpcy53aWR0aCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNpcmN1bWZlcmVuY2UoZGlhbWV0ZXI6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIGRpYW1ldGVyICogTWF0aC5QSTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlUihkaWFtZXRlcjogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZGlhbWV0ZXIgLyAyO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVEYXNoZXMoY2lyY3VtZmVyZW5jZTogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gY2lyY3VtZmVyZW5jZSAqIDAuMjU7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVNpemUoZGlhbWV0ZXI6IG51bWJlciwgd2lkdGg6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIGRpYW1ldGVyICsgd2lkdGg7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWRkQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHJlbW92ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxufVxuIl19