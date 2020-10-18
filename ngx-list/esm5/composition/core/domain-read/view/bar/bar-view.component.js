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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL3ZpZXcvYmFyL2Jhci12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZIO0lBQUE7UUF1QkMsbUJBQWMsR0FBWSxLQUFLLENBQUM7SUFVakMsQ0FBQzs7Ozs7SUFOQSxzQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDakMsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDakQ7SUFDRixDQUFDOztnQkEvQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxnUUFRVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0wsc0JBQXNCLEVBQUUsTUFBTTtxQkFDOUI7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7O3dCQUdDLEtBQUs7aUNBR0wsS0FBSzs7SUFXUCx1QkFBQztDQUFBLEFBakNELElBaUNDO1NBaEJZLGdCQUFnQjs7O0lBRTVCLGlDQUNjOztJQUVkLDBDQUNnQzs7SUFFaEMsaUNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktYmFyLXZpZXdbdmFsdWVdJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXBlcmNlbnRhZ2UtYmFyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXBlcmNlbnRhZ2VcIiBbc3R5bGUud2lkdGguJV09XCJ3aWR0aFwiPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Z3VpLXBlcmNlbnRhZ2UtdmlldyAqbmdJZj1cInNob3dQZXJjZW50YWdlXCJcblx0XHRcdFx0XHRcdFx0XHQgW3ZhbHVlXT1cInZhbHVlXCI+XG5cdFx0XHQ8L2d1aS1wZXJjZW50YWdlLXZpZXc+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1iYXItdmlld10nOiAndHJ1ZSdcblx0fSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQmFyVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0dmFsdWU6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRzaG93UGVyY2VudGFnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy52YWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IHRoaXMudmFsdWUgPiAxMDAgPyAxMDAgOiB0aGlzLnZhbHVlO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=