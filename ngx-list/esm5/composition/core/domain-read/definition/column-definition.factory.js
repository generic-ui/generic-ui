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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUd6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUczRTtJQUdDLGlDQUE2QixzQkFBOEMsRUFDdkQsc0JBQThDO1FBRHJDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDdkQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUNsRSxDQUFDOzs7OztJQUlELHdDQUFNOzs7O0lBQU4sVUFBTyxNQUF5QztRQUUvQyxJQUFJLE1BQU0sWUFBWSxZQUFZLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sd0RBQXNCOzs7OztJQUE5QixVQUErQixNQUFvQjs7WUFFNUMsU0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQ3JDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFDakIsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsRUFDakQsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUNsQixNQUFNLENBQUMsV0FBVyxFQUFFLEVBQ3BCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFDaEIsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUNqQixNQUFNLENBQUMsU0FBUyxFQUFFLEVBQ2xCLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxFQUM3QixNQUFNLENBQUMsYUFBYSxFQUFFLEVBQ3RCLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUMxQjtRQUVELElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDbEQsU0FBUyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsV0FBVyxDQUFDO1NBQzlEO2FBQU07WUFDTixTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUNyRTtRQUVELElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssVUFBVSxFQUFFO1lBQzdDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRTthQUFNO1lBQ04sU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsU0FBUyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7UUFDNUQsU0FBUyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFFOUQsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFckUsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVyQyxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFFTyw4REFBNEI7Ozs7O0lBQXBDLFVBQXFDLFlBQWdDOztZQUU5RCxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsQ0FDckMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUN2QixJQUFJLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUN2RCxJQUFJLEVBQUUsVUFBVTtRQUNoQixZQUFZLENBQUMsV0FBVyxFQUFFLEVBQzFCLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFDdEIsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUN2QixZQUFZLENBQUMsU0FBUyxFQUFFLEVBQ3hCLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxFQUNuQyxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQzVCLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUNoQztRQUVELElBQUksWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDeEQsU0FBUyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsV0FBVyxDQUFDO1NBQ3BFO2FBQU07WUFDTixTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUMzRTtRQUVELElBQUksT0FBTyxZQUFZLENBQUMsU0FBUyxFQUFFLEtBQUssVUFBVSxFQUFFO1lBQ25ELFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRTthQUFNO1lBQ04sU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsU0FBUyxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7UUFDbEUsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFFcEUsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFM0UsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUUzQyxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELCtDQUFhOzs7O0lBQWIsVUFBYyxPQUE0QjtRQUExQyxpQkFFQztRQURBLE9BQU8sT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW9CLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFuQixDQUFtQixFQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRU8sa0RBQWdCOzs7OztJQUF4QixVQUF5QixJQUFjO1FBRXRDLElBQUksSUFBSSxLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3REO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0RBQWdCOzs7OztJQUF4QixVQUF5QixRQUFrQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Z0JBM0dELFVBQVU7Ozs7Z0JBVkYsc0JBQXNCO2dCQUN0QixzQkFBc0I7O0lBc0gvQiw4QkFBQztDQUFBLEFBN0dELElBNkdDO1NBNUdZLHVCQUF1Qjs7Ozs7O0lBRXZCLHlEQUErRDs7Ozs7SUFDeEUseURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVmlld1RlbXBsYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL3ZpZXcvdmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9lZGl0L2VkaXQtdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vY29sdW1uLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uSWQgfSBmcm9tICcuLi8uLi9hcGkvY29sdW1uL2NvbHVtbi1kZWZpbml0aW9uLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sdW1uRGVmaW5pdGlvbkZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdmlld1RlbXBsYXRlUmVwb3NpdG9yeTogVmlld1RlbXBsYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlZGl0VGVtcGxhdGVSZXBvc2l0b3J5OiBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uO1xuXHRjcmVhdGUoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uO1xuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5FbnRpdHkgfCBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRcdGlmIChjb2x1bW4gaW5zdGFuY2VvZiBDb2x1bW5FbnRpdHkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUZyb21Db2x1bW5FbnRpdHkoY29sdW1uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRnJvbUFjdGl2ZUNvbHVtbkVudGl0eShjb2x1bW4pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRnJvbUNvbHVtbkVudGl0eShjb2x1bW46IENvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb24ge1xuXG5cdFx0Y29uc3QgY29sdW1uRGVmID0gbmV3IENvbHVtbkRlZmluaXRpb24oXG5cdFx0XHRjb2x1bW4uZ2V0RmllbGQoKSxcblx0XHRcdG5ldyBDb2x1bW5EZWZpbml0aW9uSWQoY29sdW1uLmdldElkKCkudG9TdHJpbmcoKSksXG5cdFx0XHRjb2x1bW4uaXNFbmFibGVkKCksXG5cdFx0XHRjb2x1bW4uZ2V0RGF0YVR5cGUoKSxcblx0XHRcdGNvbHVtbi5nZXRWaWV3KCksXG5cdFx0XHRjb2x1bW4uZ2V0QWxpZ24oKSxcblx0XHRcdGNvbHVtbi5nZXRIZWFkZXIoKSxcblx0XHRcdGNvbHVtbi5pc0NlbGxFZGl0aW5nRW5hYmxlZCgpLFxuXHRcdFx0Y29sdW1uLmdldFNvcnRTdGF0dXMoKSxcblx0XHRcdGNvbHVtbi5nZXRTb3J0aW5nRW5hYmxlZCgpXG5cdFx0KTtcblxuXHRcdGlmIChjb2x1bW4uZ2V0Q2VsbFZpZXcoKSA9PT0gQ2VsbFZpZXcuTkdfVEVNUExBVEUpIHtcblx0XHRcdGNvbHVtbkRlZi5jZWxsVGVtcGxhdGUgPSBjb2x1bW4uZ2V0Q29sdW1uQ29uZmlnKCkudGVtcGxhdGVSZWY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbHVtbkRlZi5jZWxsVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoY29sdW1uLmdldENlbGxWaWV3KCkpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgY29sdW1uLmdldEhlYWRlcigpID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjb2x1bW5EZWYuaGVhZGVyVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoQ2VsbFZpZXcuRlVOQ1RJT04pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2x1bW5EZWYuaGVhZGVyVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoQ2VsbFZpZXcuVEVYVCk7XG5cdFx0fVxuXG5cdFx0Y29sdW1uRGVmLnNldFRlbXBsYXRlRnVuY3Rpb24oY29sdW1uLmdldFRlbXBsYXRlRnVuY3Rpb24oKSk7XG5cdFx0Y29sdW1uRGVmLnNldEZvcm1hdHRlckZ1bmN0aW9uKGNvbHVtbi5nZXRGb3JtYXR0ZXJGdW5jdGlvbigpKTtcblxuXHRcdGNvbHVtbkRlZi5lZGl0VGVtcGxhdGUgPSB0aGlzLmZpbmRFZGl0VGVtcGxhdGUoY29sdW1uLmdldERhdGFUeXBlKCkpO1xuXG5cdFx0Y29sdW1uRGVmLndpZHRoID0gK2NvbHVtbi5nZXRXaWR0aCgpO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZjtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRnJvbUFjdGl2ZUNvbHVtbkVudGl0eShhY3RpdmVDb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb24ge1xuXG5cdFx0Y29uc3QgY29sdW1uRGVmID0gbmV3IENvbHVtbkRlZmluaXRpb24oXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0RmllbGQoKSxcblx0XHRcdG5ldyBDb2x1bW5EZWZpbml0aW9uSWQoYWN0aXZlQ29sdW1uLmdldElkKCkudG9TdHJpbmcoKSksXG5cdFx0XHR0cnVlLCAvLyByZW1vdmUsXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0RGF0YVR5cGUoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRWaWV3KCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0QWxpZ24oKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRIZWFkZXIoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5pc0NlbGxFZGl0aW5nRW5hYmxlZCgpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldFNvcnRTdGF0dXMoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRTb3J0aW5nRW5hYmxlZCgpXG5cdFx0KTtcblxuXHRcdGlmIChhY3RpdmVDb2x1bW4uZ2V0Q2VsbFZpZXcoKSA9PT0gQ2VsbFZpZXcuTkdfVEVNUExBVEUpIHtcblx0XHRcdGNvbHVtbkRlZi5jZWxsVGVtcGxhdGUgPSBhY3RpdmVDb2x1bW4uZ2V0Q29sdW1uQ29uZmlnKCkudGVtcGxhdGVSZWY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbHVtbkRlZi5jZWxsVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoYWN0aXZlQ29sdW1uLmdldENlbGxWaWV3KCkpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgYWN0aXZlQ29sdW1uLmdldEhlYWRlcigpID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjb2x1bW5EZWYuaGVhZGVyVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoQ2VsbFZpZXcuRlVOQ1RJT04pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2x1bW5EZWYuaGVhZGVyVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoQ2VsbFZpZXcuVEVYVCk7XG5cdFx0fVxuXG5cdFx0Y29sdW1uRGVmLnNldFRlbXBsYXRlRnVuY3Rpb24oYWN0aXZlQ29sdW1uLmdldFRlbXBsYXRlRnVuY3Rpb24oKSk7XG5cdFx0Y29sdW1uRGVmLnNldEZvcm1hdHRlckZ1bmN0aW9uKGFjdGl2ZUNvbHVtbi5nZXRGb3JtYXR0ZXJGdW5jdGlvbigpKTtcblxuXHRcdGNvbHVtbkRlZi5lZGl0VGVtcGxhdGUgPSB0aGlzLmZpbmRFZGl0VGVtcGxhdGUoYWN0aXZlQ29sdW1uLmdldERhdGFUeXBlKCkpO1xuXG5cdFx0Y29sdW1uRGVmLndpZHRoID0gK2FjdGl2ZUNvbHVtbi5nZXRXaWR0aCgpO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZjtcblx0fVxuXG5cdGNyZWF0ZUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uRW50aXR5KSA9PiB0aGlzLmNyZWF0ZShjb2x1bW4pKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZFZpZXdUZW1wbGF0ZSh2aWV3OiBDZWxsVmlldyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXG5cdFx0aWYgKHZpZXcgPT09IENlbGxWaWV3LkZVTkNUSU9OKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZShDZWxsVmlldy5GVU5DVElPTik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkuZmluZFRlbXBsYXRlKHZpZXcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZmluZEVkaXRUZW1wbGF0ZShkYXRhVHlwZTogRGF0YVR5cGUpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5lZGl0VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZShkYXRhVHlwZSk7XG5cdH1cblxufVxuIl19