/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter, take } from 'rxjs/operators';
import { InitFieldsCommand } from '../../../../field/domain/init/init-fields.command';
import { FieldsInitedEvent } from '../../../../field/domain/init/fields-inited.event';
import { ColumnFieldId } from '../../../../../composition/domain/column/field/column-field.id';
import { ColumnParams } from '../../../../../composition/domain/column/set-columns/column.params';
var StructureColumnInputHandler = /** @class */ (function () {
    function StructureColumnInputHandler(structureId, compositionId, commandDispatcher, domainEventBus, columnFieldFactory, compositionCommandInvoker) {
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.commandDispatcher = commandDispatcher;
        this.domainEventBus = domainEventBus;
        this.columnFieldFactory = columnFieldFactory;
        this.compositionCommandInvoker = compositionCommandInvoker;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    StructureColumnInputHandler.prototype.handle = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
        var _this = this;
        /** @type {?} */
        var fieldConfigs = simpleChanges.columns.currentValue;
        /** @type {?} */
        var initCommand = new InitFieldsCommand(this.structureId, (/** @type {?} */ (fieldConfigs)));
        this.domainEventBus
            .ofEvent((/** @type {?} */ (FieldsInitedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === _this.structureId.toString(); })), take(1))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var fields = event.getFields();
            /** @type {?} */
            var columnFieldIds = _this.convertColumnFieldIds(fields);
            /** @type {?} */
            var columns = event.fieldConfigs;
            /** @type {?} */
            var params = _this.convertColumns(columns, fields, columnFieldIds);
            _this.compositionCommandInvoker.setColumns(params, _this.compositionId);
        }));
        this.commandDispatcher.dispatch(initCommand);
    };
    /**
     * @private
     * @param {?} fields
     * @return {?}
     */
    StructureColumnInputHandler.prototype.convertColumnFieldIds = /**
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
    StructureColumnInputHandler.prototype.convertColumns = /**
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
    return StructureColumnInputHandler;
}());
export { StructureColumnInputHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureColumnInputHandler.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnInputHandler.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnInputHandler.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureColumnInputHandler.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    StructureColumnInputHandler.prototype.columnFieldFactory;
    /**
     * @type {?}
     * @private
     */
    StructureColumnInputHandler.prototype.compositionCommandInvoker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi5pbnB1dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL2dhdGV3YXkvY29sdW1uL3N0cnVjdHVyZS1jb2x1bW4uaW5wdXQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUV0RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUd0RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFFL0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBTWxHO0lBRUMscUNBQTZCLFdBQXdCLEVBQ2pDLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxjQUE4QixFQUM5QixrQkFBc0MsRUFDdEMseUJBQW9EO1FBTDNDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUN4RSxDQUFDOzs7OztJQUVELDRDQUFNOzs7O0lBQU4sVUFBTyxhQUE0QjtRQUFuQyxpQkF5QkM7O1lBdkJNLFlBQVksR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVk7O1lBRWpELFdBQVcsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsbUJBQUEsWUFBWSxFQUFzQixDQUFDO1FBRS9GLElBQUksQ0FBQyxjQUFjO2FBQ2pCLE9BQU8sQ0FDUCxtQkFBQSxpQkFBaUIsRUFBTyxDQUN4QjthQUNBLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxLQUErQixJQUFLLE9BQUEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQWpFLENBQWlFLEVBQUMsRUFDOUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBd0I7O2dCQUU3QixNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRTs7Z0JBQy9CLGNBQWMsR0FBRyxLQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDOztnQkFDbkQsT0FBTyxHQUFHLEtBQUssQ0FBQyxZQUFZOztnQkFDNUIsTUFBTSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUM7WUFFOUQsS0FBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFTywyREFBcUI7Ozs7O0lBQTdCLFVBQThCLE1BQW9CO1FBRWpELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsS0FBWSxJQUFLLE9BQUEsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQXhDLENBQXdDLEVBQUMsQ0FBQztJQUMvRSxDQUFDOzs7Ozs7OztJQUVPLG9EQUFjOzs7Ozs7O0lBQXRCLFVBQXVCLE9BQTRCLEVBQUUsTUFBb0IsRUFBRSxjQUFvQztRQUEvRyxpQkFxQkM7UUFuQkEsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsTUFBb0IsRUFBRSxLQUFhOztnQkFFaEQsYUFBYSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7O2dCQUMxQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzs7Z0JBRWhCLFdBQVcsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUNqRCxhQUFhLEVBQ2IsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEVBQ3pCLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFDbkIsS0FBSyxDQUFDLHVCQUF1QixFQUFFLENBQy9CO1lBRUQsT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxFQUFDLENBQUM7SUFFSixDQUFDO0lBRUYsa0NBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDOzs7Ozs7O0lBbkVZLGtEQUF5Qzs7Ozs7SUFDbEQsb0RBQTZDOzs7OztJQUM3Qyx3REFBcUQ7Ozs7O0lBQ3JELHFEQUErQzs7Ozs7SUFDL0MseURBQXVEOzs7OztJQUN2RCxnRUFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBJbml0RmllbGRzQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9kb21haW4tYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW1uLWZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bS1maWVsZC5mYWN0b3J5JztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRmllbGRGYWN0b3J5OiBDb2x1bW5GaWVsZEZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Db21tYW5kSW52b2tlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcikge1xuXHR9XG5cblx0aGFuZGxlKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkQ29uZmlncyA9IHNpbXBsZUNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWU7XG5cblx0XHRjb25zdCBpbml0Q29tbWFuZCA9IG5ldyBJbml0RmllbGRzQ29tbWFuZCh0aGlzLnN0cnVjdHVyZUlkLCBmaWVsZENvbmZpZ3MgYXMgQXJyYXk8RmllbGRDb25maWc+KTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50KFxuXHRcdFx0XHRGaWVsZHNJbml0ZWRFdmVudCBhcyBhbnlcblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gdGhpcy5zdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0dGFrZSgxKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IEZpZWxkc0luaXRlZEV2ZW50KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgZmllbGRzID0gZXZlbnQuZ2V0RmllbGRzKCksXG5cdFx0XHRcdFx0Y29sdW1uRmllbGRJZHMgPSB0aGlzLmNvbnZlcnRDb2x1bW5GaWVsZElkcyhmaWVsZHMpLFxuXHRcdFx0XHRcdGNvbHVtbnMgPSBldmVudC5maWVsZENvbmZpZ3MsXG5cdFx0XHRcdFx0cGFyYW1zID0gdGhpcy5jb252ZXJ0Q29sdW1ucyhjb2x1bW5zLCBmaWVsZHMsIGNvbHVtbkZpZWxkSWRzKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuc2V0Q29sdW1ucyhwYXJhbXMsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goaW5pdENvbW1hbmQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1uRmllbGRJZHMoZmllbGRzOiBBcnJheTxGaWVsZD4pOiBBcnJheTxDb2x1bW5GaWVsZElkPiB7XG5cblx0XHRpZiAoIWZpZWxkcykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZDogRmllbGQpID0+IG5ldyBDb2x1bW5GaWVsZElkKGZpZWxkLmdldElkKCkuZ2V0SWQoKSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCBmaWVsZHM6IEFycmF5PEZpZWxkPiwgY29sdW1uRmllbGRJZHM6IEFycmF5PENvbHVtbkZpZWxkSWQ+KTogQXJyYXk8Q29sdW1uUGFyYW1zPiB7XG5cblx0XHRpZiAoIWNvbHVtbnMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkSWQgPSBjb2x1bW5GaWVsZElkc1tpbmRleF0sXG5cdFx0XHRcdGZpZWxkID0gZmllbGRzW2luZGV4XTtcblxuXHRcdFx0Y29uc3QgY29sdW1uRmllbGQgPSB0aGlzLmNvbHVtbkZpZWxkRmFjdG9yeS5jcmVhdGUoXG5cdFx0XHRcdGNvbHVtbkZpZWxkSWQsXG5cdFx0XHRcdGZpZWxkLmdldEFjY2Vzc29yTWV0aG9kKCksXG5cdFx0XHRcdGZpZWxkLmdldERhdGFUeXBlKCksXG5cdFx0XHRcdGZpZWxkLmdldFNlYXJjaEFjY2Vzc29yTWV0aG9kKClcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiBuZXcgQ29sdW1uUGFyYW1zKGNvbHVtbiwgY29sdW1uRmllbGQpO1xuXHRcdH0pO1xuXG5cdH1cblxufVxuIl19