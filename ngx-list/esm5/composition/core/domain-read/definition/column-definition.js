/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelEntity } from '@generic-ui/hermes';
import { SortOrder } from '../../domain/column/sort/sort-order';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellContext } from './cell-context';
import { FieldId } from '../../../../structure/field/core/domain/field/field.id';
import { CellTemplateWithAccessor } from './cell-template-with-accessor';
import { CellValue } from './cell-value';
var ColumnDefinition = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnDefinition, _super);
    function ColumnDefinition(field, columnDefinitionId, // REFACTOR Id first argument
    enabled, type, // REFACTOR
    view, // REFACTOR
    align, // REFACTOR
    header, cellEditingEnabled, sort, sortable) {
        if (sort === void 0) { sort = SortOrder.NONE; }
        if (sortable === void 0) { sortable = true; }
        var _this = _super.call(this, columnDefinitionId) || this;
        _this.type = type;
        _this.view = view;
        _this.align = align;
        _this.sortable = true;
        _this.field = field;
        _this.columnDefinitionId = columnDefinitionId;
        _this.enabled = enabled;
        _this.header = header;
        _this.cellEditingEnabled = cellEditingEnabled;
        _this.sortStatus = sort;
        _this.sortable = sortable;
        return _this;
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
     * @param {?} templateFun
     * @return {?}
     */
    ColumnDefinition.prototype.setTemplateFunction = /**
     * @param {?} templateFun
     * @return {?}
     */
    function (templateFun) {
        this.templateFunction = templateFun;
    };
    /**
     * @param {?} formatter
     * @return {?}
     */
    ColumnDefinition.prototype.setFormatterFunction = /**
     * @param {?} formatter
     * @return {?}
     */
    function (formatter) {
        this.formatterFunction = formatter;
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
        var header = this.header || '';
        /** @type {?} */
        var headerCellContext;
        if (typeof header === 'string') {
            headerCellContext = new CellContext(CellValue.text(header));
        }
        else if (typeof header === 'function') {
            headerCellContext = new CellContext(CellValue.text(header(index)));
        }
        /** @type {?} */
        var fieldId = new FieldId(this.field.getId().getId());
        return new CellTemplateWithContext(this.headerTemplate, this.editTemplate, headerCellContext, this.width, fieldId, this.columnDefinitionId, this.sortStatus, this.enabled, this.sortable, this.align);
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
            return _this.field.getAccessor()(entity);
        });
        /** @type {?} */
        var searchAccessor = (/**
         * @param {?} entity
         * @return {?}
         */
        function (entity) {
            return _this.field.getSearchAccessor()(entity);
        });
        return new CellTemplateWithAccessor(this.cellTemplate, this.editTemplate, true, this.templateFunction, this.formatterFunction, accessor, searchAccessor, this.width, this.field.getId(), this.align, this.cellEditingEnabled, this.type, this.view);
    };
    return ColumnDefinition;
}(ReadModelEntity));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUt6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3pDO0lBQXNDLDRDQUFtQztJQTRCeEUsMEJBQVksS0FBa0IsRUFDM0Isa0JBQXNDLEVBQUUsNkJBQTZCO0lBQ3JFLE9BQWdCLEVBQ0MsSUFBYyxFQUFFLFdBQVc7SUFDM0IsSUFBZ0IsRUFBRSxXQUFXO0lBQzdCLEtBQWtCLEVBQUUsV0FBVztJQUNoRCxNQUErQixFQUMvQixrQkFBMkIsRUFDM0IsSUFBZ0MsRUFDaEMsUUFBZTtRQURmLHFCQUFBLEVBQUEsT0FBa0IsU0FBUyxDQUFDLElBQUk7UUFDaEMseUJBQUEsRUFBQSxlQUFlO1FBVGxCLFlBVUMsa0JBQU0sa0JBQWtCLENBQUMsU0FRekI7UUFmbUIsVUFBSSxHQUFKLElBQUksQ0FBVTtRQUNkLFVBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBSyxHQUFMLEtBQUssQ0FBYTtRQWI5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBbUJoQyxLQUFJLENBQUMsS0FBSyxHQUFH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LEVBQ1QsSUFBSSxDQUFDLElBQUksQ0FDVCxDQUFDO0lBQ0gsQ0FBQztJQUVGLHVCQUFDO0FBQUQsQ0FBQyxBQXhIRCxDQUFzQyxlQUFlLEdBd0hwRDs7OztJQXRIQSx3Q0FBK0I7O0lBRS9CLDBDQUFpQzs7SUFFakMsd0NBQStCOztJQUUvQixpQ0FBYzs7Ozs7SUFFZCw0Q0FBd0Q7Ozs7O0lBRXhELDZDQUF5RDs7Ozs7SUFFekQsOENBQXdEOzs7OztJQUV4RCxpQ0FBMkI7Ozs7O0lBRTNCLHNDQUE4Qjs7Ozs7SUFFOUIsb0NBQWlDOzs7OztJQUVqQyxrQ0FBd0M7Ozs7O0lBRXhDLG1DQUF5Qjs7Ozs7SUFFekIsOENBQW9DOzs7OztJQUtqQyxnQ0FBK0I7Ozs7O0lBQy9CLGdDQUFpQzs7Ozs7SUFDakMsaUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVhZE1vZGVsRW50aXR5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbENvbnRleHQgfSBmcm9tICcuL2NlbGwtY29udGV4dCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbklkIH0gZnJvbSAnLi9jb2x1bW4tZGVmaW5pdGlvbi1pZCc7XG5pbXBvcnQgeyBDZWxsVmFsdWUgfSBmcm9tICcuL2NlbGwtdmFsdWUnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5EZWZpbml0aW9uIGV4dGVuZHMgUmVhZE1vZGVsRW50aXR5PENvbHVtbkRlZmluaXRpb25JZD4ge1xuXG5cdGNlbGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRlZGl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0d2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb246IChpOiBhbnksIGl0ZW06IGFueSkgPT4gc3RyaW5nO1xuXG5cdHByaXZhdGUgZm9ybWF0dGVyRnVuY3Rpb246IChpOiBhbnksIGl0ZW06IGFueSkgPT4gc3RyaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQ7XG5cblx0cHJpdmF0ZSBmaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0cHJpdmF0ZSBzb3J0U3RhdHVzOiBTb3J0T3JkZXI7XG5cblx0cHJpdmF0ZSBzb3J0YWJsZTogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlO1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIGNlbGxFZGl0aW5nRW5hYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihmaWVsZDogQ29sdW1uRmllbGQsXG5cdFx0XHRcdGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCAvLyBSRUZBQ1RPUiBJZCBmaXJzdCBhcmd1bWVudFxuXHRcdFx0XHRlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHR5cGU6IERhdGFUeXBlLCAvLyBSRUZBQ1RPUlxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXdFbnRpdHksIC8vIFJFRkFDVE9SXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxpZ246IENvbHVtbkFsaWduLCAvLyBSRUZBQ1RPUlxuXHRcdFx0XHRoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHRjZWxsRWRpdGluZ0VuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHNvcnQ6IFNvcnRPcmRlciA9IFNvcnRPcmRlci5OT05FLFxuXHRcdFx0XHRzb3J0YWJsZSA9IHRydWUpIHtcblx0XHRzdXBlcihjb2x1bW5EZWZpbml0aW9uSWQpO1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0XHR0aGlzLmNvbHVtbkRlZmluaXRpb25JZCA9IGNvbHVtbkRlZmluaXRpb25JZDtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHRcdHRoaXMuY2VsbEVkaXRpbmdFbmFibGVkID0gY2VsbEVkaXRpbmdFbmFibGVkO1xuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnQ7XG5cdFx0dGhpcy5zb3J0YWJsZSA9IHNvcnRhYmxlO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRzZXRIZWFkZXIoaGVhZGVyOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0fVxuXG5cdHNldEZpZWxkKGZpZWxkOiBDb2x1bW5GaWVsZCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0fVxuXG5cdHNldFRlbXBsYXRlRnVuY3Rpb24odGVtcGxhdGVGdW46IChpOiBhbnksIGl0ZW06IGFueSkgPT4gc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy50ZW1wbGF0ZUZ1bmN0aW9uID0gdGVtcGxhdGVGdW47XG5cdH1cblxuXHRzZXRGb3JtYXR0ZXJGdW5jdGlvbihmb3JtYXR0ZXI6IChpOiBhbnksIGl0ZW06IGFueSkgPT4gc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXR0ZXJGdW5jdGlvbiA9IGZvcm1hdHRlcjtcblx0fVxuXG5cdGdldEhlYWRlckNlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KGluZGV4OiBudW1iZXIpOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB7XG5cblx0XHRjb25zdCBoZWFkZXI6IGFueSA9IHRoaXMuaGVhZGVyIHx8ICcnO1xuXHRcdGxldCBoZWFkZXJDZWxsQ29udGV4dDogQ2VsbENvbnRleHQ7XG5cblx0XHRpZiAodHlwZW9mIGhlYWRlciA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGhlYWRlckNlbGxDb250ZXh0ID0gbmV3IENlbGxDb250ZXh0KENlbGxWYWx1ZS50ZXh0KGhlYWRlcikpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGhlYWRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQgPSBuZXcgQ2VsbENvbnRleHQoQ2VsbFZhbHVlLnRleHQoaGVhZGVyKGluZGV4KSkpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBuZXcgRmllbGRJZCh0aGlzLmZpZWxkLmdldElkKCkuZ2V0SWQoKSk7XG5cblx0XHRyZXR1cm4gbmV3IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KFxuXHRcdFx0dGhpcy5oZWFkZXJUZW1wbGF0ZSxcblx0XHRcdHRoaXMuZWRpdFRlbXBsYXRlLFxuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQsXG5cdFx0XHR0aGlzLndpZHRoLFxuXHRcdFx0ZmllbGRJZCxcblx0XHRcdHRoaXMuY29sdW1uRGVmaW5pdGlvbklkLFxuXHRcdFx0dGhpcy5zb3J0U3RhdHVzLFxuXHRcdFx0dGhpcy5lbmFibGVkLFxuXHRcdFx0dGhpcy5zb3J0YWJsZSxcblx0XHRcdHRoaXMuYWxpZ25cblx0XHQpO1xuXHR9XG5cblx0Z2V0Q29udGVudENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcigpOiBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3Ige1xuXG5cdFx0Y29uc3QgYWNjZXNzb3IgPSAoZW50aXR5OiBhbnkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmZpZWxkLmdldEFjY2Vzc29yKCkoZW50aXR5KTtcblx0XHR9LCBzZWFyY2hBY2Nlc3NvciA9IChlbnRpdHk6IGFueSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuZmllbGQuZ2V0U2VhcmNoQWNjZXNzb3IoKShlbnRpdHkpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gbmV3IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcihcblx0XHRcdHRoaXMuY2VsbFRlbXBsYXRlLFxuXHRcdFx0dGhpcy5lZGl0VGVtcGxhdGUsXG5cdFx0XHR0cnVlLFxuXHRcdFx0dGhpcy50ZW1wbGF0ZUZ1bmN0aW9uLFxuXHRcdFx0dGhpcy5mb3JtYXR0ZXJGdW5jdGlvbixcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0c2VhcmNoQWNjZXNzb3IsXG5cdFx0XHR0aGlzLndpZHRoLFxuXHRcdFx0dGhpcy5maWVsZC5nZXRJZCgpLFxuXHRcdFx0dGhpcy5hbGlnbixcblx0XHRcdHRoaXMuY2VsbEVkaXRpbmdFbmFibGVkLFxuXHRcdFx0dGhpcy50eXBlLFxuXHRcdFx0dGhpcy52aWV3XG5cdFx0KTtcblx0fVxuXG59XG4iXX0=