/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { FieldsInitedEvent } from '../../../../structure/domain/structure/field/init/fields-inited.event';
import { CompositionDispatcher } from '../../composition.dispatcher';
import { ColumnFieldFactory } from '../field/colum-field.factory';
import { ColumnFieldId } from '../field/column-field.id';
import { ColumnParams } from './column.params';
var CompositionFieldsInitedEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionFieldsInitedEventHandler, _super);
    function CompositionFieldsInitedEventHandler(compositionDispatcher, columnFieldFactory) {
        var _this = _super.call(this) || this;
        _this.compositionDispatcher = compositionDispatcher;
        _this.columnFieldFactory = columnFieldFactory;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CompositionFieldsInitedEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof FieldsInitedEvent) {
            // TODO Move to different layer
            /** @type {?} */
            var fields = event.getFields();
            /** @type {?} */
            var columnFieldIds = this.convertColumnFieldIds(fields);
            /** @type {?} */
            var columns = event.columns;
            /** @type {?} */
            var params = this.convertColumns(columns, fields, columnFieldIds);
            this.compositionDispatcher.setColumns(event.compositionId, params);
        }
    };
    /**
     * @private
     * @param {?} fields
     * @return {?}
     */
    CompositionFieldsInitedEventHandler.prototype.convertColumnFieldIds = /**
     * @private
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        if (!fields) {
            return [];
        }
        return fields.map((/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return new ColumnFieldId(field.getId().getId()); }));
    };
    /**
     * @private
     * @param {?} columns
     * @param {?} fields
     * @param {?} columnFieldIds
     * @return {?}
     */
    CompositionFieldsInitedEventHandler.prototype.convertColumns = /**
     * @private
     * @param {?} columns
     * @param {?} fields
     * @param {?} columnFieldIds
     * @return {?}
     */
    function (columns, fields, columnFieldIds) {
        var _this = this;
        if (!columns) {
            return [];
        }
        return columns.map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) {
            /** @type {?} */
            var columnFieldId = columnFieldIds[index];
            /** @type {?} */
            var field = fields[index];
            /** @type {?} */
            var columnField = _this.columnFieldFactory.create(columnFieldId, field.getAccessorMethod(), field.getDataType(), field.getSearchAccessorMethod());
            return new ColumnParams(column, columnField);
        }));
    };
    CompositionFieldsInitedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionFieldsInitedEventHandler.ctorParameters = function () { return [
        { type: CompositionDispatcher },
        { type: ColumnFieldFactory }
    ]; };
    return CompositionFieldsInitedEventHandler;
}(DomainEventHandler));
export { CompositionFieldsInitedEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionFieldsInitedEventHandler.prototype.compositionDispatcher;
    /**
     * @type {?}
     * @private
     */
    CompositionFieldsInitedEventHandler.prototype.columnFieldFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi1maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBZSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBRTFHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJL0M7SUFDeUQsK0RBQWtCO0lBRTFFLDZDQUFvQixxQkFBNEMsRUFDNUMsa0JBQXNDO1FBRDFELFlBRUMsaUJBQU8sU0FDUDtRQUhtQiwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7O0lBRTFELENBQUM7Ozs7O0lBRUQsb0RBQU07Ozs7SUFBTixVQUFPLEtBQWtCO1FBRXhCLElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFOzs7Z0JBR2pDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFOztnQkFDL0IsY0FBYyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUM7O2dCQUNuRCxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU87O2dCQUN2QixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQztZQUU5RCxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbkU7SUFDRixDQUFDOzs7Ozs7SUFFTyxtRUFBcUI7Ozs7O0lBQTdCLFVBQThCLE1BQXdCO1FBRXJELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUF4QyxDQUF3QyxFQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7Ozs7SUFFTyw0REFBYzs7Ozs7OztJQUF0QixVQUF1QixPQUE0QixFQUFFLE1BQXdCLEVBQUUsY0FBb0M7UUFBbkgsaUJBZ0JDO1FBZEEsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsTUFBb0IsRUFBRSxLQUFhOztnQkFFaEQsYUFBYSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7O2dCQUMxQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzs7Z0JBRWhCLFdBQVcsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFFbEosT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxFQUFDLENBQUM7SUFFSixDQUFDOztnQkEvQ0QsVUFBVTs7OztnQkFSRixxQkFBcUI7Z0JBQ3JCLGtCQUFrQjs7SUF1RDNCLDBDQUFDO0NBQUEsQUFoREQsQ0FDeUQsa0JBQWtCLEdBK0MxRTtTQS9DWSxtQ0FBbUM7Ozs7OztJQUVuQyxvRUFBb0Q7Ozs7O0lBQzdELGlFQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi9maWVsZC9jb2x1bS1maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IENvbHVtbkZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC9jb2x1bW4tZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvbkRpc3BhdGNoZXI6IENvbXBvc2l0aW9uRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5GaWVsZEZhY3Rvcnk6IENvbHVtbkZpZWxkRmFjdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IERvbWFpbkV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBGaWVsZHNJbml0ZWRFdmVudCkge1xuXG5cdFx0XHQvLyBUT0RPIE1vdmUgdG8gZGlmZmVyZW50IGxheWVyXG5cdFx0XHRjb25zdCBmaWVsZHMgPSBldmVudC5nZXRGaWVsZHMoKSxcblx0XHRcdFx0Y29sdW1uRmllbGRJZHMgPSB0aGlzLmNvbnZlcnRDb2x1bW5GaWVsZElkcyhmaWVsZHMpLFxuXHRcdFx0XHRjb2x1bW5zID0gZXZlbnQuY29sdW1ucyxcblx0XHRcdFx0cGFyYW1zID0gdGhpcy5jb252ZXJ0Q29sdW1ucyhjb2x1bW5zLCBmaWVsZHMsIGNvbHVtbkZpZWxkSWRzKTtcblxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1ucyhldmVudC5jb21wb3NpdGlvbklkLCBwYXJhbXMpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydENvbHVtbkZpZWxkSWRzKGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPik6IEFycmF5PENvbHVtbkZpZWxkSWQ+IHtcblxuXHRcdGlmICghZmllbGRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpZWxkcy5tYXAoKGZpZWxkOiBUeXBlRmllbGQpID0+IG5ldyBDb2x1bW5GaWVsZElkKGZpZWxkLmdldElkKCkuZ2V0SWQoKSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCBmaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4sIGNvbHVtbkZpZWxkSWRzOiBBcnJheTxDb2x1bW5GaWVsZElkPik6IEFycmF5PENvbHVtblBhcmFtcz4ge1xuXG5cdFx0aWYgKCFjb2x1bW5zKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRjb25zdCBjb2x1bW5GaWVsZElkID0gY29sdW1uRmllbGRJZHNbaW5kZXhdLFxuXHRcdFx0XHRmaWVsZCA9IGZpZWxkc1tpbmRleF07XG5cblx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkID0gdGhpcy5jb2x1bW5GaWVsZEZhY3RvcnkuY3JlYXRlKGNvbHVtbkZpZWxkSWQsIGZpZWxkLmdldEFjY2Vzc29yTWV0aG9kKCksIGZpZWxkLmdldERhdGFUeXBlKCksIGZpZWxkLmdldFNlYXJjaEFjY2Vzc29yTWV0aG9kKCkpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IENvbHVtblBhcmFtcyhjb2x1bW4sIGNvbHVtbkZpZWxkKTtcblx0XHR9KTtcblxuXHR9XG59XG4iXX0=