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
                    template: "\n\n\t\tColumn:\n\n\t\t<gui-dropdown>\n\t\t\t<gui-dropdown-item *ngFor=\"let column of columns\"\n\t\t\t\t\t\t\t   (click)=\"onSelectChange(column)\">\n\t\t\t\t<ng-container\n\t\t\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t   context: column.context\">\n\t\t\t\t</ng-container>\n\t\t\t</gui-dropdown-item>\n\t\t</gui-dropdown>\n\n\t",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL21lbnUvY29sdW1uLXNlbGVjdG9yL2NvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFbkY7SUFvQjZDLG1EQUFhO0lBUXpELGlDQUFZLFVBQXNCO1FBQWxDLFlBQ0Msa0JBQU0sVUFBVSxDQUFDLFNBQ2pCO1FBSkQsb0JBQWMsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQzs7SUFJN0QsQ0FBQzs7Ozs7SUFFRCxnREFBYzs7OztJQUFkLFVBQWUsTUFBK0I7UUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFUyxpREFBZTs7OztJQUF6QjtRQUNDLE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQzs7Z0JBdENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUNBQW1DO29CQUM3QyxRQUFRLEVBQUUsOFZBY1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkF2QjRDLFVBQVU7OzswQkEwQnJELEtBQUs7aUNBR0wsTUFBTTs7SUFjUiw4QkFBQztDQUFBLEFBdkNELENBb0I2QyxhQUFhLEdBbUJ6RDtTQW5CWSx1QkFBdUI7OztJQUVuQywwQ0FDd0M7O0lBRXhDLGlEQUM2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktY29sdW1uLXNlbGVjdG9yXVtjb2x1bW5zXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHRDb2x1bW46XG5cblx0XHQ8Z3VpLWRyb3Bkb3duPlxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiXG5cdFx0XHRcdFx0XHRcdCAgIChjbGljayk9XCJvblNlbGVjdENoYW5nZShjb2x1bW4pXCI+XG5cdFx0XHRcdDxuZy1jb250YWluZXJcblx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNvbHVtbi52aWV3VGVtcGxhdGU7XG5cdFx0XHRcdFx0XHQgICBjb250ZXh0OiBjb2x1bW4uY29udGV4dFwiPlxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cdFx0PC9ndWktZHJvcGRvd24+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ29sdW1uU2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0QE91dHB1dCgpXG5cdGNvbHVtblNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4oKTtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRvblNlbGVjdENoYW5nZShjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5TZWxlY3RlZC5lbWl0KGNvbHVtbik7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktY29sdW1uLXNlbGVjdG9yJztcblx0fVxufVxuIl19