/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
var ColumnSelectorComponent = /** @class */ (function () {
    function ColumnSelectorComponent() {
        this.columnSelected = new EventEmitter();
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
    ColumnSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-column-selector[columns]',
                    template: "\n\n\t\tColumn:\n\n\t\t<gui-dropdown>\n\t\t\t<gui-dropdown-item *ngFor=\"let column of columns\"\n\t\t\t\t\t\t\t   (click)=\"onSelectChange(column)\">\n\t\t\t\t<ng-container\n\t\t\t\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t   context: column.context\">\n\t\t\t\t</ng-container>\n\t\t\t</gui-dropdown-item>\n\t\t</gui-dropdown>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    ColumnSelectorComponent.propDecorators = {
        columns: [{ type: Input }],
        columnSelected: [{ type: Output }]
    };
    return ColumnSelectorComponent;
}());
export { ColumnSelectorComponent };
if (false) {
    /** @type {?} */
    ColumnSelectorComponent.prototype.columns;
    /** @type {?} */
    ColumnSelectorComponent.prototype.columnSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2NvbHVtbi1zZWxlY3Rvci9jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25IO0lBQUE7UUEwQkMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztJQUs5RCxDQUFDOzs7OztJQUhBLGdEQUFjOzs7O0lBQWQsVUFBZSxNQUErQjtRQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkE5QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxnV0FjVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7MEJBR0MsS0FBSztpQ0FHTCxNQUFNOztJQU1SLDhCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0FYWSx1QkFBdUI7OztJQUVuQywwQ0FDd0M7O0lBRXhDLGlEQUM2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktY29sdW1uLXNlbGVjdG9yW2NvbHVtbnNdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdENvbHVtbjpcblxuXHRcdDxndWktZHJvcGRvd24+XG5cdFx0XHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCJcblx0XHRcdFx0XHRcdFx0ICAgKGNsaWNrKT1cIm9uU2VsZWN0Q2hhbmdlKGNvbHVtbilcIj5cblx0XHRcdFx0PG5nLWNvbnRhaW5lclxuXHRcdFx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjb2x1bW4udmlld1RlbXBsYXRlO1xuXHRcdFx0XHRcdFx0ICAgY29udGV4dDogY29sdW1uLmNvbnRleHRcIj5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXHRcdDwvZ3VpLWRyb3Bkb3duPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENvbHVtblNlbGVjdG9yQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0QE91dHB1dCgpXG5cdGNvbHVtblNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4oKTtcblxuXHRvblNlbGVjdENoYW5nZShjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5TZWxlY3RlZC5lbWl0KGNvbHVtbik7XG5cdH1cbn1cbiJdfQ==