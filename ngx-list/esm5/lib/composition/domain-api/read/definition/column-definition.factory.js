/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ViewTemplateRepository } from '../view/view-template.repository';
import { EditTemplateRepository } from '../edit/edit-template.repository';
import { ColumnEntity } from '../../../domain/column/column.entity';
import { ColumnDefinition } from './column-definition';
import { CellView } from '../../../domain/column/cell-view';
import { ColumnDefinitionId } from './column-definition-id';
var ColumnDefinitionFactory = /** @class */ (function () {
    function ColumnDefinitionFactory(viewTemplateRepository, editTemplateRepository) {
        this.viewTemplateRepository = viewTemplateRepository;
        this.editTemplateRepository = editTemplateRepository;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    ColumnDefinitionFactory.prototype.create = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (column instanceof ColumnEntity) {
            return this.createFromColumnEntity(column);
        }
        else {
            return this.createFromActiveColumnEntity(column);
        }
    };
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    ColumnDefinitionFactory.prototype.createFromColumnEntity = /**
     * @private
     * @param {?} column
     * @return {?}
     */
    function (column) {
        /** @type {?} */
        var columnDef = new ColumnDefinition(column.getField(), new ColumnDefinitionId(column.getId().toString()), column.isEnabled(), column.getDataType(), column.getView(), column.getAlign(), column.getHeader(), column.isCellEditingEnabled(), column.getSortStatus(), column.getSortingEnabled());
        columnDef.cellTemplate = this.findViewTemplate(column.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        columnDef.setTemplateFunction(column.getTemplateFunction());
        columnDef.editTemplate = this.findEditTemplate(column.getDataType());
        columnDef.width = +column.getWidth();
        return columnDef;
    };
    /**
     * @private
     * @param {?} activeColumn
     * @return {?}
     */
    ColumnDefinitionFactory.prototype.createFromActiveColumnEntity = /**
     * @private
     * @param {?} activeColumn
     * @return {?}
     */
    function (activeColumn) {
        /** @type {?} */
        var columnDef = new ColumnDefinition(activeColumn.getField(), new ColumnDefinitionId(activeColumn.getId().toString()), true, // remove,
        activeColumn.getDataType(), activeColumn.getView(), activeColumn.getAlign(), activeColumn.getHeader(), activeColumn.isCellEditingEnabled(), activeColumn.getSortStatus(), activeColumn.getSortingEnabled());
        columnDef.cellTemplate = this.findViewTemplate(activeColumn.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        columnDef.setTemplateFunction(activeColumn.getTemplateFunction());
        columnDef.editTemplate = this.findEditTemplate(activeColumn.getDataType());
        columnDef.width = +activeColumn.getWidth();
        return columnDef;
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    ColumnDefinitionFactory.prototype.createColumns = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        return columns.map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return _this.create(column); }));
    };
    /**
     * @private
     * @param {?} view
     * @return {?}
     */
    ColumnDefinitionFactory.prototype.findViewTemplate = /**
     * @private
     * @param {?} view
     * @return {?}
     */
    function (view) {
        if (view === CellView.FUNCTION) {
            return this.viewTemplateRepository.findTemplate(CellView.FUNCTION);
        }
        else {
            return this.viewTemplateRepository.findTemplate(view);
        }
    };
    /**
     * @private
     * @param {?} dataType
     * @return {?}
     */
    ColumnDefinitionFactory.prototype.findEditTemplate = /**
     * @private
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return this.editTemplateRepository.findTemplate(dataType);
    };
    ColumnDefinitionFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ColumnDefinitionFactory.ctorParameters = function () { return [
        { type: ViewTemplateRepository },
        { type: EditTemplateRepository }
    ]; };
    return ColumnDefinitionFactory;
}());
export { ColumnDefinitionFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnDefinitionFactory.prototype.viewTemplateRepository;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinitionFactory.prototype.editTemplateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUc1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUc1RDtJQUdDLGlDQUFvQixzQkFBOEMsRUFDdkQsc0JBQThDO1FBRHJDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDdkQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUN6RCxDQUFDOzs7OztJQUlELHdDQUFNOzs7O0lBQU4sVUFBTyxNQUF5QztRQUUvQyxJQUFJLE1BQU0sWUFBWSxZQUFZLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sd0RBQXNCOzs7OztJQUE5QixVQUErQixNQUFvQjs7WUFFOUMsU0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQ25DLE1BQU0sQ0FBQyxRQUFR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QUM7Ozs7OztJQUVPLGtEQUFnQjs7Ozs7SUFBeEIsVUFBeUIsUUFBa0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQXZGRCxVQUFVOzs7O2dCQVZGLHNCQUFzQjtnQkFDdEIsc0JBQXNCOztJQWtHL0IsOEJBQUM7Q0FBQSxBQXpGRCxJQXlGQztTQXhGWSx1QkFBdUI7Ozs7OztJQUV2Qix5REFBc0Q7Ozs7O0lBQy9ELHlEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi92aWV3L3ZpZXctdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuL2NvbHVtbi1kZWZpbml0aW9uJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbklkIH0gZnJvbSAnLi9jb2x1bW4tZGVmaW5pdGlvbi1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbHVtbkRlZmluaXRpb25GYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdUZW1wbGF0ZVJlcG9zaXRvcnk6IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZWRpdFRlbXBsYXRlUmVwb3NpdG9yeTogRWRpdFRlbXBsYXRlUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Y3JlYXRlKGNvbHVtbjogQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbjtcblx0Y3JlYXRlKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbjtcblx0Y3JlYXRlKGNvbHVtbjogQ29sdW1uRW50aXR5IHwgQWN0aXZlQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbiB7XG5cblx0XHRpZiAoY29sdW1uIGluc3RhbmNlb2YgQ29sdW1uRW50aXR5KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVGcm9tQ29sdW1uRW50aXR5KGNvbHVtbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUZyb21BY3RpdmVDb2x1bW5FbnRpdHkoY29sdW1uKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUZyb21Db2x1bW5FbnRpdHkoY29sdW1uOiBDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRcdGxldCBjb2x1bW5EZWYgPSBuZXcgQ29sdW1uRGVmaW5pdGlvbihcblx0XHRcdGNvbHVtbi5nZXRGaWVsZCgpLFxuXHRcdFx0bmV3IENvbHVtbkRlZmluaXRpb25JZChjb2x1bW4uZ2V0SWQoKS50b1N0cmluZygpKSxcblx0XHRcdGNvbHVtbi5pc0VuYWJsZWQoKSxcblx0XHRcdGNvbHVtbi5nZXREYXRhVHlwZSgpLFxuXHRcdFx0Y29sdW1uLmdldFZpZXcoKSxcblx0XHRcdGNvbHVtbi5nZXRBbGlnbigpLFxuXHRcdFx0Y29sdW1uLmdldEhlYWRlcigpLFxuXHRcdFx0Y29sdW1uLmlzQ2VsbEVkaXRpbmdFbmFibGVkKCksXG5cdFx0XHRjb2x1bW4uZ2V0U29ydFN0YXR1cygpLFxuXHRcdFx0Y29sdW1uLmdldFNvcnRpbmdFbmFibGVkKClcblx0XHQpO1xuXG5cdFx0Y29sdW1uRGVmLmNlbGxUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShjb2x1bW4uZ2V0Q2VsbFZpZXcoKSk7XG5cdFx0Y29sdW1uRGVmLmhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LlRFWFQpO1xuXG5cdFx0Y29sdW1uRGVmLnNldFRlbXBsYXRlRnVuY3Rpb24oY29sdW1uLmdldFRlbXBsYXRlRnVuY3Rpb24oKSk7XG5cblx0XHRjb2x1bW5EZWYuZWRpdFRlbXBsYXRlID0gdGhpcy5maW5kRWRpdFRlbXBsYXRlKGNvbHVtbi5nZXREYXRhVHlwZSgpKTtcblxuXHRcdGNvbHVtbkRlZi53aWR0aCA9ICtjb2x1bW4uZ2V0V2lkdGgoKTtcblxuXHRcdHJldHVybiBjb2x1bW5EZWY7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUZyb21BY3RpdmVDb2x1bW5FbnRpdHkoYWN0aXZlQ29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRcdGxldCBjb2x1bW5EZWYgPSBuZXcgQ29sdW1uRGVmaW5pdGlvbihcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRGaWVsZCgpLFxuXHRcdFx0bmV3IENvbHVtbkRlZmluaXRpb25JZChhY3RpdmVDb2x1bW4uZ2V0SWQoKS50b1N0cmluZygpKSxcblx0XHRcdHRydWUsIC8vIHJlbW92ZSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXREYXRhVHlwZSgpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldFZpZXcoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRBbGlnbigpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldEhlYWRlcigpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmlzQ2VsbEVkaXRpbmdFbmFibGVkKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0U29ydFN0YXR1cygpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldFNvcnRpbmdFbmFibGVkKClcblx0XHQpO1xuXG5cdFx0Y29sdW1uRGVmLmNlbGxUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShhY3RpdmVDb2x1bW4uZ2V0Q2VsbFZpZXcoKSk7XG5cdFx0Y29sdW1uRGVmLmhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LlRFWFQpO1xuXG5cdFx0Y29sdW1uRGVmLnNldFRlbXBsYXRlRnVuY3Rpb24oYWN0aXZlQ29sdW1uLmdldFRlbXBsYXRlRnVuY3Rpb24oKSk7XG5cblx0XHRjb2x1bW5EZWYuZWRpdFRlbXBsYXRlID0gdGhpcy5maW5kRWRpdFRlbXBsYXRlKGFjdGl2ZUNvbHVtbi5nZXREYXRhVHlwZSgpKTtcblxuXHRcdGNvbHVtbkRlZi53aWR0aCA9ICthY3RpdmVDb2x1bW4uZ2V0V2lkdGgoKTtcblxuXHRcdHJldHVybiBjb2x1bW5EZWY7XG5cdH1cblxuXHRjcmVhdGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4pOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkVudGl0eSkgPT4gdGhpcy5jcmVhdGUoY29sdW1uKSk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRWaWV3VGVtcGxhdGUodmlldzogQ2VsbFZpZXcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblxuXHRcdGlmICh2aWV3ID09PSBDZWxsVmlldy5GVU5DVElPTikge1xuXHRcdFx0cmV0dXJuIHRoaXMudmlld1RlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUoQ2VsbFZpZXcuRlVOQ1RJT04pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZSh2aWV3KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZpbmRFZGl0VGVtcGxhdGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVGVtcGxhdGVSZWY8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZWRpdFRlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUoZGF0YVR5cGUpO1xuXHR9XG5cbn1cbiJdfQ==