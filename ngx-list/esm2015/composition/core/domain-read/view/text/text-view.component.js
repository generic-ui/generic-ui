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
			<span>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC92aWV3L3RleHQvdGV4dC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQXNCdkUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7OztJQU83QixZQUErQixNQUFXLEVBQ2xCLFFBQWEsRUFDakIsVUFBc0IsRUFDdEIsUUFBbUI7UUFEbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTHZDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFPZCxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDbEU7UUFFRCxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDcEU7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdEQsQ0FBQzs7O1lBN0NELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0VBV1Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNMLHVCQUF1QixFQUFFLE1BQU07aUJBQy9CO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7Ozs0Q0FRYSxTQUFTLFNBQUMsTUFBTTs0Q0FDekIsU0FBUyxTQUFDLFFBQVE7WUFoQ2lDLFVBQVU7WUFBUyxTQUFTOzs7b0JBMEJsRixLQUFLOzs7O0lBQU4sa0NBQ2lCOztJQUVqQixtQ0FBZTs7Ozs7SUFJWix1Q0FBdUM7Ozs7O0lBQ3ZDLHFDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF0dHJpYnV0ZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFZhbHVlLCBDZWxsVmFsdWVUeXBlIH0gZnJvbSAnLi4vLi4vZGVmaW5pdGlvbi9jZWxsLXZhbHVlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXZpZXctdGV4dFt2YWx1ZV0nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImlzSHRtbDsgZWxzZSB0ZXh0XCI+XG5cdFx0XHQ8c3BhbiBbaW5uZXJIVE1MXT1cInZhbHVlLnZhbHVlIHwgZ3VpU2FmZTogJ2h0bWwnXCI+PC9zcGFuPlxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PG5nLXRlbXBsYXRlICN0ZXh0PlxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdHt7dmFsdWUudmFsdWV9fVxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS10ZXh0LXZpZXddJzogJ3RydWUnXG5cdH0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWaWV3Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHR2YWx1ZTogQ2VsbFZhbHVlO1xuXG5cdGlzSHRtbCA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKEBBdHRyaWJ1dGUoJ2JvbGQnKSBpc0JvbGQ6IGFueSxcblx0XHRcdFx0QEF0dHJpYnV0ZSgnaXRhbGljJykgaXNJdGFsaWM6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuXHRcdGlmIChpc0JvbGQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktYm9sZCcpO1xuXHRcdH1cblxuXHRcdGlmIChpc0l0YWxpYyAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1pdGFsaWMnKTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc05hbWU7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR0aGlzLmlzSHRtbCA9IHRoaXMudmFsdWUudHlwZSA9PT0gQ2VsbFZhbHVlVHlwZS5IVE1MO1xuXHR9XG5cbn1cbiJdfQ==