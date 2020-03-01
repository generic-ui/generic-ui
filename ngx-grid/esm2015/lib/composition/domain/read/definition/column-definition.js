/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortOrder } from '../../command/column/sort/sort-order';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellContext } from './cell-context';
import { FieldId } from '../../../../structure/domain/structure/command/field/data-type/field.id';
import { CellTemplateWithAccessor } from './cell-template-with-accessor';
export class ColumnDefinition {
    /**
     * @param {?} field
     * @param {?} columnId
     * @param {?} enabled
     * @param {?} type
     * @param {?} view
     * @param {?} header
     * @param {?=} sort
     * @param {?=} sortable
     */
    constructor(field, columnId, enabled, type, // REFACTOR
    view, // REFACTOR
    header, sort = SortOrder.NONE, sortable = true) {
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
        return new CellTemplateWithContext(this.headerTemplate, this.editTemplate, headerCellContext, this.width, fieldId, this.columnId, this.sortStatus, this.enabled, this.sortable);
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
        return new CellTemplateWithAccessor(this.cellTemplate, this.editTemplate, true, accessor, this.width, this.field.getId(), this.type, this.view);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU16RSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7OztJQXdCNUIsWUFBWSxLQUFrQixFQUMzQixRQUFrQixFQUNsQixPQUFnQixFQUNDLElBQWMsRUFBRSxXQUFXO0lBQzNCLElBQWdCLEVBQUUsV0FBVztJQUM5QyxNQUErQixFQUMvQixPQUFrQixTQUFTLENBQUMsSUFBSSxFQUNoQyxRQUFRLEdBQUcsSUFBSTtRQUpFLFNBQUksR0FBSixJQUFJLENBQVU7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBVjVCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFjaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFrQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELGdDQUFnQyxDQUFDLEtBQWE7O2NBRXZDLE1BQU0sR0FBUSxJQUFJLENBQUMsTUFBTTs7WUFDM0IsaUJBQThCO1FBRWxDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQy9CLGlCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO2FBQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUU7WUFDeEMsaUJBQWlCLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbkQ7O2NBRUssT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdkQsT0FBTyxJQUFJLHVCQUF1QixDQUNqQyxJQUFJLENBQUMsY0FBYyxFQUNuQixJQUFJLENBQUMsWUFBWSxFQUNqQixpQkFBaUIsRUFDakIsSUFBSSxDQUFDLEtBQUssRUFDVixPQUFPLEVBQ1AsSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFFBQVEsQ0FDYixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGtDQUFrQzs7WUFFN0IsUUFBUTs7OztRQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQTtRQUVELE9BQU8sSUFBSSx3QkFBd0IsQ0FDbEMsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxFQUNKLFFBQVEsRUFDUixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLElBQUksQ0FDVCxDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELFNBQVM7SUFFVCxDQUFDO0NBRUQ7OztJQWxHQSx3Q0FBK0I7O0lBRS9CLDBDQUFpQzs7SUFFakMsd0NBQStCOztJQUUvQixpQ0FBYzs7SUFFZCw0Q0FBcUM7Ozs7O0lBRXJDLG9DQUFvQzs7Ozs7SUFFcEMsaUNBQTJCOzs7OztJQUUzQixzQ0FBOEI7Ozs7O0lBRTlCLG9DQUFpQzs7Ozs7SUFFakMsa0NBQXdDOzs7OztJQUV4QyxtQ0FBeUI7Ozs7O0lBS3RCLGdDQUErQjs7Ozs7SUFDL0IsZ0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuLi8uLi9jb21tYW5kL2NvbHVtbi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IEhlYWRlclRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbENvbnRleHQgfSBmcm9tICcuL2NlbGwtY29udGV4dCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi8uLi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL3ZpZXcuZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgQ29sdW1uRGVmaW5pdGlvbiB7XG5cblx0Y2VsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGVkaXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdHRlbXBsYXRlRnVuY3Rpb246IChpOiBhbnkpID0+IHN0cmluZztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbklkOiBDb2x1bW5JZDtcblxuXHRwcml2YXRlIGZpZWxkOiBDb2x1bW5GaWVsZDtcblxuXHRwcml2YXRlIHNvcnRTdGF0dXM6IFNvcnRPcmRlcjtcblxuXHRwcml2YXRlIHNvcnRhYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0Y29sdW1uSWQ6IENvbHVtbklkLFxuXHRcdFx0XHRlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHR5cGU6IERhdGFUeXBlLCAvLyBSRUZBQ1RPUlxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXdFbnRpdHksIC8vIFJFRkFDVE9SXG5cdFx0XHRcdGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUsXG5cdFx0XHRcdHNvcnQ6IFNvcnRPcmRlciA9IFNvcnRPcmRlci5OT05FLFxuXHRcdFx0XHRzb3J0YWJsZSA9IHRydWUpIHtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdFx0dGhpcy5jb2x1bW5JZCA9IGNvbHVtbklkO1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gc29ydDtcblx0XHR0aGlzLnNvcnRhYmxlID0gc29ydGFibGU7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdHNldEhlYWRlcihoZWFkZXI6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHR9XG5cblx0c2V0RmllbGQoZmllbGQ6IENvbHVtbkZpZWxkKTogdm9pZCB7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHR9XG5cblx0Z2V0SGVhZGVyQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoaW5kZXg6IG51bWJlcik6IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IHtcblxuXHRcdGNvbnN0IGhlYWRlcjogYW55ID0gdGhpcy5oZWFkZXI7XG5cdFx0bGV0IGhlYWRlckNlbGxDb250ZXh0OiBDZWxsQ29udGV4dDtcblxuXHRcdGlmICh0eXBlb2YgaGVhZGVyID09PSAnc3RyaW5nJykge1xuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQgPSBuZXcgQ2VsbENvbnRleHQoaGVhZGVyKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBoZWFkZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGhlYWRlckNlbGxDb250ZXh0ID0gbmV3IENlbGxDb250ZXh0KGhlYWRlcihpbmRleCkpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBuZXcgRmllbGRJZCh0aGlzLmZpZWxkLmdldElkKCkuZ2V0SWQoKSk7XG5cblx0XHRyZXR1cm4gbmV3IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KFxuXHRcdFx0dGhpcy5oZWFkZXJUZW1wbGF0ZSxcblx0XHRcdHRoaXMuZWRpdFRlbXBsYXRlLFxuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQsXG5cdFx0XHR0aGlzLndpZHRoLFxuXHRcdFx0ZmllbGRJZCxcblx0XHRcdHRoaXMuY29sdW1uSWQsXG5cdFx0XHR0aGlzLnNvcnRTdGF0dXMsXG5cdFx0XHR0aGlzLmVuYWJsZWQsXG5cdFx0XHR0aGlzLnNvcnRhYmxlXG5cdFx0KTtcblx0fVxuXG5cdGdldENvbnRlbnRDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IoKTogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIHtcblxuXHRcdGxldCBhY2Nlc3NvciA9IChlbnRpdHk6IGFueSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMudGVtcGxhdGVGdW5jdGlvbih0aGlzLmZpZWxkLmdldEFjY2Vzc29yKCkoZW50aXR5KSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiBuZXcgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yKFxuXHRcdFx0dGhpcy5jZWxsVGVtcGxhdGUsXG5cdFx0XHR0aGlzLmVkaXRUZW1wbGF0ZSxcblx0XHRcdHRydWUsXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdHRoaXMud2lkdGgsXG5cdFx0XHR0aGlzLmZpZWxkLmdldElkKCksXG5cdFx0XHR0aGlzLnR5cGUsXG5cdFx0XHR0aGlzLnZpZXdcblx0XHQpO1xuXHR9XG5cblx0Z2V0Q29sdW1uKCk6IGFueSB7XG5cblx0fVxuXG59XG4iXX0=