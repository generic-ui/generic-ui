/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortOrder } from '../../command/column/sort/sort-order';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellContext } from './cell-context';
import { FieldId } from '../../../../structure/domain/structure/command/field/data-type/field.id';
import { CellTemplateWithAccessor } from './cell-template-with-accessor';
var ColumnDefinition = /** @class */ (function () {
    function ColumnDefinition(field, columnId, enabled, type, // REFACTOR
    view, // REFACTOR
    header, sort, sortable) {
        if (sort === void 0) { sort = SortOrder.NONE; }
        if (sortable === void 0) { sortable = true; }
        this.type = type;
        this.view = view;
        this.sortable = true;
        this.field = field;
        this.columnId = columnId;
        this.enabled = enabled;
        this.header = header;
        this.sortStatus = sort;
        this.sortable = sortable;
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
        return new CellTemplateWithContext(this.headerTemplate, this.editTemplate, headerCellContext, this.width, fieldId, this.columnId, this.sortStatus, this.enabled, this.sortable);
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
        return new CellTemplateWithAccessor(this.cellTemplate, this.editTemplate, true, accessor, this.width, this.field.getId(), this.type, this.view);
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
    ColumnDefinition.prototype.sortable;
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
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.type;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.view;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU16RTtJQXdCQywwQkFBWSxLQUFrQixFQUMzQixRQUFrQixFQUNsQixPQUFnQixFQUNDLElBQWMsRUFBRSxXQUFXO0lBQzNCLElBQWdCLEVBQUUsV0FBVztJQUM5QyxNQUErQixFQUMvQixJQUFnQyxFQUNoQyxRQUFlO1FBRGYscUJBQUEsRUFBQSxPQUFrQixTQUFTLENBQUMsSUFBSTtRQUNoQyx5QkFBQSxFQUFBLGVBQWU7UUFKRSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVY1QixhQUFRLEdBQVksSUFBSSxDQUFDO1FBY2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxvQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxvQ0FBUzs7OztJQUFULFVBQVUsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELG1DQUFROzs7O0lBQVIsVUFBUyxLQUFrQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELDJEQUFnQzs7OztJQUFoQyxVQUFpQyxLQUFhOztZQUV2QyxNQUFNLEdBQVEsSUFBSSxDQUFDLE1BQU07O1lBQzNCLGlCQUE4QjtRQUVsQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUMvQixpQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QzthQUFNLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFO1lBQ3hDLGlCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25EOztZQUVLLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXZELE9BQU8sSUFBSSx1QkFBdUIsQ0FDakMsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLFlBQVksRUFDakIsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQ1YsT0FBTyxFQUNQLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxRQUFRLENBQ2IsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCw2REFBa0M7OztJQUFsQztRQUFBLGlCQWdCQzs7WUFkSSxRQUFROzs7O1FBQUcsVUFBQyxNQUFXO1lBQzFCLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUE7UUFFRCxPQUFPLElBQUksd0JBQXdCLENBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksRUFDSixRQUFRLEVBQ1IsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUNsQixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxJQUFJLENBQ1QsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxvQ0FBUzs7O0lBQVQ7SUFFQSxDQUFDO0lBRUYsdUJBQUM7QUFBRCxDQUFDLEFBcEdELElBb0dDOzs7O0lBbEdBLHdDQUErQjs7SUFFL0IsMENBQWlDOztJQUVqQyx3Q0FBK0I7O0lBRS9CLGlDQUFjOztJQUVkLDRDQUFxQzs7Ozs7SUFFckMsb0NBQW9DOzs7OztJQUVwQyxpQ0FBMkI7Ozs7O0lBRTNCLHNDQUE4Qjs7Ozs7SUFFOUIsb0NBQWlDOzs7OztJQUVqQyxrQ0FBd0M7Ozs7O0lBRXhDLG1DQUF5Qjs7Ozs7SUFLdEIsZ0NBQStCOzs7OztJQUMvQixnQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi9jb21tYW5kL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsQ29udGV4dCB9IGZyb20gJy4vY2VsbC1jb250ZXh0JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vdmlldy5lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRjZWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0aGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0ZWRpdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0dGVtcGxhdGVGdW5jdGlvbjogKGk6IGFueSkgPT4gc3RyaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uSWQ6IENvbHVtbklkO1xuXG5cdHByaXZhdGUgZmllbGQ6IENvbHVtbkZpZWxkO1xuXG5cdHByaXZhdGUgc29ydFN0YXR1czogU29ydE9yZGVyO1xuXG5cdHByaXZhdGUgc29ydGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgaGVhZGVyOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZTtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoZmllbGQ6IENvbHVtbkZpZWxkLFxuXHRcdFx0XHRjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHlwZTogRGF0YVR5cGUsIC8vIFJFRkFDVE9SXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlld0VudGl0eSwgLy8gUkVGQUNUT1Jcblx0XHRcdFx0aGVhZGVyOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSxcblx0XHRcdFx0c29ydDogU29ydE9yZGVyID0gU29ydE9yZGVyLk5PTkUsXG5cdFx0XHRcdHNvcnRhYmxlID0gdHJ1ZSkge1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0XHR0aGlzLmNvbHVtbklkID0gY29sdW1uSWQ7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0XHR0aGlzLnNvcnRTdGF0dXMgPSBzb3J0O1xuXHRcdHRoaXMuc29ydGFibGUgPSBzb3J0YWJsZTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0c2V0SGVhZGVyKGhlYWRlcjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdH1cblxuXHRzZXRGaWVsZChmaWVsZDogQ29sdW1uRmllbGQpOiB2b2lkIHtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdH1cblxuXHRnZXRIZWFkZXJDZWxsVGVtcGxhdGVXaXRoQ29udGV4dChpbmRleDogbnVtYmVyKTogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQge1xuXG5cdFx0Y29uc3QgaGVhZGVyOiBhbnkgPSB0aGlzLmhlYWRlcjtcblx0XHRsZXQgaGVhZGVyQ2VsbENvbnRleHQ6IENlbGxDb250ZXh0O1xuXG5cdFx0aWYgKHR5cGVvZiBoZWFkZXIgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRoZWFkZXJDZWxsQ29udGV4dCA9IG5ldyBDZWxsQ29udGV4dChoZWFkZXIpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGhlYWRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQgPSBuZXcgQ2VsbENvbnRleHQoaGVhZGVyKGluZGV4KSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmllbGRJZCA9IG5ldyBGaWVsZElkKHRoaXMuZmllbGQuZ2V0SWQoKS5nZXRJZCgpKTtcblxuXHRcdHJldHVybiBuZXcgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoXG5cdFx0XHR0aGlzLmhlYWRlclRlbXBsYXRlLFxuXHRcdFx0dGhpcy5lZGl0VGVtcGxhdGUsXG5cdFx0XHRoZWFkZXJDZWxsQ29udGV4dCxcblx0XHRcdHRoaXMud2lkdGgsXG5cdFx0XHRmaWVsZElkLFxuXHRcdFx0dGhpcy5jb2x1bW5JZCxcblx0XHRcdHRoaXMuc29ydFN0YXR1cyxcblx0XHRcdHRoaXMuZW5hYmxlZCxcblx0XHRcdHRoaXMuc29ydGFibGVcblx0XHQpO1xuXHR9XG5cblx0Z2V0Q29udGVudENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcigpOiBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3Ige1xuXG5cdFx0bGV0IGFjY2Vzc29yID0gKGVudGl0eTogYW55KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uKHRoaXMuZmllbGQuZ2V0QWNjZXNzb3IoKShlbnRpdHkpKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIG5ldyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IoXG5cdFx0XHR0aGlzLmNlbGxUZW1wbGF0ZSxcblx0XHRcdHRoaXMuZWRpdFRlbXBsYXRlLFxuXHRcdFx0dHJ1ZSxcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0dGhpcy53aWR0aCxcblx0XHRcdHRoaXMuZmllbGQuZ2V0SWQoKSxcblx0XHRcdHRoaXMudHlwZSxcblx0XHRcdHRoaXMudmlld1xuXHRcdCk7XG5cdH1cblxuXHRnZXRDb2x1bW4oKTogYW55IHtcblxuXHR9XG5cbn1cbiJdfQ==