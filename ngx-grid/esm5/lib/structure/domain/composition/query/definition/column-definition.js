/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortStatus } from '../../command/sort/sort-status';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellContext } from './cell-context';
import { FieldId } from '../../../structure/command/field/data-type/field.id';
import { CellTemplateWithAccessor } from './cell-template-with-accessor';
var ColumnDefinition = /** @class */ (function () {
    function ColumnDefinition(field, header, sort) {
        if (sort === void 0) { sort = SortStatus.NONE; }
        this.field = field;
        this.header = header;
        this.sortStatus = sort;
    }
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
        return new CellTemplateWithContext(this.headerTemplate, this.editTemplate, headerCellContext, this.width, fieldId, this.sortStatus);
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
        return new CellTemplateWithAccessor(this.cellTemplate, this.editTemplate, true, accessor, this.width, this.field.getId());
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzlFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3pFO0lBa0JDLDBCQUFZLEtBQWtCLEVBQzNCLE1BQStCLEVBQy9CLElBQWtDO1FBQWxDLHFCQUFBLEVBQUEsT0FBbUIsVUFBVSxDQUFDLElBQUk7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxvQ0FBUzs7OztJQUFULFVBQVUsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELG1DQUFROzs7O0lBQVIsVUFBUyxLQUFrQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELDJEQUFnQzs7OztJQUFoQyxVQUFpQyxLQUFhOztZQUV2QyxNQUFNLEdBQVEsSUFBSSxDQUFDLE1BQU07O1lBQzNCLGlCQUE4QjtRQUVsQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUMvQixpQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QzthQUFNLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFO1lBQ3hDLGlCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25EOztZQUVLLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXZELE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JJLENBQUM7Ozs7SUFFRCw2REFBa0M7OztJQUFsQztRQUFBLGlCQU9DOztZQUxJLFFBQVE7Ozs7UUFBRyxVQUFDLE1BQVc7WUFDMUIsT0FBTyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQTtRQUVELE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMzSCxDQUFDO0lBRUYsdUJBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDOzs7O0lBekRBLHdDQUErQjs7SUFFL0IsMENBQWlDOztJQUVqQyx3Q0FBK0I7O0lBRS9CLGlDQUFjOztJQUVkLDRDQUFxQzs7Ozs7SUFFckMsaUNBQTJCOzs7OztJQUUzQixzQ0FBK0I7Ozs7O0lBRS9CLGtDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IFNvcnRTdGF0dXMgfSBmcm9tICcuLi8uLi9jb21tYW5kL3NvcnQvc29ydC1zdGF0dXMnO1xuaW1wb3J0IHsgSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsQ29udGV4dCB9IGZyb20gJy4vY2VsbC1jb250ZXh0JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRjZWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0aGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0ZWRpdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0dGVtcGxhdGVGdW5jdGlvbjogKGk6IGFueSkgPT4gc3RyaW5nO1xuXG5cdHByaXZhdGUgZmllbGQ6IENvbHVtbkZpZWxkO1xuXG5cdHByaXZhdGUgc29ydFN0YXR1czogU29ydFN0YXR1cztcblxuXHRwcml2YXRlIGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0Y29uc3RydWN0b3IoZmllbGQ6IENvbHVtbkZpZWxkLFxuXHRcdFx0XHRoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHRzb3J0OiBTb3J0U3RhdHVzID0gU29ydFN0YXR1cy5OT05FKSB7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnQ7XG5cdH1cblxuXHRzZXRIZWFkZXIoaGVhZGVyOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0fVxuXG5cdHNldEZpZWxkKGZpZWxkOiBDb2x1bW5GaWVsZCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0fVxuXG5cdGdldEhlYWRlckNlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KGluZGV4OiBudW1iZXIpOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB7XG5cblx0XHRjb25zdCBoZWFkZXI6IGFueSA9IHRoaXMuaGVhZGVyO1xuXHRcdGxldCBoZWFkZXJDZWxsQ29udGV4dDogQ2VsbENvbnRleHQ7XG5cblx0XHRpZiAodHlwZW9mIGhlYWRlciA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGhlYWRlckNlbGxDb250ZXh0ID0gbmV3IENlbGxDb250ZXh0KGhlYWRlcik7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgaGVhZGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRoZWFkZXJDZWxsQ29udGV4dCA9IG5ldyBDZWxsQ29udGV4dChoZWFkZXIoaW5kZXgpKTtcblx0XHR9XG5cblx0XHRjb25zdCBmaWVsZElkID0gbmV3IEZpZWxkSWQodGhpcy5maWVsZC5nZXRJZCgpLmdldElkKCkpO1xuXG5cdFx0cmV0dXJuIG5ldyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCh0aGlzLmhlYWRlclRlbXBsYXRlLCB0aGlzLmVkaXRUZW1wbGF0ZSwgaGVhZGVyQ2VsbENvbnRleHQsIHRoaXMud2lkdGgsIGZpZWxkSWQsIHRoaXMuc29ydFN0YXR1cyk7XG5cdH1cblxuXHRnZXRDb250ZW50Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yKCk6IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB7XG5cblx0XHRsZXQgYWNjZXNzb3IgPSAoZW50aXR5OiBhbnkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb24odGhpcy5maWVsZC5nZXRBY2Nlc3NvcigpKGVudGl0eSkpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gbmV3IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcih0aGlzLmNlbGxUZW1wbGF0ZSwgdGhpcy5lZGl0VGVtcGxhdGUsIHRydWUsIGFjY2Vzc29yLCB0aGlzLndpZHRoLCB0aGlzLmZpZWxkLmdldElkKCkpO1xuXHR9XG5cbn1cbiJdfQ==