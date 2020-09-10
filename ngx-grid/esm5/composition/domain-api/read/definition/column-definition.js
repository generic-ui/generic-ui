/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelEntity } from '@generic-ui/hermes';
import { SortOrder } from '../../../domain/column/sort/sort-order';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellContext } from './cell-context';
import { FieldId } from '../../../../structure/field/domain/core/field/field.id';
import { CellTemplateWithAccessor } from './cell-template-with-accessor';
import { CellValue } from './cell-value';
var ColumnDefinition = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnDefinition, _super);
    function ColumnDefinition(field, columnDefinitionId, // REFACTOR Id first argument
    enabled, type, // REFACTOR
    view, // REFACTOR
    align, // REFACTOR
    header, cellEditingEnabled, sort, sortable) {
        if (sort === void 0) { sort = SortOrder.NONE; }
        if (sortable === void 0) { sortable = true; }
        var _this = _super.call(this, columnDefinitionId) || this;
        _this.type = type;
        _this.view = view;
        _this.align = align;
        _this.sortable = true;
        _this.field = field;
        _this.columnDefinitionId = columnDefinitionId;
        _this.enabled = enabled;
        _this.header = header;
        _this.cellEditingEnabled = cellEditingEnabled;
        _this.sortStatus = sort;
        _this.sortable = sortable;
        return _this;
    }
    /**
     * @return {?}
     */
    ColumnDefinition.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    /**
     * @param {?} header
     * @return {?}
     */
    ColumnDefinition.prototype.setHeader = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        this.header = header;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    ColumnDefinition.prototype.setField = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.field = field;
    };
    /**
     * @param {?} templateFun
     * @return {?}
     */
    ColumnDefinition.prototype.setTemplateFunction = /**
     * @param {?} templateFun
     * @return {?}
     */
    function (templateFun) {
        this.templateFunction = templateFun;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ColumnDefinition.prototype.getHeaderCellTemplateWithContext = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var header = this.header || '';
        /** @type {?} */
        var headerCellContext;
        if (typeof header === 'string') {
            headerCellContext = new CellContext(CellValue.text(header));
        }
        else if (typeof header === 'function') {
            headerCellContext = new CellContext(CellValue.text(header(index)));
        }
        /** @type {?} */
        var fieldId = new FieldId(this.field.getId().getId());
        return new CellTemplateWithContext(this.headerTemplate, this.editTemplate, headerCellContext, this.width, fieldId, this.columnDefinitionId, this.sortStatus, this.enabled, this.sortable, this.align);
    };
    /**
     * @return {?}
     */
    ColumnDefinition.prototype.getContentCellTemplateWithAccessor = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var accessor = (/**
         * @param {?} entity
         * @return {?}
         */
        function (entity) {
            return _this.field.getAccessor()(entity);
        });
        /** @type {?} */
        var searchAccessor = (/**
         * @param {?} entity
         * @return {?}
         */
        function (entity) {
            return _this.field.getSearchAccessor()(entity);
        });
        return new CellTemplateWithAccessor(this.cellTemplate, this.editTemplate, true, this.templateFunction, accessor, searchAccessor, this.width, this.field.getId(), this.align, this.cellEditingEnabled, this.type, this.view);
    };
    return ColumnDefinition;
}(ReadModelEntity));
export { ColumnDefinition };
if (false) {
    /** @type {?} */
    ColumnDefinition.prototype.cellTemplate;
    /** @type {?} */
    ColumnDefinition.prototype.headerTemplate;
    /** @type {?} */
    ColumnDefinition.prototype.editTemplate;
    /** @type {?} */
    ColumnDefinition.prototype.width;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.templateFunction;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.columnDefinitionId;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.field;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.sortable;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.header;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.cellEditingEnabled;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.type;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.view;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.align;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBS3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHekM7SUFBc0MsNENBQW1DO0lBMEJ4RSwwQkFBWSxLQUFrQixFQUMzQixrQkFBc0MsRUFBRSw2QkFBNkI7SUFDckUsT0FBZ0IsRUFDQyxJQUFjLEVBQUUsV0FBVztJQUMzQixJQUFnQixFQUFFLFdBQVc7SUFDN0IsS0FBa0IsRUFBRSxXQUFXO0lBQ2hELE1BQStCLEVBQy9CLGtCQUEyQixFQUMzQixJQUFnQyxFQUNoQyxRQUFlO1FBRGYscUJBQUEsRUFBQSxPQUFrQixTQUFTLENBQUMsSUFBSTtRQUNoQyx5QkFBQSxFQUFBLGVBQWU7UUFUbEIsWUFVQyxrQkFBTSxrQkFBa0IsQ0FBQyxTQVF6QjtRQWZtQixVQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsVUFBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFLLEdBQUwsS0FBSyxDQUFhO1FBYjlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFtQmhDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7O0lBQzFCLENBQUM7Ozs7SUFFRCxvQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxvQ0FBUzs7OztJQUFULFVBQVUsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELG1DQUFROzs7O0lBQVIsVUFBUyxLQUFrQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELDhDQUFtQjs7OztJQUFuQixVQUFvQixXQUErQjtRQUNsRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsMkRBQWdDOzs7O0lBQWhDLFVBQWlDLEtBQWE7O1lBRXpDLE1BQU0sR0FBUSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUU7O1lBQ2xDLGlCQUE4QjtRQUUvQixJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUMvQixpQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDNUQ7YUFBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsRUFBRTtZQUN4QyxpQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkU7O1lBRUssT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdkQsT0FBTyxJQUFJLHVCQUF1QixDQUNqQyxJQUFJLENBQUMsY0FBYyxFQUNuQixJQUFJLENBQUMsWUFBWSxFQUNqQixpQkFBaUIsRUFDakIsSUFBSSxDQUFDLEtBQUssRUFDVixPQUFPLEVBQ1AsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsS0FBSyxDQUNWLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsNkRBQWtDOzs7SUFBbEM7UUFBQSxpQkFzQkM7O1lBcEJNLFFBQVE7Ozs7UUFBRyxVQUFDLE1BQVc7WUFDNUIsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQTs7WUFBRSxjQUFjOzs7O1FBQUcsVUFBQyxNQUFXO1lBQy9CLE9BQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQTtRQUVELE9BQU8sSUFBSSx3QkFBd0IsQ0FDbEMsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxFQUNKLElBQUksQ0FBQyxnQkFBZ0IsRUFDckIsUUFBUSxFQUNSLGNBQWMsRUFDZCxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxJQUFJLENBQ1QsQ0FBQztJQUNILENBQUM7SUFFRix1QkFBQztBQUFELENBQUMsQUFqSEQsQ0FBc0MsZUFBZSxHQWlIcEQ7Ozs7SUEvR0Esd0NBQStCOztJQUUvQiwwQ0FBaUM7O0lBRWpDLHdDQUErQjs7SUFFL0IsaUNBQWM7Ozs7O0lBRWQsNENBQTZDOzs7OztJQUU3Qyw4Q0FBd0Q7Ozs7O0lBRXhELGlDQUEyQjs7Ozs7SUFFM0Isc0NBQThCOzs7OztJQUU5QixvQ0FBaUM7Ozs7O0lBRWpDLGtDQUF3Qzs7Ozs7SUFFeEMsbUNBQXlCOzs7OztJQUV6Qiw4Q0FBb0M7Ozs7O0lBS2pDLGdDQUErQjs7Ozs7SUFDL0IsZ0NBQWlDOzs7OztJQUNqQyxpQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZWFkTW9kZWxFbnRpdHkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IEhlYWRlclRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsQ29udGV4dCB9IGZyb20gJy4vY2VsbC1jb250ZXh0JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uSWQgfSBmcm9tICcuL2NvbHVtbi1kZWZpbml0aW9uLWlkJztcbmltcG9ydCB7IENlbGxWYWx1ZSB9IGZyb20gJy4vY2VsbC12YWx1ZSc7XG5cblxuZXhwb3J0IGNsYXNzIENvbHVtbkRlZmluaXRpb24gZXh0ZW5kcyBSZWFkTW9kZWxFbnRpdHk8Q29sdW1uRGVmaW5pdGlvbklkPiB7XG5cblx0Y2VsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGVkaXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbjogKGk6IGFueSkgPT4gc3RyaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQ7XG5cblx0cHJpdmF0ZSBmaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0cHJpdmF0ZSBzb3J0U3RhdHVzOiBTb3J0T3JkZXI7XG5cblx0cHJpdmF0ZSBzb3J0YWJsZTogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlO1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIGNlbGxFZGl0aW5nRW5hYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihmaWVsZDogQ29sdW1uRmllbGQsXG5cdFx0XHRcdGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCAvLyBSRUZBQ1RPUiBJZCBmaXJzdCBhcmd1bWVudFxuXHRcdFx0XHRlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHR5cGU6IERhdGFUeXBlLCAvLyBSRUZBQ1RPUlxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXdFbnRpdHksIC8vIFJFRkFDVE9SXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxpZ246IENvbHVtbkFsaWduLCAvLyBSRUZBQ1RPUlxuXHRcdFx0XHRoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHRjZWxsRWRpdGluZ0VuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHNvcnQ6IFNvcnRPcmRlciA9IFNvcnRPcmRlci5OT05FLFxuXHRcdFx0XHRzb3J0YWJsZSA9IHRydWUpIHtcblx0XHRzdXBlcihjb2x1bW5EZWZpbml0aW9uSWQpO1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0XHR0aGlzLmNvbHVtbkRlZmluaXRpb25JZCA9IGNvbHVtbkRlZmluaXRpb25JZDtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHRcdHRoaXMuY2VsbEVkaXRpbmdFbmFibGVkID0gY2VsbEVkaXRpbmdFbmFibGVkO1xuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnQ7XG5cdFx0dGhpcy5zb3J0YWJsZSA9IHNvcnRhYmxlO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRzZXRIZWFkZXIoaGVhZGVyOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0fVxuXG5cdHNldEZpZWxkKGZpZWxkOiBDb2x1bW5GaWVsZCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0fVxuXG5cdHNldFRlbXBsYXRlRnVuY3Rpb24odGVtcGxhdGVGdW46IChpOiBhbnkpID0+IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMudGVtcGxhdGVGdW5jdGlvbiA9IHRlbXBsYXRlRnVuO1xuXHR9XG5cblx0Z2V0SGVhZGVyQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoaW5kZXg6IG51bWJlcik6IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IHtcblxuXHRcdGxldCBoZWFkZXI6IGFueSA9IHRoaXMuaGVhZGVyIHx8ICcnLFxuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQ6IENlbGxDb250ZXh0O1xuXG5cdFx0aWYgKHR5cGVvZiBoZWFkZXIgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRoZWFkZXJDZWxsQ29udGV4dCA9IG5ldyBDZWxsQ29udGV4dChDZWxsVmFsdWUudGV4dChoZWFkZXIpKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBoZWFkZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGhlYWRlckNlbGxDb250ZXh0ID0gbmV3IENlbGxDb250ZXh0KENlbGxWYWx1ZS50ZXh0KGhlYWRlcihpbmRleCkpKTtcblx0XHR9XG5cblx0XHRjb25zdCBmaWVsZElkID0gbmV3IEZpZWxkSWQodGhpcy5maWVsZC5nZXRJZCgpLmdldElkKCkpO1xuXG5cdFx0cmV0dXJuIG5ldyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dChcblx0XHRcdHRoaXMuaGVhZGVyVGVtcGxhdGUsXG5cdFx0XHR0aGlzLmVkaXRUZW1wbGF0ZSxcblx0XHRcdGhlYWRlckNlbGxDb250ZXh0LFxuXHRcdFx0dGhpcy53aWR0aCxcblx0XHRcdGZpZWxkSWQsXG5cdFx0XHR0aGlzLmNvbHVtbkRlZmluaXRpb25JZCxcblx0XHRcdHRoaXMuc29ydFN0YXR1cyxcblx0XHRcdHRoaXMuZW5hYmxlZCxcblx0XHRcdHRoaXMuc29ydGFibGUsXG5cdFx0XHR0aGlzLmFsaWduXG5cdFx0KTtcblx0fVxuXG5cdGdldENvbnRlbnRDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IoKTogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIHtcblxuXHRcdGNvbnN0IGFjY2Vzc29yID0gKGVudGl0eTogYW55KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXRBY2Nlc3NvcigpKGVudGl0eSk7XG5cdFx0fSwgc2VhcmNoQWNjZXNzb3IgPSAoZW50aXR5OiBhbnkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmZpZWxkLmdldFNlYXJjaEFjY2Vzc29yKCkoZW50aXR5KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIG5ldyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IoXG5cdFx0XHR0aGlzLmNlbGxUZW1wbGF0ZSxcblx0XHRcdHRoaXMuZWRpdFRlbXBsYXRlLFxuXHRcdFx0dHJ1ZSxcblx0XHRcdHRoaXMudGVtcGxhdGVGdW5jdGlvbixcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0c2VhcmNoQWNjZXNzb3IsXG5cdFx0XHR0aGlzLndpZHRoLFxuXHRcdFx0dGhpcy5maWVsZC5nZXRJZCgpLFxuXHRcdFx0dGhpcy5hbGlnbixcblx0XHRcdHRoaXMuY2VsbEVkaXRpbmdFbmFibGVkLFxuXHRcdFx0dGhpcy50eXBlLFxuXHRcdFx0dGhpcy52aWV3XG5cdFx0KTtcblx0fVxuXG59XG4iXX0=