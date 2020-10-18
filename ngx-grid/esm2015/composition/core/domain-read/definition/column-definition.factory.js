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
import { ColumnDefinitionId } from './column-definition-id';
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
        let columnDef = new ColumnDefinition(column.getField(), new ColumnDefinitionId(column.getId().toString()), column.isEnabled(), column.getDataType(), column.getView(), column.getAlign(), column.getHeader(), column.isCellEditingEnabled(), column.getSortStatus(), column.getSortingEnabled());
        columnDef.cellTemplate = this.findViewTemplate(column.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
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
        let columnDef = new ColumnDefinition(activeColumn.getField(), new ColumnDefinitionId(activeColumn.getId().toString()), true, // remove,
        activeColumn.getDataType(), activeColumn.getView(), activeColumn.getAlign(), activeColumn.getHeader(), activeColumn.isCellEditingEnabled(), activeColumn.getSortStatus(), activeColumn.getSortingEnabled());
        columnDef.cellTemplate = this.findViewTemplate(activeColumn.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUd6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUk1RCxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUVuQyxZQUFvQixzQkFBOEMsRUFDdkQsc0JBQThDO1FBRHJDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDdkQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUN6RCxDQUFDOzs7OztJQUlELE1BQU0sQ0FBQyxNQUF5QztRQUUvQyxJQUFJLE1BQU0sWUFBWSxZQUFZLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsTUFBb0I7O1lBRTlDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixDQUNuQyxNQUFNLENBQUMsUUFBUSxF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QUNOLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0RDtJQUNGLENBQUM7Ozs7OztJQUVPLGdCQUFnQixDQUFDLFFBQWtCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7WUF6RkQsVUFBVTs7OztZQVZGLHNCQUFzQjtZQUN0QixzQkFBc0I7Ozs7Ozs7SUFZbEIseURBQXNEOzs7OztJQUMvRCx5REFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vdmlldy92aWV3LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2VkaXQvZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uIH0gZnJvbSAnLi9jb2x1bW4tZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2x1bW4vY2VsbC12aWV3JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25JZCB9IGZyb20gJy4vY29sdW1uLWRlZmluaXRpb24taWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSB2aWV3VGVtcGxhdGVSZXBvc2l0b3J5OiBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIGVkaXRUZW1wbGF0ZVJlcG9zaXRvcnk6IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGNyZWF0ZShjb2x1bW46IENvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb247XG5cdGNyZWF0ZShjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb247XG5cdGNyZWF0ZShjb2x1bW46IENvbHVtbkVudGl0eSB8IEFjdGl2ZUNvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb24ge1xuXG5cdFx0aWYgKGNvbHVtbiBpbnN0YW5jZW9mIENvbHVtbkVudGl0eSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRnJvbUNvbHVtbkVudGl0eShjb2x1bW4pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVGcm9tQWN0aXZlQ29sdW1uRW50aXR5KGNvbHVtbik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVGcm9tQ29sdW1uRW50aXR5KGNvbHVtbjogQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbiB7XG5cblx0XHRsZXQgY29sdW1uRGVmID0gbmV3IENvbHVtbkRlZmluaXRpb24oXG5cdFx0XHRjb2x1bW4uZ2V0RmllbGQoKSxcblx0XHRcdG5ldyBDb2x1bW5EZWZpbml0aW9uSWQoY29sdW1uLmdldElkKCkudG9TdHJpbmcoKSksXG5cdFx0XHRjb2x1bW4uaXNFbmFibGVkKCksXG5cdFx0XHRjb2x1bW4uZ2V0RGF0YVR5cGUoKSxcblx0XHRcdGNvbHVtbi5nZXRWaWV3KCksXG5cdFx0XHRjb2x1bW4uZ2V0QWxpZ24oKSxcblx0XHRcdGNvbHVtbi5nZXRIZWFkZXIoKSxcblx0XHRcdGNvbHVtbi5pc0NlbGxFZGl0aW5nRW5hYmxlZCgpLFxuXHRcdFx0Y29sdW1uLmdldFNvcnRTdGF0dXMoKSxcblx0XHRcdGNvbHVtbi5nZXRTb3J0aW5nRW5hYmxlZCgpXG5cdFx0KTtcblxuXHRcdGNvbHVtbkRlZi5jZWxsVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoY29sdW1uLmdldENlbGxWaWV3KCkpO1xuXHRcdGNvbHVtbkRlZi5oZWFkZXJUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShDZWxsVmlldy5URVhUKTtcblxuXHRcdGNvbHVtbkRlZi5zZXRUZW1wbGF0ZUZ1bmN0aW9uKGNvbHVtbi5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCkpO1xuXHRcdGNvbHVtbkRlZi5zZXRGb3JtYXR0ZXJGdW5jdGlvbihjb2x1bW4uZ2V0Rm9ybWF0dGVyRnVuY3Rpb24oKSk7XG5cblx0XHRjb2x1bW5EZWYuZWRpdFRlbXBsYXRlID0gdGhpcy5maW5kRWRpdFRlbXBsYXRlKGNvbHVtbi5nZXREYXRhVHlwZSgpKTtcblxuXHRcdGNvbHVtbkRlZi53aWR0aCA9ICtjb2x1bW4uZ2V0V2lkdGgoKTtcblxuXHRcdHJldHVybiBjb2x1bW5EZWY7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUZyb21BY3RpdmVDb2x1bW5FbnRpdHkoYWN0aXZlQ29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRcdGxldCBjb2x1bW5EZWYgPSBuZXcgQ29sdW1uRGVmaW5pdGlvbihcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRGaWVsZCgpLFxuXHRcdFx0bmV3IENvbHVtbkRlZmluaXRpb25JZChhY3RpdmVDb2x1bW4uZ2V0SWQoKS50b1N0cmluZygpKSxcblx0XHRcdHRydWUsIC8vIHJlbW92ZSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXREYXRhVHlwZSgpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldFZpZXcoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRBbGlnbigpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldEhlYWRlcigpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmlzQ2VsbEVkaXRpbmdFbmFibGVkKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0U29ydFN0YXR1cygpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldFNvcnRpbmdFbmFibGVkKClcblx0XHQpO1xuXG5cdFx0Y29sdW1uRGVmLmNlbGxUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShhY3RpdmVDb2x1bW4uZ2V0Q2VsbFZpZXcoKSk7XG5cdFx0Y29sdW1uRGVmLmhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LlRFWFQpO1xuXG5cdFx0Y29sdW1uRGVmLnNldFRlbXBsYXRlRnVuY3Rpb24oYWN0aXZlQ29sdW1uLmdldFRlbXBsYXRlRnVuY3Rpb24oKSk7XG5cdFx0Y29sdW1uRGVmLnNldEZvcm1hdHRlckZ1bmN0aW9uKGFjdGl2ZUNvbHVtbi5nZXRGb3JtYXR0ZXJGdW5jdGlvbigpKTtcblxuXHRcdGNvbHVtbkRlZi5lZGl0VGVtcGxhdGUgPSB0aGlzLmZpbmRFZGl0VGVtcGxhdGUoYWN0aXZlQ29sdW1uLmdldERhdGFUeXBlKCkpO1xuXG5cdFx0Y29sdW1uRGVmLndpZHRoID0gK2FjdGl2ZUNvbHVtbi5nZXRXaWR0aCgpO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZjtcblx0fVxuXG5cdGNyZWF0ZUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uRW50aXR5KSA9PiB0aGlzLmNyZWF0ZShjb2x1bW4pKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZFZpZXdUZW1wbGF0ZSh2aWV3OiBDZWxsVmlldyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXG5cdFx0aWYgKHZpZXcgPT09IENlbGxWaWV3LkZVTkNUSU9OKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZShDZWxsVmlldy5GVU5DVElPTik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkuZmluZFRlbXBsYXRlKHZpZXcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZmluZEVkaXRUZW1wbGF0ZShkYXRhVHlwZTogRGF0YVR5cGUpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5lZGl0VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZShkYXRhVHlwZSk7XG5cdH1cblxufVxuIl19