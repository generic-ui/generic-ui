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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi5pbnB1dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvY29sdW1uL3N0cnVjdHVyZS1jb2x1bW4uaW5wdXQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUUzRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUczRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFFcEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBUXZHLE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7OztJQUV2QyxZQUE2QixXQUF3QixFQUNqQyxhQUE0QixFQUM1QixpQkFBb0MsRUFDcEMsY0FBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLHlCQUFvRDtRQUwzQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBb0M7O2NBRXBDLE1BQU0sR0FBNEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZO1FBRXBGLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Y0FHL0QsRUFBRSxPQUFPLEVBQUUs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SUFFTyxjQUFjLENBQUMsT0FBNEIsRUFBRSxNQUFvQixFQUFFLGNBQW9DO1FBRTlHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsT0FBTyxPQUFPLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQUUsS0FBYSxFQUFFLEVBQUU7O2tCQUVwRCxhQUFhLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQzs7a0JBQzFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDOztrQkFFaEIsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQ2pELGFBQWEsRUFDYixLQUFLLENBQUMsaUJBQWlCLEVBQUUsRUFDekIsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUNuQixLQUFLLENBQUMsdUJBQXVCLEVBQUUsQ0FDL0I7WUFFRCxPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUVKLENBQUM7Q0FFRDs7Ozs7O0lBakhZLGtEQUF5Qzs7Ozs7SUFDbEQsb0RBQTZDOzs7OztJQUM3Qyx3REFBcUQ7Ozs7O0lBQ3JELHFEQUErQzs7Ozs7SUFDL0MseURBQXVEOzs7OztJQUN2RCxnRUFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBJbml0RmllbGRzQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2luaXQvZmllbGRzLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCB7IENvbHVtbkZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW1uLWZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgTXVsdGlDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN0cnVjdHVyZUdhdGV3YXkgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuZ2F0ZXdheSc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkZpZWxkRmFjdG9yeTogQ29sdW1uRmllbGRGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXI6IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIpIHtcblx0fVxuXG5cdGhhbmRsZShjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlR2F0ZXdheT4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnIHwgTXVsdGlDb2x1bW5Db25maWc+ID0gY2hhbmdlcy5jb2x1bW5zLmN1cnJlbnRWYWx1ZTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5zZXRHcm91cHMoY29uZmlnLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXG5cdFx0Ly8gcHJlcGFyZSBtb2RlbFxuXHRcdGNvbnN0IHsgY29sdW1ucywgZ3JvdXBzIH0gPSB0aGlzLmdldENvbmZpZ3MoY2hhbmdlcy5jb2x1bW5zLmN1cnJlbnRWYWx1ZSk7XG5cblx0XHRjb25zdCBmaWVsZENvbmZpZ3MgPSB0aGlzLmdldEZpZWxkQ29uZmlncyhjb2x1bW5zKTtcblxuXHRcdC8vIGNvbnN0IGZpZWxkQ29uZmlncyA9IGNvbHVtbnMgYXMgQXJyYXk8RmllbGRDb25maWc+O1xuXG5cdFx0Y29uc3QgaW5pdENvbW1hbmQgPSBuZXcgSW5pdEZpZWxkc0NvbW1hbmQodGhpcy5zdHJ1Y3R1cmVJZCwgZmllbGRDb25maWdzKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50KFxuXHRcdFx0XHRGaWVsZHNJbml0ZWRFdmVudCBhcyBhbnlcblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gdGhpcy5zdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0dGFrZSgxKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IEZpZWxkc0luaXRlZEV2ZW50KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgZmllbGRzID0gZXZlbnQuZ2V0RmllbGRzKCksXG5cdFx0XHRcdFx0Y29sdW1uRmllbGRJZHMgPSB0aGlzLmNvbnZlcnRDb2x1bW5GaWVsZElkcyhmaWVsZHMpLFxuXHRcdFx0XHRcdHBhcmFtcyA9IHRoaXMuY29udmVydENvbHVtbnMoY29sdW1ucywgZmllbGRzLCBjb2x1bW5GaWVsZElkcyk7XG5cblx0XHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLnNldENvbHVtbnMocGFyYW1zLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXG5cdFx0XHRcdC8vIHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5zZXRHcm91cHModGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChpbml0Q29tbWFuZCk7XG5cdH1cblxuXHRwcml2YXRlIGdldENvbmZpZ3MoY29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnIHwgTXVsdGlDb2x1bW5Db25maWc+KTogeyBjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCBncm91cHM6IEFycmF5PE11bHRpQ29sdW1uQ29uZmlnPiB9IHtcblxuXHRcdGNvbnN0IGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBbXSxcblx0XHRcdGdyb3VwQ29uZmlnczogQXJyYXk8TXVsdGlDb2x1bW5Db25maWc+ID0gW107XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZ3MubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0Y29uc3QgY29uZmlnID0gY29uZmlnc1tpXTtcblxuXHRcdFx0aWYgKChjb25maWcgYXMgTXVsdGlDb2x1bW5Db25maWcpLmNvbHVtbnMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRncm91cENvbmZpZ3MucHVzaChjb25maWcpO1xuXHRcdFx0XHRjb2x1bW5Db25maWdzLnB1c2goLi4uKGNvbmZpZyBhcyBNdWx0aUNvbHVtbkNvbmZpZykuY29sdW1ucyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb2x1bW5Db25maWdzLnB1c2goY29uZmlnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29sdW1uczogY29sdW1uQ29uZmlncyxcblx0XHRcdGdyb3VwczogZ3JvdXBDb25maWdzXG5cdFx0fTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RmllbGRDb25maWdzKGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4pOiBBcnJheTxGaWVsZENvbmZpZz4ge1xuXG5cdFx0cmV0dXJuIGNvbHVtbnMubWFwKChjKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRmaWVsZDogYy5maWVsZCBhcyBzdHJpbmcsXG5cdFx0XHRcdHR5cGU6IGMudHlwZSxcblx0XHRcdFx0bWF0Y2hlcjogYy5tYXRjaGVyLFxuXHRcdFx0XHRzdW1tYXJpZXM6IGMuc3VtbWFyaWVzLFxuXHRcdFx0XHRzb3J0aW5nOiBjLnNvcnRpbmdcblx0XHRcdH07XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW5GaWVsZElkcyhmaWVsZHM6IEFycmF5PEZpZWxkPik6IEFycmF5PENvbHVtbkZpZWxkSWQ+IHtcblxuXHRcdGlmICghZmllbGRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpZWxkcy5tYXAoKGZpZWxkOiBGaWVsZCkgPT4gbmV3IENvbHVtbkZpZWxkSWQoZmllbGQuZ2V0SWQoKS5nZXRJZCgpKSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sIGZpZWxkczogQXJyYXk8RmllbGQ+LCBjb2x1bW5GaWVsZElkczogQXJyYXk8Q29sdW1uRmllbGRJZD4pOiBBcnJheTxDb2x1bW5QYXJhbXM+IHtcblxuXHRcdGlmICghY29sdW1ucykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcsIGluZGV4OiBudW1iZXIpID0+IHtcblxuXHRcdFx0Y29uc3QgY29sdW1uRmllbGRJZCA9IGNvbHVtbkZpZWxkSWRzW2luZGV4XSxcblx0XHRcdFx0ZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuXG5cdFx0XHRjb25zdCBjb2x1bW5GaWVsZCA9IHRoaXMuY29sdW1uRmllbGRGYWN0b3J5LmNyZWF0ZShcblx0XHRcdFx0Y29sdW1uRmllbGRJZCxcblx0XHRcdFx0ZmllbGQuZ2V0QWNjZXNzb3JNZXRob2QoKSxcblx0XHRcdFx0ZmllbGQuZ2V0RGF0YVR5cGUoKSxcblx0XHRcdFx0ZmllbGQuZ2V0U2VhcmNoQWNjZXNzb3JNZXRob2QoKVxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIG5ldyBDb2x1bW5QYXJhbXMoY29sdW1uLCBjb2x1bW5GaWVsZCk7XG5cdFx0fSk7XG5cblx0fVxuXG59XG4iXX0=