/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortStatus } from '../../command/column/sort/sort-status';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellContext } from './cell-context';
import { FieldId } from '../../../structure/command/field/data-type/field.id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRW5FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFJekU7SUFzQkMsMEJBQVksS0FBa0IsRUFDM0IsUUFBa0IsRUFDbEIsT0FBZ0IsRUFDaEIsTUFBK0IsRUFDL0IsSUFBa0M7UUFBbEMscUJBQUEsRUFBQSxPQUFtQixVQUFVLENBQUMsSUFBSTtRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsb0NBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsb0NBQVM7Ozs7SUFBVCxVQUFVLE1BQWM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxtQ0FBUTs7OztJQUFSLFVBQVMsS0FBa0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCwyREFBZ0M7Ozs7SUFBaEMsVUFBaUMsS0FBYTs7WUFFdkMsTUFBTSxHQUFRLElBQUksQ0FBQyxNQUFNOztZQUMzQixpQkFBOEI7UUFFbEMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDL0IsaUJBQWlCLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7YUFBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsRUFBRTtZQUN4QyxpQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNuRDs7WUFFSyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV2RCxPQUFPLElBQUksdUJBQXVCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEssQ0FBQzs7OztJQUVELDZEQUFrQzs7O0lBQWxDO1FBQUEsaUJBT0M7O1lBTEksUUFBUTs7OztRQUFHLFVBQUMsTUFBVztZQUMxQixPQUFPLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFBO1FBRUQsT0FBTyxJQUFJLHdCQUF3QixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzNILENBQUM7Ozs7SUFFRCxvQ0FBUzs7O0lBQVQ7SUFFQSxDQUFDO0lBRUYsdUJBQUM7QUFBRCxDQUFDLEFBM0VELElBMkVDOzs7O0lBekVBLHdDQUErQjs7SUFFL0IsMENBQWlDOztJQUVqQyx3Q0FBK0I7O0lBRS9CLGlDQUFjOztJQUVkLDRDQUFxQzs7Ozs7SUFFckMsb0NBQW9DOzs7OztJQUVwQyxpQ0FBMkI7Ozs7O0lBRTNCLHNDQUErQjs7Ozs7SUFFL0Isa0NBQXdDOzs7OztJQUV4QyxtQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBTb3J0U3RhdHVzIH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vc29ydC9zb3J0LXN0YXR1cyc7XG5pbXBvcnQgeyBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENlbGxDb250ZXh0IH0gZnJvbSAnLi9jZWxsLWNvbnRleHQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL2NvbHVtbi5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbHVtbkRlZmluaXRpb24ge1xuXG5cdGNlbGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRlZGl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0d2lkdGg6IG51bWJlcjtcblxuXHR0ZW1wbGF0ZUZ1bmN0aW9uOiAoaTogYW55KSA9PiBzdHJpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5JZDogQ29sdW1uSWQ7XG5cblx0cHJpdmF0ZSBmaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0cHJpdmF0ZSBzb3J0U3RhdHVzOiBTb3J0U3RhdHVzO1xuXG5cdHByaXZhdGUgaGVhZGVyOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZTtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoZmllbGQ6IENvbHVtbkZpZWxkLFxuXHRcdFx0XHRjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUsXG5cdFx0XHRcdHNvcnQ6IFNvcnRTdGF0dXMgPSBTb3J0U3RhdHVzLk5PTkUpIHtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdFx0dGhpcy5jb2x1bW5JZCA9IGNvbHVtbklkO1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gc29ydDtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0c2V0SGVhZGVyKGhlYWRlcjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdH1cblxuXHRzZXRGaWVsZChmaWVsZDogQ29sdW1uRmllbGQpOiB2b2lkIHtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdH1cblxuXHRnZXRIZWFkZXJDZWxsVGVtcGxhdGVXaXRoQ29udGV4dChpbmRleDogbnVtYmVyKTogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQge1xuXG5cdFx0Y29uc3QgaGVhZGVyOiBhbnkgPSB0aGlzLmhlYWRlcjtcblx0XHRsZXQgaGVhZGVyQ2VsbENvbnRleHQ6IENlbGxDb250ZXh0O1xuXG5cdFx0aWYgKHR5cGVvZiBoZWFkZXIgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRoZWFkZXJDZWxsQ29udGV4dCA9IG5ldyBDZWxsQ29udGV4dChoZWFkZXIpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGhlYWRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQgPSBuZXcgQ2VsbENvbnRleHQoaGVhZGVyKGluZGV4KSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmllbGRJZCA9IG5ldyBGaWVsZElkKHRoaXMuZmllbGQuZ2V0SWQoKS5nZXRJZCgpKTtcblxuXHRcdHJldHVybiBuZXcgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQodGhpcy5oZWFkZXJUZW1wbGF0ZSwgdGhpcy5lZGl0VGVtcGxhdGUsIGhlYWRlckNlbGxDb250ZXh0LCB0aGlzLndpZHRoLCBmaWVsZElkLCB0aGlzLmNvbHVtbklkLCB0aGlzLnNvcnRTdGF0dXMsIHRoaXMuZW5hYmxlZCk7XG5cdH1cblxuXHRnZXRDb250ZW50Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yKCk6IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB7XG5cblx0XHRsZXQgYWNjZXNzb3IgPSAoZW50aXR5OiBhbnkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb24odGhpcy5maWVsZC5nZXRBY2Nlc3NvcigpKGVudGl0eSkpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gbmV3IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcih0aGlzLmNlbGxUZW1wbGF0ZSwgdGhpcy5lZGl0VGVtcGxhdGUsIHRydWUsIGFjY2Vzc29yLCB0aGlzLndpZHRoLCB0aGlzLmZpZWxkLmdldElkKCkpO1xuXHR9XG5cblx0Z2V0Q29sdW1uKCk6IGFueSB7XG5cblx0fVxuXG59XG4iXX0=