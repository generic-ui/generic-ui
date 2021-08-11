/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
var ColumnSelectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnSelectorComponent, _super);
    function ColumnSelectorComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.columnSelected = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    ColumnSelectorComponent.prototype.onSelectChange = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.columnSelected.emit(column);
    };
    /**
     * @protected
     * @return {?}
     */
    ColumnSelectorComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-column-selector';
    };
    ColumnSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-column-selector][columns]',
                    template: "\n\n\t\tColumn:\n\n\t\t<gui-dropdown>\n\t\t\t<gui-dropdown-item *ngFor=\"let column of columns\"\n\t\t\t\t\t\t\t   (click)=\"onSelectChange(column)\">\n\t\t\t\t<ng-container\n\t\t\t\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t   context: column.context\">\n\t\t\t\t</ng-container>\n\t\t\t</gui-dropdown-item>\n\t\t</gui-dropdown>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    ColumnSelectorComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ColumnSelectorComponent.propDecorators = {
        columns: [{ type: Input }],
        columnSelected: [{ type: Output }]
    };
    return ColumnSelectorComponent;
}(PureComponent));
export { ColumnSelectorComponent };
if (false) {
    /** @type {?} */
    ColumnSelectorComponent.prototype.columns;
    /** @type {?} */
    ColumnSelectorComponent.prototype.columnSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL21lbnUvY29sdW1uLXNlbGVjdG9yL2NvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFbkY7SUFvQjZDLG1EQUFhO0lBUXpELGlDQUFZLFVBQXNCO1FBQWxDLFlBQ0Msa0JBQU0sVUFBVSxDQUFDLFNBQ2pCO1FBSkQsb0JBQWMsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQzs7SUFJN0QsQ0FBQzs7Ozs7SUFFRCxnREFBYzs7OztJQUFkLFVBQWUsTUFBK0I7UUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFUyxpREFBZTs7OztJQUF6QjtRQUNDLE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQzs7Z0JBdENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUNBQW1DO29CQUM3QyxRQUFRLEVBQUUsZ1dBY1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkF2QjRDLFVBQVU7OzswQkEwQnJELEtBQUs7aUNBR0wsTUFBTTs7SUFjUiw4QkFBQztDQUFBLEFBdkNELENBb0I2QyxhQUFhLEdBbUJ6RDtTQW5CWSx1QkFBdUI7OztJQUVuQywwQ0FDd0M7O0lBRXhDLGlEQUM2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktY29sdW1uLXNlbGVjdG9yXVtjb2x1bW5zXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHRDb2x1bW46XG5cblx0XHQ8Z3VpLWRyb3Bkb3duPlxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiXG5cdFx0XHRcdFx0XHRcdCAgIChjbGljayk9XCJvblNlbGVjdENoYW5nZShjb2x1bW4pXCI+XG5cdFx0XHRcdDxuZy1jb250YWluZXJcblx0XHRcdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sdW1uLnZpZXdUZW1wbGF0ZTtcblx0XHRcdFx0XHRcdCAgIGNvbnRleHQ6IGNvbHVtbi5jb250ZXh0XCI+XG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblx0XHQ8L2d1aS1kcm9wZG93bj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5TZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PigpO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG9uU2VsZWN0Q2hhbmdlKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtblNlbGVjdGVkLmVtaXQoY29sdW1uKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1jb2x1bW4tc2VsZWN0b3InO1xuXHR9XG59XG4iXX0=