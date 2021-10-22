/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { hermesFilter, hermesTake } from '@generic-ui/hermes';
import { InitFieldsCommand } from '../../../../field/core/domain/init/init-fields.command';
import { FieldsInitedEvent } from '../../../../field/core/domain/init/fields-inited.event';
import { ColumnFieldId } from '../../../../../composition/core/domain/column/field/column-field.id';
import { ColumnParams } from '../../../../../composition/core/domain/column/set-columns/column.params';
export class StructureColumnInputHandler {
    /**
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} commandDispatcher
     * @param {?} domainEventBus
     * @param {?} columnFieldFactory
     * @param {?} compositionCommandInvoker
     */
    constructor(structureId, compositionId, commandDispatcher, domainEventBus, columnFieldFactory, compositionCommandInvoker) {
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
    handle(changes) {
        /** @type {?} */
        const config = changes.columns.currentValue;
        this.compositionCommandInvoker.setGroups(config, this.compositionId);
        // prepare model
        const { columns, groups } = this.getConfigs(changes.columns.currentValue);
        /** @type {?} */
        const fieldConfigs = this.getFieldConfigs(columns);
        // const fieldConfigs = columns as Array<FieldConfig>;
        /** @type {?} */
        const initCommand = new InitFieldsCommand(this.structureId, fieldConfigs);
        this.domainEventBus
            .ofEvent((/** @type {?} */ (FieldsInitedEvent)))
            .pipe(hermesFilter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === this.structureId.toString())), hermesTake(1))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const fields = event.getFields();
            /** @type {?} */
            const columnFieldIds = this.convertColumnFieldIds(fields);
            /** @type {?} */
            const params = this.convertColumns(columns, fields, columnFieldIds);
            this.compositionCommandInvoker.setColumns(params, this.compositionId);
            // this.compositionCommandInvoker.setGroups(this.compositionId);
        }));
        this.commandDispatcher.dispatch(initCommand);
    }
    /**
     * @private
     * @param {?} configs
     * @return {?}
     */
    getConfigs(configs) {
        /** @type {?} */
        const columnConfigs = [];
        /** @type {?} */
        const groupConfigs = [];
        for (let i = 0; i < configs.length; i += 1) {
            /** @type {?} */
            const config = configs[i];
            if (((/** @type {?} */ (config))).columns !== undefined) {
                groupConfigs.push(config);
                columnConfigs.push(...((/** @type {?} */ (config))).columns);
            }
            else {
                columnConfigs.push(config);
            }
        }
        return {
            columns: columnConfigs,
            groups: groupConfigs
        };
    }
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    getFieldConfigs(columns) {
        return columns.map((/**
         * @param {?} c
         * @return {?}
         */
        (c) => {
            return {
                field: (/** @type {?} */ (c.field)),
                type: c.type,
                matcher: c.matcher,
                summaries: c.summaries,
                sorting: c.sorting
            };
        }));
    }
    /**
     * @private
     * @param {?} fields
     * @return {?}
     */
    convertColumnFieldIds(fields) {
        if (!fields) {
            return [];
        }
        return fields.map((/**
         * @param {?} field
         * @return {?}
         */
        (field) => new ColumnFieldId(field.getId().getId())));
    }
    /**
     * @private
     * @param {?} columns
     * @param {?} fields
     * @param {?} columnFieldIds
     * @return {?}
     */
    convertColumns(columns, fields, columnFieldIds) {
        if (!columns) {
            return [];
        }
        return columns.map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => {
            /** @type {?} */
            const columnFieldId = columnFieldIds[index];
            /** @type {?} */
            const field = fields[index];
            /** @type {?} */
            const columnField = this.columnFieldFactory.create(columnFieldId, field.getAccessorMethod(), field.getDataType(), field.getSearchAccessorMethod());
            return new ColumnParams(column, columnField);
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi5pbnB1dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvY29sdW1uL3N0cnVjdHVyZS1jb2x1bW4uaW5wdXQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFrRCxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFM0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFHM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBRXBHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQVF2RyxNQUFNLE9BQU8sMkJBQTJCOzs7Ozs7Ozs7SUFFdkMsWUFBNkIsV0FBd0IsRUFDakMsYUFBNEIsRUFDNUIsaUJBQW9DLEVBQ3BDLGNBQThCLEVBQzlCLGtCQUFzQyxFQUN0Qyx5QkFBb0Q7UUFMM0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0Qyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQ3hFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQW9DOztjQUVwQyxNQUFNLEdBQTRDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWTtRQUVwRixJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7O2NBRy9ELEVBQUUsT0FBTyxFQUFF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O0lBRU8sY0FBYyxDQUFDLE9BQTRCLEVBQUUsTUFBb0IsRUFBRSxjQUFvQztRQUU5RyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sT0FBTyxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEtBQWEsRUFBRSxFQUFFOztrQkFFcEQsYUFBYSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7O2tCQUMxQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzs7a0JBRWhCLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUNqRCxhQUFhLEVBQ2IsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEVBQ3pCLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFDbkIsS0FBSyxDQUFDLHVCQUF1QixFQUFFLENBQy9CO1lBRUQsT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxFQUFDLENBQUM7SUFFSixDQUFDO0NBRUQ7Ozs7OztJQWpIWSxrREFBeUM7Ozs7O0lBQ2xELG9EQUE2Qzs7Ozs7SUFDN0Msd0RBQXFEOzs7OztJQUNyRCxxREFBK0M7Ozs7O0lBQy9DLHlEQUF1RDs7Ozs7SUFDdkQsZ0VBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cywgaGVybWVzRmlsdGVyLCBoZXJtZXNUYWtlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVHYXRld2F5IH0gZnJvbSAnLi4vc3RydWN0dXJlLmdhdGV3YXknO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5GaWVsZEZhY3Rvcnk6IENvbHVtbkZpZWxkRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyKSB7XG5cdH1cblxuXHRoYW5kbGUoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZUdhdGV3YXk+KTogdm9pZCB7XG5cblx0XHRjb25zdCBjb25maWc6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPiA9IGNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWU7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuc2V0R3JvdXBzKGNvbmZpZywgdGhpcy5jb21wb3NpdGlvbklkKTtcblxuXHRcdC8vIHByZXBhcmUgbW9kZWxcblx0XHRjb25zdCB7IGNvbHVtbnMsIGdyb3VwcyB9ID0gdGhpcy5nZXRDb25maWdzKGNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWUpO1xuXG5cdFx0Y29uc3QgZmllbGRDb25maWdzID0gdGhpcy5nZXRGaWVsZENvbmZpZ3MoY29sdW1ucyk7XG5cblx0XHQvLyBjb25zdCBmaWVsZENvbmZpZ3MgPSBjb2x1bW5zIGFzIEFycmF5PEZpZWxkQ29uZmlnPjtcblxuXHRcdGNvbnN0IGluaXRDb21tYW5kID0gbmV3IEluaXRGaWVsZHNDb21tYW5kKHRoaXMuc3RydWN0dXJlSWQsIGZpZWxkQ29uZmlncyk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0RmllbGRzSW5pdGVkRXZlbnQgYXMgYW55XG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IHRoaXMuc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdGhlcm1lc1Rha2UoMSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBGaWVsZHNJbml0ZWRFdmVudCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGZpZWxkcyA9IGV2ZW50LmdldEZpZWxkcygpLFxuXHRcdFx0XHRcdGNvbHVtbkZpZWxkSWRzID0gdGhpcy5jb252ZXJ0Q29sdW1uRmllbGRJZHMoZmllbGRzKSxcblx0XHRcdFx0XHRwYXJhbXMgPSB0aGlzLmNvbnZlcnRDb2x1bW5zKGNvbHVtbnMsIGZpZWxkcywgY29sdW1uRmllbGRJZHMpO1xuXG5cdFx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5zZXRDb2x1bW5zKHBhcmFtcywgdGhpcy5jb21wb3NpdGlvbklkKTtcblxuXHRcdFx0XHQvLyB0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuc2V0R3JvdXBzKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goaW5pdENvbW1hbmQpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRDb25maWdzKGNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPik6IHsgY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPiwgZ3JvdXBzOiBBcnJheTxNdWx0aUNvbHVtbkNvbmZpZz4gfSB7XG5cblx0XHRjb25zdCBjb2x1bW5Db25maWdzOiBBcnJheTxDb2x1bW5Db25maWc+ID0gW10sXG5cdFx0XHRncm91cENvbmZpZ3M6IEFycmF5PE11bHRpQ29sdW1uQ29uZmlnPiA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWdzLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IGNvbmZpZyA9IGNvbmZpZ3NbaV07XG5cblx0XHRcdGlmICgoY29uZmlnIGFzIE11bHRpQ29sdW1uQ29uZmlnKS5jb2x1bW5zICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Z3JvdXBDb25maWdzLnB1c2goY29uZmlnKTtcblx0XHRcdFx0Y29sdW1uQ29uZmlncy5wdXNoKC4uLihjb25maWcgYXMgTXVsdGlDb2x1bW5Db25maWcpLmNvbHVtbnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29sdW1uQ29uZmlncy5wdXNoKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbHVtbnM6IGNvbHVtbkNvbmZpZ3MsXG5cdFx0XHRncm91cHM6IGdyb3VwQ29uZmlnc1xuXHRcdH07XG5cdH1cblxuXHRwcml2YXRlIGdldEZpZWxkQ29uZmlncyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+KTogQXJyYXk8RmllbGRDb25maWc+IHtcblxuXHRcdHJldHVybiBjb2x1bW5zLm1hcCgoYykgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZmllbGQ6IGMuZmllbGQgYXMgc3RyaW5nLFxuXHRcdFx0XHR0eXBlOiBjLnR5cGUsXG5cdFx0XHRcdG1hdGNoZXI6IGMubWF0Y2hlcixcblx0XHRcdFx0c3VtbWFyaWVzOiBjLnN1bW1hcmllcyxcblx0XHRcdFx0c29ydGluZzogYy5zb3J0aW5nXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1uRmllbGRJZHMoZmllbGRzOiBBcnJheTxGaWVsZD4pOiBBcnJheTxDb2x1bW5GaWVsZElkPiB7XG5cblx0XHRpZiAoIWZpZWxkcykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZDogRmllbGQpID0+IG5ldyBDb2x1bW5GaWVsZElkKGZpZWxkLmdldElkKCkuZ2V0SWQoKSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCBmaWVsZHM6IEFycmF5PEZpZWxkPiwgY29sdW1uRmllbGRJZHM6IEFycmF5PENvbHVtbkZpZWxkSWQ+KTogQXJyYXk8Q29sdW1uUGFyYW1zPiB7XG5cblx0XHRpZiAoIWNvbHVtbnMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkSWQgPSBjb2x1bW5GaWVsZElkc1tpbmRleF0sXG5cdFx0XHRcdGZpZWxkID0gZmllbGRzW2luZGV4XTtcblxuXHRcdFx0Y29uc3QgY29sdW1uRmllbGQgPSB0aGlzLmNvbHVtbkZpZWxkRmFjdG9yeS5jcmVhdGUoXG5cdFx0XHRcdGNvbHVtbkZpZWxkSWQsXG5cdFx0XHRcdGZpZWxkLmdldEFjY2Vzc29yTWV0aG9kKCksXG5cdFx0XHRcdGZpZWxkLmdldERhdGFUeXBlKCksXG5cdFx0XHRcdGZpZWxkLmdldFNlYXJjaEFjY2Vzc29yTWV0aG9kKClcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiBuZXcgQ29sdW1uUGFyYW1zKGNvbHVtbiwgY29sdW1uRmllbGQpO1xuXHRcdH0pO1xuXG5cdH1cblxufVxuIl19