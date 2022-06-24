import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../feature/common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class HtmlViewComponent extends PureComponent {
    constructor(sanitizer, elRef) {
        super(elRef);
        this.sanitizer = sanitizer;
        this.elRef = elRef;
        this.addClassToHost('gui-h-full');
        this.addClassToHost('gui-w-full');
    }
    ngOnChanges() {
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.element.value);
    }
    getSelectorName() {
        return 'gui-html-view';
    }
}
HtmlViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HtmlViewComponent, deps: [{ token: i1.DomSanitizer }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
HtmlViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: HtmlViewComponent, selector: "gui-html-view", inputs: { element: "element" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `

		<div class="gui-h-full gui-flex gui-items-center"
			 [innerHTML]="safeHTML">
		</div>

	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HtmlViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-html-view',
                    template: `

		<div class="gui-h-full gui-flex gui-items-center"
			 [innerHTML]="safeHTML">
		</div>

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }, { type: i0.ElementRef }]; }, propDecorators: { element: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9jb21wb3NpdGlvbi9kb21haW4tcmVhZC92aWV3L2h0bWwvaHRtbC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl6RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNERBQTRELENBQUM7OztBQWUzRixNQUFNLE9BQU8saUJBQWtCLFNBQVEsYUFBYTtJQU9uRCxZQUE2QixTQUF1QixFQUNoQyxLQUFpQjtRQUNwQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFGZSxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFHcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7K0dBckJXLGlCQUFpQjttR0FBakIsaUJBQWlCLGlJQVZuQjs7Ozs7O0VBTVQ7NEZBSVcsaUJBQWlCO2tCQVo3QixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUU7Ozs7OztFQU1UO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7NEhBSUEsT0FBTztzQkFETixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IENlbGxWYWx1ZSB9IGZyb20gJy4uLy4uL2RlZmluaXRpb24vY2VsbC12YWx1ZSc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWh0bWwtdmlldycsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWgtZnVsbCBndWktZmxleCBndWktaXRlbXMtY2VudGVyXCJcblx0XHRcdCBbaW5uZXJIVE1MXT1cInNhZmVIVE1MXCI+XG5cdFx0PC9kaXY+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgSHRtbFZpZXdDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRlbGVtZW50OiBDZWxsVmFsdWU7XG5cblx0c2FmZUhUTUw6IFNhZmVIdG1sO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbFJlZik7XG5cblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktaC1mdWxsJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXctZnVsbCcpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5zYWZlSFRNTCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMuZWxlbWVudC52YWx1ZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktaHRtbC12aWV3Jztcblx0fVxuXG59XG4iXX0=