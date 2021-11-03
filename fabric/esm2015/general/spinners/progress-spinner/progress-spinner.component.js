import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { AbstractSpinner } from '../abstract-spinner';
import { SpinnerMode } from './spinner-mode';
export class FabricProgressSpinnerComponent extends AbstractSpinner {
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.value = 0;
        this.animationsDisabled = true;
        this.secondCircleDisabled = true;
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.calculateValuePercentage(this.circumference, this.value);
        if (this.mode === SpinnerMode.Spin) {
            this.animationsDisabled = false;
            this.secondCircleDisabled = false;
            this.value = 0;
            this.circumference = this.croppedCircle;
        }
        if (this.animationsDisabled) {
            this.addClass('gui-animations-disabled');
        }
        else {
            this.removeClass('gui-animations-disabled');
        }
        if (this.secondCircleDisabled) {
            this.addClass('gui-second-circle-disabled');
        }
        else {
            this.removeClass('gui-second-circle-disabled');
        }
    }
    ngOnInit() {
        this.calculateValuePercentage(this.circumference, this.value);
    }
    calculateValuePercentage(circumference, value) {
        this.valuePercentage = circumference - (value * circumference / 100);
    }
}
FabricProgressSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-progress-spinner',
                template: "<div\n\t[style.height.px]=\"circleSize\"\n\t[style.width.px]=\"circleSize\"\n\tclass=\"gui-progress-spinner\">\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"circumference\"\n\t\t\t[style.stroke-dashoffset]=\"valuePercentage\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-progress-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-progress-spinner circle{fill:transparent;stroke:#999}.gui-progress-spinner svg{position:absolute}.gui-progress-spinner .circle-inner{animation:gui-spin-reverse 2s infinite linear forwards reverse}.gui-progress-spinner .circle-outer{-webkit-animation:gui-spin 2s infinite linear forwards;animation:gui-spin 2s infinite linear forwards}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner .circle-outer{-webkit-animation:none;animation:none}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner.gui-progress-spinner{-webkit-animation:none;animation:none}.gui-second-circle-disabled .gui-progress-spinner.gui-progress-spinner .circle-inner{opacity:0}.gui-primary .gui-progress-spinner.gui-progress-spinner circle{stroke:#2185d0}.gui-secondary .gui-progress-spinner.gui-progress-spinner circle{stroke:#3cb371}\n", ".gui-material .gui-progress-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-progress-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-progress-spinner circle{stroke:#0097a7}\n", ".gui-dark .gui-progress-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-progress-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-progress-spinner circle{stroke:#80cbc4}\n"]
            },] }
];
FabricProgressSpinnerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
FabricProgressSpinnerComponent.propDecorators = {
    value: [{ type: Input }],
    mode: [{ type: Input }],
    color: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZ2VuZXJhbC9zcGlubmVycy9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0SixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBYTdDLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxlQUFlO0lBaUJsRSxZQUFZLFVBQXNCLEVBQy9CLFFBQW1CO1FBQ3JCLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFoQjdCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFRbEIsdUJBQWtCLEdBQVksSUFBSSxDQUFDO1FBRW5DLHlCQUFvQixHQUFZLElBQUksQ0FBQztJQU9yQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ25DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN4QztRQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQzVDO1FBRUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDL0M7SUFDRixDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVMsd0JBQXdCLENBQUMsYUFBcUIsRUFBRSxLQUFhO1FBQ3RFLElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxHQUFHLENBQUMsS0FBSyxHQUFHLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7WUFoRUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDgzQkFBZ0Q7Z0JBTWhELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDckM7OztZQWY0QyxVQUFVO1lBQTRCLFNBQVM7OztvQkFrQjFGLEtBQUs7bUJBR0wsS0FBSztvQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFic3RyYWN0U3Bpbm5lciB9IGZyb20gJy4uL2Fic3RyYWN0LXNwaW5uZXInO1xuaW1wb3J0IHsgU3Bpbm5lck1vZGUgfSBmcm9tICcuL3NwaW5uZXItbW9kZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1wcm9ncmVzcy1zcGlubmVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9wcm9ncmVzcy1zcGlubmVyLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvcHJvZ3Jlc3Mtc3Bpbm5lci5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3Byb2dyZXNzLXNwaW5uZXIuZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RTcGlubmVyIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBudW1iZXIgPSAwO1xuXG5cdEBJbnB1dCgpXG5cdG1vZGU6IFNwaW5uZXJNb2RlO1xuXG5cdEBJbnB1dCgpXG5cdGNvbG9yOiBzdHJpbmc7XG5cblx0YW5pbWF0aW9uc0Rpc2FibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRzZWNvbmRDaXJjbGVEaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0dmFsdWVQZXJjZW50YWdlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlVmFsdWVQZXJjZW50YWdlKHRoaXMuY2lyY3VtZmVyZW5jZSwgdGhpcy52YWx1ZSk7XG5cblx0XHRpZiAodGhpcy5tb2RlID09PSBTcGlubmVyTW9kZS5TcGluKSB7XG5cdFx0XHR0aGlzLmFuaW1hdGlvbnNEaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5zZWNvbmRDaXJjbGVEaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy52YWx1ZSA9IDA7XG5cdFx0XHR0aGlzLmNpcmN1bWZlcmVuY2UgPSB0aGlzLmNyb3BwZWRDaXJjbGU7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYW5pbWF0aW9uc0Rpc2FibGVkKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdndWktYW5pbWF0aW9ucy1kaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktYW5pbWF0aW9ucy1kaXNhYmxlZCcpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNlY29uZENpcmNsZURpc2FibGVkKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdndWktc2Vjb25kLWNpcmNsZS1kaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktc2Vjb25kLWNpcmNsZS1kaXNhYmxlZCcpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuY2FsY3VsYXRlVmFsdWVQZXJjZW50YWdlKHRoaXMuY2lyY3VtZmVyZW5jZSwgdGhpcy52YWx1ZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY2FsY3VsYXRlVmFsdWVQZXJjZW50YWdlKGNpcmN1bWZlcmVuY2U6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMudmFsdWVQZXJjZW50YWdlID0gY2lyY3VtZmVyZW5jZSAtICh2YWx1ZSAqIGNpcmN1bWZlcmVuY2UgLyAxMDApO1xuXHR9XG59XG4iXX0=