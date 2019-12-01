/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { FieldsInitedEvent } from '../../../../structure/command/field/init/fields-inited.event';
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
        var _this = this;
        if (event instanceof FieldsInitedEvent) {
            // TODO Move to different layer
            /** @type {?} */
            var fields_1 = event.getFields();
            /** @type {?} */
            var columnFieldIds_1 = fields_1.map((/**
             * @param {?} field
             * @return {?}
             */
            function (field) { return new ColumnFieldId(field.getId().getId()); }));
            /** @type {?} */
            var columns = event.columns;
            /** @type {?} */
            var params = columns.map((/**
             * @param {?} column
             * @param {?} index
             * @return {?}
             */
            function (column, index) {
                /** @type {?} */
                var columnFieldId = columnFieldIds_1[index];
                /** @type {?} */
                var field = fields_1[index];
                /** @type {?} */
                var columnField = _this.columnFieldFactory.create(columnFieldId, field.getAccessorMethod(), field.getDataType());
                return new ColumnParams(column, columnField);
            }));
            this.compositionDispatcher.setColumns(event.compositionId, params);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi1maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBRXJFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBR2pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0M7SUFDeUQsK0RBQWtCO0lBRTFFLDZDQUFvQixxQkFBNEMsRUFDNUMsa0JBQXNDO1FBRDFELFlBRUMsaUJBQU8sU0FDUDtRQUhtQiwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7O0lBRTFELENBQUM7Ozs7O0lBRUQsb0RBQU07Ozs7SUFBTixVQUFPLEtBQWtCO1FBQXpCLGlCQW9CQztRQWxCQSxJQUFJLEtBQUssWUFBWSxpQkFBaUIsRUFBRTs7O2dCQUdqQyxRQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRTs7Z0JBQy9CLGdCQUFjLEdBQUcsUUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLEtBQVksSUFBSyxPQUFBLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUF4QyxDQUF3QyxFQUFDOztnQkFDdkYsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPOztnQkFDdkIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7OztZQUFDLFVBQUMsTUFBb0IsRUFBRSxLQUFhOztvQkFFbEQsYUFBYSxHQUFHLGdCQUFjLENBQUMsS0FBSyxDQUFDOztvQkFDMUMsS0FBSyxHQUFHLFFBQU0sQ0FBQyxLQUFLLENBQUM7O29CQUVoQixXQUFXLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUVqSCxPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5QyxDQUFDLEVBQUM7WUFFSCxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbkU7SUFDRixDQUFDOztnQkE1QkQsVUFBVTs7OztnQkFQRixxQkFBcUI7Z0JBQ3JCLGtCQUFrQjs7SUE0RDNCLDBDQUFDO0NBQUEsQUF0REQsQ0FDeUQsa0JBQWtCLEdBcUQxRTtTQXJEWSxtQ0FBbUM7Ozs7OztJQUVuQyxvRUFBb0Q7Ozs7O0lBQzdELGlFQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi9maWVsZC9jb2x1bS1maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IENvbHVtbkZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC9jb2x1bW4tZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL2NvbHVtbi5wYXJhbXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvbkRpc3BhdGNoZXI6IENvbXBvc2l0aW9uRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5GaWVsZEZhY3Rvcnk6IENvbHVtbkZpZWxkRmFjdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IERvbWFpbkV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBGaWVsZHNJbml0ZWRFdmVudCkge1xuXG5cdFx0XHQvLyBUT0RPIE1vdmUgdG8gZGlmZmVyZW50IGxheWVyXG5cdFx0XHRjb25zdCBmaWVsZHMgPSBldmVudC5nZXRGaWVsZHMoKSxcblx0XHRcdFx0Y29sdW1uRmllbGRJZHMgPSBmaWVsZHMubWFwKChmaWVsZDogRmllbGQpID0+IG5ldyBDb2x1bW5GaWVsZElkKGZpZWxkLmdldElkKCkuZ2V0SWQoKSkpLFxuXHRcdFx0XHRjb2x1bW5zID0gZXZlbnQuY29sdW1ucyxcblx0XHRcdFx0cGFyYW1zID0gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdFx0XHRjb25zdCBjb2x1bW5GaWVsZElkID0gY29sdW1uRmllbGRJZHNbaW5kZXhdLFxuXHRcdFx0XHRcdFx0ZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuXG5cdFx0XHRcdFx0Y29uc3QgY29sdW1uRmllbGQgPSB0aGlzLmNvbHVtbkZpZWxkRmFjdG9yeS5jcmVhdGUoY29sdW1uRmllbGRJZCwgZmllbGQuZ2V0QWNjZXNzb3JNZXRob2QoKSwgZmllbGQuZ2V0RGF0YVR5cGUoKSk7XG5cblx0XHRcdFx0XHRyZXR1cm4gbmV3IENvbHVtblBhcmFtcyhjb2x1bW4sIGNvbHVtbkZpZWxkKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbHVtbnMoZXZlbnQuY29tcG9zaXRpb25JZCwgcGFyYW1zKTtcblx0XHR9XG5cdH1cblxuXHQvLyBoYW5kbGUoZXZlbnQ6IERvbWFpbkV2ZW50KTogdm9pZCB7XG5cdC8vXG5cdC8vIFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgRmllbGRzSW5pdGVkRXZlbnQpIHtcblx0Ly9cblx0Ly8gXHRcdC8vIFRPRE8gTW92ZSB0byBkaWZmZXJlbnQgbGF5ZXJcblx0Ly8gXHRcdGxldCBmaWVsZHMgPSBldmVudC5nZXRGaWVsZHMoKTtcblx0Ly9cblx0Ly8gXHRcdGlmICghIWZpZWxkcykge1xuXHQvLyBcdFx0XHRmaWVsZHMgPSBbXTtcblx0Ly8gXHRcdH1cblx0Ly8gXHRcdGNvbnN0IGNvbHVtbkZpZWxkSWRzID0gZmllbGRzLm1hcCgoZmllbGQ6IEZpZWxkKSA9PiBuZXcgQ29sdW1uRmllbGRJZChmaWVsZC5nZXRJZCgpLmdldElkKCkpKTtcblx0Ly9cblx0Ly8gXHRcdGxldCBjb2x1bW5zID0gZXZlbnQuY29sdW1ucyB8fCBbXTtcblx0Ly9cblx0Ly8gXHRcdGNvbnN0IHBhcmFtcyA9IGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuXHQvLyBcdFx0XHRjb25zdCBjb2x1bW5GaWVsZCA9IG5ldyBDb2x1bW5GaWVsZChjb2x1bW5GaWVsZElkc1tpbmRleF0sIGZpZWxkc1tpbmRleF0uZ2V0QWNjZXNzb3JNZXRob2QoKSk7XG5cdC8vXG5cdC8vIFx0XHRcdHJldHVybiBuZXcgQ29sdW1uUGFyYW1zKGNvbHVtbiwgY29sdW1uRmllbGQpO1xuXHQvLyBcdFx0fSk7XG5cdC8vXG5cdC8vIFx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb2x1bW5zKGV2ZW50LmNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdC8vIFx0fVxuXHQvLyB9XG5cbn1cbiJdfQ==