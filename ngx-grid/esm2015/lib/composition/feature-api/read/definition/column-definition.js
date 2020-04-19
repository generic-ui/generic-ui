/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModelEntity } from '@generic-ui/hermes';
import { SortOrder } from '../../../domain/column/sort/sort-order';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellContext } from './cell-context';
import { FieldId } from '../../../../structure/domain/structure/field/data-type/field.id';
import { CellTemplateWithAccessor } from './cell-template-with-accessor';
export class ColumnDefinition extends ReadModelEntity {
    /**
     * @param {?} field
     * @param {?} columnDefinitionId
     * @param {?} enabled
     * @param {?} type
     * @param {?} view
     * @param {?} align
     * @param {?} header
     * @param {?} cellEditingEnabled
     * @param {?=} sort
     * @param {?=} sortable
     */
    constructor(field, columnDefinitionId, // REFACTOR Id first argument
    enabled, type, // REFACTOR
    view, // REFACTOR
    align, // REFACTOR
    header, cellEditingEnabled, sort = SortOrder.NONE, sortable = true) {
        super(columnDefinitionId);
        this.type = type;
        this.view = view;
        this.align = align;
        this.sortable = true;
        this.field = field;
        this.columnDefinitionId = columnDefinitionId;
        this.enabled = enabled;
        this.header = header;
        this.cellEditingEnabled = cellEditingEnabled;
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
        return new CellTemplateWithContext(this.headerTemplate, this.editTemplate, headerCellContext, this.width, fieldId, this.columnDefinitionId, this.sortStatus, this.enabled, this.sortable, this.align);
    }
    /**
     * @return {?}
     */
    getContentCellTemplateWithAccessor() {
        /** @type {?} */
        const accessor = (/**
         * @param {?} entity
         * @return {?}
         */
        (entity) => {
            return this.field.getAccessor()(entity);
        });
        /** @type {?} */
        const searchAccessor = (/**
         * @param {?} entity
         * @return {?}
         */
        (entity) => {
            return this.field.getSearchAccessor()(entity);
        });
        return new CellTemplateWithAccessor(this.cellTemplate, this.editTemplate, true, this.templateFunction, accessor, searchAccessor, this.width, this.field.getId(), this.align, this.cellEditingEnabled, this.type, this.view);
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
    ColumnDefinition.prototype.columnDefinitionId;
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
    ColumnDefinition.prototype.cellEditingEnabled;
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
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.align;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMxRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU96RSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZUFBbUM7Ozs7Ozs7Ozs7Ozs7SUEwQnhFLFlBQVksS0FBa0IsRUFDM0Isa0JBQXNDLEVBQUUsNkJBQTZCO0lBQ3JFLE9BQWdCLEVBQ0MsSUFBYyxFQUFFLFdBQVc7SUFDM0IsSUFBZ0IsRUFBRSxXQUFXO0lBQzdCLEtBQWtCLEVBQUUsV0FBVztJQUNoRCxNQUErQixFQUMvQixrQkFBMkIsRUFDM0IsT0FBa0IsU0FBUyxDQUFDLElBQUksRUFDaEMsUUFBUSxHQUFHLElBQUk7UUFDakIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFQUCxTQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBYjlCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFtQmhDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFrQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELGdDQUFnQyxDQUFDLEtBQWE7O2NBRXZDLE1BQU0sR0FBUSxJQUFJLENBQUMsTUFBTTs7WUFDM0IsaUJBQThCO1FBRWxDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQy9CLGlCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO2FBQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUU7WUFDeEMsaUJBQWlCLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbkQ7O2NBRUssT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdkQsT0FBTyxJQUFJLHVCQUF1QixDQUNqQyxJQUFJLENBQUMsY0FBYyxFQUNuQixJQUFJLENBQUMsWUFBWSxFQUNqQixpQkFBaUIsRUFDakIsSUFBSSxDQUFDLEtBQUssRUFDVixPQUFPLEVBQ1AsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsS0FBSyxDQUNWLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsa0NBQWtDOztjQUUzQixRQUFROzs7O1FBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFBOztjQUFFLGNBQWM7Ozs7UUFBRyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQTtRQUVELE9BQU8sSUFBSSx3QkFBd0IsQ0FDbEMsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxFQUNKLElBQUksQ0FBQyxnQkFBZ0IsRUFDckIsUUFBUSxFQUNSLGNBQWMsRUFDZCxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxJQUFJLENBQ1QsQ0FBQztJQUNILENBQUM7Q0FFRDs7O0lBM0dBLHdDQUErQjs7SUFFL0IsMENBQWlDOztJQUVqQyx3Q0FBK0I7O0lBRS9CLGlDQUFjOztJQUVkLDRDQUFxQzs7Ozs7SUFFckMsOENBQXdEOzs7OztJQUV4RCxpQ0FBMkI7Ozs7O0lBRTNCLHNDQUE4Qjs7Ozs7SUFFOUIsb0NBQWlDOzs7OztJQUVqQyxrQ0FBd0M7Ozs7O0lBRXhDLG1DQUF5Qjs7Ozs7SUFFekIsOENBQW9DOzs7OztJQUtqQyxnQ0FBK0I7Ozs7O0lBQy9CLGdDQUFpQzs7Ozs7SUFDakMsaUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVhZE1vZGVsRW50aXR5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbENvbnRleHQgfSBmcm9tICcuL2NlbGwtY29udGV4dCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi92aWV3LmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25JZCB9IGZyb20gJy4vY29sdW1uLWRlZmluaXRpb24taWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5EZWZpbml0aW9uIGV4dGVuZHMgUmVhZE1vZGVsRW50aXR5PENvbHVtbkRlZmluaXRpb25JZD4ge1xuXG5cdGNlbGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRlZGl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0d2lkdGg6IG51bWJlcjtcblxuXHR0ZW1wbGF0ZUZ1bmN0aW9uOiAoaTogYW55KSA9PiBzdHJpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZDtcblxuXHRwcml2YXRlIGZpZWxkOiBDb2x1bW5GaWVsZDtcblxuXHRwcml2YXRlIHNvcnRTdGF0dXM6IFNvcnRPcmRlcjtcblxuXHRwcml2YXRlIHNvcnRhYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgY2VsbEVkaXRpbmdFbmFibGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0Y29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIC8vIFJFRkFDVE9SIElkIGZpcnN0IGFyZ3VtZW50XG5cdFx0XHRcdGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHlwZTogRGF0YVR5cGUsIC8vIFJFRkFDVE9SXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlld0VudGl0eSwgLy8gUkVGQUNUT1Jcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGlnbjogQ29sdW1uQWxpZ24sIC8vIFJFRkFDVE9SXG5cdFx0XHRcdGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUsXG5cdFx0XHRcdGNlbGxFZGl0aW5nRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0c29ydDogU29ydE9yZGVyID0gU29ydE9yZGVyLk5PTkUsXG5cdFx0XHRcdHNvcnRhYmxlID0gdHJ1ZSkge1xuXHRcdHN1cGVyKGNvbHVtbkRlZmluaXRpb25JZCk7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHRcdHRoaXMuY29sdW1uRGVmaW5pdGlvbklkID0gY29sdW1uRGVmaW5pdGlvbklkO1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdFx0dGhpcy5jZWxsRWRpdGluZ0VuYWJsZWQgPSBjZWxsRWRpdGluZ0VuYWJsZWQ7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gc29ydDtcblx0XHR0aGlzLnNvcnRhYmxlID0gc29ydGFibGU7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdHNldEhlYWRlcihoZWFkZXI6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHR9XG5cblx0c2V0RmllbGQoZmllbGQ6IENvbHVtbkZpZWxkKTogdm9pZCB7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHR9XG5cblx0Z2V0SGVhZGVyQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoaW5kZXg6IG51bWJlcik6IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IHtcblxuXHRcdGNvbnN0IGhlYWRlcjogYW55ID0gdGhpcy5oZWFkZXI7XG5cdFx0bGV0IGhlYWRlckNlbGxDb250ZXh0OiBDZWxsQ29udGV4dDtcblxuXHRcdGlmICh0eXBlb2YgaGVhZGVyID09PSAnc3RyaW5nJykge1xuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQgPSBuZXcgQ2VsbENvbnRleHQoaGVhZGVyKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBoZWFkZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGhlYWRlckNlbGxDb250ZXh0ID0gbmV3IENlbGxDb250ZXh0KGhlYWRlcihpbmRleCkpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBuZXcgRmllbGRJZCh0aGlzLmZpZWxkLmdldElkKCkuZ2V0SWQoKSk7XG5cblx0XHRyZXR1cm4gbmV3IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KFxuXHRcdFx0dGhpcy5oZWFkZXJUZW1wbGF0ZSxcblx0XHRcdHRoaXMuZWRpdFRlbXBsYXRlLFxuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQsXG5cdFx0XHR0aGlzLndpZHRoLFxuXHRcdFx0ZmllbGRJZCxcblx0XHRcdHRoaXMuY29sdW1uRGVmaW5pdGlvbklkLFxuXHRcdFx0dGhpcy5zb3J0U3RhdHVzLFxuXHRcdFx0dGhpcy5lbmFibGVkLFxuXHRcdFx0dGhpcy5zb3J0YWJsZSxcblx0XHRcdHRoaXMuYWxpZ25cblx0XHQpO1xuXHR9XG5cblx0Z2V0Q29udGVudENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcigpOiBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3Ige1xuXG5cdFx0Y29uc3QgYWNjZXNzb3IgPSAoZW50aXR5OiBhbnkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmZpZWxkLmdldEFjY2Vzc29yKCkoZW50aXR5KTtcblx0XHR9LCBzZWFyY2hBY2Nlc3NvciA9IChlbnRpdHk6IGFueSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuZmllbGQuZ2V0U2VhcmNoQWNjZXNzb3IoKShlbnRpdHkpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gbmV3IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcihcblx0XHRcdHRoaXMuY2VsbFRlbXBsYXRlLFxuXHRcdFx0dGhpcy5lZGl0VGVtcGxhdGUsXG5cdFx0XHR0cnVlLFxuXHRcdFx0dGhpcy50ZW1wbGF0ZUZ1bmN0aW9uLFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHRzZWFyY2hBY2Nlc3Nvcixcblx0XHRcdHRoaXMud2lkdGgsXG5cdFx0XHR0aGlzLmZpZWxkLmdldElkKCksXG5cdFx0XHR0aGlzLmFsaWduLFxuXHRcdFx0dGhpcy5jZWxsRWRpdGluZ0VuYWJsZWQsXG5cdFx0XHR0aGlzLnR5cGUsXG5cdFx0XHR0aGlzLnZpZXdcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==