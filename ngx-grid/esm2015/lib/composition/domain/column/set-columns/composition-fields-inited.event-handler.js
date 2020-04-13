/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { FieldsInitedEvent } from '../../../../structure/domain/structure/field/init/fields-inited.event';
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
            const columnField = this.columnFieldFactory.create(columnFieldId, field.getAccessorMethod(), field.getDataType(), field.getSearchAccessorMethod());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi1maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFlLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFFMUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0vQyxNQUFNLE9BQU8sbUNBQW9DLFNBQVEsa0JBQWlDOzs7OztJQUV6RixZQUFvQixxQkFBNEMsRUFDNUMsa0JBQXNDO1FBQ3pELEtBQUssRUFBRSxDQUFDO1FBRlcsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBRTFELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWlDO1FBRXZDLElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFOzs7a0JBR2pDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFOztrQkFDL0IsY0FBYyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUM7O2tCQUNuRCxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU87O2tCQUN2QixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQztZQUU5RCxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbkU7SUFDRixDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxNQUF3QjtRQUVyRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7Ozs7SUFFTyxjQUFjLENBQUMsT0FBNEIsRUFBRSxNQUF3QixFQUFFLGNBQW9DO1FBRWxILElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsT0FBTyxPQUFPLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQUUsS0FBYSxFQUFFLEVBQUU7O2tCQUVwRCxhQUFhLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQzs7a0JBQzFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDOztrQkFFaEIsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUVsSixPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUVKLENBQUM7OztZQS9DRCxVQUFVOzs7O1lBVEYscUJBQXFCO1lBQ3JCLGtCQUFrQjs7Ozs7OztJQVdkLG9FQUFvRDs7Ozs7SUFDN0QsaUVBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbHVtbkZpZWxkRmFjdG9yeSB9IGZyb20gJy4uL2ZpZWxkL2NvbHVtLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkL2NvbHVtbi1maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlcjxDb21wb3NpdGlvbklkPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvbkRpc3BhdGNoZXI6IENvbXBvc2l0aW9uRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5GaWVsZEZhY3Rvcnk6IENvbHVtbkZpZWxkRmFjdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBGaWVsZHNJbml0ZWRFdmVudCkge1xuXG5cdFx0XHQvLyBUT0RPIE1vdmUgdG8gZGlmZmVyZW50IGxheWVyXG5cdFx0XHRjb25zdCBmaWVsZHMgPSBldmVudC5nZXRGaWVsZHMoKSxcblx0XHRcdFx0Y29sdW1uRmllbGRJZHMgPSB0aGlzLmNvbnZlcnRDb2x1bW5GaWVsZElkcyhmaWVsZHMpLFxuXHRcdFx0XHRjb2x1bW5zID0gZXZlbnQuY29sdW1ucyxcblx0XHRcdFx0cGFyYW1zID0gdGhpcy5jb252ZXJ0Q29sdW1ucyhjb2x1bW5zLCBmaWVsZHMsIGNvbHVtbkZpZWxkSWRzKTtcblxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1ucyhldmVudC5jb21wb3NpdGlvbklkLCBwYXJhbXMpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydENvbHVtbkZpZWxkSWRzKGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPik6IEFycmF5PENvbHVtbkZpZWxkSWQ+IHtcblxuXHRcdGlmICghZmllbGRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpZWxkcy5tYXAoKGZpZWxkOiBUeXBlRmllbGQpID0+IG5ldyBDb2x1bW5GaWVsZElkKGZpZWxkLmdldElkKCkuZ2V0SWQoKSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCBmaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4sIGNvbHVtbkZpZWxkSWRzOiBBcnJheTxDb2x1bW5GaWVsZElkPik6IEFycmF5PENvbHVtblBhcmFtcz4ge1xuXG5cdFx0aWYgKCFjb2x1bW5zKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRjb25zdCBjb2x1bW5GaWVsZElkID0gY29sdW1uRmllbGRJZHNbaW5kZXhdLFxuXHRcdFx0XHRmaWVsZCA9IGZpZWxkc1tpbmRleF07XG5cblx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkID0gdGhpcy5jb2x1bW5GaWVsZEZhY3RvcnkuY3JlYXRlKGNvbHVtbkZpZWxkSWQsIGZpZWxkLmdldEFjY2Vzc29yTWV0aG9kKCksIGZpZWxkLmdldERhdGFUeXBlKCksIGZpZWxkLmdldFNlYXJjaEFjY2Vzc29yTWV0aG9kKCkpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IENvbHVtblBhcmFtcyhjb2x1bW4sIGNvbHVtbkZpZWxkKTtcblx0XHR9KTtcblxuXHR9XG59XG4iXX0=