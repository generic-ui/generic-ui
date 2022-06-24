import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../feature/common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class FunctionViewComponent extends PureComponent {
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
        return 'gui-function-view';
    }
}
FunctionViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FunctionViewComponent, deps: [{ token: i1.DomSanitizer }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
FunctionViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FunctionViewComponent, selector: "gui-function-view", inputs: { element: "element" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `

		<div class="gui-h-full gui-flex gui-items-center"
			 [innerHTML]="safeHTML">
		</div>

	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FunctionViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-function-view',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24tdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvY29tcG9zaXRpb24vZG9tYWluLXJlYWQvdmlldy9mdW5jdGlvbi9mdW5jdGlvbi12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl6RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNERBQTRELENBQUM7OztBQWUzRixNQUFNLE9BQU8scUJBQXNCLFNBQVEsYUFBYTtJQU92RCxZQUE2QixTQUF1QixFQUNoQyxLQUFpQjtRQUNwQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFGZSxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFHcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxtQkFBbUIsQ0FBQztJQUM1QixDQUFDOzttSEFyQlcscUJBQXFCO3VHQUFyQixxQkFBcUIscUlBVnZCOzs7Ozs7RUFNVDs0RkFJVyxxQkFBcUI7a0JBWmpDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFOzs7Ozs7RUFNVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzRIQUlBLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBDZWxsVmFsdWUgfSBmcm9tICcuLi8uLi9kZWZpbml0aW9uL2NlbGwtdmFsdWUnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1mdW5jdGlvbi12aWV3Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXYgY2xhc3M9XCJndWktaC1mdWxsIGd1aS1mbGV4IGd1aS1pdGVtcy1jZW50ZXJcIlxuXHRcdFx0IFtpbm5lckhUTUxdPVwic2FmZUhUTUxcIj5cblx0XHQ8L2Rpdj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGdW5jdGlvblZpZXdDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRlbGVtZW50OiBDZWxsVmFsdWU7XG5cblx0c2FmZUhUTUw6IFNhZmVIdG1sO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbFJlZik7XG5cblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktaC1mdWxsJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXctZnVsbCcpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5zYWZlSFRNTCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMuZWxlbWVudC52YWx1ZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZnVuY3Rpb24tdmlldyc7XG5cdH1cblxufVxuIl19