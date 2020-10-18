/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { filter, take } from 'rxjs/operators';
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
        var config = simpleChanges.columns.currentValue;
        this.compositionCommandInvoker.setGroups(config, this.compositionId);
        // prepare model
        var _a = this.getConfigs(simpleChanges.columns.currentValue), columns = _a.columns, groups = _a.groups;
        /** @type {?} */
        var fieldConfigs = this.getFieldConfigs(columns);
        // const fieldConfigs = columns as Array<FieldConfig>;
        /** @type {?} */
        var initCommand = new InitFieldsCommand(this.structureId, fieldConfigs);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi5pbnB1dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGV3YXkvY29sdW1uL3N0cnVjdHVyZS1jb2x1bW4uaW5wdXQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFM0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFHM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBRXBHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQU12RztJQUVDLHFDQUE2QixXQUF3QixFQUNqQyxhQUE0QixFQUM1QixpQkFBb0MsRUFDcEMsY0FBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLHlCQUFvRDtRQUwzQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFDeEUsQ0FBQzs7Ozs7SUFFRCw0Q0FBTTs7OztJQUFOLFVBQU8sYUFBNEI7UUFBbkMsaUJBbUNDOztZQWpDTSxNQUFNLEdBQTRDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWTtRQUUxRixJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7O1FBRy9ELElBQUEsd0RBQXlFLEVB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Ozs7OztJQUF0QixVQUF1QixPQUE0QixFQUFFLE1BQW9CLEVBQUUsY0FBb0M7UUFBL0csaUJBcUJDO1FBbkJBLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsT0FBTyxPQUFPLENBQUMsR0FBRzs7Ozs7UUFBQyxVQUFDLE1BQW9CLEVBQUUsS0FBYTs7Z0JBRWhELGFBQWEsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDOztnQkFDMUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7O2dCQUVoQixXQUFXLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FDakQsYUFBYSxFQUNiLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUN6QixLQUFLLENBQUMsV0FBVyxFQUFFLEVBQ25CLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxDQUMvQjtZQUVELE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO0lBRUosQ0FBQztJQUVGLGtDQUFDO0FBQUQsQ0FBQyxBQW5IRCxJQW1IQzs7Ozs7OztJQWpIWSxrREFBeUM7Ozs7O0lBQ2xELG9EQUE2Qzs7Ozs7SUFDN0Msd0RBQXFEOzs7OztJQUNyRCxxREFBK0M7Ozs7O0lBQy9DLHlEQUF1RDs7Ozs7SUFDdkQsZ0VBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciwgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtLWZpZWxkLmZhY3RvcnknO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5GaWVsZEZhY3Rvcnk6IENvbHVtbkZpZWxkRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyKSB7XG5cdH1cblxuXHRoYW5kbGUoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29uZmlnOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4gPSBzaW1wbGVDaGFuZ2VzLmNvbHVtbnMuY3VycmVudFZhbHVlO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLnNldEdyb3Vwcyhjb25maWcsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cblx0XHQvLyBwcmVwYXJlIG1vZGVsXG5cdFx0Y29uc3QgeyBjb2x1bW5zLCBncm91cHMgfSA9IHRoaXMuZ2V0Q29uZmlncyhzaW1wbGVDaGFuZ2VzLmNvbHVtbnMuY3VycmVudFZhbHVlKTtcblxuXHRcdGNvbnN0IGZpZWxkQ29uZmlncyA9IHRoaXMuZ2V0RmllbGRDb25maWdzKGNvbHVtbnMpO1xuXG5cdFx0Ly8gY29uc3QgZmllbGRDb25maWdzID0gY29sdW1ucyBhcyBBcnJheTxGaWVsZENvbmZpZz47XG5cblx0XHRjb25zdCBpbml0Q29tbWFuZCA9IG5ldyBJbml0RmllbGRzQ29tbWFuZCh0aGlzLnN0cnVjdHVyZUlkLCBmaWVsZENvbmZpZ3MpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdEZpZWxkc0luaXRlZEV2ZW50IGFzIGFueVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSB0aGlzLnN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHR0YWtlKDEpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChldmVudDogRmllbGRzSW5pdGVkRXZlbnQpID0+IHtcblxuXHRcdFx0XHRjb25zdCBmaWVsZHMgPSBldmVudC5nZXRGaWVsZHMoKSxcblx0XHRcdFx0XHRjb2x1bW5GaWVsZElkcyA9IHRoaXMuY29udmVydENvbHVtbkZpZWxkSWRzKGZpZWxkcyksXG5cdFx0XHRcdFx0cGFyYW1zID0gdGhpcy5jb252ZXJ0Q29sdW1ucyhjb2x1bW5zLCBmaWVsZHMsIGNvbHVtbkZpZWxkSWRzKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuc2V0Q29sdW1ucyhwYXJhbXMsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cblx0XHRcdFx0Ly8gdGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLnNldEdyb3Vwcyh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKGluaXRDb21tYW5kKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q29uZmlncyhjb25maWdzOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4pOiB7IGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sIGdyb3VwczogQXJyYXk8TXVsdGlDb2x1bW5Db25maWc+IH0ge1xuXG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IFtdLFxuXHRcdFx0Z3JvdXBDb25maWdzOiBBcnJheTxNdWx0aUNvbHVtbkNvbmZpZz4gPSBbXTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlncy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCBjb25maWcgPSBjb25maWdzW2ldO1xuXG5cdFx0XHRpZiAoKGNvbmZpZyBhcyBNdWx0aUNvbHVtbkNvbmZpZykuY29sdW1ucyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGdyb3VwQ29uZmlncy5wdXNoKGNvbmZpZyk7XG5cdFx0XHRcdGNvbHVtbkNvbmZpZ3MucHVzaCguLi4oY29uZmlnIGFzIE11bHRpQ29sdW1uQ29uZmlnKS5jb2x1bW5zKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbkNvbmZpZ3MucHVzaChjb25maWcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRjb2x1bW5zOiBjb2x1bW5Db25maWdzLFxuXHRcdFx0Z3JvdXBzOiBncm91cENvbmZpZ3Ncblx0XHR9O1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRGaWVsZENvbmZpZ3MoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPik6IEFycmF5PEZpZWxkQ29uZmlnPiB7XG5cblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGMpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGZpZWxkOiBjLmZpZWxkIGFzIHN0cmluZyxcblx0XHRcdFx0dHlwZTogYy50eXBlLFxuXHRcdFx0XHRtYXRjaGVyOiBjLm1hdGNoZXIsXG5cdFx0XHRcdHN1bW1hcmllczogYy5zdW1tYXJpZXMsXG5cdFx0XHRcdHNvcnRpbmc6IGMuc29ydGluZ1xuXHRcdFx0fTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydENvbHVtbkZpZWxkSWRzKGZpZWxkczogQXJyYXk8RmllbGQ+KTogQXJyYXk8Q29sdW1uRmllbGRJZD4ge1xuXG5cdFx0aWYgKCFmaWVsZHMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmllbGRzLm1hcCgoZmllbGQ6IEZpZWxkKSA9PiBuZXcgQ29sdW1uRmllbGRJZChmaWVsZC5nZXRJZCgpLmdldElkKCkpKTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydENvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPiwgZmllbGRzOiBBcnJheTxGaWVsZD4sIGNvbHVtbkZpZWxkSWRzOiBBcnJheTxDb2x1bW5GaWVsZElkPik6IEFycmF5PENvbHVtblBhcmFtcz4ge1xuXG5cdFx0aWYgKCFjb2x1bW5zKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRjb25zdCBjb2x1bW5GaWVsZElkID0gY29sdW1uRmllbGRJZHNbaW5kZXhdLFxuXHRcdFx0XHRmaWVsZCA9IGZpZWxkc1tpbmRleF07XG5cblx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkID0gdGhpcy5jb2x1bW5GaWVsZEZhY3RvcnkuY3JlYXRlKFxuXHRcdFx0XHRjb2x1bW5GaWVsZElkLFxuXHRcdFx0XHRmaWVsZC5nZXRBY2Nlc3Nvck1ldGhvZCgpLFxuXHRcdFx0XHRmaWVsZC5nZXREYXRhVHlwZSgpLFxuXHRcdFx0XHRmaWVsZC5nZXRTZWFyY2hBY2Nlc3Nvck1ldGhvZCgpXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IENvbHVtblBhcmFtcyhjb2x1bW4sIGNvbHVtbkZpZWxkKTtcblx0XHR9KTtcblxuXHR9XG5cbn1cbiJdfQ==