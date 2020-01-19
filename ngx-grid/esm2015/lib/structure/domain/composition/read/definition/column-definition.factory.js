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
        let columnDef = new ColumnDefinition(column.getField(), column.getColumnId(), column.isEnabled(), column.getHeader(), column.sortStatus);
        columnDef.cellTemplate = this.findViewTemplate(column.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        columnDef.templateFunction = column.getTemplateFunction();
        columnDef.editTemplate = this.findEditTemplate(column.getDataType());
        columnDef.width = +column.width;
        return columnDef;
    }
    /**
     * @private
     * @param {?} activeColumn
     * @return {?}
     */
    createFromActiveColumnEntity(activeColumn) {
        /** @type {?} */
        let columnDef = new ColumnDefinition(activeColumn.getField(), activeColumn.getColumnId(), true, // remove
        activeColumn.getHeader(), activeColumn.getSortStatus());
        columnDef.cellTemplate = this.findViewTemplate(activeColumn.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        columnDef.templateFunction = activeColumn.getTemplateFunction();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU8zQyxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUVuQyxZQUFvQixzQkFBOEMsRUFDdkQsc0JBQThDO1FBRHJDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDdkQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUN6RCxDQUFDOzs7OztJQUlELE1BQU0sQ0FBQyxNQUF5QztRQUUvQyxJQUFJLE1BQU0sWUFBWSxZQUFZLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsTUFBb0I7O1lBRTlDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixDQUNuQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQ2pCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFDcEIsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUNsQixNQUFNLENBQUMsU0FBUyxFQUFFLEVBQ2xCLE1BQU0sQ0FBQyxVQUFVLENBQ2pCO1FBRUQsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDckUsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhFLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUUxRCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUVyRSxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVoQyxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFFTyw0QkFBNEIsQ0FBQyxZQUFnQzs7WUFFaEUsU0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQ25DLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFDdkIsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUMxQixJQUFJLEVBQUUsU0FBUztRQUNmLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFDeEIsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUM1QjtRQUVELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRSxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFaEUsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFM0UsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUUzQyxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxPQUE0QjtRQUN6QyxPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsSUFBYztRQUV0QyxJQUFJLElBQUksS0FBSyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkU7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0RDtJQUNGLENBQUM7Ozs7OztJQUVPLGdCQUFnQixDQUFDLFFBQWtCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7WUE3RUQsVUFBVTs7OztZQVZGLHNCQUFzQjtZQUN0QixzQkFBc0I7Ozs7Ozs7SUFZbEIseURBQXNEOzs7OztJQUMvRCx5REFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vdmlldy92aWV3LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2VkaXQvZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vY29sdW1uLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sdW1uRGVmaW5pdGlvbkZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld1RlbXBsYXRlUmVwb3NpdG9yeTogVmlld1RlbXBsYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBlZGl0VGVtcGxhdGVSZXBvc2l0b3J5OiBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uO1xuXHRjcmVhdGUoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uO1xuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5FbnRpdHkgfCBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRcdGlmIChjb2x1bW4gaW5zdGFuY2VvZiBDb2x1bW5FbnRpdHkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUZyb21Db2x1bW5FbnRpdHkoY29sdW1uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRnJvbUFjdGl2ZUNvbHVtbkVudGl0eShjb2x1bW4pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRnJvbUNvbHVtbkVudGl0eShjb2x1bW46IENvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb24ge1xuXG5cdFx0bGV0IGNvbHVtbkRlZiA9IG5ldyBDb2x1bW5EZWZpbml0aW9uKFxuXHRcdFx0Y29sdW1uLmdldEZpZWxkKCksXG5cdFx0XHRjb2x1bW4uZ2V0Q29sdW1uSWQoKSxcblx0XHRcdGNvbHVtbi5pc0VuYWJsZWQoKSxcblx0XHRcdGNvbHVtbi5nZXRIZWFkZXIoKSxcblx0XHRcdGNvbHVtbi5zb3J0U3RhdHVzXG5cdFx0KTtcblxuXHRcdGNvbHVtbkRlZi5jZWxsVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoY29sdW1uLmdldENlbGxWaWV3KCkpO1xuXHRcdGNvbHVtbkRlZi5oZWFkZXJUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShDZWxsVmlldy5URVhUKTtcblxuXHRcdGNvbHVtbkRlZi50ZW1wbGF0ZUZ1bmN0aW9uID0gY29sdW1uLmdldFRlbXBsYXRlRnVuY3Rpb24oKTtcblxuXHRcdGNvbHVtbkRlZi5lZGl0VGVtcGxhdGUgPSB0aGlzLmZpbmRFZGl0VGVtcGxhdGUoY29sdW1uLmdldERhdGFUeXBlKCkpO1xuXG5cdFx0Y29sdW1uRGVmLndpZHRoID0gK2NvbHVtbi53aWR0aDtcblxuXHRcdHJldHVybiBjb2x1bW5EZWY7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUZyb21BY3RpdmVDb2x1bW5FbnRpdHkoYWN0aXZlQ29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRcdGxldCBjb2x1bW5EZWYgPSBuZXcgQ29sdW1uRGVmaW5pdGlvbihcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRGaWVsZCgpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldENvbHVtbklkKCksXG5cdFx0XHR0cnVlLCAvLyByZW1vdmVcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRIZWFkZXIoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRTb3J0U3RhdHVzKClcblx0XHQpO1xuXG5cdFx0Y29sdW1uRGVmLmNlbGxUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShhY3RpdmVDb2x1bW4uZ2V0Q2VsbFZpZXcoKSk7XG5cdFx0Y29sdW1uRGVmLmhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LlRFWFQpO1xuXG5cdFx0Y29sdW1uRGVmLnRlbXBsYXRlRnVuY3Rpb24gPSBhY3RpdmVDb2x1bW4uZ2V0VGVtcGxhdGVGdW5jdGlvbigpO1xuXG5cdFx0Y29sdW1uRGVmLmVkaXRUZW1wbGF0ZSA9IHRoaXMuZmluZEVkaXRUZW1wbGF0ZShhY3RpdmVDb2x1bW4uZ2V0RGF0YVR5cGUoKSk7XG5cblx0XHRjb2x1bW5EZWYud2lkdGggPSArYWN0aXZlQ29sdW1uLmdldFdpZHRoKCk7XG5cblx0XHRyZXR1cm4gY29sdW1uRGVmO1xuXHR9XG5cblx0Y3JlYXRlQ29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+KTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uOiBDb2x1bW5FbnRpdHkpID0+IHRoaXMuY3JlYXRlKGNvbHVtbikpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kVmlld1RlbXBsYXRlKHZpZXc6IENlbGxWaWV3KTogVGVtcGxhdGVSZWY8YW55PiB7XG5cblx0XHRpZiAodmlldyA9PT0gQ2VsbFZpZXcuRlVOQ1RJT04pIHtcblx0XHRcdHJldHVybiB0aGlzLnZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkuZmluZFRlbXBsYXRlKENlbGxWaWV3LkZVTkNUSU9OKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMudmlld1RlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUodmlldyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBmaW5kRWRpdFRlbXBsYXRlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkuZmluZFRlbXBsYXRlKGRhdGFUeXBlKTtcblx0fVxuXG59XG4iXX0=