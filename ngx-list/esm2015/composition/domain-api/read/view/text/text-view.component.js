/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Attribute, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { CellValue, CellValueType } from '../../definition/cell-value';
export class TextViewComponent {
    /**
     * @param {?} isBold
     * @param {?} isItalic
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(isBold, isItalic, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isHtml = false;
        if (isBold !== null) {
            this.renderer.addClass(this.elementRef.nativeElement, 'gui-bold');
        }
        if (isItalic !== null) {
            this.renderer.addClass(this.elementRef.nativeElement, 'gui-italic');
        }
        this.elementRef.nativeElement.className;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.isHtml = this.value.type === CellValueType.HTML;
    }
}
TextViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-view-text[value]',
                template: `

		<ng-container *ngIf="isHtml; else text">
			<span [innerHTML]="value.value | guiSafe: 'html'"></span>
		</ng-container>
		
		<ng-template #text>
			<span >
				{{value.value}}
			</span>
		</ng-template>
	`,
                host: {
                    '[class.gui-text-view]': 'true'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
TextViewComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Attribute, args: ['bold',] }] },
    { type: undefined, decorators: [{ type: Attribute, args: ['italic',] }] },
    { type: ElementRef },
    { type: Renderer2 }
];
TextViewComponent.propDecorators = {
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TextViewComponent.prototype.value;
    /** @type {?} */
    TextViewComponent.prototype.isHtml;
    /**
     * @type {?}
     * @private
     */
    TextViewComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TextViewComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL3ZpZXcvdGV4dC90ZXh0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSCxPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBc0J2RSxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7O0lBTzdCLFlBQStCLE1BQVcsRUFDbEIsUUFBYSxFQUNqQixVQUFzQixFQUN0QixRQUFtQjtRQURuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFMdkMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQU9kLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNsRTtRQUVELElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNwRTtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQztJQUN0RCxDQUFDOzs7WUE3Q0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7RUFXVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0wsdUJBQXVCLEVBQUUsTUFBTTtpQkFDL0I7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7OzRDQVFhLFNBQVMsU0FBQyxNQUFNOzRDQUN6QixTQUFTLFNBQUMsUUFBUTtZQWhDaUMsVUFBVTtZQUFTLFNBQVM7OztvQkEwQmxGLEtBQUs7Ozs7SUFBTixrQ0FDaUI7O0lBRWpCLG1DQUFlOzs7OztJQUlaLHVDQUF1Qzs7Ozs7SUFDdkMscUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXR0cmlidXRlLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVmFsdWUsIENlbGxWYWx1ZVR5cGUgfSBmcm9tICcuLi8uLi9kZWZpbml0aW9uL2NlbGwtdmFsdWUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktdmlldy10ZXh0W3ZhbHVlXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiaXNIdG1sOyBlbHNlIHRleHRcIj5cblx0XHRcdDxzcGFuIFtpbm5lckhUTUxdPVwidmFsdWUudmFsdWUgfCBndWlTYWZlOiAnaHRtbCdcIj48L3NwYW4+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XG5cdFx0PG5nLXRlbXBsYXRlICN0ZXh0PlxuXHRcdFx0PHNwYW4gPlxuXHRcdFx0XHR7e3ZhbHVlLnZhbHVlfX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktdGV4dC12aWV3XSc6ICd0cnVlJ1xuXHR9LFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Vmlld0NvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0dmFsdWU6IENlbGxWYWx1ZTtcblxuXHRpc0h0bWwgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihAQXR0cmlidXRlKCdib2xkJykgaXNCb2xkOiBhbnksXG5cdFx0XHRcdEBBdHRyaWJ1dGUoJ2l0YWxpYycpIGlzSXRhbGljOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cblx0XHRpZiAoaXNCb2xkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWJvbGQnKTtcblx0XHR9XG5cblx0XHRpZiAoaXNJdGFsaWMgIT09IG51bGwpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktaXRhbGljJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5pc0h0bWwgPSB0aGlzLnZhbHVlLnR5cGUgPT09IENlbGxWYWx1ZVR5cGUuSFRNTDtcblx0fVxuXG59XG4iXX0=