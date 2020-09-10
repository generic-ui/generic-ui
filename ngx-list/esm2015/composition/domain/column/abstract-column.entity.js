/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Entity } from '@generic-ui/hermes';
import { ColumnAlign } from './column-align';
import { ViewEntity } from './view.entity';
import { DataType } from '../../../structure/field/domain/core/field/data/data-type';
/**
 * @abstract
 */
export class AbstractColumnEntity extends Entity {
    /**
     * @protected
     * @param {?} columnId
     * @param {?} columnField
     * @param {?} columnConfig
     * @param {?} presentation
     * @param {?=} header
     * @param {?=} align
     * @param {?=} view
     * @param {?=} width
     */
    constructor(columnId, columnField, columnConfig, presentation, header, align, view, width) {
        super(columnId);
        this.columnField = columnField;
        this.columnConfig = columnConfig;
        this.presentation = presentation;
        this.view = ViewEntity.fromDataType(columnField.getDataType());
        if (header) {
            this.header = header;
        }
        if (view) {
            this.view = view;
        }
        if (width) {
            this.width = width;
        }
        this.setInitialAlign(columnField, align);
    }
    /**
     * @return {?}
     */
    getPresentation() {
        return this.presentation;
    }
    /**
     * @return {?}
     */
    getColumnConfig() {
        return this.columnConfig;
    }
    /**
     * @return {?}
     */
    getField() {
        return this.columnField;
    }
    /**
     * @return {?}
     */
    getHeader() {
        return this.header;
    }
    /**
     * @return {?}
     */
    getDataType() {
        return this.columnField.getDataType();
    }
    /**
     * @return {?}
     */
    getCellView() {
        return this.view.getCellView();
    }
    /**
     * @return {?}
     */
    getTemplateFunction() {
        return this.view.getTemplateFunction();
    }
    /**
     * @param {?} view
     * @return {?}
     */
    setView(view) {
        this.view = view;
    }
    /**
     * @param {?} header
     * @return {?}
     */
    setHeader(header) {
        this.header = header;
    }
    /**
     * @return {?}
     */
    getView() {
        return this.view;
    }
    /**
     * @return {?}
     */
    getAlign() {
        return this.align;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.width = width;
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    getSortingEnabled() {
        /** @type {?} */
        const config = this.columnConfig;
        if (config.sorting !== undefined && config.sorting !== null) {
            if (config.sorting.enabled === undefined || config.sorting.enabled === null) {
                return true;
            }
            return config.sorting.enabled;
        }
    }
    /**
     * @return {?}
     */
    isCellEditingEnabled() {
        /** @type {?} */
        const config = this.columnConfig;
        if (config.cellEditing !== undefined && config.cellEditing !== null) {
            if (config.cellEditing.enabled === undefined || config.cellEditing.enabled === null) {
                return true;
            }
            return config.cellEditing.enabled;
        }
        return true;
    }
    /**
     * @private
     * @param {?} columnField
     * @param {?=} align
     * @return {?}
     */
    setInitialAlign(columnField, align) {
        if (align !== undefined && align !== null) {
            this.align = align;
        }
        else if (columnField.getDataType() === DataType.NUMBER) {
            this.align = ColumnAlign.RIGHT;
        }
        else {
            this.align = ColumnAlign.LEFT;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.columnField;
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.header;
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.width;
    /**
     * @type {?}
     * @protected
     */
    AbstractColumnEntity.prototype.align;
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.columnConfig;
    /**
     * @type {?}
     * @protected
     */
    AbstractColumnEntity.prototype.view;
    /**
     * @type {?}
     * @protected
     */
    AbstractColumnEntity.prototype.presentation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9hYnN0cmFjdC1jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJEQUEyRCxDQUFDOzs7O0FBSXJGLE1BQU0sT0FBZ0Isb0JBQXFCLFNBQVEsTUFBZ0I7Ozs7Ozs7Ozs7OztJQWdCbEUsWUFBc0IsUUFBa0IsRUFDakMsV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsWUFBZ0MsRUFDaEMsTUFBZ0MsRUFDaEMsS0FBbUIsRUFDbkIsSUFBaUIsRUFDakIsS0FBYztRQUNwQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFFakMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELElBQUksTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDckI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBZ0I7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBK0I7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsaUJBQWlCOztjQUNWLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWTtRQUVoQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBRTVELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDNUUsT0FBTyxJQUFJLENBQUM7YUFDWjtZQUNELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDOUI7SUFDRixDQUFDOzs7O0lBRUQsb0JBQW9COztjQUNiLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWTtRQUVoQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBRXBFLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDcEYsT0FBTyxJQUFJLENBQUM7YUFDWjtZQUNELE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7U0FDbEM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Ozs7Ozs7SUFFTyxlQUFlLENBQUMsV0FBd0IsRUFBRSxLQUFtQjtRQUVwRSxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQjthQUFNLElBQUksV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1NBQy9CO2FBQU07WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDOUI7SUFDRixDQUFDO0NBRUQ7Ozs7OztJQXJJQSwyQ0FBaUM7Ozs7O0lBRWpDLHNDQUF5Qzs7Ozs7SUFFekMscUNBQXVCOzs7OztJQUV2QixxQ0FBNkI7Ozs7O0lBRTdCLDRDQUFtQzs7Ozs7SUFFbkMsb0NBQTJCOzs7OztJQUUzQiw0Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9wcmVzZW50YXRpb24vY29sdW1uLnByZXNlbnRhdGlvbic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdENvbHVtbkVudGl0eSBleHRlbmRzIEVudGl0eTxDb2x1bW5JZD4ge1xuXG5cdHByaXZhdGUgY29sdW1uRmllbGQ6IENvbHVtbkZpZWxkO1xuXG5cdHByaXZhdGUgaGVhZGVyPzogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0cHJpdmF0ZSB3aWR0aD86IG51bWJlcjtcblxuXHRwcm90ZWN0ZWQgYWxpZ246IENvbHVtbkFsaWduO1xuXG5cdHByaXZhdGUgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWc7XG5cblx0cHJvdGVjdGVkIHZpZXc6IFZpZXdFbnRpdHk7XG5cblx0cHJvdGVjdGVkIHByZXNlbnRhdGlvbjogQ29sdW1uUHJlc2VudGF0aW9uO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdFx0XHQgIGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0XHRcdCAgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcsXG5cdFx0XHRcdFx0XHQgIHByZXNlbnRhdGlvbjogQ29sdW1uUHJlc2VudGF0aW9uLFxuXHRcdFx0XHRcdFx0ICBoZWFkZXI/OiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSxcblx0XHRcdFx0XHRcdCAgYWxpZ24/OiBDb2x1bW5BbGlnbixcblx0XHRcdFx0XHRcdCAgdmlldz86IFZpZXdFbnRpdHksXG5cdFx0XHRcdFx0XHQgIHdpZHRoPzogbnVtYmVyKSB7XG5cdFx0c3VwZXIoY29sdW1uSWQpO1xuXHRcdHRoaXMuY29sdW1uRmllbGQgPSBjb2x1bW5GaWVsZDtcblx0XHR0aGlzLmNvbHVtbkNvbmZpZyA9IGNvbHVtbkNvbmZpZztcblx0XHR0aGlzLnByZXNlbnRhdGlvbiA9IHByZXNlbnRhdGlvbjtcblxuXHRcdHRoaXMudmlldyA9IFZpZXdFbnRpdHkuZnJvbURhdGFUeXBlKGNvbHVtbkZpZWxkLmdldERhdGFUeXBlKCkpO1xuXG5cdFx0aWYgKGhlYWRlcikge1xuXHRcdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdFx0fVxuXG5cdFx0aWYgKHZpZXcpIHtcblx0XHRcdHRoaXMudmlldyA9IHZpZXc7XG5cdFx0fVxuXG5cdFx0aWYgKHdpZHRoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRJbml0aWFsQWxpZ24oY29sdW1uRmllbGQsIGFsaWduKTtcblx0fVxuXG5cdGdldFByZXNlbnRhdGlvbigpOiBDb2x1bW5QcmVzZW50YXRpb24ge1xuXHRcdHJldHVybiB0aGlzLnByZXNlbnRhdGlvbjtcblx0fVxuXG5cdGdldENvbHVtbkNvbmZpZygpOiBDb2x1bW5Db25maWcge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkNvbmZpZztcblx0fVxuXG5cdGdldEZpZWxkKCk6IENvbHVtbkZpZWxkIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5GaWVsZDtcblx0fVxuXG5cdGdldEhlYWRlcigpOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyO1xuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkLmdldERhdGFUeXBlKCk7XG5cdH1cblxuXHRnZXRDZWxsVmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5nZXRDZWxsVmlldygpO1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZpZXcuZ2V0VGVtcGxhdGVGdW5jdGlvbigpO1xuXHR9XG5cblx0c2V0Vmlldyh2aWV3OiBWaWV3RW50aXR5KTogdm9pZCB7XG5cdFx0dGhpcy52aWV3ID0gdmlldztcblx0fVxuXG5cdHNldEhlYWRlcihoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdH1cblxuXHRnZXRWaWV3KCk6IFZpZXdFbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLnZpZXc7XG5cdH1cblxuXHRnZXRBbGlnbigpOiBDb2x1bW5BbGlnbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ247XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldFNvcnRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGNvbmZpZyA9IHRoaXMuY29sdW1uQ29uZmlnO1xuXG5cdFx0aWYgKGNvbmZpZy5zb3J0aW5nICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNvcnRpbmcgIT09IG51bGwpIHtcblxuXHRcdFx0aWYgKGNvbmZpZy5zb3J0aW5nLmVuYWJsZWQgPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc29ydGluZy5lbmFibGVkID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvbmZpZy5zb3J0aW5nLmVuYWJsZWQ7XG5cdFx0fVxuXHR9XG5cblx0aXNDZWxsRWRpdGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgY29uZmlnID0gdGhpcy5jb2x1bW5Db25maWc7XG5cblx0XHRpZiAoY29uZmlnLmNlbGxFZGl0aW5nICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmNlbGxFZGl0aW5nICE9PSBudWxsKSB7XG5cblx0XHRcdGlmIChjb25maWcuY2VsbEVkaXRpbmcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5jZWxsRWRpdGluZy5lbmFibGVkID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvbmZpZy5jZWxsRWRpdGluZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRJbml0aWFsQWxpZ24oY29sdW1uRmllbGQ6IENvbHVtbkZpZWxkLCBhbGlnbj86IENvbHVtbkFsaWduKTogdm9pZCB7XG5cblx0XHRpZiAoYWxpZ24gIT09IHVuZGVmaW5lZCAmJiBhbGlnbiAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5hbGlnbiA9IGFsaWduO1xuXHRcdH0gZWxzZSBpZiAoY29sdW1uRmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHR0aGlzLmFsaWduID0gQ29sdW1uQWxpZ24uUklHSFQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWxpZ24gPSBDb2x1bW5BbGlnbi5MRUZUO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=