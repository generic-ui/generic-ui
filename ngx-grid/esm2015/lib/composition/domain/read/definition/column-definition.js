/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortStatus } from '../../command/column/sort/sort-status';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellContext } from './cell-context';
import { FieldId } from '../../../../structure/domain/structure/command/field/data-type/field.id';
import { CellTemplateWithAccessor } from './cell-template-with-accessor';
export class ColumnDefinition {
    /**
     * @param {?} field
     * @param {?} columnId
     * @param {?} enabled
     * @param {?} header
     * @param {?=} sort
     */
    constructor(field, columnId, enabled, header, sort = SortStatus.NONE) {
        this.field = field;
        this.columnId = columnId;
        this.enabled = enabled;
        this.header = header;
        this.sortStatus = sort;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
    /**
     * @param {?} header
     * @return {?}
     */
    setHeader(header) {
        this.header = header;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    setField(field) {
        this.field = field;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getHeaderCellTemplateWithContext(index) {
        /** @type {?} */
        const header = this.header;
        /** @type {?} */
        let headerCellContext;
        if (typeof header === 'string') {
            headerCellContext = new CellContext(header);
        }
        else if (typeof header === 'function') {
            headerCellContext = new CellContext(header(index));
        }
        /** @type {?} */
        const fieldId = new FieldId(this.field.getId().getId());
        return new CellTemplateWithContext(this.headerTemplate, this.editTemplate, headerCellContext, this.width, fieldId, this.columnId, this.sortStatus, this.enabled);
    }
    /**
     * @return {?}
     */
    getContentCellTemplateWithAccessor() {
        /** @type {?} */
        let accessor = (/**
         * @param {?} entity
         * @return {?}
         */
        (entity) => {
            return this.templateFunction(this.field.getAccessor()(entity));
        });
        return new CellTemplateWithAccessor(this.cellTemplate, this.editTemplate, true, accessor, this.width, this.field.getId());
    }
    /**
     * @return {?}
     */
    getColumn() {
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUl6RSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7OztJQXNCNUIsWUFBWSxLQUFrQixFQUMzQixRQUFrQixFQUNsQixPQUFnQixFQUNoQixNQUErQixFQUMvQixPQUFtQixVQUFVLENBQUMsSUFBSTtRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWtCO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsZ0NBQWdDLENBQUMsS0FBYTs7Y0FFdkMsTUFBTSxHQUFRLElBQUksQ0FBQyxNQUFNOztZQUMzQixpQkFBOEI7UUFFbEMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDL0IsaUJBQWlCLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7YUFBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsRUFBRTtZQUN4QyxpQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNuRDs7Y0FFSyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV2RCxPQUFPLElBQUksdUJBQXVCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEssQ0FBQzs7OztJQUVELGtDQUFrQzs7WUFFN0IsUUFBUTs7OztRQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQTtRQUVELE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMzSCxDQUFDOzs7O0lBRUQsU0FBUztJQUVULENBQUM7Q0FFRDs7O0lBekVBLHdDQUErQjs7SUFFL0IsMENBQWlDOztJQUVqQyx3Q0FBK0I7O0lBRS9CLGlDQUFjOztJQUVkLDRDQUFxQzs7Ozs7SUFFckMsb0NBQW9DOzs7OztJQUVwQyxpQ0FBMkI7Ozs7O0lBRTNCLHNDQUErQjs7Ozs7SUFFL0Isa0NBQXdDOzs7OztJQUV4QyxtQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBTb3J0U3RhdHVzIH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vc29ydC9zb3J0LXN0YXR1cyc7XG5pbXBvcnQgeyBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENlbGxDb250ZXh0IH0gZnJvbSAnLi9jZWxsLWNvbnRleHQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vY29sdW1uLmlkJztcblxuXG5leHBvcnQgY2xhc3MgQ29sdW1uRGVmaW5pdGlvbiB7XG5cblx0Y2VsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGVkaXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdHRlbXBsYXRlRnVuY3Rpb246IChpOiBhbnkpID0+IHN0cmluZztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbklkOiBDb2x1bW5JZDtcblxuXHRwcml2YXRlIGZpZWxkOiBDb2x1bW5GaWVsZDtcblxuXHRwcml2YXRlIHNvcnRTdGF0dXM6IFNvcnRTdGF0dXM7XG5cblx0cHJpdmF0ZSBoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlO1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihmaWVsZDogQ29sdW1uRmllbGQsXG5cdFx0XHRcdGNvbHVtbklkOiBDb2x1bW5JZCxcblx0XHRcdFx0ZW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0aGVhZGVyOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSxcblx0XHRcdFx0c29ydDogU29ydFN0YXR1cyA9IFNvcnRTdGF0dXMuTk9ORSkge1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0XHR0aGlzLmNvbHVtbklkID0gY29sdW1uSWQ7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0XHR0aGlzLnNvcnRTdGF0dXMgPSBzb3J0O1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRzZXRIZWFkZXIoaGVhZGVyOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0fVxuXG5cdHNldEZpZWxkKGZpZWxkOiBDb2x1bW5GaWVsZCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0fVxuXG5cdGdldEhlYWRlckNlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KGluZGV4OiBudW1iZXIpOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB7XG5cblx0XHRjb25zdCBoZWFkZXI6IGFueSA9IHRoaXMuaGVhZGVyO1xuXHRcdGxldCBoZWFkZXJDZWxsQ29udGV4dDogQ2VsbENvbnRleHQ7XG5cblx0XHRpZiAodHlwZW9mIGhlYWRlciA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGhlYWRlckNlbGxDb250ZXh0ID0gbmV3IENlbGxDb250ZXh0KGhlYWRlcik7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgaGVhZGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRoZWFkZXJDZWxsQ29udGV4dCA9IG5ldyBDZWxsQ29udGV4dChoZWFkZXIoaW5kZXgpKTtcblx0XHR9XG5cblx0XHRjb25zdCBmaWVsZElkID0gbmV3IEZpZWxkSWQodGhpcy5maWVsZC5nZXRJZCgpLmdldElkKCkpO1xuXG5cdFx0cmV0dXJuIG5ldyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCh0aGlzLmhlYWRlclRlbXBsYXRlLCB0aGlzLmVkaXRUZW1wbGF0ZSwgaGVhZGVyQ2VsbENvbnRleHQsIHRoaXMud2lkdGgsIGZpZWxkSWQsIHRoaXMuY29sdW1uSWQsIHRoaXMuc29ydFN0YXR1cywgdGhpcy5lbmFibGVkKTtcblx0fVxuXG5cdGdldENvbnRlbnRDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IoKTogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIHtcblxuXHRcdGxldCBhY2Nlc3NvciA9IChlbnRpdHk6IGFueSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMudGVtcGxhdGVGdW5jdGlvbih0aGlzLmZpZWxkLmdldEFjY2Vzc29yKCkoZW50aXR5KSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiBuZXcgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yKHRoaXMuY2VsbFRlbXBsYXRlLCB0aGlzLmVkaXRUZW1wbGF0ZSwgdHJ1ZSwgYWNjZXNzb3IsIHRoaXMud2lkdGgsIHRoaXMuZmllbGQuZ2V0SWQoKSk7XG5cdH1cblxuXHRnZXRDb2x1bW4oKTogYW55IHtcblxuXHR9XG5cbn1cbiJdfQ==