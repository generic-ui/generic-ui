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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTTNDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBRW5DLFlBQW9CLHNCQUE4QyxFQUN2RCxzQkFBOEM7UUFEckMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUN2RCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBQ3pELENBQUM7Ozs7O0lBSUQsTUFBTSxDQUFDLE1BQXlDO1FBRS9DLElBQUksTUFBTSxZQUFZLFlBQVksRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakQ7SUFDRixDQUFDOzs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxNQUFvQjs7WUFFOUMsU0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQ25DLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFDakIsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUNwQixNQUFNLENBQUMsU0FBUyxFQUFFLEVBQ2xCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFDbEIsTUFBTSxDQUFDLFVBQVUsQ0FDakI7UUFFRCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNyRSxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEUsU0FBUyxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRTFELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRXJFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRWhDLE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUVPLDRCQUE0QixDQUFDLFlBQWdDOztZQUVoRSxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsQ0FDbkMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUN2QixZQUFZLENBQUMsV0FBVyxFQUFFLEVBQzFCLElBQUksRUFBRSxTQUFTO1FBQ2YsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUN4QixZQUFZLENBQUMsYUFBYSxFQUFFLENBQzVCO1FBRUQsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDM0UsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhFLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUVoRSxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUUzRSxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNDLE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQTRCO1FBQ3pDLE9BQU8sT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxJQUFjO1FBRXRDLElBQUksSUFBSSxLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3REO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsUUFBa0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQTdFRCxVQUFVOzs7O1lBVEYsc0JBQXNCO1lBQ3RCLHNCQUFzQjs7Ozs7OztJQVdsQix5REFBc0Q7Ozs7O0lBQy9ELHlEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi92aWV3L3ZpZXctdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uIH0gZnJvbSAnLi9jb2x1bW4tZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi8uLi9jb21tYW5kL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSB2aWV3VGVtcGxhdGVSZXBvc2l0b3J5OiBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIGVkaXRUZW1wbGF0ZVJlcG9zaXRvcnk6IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGNyZWF0ZShjb2x1bW46IENvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb247XG5cdGNyZWF0ZShjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb247XG5cdGNyZWF0ZShjb2x1bW46IENvbHVtbkVudGl0eSB8IEFjdGl2ZUNvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb24ge1xuXG5cdFx0aWYgKGNvbHVtbiBpbnN0YW5jZW9mIENvbHVtbkVudGl0eSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRnJvbUNvbHVtbkVudGl0eShjb2x1bW4pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVGcm9tQWN0aXZlQ29sdW1uRW50aXR5KGNvbHVtbik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVGcm9tQ29sdW1uRW50aXR5KGNvbHVtbjogQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbiB7XG5cblx0XHRsZXQgY29sdW1uRGVmID0gbmV3IENvbHVtbkRlZmluaXRpb24oXG5cdFx0XHRjb2x1bW4uZ2V0RmllbGQoKSxcblx0XHRcdGNvbHVtbi5nZXRDb2x1bW5JZCgpLFxuXHRcdFx0Y29sdW1uLmlzRW5hYmxlZCgpLFxuXHRcdFx0Y29sdW1uLmdldEhlYWRlcigpLFxuXHRcdFx0Y29sdW1uLnNvcnRTdGF0dXNcblx0XHQpO1xuXG5cdFx0Y29sdW1uRGVmLmNlbGxUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShjb2x1bW4uZ2V0Q2VsbFZpZXcoKSk7XG5cdFx0Y29sdW1uRGVmLmhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LlRFWFQpO1xuXG5cdFx0Y29sdW1uRGVmLnRlbXBsYXRlRnVuY3Rpb24gPSBjb2x1bW4uZ2V0VGVtcGxhdGVGdW5jdGlvbigpO1xuXG5cdFx0Y29sdW1uRGVmLmVkaXRUZW1wbGF0ZSA9IHRoaXMuZmluZEVkaXRUZW1wbGF0ZShjb2x1bW4uZ2V0RGF0YVR5cGUoKSk7XG5cblx0XHRjb2x1bW5EZWYud2lkdGggPSArY29sdW1uLndpZHRoO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZjtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRnJvbUFjdGl2ZUNvbHVtbkVudGl0eShhY3RpdmVDb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb24ge1xuXG5cdFx0bGV0IGNvbHVtbkRlZiA9IG5ldyBDb2x1bW5EZWZpbml0aW9uKFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldEZpZWxkKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0Q29sdW1uSWQoKSxcblx0XHRcdHRydWUsIC8vIHJlbW92ZVxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldEhlYWRlcigpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldFNvcnRTdGF0dXMoKVxuXHRcdCk7XG5cblx0XHRjb2x1bW5EZWYuY2VsbFRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKGFjdGl2ZUNvbHVtbi5nZXRDZWxsVmlldygpKTtcblx0XHRjb2x1bW5EZWYuaGVhZGVyVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoQ2VsbFZpZXcuVEVYVCk7XG5cblx0XHRjb2x1bW5EZWYudGVtcGxhdGVGdW5jdGlvbiA9IGFjdGl2ZUNvbHVtbi5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCk7XG5cblx0XHRjb2x1bW5EZWYuZWRpdFRlbXBsYXRlID0gdGhpcy5maW5kRWRpdFRlbXBsYXRlKGFjdGl2ZUNvbHVtbi5nZXREYXRhVHlwZSgpKTtcblxuXHRcdGNvbHVtbkRlZi53aWR0aCA9ICthY3RpdmVDb2x1bW4uZ2V0V2lkdGgoKTtcblxuXHRcdHJldHVybiBjb2x1bW5EZWY7XG5cdH1cblxuXHRjcmVhdGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4pOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkVudGl0eSkgPT4gdGhpcy5jcmVhdGUoY29sdW1uKSk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRWaWV3VGVtcGxhdGUodmlldzogQ2VsbFZpZXcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblxuXHRcdGlmICh2aWV3ID09PSBDZWxsVmlldy5GVU5DVElPTikge1xuXHRcdFx0cmV0dXJuIHRoaXMudmlld1RlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUoQ2VsbFZpZXcuRlVOQ1RJT04pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZSh2aWV3KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZpbmRFZGl0VGVtcGxhdGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVGVtcGxhdGVSZWY8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZWRpdFRlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUoZGF0YVR5cGUpO1xuXHR9XG5cbn1cbiJdfQ==