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
        let columnDef = new ColumnDefinition(column.getField(), column.getColumnId(), column.isEnabled(), column.getDataType(), column.getView(), column.getAlign(), column.getHeader(), column.isCellEditingEnabled(), column.sortOrder, column.getSortingEnabled());
        columnDef.cellTemplate = this.findViewTemplate(column.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        columnDef.templateFunction = column.getTemplateFunction();
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
        let columnDef = new ColumnDefinition(activeColumn.getField(), activeColumn.getColumnId(), true, // remove,
        activeColumn.getDataType(), activeColumn.getView(), activeColumn.getAlign(), activeColumn.getHeader(), activeColumn.isCellEditingEnabled(), activeColumn.getSortStatus(), activeColumn.getSortingEnabled());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTTNDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBRW5DLFlBQW9CLHNCQUE4QyxFQUN2RCxzQkFBOEM7UUFEckMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUN2RCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBQ3pELENBQUM7Ozs7O0lBSUQsTUFBTSxDQUFDLE1BQXlDO1FBRS9DLElBQUksTUFBTSxZQUFZLFlBQVksRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakQ7SUFDRixDQUFDOzs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxNQUFvQjs7WUFFOUMsU0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQ25DLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFDakIsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUNwQixNQUFNLENBQUMsU0FBUyxFQUFFLEVBQ2xCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFDcEIsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUNoQixNQUFNLENBQUMsUUFBUSxFQUFFLEVBQ2pCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFDbEIsTUFBTSxDQUFDLG9CQUFvQixFQUFFLEVBQzdCLE1BQU0sQ0FBQyxTQUFTLEVBQ2hCLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUMxQjtRQUVELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRSxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFMUQsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFckUsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVyQyxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFFTyw0QkFBNEIsQ0FBQyxZQUFnQzs7WUFFaEUsU0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQ25DLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFDdkIsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUMxQixJQUFJLEVBQUUsVUFBVTtRQUNoQixZQUFZLENBQUMsV0FBVyxFQUFFLEVBQzFCLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFDdEIsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUN2QixZQUFZLENBQUMsU0FBUyxFQUFFLEVBQ3hCLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxFQUNuQyxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQzVCLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUNoQztRQUVELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRSxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFaEUsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFM0UsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUUzQyxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxPQUE0QjtRQUN6QyxPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsSUFBYztRQUV0QyxJQUFJLElBQUksS0FBSyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkU7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0RDtJQUNGLENBQUM7Ozs7OztJQUVPLGdCQUFnQixDQUFDLFFBQWtCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7WUF2RkQsVUFBVTs7OztZQVRGLHNCQUFzQjtZQUN0QixzQkFBc0I7Ozs7Ozs7SUFXbEIseURBQXNEOzs7OztJQUMvRCx5REFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vdmlldy92aWV3LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2VkaXQvZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vY29sdW1uLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sdW1uRGVmaW5pdGlvbkZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld1RlbXBsYXRlUmVwb3NpdG9yeTogVmlld1RlbXBsYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBlZGl0VGVtcGxhdGVSZXBvc2l0b3J5OiBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uO1xuXHRjcmVhdGUoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uO1xuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5FbnRpdHkgfCBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRcdGlmIChjb2x1bW4gaW5zdGFuY2VvZiBDb2x1bW5FbnRpdHkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUZyb21Db2x1bW5FbnRpdHkoY29sdW1uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRnJvbUFjdGl2ZUNvbHVtbkVudGl0eShjb2x1bW4pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRnJvbUNvbHVtbkVudGl0eShjb2x1bW46IENvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb24ge1xuXG5cdFx0bGV0IGNvbHVtbkRlZiA9IG5ldyBDb2x1bW5EZWZpbml0aW9uKFxuXHRcdFx0Y29sdW1uLmdldEZpZWxkKCksXG5cdFx0XHRjb2x1bW4uZ2V0Q29sdW1uSWQoKSxcblx0XHRcdGNvbHVtbi5pc0VuYWJsZWQoKSxcblx0XHRcdGNvbHVtbi5nZXREYXRhVHlwZSgpLFxuXHRcdFx0Y29sdW1uLmdldFZpZXcoKSxcblx0XHRcdGNvbHVtbi5nZXRBbGlnbigpLFxuXHRcdFx0Y29sdW1uLmdldEhlYWRlcigpLFxuXHRcdFx0Y29sdW1uLmlzQ2VsbEVkaXRpbmdFbmFibGVkKCksXG5cdFx0XHRjb2x1bW4uc29ydE9yZGVyLFxuXHRcdFx0Y29sdW1uLmdldFNvcnRpbmdFbmFibGVkKClcblx0XHQpO1xuXG5cdFx0Y29sdW1uRGVmLmNlbGxUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShjb2x1bW4uZ2V0Q2VsbFZpZXcoKSk7XG5cdFx0Y29sdW1uRGVmLmhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LlRFWFQpO1xuXG5cdFx0Y29sdW1uRGVmLnRlbXBsYXRlRnVuY3Rpb24gPSBjb2x1bW4uZ2V0VGVtcGxhdGVGdW5jdGlvbigpO1xuXG5cdFx0Y29sdW1uRGVmLmVkaXRUZW1wbGF0ZSA9IHRoaXMuZmluZEVkaXRUZW1wbGF0ZShjb2x1bW4uZ2V0RGF0YVR5cGUoKSk7XG5cblx0XHRjb2x1bW5EZWYud2lkdGggPSArY29sdW1uLmdldFdpZHRoKCk7XG5cblx0XHRyZXR1cm4gY29sdW1uRGVmO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVGcm9tQWN0aXZlQ29sdW1uRW50aXR5KGFjdGl2ZUNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbiB7XG5cblx0XHRsZXQgY29sdW1uRGVmID0gbmV3IENvbHVtbkRlZmluaXRpb24oXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0RmllbGQoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRDb2x1bW5JZCgpLFxuXHRcdFx0dHJ1ZSwgLy8gcmVtb3ZlLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldERhdGFUeXBlKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0VmlldygpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldEFsaWduKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0SGVhZGVyKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uaXNDZWxsRWRpdGluZ0VuYWJsZWQoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRTb3J0U3RhdHVzKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0U29ydGluZ0VuYWJsZWQoKVxuXHRcdCk7XG5cblx0XHRjb2x1bW5EZWYuY2VsbFRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKGFjdGl2ZUNvbHVtbi5nZXRDZWxsVmlldygpKTtcblx0XHRjb2x1bW5EZWYuaGVhZGVyVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoQ2VsbFZpZXcuVEVYVCk7XG5cblx0XHRjb2x1bW5EZWYudGVtcGxhdGVGdW5jdGlvbiA9IGFjdGl2ZUNvbHVtbi5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCk7XG5cblx0XHRjb2x1bW5EZWYuZWRpdFRlbXBsYXRlID0gdGhpcy5maW5kRWRpdFRlbXBsYXRlKGFjdGl2ZUNvbHVtbi5nZXREYXRhVHlwZSgpKTtcblxuXHRcdGNvbHVtbkRlZi53aWR0aCA9ICthY3RpdmVDb2x1bW4uZ2V0V2lkdGgoKTtcblxuXHRcdHJldHVybiBjb2x1bW5EZWY7XG5cdH1cblxuXHRjcmVhdGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4pOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkVudGl0eSkgPT4gdGhpcy5jcmVhdGUoY29sdW1uKSk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRWaWV3VGVtcGxhdGUodmlldzogQ2VsbFZpZXcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblxuXHRcdGlmICh2aWV3ID09PSBDZWxsVmlldy5GVU5DVElPTikge1xuXHRcdFx0cmV0dXJuIHRoaXMudmlld1RlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUoQ2VsbFZpZXcuRlVOQ1RJT04pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZSh2aWV3KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZpbmRFZGl0VGVtcGxhdGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVGVtcGxhdGVSZWY8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZWRpdFRlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUoZGF0YVR5cGUpO1xuXHR9XG5cbn1cbiJdfQ==