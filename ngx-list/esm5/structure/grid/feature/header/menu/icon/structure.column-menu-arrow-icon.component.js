/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
/** @type {?} */
export var selector = 'gui-structure-column-menu-arrow-icon';
var StructureColumnMenuArrowIconComponent = /** @class */ (function () {
    function StructureColumnMenuArrowIconComponent() {
        this.rotateDeg = 90;
    }
    StructureColumnMenuArrowIconComponent.decorators = [
        { type: Component, args: [{
                    selector: selector,
                    template: "\n\t\t<div [style.transform]=\"'rotate(' + rotateDeg + 'deg)'\"\n\t\t\t [class.gui-structure-column-menu-sort-icon]=\"sort\">\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10.04 11.72\">\n\t\t\t\t<line class=\"cls-1\" x1=\"5.02\" y1=\"2.15\" x2=\"5.02\" y2=\"10.97\"/>\n\t\t\t\t<line class=\"cls-1\" x1=\"5.02\" y1=\"0.75\" x2=\"9.29\" y2=\"5.02\"/>\n\t\t\t\t<line class=\"cls-1\" x1=\"5.02\" y1=\"0.75\" x2=\"0.75\" y2=\"5.02\"/>\n\t\t\t</svg>\n\t\t</div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class]': "\"" + selector + "\""
                    }
                }] }
    ];
    StructureColumnMenuArrowIconComponent.propDecorators = {
        rotateDeg: [{ type: Input }],
        sort: [{ type: Input }]
    };
    return StructureColumnMenuArrowIconComponent;
}());
export { StructureColumnMenuArrowIconComponent };
if (false) {
    /** @type {?} */
    StructureColumnMenuArrowIconComponent.prototype.rotateDeg;
    /** @type {?} */
    StructureColumnMenuArrowIconComponent.prototype.sort;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L2ljb24vc3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFN0YsTUFBTSxLQUFPLFFBQVEsR0FBRyxzQ0FBc0M7QUFFOUQ7SUFBQTtRQW9CQyxjQUFTLEdBQVcsRUFBRSxDQUFDO0lBSXhCLENBQUM7O2dCQXhCQSxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSwrZEFTVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDTCxTQUFTLEVBQUUsT0FBSSxRQUFRLE9BQUc7cUJBQzFCO2lCQUNEOzs7NEJBRUMsS0FBSzt1QkFHTCxLQUFLOztJQUVQLDRDQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FOWSxxQ0FBcUM7OztJQUNqRCwwREFDdUI7O0lBRXZCLHFEQUNjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RvciA9ICdndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IHNlbGVjdG9yLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgW3N0eWxlLnRyYW5zZm9ybV09XCIncm90YXRlKCcgKyByb3RhdGVEZWcgKyAnZGVnKSdcIlxuXHRcdFx0IFtjbGFzcy5ndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LXNvcnQtaWNvbl09XCJzb3J0XCI+XG5cdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwLjA0IDExLjcyXCI+XG5cdFx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjUuMDJcIiB5MT1cIjIuMTVcIiB4Mj1cIjUuMDJcIiB5Mj1cIjEwLjk3XCIvPlxuXHRcdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI1LjAyXCIgeTE9XCIwLjc1XCIgeDI9XCI5LjI5XCIgeTI9XCI1LjAyXCIvPlxuXHRcdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI1LjAyXCIgeTE9XCIwLjc1XCIgeDI9XCIwLjc1XCIgeTI9XCI1LjAyXCIvPlxuXHRcdFx0PC9zdmc+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiBgXCIke3NlbGVjdG9yfVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbk1lbnVBcnJvd0ljb25Db21wb25lbnQge1xuXHRASW5wdXQoKVxuXHRyb3RhdGVEZWc6IG51bWJlciA9IDkwO1xuXG5cdEBJbnB1dCgpXG5cdHNvcnQ6IGJvb2xlYW47XG59XG4iXX0=