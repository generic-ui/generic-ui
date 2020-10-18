/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter, take } from 'rxjs/operators';
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
     * @param {?} simpleChanges
     * @return {?}
     */
    handle(simpleChanges) {
        /** @type {?} */
        const config = simpleChanges.columns.currentValue;
        this.compositionCommandInvoker.setGroups(config, this.compositionId);
        // prepare model
        const { columns, groups } = this.getConfigs(simpleChanges.columns.currentValue);
        /** @type {?} */
        const fieldConfigs = this.getFieldConfigs(columns);
        // const fieldConfigs = columns as Array<FieldConfig>;
        /** @type {?} */
        const initCommand = new InitFieldsCommand(this.structureId, fieldConfigs);
        this.domainEventBus
            .ofEvent((/** @type {?} */ (FieldsInitedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === this.structureId.toString())), take(1))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi5pbnB1dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGV3YXkvY29sdW1uL3N0cnVjdHVyZS1jb2x1bW4uaW5wdXQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUUzRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUczRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFFcEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBTXZHLE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7OztJQUV2QyxZQUE2QixXQUF3QixFQUNqQyxhQUE0QixFQUM1QixpQkFBb0MsRUFDcEMsY0FBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLHlCQUFvRDtRQUwzQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsYUFBNEI7O2NBRTVCLE1BQU0sR0FBNEMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZO1FBRTFGLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Y0FHL0QsRUFBRSxPQUFPLEVB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Ozs7SUFFTyxjQUFjLENBQUMsT0FBNEIsRUFBRSxNQUFvQixFQUFFLGNBQW9DO1FBRTlHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsT0FBTyxPQUFPLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQUUsS0FBYSxFQUFFLEVBQUU7O2tCQUVwRCxhQUFhLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQzs7a0JBQzFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDOztrQkFFaEIsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQ2pELGFBQWEsRUFDYixLQUFLLENBQUMsaUJBQWlCLEVBQUUsRUFDekIsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUNuQixLQUFLLENBQUMsdUJBQXVCLEVBQUUsQ0FDL0I7WUFFRCxPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUVKLENBQUM7Q0FFRDs7Ozs7O0lBakhZLGtEQUF5Qzs7Ozs7SUFDbEQsb0RBQTZDOzs7OztJQUM3Qyx3REFBcUQ7Ozs7O0lBQ3JELHFEQUErQzs7Ozs7SUFDL0MseURBQXVEOzs7OztJQUN2RCxnRUFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBJbml0RmllbGRzQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2luaXQvZmllbGRzLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCB7IENvbHVtbkZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW1uLWZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgTXVsdGlDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkZpZWxkRmFjdG9yeTogQ29sdW1uRmllbGRGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXI6IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIpIHtcblx0fVxuXG5cdGhhbmRsZShzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb25maWc6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPiA9IHNpbXBsZUNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWU7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuc2V0R3JvdXBzKGNvbmZpZywgdGhpcy5jb21wb3NpdGlvbklkKTtcblxuXHRcdC8vIHByZXBhcmUgbW9kZWxcblx0XHRjb25zdCB7IGNvbHVtbnMsIGdyb3VwcyB9ID0gdGhpcy5nZXRDb25maWdzKHNpbXBsZUNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWUpO1xuXG5cdFx0Y29uc3QgZmllbGRDb25maWdzID0gdGhpcy5nZXRGaWVsZENvbmZpZ3MoY29sdW1ucyk7XG5cblx0XHQvLyBjb25zdCBmaWVsZENvbmZpZ3MgPSBjb2x1bW5zIGFzIEFycmF5PEZpZWxkQ29uZmlnPjtcblxuXHRcdGNvbnN0IGluaXRDb21tYW5kID0gbmV3IEluaXRGaWVsZHNDb21tYW5kKHRoaXMuc3RydWN0dXJlSWQsIGZpZWxkQ29uZmlncyk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0RmllbGRzSW5pdGVkRXZlbnQgYXMgYW55XG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IHRoaXMuc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdHRha2UoMSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBGaWVsZHNJbml0ZWRFdmVudCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGZpZWxkcyA9IGV2ZW50LmdldEZpZWxkcygpLFxuXHRcdFx0XHRcdGNvbHVtbkZpZWxkSWRzID0gdGhpcy5jb252ZXJ0Q29sdW1uRmllbGRJZHMoZmllbGRzKSxcblx0XHRcdFx0XHRwYXJhbXMgPSB0aGlzLmNvbnZlcnRDb2x1bW5zKGNvbHVtbnMsIGZpZWxkcywgY29sdW1uRmllbGRJZHMpO1xuXG5cdFx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5zZXRDb2x1bW5zKHBhcmFtcywgdGhpcy5jb21wb3NpdGlvbklkKTtcblxuXHRcdFx0XHQvLyB0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuc2V0R3JvdXBzKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goaW5pdENvbW1hbmQpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRDb25maWdzKGNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPik6IHsgY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPiwgZ3JvdXBzOiBBcnJheTxNdWx0aUNvbHVtbkNvbmZpZz4gfSB7XG5cblx0XHRjb25zdCBjb2x1bW5Db25maWdzOiBBcnJheTxDb2x1bW5Db25maWc+ID0gW10sXG5cdFx0XHRncm91cENvbmZpZ3M6IEFycmF5PE11bHRpQ29sdW1uQ29uZmlnPiA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWdzLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IGNvbmZpZyA9IGNvbmZpZ3NbaV07XG5cblx0XHRcdGlmICgoY29uZmlnIGFzIE11bHRpQ29sdW1uQ29uZmlnKS5jb2x1bW5zICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Z3JvdXBDb25maWdzLnB1c2goY29uZmlnKTtcblx0XHRcdFx0Y29sdW1uQ29uZmlncy5wdXNoKC4uLihjb25maWcgYXMgTXVsdGlDb2x1bW5Db25maWcpLmNvbHVtbnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29sdW1uQ29uZmlncy5wdXNoKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbHVtbnM6IGNvbHVtbkNvbmZpZ3MsXG5cdFx0XHRncm91cHM6IGdyb3VwQ29uZmlnc1xuXHRcdH07XG5cdH1cblxuXHRwcml2YXRlIGdldEZpZWxkQ29uZmlncyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+KTogQXJyYXk8RmllbGRDb25maWc+IHtcblxuXHRcdHJldHVybiBjb2x1bW5zLm1hcCgoYykgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZmllbGQ6IGMuZmllbGQgYXMgc3RyaW5nLFxuXHRcdFx0XHR0eXBlOiBjLnR5cGUsXG5cdFx0XHRcdG1hdGNoZXI6IGMubWF0Y2hlcixcblx0XHRcdFx0c3VtbWFyaWVzOiBjLnN1bW1hcmllcyxcblx0XHRcdFx0c29ydGluZzogYy5zb3J0aW5nXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1uRmllbGRJZHMoZmllbGRzOiBBcnJheTxGaWVsZD4pOiBBcnJheTxDb2x1bW5GaWVsZElkPiB7XG5cblx0XHRpZiAoIWZpZWxkcykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZDogRmllbGQpID0+IG5ldyBDb2x1bW5GaWVsZElkKGZpZWxkLmdldElkKCkuZ2V0SWQoKSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCBmaWVsZHM6IEFycmF5PEZpZWxkPiwgY29sdW1uRmllbGRJZHM6IEFycmF5PENvbHVtbkZpZWxkSWQ+KTogQXJyYXk8Q29sdW1uUGFyYW1zPiB7XG5cblx0XHRpZiAoIWNvbHVtbnMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkSWQgPSBjb2x1bW5GaWVsZElkc1tpbmRleF0sXG5cdFx0XHRcdGZpZWxkID0gZmllbGRzW2luZGV4XTtcblxuXHRcdFx0Y29uc3QgY29sdW1uRmllbGQgPSB0aGlzLmNvbHVtbkZpZWxkRmFjdG9yeS5jcmVhdGUoXG5cdFx0XHRcdGNvbHVtbkZpZWxkSWQsXG5cdFx0XHRcdGZpZWxkLmdldEFjY2Vzc29yTWV0aG9kKCksXG5cdFx0XHRcdGZpZWxkLmdldERhdGFUeXBlKCksXG5cdFx0XHRcdGZpZWxkLmdldFNlYXJjaEFjY2Vzc29yTWV0aG9kKClcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiBuZXcgQ29sdW1uUGFyYW1zKGNvbHVtbiwgY29sdW1uRmllbGQpO1xuXHRcdH0pO1xuXG5cdH1cblxufVxuIl19