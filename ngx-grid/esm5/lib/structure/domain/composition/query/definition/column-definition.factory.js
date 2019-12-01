/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ViewTemplateRepository } from '../view/view-template.repository';
import { EditTemplateRepository } from '../edit/edit-template.repository';
import { ColumnDefinition } from './column-definition';
import { CellView } from '../../cell-view';
var ColumnDefinitionFactory = /** @class */ (function () {
    function ColumnDefinitionFactory(viewTemplateRepository, editTemplateRepository) {
        this.viewTemplateRepository = viewTemplateRepository;
        this.editTemplateRepository = editTemplateRepository;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    ColumnDefinitionFactory.prototype.create = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        /** @type {?} */
        var columnDef = new ColumnDefinition(column.getField(), column.getHeader(), column.sortStatus);
        columnDef.cellTemplate = this.findViewTemplate(column.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        columnDef.templateFunction = column.getTemplateFunction();
        columnDef.editTemplate = this.findEditTemplate(column.getDataType());
        columnDef.width = +column.width;
        return columnDef;
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    ColumnDefinitionFactory.prototype.createColumns = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        return columns.map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return _this.create(column); }));
    };
    /**
     * @private
     * @param {?} view
     * @return {?}
     */
    ColumnDefinitionFactory.prototype.findViewTemplate = /**
     * @private
     * @param {?} view
     * @return {?}
     */
    function (view) {
        if (view === CellView.FUNCTION) {
            return this.viewTemplateRepository.findTemplate(CellView.FUNCTION);
        }
        else {
            return this.viewTemplateRepository.findTemplate(view);
        }
    };
    /**
     * @private
     * @param {?} dataType
     * @return {?}
     */
    ColumnDefinitionFactory.prototype.findEditTemplate = /**
     * @private
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return this.editTemplateRepository.findTemplate(dataType);
    };
    ColumnDefinitionFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ColumnDefinitionFactory.ctorParameters = function () { return [
        { type: ViewTemplateRepository },
        { type: EditTemplateRepository }
    ]; };
    return ColumnDefinitionFactory;
}());
export { ColumnDefinitionFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnDefinitionFactory.prototype.viewTemplateRepository;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinitionFactory.prototype.editTemplateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUszQztJQUdDLGlDQUFvQixzQkFBOEMsRUFDdkQsc0JBQThDO1FBRHJDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDdkQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUN6RCxDQUFDOzs7OztJQUVELHdDQUFNOzs7O0lBQU4sVUFBTyxNQUFvQjs7WUFFdEIsU0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRTlGLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRSxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFMUQsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFckUsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFaEMsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCwrQ0FBYTs7OztJQUFiLFVBQWMsT0FBNEI7UUFBMUMsaUJBRUM7UUFEQSxPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFvQixJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBbkIsQ0FBbUIsRUFBQyxDQUFDO0lBQ25FLENBQUM7Ozs7OztJQUVPLGtEQUFnQjs7Ozs7SUFBeEIsVUFBeUIsSUFBYztRQUV0QyxJQUFJLElBQUksS0FBSyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkU7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0RDtJQUNGLENBQUM7Ozs7OztJQUVPLGtEQUFnQjs7Ozs7SUFBeEIsVUFBeUIsUUFBa0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQXRDRCxVQUFVOzs7O2dCQVRGLHNCQUFzQjtnQkFDdEIsc0JBQXNCOztJQWdEL0IsOEJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXZDWSx1QkFBdUI7Ozs7OztJQUV2Qix5REFBc0Q7Ozs7O0lBQy9ELHlEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi92aWV3L3ZpZXctdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uIH0gZnJvbSAnLi9jb2x1bW4tZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbHVtbkRlZmluaXRpb25GYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdUZW1wbGF0ZVJlcG9zaXRvcnk6IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZWRpdFRlbXBsYXRlUmVwb3NpdG9yeTogRWRpdFRlbXBsYXRlUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Y3JlYXRlKGNvbHVtbjogQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbiB7XG5cblx0XHRsZXQgY29sdW1uRGVmID0gbmV3IENvbHVtbkRlZmluaXRpb24oY29sdW1uLmdldEZpZWxkKCksIGNvbHVtbi5nZXRIZWFkZXIoKSwgY29sdW1uLnNvcnRTdGF0dXMpO1xuXG5cdFx0Y29sdW1uRGVmLmNlbGxUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShjb2x1bW4uZ2V0Q2VsbFZpZXcoKSk7XG5cdFx0Y29sdW1uRGVmLmhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LlRFWFQpO1xuXG5cdFx0Y29sdW1uRGVmLnRlbXBsYXRlRnVuY3Rpb24gPSBjb2x1bW4uZ2V0VGVtcGxhdGVGdW5jdGlvbigpO1xuXG5cdFx0Y29sdW1uRGVmLmVkaXRUZW1wbGF0ZSA9IHRoaXMuZmluZEVkaXRUZW1wbGF0ZShjb2x1bW4uZ2V0RGF0YVR5cGUoKSk7XG5cblx0XHRjb2x1bW5EZWYud2lkdGggPSArY29sdW1uLndpZHRoO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZjtcblx0fVxuXG5cdGNyZWF0ZUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uRW50aXR5KSA9PiB0aGlzLmNyZWF0ZShjb2x1bW4pKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZFZpZXdUZW1wbGF0ZSh2aWV3OiBDZWxsVmlldyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXG5cdFx0aWYgKHZpZXcgPT09IENlbGxWaWV3LkZVTkNUSU9OKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZShDZWxsVmlldy5GVU5DVElPTik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkuZmluZFRlbXBsYXRlKHZpZXcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZmluZEVkaXRUZW1wbGF0ZShkYXRhVHlwZTogRGF0YVR5cGUpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5lZGl0VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZShkYXRhVHlwZSk7XG5cdH1cblxufVxuIl19