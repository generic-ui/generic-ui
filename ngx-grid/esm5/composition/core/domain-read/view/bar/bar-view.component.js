/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
var BarViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BarViewComponent, _super);
    function BarViewComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.showPercentage = false;
        return _this;
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
    /**
     * @protected
     * @return {?}
     */
    BarViewComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-bar-view';
    };
    BarViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-bar-view[value]',
                    template: "\n\t\t<div class=\"gui-percentage-bar\">\n\t\t\t<div class=\"gui-percentage\" [style.width.%]=\"width\">\n\t\t\t</div>\n\t\t\t<gui-percentage-view *ngIf=\"showPercentage\"\n\t\t\t\t\t\t\t\t [value]=\"value\">\n\t\t\t</gui-percentage-view>\n\t\t</div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    BarViewComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    BarViewComponent.propDecorators = {
        value: [{ type: Input }],
        showPercentage: [{ type: Input }]
    };
    return BarViewComponent;
}(PureComponent));
export { BarViewComponent };
if (false) {
    /** @type {?} */
    BarViewComponent.prototype.value;
    /** @type {?} */
    BarViewComponent.prototype.showPercentage;
    /** @type {?} */
    BarViewComponent.prototype.width;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL3ZpZXcvYmFyL2Jhci12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFHbkY7SUFjc0MsNENBQWE7SUFVbEQsMEJBQVksVUFBc0I7UUFBbEMsWUFDQyxrQkFBTSxVQUFVLENBQUMsU0FDakI7UUFORCxvQkFBYyxHQUFZLEtBQUssQ0FBQzs7SUFNaEMsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksT0FBb0M7UUFDL0MsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDakQ7SUFDRixDQUFDOzs7OztJQUVTLDBDQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQzs7Z0JBcENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsZ1FBUVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFqQjRDLFVBQVU7Ozt3QkFvQnJELEtBQUs7aUNBR0wsS0FBSzs7SUFtQlAsdUJBQUM7Q0FBQSxBQXRDRCxDQWNzQyxhQUFhLEdBd0JsRDtTQXhCWSxnQkFBZ0I7OztJQUU1QixpQ0FDYzs7SUFFZCwwQ0FDZ0M7O0lBRWhDLGlDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWJhci12aWV3W3ZhbHVlXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1wZXJjZW50YWdlLWJhclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1wZXJjZW50YWdlXCIgW3N0eWxlLndpZHRoLiVdPVwid2lkdGhcIj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGd1aS1wZXJjZW50YWdlLXZpZXcgKm5nSWY9XCJzaG93UGVyY2VudGFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0IFt2YWx1ZV09XCJ2YWx1ZVwiPlxuXHRcdFx0PC9ndWktcGVyY2VudGFnZS12aWV3PlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCYXJWaWV3Q29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0dmFsdWU6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRzaG93UGVyY2VudGFnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPEJhclZpZXdDb21wb25lbnQ+KSB7XG5cdFx0aWYgKGNoYW5nZXMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gdGhpcy52YWx1ZSA+IDEwMCA/IDEwMCA6IHRoaXMudmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWJhci12aWV3Jztcblx0fVxuXG59XG4iXX0=