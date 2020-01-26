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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTTNDO0lBR0MsaUNBQW9CLHNCQUE4QyxFQUN2RCxzQkFBOEM7UUFEckMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUN2RCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBQ3pELENBQUM7Ozs7O0lBSUQsd0NBQU07Ozs7SUFBTixVQUFPLE1BQXlDO1FBRS9DLElBQUksTUFBTSxZQUFZLFlBQVksRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakQ7SUFDRixDQUFDOzs7Ozs7SUFFTyx3REFBc0I7Ozs7O0lBQTlCLFVBQStCLE1BQW9COztZQUU5QyxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsQ0FDbkMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUNqQixNQUFNLENBQUMsV0FBVyxFQUFFLEVBQ3BCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFDbEIsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUNsQixNQUFNLENBQUMsVUFBVSxDQUNqQjtRQUVELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRSxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFMUQsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFckUsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFaEMsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBRU8sOERBQTRCOzs7OztJQUFwQyxVQUFxQyxZQUFnQzs7WUFFaEUsU0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQ25DLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFDdkIsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUMxQixJQUFJLEVBQUUsU0FBUztRQUNmLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFDeEIsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUM1QjtRQUVELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRSxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFaEUsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFM0UsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUUzQyxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELCtDQUFhOzs7O0lBQWIsVUFBYyxPQUE0QjtRQUExQyxpQkFFQztRQURBLE9BQU8sT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW9CLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFuQixDQUFtQixFQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRU8sa0RBQWdCOzs7OztJQUF4QixVQUF5QixJQUFjO1FBRXRDLElBQUksSUFBSSxLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3REO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0RBQWdCOzs7OztJQUF4QixVQUF5QixRQUFrQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Z0JBN0VELFVBQVU7Ozs7Z0JBVkYsc0JBQXNCO2dCQUN0QixzQkFBc0I7O0lBd0YvQiw4QkFBQztDQUFBLEFBL0VELElBK0VDO1NBOUVZLHVCQUF1Qjs7Ozs7O0lBRXZCLHlEQUFzRDs7Ozs7SUFDL0QseURBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVmlld1RlbXBsYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL3ZpZXcvdmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9lZGl0L2VkaXQtdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi8uLi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuL2NvbHVtbi1kZWZpbml0aW9uJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sdW1uRGVmaW5pdGlvbkZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld1RlbXBsYXRlUmVwb3NpdG9yeTogVmlld1RlbXBsYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBlZGl0VGVtcGxhdGVSZXBvc2l0b3J5OiBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uO1xuXHRjcmVhdGUoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uO1xuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5FbnRpdHkgfCBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRcdGlmIChjb2x1bW4gaW5zdGFuY2VvZiBDb2x1bW5FbnRpdHkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUZyb21Db2x1bW5FbnRpdHkoY29sdW1uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRnJvbUFjdGl2ZUNvbHVtbkVudGl0eShjb2x1bW4pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRnJvbUNvbHVtbkVudGl0eShjb2x1bW46IENvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb24ge1xuXG5cdFx0bGV0IGNvbHVtbkRlZiA9IG5ldyBDb2x1bW5EZWZpbml0aW9uKFxuXHRcdFx0Y29sdW1uLmdldEZpZWxkKCksXG5cdFx0XHRjb2x1bW4uZ2V0Q29sdW1uSWQoKSxcblx0XHRcdGNvbHVtbi5pc0VuYWJsZWQoKSxcblx0XHRcdGNvbHVtbi5nZXRIZWFkZXIoKSxcblx0XHRcdGNvbHVtbi5zb3J0U3RhdHVzXG5cdFx0KTtcblxuXHRcdGNvbHVtbkRlZi5jZWxsVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoY29sdW1uLmdldENlbGxWaWV3KCkpO1xuXHRcdGNvbHVtbkRlZi5oZWFkZXJUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShDZWxsVmlldy5URVhUKTtcblxuXHRcdGNvbHVtbkRlZi50ZW1wbGF0ZUZ1bmN0aW9uID0gY29sdW1uLmdldFRlbXBsYXRlRnVuY3Rpb24oKTtcblxuXHRcdGNvbHVtbkRlZi5lZGl0VGVtcGxhdGUgPSB0aGlzLmZpbmRFZGl0VGVtcGxhdGUoY29sdW1uLmdldERhdGFUeXBlKCkpO1xuXG5cdFx0Y29sdW1uRGVmLndpZHRoID0gK2NvbHVtbi53aWR0aDtcblxuXHRcdHJldHVybiBjb2x1bW5EZWY7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUZyb21BY3RpdmVDb2x1bW5FbnRpdHkoYWN0aXZlQ29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRcdGxldCBjb2x1bW5EZWYgPSBuZXcgQ29sdW1uRGVmaW5pdGlvbihcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRGaWVsZCgpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldENvbHVtbklkKCksXG5cdFx0XHR0cnVlLCAvLyByZW1vdmVcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRIZWFkZXIoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRTb3J0U3RhdHVzKClcblx0XHQpO1xuXG5cdFx0Y29sdW1uRGVmLmNlbGxUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShhY3RpdmVDb2x1bW4uZ2V0Q2VsbFZpZXcoKSk7XG5cdFx0Y29sdW1uRGVmLmhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LlRFWFQpO1xuXG5cdFx0Y29sdW1uRGVmLnRlbXBsYXRlRnVuY3Rpb24gPSBhY3RpdmVDb2x1bW4uZ2V0VGVtcGxhdGVGdW5jdGlvbigpO1xuXG5cdFx0Y29sdW1uRGVmLmVkaXRUZW1wbGF0ZSA9IHRoaXMuZmluZEVkaXRUZW1wbGF0ZShhY3RpdmVDb2x1bW4uZ2V0RGF0YVR5cGUoKSk7XG5cblx0XHRjb2x1bW5EZWYud2lkdGggPSArYWN0aXZlQ29sdW1uLmdldFdpZHRoKCk7XG5cblx0XHRyZXR1cm4gY29sdW1uRGVmO1xuXHR9XG5cblx0Y3JlYXRlQ29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+KTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uOiBDb2x1bW5FbnRpdHkpID0+IHRoaXMuY3JlYXRlKGNvbHVtbikpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kVmlld1RlbXBsYXRlKHZpZXc6IENlbGxWaWV3KTogVGVtcGxhdGVSZWY8YW55PiB7XG5cblx0XHRpZiAodmlldyA9PT0gQ2VsbFZpZXcuRlVOQ1RJT04pIHtcblx0XHRcdHJldHVybiB0aGlzLnZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkuZmluZFRlbXBsYXRlKENlbGxWaWV3LkZVTkNUSU9OKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMudmlld1RlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUodmlldyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBmaW5kRWRpdFRlbXBsYXRlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkuZmluZFRlbXBsYXRlKGRhdGFUeXBlKTtcblx0fVxuXG59XG4iXX0=