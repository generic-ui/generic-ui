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
     * @param {?} type
     * @param {?} view
     * @param {?} header
     * @param {?=} sort
     */
    constructor(field, columnId, enabled, type, // REFACTOR
    view, // REFACTOR
    header, sort = SortStatus.NONE) {
        this.type = type;
        this.view = view;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU16RSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7O0lBc0I1QixZQUFZLEtBQWtCLEVBQzNCLFFBQWtCLEVBQ2xCLE9BQWdCLEVBQ0MsSUFBYyxFQUFFLFdBQVc7SUFDM0IsSUFBZ0IsRUFBRSxXQUFXO0lBQzlDLE1BQStCLEVBQy9CLE9BQW1CLFVBQVUsQ0FBQyxJQUFJO1FBSGpCLFNBQUksR0FBSixJQUFJLENBQVU7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBR25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBa0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxnQ0FBZ0MsQ0FBQyxLQUFhOztjQUV2QyxNQUFNLEdBQVEsSUFBSSxDQUFDLE1BQU07O1lBQzNCLGlCQUE4QjtRQUVsQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUMvQixpQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QzthQUFNLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFO1lBQ3hDLGlCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25EOztjQUVLLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXZELE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsSyxDQUFDOzs7O0lBRUQsa0NBQWtDOztZQUU3QixRQUFROzs7O1FBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFBO1FBRUQsT0FBTyxJQUFJLHdCQUF3QixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqSixDQUFDOzs7O0lBRUQsU0FBUztJQUVULENBQUM7Q0FFRDs7O0lBM0VBLHdDQUErQjs7SUFFL0IsMENBQWlDOztJQUVqQyx3Q0FBK0I7O0lBRS9CLGlDQUFjOztJQUVkLDRDQUFxQzs7Ozs7SUFFckMsb0NBQW9DOzs7OztJQUVwQyxpQ0FBMkI7Ozs7O0lBRTNCLHNDQUErQjs7Ozs7SUFFL0Isa0NBQXdDOzs7OztJQUV4QyxtQ0FBeUI7Ozs7O0lBS3RCLGdDQUErQjs7Ozs7SUFDL0IsZ0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuLi8uLi9jb21tYW5kL2NvbHVtbi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL3NvcnQvc29ydC1zdGF0dXMnO1xuaW1wb3J0IHsgSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsQ29udGV4dCB9IGZyb20gJy4vY2VsbC1jb250ZXh0JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vdmlldy5lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRjZWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0aGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0ZWRpdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0dGVtcGxhdGVGdW5jdGlvbjogKGk6IGFueSkgPT4gc3RyaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uSWQ6IENvbHVtbklkO1xuXG5cdHByaXZhdGUgZmllbGQ6IENvbHVtbkZpZWxkO1xuXG5cdHByaXZhdGUgc29ydFN0YXR1czogU29ydFN0YXR1cztcblxuXHRwcml2YXRlIGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0Y29sdW1uSWQ6IENvbHVtbklkLFxuXHRcdFx0XHRlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHR5cGU6IERhdGFUeXBlLCAvLyBSRUZBQ1RPUlxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXdFbnRpdHksIC8vIFJFRkFDVE9SXG5cdFx0XHRcdGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUsXG5cdFx0XHRcdHNvcnQ6IFNvcnRTdGF0dXMgPSBTb3J0U3RhdHVzLk5PTkUpIHtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdFx0dGhpcy5jb2x1bW5JZCA9IGNvbHVtbklkO1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gc29ydDtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0c2V0SGVhZGVyKGhlYWRlcjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdH1cblxuXHRzZXRGaWVsZChmaWVsZDogQ29sdW1uRmllbGQpOiB2b2lkIHtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdH1cblxuXHRnZXRIZWFkZXJDZWxsVGVtcGxhdGVXaXRoQ29udGV4dChpbmRleDogbnVtYmVyKTogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQge1xuXG5cdFx0Y29uc3QgaGVhZGVyOiBhbnkgPSB0aGlzLmhlYWRlcjtcblx0XHRsZXQgaGVhZGVyQ2VsbENvbnRleHQ6IENlbGxDb250ZXh0O1xuXG5cdFx0aWYgKHR5cGVvZiBoZWFkZXIgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRoZWFkZXJDZWxsQ29udGV4dCA9IG5ldyBDZWxsQ29udGV4dChoZWFkZXIpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGhlYWRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQgPSBuZXcgQ2VsbENvbnRleHQoaGVhZGVyKGluZGV4KSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmllbGRJZCA9IG5ldyBGaWVsZElkKHRoaXMuZmllbGQuZ2V0SWQoKS5nZXRJZCgpKTtcblxuXHRcdHJldHVybiBuZXcgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQodGhpcy5oZWFkZXJUZW1wbGF0ZSwgdGhpcy5lZGl0VGVtcGxhdGUsIGhlYWRlckNlbGxDb250ZXh0LCB0aGlzLndpZHRoLCBmaWVsZElkLCB0aGlzLmNvbHVtbklkLCB0aGlzLnNvcnRTdGF0dXMsIHRoaXMuZW5hYmxlZCk7XG5cdH1cblxuXHRnZXRDb250ZW50Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yKCk6IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB7XG5cblx0XHRsZXQgYWNjZXNzb3IgPSAoZW50aXR5OiBhbnkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb24odGhpcy5maWVsZC5nZXRBY2Nlc3NvcigpKGVudGl0eSkpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gbmV3IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcih0aGlzLmNlbGxUZW1wbGF0ZSwgdGhpcy5lZGl0VGVtcGxhdGUsIHRydWUsIGFjY2Vzc29yLCB0aGlzLndpZHRoLCB0aGlzLmZpZWxkLmdldElkKCksIHRoaXMudHlwZSwgdGhpcy52aWV3KTtcblx0fVxuXG5cdGdldENvbHVtbigpOiBhbnkge1xuXG5cdH1cblxufVxuIl19