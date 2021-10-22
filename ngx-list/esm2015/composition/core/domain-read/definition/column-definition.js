/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModelEntity } from '@generic-ui/hermes';
import { SortOrder } from '../../domain/column/sort/sort-order';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellContext } from './cell-context';
import { FieldId } from '../../../../structure/field/core/domain/field/field.id';
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
     * @param {?} formatter
     * @return {?}
     */
    setFormatterFunction(formatter) {
        this.formatterFunction = formatter;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    toHeaderCellTemplateWithContext(index) {
        /** @type {?} */
        const header = this.header || '';
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
    toContentCellTemplateWithAccessor() {
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
        return new CellTemplateWithAccessor(this.columnDefinitionId, this.cellTemplate, this.editTemplate, true, this.templateFunction, this.formatterFunction, accessor, searchAccessor, this.width, this.field.getId(), this.align, this.cellEditingEnabled, this.type, this.view);
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
    ColumnDefinition.prototype.formatterFunction;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBS3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHekMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGVBQW1DOzs7Ozs7Ozs7Ozs7O0lBNEJ4RSxZQUFZLEtBQWtCLEVBQzNCLGtCQUFzQyxFQUFFLDZCQUE2QjtJQUNyRSxPQUFnQixFQUNDLElBQWMsRUFBRSxXQUFXO0lBQzNCLElBQWdCLEVBQUUsV0FBVztJQUM3QixLQUFrQixFQUFFLFdBQVc7SUFDaEQsTUFBK0IsRUFDL0Isa0JBQTJCLEVBQzNCLE9BQWtCLFNBQVMsQ0FBQyxJQUFJLEVBQ2hDLFFBQVEsR0FBRyxJQUFJO1FBQ2pCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBUFAsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUNkLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQWI5QixhQUFRLEdBQVksSUFBSSxDQUFDO1FBbUJoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztR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OztJQXZIQSx3Q0FBK0I7O0lBRS9CLDBDQUFpQzs7SUFFakMsd0NBQStCOztJQUUvQixpQ0FBYzs7Ozs7SUFFZCw0Q0FBd0Q7Ozs7O0lBRXhELDZDQUF5RDs7Ozs7SUFFekQsOENBQXdEOzs7OztJQUV4RCxpQ0FBMkI7Ozs7O0lBRTNCLHNDQUE4Qjs7Ozs7SUFFOUIsb0NBQWlDOzs7OztJQUVqQyxrQ0FBd0M7Ozs7O0lBRXhDLG1DQUF5Qjs7Ozs7SUFFekIsOENBQW9DOzs7OztJQUtqQyxnQ0FBK0I7Ozs7O0lBQy9CLGdDQUFpQzs7Ozs7SUFDakMsaUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVhZE1vZGVsRW50aXR5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbENvbnRleHQgfSBmcm9tICcuL2NlbGwtY29udGV4dCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbklkIH0gZnJvbSAnLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4tZGVmaW5pdGlvbi1pZCc7XG5pbXBvcnQgeyBDZWxsVmFsdWUgfSBmcm9tICcuL2NlbGwtdmFsdWUnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5EZWZpbml0aW9uIGV4dGVuZHMgUmVhZE1vZGVsRW50aXR5PENvbHVtbkRlZmluaXRpb25JZD4ge1xuXG5cdGNlbGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRlZGl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0d2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb246IChpOiBhbnksIGl0ZW06IGFueSkgPT4gc3RyaW5nO1xuXG5cdHByaXZhdGUgZm9ybWF0dGVyRnVuY3Rpb246IChpOiBhbnksIGl0ZW06IGFueSkgPT4gc3RyaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQ7XG5cblx0cHJpdmF0ZSBmaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0cHJpdmF0ZSBzb3J0U3RhdHVzOiBTb3J0T3JkZXI7XG5cblx0cHJpdmF0ZSBzb3J0YWJsZTogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlO1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIGNlbGxFZGl0aW5nRW5hYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihmaWVsZDogQ29sdW1uRmllbGQsXG5cdFx0XHRcdGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCAvLyBSRUZBQ1RPUiBJZCBmaXJzdCBhcmd1bWVudFxuXHRcdFx0XHRlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHR5cGU6IERhdGFUeXBlLCAvLyBSRUZBQ1RPUlxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXdFbnRpdHksIC8vIFJFRkFDVE9SXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxpZ246IENvbHVtbkFsaWduLCAvLyBSRUZBQ1RPUlxuXHRcdFx0XHRoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHRjZWxsRWRpdGluZ0VuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHNvcnQ6IFNvcnRPcmRlciA9IFNvcnRPcmRlci5OT05FLFxuXHRcdFx0XHRzb3J0YWJsZSA9IHRydWUpIHtcblx0XHRzdXBlcihjb2x1bW5EZWZpbml0aW9uSWQpO1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0XHR0aGlzLmNvbHVtbkRlZmluaXRpb25JZCA9IGNvbHVtbkRlZmluaXRpb25JZDtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHRcdHRoaXMuY2VsbEVkaXRpbmdFbmFibGVkID0gY2VsbEVkaXRpbmdFbmFibGVkO1xuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnQ7XG5cdFx0dGhpcy5zb3J0YWJsZSA9IHNvcnRhYmxlO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRzZXRIZWFkZXIoaGVhZGVyOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0fVxuXG5cdHNldEZpZWxkKGZpZWxkOiBDb2x1bW5GaWVsZCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0fVxuXG5cdHNldFRlbXBsYXRlRnVuY3Rpb24odGVtcGxhdGVGdW46IChpOiBhbnksIGl0ZW06IGFueSkgPT4gc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy50ZW1wbGF0ZUZ1bmN0aW9uID0gdGVtcGxhdGVGdW47XG5cdH1cblxuXHRzZXRGb3JtYXR0ZXJGdW5jdGlvbihmb3JtYXR0ZXI6IChpOiBhbnksIGl0ZW06IGFueSkgPT4gc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXR0ZXJGdW5jdGlvbiA9IGZvcm1hdHRlcjtcblx0fVxuXG5cdHRvSGVhZGVyQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoaW5kZXg6IG51bWJlcik6IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IHtcblxuXHRcdGNvbnN0IGhlYWRlcjogYW55ID0gdGhpcy5oZWFkZXIgfHwgJyc7XG5cdFx0bGV0IGhlYWRlckNlbGxDb250ZXh0OiBDZWxsQ29udGV4dDtcblxuXHRcdGlmICh0eXBlb2YgaGVhZGVyID09PSAnc3RyaW5nJykge1xuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQgPSBuZXcgQ2VsbENvbnRleHQoQ2VsbFZhbHVlLnRleHQoaGVhZGVyKSk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgaGVhZGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRoZWFkZXJDZWxsQ29udGV4dCA9IG5ldyBDZWxsQ29udGV4dChDZWxsVmFsdWUudGV4dChoZWFkZXIoaW5kZXgpKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmllbGRJZCA9IG5ldyBGaWVsZElkKHRoaXMuZmllbGQuZ2V0SWQoKS5nZXRJZCgpKTtcblxuXHRcdHJldHVybiBuZXcgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoXG5cdFx0XHR0aGlzLmhlYWRlclRlbXBsYXRlLFxuXHRcdFx0dGhpcy5lZGl0VGVtcGxhdGUsXG5cdFx0XHRoZWFkZXJDZWxsQ29udGV4dCxcblx0XHRcdHRoaXMud2lkdGgsXG5cdFx0XHRmaWVsZElkLFxuXHRcdFx0dGhpcy5jb2x1bW5EZWZpbml0aW9uSWQsXG5cdFx0XHR0aGlzLnNvcnRTdGF0dXMsXG5cdFx0XHR0aGlzLmVuYWJsZWQsXG5cdFx0XHR0aGlzLnNvcnRhYmxlLFxuXHRcdFx0dGhpcy5hbGlnblxuXHRcdCk7XG5cdH1cblxuXHR0b0NvbnRlbnRDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IoKTogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIHtcblxuXHRcdGNvbnN0IGFjY2Vzc29yID0gKGVudGl0eTogYW55KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXRBY2Nlc3NvcigpKGVudGl0eSk7XG5cdFx0fSwgc2VhcmNoQWNjZXNzb3IgPSAoZW50aXR5OiBhbnkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmZpZWxkLmdldFNlYXJjaEFjY2Vzc29yKCkoZW50aXR5KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIG5ldyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IoXG5cdFx0XHR0aGlzLmNvbHVtbkRlZmluaXRpb25JZCxcblx0XHRcdHRoaXMuY2VsbFRlbXBsYXRlLFxuXHRcdFx0dGhpcy5lZGl0VGVtcGxhdGUsXG5cdFx0XHR0cnVlLFxuXHRcdFx0dGhpcy50ZW1wbGF0ZUZ1bmN0aW9uLFxuXHRcdFx0dGhpcy5mb3JtYXR0ZXJGdW5jdGlvbixcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0c2VhcmNoQWNjZXNzb3IsXG5cdFx0XHR0aGlzLndpZHRoLFxuXHRcdFx0dGhpcy5maWVsZC5nZXRJZCgpLFxuXHRcdFx0dGhpcy5hbGlnbixcblx0XHRcdHRoaXMuY2VsbEVkaXRpbmdFbmFibGVkLFxuXHRcdFx0dGhpcy50eXBlLFxuXHRcdFx0dGhpcy52aWV3XG5cdFx0KTtcblx0fVxuXG59XG4iXX0=