/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelEntity } from '@generic-ui/hermes';
import { SortOrder } from '../../../domain/column/sort/sort-order';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellContext } from './cell-context';
import { FieldId } from '../../../../structure/domain/structure/field/data-type/field.id';
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
        return new CellTemplateWithAccessor(this.cellTemplate, this.editTemplate, true, this.templateFunction, accessor, searchAccessor, this.width, this.field.getId(), this.align, this.cellEditingEnabled, this.type, this.view);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRW5FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDMUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFLekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUd6QztJQUFzQyw0Q0FBbUM7SUEwQnhFLDBCQUFZLEtBQWtCLEVBQzNCLGtCQUFzQyxFQUFFLDZCQUE2QjtJQUNyRSxPQUFnQixFQUNDLElBQWMsRUFBRSxXQUFXO0lBQzNCLElBQWdCLEVBQUUsV0FBVztJQUM3QixLQUFrQixFQUFFLFdBQVc7SUFDaEQsTUFBK0IsRUFDL0Isa0JBQTJCLEVBQzNCLElBQWdDLEVBQ2hDLFFBQWU7UUFEZixxQkFBQSxFQUFBLE9BQWtCLFNBQVMsQ0FBQyxJQUFJO1FBQ2hDLHlCQUFBLEVBQUEsZUFBZTtRQVRsQixZQVVDLGtCQUFNLGtCQUFrQixDQUFDLFNBUXpCO1FBZm1CLFVBQUksR0FBSixJQUFJLENBQVU7UUFDZCxVQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFdBQUssR0FBTCxLQUFLLENBQWE7UUFiOUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQW1CaEMsS0FBSSxDQUFDLEtBQUss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RS9CLDBDQUFpQzs7SUFFakMsd0NBQStCOztJQUUvQixpQ0FBYzs7Ozs7SUFFZCw0Q0FBNkM7Ozs7O0lBRTdDLDhDQUF3RDs7Ozs7SUFFeEQsaUNBQTJCOzs7OztJQUUzQixzQ0FBOEI7Ozs7O0lBRTlCLG9DQUFpQzs7Ozs7SUFFakMsa0NBQXdDOzs7OztJQUV4QyxtQ0FBeUI7Ozs7O0lBRXpCLDhDQUFvQzs7Ozs7SUFLakMsZ0NBQStCOzs7OztJQUMvQixnQ0FBaUM7Ozs7O0lBQ2pDLGlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlYWRNb2RlbEVudGl0eSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENlbGxDb250ZXh0IH0gZnJvbSAnLi9jZWxsLWNvbnRleHQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uSWQgfSBmcm9tICcuL2NvbHVtbi1kZWZpbml0aW9uLWlkJztcbmltcG9ydCB7IENlbGxWYWx1ZSB9IGZyb20gJy4vY2VsbC12YWx1ZSc7XG5cblxuZXhwb3J0IGNsYXNzIENvbHVtbkRlZmluaXRpb24gZXh0ZW5kcyBSZWFkTW9kZWxFbnRpdHk8Q29sdW1uRGVmaW5pdGlvbklkPiB7XG5cblx0Y2VsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGVkaXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbjogKGk6IGFueSkgPT4gc3RyaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQ7XG5cblx0cHJpdmF0ZSBmaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0cHJpdmF0ZSBzb3J0U3RhdHVzOiBTb3J0T3JkZXI7XG5cblx0cHJpdmF0ZSBzb3J0YWJsZTogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlO1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIGNlbGxFZGl0aW5nRW5hYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihmaWVsZDogQ29sdW1uRmllbGQsXG5cdFx0XHRcdGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCAvLyBSRUZBQ1RPUiBJZCBmaXJzdCBhcmd1bWVudFxuXHRcdFx0XHRlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHR5cGU6IERhdGFUeXBlLCAvLyBSRUZBQ1RPUlxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXdFbnRpdHksIC8vIFJFRkFDVE9SXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxpZ246IENvbHVtbkFsaWduLCAvLyBSRUZBQ1RPUlxuXHRcdFx0XHRoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHRjZWxsRWRpdGluZ0VuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHNvcnQ6IFNvcnRPcmRlciA9IFNvcnRPcmRlci5OT05FLFxuXHRcdFx0XHRzb3J0YWJsZSA9IHRydWUpIHtcblx0XHRzdXBlcihjb2x1bW5EZWZpbml0aW9uSWQpO1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0XHR0aGlzLmNvbHVtbkRlZmluaXRpb25JZCA9IGNvbHVtbkRlZmluaXRpb25JZDtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHRcdHRoaXMuY2VsbEVkaXRpbmdFbmFibGVkID0gY2VsbEVkaXRpbmdFbmFibGVkO1xuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnQ7XG5cdFx0dGhpcy5zb3J0YWJsZSA9IHNvcnRhYmxlO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRzZXRIZWFkZXIoaGVhZGVyOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0fVxuXG5cdHNldEZpZWxkKGZpZWxkOiBDb2x1bW5GaWVsZCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0fVxuXG5cdHNldFRlbXBsYXRlRnVuY3Rpb24odGVtcGxhdGVGdW46IChpOiBhbnkpID0+IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMudGVtcGxhdGVGdW5jdGlvbiA9IHRlbXBsYXRlRnVuO1xuXHR9XG5cblx0Z2V0SGVhZGVyQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoaW5kZXg6IG51bWJlcik6IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IHtcblxuXHRcdGxldCBoZWFkZXI6IGFueSA9IHRoaXMuaGVhZGVyIHx8ICcnLFxuXHRcdFx0aGVhZGVyQ2VsbENvbnRleHQ6IENlbGxDb250ZXh0O1xuXG5cdFx0aWYgKHR5cGVvZiBoZWFkZXIgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRoZWFkZXJDZWxsQ29udGV4dCA9IG5ldyBDZWxsQ29udGV4dChDZWxsVmFsdWUudGV4dChoZWFkZXIpKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBoZWFkZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGhlYWRlckNlbGxDb250ZXh0ID0gbmV3IENlbGxDb250ZXh0KENlbGxWYWx1ZS50ZXh0KGhlYWRlcihpbmRleCkpKTtcblx0XHR9XG5cblx0XHRjb25zdCBmaWVsZElkID0gbmV3IEZpZWxkSWQodGhpcy5maWVsZC5nZXRJZCgpLmdldElkKCkpO1xuXG5cdFx0cmV0dXJuIG5ldyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dChcblx0XHRcdHRoaXMuaGVhZGVyVGVtcGxhdGUsXG5cdFx0XHR0aGlzLmVkaXRUZW1wbGF0ZSxcblx0XHRcdGhlYWRlckNlbGxDb250ZXh0LFxuXHRcdFx0dGhpcy53aWR0aCxcblx0XHRcdGZpZWxkSWQsXG5cdFx0XHR0aGlzLmNvbHVtbkRlZmluaXRpb25JZCxcblx0XHRcdHRoaXMuc29ydFN0YXR1cyxcblx0XHRcdHRoaXMuZW5hYmxlZCxcblx0XHRcdHRoaXMuc29ydGFibGUsXG5cdFx0XHR0aGlzLmFsaWduXG5cdFx0KTtcblx0fVxuXG5cdGdldENvbnRlbnRDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IoKTogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIHtcblxuXHRcdGNvbnN0IGFjY2Vzc29yID0gKGVudGl0eTogYW55KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXRBY2Nlc3NvcigpKGVudGl0eSk7XG5cdFx0fSwgc2VhcmNoQWNjZXNzb3IgPSAoZW50aXR5OiBhbnkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmZpZWxkLmdldFNlYXJjaEFjY2Vzc29yKCkoZW50aXR5KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIG5ldyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IoXG5cdFx0XHR0aGlzLmNlbGxUZW1wbGF0ZSxcblx0XHRcdHRoaXMuZWRpdFRlbXBsYXRlLFxuXHRcdFx0dHJ1ZSxcblx0XHRcdHRoaXMudGVtcGxhdGVGdW5jdGlvbixcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0c2VhcmNoQWNjZXNzb3IsXG5cdFx0XHR0aGlzLndpZHRoLFxuXHRcdFx0dGhpcy5maWVsZC5nZXRJZCgpLFxuXHRcdFx0dGhpcy5hbGlnbixcblx0XHRcdHRoaXMuY2VsbEVkaXRpbmdFbmFibGVkLFxuXHRcdFx0dGhpcy50eXBlLFxuXHRcdFx0dGhpcy52aWV3XG5cdFx0KTtcblx0fVxuXG59XG4iXX0=