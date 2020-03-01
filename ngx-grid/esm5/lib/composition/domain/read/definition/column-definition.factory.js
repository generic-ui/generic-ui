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
        var columnDef = new ColumnDefinition(column.getField(), column.getColumnId(), column.isEnabled(), column.getDataType(), column.getView(), column.getHeader(), column.sortOrder, column.getSortingEnabled());
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
        var columnDef = new ColumnDefinition(activeColumn.getField(), activeColumn.getColumnId(), true, // remove,
        activeColumn.getDataType(), activeColumn.getView(), activeColumn.getHeader(), activeColumn.getSortStatus(), activeColumn.getSortingEnabled());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSzNDO0lBR0MsaUNBQW9CLHNCQUE4QyxFQUN2RCxzQkFBOEM7UUFEckMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUN2RCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBQ3pELENBQUM7Ozs7O0lBSUQsd0NBQU07Ozs7SUFBTixVQUFPLE1BQXlDO1FBRS9DLElBQUksTUFBTSxZQUFZLFlBQVksRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakQ7SUFDRixDQUFDOzs7Ozs7SUFFTyx3REFBc0I7Ozs7O0lBQTlCLFVBQStCLE1BQW9COztZQUU5QyxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsQ0FDbkMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUNqQixNQUFNLENBQUMsV0FBVyxFQUFFLEVBQ3BCLE1BQU0sQ0FBQyxT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WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vdmlldy92aWV3LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2VkaXQvZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vY29sdW1uLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sdW1uRGVmaW5pdGlvbkZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld1RlbXBsYXRlUmVwb3NpdG9yeTogVmlld1RlbXBsYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBlZGl0VGVtcGxhdGVSZXBvc2l0b3J5OiBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uO1xuXHRjcmVhdGUoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uO1xuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5FbnRpdHkgfCBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRcdGlmIChjb2x1bW4gaW5zdGFuY2VvZiBDb2x1bW5FbnRpdHkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUZyb21Db2x1bW5FbnRpdHkoY29sdW1uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRnJvbUFjdGl2ZUNvbHVtbkVudGl0eShjb2x1bW4pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRnJvbUNvbHVtbkVudGl0eShjb2x1bW46IENvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb24ge1xuXG5cdFx0bGV0IGNvbHVtbkRlZiA9IG5ldyBDb2x1bW5EZWZpbml0aW9uKFxuXHRcdFx0Y29sdW1uLmdldEZpZWxkKCksXG5cdFx0XHRjb2x1bW4uZ2V0Q29sdW1uSWQoKSxcblx0XHRcdGNvbHVtbi5pc0VuYWJsZWQoKSxcblx0XHRcdGNvbHVtbi5nZXREYXRhVHlwZSgpLFxuXHRcdFx0Y29sdW1uLmdldFZpZXcoKSxcblx0XHRcdGNvbHVtbi5nZXRIZWFkZXIoKSxcblx0XHRcdGNvbHVtbi5zb3J0T3JkZXIsXG5cdFx0XHRjb2x1bW4uZ2V0U29ydGluZ0VuYWJsZWQoKVxuXHRcdCk7XG5cblx0XHRjb2x1bW5EZWYuY2VsbFRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKGNvbHVtbi5nZXRDZWxsVmlldygpKTtcblx0XHRjb2x1bW5EZWYuaGVhZGVyVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoQ2VsbFZpZXcuVEVYVCk7XG5cblx0XHRjb2x1bW5EZWYudGVtcGxhdGVGdW5jdGlvbiA9IGNvbHVtbi5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCk7XG5cblx0XHRjb2x1bW5EZWYuZWRpdFRlbXBsYXRlID0gdGhpcy5maW5kRWRpdFRlbXBsYXRlKGNvbHVtbi5nZXREYXRhVHlwZSgpKTtcblxuXHRcdGNvbHVtbkRlZi53aWR0aCA9ICtjb2x1bW4ud2lkdGg7XG5cblx0XHRyZXR1cm4gY29sdW1uRGVmO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVGcm9tQWN0aXZlQ29sdW1uRW50aXR5KGFjdGl2ZUNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbiB7XG5cblx0XHRsZXQgY29sdW1uRGVmID0gbmV3IENvbHVtbkRlZmluaXRpb24oXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0RmllbGQoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRDb2x1bW5JZCgpLFxuXHRcdFx0dHJ1ZSwgLy8gcmVtb3ZlLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldERhdGFUeXBlKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0VmlldygpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldEhlYWRlcigpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldFNvcnRTdGF0dXMoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRTb3J0aW5nRW5hYmxlZCgpXG5cdFx0KTtcblxuXHRcdGNvbHVtbkRlZi5jZWxsVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoYWN0aXZlQ29sdW1uLmdldENlbGxWaWV3KCkpO1xuXHRcdGNvbHVtbkRlZi5oZWFkZXJUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShDZWxsVmlldy5URVhUKTtcblxuXHRcdGNvbHVtbkRlZi50ZW1wbGF0ZUZ1bmN0aW9uID0gYWN0aXZlQ29sdW1uLmdldFRlbXBsYXRlRnVuY3Rpb24oKTtcblxuXHRcdGNvbHVtbkRlZi5lZGl0VGVtcGxhdGUgPSB0aGlzLmZpbmRFZGl0VGVtcGxhdGUoYWN0aXZlQ29sdW1uLmdldERhdGFUeXBlKCkpO1xuXG5cdFx0Y29sdW1uRGVmLndpZHRoID0gK2FjdGl2ZUNvbHVtbi5nZXRXaWR0aCgpO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZjtcblx0fVxuXG5cdGNyZWF0ZUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uRW50aXR5KSA9PiB0aGlzLmNyZWF0ZShjb2x1bW4pKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZFZpZXdUZW1wbGF0ZSh2aWV3OiBDZWxsVmlldyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXG5cdFx0aWYgKHZpZXcgPT09IENlbGxWaWV3LkZVTkNUSU9OKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZShDZWxsVmlldy5GVU5DVElPTik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkuZmluZFRlbXBsYXRlKHZpZXcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZmluZEVkaXRUZW1wbGF0ZShkYXRhVHlwZTogRGF0YVR5cGUpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5lZGl0VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZShkYXRhVHlwZSk7XG5cdH1cblxufVxuIl19