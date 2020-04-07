/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class BarViewComponent {
    constructor() {
        this.showPercentage = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value !== undefined && changes.value !== null) {
            this.width = this.value > 100 ? 100 : this.value;
        }
    }
}
BarViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-bar-view[value]',
                template: `
		<div class="gui-percentage-bar">
			<div class="gui-percentage" [style.width.%]="width">
			</div>
			<gui-percentage-view *ngIf="showPercentage"
								 [value]="value">
			</gui-percentage-view>
		</div>
	`,
                host: {
                    '[class.gui-bar-view]': 'true'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
BarViewComponent.propDecorators = {
    value: [{ type: Input }],
    showPercentage: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BarViewComponent.prototype.value;
    /** @type {?} */
    BarViewComponent.prototype.showPercentage;
    /** @type {?} */
    BarViewComponent.prototype.width;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vcmVhZC92aWV3L2Jhci9iYXItdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW1CdkgsTUFBTSxPQUFPLGdCQUFnQjtJQWpCN0I7UUF1QkMsbUJBQWMsR0FBWSxLQUFLLENBQUM7SUFVakMsQ0FBQzs7Ozs7SUFOQSxXQUFXLENBQUMsT0FBc0I7UUFDakMsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDakQ7SUFDRixDQUFDOzs7WUEvQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7RUFRVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0wsc0JBQXNCLEVBQUUsTUFBTTtpQkFDOUI7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7b0JBR0MsS0FBSzs2QkFHTCxLQUFLOzs7O0lBSE4saUNBQ2M7O0lBRWQsMENBQ2dDOztJQUVoQyxpQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1iYXItdmlld1t2YWx1ZV0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJndWktcGVyY2VudGFnZS1iYXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktcGVyY2VudGFnZVwiIFtzdHlsZS53aWR0aC4lXT1cIndpZHRoXCI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxndWktcGVyY2VudGFnZS12aWV3ICpuZ0lmPVwic2hvd1BlcmNlbnRhZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdCBbdmFsdWVdPVwidmFsdWVcIj5cblx0XHRcdDwvZ3VpLXBlcmNlbnRhZ2Utdmlldz5cblx0XHQ8L2Rpdj5cblx0YCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWJhci12aWV3XSc6ICd0cnVlJ1xuXHR9LFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCYXJWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHR2YWx1ZTogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHNob3dQZXJjZW50YWdlOiBib29sZWFuID0gZmFsc2U7XG5cblx0d2lkdGg6IG51bWJlcjtcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gdGhpcy52YWx1ZSA+IDEwMCA/IDEwMCA6IHRoaXMudmFsdWU7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==