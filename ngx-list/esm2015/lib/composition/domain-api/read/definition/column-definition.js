/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModelEntity } from '@generic-ui/hermes';
import { SortOrder } from '../../../domain/column/sort/sort-order';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellContext } from './cell-context';
import { FieldId } from '../../../../../structure/field/domain/data-type/field.id';
import { CellTemplateWithAccessor } from './cell-template-with-accessor';
import { CellValue } from './cell-value';
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
     * @param {?} templateFun
     * @return {?}
     */
    setTemplateFunction(templateFun) {
        this.templateFunction = templateFun;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getHeaderCellTemplateWithContext(index) {
        /** @type {?} */
        let header = this.header || '';
        /** @type {?} */
        let headerCellContext;
        if (typeof header === 'string') {
            headerCellContext = new CellContext(CellValue.text(header));
        }
        else if (typeof header === 'function') {
            headerCellContext = new CellContext(CellValue.text(header(index)));
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
    /**
     * @type {?}
     * @private
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBS3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHekMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGVBQW1DOzs7Ozs7Ozs7Ozs7O0lBMEJ4RSxZQUFZLEtBQWtCLEVBQzNCLGtCQUFzQyxFQUFFLDZCQUE2QjtJQUNyRSxPQUFnQixFQUNDLElBQWMsRUFBRSxXQUFXO0lBQzNCLElBQWdCLEVBQUUsV0FBVztJQUM3QixLQUFrQixFQUFFLFdBQVc7SUFDaEQsTUFBK0IsRUFDL0Isa0JBQTJCLEVBQzNCLE9BQWtCLFNBQVMsQ0FBQyxJQUFJLEVBQ2hDLFFBQVEsR0FBRyxJQUFJO1FBQ2pCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBUFAsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUNkLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQWI5QixhQUFRLEdBQVksSUFBSSxDQUFDO1FBbUJoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FB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QThCOzs7OztJQUU5QixvQ0FBaUM7Ozs7O0lBRWpDLGtDQUF3Qzs7Ozs7SUFFeEMsbUNBQXlCOzs7OztJQUV6Qiw4Q0FBb0M7Ozs7O0lBS2pDLGdDQUErQjs7Ozs7SUFDL0IsZ0NBQWlDOzs7OztJQUNqQyxpQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZWFkTW9kZWxFbnRpdHkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IEhlYWRlclRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsQ29udGV4dCB9IGZyb20gJy4vY2VsbC1jb250ZXh0JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi92aWV3LmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25JZCB9IGZyb20gJy4vY29sdW1uLWRlZmluaXRpb24taWQnO1xuaW1wb3J0IHsgQ2VsbFZhbHVlIH0gZnJvbSAnLi9jZWxsLXZhbHVlJztcblxuXG5leHBvcnQgY2xhc3MgQ29sdW1uRGVmaW5pdGlvbiBleHRlbmRzIFJlYWRNb2RlbEVudGl0eTxDb2x1bW5EZWZpbml0aW9uSWQ+IHtcblxuXHRjZWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0aGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0ZWRpdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0cHJpdmF0ZSB0ZW1wbGF0ZUZ1bmN0aW9uOiAoaTogYW55KSA9PiBzdHJpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZDtcblxuXHRwcml2YXRlIGZpZWxkOiBDb2x1bW5GaWVsZDtcblxuXHRwcml2YXRlIHNvcnRTdGF0dXM6IFNvcnRPcmRlcjtcblxuXHRwcml2YXRlIHNvcnRhYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgY2VsbEVkaXRpbmdFbmFibGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0Y29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIC8vIFJFRkFDVE9SIElkIGZpcnN0IGFyZ3VtZW50XG5cdFx0XHRcdGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHlwZTogRGF0YVR5cGUsIC8vIFJFRkFDVE9SXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlld0VudGl0eSwgLy8gUkVGQUNUT1Jcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGlnbjogQ29sdW1uQWxpZ24sIC8vIFJFRkFDVE9SXG5cdFx0XHRcdGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUsXG5cdFx0XHRcdGNlbGxFZGl0aW5nRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0c29ydDogU29ydE9yZGVyID0gU29ydE9yZGVyLk5PTkUsXG5cdFx0XHRcdHNvcnRhYmxlID0gdHJ1ZSkge1xuXHRcdHN1cGVyKGNvbHVtbkRlZmluaXRpb25JZCk7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHRcdHRoaXMuY29sdW1uRGVmaW5pdGlvbklkID0gY29sdW1uRGVmaW5pdGlvbklkO1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdFx0dGhpcy5jZWxsRWRpdGluZ0VuYWJsZWQgPSBjZWxsRWRpdGluZ0VuYWJsZWQ7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gc29ydDtcblx0XHR0aGlzLnNvcnRhYmxlID0gc29ydGFibGU7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdHNldEhlYWRlcihoZWFkZXI6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHR9XG5cblx0c2V0RmllbGQoZmllbGQ6IENvbHVtbkZpZWxkKTogdm9pZCB7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHR9XG5cblx0c2V0VGVtcGxhdGVGdW5jdGlvbih0ZW1wbGF0ZUZ1bjogKGk6IGFueSkgPT4gc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy50ZW1wbGF0ZUZ1bmN0aW9uID0gdGVtcGxhdGVGdW47XG5cdH1cblxuXHRnZXRIZWFkZXJDZWxsVGVtcGxhdGVXaXRoQ29udGV4dChpbmRleDogbnVtYmVyKTogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQge1xuXG5cdFx0bGV0IGhlYWRlcjogYW55ID0gdGhpcy5oZWFkZXIgfHwgJycsXG5cdFx0XHRoZWFkZXJDZWxsQ29udGV4dDogQ2VsbENvbnRleHQ7XG5cblx0XHRpZiAodHlwZW9mIGhlYWRlciA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGhlYWRlckNlbGxDb250ZXh0ID0gbmV3IENlbGxDb250ZXh0KENlbGxWYWx1ZS50ZXh0KGhlYWRlcikpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGhlYWRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQgPSBuZXcgQ2VsbENvbnRleHQoQ2VsbFZhbHVlLnRleHQoaGVhZGVyKGluZGV4KSkpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBuZXcgRmllbGRJZCh0aGlzLmZpZWxkLmdldElkKCkuZ2V0SWQoKSk7XG5cblx0XHRyZXR1cm4gbmV3IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KFxuXHRcdFx0dGhpcy5oZWFkZXJUZW1wbGF0ZSxcblx0XHRcdHRoaXMuZWRpdFRlbXBsYXRlLFxuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQsXG5cdFx0XHR0aGlzLndpZHRoLFxuXHRcdFx0ZmllbGRJZCxcblx0XHRcdHRoaXMuY29sdW1uRGVmaW5pdGlvbklkLFxuXHRcdFx0dGhpcy5zb3J0U3RhdHVzLFxuXHRcdFx0dGhpcy5lbmFibGVkLFxuXHRcdFx0dGhpcy5zb3J0YWJsZSxcblx0XHRcdHRoaXMuYWxpZ25cblx0XHQpO1xuXHR9XG5cblx0Z2V0Q29udGVudENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcigpOiBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3Ige1xuXG5cdFx0Y29uc3QgYWNjZXNzb3IgPSAoZW50aXR5OiBhbnkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmZpZWxkLmdldEFjY2Vzc29yKCkoZW50aXR5KTtcblx0XHR9LCBzZWFyY2hBY2Nlc3NvciA9IChlbnRpdHk6IGFueSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuZmllbGQuZ2V0U2VhcmNoQWNjZXNzb3IoKShlbnRpdHkpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gbmV3IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcihcblx0XHRcdHRoaXMuY2VsbFRlbXBsYXRlLFxuXHRcdFx0dGhpcy5lZGl0VGVtcGxhdGUsXG5cdFx0XHR0cnVlLFxuXHRcdFx0dGhpcy50ZW1wbGF0ZUZ1bmN0aW9uLFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHRzZWFyY2hBY2Nlc3Nvcixcblx0XHRcdHRoaXMud2lkdGgsXG5cdFx0XHR0aGlzLmZpZWxkLmdldElkKCksXG5cdFx0XHR0aGlzLmFsaWduLFxuXHRcdFx0dGhpcy5jZWxsRWRpdGluZ0VuYWJsZWQsXG5cdFx0XHR0aGlzLnR5cGUsXG5cdFx0XHR0aGlzLnZpZXdcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==