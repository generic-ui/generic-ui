/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { FieldsInitedEvent } from '../../../../../structure/domain/structure/command/field/init/fields-inited.event';
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
            var columnField = _this.columnFieldFactory.create(columnFieldId, field.getAccessorMethod(), field.getDataType());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLWZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFlLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0ZBQWtGLENBQUM7QUFHckgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQztJQUN5RCwrREFBa0I7SUFFMUUsNkNBQW9CLHFCQUE0QyxFQUM1QyxrQkFBc0M7UUFEMUQsWUFFQyxpQkFBTyxTQUNQO1FBSG1CLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjs7SUFFMUQsQ0FBQzs7Ozs7SUFFRCxvREFBTTs7OztJQUFOLFVBQU8sS0FBa0I7UUFFeEIsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7OztnQkFHakMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUU7O2dCQUMvQixjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQzs7Z0JBQ25ELE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTzs7Z0JBQ3ZCLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDO1lBRTlELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNuRTtJQUNGLENBQUM7Ozs7OztJQUVPLG1FQUFxQjs7Ozs7SUFBN0IsVUFBOEIsTUFBb0I7UUFFakQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNaLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxLQUFZLElBQUssT0FBQSxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBeEMsQ0FBd0MsRUFBQyxDQUFDO0lBQy9FLENBQUM7Ozs7Ozs7O0lBRU8sNERBQWM7Ozs7Ozs7SUFBdEIsVUFBdUIsT0FBNEIsRUFBRSxNQUFvQixFQUFFLGNBQW9DO1FBQS9HLGlCQWdCQztRQWRBLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsT0FBTyxPQUFPLENBQUMsR0FBRzs7Ozs7UUFBQyxVQUFDLE1BQW9CLEVBQUUsS0FBYTs7Z0JBRWhELGFBQWEsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDOztnQkFDMUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7O2dCQUVoQixXQUFXLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRWpILE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO0lBRUosQ0FBQzs7Z0JBL0NELFVBQVU7Ozs7Z0JBUEYscUJBQXFCO2dCQUNyQixrQkFBa0I7O0lBK0UzQiwwQ0FBQztDQUFBLEFBekVELENBQ3lELGtCQUFrQixHQXdFMUU7U0F4RVksbUNBQW1DOzs7Ozs7SUFFbkMsb0VBQW9EOzs7OztJQUM3RCxpRUFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbHVtbkZpZWxkRmFjdG9yeSB9IGZyb20gJy4uL2ZpZWxkL2NvbHVtLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkL2NvbHVtbi1maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uLnBhcmFtcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkZpZWxkRmFjdG9yeTogQ29sdW1uRmllbGRGYWN0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogRG9tYWluRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIEZpZWxkc0luaXRlZEV2ZW50KSB7XG5cblx0XHRcdC8vIFRPRE8gTW92ZSB0byBkaWZmZXJlbnQgbGF5ZXJcblx0XHRcdGNvbnN0IGZpZWxkcyA9IGV2ZW50LmdldEZpZWxkcygpLFxuXHRcdFx0XHRjb2x1bW5GaWVsZElkcyA9IHRoaXMuY29udmVydENvbHVtbkZpZWxkSWRzKGZpZWxkcyksXG5cdFx0XHRcdGNvbHVtbnMgPSBldmVudC5jb2x1bW5zLFxuXHRcdFx0XHRwYXJhbXMgPSB0aGlzLmNvbnZlcnRDb2x1bW5zKGNvbHVtbnMsIGZpZWxkcywgY29sdW1uRmllbGRJZHMpO1xuXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb2x1bW5zKGV2ZW50LmNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1uRmllbGRJZHMoZmllbGRzOiBBcnJheTxGaWVsZD4pOiBBcnJheTxDb2x1bW5GaWVsZElkPiB7XG5cblx0XHRpZiAoIWZpZWxkcykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZDogRmllbGQpID0+IG5ldyBDb2x1bW5GaWVsZElkKGZpZWxkLmdldElkKCkuZ2V0SWQoKSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCBmaWVsZHM6IEFycmF5PEZpZWxkPiwgY29sdW1uRmllbGRJZHM6IEFycmF5PENvbHVtbkZpZWxkSWQ+KTogQXJyYXk8Q29sdW1uUGFyYW1zPiB7XG5cblx0XHRpZiAoIWNvbHVtbnMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkSWQgPSBjb2x1bW5GaWVsZElkc1tpbmRleF0sXG5cdFx0XHRcdGZpZWxkID0gZmllbGRzW2luZGV4XTtcblxuXHRcdFx0Y29uc3QgY29sdW1uRmllbGQgPSB0aGlzLmNvbHVtbkZpZWxkRmFjdG9yeS5jcmVhdGUoY29sdW1uRmllbGRJZCwgZmllbGQuZ2V0QWNjZXNzb3JNZXRob2QoKSwgZmllbGQuZ2V0RGF0YVR5cGUoKSk7XG5cblx0XHRcdHJldHVybiBuZXcgQ29sdW1uUGFyYW1zKGNvbHVtbiwgY29sdW1uRmllbGQpO1xuXHRcdH0pO1xuXG5cdH1cblxuXHQvLyBoYW5kbGUoZXZlbnQ6IERvbWFpbkV2ZW50KTogdm9pZCB7XG5cdC8vXG5cdC8vIFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgRmllbGRzSW5pdGVkRXZlbnQpIHtcblx0Ly9cblx0Ly8gXHRcdC8vIFRPRE8gTW92ZSB0byBkaWZmZXJlbnQgbGF5ZXJcblx0Ly8gXHRcdGxldCBmaWVsZHMgPSBldmVudC5nZXRGaWVsZHMoKTtcblx0Ly9cblx0Ly8gXHRcdGlmICghIWZpZWxkcykge1xuXHQvLyBcdFx0XHRmaWVsZHMgPSBbXTtcblx0Ly8gXHRcdH1cblx0Ly8gXHRcdGNvbnN0IGNvbHVtbkZpZWxkSWRzID0gZmllbGRzLm1hcCgoZmllbGQ6IEZpZWxkKSA9PiBuZXcgQ29sdW1uRmllbGRJZChmaWVsZC5nZXRJZCgpLmdldElkKCkpKTtcblx0Ly9cblx0Ly8gXHRcdGxldCBjb2x1bW5zID0gZXZlbnQuY29sdW1ucyB8fCBbXTtcblx0Ly9cblx0Ly8gXHRcdGNvbnN0IHBhcmFtcyA9IGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuXHQvLyBcdFx0XHRjb25zdCBjb2x1bW5GaWVsZCA9IG5ldyBDb2x1bW5GaWVsZChjb2x1bW5GaWVsZElkc1tpbmRleF0sIGZpZWxkc1tpbmRleF0uZ2V0QWNjZXNzb3JNZXRob2QoKSk7XG5cdC8vXG5cdC8vIFx0XHRcdHJldHVybiBuZXcgQ29sdW1uUGFyYW1zKGNvbHVtbiwgY29sdW1uRmllbGQpO1xuXHQvLyBcdFx0fSk7XG5cdC8vXG5cdC8vIFx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb2x1bW5zKGV2ZW50LmNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdC8vIFx0fVxuXHQvLyB9XG5cbn1cbiJdfQ==