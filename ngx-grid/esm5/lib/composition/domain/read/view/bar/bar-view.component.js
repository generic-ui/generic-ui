/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
var BarViewComponent = /** @class */ (function () {
    function BarViewComponent() {
        this.showPercentage = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    BarViewComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value !== undefined && changes.value !== null) {
            this.width = this.value > 100 ? 100 : this.value;
        }
    };
    BarViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-bar-view[value]',
                    template: "\n\t\t<div class=\"gui-percentage-bar\">\n\t\t\t<div class=\"gui-percentage\" [style.width.%]=\"width\">\n\t\t\t</div>\n\t\t\t<gui-percentage-view *ngIf=\"showPercentage\"\n\t\t\t\t\t\t\t\t [value]=\"value\">\n\t\t\t</gui-percentage-view>\n\t\t</div>\n\t",
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
    return BarViewComponent;
}());
export { BarViewComponent };
if (false) {
    /** @type {?} */
    BarViewComponent.prototype.value;
    /** @type {?} */
    BarViewComponent.prototype.showPercentage;
    /** @type {?} */
    BarViewComponent.prototype.width;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvdmlldy9iYXIvYmFyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkg7SUFBQTtRQXVCQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztJQVVqQyxDQUFDOzs7OztJQU5BLHNDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNqQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQzFELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNqRDtJQUNGLENBQUM7O2dCQS9CRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLGdRQVFUO29CQUNELElBQUksRUFBRTt3QkFDTCxzQkFBc0IsRUFBRSxNQUFNO3FCQUM5QjtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7d0JBR0MsS0FBSztpQ0FHTCxLQUFLOztJQVdQLHVCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FoQlksZ0JBQWdCOzs7SUFFNUIsaUNBQ2M7O0lBRWQsMENBQ2dDOztJQUVoQyxpQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1iYXItdmlld1t2YWx1ZV0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJndWktcGVyY2VudGFnZS1iYXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktcGVyY2VudGFnZVwiIFtzdHlsZS53aWR0aC4lXT1cIndpZHRoXCI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxndWktcGVyY2VudGFnZS12aWV3ICpuZ0lmPVwic2hvd1BlcmNlbnRhZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdCBbdmFsdWVdPVwidmFsdWVcIj5cblx0XHRcdDwvZ3VpLXBlcmNlbnRhZ2Utdmlldz5cblx0XHQ8L2Rpdj5cblx0YCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWJhci12aWV3XSc6ICd0cnVlJ1xuXHR9LFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCYXJWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHR2YWx1ZTogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHNob3dQZXJjZW50YWdlOiBib29sZWFuID0gZmFsc2U7XG5cblx0d2lkdGg6IG51bWJlcjtcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gdGhpcy52YWx1ZSA+IDEwMCA/IDEwMCA6IHRoaXMudmFsdWU7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==