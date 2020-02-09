/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ViewTemplateRepository } from '../view/view-template.repository';
import { EditTemplateRepository } from '../edit/edit-template.repository';
import { ColumnEntity } from '../../command/column/column.entity';
import { ColumnDefinition } from './column-definition';
import { CellView } from '../../cell-view';
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
        var columnDef = new ColumnDefinition(column.getField(), column.getColumnId(), column.isEnabled(), column.getHeader(), column.sortStatus);
        columnDef.cellTemplate = this.findViewTemplate(column.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        columnDef.templateFunction = column.getTemplateFunction();
        columnDef.editTemplate = this.findEditTemplate(column.getDataType());
        columnDef.width = +column.width;
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
        var columnDef = new ColumnDefinition(activeColumn.getField(), activeColumn.getColumnId(), true, // remove
        activeColumn.getHeader(), activeColumn.getSortStatus());
        columnDef.cellTemplate = this.findViewTemplate(activeColumn.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        columnDef.templateFunction = activeColumn.getTemplateFunction();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSzNDO0lBR0MsaUNBQW9CLHNCQUE4QyxFQUN2RCxzQkFBOEM7UUFEckMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUN2RCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBQ3pELENBQUM7Ozs7O0lBSUQsd0NBQU07Ozs7SUFBTixVQUFPLE1BQXlDO1FBRS9DLElBQUksTUFBTSxZQUFZLFlBQVksRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakQ7SUFDRixDQUFDOzs7Ozs7SUFFTyx3REFBc0I7Ozs7O0lBQTlCLFVBQStCLE1BQW9COztZQUU5QyxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsQ0FDbkMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUNqQixNQUFNLENBQUMsV0FBVyxFQUFFLEVBQ3BCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFDbEIsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUNsQixNQUFNLENBQUMsVUFBVSxDQUNqQjtRQUVELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRSxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFMUQsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFckUsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFaEMsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBRU8sOERBQTRCOzs7OztJQUFwQyxVQUFxQyxZQUFnQzs7WUFFaEUsU0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQ25DLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFDdkIsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUMxQixJQUFJLEVBQUUsU0FBUztRQUNmLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFDeEIsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUM1QjtRQUVELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRSxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFaEUsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFM0UsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUUzQyxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELCtDQUFhOzs7O0lBQWIsVUFBYyxPQUE0QjtRQUExQyxpQkFFQztRQURBLE9BQU8sT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW9CLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFuQixDQUFtQixFQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRU8sa0RBQWdCOzs7OztJQUF4QixVQUF5QixJQUFjO1FBRXRDLElBQUksSUFBSSxLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3REO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0RBQWdCOzs7OztJQUF4QixVQUF5QixRQUFrQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Z0JBN0VELFVBQVU7Ozs7Z0JBVEYsc0JBQXNCO2dCQUN0QixzQkFBc0I7O0lBdUYvQiw4QkFBQztDQUFBLEFBL0VELElBK0VDO1NBOUVZLHVCQUF1Qjs7Ozs7O0lBRXZCLHlEQUFzRDs7Ozs7SUFDL0QseURBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVmlld1RlbXBsYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL3ZpZXcvdmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9lZGl0L2VkaXQtdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi8uLi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuL2NvbHVtbi1kZWZpbml0aW9uJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbHVtbkRlZmluaXRpb25GYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdUZW1wbGF0ZVJlcG9zaXRvcnk6IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZWRpdFRlbXBsYXRlUmVwb3NpdG9yeTogRWRpdFRlbXBsYXRlUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Y3JlYXRlKGNvbHVtbjogQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbjtcblx0Y3JlYXRlKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbjtcblx0Y3JlYXRlKGNvbHVtbjogQ29sdW1uRW50aXR5IHwgQWN0aXZlQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbiB7XG5cblx0XHRpZiAoY29sdW1uIGluc3RhbmNlb2YgQ29sdW1uRW50aXR5KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVGcm9tQ29sdW1uRW50aXR5KGNvbHVtbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUZyb21BY3RpdmVDb2x1bW5FbnRpdHkoY29sdW1uKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUZyb21Db2x1bW5FbnRpdHkoY29sdW1uOiBDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRcdGxldCBjb2x1bW5EZWYgPSBuZXcgQ29sdW1uRGVmaW5pdGlvbihcblx0XHRcdGNvbHVtbi5nZXRGaWVsZCgpLFxuXHRcdFx0Y29sdW1uLmdldENvbHVtbklkKCksXG5cdFx0XHRjb2x1bW4uaXNFbmFibGVkKCksXG5cdFx0XHRjb2x1bW4uZ2V0SGVhZGVyKCksXG5cdFx0XHRjb2x1bW4uc29ydFN0YXR1c1xuXHRcdCk7XG5cblx0XHRjb2x1bW5EZWYuY2VsbFRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKGNvbHVtbi5nZXRDZWxsVmlldygpKTtcblx0XHRjb2x1bW5EZWYuaGVhZGVyVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoQ2VsbFZpZXcuVEVYVCk7XG5cblx0XHRjb2x1bW5EZWYudGVtcGxhdGVGdW5jdGlvbiA9IGNvbHVtbi5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCk7XG5cblx0XHRjb2x1bW5EZWYuZWRpdFRlbXBsYXRlID0gdGhpcy5maW5kRWRpdFRlbXBsYXRlKGNvbHVtbi5nZXREYXRhVHlwZSgpKTtcblxuXHRcdGNvbHVtbkRlZi53aWR0aCA9ICtjb2x1bW4ud2lkdGg7XG5cblx0XHRyZXR1cm4gY29sdW1uRGVmO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVGcm9tQWN0aXZlQ29sdW1uRW50aXR5KGFjdGl2ZUNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbiB7XG5cblx0XHRsZXQgY29sdW1uRGVmID0gbmV3IENvbHVtbkRlZmluaXRpb24oXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0RmllbGQoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRDb2x1bW5JZCgpLFxuXHRcdFx0dHJ1ZSwgLy8gcmVtb3ZlXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0SGVhZGVyKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0U29ydFN0YXR1cygpXG5cdFx0KTtcblxuXHRcdGNvbHVtbkRlZi5jZWxsVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoYWN0aXZlQ29sdW1uLmdldENlbGxWaWV3KCkpO1xuXHRcdGNvbHVtbkRlZi5oZWFkZXJUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShDZWxsVmlldy5URVhUKTtcblxuXHRcdGNvbHVtbkRlZi50ZW1wbGF0ZUZ1bmN0aW9uID0gYWN0aXZlQ29sdW1uLmdldFRlbXBsYXRlRnVuY3Rpb24oKTtcblxuXHRcdGNvbHVtbkRlZi5lZGl0VGVtcGxhdGUgPSB0aGlzLmZpbmRFZGl0VGVtcGxhdGUoYWN0aXZlQ29sdW1uLmdldERhdGFUeXBlKCkpO1xuXG5cdFx0Y29sdW1uRGVmLndpZHRoID0gK2FjdGl2ZUNvbHVtbi5nZXRXaWR0aCgpO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZjtcblx0fVxuXG5cdGNyZWF0ZUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uRW50aXR5KSA9PiB0aGlzLmNyZWF0ZShjb2x1bW4pKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZFZpZXdUZW1wbGF0ZSh2aWV3OiBDZWxsVmlldyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXG5cdFx0aWYgKHZpZXcgPT09IENlbGxWaWV3LkZVTkNUSU9OKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZShDZWxsVmlldy5GVU5DVElPTik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkuZmluZFRlbXBsYXRlKHZpZXcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZmluZEVkaXRUZW1wbGF0ZShkYXRhVHlwZTogRGF0YVR5cGUpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5lZGl0VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZShkYXRhVHlwZSk7XG5cdH1cblxufVxuIl19