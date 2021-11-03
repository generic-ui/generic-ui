import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
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
AbstractSpinner.decorators = [
    { type: Directive }
];
AbstractSpinner.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
AbstractSpinner.propDecorators = {
    width: [{ type: Input }],
    diameter: [{ type: Input }],
    primary: [{ type: Input }],
    secondary: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9nZW5lcmFsL3NwaW5uZXJzL2Fic3RyYWN0LXNwaW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRzFHLE1BQU0sT0FBZ0IsZUFBZTtJQXNCcEMsWUFBZ0MsVUFBc0IsRUFDckMsUUFBbUI7UUFESixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFwQnBDLFVBQUssR0FBVyxDQUFDLENBQUM7UUFHbEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztJQWtCdEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUM3QjtpQkFBTTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Q7UUFFRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQy9CO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDbEM7U0FDRDtJQUNGLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxlQUFlO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxRQUFnQjtRQUM5QyxPQUFPLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyxVQUFVLENBQUMsUUFBZ0I7UUFDbEMsT0FBTyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFTyxlQUFlLENBQUMsYUFBcUI7UUFDNUMsT0FBTyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFTyxhQUFhLENBQUMsUUFBZ0IsRUFBRSxLQUFhO1FBQ3BELE9BQU8sUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRVMsUUFBUSxDQUFDLFNBQWlCO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFUyxXQUFXLENBQUMsU0FBaUI7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7O1lBaEZELFNBQVM7OztZQUZVLFVBQVU7WUFBNEIsU0FBUzs7O29CQUtqRSxLQUFLO3VCQUdMLEtBQUs7c0JBR0wsS0FBSzt3QkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFNwaW5uZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlciA9IDU7XG5cblx0QElucHV0KClcblx0ZGlhbWV0ZXI6IG51bWJlciA9IDkwO1xuXG5cdEBJbnB1dCgpXG5cdHByaW1hcnk6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c2Vjb25kYXJ5OiBib29sZWFuO1xuXG5cdHI6IG51bWJlcjtcblxuXHRjaXJjdW1mZXJlbmNlOiBudW1iZXI7XG5cblx0Y3JvcHBlZENpcmNsZTogbnVtYmVyO1xuXG5cdGNpcmNsZVNpemU6IG51bWJlcjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVDaXJjbGUoKTtcblxuXHRcdGlmIChjaGFuZ2VzLnByaW1hcnkpIHtcblx0XHRcdGlmICh0aGlzLnByaW1hcnkpIHtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLXByaW1hcnknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1wcmltYXJ5Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuc2Vjb25kYXJ5KSB7XG5cdFx0XHRpZiAodGhpcy5zZWNvbmRhcnkpIHtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLXNlY29uZGFyeScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLXNlY29uZGFyeScpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuY2FsY3VsYXRlQ2lyY2xlKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNpcmNsZSgpOiB2b2lkIHtcblx0XHR0aGlzLmNpcmN1bWZlcmVuY2UgPSB0aGlzLmNhbGN1bGF0ZUNpcmN1bWZlcmVuY2UodGhpcy5kaWFtZXRlcik7XG5cdFx0dGhpcy5yID0gdGhpcy5jYWxjdWxhdGVSKHRoaXMuZGlhbWV0ZXIpO1xuXHRcdHRoaXMuY3JvcHBlZENpcmNsZSA9IHRoaXMuY2FsY3VsYXRlRGFzaGVzKHRoaXMuY2lyY3VtZmVyZW5jZSk7XG5cdFx0dGhpcy5jaXJjbGVTaXplID0gdGhpcy5jYWxjdWxhdGVTaXplKHRoaXMuZGlhbWV0ZXIsIHRoaXMud2lkdGgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDaXJjdW1mZXJlbmNlKGRpYW1ldGVyOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiBkaWFtZXRlciAqIE1hdGguUEk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVIoZGlhbWV0ZXI6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIGRpYW1ldGVyIC8gMjtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlRGFzaGVzKGNpcmN1bWZlcmVuY2U6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIGNpcmN1bWZlcmVuY2UgKiAwLjI1O1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVTaXplKGRpYW1ldGVyOiBudW1iZXIsIHdpZHRoOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiBkaWFtZXRlciArIHdpZHRoO1xuXHR9XG5cblx0cHJvdGVjdGVkIGFkZENsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxuXG5cdHByb3RlY3RlZCByZW1vdmVDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cbn1cbiJdfQ==