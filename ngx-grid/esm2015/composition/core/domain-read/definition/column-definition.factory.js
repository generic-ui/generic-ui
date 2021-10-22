/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ViewTemplateRepository } from '../view/view-template.repository';
import { EditTemplateRepository } from '../edit/edit-template.repository';
import { ColumnEntity } from '../../domain/column/column.entity';
import { ColumnDefinition } from './column-definition';
import { CellView } from '../../domain/column/cell-view';
import { ColumnDefinitionId } from '../../api/column/column-definition-id';
export class ColumnDefinitionFactory {
    /**
     * @param {?} viewTemplateRepository
     * @param {?} editTemplateRepository
     */
    constructor(viewTemplateRepository, editTemplateRepository) {
        this.viewTemplateRepository = viewTemplateRepository;
        this.editTemplateRepository = editTemplateRepository;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    create(column) {
        if (column instanceof ColumnEntity) {
            return this.createFromColumnEntity(column);
        }
        else {
            return this.createFromActiveColumnEntity(column);
        }
    }
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    createFromColumnEntity(column) {
        /** @type {?} */
        const columnDef = new ColumnDefinition(column.getField(), new ColumnDefinitionId(column.getId().toString()), column.isEnabled(), column.getDataType(), column.getView(), column.getAlign(), column.getHeader(), column.isCellEditingEnabled(), column.getSortStatus(), column.getSortingEnabled());
        if (column.getCellView() === CellView.NG_TEMPLATE) {
            columnDef.cellTemplate = column.getColumnConfig().templateRef;
        }
        else {
            columnDef.cellTemplate = this.findViewTemplate(column.getCellView());
        }
        if (typeof column.getHeader() === 'function') {
            columnDef.headerTemplate = this.findViewTemplate(CellView.FUNCTION);
        }
        else {
            columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        }
        columnDef.setTemplateFunction(column.getTemplateFunction());
        columnDef.setFormatterFunction(column.getFormatterFunction());
        columnDef.editTemplate = this.findEditTemplate(column.getDataType());
        columnDef.width = +column.getWidth();
        return columnDef;
    }
    /**
     * @private
     * @param {?} activeColumn
     * @return {?}
     */
    createFromActiveColumnEntity(activeColumn) {
        /** @type {?} */
        const columnDef = new ColumnDefinition(activeColumn.getField(), new ColumnDefinitionId(activeColumn.getId().toString()), true, // remove,
        activeColumn.getDataType(), activeColumn.getView(), activeColumn.getAlign(), activeColumn.getHeader(), activeColumn.isCellEditingEnabled(), activeColumn.getSortStatus(), activeColumn.getSortingEnabled());
        if (activeColumn.getCellView() === CellView.NG_TEMPLATE) {
            columnDef.cellTemplate = activeColumn.getColumnConfig().templateRef;
        }
        else {
            columnDef.cellTemplate = this.findViewTemplate(activeColumn.getCellView());
        }
        if (typeof activeColumn.getHeader() === 'function') {
            columnDef.headerTemplate = this.findViewTemplate(CellView.FUNCTION);
        }
        else {
            columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        }
        columnDef.setTemplateFunction(activeColumn.getTemplateFunction());
        columnDef.setFormatterFunction(activeColumn.getFormatterFunction());
        columnDef.editTemplate = this.findEditTemplate(activeColumn.getDataType());
        columnDef.width = +activeColumn.getWidth();
        return columnDef;
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    createColumns(columns) {
        return columns.map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => this.create(column)));
    }
    /**
     * @private
     * @param {?} view
     * @return {?}
     */
    findViewTemplate(view) {
        if (view === CellView.FUNCTION) {
            return this.viewTemplateRepository.findTemplate(CellView.FUNCTION);
        }
        else {
            return this.viewTemplateRepository.findTemplate(view);
        }
    }
    /**
     * @private
     * @param {?} dataType
     * @return {?}
     */
    findEditTemplate(dataType) {
        return this.editTemplateRepository.findTemplate(dataType);
    }
}
ColumnDefinitionFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ColumnDefinitionFactory.ctorParameters = () => [
    { type: ViewTemplateRepository },
    { type: EditTemplateRepository }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUd6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUkzRSxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUVuQyxZQUE2QixzQkFBOEMsRUFDdkQsc0JBQThDO1FBRHJDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDdkQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUNsRSxDQUFDOzs7OztJQUlELE1BQU0sQ0FBQyxNQUF5QztRQUUvQyxJQUFJLE1BQU0sWUFBWSxZQUFZLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsTUFBb0I7O2NBRTVDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixDQUNyQyxNQUFNLENBQUMsUUFBUSxF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WUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUNsRSxTQUFTLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUVwRSxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUUzRSxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNDLE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQTRCO1FBQ3pDLE9BQU8sT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxJQUFjO1FBRXRDLElBQUksSUFBSSxLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3REO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsUUFBa0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQTNHRCxVQUFVOzs7O1lBVkYsc0JBQXNCO1lBQ3RCLHNCQUFzQjs7Ozs7OztJQVlsQix5REFBK0Q7Ozs7O0lBQ3hFLHlEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi92aWV3L3ZpZXctdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuL2NvbHVtbi1kZWZpbml0aW9uJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbklkIH0gZnJvbSAnLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4tZGVmaW5pdGlvbi1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbHVtbkRlZmluaXRpb25GYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHZpZXdUZW1wbGF0ZVJlcG9zaXRvcnk6IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWRpdFRlbXBsYXRlUmVwb3NpdG9yeTogRWRpdFRlbXBsYXRlUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Y3JlYXRlKGNvbHVtbjogQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbjtcblx0Y3JlYXRlKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbjtcblx0Y3JlYXRlKGNvbHVtbjogQ29sdW1uRW50aXR5IHwgQWN0aXZlQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbiB7XG5cblx0XHRpZiAoY29sdW1uIGluc3RhbmNlb2YgQ29sdW1uRW50aXR5KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVGcm9tQ29sdW1uRW50aXR5KGNvbHVtbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUZyb21BY3RpdmVDb2x1bW5FbnRpdHkoY29sdW1uKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUZyb21Db2x1bW5FbnRpdHkoY29sdW1uOiBDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRcdGNvbnN0IGNvbHVtbkRlZiA9IG5ldyBDb2x1bW5EZWZpbml0aW9uKFxuXHRcdFx0Y29sdW1uLmdldEZpZWxkKCksXG5cdFx0XHRuZXcgQ29sdW1uRGVmaW5pdGlvbklkKGNvbHVtbi5nZXRJZCgpLnRvU3RyaW5nKCkpLFxuXHRcdFx0Y29sdW1uLmlzRW5hYmxlZCgpLFxuXHRcdFx0Y29sdW1uLmdldERhdGFUeXBlKCksXG5cdFx0XHRjb2x1bW4uZ2V0VmlldygpLFxuXHRcdFx0Y29sdW1uLmdldEFsaWduKCksXG5cdFx0XHRjb2x1bW4uZ2V0SGVhZGVyKCksXG5cdFx0XHRjb2x1bW4uaXNDZWxsRWRpdGluZ0VuYWJsZWQoKSxcblx0XHRcdGNvbHVtbi5nZXRTb3J0U3RhdHVzKCksXG5cdFx0XHRjb2x1bW4uZ2V0U29ydGluZ0VuYWJsZWQoKVxuXHRcdCk7XG5cblx0XHRpZiAoY29sdW1uLmdldENlbGxWaWV3KCkgPT09IENlbGxWaWV3Lk5HX1RFTVBMQVRFKSB7XG5cdFx0XHRjb2x1bW5EZWYuY2VsbFRlbXBsYXRlID0gY29sdW1uLmdldENvbHVtbkNvbmZpZygpLnRlbXBsYXRlUmVmO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2x1bW5EZWYuY2VsbFRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKGNvbHVtbi5nZXRDZWxsVmlldygpKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIGNvbHVtbi5nZXRIZWFkZXIoKSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29sdW1uRGVmLmhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LkZVTkNUSU9OKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29sdW1uRGVmLmhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LlRFWFQpO1xuXHRcdH1cblxuXHRcdGNvbHVtbkRlZi5zZXRUZW1wbGF0ZUZ1bmN0aW9uKGNvbHVtbi5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCkpO1xuXHRcdGNvbHVtbkRlZi5zZXRGb3JtYXR0ZXJGdW5jdGlvbihjb2x1bW4uZ2V0Rm9ybWF0dGVyRnVuY3Rpb24oKSk7XG5cblx0XHRjb2x1bW5EZWYuZWRpdFRlbXBsYXRlID0gdGhpcy5maW5kRWRpdFRlbXBsYXRlKGNvbHVtbi5nZXREYXRhVHlwZSgpKTtcblxuXHRcdGNvbHVtbkRlZi53aWR0aCA9ICtjb2x1bW4uZ2V0V2lkdGgoKTtcblxuXHRcdHJldHVybiBjb2x1bW5EZWY7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUZyb21BY3RpdmVDb2x1bW5FbnRpdHkoYWN0aXZlQ29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRcdGNvbnN0IGNvbHVtbkRlZiA9IG5ldyBDb2x1bW5EZWZpbml0aW9uKFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldEZpZWxkKCksXG5cdFx0XHRuZXcgQ29sdW1uRGVmaW5pdGlvbklkKGFjdGl2ZUNvbHVtbi5nZXRJZCgpLnRvU3RyaW5nKCkpLFxuXHRcdFx0dHJ1ZSwgLy8gcmVtb3ZlLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldERhdGFUeXBlKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0VmlldygpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldEFsaWduKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0SGVhZGVyKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uaXNDZWxsRWRpdGluZ0VuYWJsZWQoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRTb3J0U3RhdHVzKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0U29ydGluZ0VuYWJsZWQoKVxuXHRcdCk7XG5cblx0XHRpZiAoYWN0aXZlQ29sdW1uLmdldENlbGxWaWV3KCkgPT09IENlbGxWaWV3Lk5HX1RFTVBMQVRFKSB7XG5cdFx0XHRjb2x1bW5EZWYuY2VsbFRlbXBsYXRlID0gYWN0aXZlQ29sdW1uLmdldENvbHVtbkNvbmZpZygpLnRlbXBsYXRlUmVmO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2x1bW5EZWYuY2VsbFRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKGFjdGl2ZUNvbHVtbi5nZXRDZWxsVmlldygpKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIGFjdGl2ZUNvbHVtbi5nZXRIZWFkZXIoKSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29sdW1uRGVmLmhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LkZVTkNUSU9OKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29sdW1uRGVmLmhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LlRFWFQpO1xuXHRcdH1cblxuXHRcdGNvbHVtbkRlZi5zZXRUZW1wbGF0ZUZ1bmN0aW9uKGFjdGl2ZUNvbHVtbi5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCkpO1xuXHRcdGNvbHVtbkRlZi5zZXRGb3JtYXR0ZXJGdW5jdGlvbihhY3RpdmVDb2x1bW4uZ2V0Rm9ybWF0dGVyRnVuY3Rpb24oKSk7XG5cblx0XHRjb2x1bW5EZWYuZWRpdFRlbXBsYXRlID0gdGhpcy5maW5kRWRpdFRlbXBsYXRlKGFjdGl2ZUNvbHVtbi5nZXREYXRhVHlwZSgpKTtcblxuXHRcdGNvbHVtbkRlZi53aWR0aCA9ICthY3RpdmVDb2x1bW4uZ2V0V2lkdGgoKTtcblxuXHRcdHJldHVybiBjb2x1bW5EZWY7XG5cdH1cblxuXHRjcmVhdGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4pOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkVudGl0eSkgPT4gdGhpcy5jcmVhdGUoY29sdW1uKSk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRWaWV3VGVtcGxhdGUodmlldzogQ2VsbFZpZXcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblxuXHRcdGlmICh2aWV3ID09PSBDZWxsVmlldy5GVU5DVElPTikge1xuXHRcdFx0cmV0dXJuIHRoaXMudmlld1RlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUoQ2VsbFZpZXcuRlVOQ1RJT04pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZSh2aWV3KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZpbmRFZGl0VGVtcGxhdGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVGVtcGxhdGVSZWY8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZWRpdFRlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUoZGF0YVR5cGUpO1xuXHR9XG5cbn1cbiJdfQ==