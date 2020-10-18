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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2NvbHVtbi1zZWxlY3Rvci9jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25IO0lBQUE7UUEwQkMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztJQUs5RCxDQUFDOzs7OztJQUhBLGdEQUFjOzs7O0lBQWQsVUFBZSxNQUErQjtRQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkE5QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxnV0FjVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7MEJBR0MsS0FBSztpQ0FHTCxNQUFNOztJQU1SLDhCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0FYWSx1QkFBdUI7OztJQUVuQywwQ0FDd0M7O0lBRXhDLGlEQUM2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWNvbHVtbi1zZWxlY3Rvcltjb2x1bW5zXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHRDb2x1bW46XG5cblx0XHQ8Z3VpLWRyb3Bkb3duPlxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiXG5cdFx0XHRcdFx0XHRcdCAgIChjbGljayk9XCJvblNlbGVjdENoYW5nZShjb2x1bW4pXCI+XG5cdFx0XHRcdDxuZy1jb250YWluZXJcblx0XHRcdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sdW1uLnZpZXdUZW1wbGF0ZTtcblx0XHRcdFx0XHRcdCAgIGNvbnRleHQ6IGNvbHVtbi5jb250ZXh0XCI+XG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblx0XHQ8L2d1aS1kcm9wZG93bj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5TZWxlY3RvckNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5TZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KCk7XG5cblx0b25TZWxlY3RDaGFuZ2UoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1uU2VsZWN0ZWQuZW1pdChjb2x1bW4pO1xuXHR9XG59XG4iXX0=