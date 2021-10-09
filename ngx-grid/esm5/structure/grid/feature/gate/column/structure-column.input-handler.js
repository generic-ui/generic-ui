/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { hermesFilter, hermesTake } from '@generic-ui/hermes';
import { InitFieldsCommand } from '../../../../field/core/domain/init/init-fields.command';
import { FieldsInitedEvent } from '../../../../field/core/domain/init/fields-inited.event';
import { ColumnFieldId } from '../../../../../composition/core/domain/column/field/column-field.id';
import { ColumnParams } from '../../../../../composition/core/domain/column/set-columns/column.params';
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
     * @param {?} changes
     * @return {?}
     */
    StructureColumnInputHandler.prototype.handle = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var config = changes.columns.currentValue;
        this.compositionCommandInvoker.setGroups(config, this.compositionId);
        // prepare model
        var _a = this.getConfigs(changes.columns.currentValue), columns = _a.columns, groups = _a.groups;
        /** @type {?} */
        var fieldConfigs = this.getFieldConfigs(columns);
        // const fieldConfigs = columns as Array<FieldConfig>;
        /** @type {?} */
        var initCommand = new InitFieldsCommand(this.structureId, fieldConfigs);
        this.domainEventBus
            .ofEvent((/** @type {?} */ (FieldsInitedEvent)))
            .pipe(hermesFilter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === _this.structureId.toString(); })), hermesTake(1))
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
            var params = _this.convertColumns(columns, fields, columnFieldIds);
            _this.compositionCommandInvoker.setColumns(params, _this.compositionId);
            // this.compositionCommandInvoker.setGroups(this.compositionId);
        }));
        this.commandDispatcher.dispatch(initCommand);
    };
    /**
     * @private
     * @param {?} configs
     * @return {?}
     */
    StructureColumnInputHandler.prototype.getConfigs = /**
     * @private
     * @param {?} configs
     * @return {?}
     */
    function (configs) {
        /** @type {?} */
        var columnConfigs = [];
        /** @type {?} */
        var groupConfigs = [];
        for (var i = 0; i < configs.length; i += 1) {
            /** @type {?} */
            var config = configs[i];
            if (((/** @type {?} */ (config))).columns !== undefined) {
                groupConfigs.push(config);
                columnConfigs.push.apply(columnConfigs, tslib_1.__spread(((/** @type {?} */ (config))).columns));
            }
            else {
                columnConfigs.push(config);
            }
        }
        return {
            columns: columnConfigs,
            groups: groupConfigs
        };
    };
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    StructureColumnInputHandler.prototype.getFieldConfigs = /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        return columns.map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            return {
                field: (/** @type {?} */ (c.field)),
                type: c.type,
                matcher: c.matcher,
                summaries: c.summaries,
                sorting: c.sorting
            };
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi5pbnB1dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvY29sdW1uL3N0cnVjdHVyZS1jb2x1bW4uaW5wdXQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBa0QsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRzNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFRdkc7SUFFQyxxQ0FBNkIsV0FBd0IsRUFDakMsYUFBNEIsRUFDNUIsaUJBQW9DLEVBQ3BDLGNBQThCLEVBQzlCLGtCQUFzQyxFQUN0Qyx5QkFBb0Q7UUFMM0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0Qyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQ3hFLENBQUM7Ozs7O0lBRUQsNENBQU07Ozs7SUFBTixVQUFPLE9BQW9DO1FBQTNDLGlCQW1DQzs7WUFqQ00sTUFBTSxHQUE0QyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVk7UUFFcEYsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztRQUcvRCxJQUFBLGtEQUFtRSxFQUFqRSxvQkFBTyxFQUFFLGtCQUF3RDs7WUFFbkUsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDOzs7WUFJNUMsV0FBVyxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7UUFFekUsSUFBSSxDQUFDLGNBQWM7YUFDakIsT0FBTyxDQUNQLG1CQUFBLGlCQUFpQixFQUFPLENBQ3hCO2FBQ0EsSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxVQUFDLEtBQStCLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBakUsQ0FBaUUsRUFBQyxFQUNwSCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQ2I7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUF3Qjs7Z0JBRTdCLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFOztnQkFDL0IsY0FBYyxHQUFHLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUM7O2dCQUNuRCxNQUFNLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQztZQUU5RCxLQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFdEUsZ0VBQWdFO1FBQ2pFLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFTyxnREFBVTs7Ozs7SUFBbEIsVUFBbUIsT0FBZ0Q7O1lBRTVELGFBQWEsR0FBd0IsRUFBRTs7WUFDNUMsWUFBWSxHQUE2QixFQUFFO1FBRTVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUVyQyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUV6QixJQUFJLENBQUMsbUJBQUEsTUFBTSxFQUFxQixDQUFDLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDeEQsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUIsYUFBYSxDQUFDLElBQUksT0FBbEIsYUFBYSxtQkFBUyxDQUFDLG1CQUFBLE1BQU0sRUFBcUIsQ0FBQyxDQUFDLE9BQU8sR0FBRTthQUM3RDtpQkFBTTtnQkFDTixhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzNCO1NBQ0Q7UUFFRCxPQUFPO1lBQ04sT0FBTyxFQUFFLGFBQWE7WUFDdEIsTUFBTSxFQUFFLFlBQVk7U0FDcEIsQ0FBQztJQUNILENBQUM7Ozs7OztJQUVPLHFEQUFlOzs7OztJQUF2QixVQUF3QixPQUE0QjtRQUVuRCxPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxDQUFDO1lBQ3BCLE9BQU87Z0JBQ04sS0FBSyxFQUFFLG1CQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVU7Z0JBQ3hCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtnQkFDWixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87Z0JBQ2xCLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUztnQkFDdEIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO2FBQ2xCLENBQUM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLDJEQUFxQjs7Ozs7SUFBN0IsVUFBOEIsTUFBb0I7UUFFakQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNaLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxLQUFZLElBQUssT0FBQSxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBeEMsQ0FBd0MsRUFBQyxDQUFDO0lBQy9FLENBQUM7Ozs7Ozs7O0lBRU8sb0RBQWM7Ozs7Ozs7SUFBdEIsVUFBdUIsT0FBNEIsRUFBRSxNQUFvQixFQUFFLGNBQW9DO1FBQS9HLGlCQXFCQztRQW5CQSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sT0FBTyxDQUFDLEdBQUc7Ozs7O1FBQUMsVUFBQyxNQUFvQixFQUFFLEtBQWE7O2dCQUVoRCxhQUFhLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQzs7Z0JBQzFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDOztnQkFFaEIsV0FBVyxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQ2pELGFBQWEsRUFDYixLQUFLLENBQUMsaUJBQWlCLEVBQUUsRUFDekIsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUNuQixLQUFLLENBQUMsdUJBQXVCLEVBQUUsQ0FDL0I7WUFFRCxPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUVKLENBQUM7SUFFRixrQ0FBQztBQUFELENBQUMsQUFuSEQsSUFtSEM7Ozs7Ozs7SUFqSFksa0RBQXlDOzs7OztJQUNsRCxvREFBNkM7Ozs7O0lBQzdDLHdEQUFxRDs7Ozs7SUFDckQscURBQStDOzs7OztJQUMvQyx5REFBdUQ7Ozs7O0lBQ3ZELGdFQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMsIGhlcm1lc0ZpbHRlciwgaGVybWVzVGFrZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vaW5pdC9pbml0LWZpZWxkcy5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bW4tZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBNdWx0aUNvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbHVtbkZpZWxkRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bS1maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlR2F0ZXdheSB9IGZyb20gJy4uL3N0cnVjdHVyZS5nYXRld2F5JztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRmllbGRGYWN0b3J5OiBDb2x1bW5GaWVsZEZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Db21tYW5kSW52b2tlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcikge1xuXHR9XG5cblx0aGFuZGxlKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVHYXRld2F5Pik6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29uZmlnOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4gPSBjaGFuZ2VzLmNvbHVtbnMuY3VycmVudFZhbHVlO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLnNldEdyb3Vwcyhjb25maWcsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cblx0XHQvLyBwcmVwYXJlIG1vZGVsXG5cdFx0Y29uc3QgeyBjb2x1bW5zLCBncm91cHMgfSA9IHRoaXMuZ2V0Q29uZmlncyhjaGFuZ2VzLmNvbHVtbnMuY3VycmVudFZhbHVlKTtcblxuXHRcdGNvbnN0IGZpZWxkQ29uZmlncyA9IHRoaXMuZ2V0RmllbGRDb25maWdzKGNvbHVtbnMpO1xuXG5cdFx0Ly8gY29uc3QgZmllbGRDb25maWdzID0gY29sdW1ucyBhcyBBcnJheTxGaWVsZENvbmZpZz47XG5cblx0XHRjb25zdCBpbml0Q29tbWFuZCA9IG5ldyBJbml0RmllbGRzQ29tbWFuZCh0aGlzLnN0cnVjdHVyZUlkLCBmaWVsZENvbmZpZ3MpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdEZpZWxkc0luaXRlZEV2ZW50IGFzIGFueVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc0ZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSB0aGlzLnN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRoZXJtZXNUYWtlKDEpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChldmVudDogRmllbGRzSW5pdGVkRXZlbnQpID0+IHtcblxuXHRcdFx0XHRjb25zdCBmaWVsZHMgPSBldmVudC5nZXRGaWVsZHMoKSxcblx0XHRcdFx0XHRjb2x1bW5GaWVsZElkcyA9IHRoaXMuY29udmVydENvbHVtbkZpZWxkSWRzKGZpZWxkcyksXG5cdFx0XHRcdFx0cGFyYW1zID0gdGhpcy5jb252ZXJ0Q29sdW1ucyhjb2x1bW5zLCBmaWVsZHMsIGNvbHVtbkZpZWxkSWRzKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuc2V0Q29sdW1ucyhwYXJhbXMsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cblx0XHRcdFx0Ly8gdGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLnNldEdyb3Vwcyh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKGluaXRDb21tYW5kKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q29uZmlncyhjb25maWdzOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4pOiB7IGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sIGdyb3VwczogQXJyYXk8TXVsdGlDb2x1bW5Db25maWc+IH0ge1xuXG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IFtdLFxuXHRcdFx0Z3JvdXBDb25maWdzOiBBcnJheTxNdWx0aUNvbHVtbkNvbmZpZz4gPSBbXTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlncy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCBjb25maWcgPSBjb25maWdzW2ldO1xuXG5cdFx0XHRpZiAoKGNvbmZpZyBhcyBNdWx0aUNvbHVtbkNvbmZpZykuY29sdW1ucyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGdyb3VwQ29uZmlncy5wdXNoKGNvbmZpZyk7XG5cdFx0XHRcdGNvbHVtbkNvbmZpZ3MucHVzaCguLi4oY29uZmlnIGFzIE11bHRpQ29sdW1uQ29uZmlnKS5jb2x1bW5zKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbkNvbmZpZ3MucHVzaChjb25maWcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRjb2x1bW5zOiBjb2x1bW5Db25maWdzLFxuXHRcdFx0Z3JvdXBzOiBncm91cENvbmZpZ3Ncblx0XHR9O1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRGaWVsZENvbmZpZ3MoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPik6IEFycmF5PEZpZWxkQ29uZmlnPiB7XG5cblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGMpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGZpZWxkOiBjLmZpZWxkIGFzIHN0cmluZyxcblx0XHRcdFx0dHlwZTogYy50eXBlLFxuXHRcdFx0XHRtYXRjaGVyOiBjLm1hdGNoZXIsXG5cdFx0XHRcdHN1bW1hcmllczogYy5zdW1tYXJpZXMsXG5cdFx0XHRcdHNvcnRpbmc6IGMuc29ydGluZ1xuXHRcdFx0fTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydENvbHVtbkZpZWxkSWRzKGZpZWxkczogQXJyYXk8RmllbGQ+KTogQXJyYXk8Q29sdW1uRmllbGRJZD4ge1xuXG5cdFx0aWYgKCFmaWVsZHMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmllbGRzLm1hcCgoZmllbGQ6IEZpZWxkKSA9PiBuZXcgQ29sdW1uRmllbGRJZChmaWVsZC5nZXRJZCgpLmdldElkKCkpKTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydENvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPiwgZmllbGRzOiBBcnJheTxGaWVsZD4sIGNvbHVtbkZpZWxkSWRzOiBBcnJheTxDb2x1bW5GaWVsZElkPik6IEFycmF5PENvbHVtblBhcmFtcz4ge1xuXG5cdFx0aWYgKCFjb2x1bW5zKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRjb25zdCBjb2x1bW5GaWVsZElkID0gY29sdW1uRmllbGRJZHNbaW5kZXhdLFxuXHRcdFx0XHRmaWVsZCA9IGZpZWxkc1tpbmRleF07XG5cblx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkID0gdGhpcy5jb2x1bW5GaWVsZEZhY3RvcnkuY3JlYXRlKFxuXHRcdFx0XHRjb2x1bW5GaWVsZElkLFxuXHRcdFx0XHRmaWVsZC5nZXRBY2Nlc3Nvck1ldGhvZCgpLFxuXHRcdFx0XHRmaWVsZC5nZXREYXRhVHlwZSgpLFxuXHRcdFx0XHRmaWVsZC5nZXRTZWFyY2hBY2Nlc3Nvck1ldGhvZCgpXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IENvbHVtblBhcmFtcyhjb2x1bW4sIGNvbHVtbkZpZWxkKTtcblx0XHR9KTtcblxuXHR9XG5cbn1cbiJdfQ==