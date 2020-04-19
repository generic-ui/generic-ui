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
        columnDef.templateFunction = column.getTemplateFunction();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2ZlYXR1cmUtYXBpL3JlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHNUQ7SUFHQyxpQ0FBb0Isc0JBQThDLEVBQ3ZELHNCQUE4QztRQURyQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQ3ZELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFDekQsQ0FBQzs7Ozs7SUFJRCx3Q0FBTTs7OztJQUFOLFVBQU8sTUFBeUM7UUFFL0MsSUFBSSxNQUFNLFlBQVksWUFBWSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqRDtJQUNGLENBQUM7Ozs7OztJQUVPLHdEQUFzQjs7Ozs7SUFBOUIsVUFBK0IsTUFBb0I7O1lBRTlDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixDQUNuQyxNQUFNLENBQUMsUUFB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QUVPLGtEQUFnQjs7Ozs7SUFBeEIsVUFBeUIsUUFBa0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQXZGRCxVQUFVOzs7O2dCQVZGLHNCQUFzQjtnQkFDdEIsc0JBQXNCOztJQWtHL0IsOEJBQUM7Q0FBQSxBQXpGRCxJQXlGQztTQXhGWSx1QkFBdUI7Ozs7OztJQUV2Qix5REFBc0Q7Ozs7O0lBQy9ELHlEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi92aWV3L3ZpZXctdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuL2NvbHVtbi1kZWZpbml0aW9uJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25JZCB9IGZyb20gJy4vY29sdW1uLWRlZmluaXRpb24taWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSB2aWV3VGVtcGxhdGVSZXBvc2l0b3J5OiBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIGVkaXRUZW1wbGF0ZVJlcG9zaXRvcnk6IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGNyZWF0ZShjb2x1bW46IENvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb247XG5cdGNyZWF0ZShjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb247XG5cdGNyZWF0ZShjb2x1bW46IENvbHVtbkVudGl0eSB8IEFjdGl2ZUNvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb24ge1xuXG5cdFx0aWYgKGNvbHVtbiBpbnN0YW5jZW9mIENvbHVtbkVudGl0eSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRnJvbUNvbHVtbkVudGl0eShjb2x1bW4pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVGcm9tQWN0aXZlQ29sdW1uRW50aXR5KGNvbHVtbik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVGcm9tQ29sdW1uRW50aXR5KGNvbHVtbjogQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbiB7XG5cblx0XHRsZXQgY29sdW1uRGVmID0gbmV3IENvbHVtbkRlZmluaXRpb24oXG5cdFx0XHRjb2x1bW4uZ2V0RmllbGQoKSxcblx0XHRcdG5ldyBDb2x1bW5EZWZpbml0aW9uSWQoY29sdW1uLmdldElkKCkudG9TdHJpbmcoKSksXG5cdFx0XHRjb2x1bW4uaXNFbmFibGVkKCksXG5cdFx0XHRjb2x1bW4uZ2V0RGF0YVR5cGUoKSxcblx0XHRcdGNvbHVtbi5nZXRWaWV3KCksXG5cdFx0XHRjb2x1bW4uZ2V0QWxpZ24oKSxcblx0XHRcdGNvbHVtbi5nZXRIZWFkZXIoKSxcblx0XHRcdGNvbHVtbi5pc0NlbGxFZGl0aW5nRW5hYmxlZCgpLFxuXHRcdFx0Y29sdW1uLmdldFNvcnRTdGF0dXMoKSxcblx0XHRcdGNvbHVtbi5nZXRTb3J0aW5nRW5hYmxlZCgpXG5cdFx0KTtcblxuXHRcdGNvbHVtbkRlZi5jZWxsVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoY29sdW1uLmdldENlbGxWaWV3KCkpO1xuXHRcdGNvbHVtbkRlZi5oZWFkZXJUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShDZWxsVmlldy5URVhUKTtcblxuXHRcdGNvbHVtbkRlZi50ZW1wbGF0ZUZ1bmN0aW9uID0gY29sdW1uLmdldFRlbXBsYXRlRnVuY3Rpb24oKTtcblxuXHRcdGNvbHVtbkRlZi5lZGl0VGVtcGxhdGUgPSB0aGlzLmZpbmRFZGl0VGVtcGxhdGUoY29sdW1uLmdldERhdGFUeXBlKCkpO1xuXG5cdFx0Y29sdW1uRGVmLndpZHRoID0gK2NvbHVtbi5nZXRXaWR0aCgpO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZjtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRnJvbUFjdGl2ZUNvbHVtbkVudGl0eShhY3RpdmVDb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb24ge1xuXG5cdFx0bGV0IGNvbHVtbkRlZiA9IG5ldyBDb2x1bW5EZWZpbml0aW9uKFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldEZpZWxkKCksXG5cdFx0XHRuZXcgQ29sdW1uRGVmaW5pdGlvbklkKGFjdGl2ZUNvbHVtbi5nZXRJZCgpLnRvU3RyaW5nKCkpLFxuXHRcdFx0dHJ1ZSwgLy8gcmVtb3ZlLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldERhdGFUeXBlKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0VmlldygpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldEFsaWduKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0SGVhZGVyKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uaXNDZWxsRWRpdGluZ0VuYWJsZWQoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRTb3J0U3RhdHVzKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0U29ydGluZ0VuYWJsZWQoKVxuXHRcdCk7XG5cblx0XHRjb2x1bW5EZWYuY2VsbFRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKGFjdGl2ZUNvbHVtbi5nZXRDZWxsVmlldygpKTtcblx0XHRjb2x1bW5EZWYuaGVhZGVyVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoQ2VsbFZpZXcuVEVYVCk7XG5cblx0XHRjb2x1bW5EZWYudGVtcGxhdGVGdW5jdGlvbiA9IGFjdGl2ZUNvbHVtbi5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCk7XG5cblx0XHRjb2x1bW5EZWYuZWRpdFRlbXBsYXRlID0gdGhpcy5maW5kRWRpdFRlbXBsYXRlKGFjdGl2ZUNvbHVtbi5nZXREYXRhVHlwZSgpKTtcblxuXHRcdGNvbHVtbkRlZi53aWR0aCA9ICthY3RpdmVDb2x1bW4uZ2V0V2lkdGgoKTtcblxuXHRcdHJldHVybiBjb2x1bW5EZWY7XG5cdH1cblxuXHRjcmVhdGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4pOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkVudGl0eSkgPT4gdGhpcy5jcmVhdGUoY29sdW1uKSk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRWaWV3VGVtcGxhdGUodmlldzogQ2VsbFZpZXcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblxuXHRcdGlmICh2aWV3ID09PSBDZWxsVmlldy5GVU5DVElPTikge1xuXHRcdFx0cmV0dXJuIHRoaXMudmlld1RlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUoQ2VsbFZpZXcuRlVOQ1RJT04pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZSh2aWV3KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZpbmRFZGl0VGVtcGxhdGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVGVtcGxhdGVSZWY8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZWRpdFRlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUoZGF0YVR5cGUpO1xuXHR9XG5cbn1cbiJdfQ==