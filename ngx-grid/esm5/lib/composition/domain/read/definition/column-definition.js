/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortStatus } from '../../command/column/sort/sort-status';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellContext } from './cell-context';
import { FieldId } from '../../../../structure/domain/structure/command/field/data-type/field.id';
import { CellTemplateWithAccessor } from './cell-template-with-accessor';
var ColumnDefinition = /** @class */ (function () {
    function ColumnDefinition(field, columnId, enabled, header, sort) {
        if (sort === void 0) { sort = SortStatus.NONE; }
        this.field = field;
        this.columnId = columnId;
        this.enabled = enabled;
        this.header = header;
        this.sortStatus = sort;
    }
    /**
     * @return {?}
     */
    ColumnDefinition.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    /**
     * @param {?} header
     * @return {?}
     */
    ColumnDefinition.prototype.setHeader = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        this.header = header;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    ColumnDefinition.prototype.setField = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.field = field;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ColumnDefinition.prototype.getHeaderCellTemplateWithContext = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var header = this.header;
        /** @type {?} */
        var headerCellContext;
        if (typeof header === 'string') {
            headerCellContext = new CellContext(header);
        }
        else if (typeof header === 'function') {
            headerCellContext = new CellContext(header(index));
        }
        /** @type {?} */
        var fieldId = new FieldId(this.field.getId().getId());
        return new CellTemplateWithContext(this.headerTemplate, this.editTemplate, headerCellContext, this.width, fieldId, this.columnId, this.sortStatus, this.enabled);
    };
    /**
     * @return {?}
     */
    ColumnDefinition.prototype.getContentCellTemplateWithAccessor = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var accessor = (/**
         * @param {?} entity
         * @return {?}
         */
        function (entity) {
            return _this.templateFunction(_this.field.getAccessor()(entity));
        });
        return new CellTemplateWithAccessor(this.cellTemplate, this.editTemplate, true, accessor, this.width, this.field.getId());
    };
    /**
     * @return {?}
     */
    ColumnDefinition.prototype.getColumn = /**
     * @return {?}
     */
    function () {
    };
    return ColumnDefinition;
}());
export { ColumnDefinition };
if (false) {
    /** @type {?} */
    ColumnDefinition.prototype.cellTemplate;
    /** @type {?} */
    ColumnDefinition.prototype.headerTemplate;
    /** @type {?} */
    ColumnDefinition.prototype.editTemplate;
    /** @type {?} */
    ColumnDefinition.prototype.width;
    /** @type {?} */
    ColumnDefinition.prototype.templateFunction;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.columnId;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.field;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.header;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUl6RTtJQXNCQywwQkFBWSxLQUFrQixFQUMzQixRQUFrQixFQUNsQixPQUFnQixFQUNoQixNQUErQixFQUMvQixJQUFrQztRQUFsQyxxQkFBQSxFQUFBLE9BQW1CLFVBQVUsQ0FBQyxJQUFJO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxvQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxvQ0FBUzs7OztJQUFULFVBQVUsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELG1DQUFROzs7O0lBQVIsVUFBUyxLQUFrQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELDJEQUFnQzs7OztJQUFoQyxVQUFpQyxLQUFhOztZQUV2QyxNQUFNLEdBQVEsSUFBSSxDQUFDLE1BQU07O1lBQzNCLGlCQUE4QjtRQUVsQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUMvQixpQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QzthQUFNLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFO1lBQ3hDLGlCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25EOztZQUVLLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXZELE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsSyxDQUFDOzs7O0lBRUQsNkRBQWtDOzs7SUFBbEM7UUFBQSxpQkFPQzs7WUFMSSxRQUFROzs7O1FBQUcsVUFBQyxNQUFXO1lBQzFCLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUE7UUFFRCxPQUFPLElBQUksd0JBQXdCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDM0gsQ0FBQzs7OztJQUVELG9DQUFTOzs7SUFBVDtJQUVBLENBQUM7SUFFRix1QkFBQztBQUFELENBQUMsQUEzRUQsSUEyRUM7Ozs7SUF6RUEsd0NBQStCOztJQUUvQiwwQ0FBaUM7O0lBRWpDLHdDQUErQjs7SUFFL0IsaUNBQWM7O0lBRWQsNENBQXFDOzs7OztJQUVyQyxvQ0FBb0M7Ozs7O0lBRXBDLGlDQUEyQjs7Ozs7SUFFM0Isc0NBQStCOzs7OztJQUUvQixrQ0FBd0M7Ozs7O0lBRXhDLG1DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IFNvcnRTdGF0dXMgfSBmcm9tICcuLi8uLi9jb21tYW5kL2NvbHVtbi9zb3J0L3NvcnQtc3RhdHVzJztcbmltcG9ydCB7IEhlYWRlclRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbENvbnRleHQgfSBmcm9tICcuL2NlbGwtY29udGV4dCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi8uLi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRjZWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0aGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0ZWRpdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0dGVtcGxhdGVGdW5jdGlvbjogKGk6IGFueSkgPT4gc3RyaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uSWQ6IENvbHVtbklkO1xuXG5cdHByaXZhdGUgZmllbGQ6IENvbHVtbkZpZWxkO1xuXG5cdHByaXZhdGUgc29ydFN0YXR1czogU29ydFN0YXR1cztcblxuXHRwcml2YXRlIGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0Y29sdW1uSWQ6IENvbHVtbklkLFxuXHRcdFx0XHRlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHRzb3J0OiBTb3J0U3RhdHVzID0gU29ydFN0YXR1cy5OT05FKSB7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHRcdHRoaXMuY29sdW1uSWQgPSBjb2x1bW5JZDtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnQ7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdHNldEhlYWRlcihoZWFkZXI6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHR9XG5cblx0c2V0RmllbGQoZmllbGQ6IENvbHVtbkZpZWxkKTogdm9pZCB7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHR9XG5cblx0Z2V0SGVhZGVyQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoaW5kZXg6IG51bWJlcik6IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IHtcblxuXHRcdGNvbnN0IGhlYWRlcjogYW55ID0gdGhpcy5oZWFkZXI7XG5cdFx0bGV0IGhlYWRlckNlbGxDb250ZXh0OiBDZWxsQ29udGV4dDtcblxuXHRcdGlmICh0eXBlb2YgaGVhZGVyID09PSAnc3RyaW5nJykge1xuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQgPSBuZXcgQ2VsbENvbnRleHQoaGVhZGVyKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBoZWFkZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGhlYWRlckNlbGxDb250ZXh0ID0gbmV3IENlbGxDb250ZXh0KGhlYWRlcihpbmRleCkpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBuZXcgRmllbGRJZCh0aGlzLmZpZWxkLmdldElkKCkuZ2V0SWQoKSk7XG5cblx0XHRyZXR1cm4gbmV3IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KHRoaXMuaGVhZGVyVGVtcGxhdGUsIHRoaXMuZWRpdFRlbXBsYXRlLCBoZWFkZXJDZWxsQ29udGV4dCwgdGhpcy53aWR0aCwgZmllbGRJZCwgdGhpcy5jb2x1bW5JZCwgdGhpcy5zb3J0U3RhdHVzLCB0aGlzLmVuYWJsZWQpO1xuXHR9XG5cblx0Z2V0Q29udGVudENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcigpOiBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3Ige1xuXG5cdFx0bGV0IGFjY2Vzc29yID0gKGVudGl0eTogYW55KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uKHRoaXMuZmllbGQuZ2V0QWNjZXNzb3IoKShlbnRpdHkpKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIG5ldyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IodGhpcy5jZWxsVGVtcGxhdGUsIHRoaXMuZWRpdFRlbXBsYXRlLCB0cnVlLCBhY2Nlc3NvciwgdGhpcy53aWR0aCwgdGhpcy5maWVsZC5nZXRJZCgpKTtcblx0fVxuXG5cdGdldENvbHVtbigpOiBhbnkge1xuXG5cdH1cblxufVxuIl19