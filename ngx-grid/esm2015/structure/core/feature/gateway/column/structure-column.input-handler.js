/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter, take } from 'rxjs/operators';
import { InitFieldsCommand } from '../../../../field/domain/init/init-fields.command';
import { FieldsInitedEvent } from '../../../../field/domain/init/fields-inited.event';
import { ColumnFieldId } from '../../../../../composition/domain/column/field/column-field.id';
import { ColumnParams } from '../../../../../composition/domain/column/set-columns/column.params';
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
        const fieldConfigs = simpleChanges.columns.currentValue;
        /** @type {?} */
        const initCommand = new InitFieldsCommand(this.structureId, (/** @type {?} */ (fieldConfigs)));
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
            const columns = event.fieldConfigs;
            /** @type {?} */
            const params = this.convertColumns(columns, fields, columnFieldIds);
            this.compositionCommandInvoker.setColumns(params, this.compositionId);
        }));
        this.commandDispatcher.dispatch(initCommand);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi5pbnB1dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL2dhdGV3YXkvY29sdW1uL3N0cnVjdHVyZS1jb2x1bW4uaW5wdXQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUV0RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUd0RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFFL0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBTWxHLE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7OztJQUV2QyxZQUE2QixXQUF3QixFQUNqQyxhQUE0QixFQUM1QixpQkFBb0MsRUFDcEMsY0FBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLHlCQUFvRDtRQUwzQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsYUFBNEI7O2NBRTVCLFlBQVksR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVk7O2NBRWpELFdBQVcsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsbUJBQUEsWUFBWSxFQUFzQixDQUFDO1FBRS9GLElBQUksQ0FBQyxjQUFjO2FBQ2pCLE9BQU8sQ0FDUCxtQkFBQSxpQkFBaUIsRUFBTyxDQUN4QjthQUNBLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUM5RyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1A7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUU7O2tCQUVqQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRTs7a0JBQy9CLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDOztrQkFDbkQsT0FBTyxHQUFHLEtBQUssQ0FBQyxZQUFZOztrQkFDNUIsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUM7WUFFOUQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxNQUFvQjtRQUVqRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUMvRSxDQUFDOzs7Ozs7OztJQUVPLGNBQWMsQ0FBQyxPQUE0QixFQUFFLE1BQW9CLEVBQUUsY0FBb0M7UUFFOUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsTUFBb0IsRUFBRSxLQUFhLEVBQUUsRUFBRTs7a0JBRXBELGFBQWEsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDOztrQkFDMUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7O2tCQUVoQixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FDakQsYUFBYSxFQUNiLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUN6QixLQUFLLENBQUMsV0FBVyxFQUFFLEVBQ25CLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxDQUMvQjtZQUVELE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO0lBRUosQ0FBQztDQUVEOzs7Ozs7SUFuRVksa0RBQXlDOzs7OztJQUNsRCxvREFBNkM7Ozs7O0lBQzdDLHdEQUFxRDs7Ozs7SUFDckQscURBQStDOzs7OztJQUMvQyx5REFBdUQ7Ozs7O0lBQ3ZELGdFQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvZG9tYWluL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi1hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvZG9tYWluL2luaXQvZmllbGRzLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bW4tZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtLWZpZWxkLmZhY3RvcnknO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5GaWVsZEZhY3Rvcnk6IENvbHVtbkZpZWxkRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyKSB7XG5cdH1cblxuXHRoYW5kbGUoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRDb25maWdzID0gc2ltcGxlQ2hhbmdlcy5jb2x1bW5zLmN1cnJlbnRWYWx1ZTtcblxuXHRcdGNvbnN0IGluaXRDb21tYW5kID0gbmV3IEluaXRGaWVsZHNDb21tYW5kKHRoaXMuc3RydWN0dXJlSWQsIGZpZWxkQ29uZmlncyBhcyBBcnJheTxGaWVsZENvbmZpZz4pO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdEZpZWxkc0luaXRlZEV2ZW50IGFzIGFueVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSB0aGlzLnN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHR0YWtlKDEpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChldmVudDogRmllbGRzSW5pdGVkRXZlbnQpID0+IHtcblxuXHRcdFx0XHRjb25zdCBmaWVsZHMgPSBldmVudC5nZXRGaWVsZHMoKSxcblx0XHRcdFx0XHRjb2x1bW5GaWVsZElkcyA9IHRoaXMuY29udmVydENvbHVtbkZpZWxkSWRzKGZpZWxkcyksXG5cdFx0XHRcdFx0Y29sdW1ucyA9IGV2ZW50LmZpZWxkQ29uZmlncyxcblx0XHRcdFx0XHRwYXJhbXMgPSB0aGlzLmNvbnZlcnRDb2x1bW5zKGNvbHVtbnMsIGZpZWxkcywgY29sdW1uRmllbGRJZHMpO1xuXG5cdFx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5zZXRDb2x1bW5zKHBhcmFtcywgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChpbml0Q29tbWFuZCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW5GaWVsZElkcyhmaWVsZHM6IEFycmF5PEZpZWxkPik6IEFycmF5PENvbHVtbkZpZWxkSWQ+IHtcblxuXHRcdGlmICghZmllbGRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpZWxkcy5tYXAoKGZpZWxkOiBGaWVsZCkgPT4gbmV3IENvbHVtbkZpZWxkSWQoZmllbGQuZ2V0SWQoKS5nZXRJZCgpKSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sIGZpZWxkczogQXJyYXk8RmllbGQ+LCBjb2x1bW5GaWVsZElkczogQXJyYXk8Q29sdW1uRmllbGRJZD4pOiBBcnJheTxDb2x1bW5QYXJhbXM+IHtcblxuXHRcdGlmICghY29sdW1ucykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcsIGluZGV4OiBudW1iZXIpID0+IHtcblxuXHRcdFx0Y29uc3QgY29sdW1uRmllbGRJZCA9IGNvbHVtbkZpZWxkSWRzW2luZGV4XSxcblx0XHRcdFx0ZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuXG5cdFx0XHRjb25zdCBjb2x1bW5GaWVsZCA9IHRoaXMuY29sdW1uRmllbGRGYWN0b3J5LmNyZWF0ZShcblx0XHRcdFx0Y29sdW1uRmllbGRJZCxcblx0XHRcdFx0ZmllbGQuZ2V0QWNjZXNzb3JNZXRob2QoKSxcblx0XHRcdFx0ZmllbGQuZ2V0RGF0YVR5cGUoKSxcblx0XHRcdFx0ZmllbGQuZ2V0U2VhcmNoQWNjZXNzb3JNZXRob2QoKVxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIG5ldyBDb2x1bW5QYXJhbXMoY29sdW1uLCBjb2x1bW5GaWVsZCk7XG5cdFx0fSk7XG5cblx0fVxuXG59XG4iXX0=