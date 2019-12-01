/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { StructureCommandService } from '../../../app/structure/structure-command.service';
import { StructureColumnConfigService } from '../config/structure.column-config.service';
import { SortStatus } from '../../../domain/composition/command/sort/sort-status';
var StructureHeaderColumnsComponent = /** @class */ (function () {
    function StructureHeaderColumnsComponent(structureCommandService, structureColumnConfigService) {
        this.structureCommandService = structureCommandService;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.toggleSort = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.structureCommandService.toggleSort(column.getFieldId());
    };
    /**
     * @param {?} column
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.isSortAsc = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        return column.getSortStatus() === SortStatus.ASC;
    };
    /**
     * @param {?} column
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.isSortDesc = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        return column.getSortStatus() === SortStatus.DESC;
    };
    /**
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.openConfigDialog = /**
     * @return {?}
     */
    function () {
        this.structureColumnConfigService.open();
    };
    /**
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.closeConfigDialog = /**
     * @return {?}
     */
    function () {
        this.structureColumnConfigService.close();
    };
    StructureHeaderColumnsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-header-columns',
                    template: "<div *ngFor=\"let cell of columns\"\n\t [style.width.px]=\"cell.width\"\n\t (click)=\"toggleSort(cell)\"\n\t class=\"gui-header-cell\">\n\n\t<span>\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.viewTemplate;\n\t\t\t\t\t\t\t\t   context: cell.context\">\n\t\t</ng-container>\n\t</span>\n\n\t<div class=\"gui-header-menu\">\n<!--\t\t<div class=\"gui-header-menu-icon\"-->\n<!--\t\t\t (click)=\"openConfigDialog()\">-->\n<!--\t\t</div>-->\n\n\t\t<div [ngClass]=\"{'gui-sort-asc': isSortAsc(cell), 'gui-sort-desc':  isSortDesc(cell)}\"\n\t\t\t class=\"gui-sort\">\n\t\t</div>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureHeaderColumnsComponent.ctorParameters = function () { return [
        { type: StructureCommandService },
        { type: StructureColumnConfigService }
    ]; };
    StructureHeaderColumnsComponent.propDecorators = {
        columns: [{ type: Input }]
    };
    return StructureHeaderColumnsComponent;
}());
export { StructureHeaderColumnsComponent };
if (false) {
    /** @type {?} */
    StructureHeaderColumnsComponent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.structureColumnConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9oZWFkZXIvY29sdW1ucy9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFJbEY7SUFXQyx5Q0FBb0IsdUJBQWdELEVBQ3pELDRCQUEwRDtRQURqRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ3pELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFDckUsQ0FBQzs7Ozs7SUFFRCxvREFBVTs7OztJQUFWLFVBQVcsTUFBK0I7UUFDekMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVELG1EQUFTOzs7O0lBQVQsVUFBVSxNQUErQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxVQUFVLENBQUMsR0FBRyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsb0RBQVU7Ozs7SUFBVixVQUFXLE1BQStCO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELDBEQUFnQjs7O0lBQWhCO1FBQ0MsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCwyREFBaUI7OztJQUFqQjtRQUNDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOztnQkFqQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLGdtQkFBd0Q7b0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBWFEsdUJBQXVCO2dCQUN2Qiw0QkFBNEI7OzswQkFhbkMsS0FBSzs7SUEwQlAsc0NBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQTVCWSwrQkFBK0I7OztJQUUzQyxrREFDd0M7Ozs7O0lBRTVCLGtFQUF3RDs7Ozs7SUFDakUsdUVBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hcHAvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFNvcnRTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9zb3J0L3NvcnQtc3RhdHVzJztcblxuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UpIHtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCkge1xuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UudG9nZ2xlU29ydChjb2x1bW4uZ2V0RmllbGRJZCgpKTtcblx0fVxuXG5cdGlzU29ydEFzYyhjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbHVtbi5nZXRTb3J0U3RhdHVzKCkgPT09IFNvcnRTdGF0dXMuQVNDO1xuXHR9XG5cblx0aXNTb3J0RGVzYyhjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbHVtbi5nZXRTb3J0U3RhdHVzKCkgPT09IFNvcnRTdGF0dXMuREVTQztcblx0fVxuXG5cdG9wZW5Db25maWdEaWFsb2coKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLm9wZW4oKTtcblx0fVxuXG5cdGNsb3NlQ29uZmlnRGlhbG9nKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG59XG4iXX0=