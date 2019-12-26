/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { FieldsInitedEvent } from '../../../../structure/command/field/init/fields-inited.event';
import { CompositionDispatcher } from '../../composition.dispatcher';
import { ColumnFieldFactory } from '../field/colum-field.factory';
import { ColumnFieldId } from '../field/column-field.id';
import { ColumnParams } from './column.params';
export class CompositionFieldsInitedEventHandler extends DomainEventHandler {
    /**
     * @param {?} compositionDispatcher
     * @param {?} columnFieldFactory
     */
    constructor(compositionDispatcher, columnFieldFactory) {
        super();
        this.compositionDispatcher = compositionDispatcher;
        this.columnFieldFactory = columnFieldFactory;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof FieldsInitedEvent) {
            // TODO Move to different layer
            /** @type {?} */
            const fields = event.getFields();
            /** @type {?} */
            const columnFieldIds = this.convertColumnFieldIds(fields);
            /** @type {?} */
            const columns = event.columns;
            /** @type {?} */
            const params = this.convertColumns(columns, fields, columnFieldIds);
            this.compositionDispatcher.setColumns(event.compositionId, params);
        }
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
            const columnField = this.columnFieldFactory.create(columnFieldId, field.getAccessorMethod(), field.getDataType());
            return new ColumnParams(column, columnField);
        }));
    }
}
CompositionFieldsInitedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionFieldsInitedEventHandler.ctorParameters = () => [
    { type: CompositionDispatcher },
    { type: ColumnFieldFactory }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi1maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFlLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFHakcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUkvQyxNQUFNLE9BQU8sbUNBQW9DLFNBQVEsa0JBQWtCOzs7OztJQUUxRSxZQUFvQixxQkFBNEMsRUFDNUMsa0JBQXNDO1FBQ3pELEtBQUssRUFBRSxDQUFDO1FBRlcsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBRTFELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWtCO1FBRXhCLElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFOzs7a0JBR2pDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFOztrQkFDL0IsY0FBYyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUM7O2tCQUNuRCxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU87O2tCQUN2QixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQztZQUU5RCxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbkU7SUFDRixDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxNQUFvQjtRQUVqRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUMvRSxDQUFDOzs7Ozs7OztJQUVPLGNBQWMsQ0FBQyxPQUE0QixFQUFFLE1BQW9CLEVBQUUsY0FBb0M7UUFFOUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsTUFBb0IsRUFBRSxLQUFhLEVBQUUsRUFBRTs7a0JBRXBELGFBQWEsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDOztrQkFDMUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7O2tCQUVoQixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRWpILE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO0lBRUosQ0FBQzs7O1lBL0NELFVBQVU7Ozs7WUFQRixxQkFBcUI7WUFDckIsa0JBQWtCOzs7Ozs7O0lBU2Qsb0VBQW9EOzs7OztJQUM3RCxpRUFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2luaXQvZmllbGRzLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vZmllbGQvY29sdW1uLWZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4ucGFyYW1zJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25GaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25EaXNwYXRjaGVyOiBDb21wb3NpdGlvbkRpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRmllbGRGYWN0b3J5OiBDb2x1bW5GaWVsZEZhY3RvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBEb21haW5FdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgRmllbGRzSW5pdGVkRXZlbnQpIHtcblxuXHRcdFx0Ly8gVE9ETyBNb3ZlIHRvIGRpZmZlcmVudCBsYXllclxuXHRcdFx0Y29uc3QgZmllbGRzID0gZXZlbnQuZ2V0RmllbGRzKCksXG5cdFx0XHRcdGNvbHVtbkZpZWxkSWRzID0gdGhpcy5jb252ZXJ0Q29sdW1uRmllbGRJZHMoZmllbGRzKSxcblx0XHRcdFx0Y29sdW1ucyA9IGV2ZW50LmNvbHVtbnMsXG5cdFx0XHRcdHBhcmFtcyA9IHRoaXMuY29udmVydENvbHVtbnMoY29sdW1ucywgZmllbGRzLCBjb2x1bW5GaWVsZElkcyk7XG5cblx0XHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbHVtbnMoZXZlbnQuY29tcG9zaXRpb25JZCwgcGFyYW1zKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW5GaWVsZElkcyhmaWVsZHM6IEFycmF5PEZpZWxkPik6IEFycmF5PENvbHVtbkZpZWxkSWQ+IHtcblxuXHRcdGlmICghZmllbGRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpZWxkcy5tYXAoKGZpZWxkOiBGaWVsZCkgPT4gbmV3IENvbHVtbkZpZWxkSWQoZmllbGQuZ2V0SWQoKS5nZXRJZCgpKSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sIGZpZWxkczogQXJyYXk8RmllbGQ+LCBjb2x1bW5GaWVsZElkczogQXJyYXk8Q29sdW1uRmllbGRJZD4pOiBBcnJheTxDb2x1bW5QYXJhbXM+IHtcblxuXHRcdGlmICghY29sdW1ucykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcsIGluZGV4OiBudW1iZXIpID0+IHtcblxuXHRcdFx0Y29uc3QgY29sdW1uRmllbGRJZCA9IGNvbHVtbkZpZWxkSWRzW2luZGV4XSxcblx0XHRcdFx0ZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuXG5cdFx0XHRjb25zdCBjb2x1bW5GaWVsZCA9IHRoaXMuY29sdW1uRmllbGRGYWN0b3J5LmNyZWF0ZShjb2x1bW5GaWVsZElkLCBmaWVsZC5nZXRBY2Nlc3Nvck1ldGhvZCgpLCBmaWVsZC5nZXREYXRhVHlwZSgpKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBDb2x1bW5QYXJhbXMoY29sdW1uLCBjb2x1bW5GaWVsZCk7XG5cdFx0fSk7XG5cblx0fVxuXG5cdC8vIGhhbmRsZShldmVudDogRG9tYWluRXZlbnQpOiB2b2lkIHtcblx0Ly9cblx0Ly8gXHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBGaWVsZHNJbml0ZWRFdmVudCkge1xuXHQvL1xuXHQvLyBcdFx0Ly8gVE9ETyBNb3ZlIHRvIGRpZmZlcmVudCBsYXllclxuXHQvLyBcdFx0bGV0IGZpZWxkcyA9IGV2ZW50LmdldEZpZWxkcygpO1xuXHQvL1xuXHQvLyBcdFx0aWYgKCEhZmllbGRzKSB7XG5cdC8vIFx0XHRcdGZpZWxkcyA9IFtdO1xuXHQvLyBcdFx0fVxuXHQvLyBcdFx0Y29uc3QgY29sdW1uRmllbGRJZHMgPSBmaWVsZHMubWFwKChmaWVsZDogRmllbGQpID0+IG5ldyBDb2x1bW5GaWVsZElkKGZpZWxkLmdldElkKCkuZ2V0SWQoKSkpO1xuXHQvL1xuXHQvLyBcdFx0bGV0IGNvbHVtbnMgPSBldmVudC5jb2x1bW5zIHx8IFtdO1xuXHQvL1xuXHQvLyBcdFx0Y29uc3QgcGFyYW1zID0gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdC8vIFx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkID0gbmV3IENvbHVtbkZpZWxkKGNvbHVtbkZpZWxkSWRzW2luZGV4XSwgZmllbGRzW2luZGV4XS5nZXRBY2Nlc3Nvck1ldGhvZCgpKTtcblx0Ly9cblx0Ly8gXHRcdFx0cmV0dXJuIG5ldyBDb2x1bW5QYXJhbXMoY29sdW1uLCBjb2x1bW5GaWVsZCk7XG5cdC8vIFx0XHR9KTtcblx0Ly9cblx0Ly8gXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbHVtbnMoZXZlbnQuY29tcG9zaXRpb25JZCwgcGFyYW1zKTtcblx0Ly8gXHR9XG5cdC8vIH1cblxufVxuIl19