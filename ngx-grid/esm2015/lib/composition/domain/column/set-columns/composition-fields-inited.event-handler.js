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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi1maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFlLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFFMUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUsvQyxNQUFNLE9BQU8sbUNBQW9DLFNBQVEsa0JBQWtCOzs7OztJQUUxRSxZQUFvQixxQkFBNEMsRUFDNUMsa0JBQXNDO1FBQ3pELEtBQUssRUFBRSxDQUFDO1FBRlcsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBRTFELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWtCO1FBRXhCLElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFOzs7a0JBR2pDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFOztrQkFDL0IsY0FBYyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUM7O2tCQUNuRCxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU87O2tCQUN2QixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQztZQUU5RCxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbkU7SUFDRixDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxNQUF3QjtRQUVyRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7Ozs7SUFFTyxjQUFjLENBQUMsT0FBNEIsRUFBRSxNQUF3QixFQUFFLGNBQW9DO1FBRWxILElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsT0FBTyxPQUFPLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQUUsS0FBYSxFQUFFLEVBQUU7O2tCQUVwRCxhQUFhLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQzs7a0JBQzFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDOztrQkFFaEIsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUVsSixPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUVKLENBQUM7OztZQS9DRCxVQUFVOzs7O1lBUkYscUJBQXFCO1lBQ3JCLGtCQUFrQjs7Ozs7OztJQVVkLG9FQUFvRDs7Ozs7SUFDN0QsaUVBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbHVtbkZpZWxkRmFjdG9yeSB9IGZyb20gJy4uL2ZpZWxkL2NvbHVtLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkL2NvbHVtbi1maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkZpZWxkRmFjdG9yeTogQ29sdW1uRmllbGRGYWN0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogRG9tYWluRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIEZpZWxkc0luaXRlZEV2ZW50KSB7XG5cblx0XHRcdC8vIFRPRE8gTW92ZSB0byBkaWZmZXJlbnQgbGF5ZXJcblx0XHRcdGNvbnN0IGZpZWxkcyA9IGV2ZW50LmdldEZpZWxkcygpLFxuXHRcdFx0XHRjb2x1bW5GaWVsZElkcyA9IHRoaXMuY29udmVydENvbHVtbkZpZWxkSWRzKGZpZWxkcyksXG5cdFx0XHRcdGNvbHVtbnMgPSBldmVudC5jb2x1bW5zLFxuXHRcdFx0XHRwYXJhbXMgPSB0aGlzLmNvbnZlcnRDb2x1bW5zKGNvbHVtbnMsIGZpZWxkcywgY29sdW1uRmllbGRJZHMpO1xuXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb2x1bW5zKGV2ZW50LmNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1uRmllbGRJZHMoZmllbGRzOiBBcnJheTxUeXBlRmllbGQ+KTogQXJyYXk8Q29sdW1uRmllbGRJZD4ge1xuXG5cdFx0aWYgKCFmaWVsZHMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmllbGRzLm1hcCgoZmllbGQ6IFR5cGVGaWVsZCkgPT4gbmV3IENvbHVtbkZpZWxkSWQoZmllbGQuZ2V0SWQoKS5nZXRJZCgpKSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sIGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPiwgY29sdW1uRmllbGRJZHM6IEFycmF5PENvbHVtbkZpZWxkSWQ+KTogQXJyYXk8Q29sdW1uUGFyYW1zPiB7XG5cblx0XHRpZiAoIWNvbHVtbnMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkSWQgPSBjb2x1bW5GaWVsZElkc1tpbmRleF0sXG5cdFx0XHRcdGZpZWxkID0gZmllbGRzW2luZGV4XTtcblxuXHRcdFx0Y29uc3QgY29sdW1uRmllbGQgPSB0aGlzLmNvbHVtbkZpZWxkRmFjdG9yeS5jcmVhdGUoY29sdW1uRmllbGRJZCwgZmllbGQuZ2V0QWNjZXNzb3JNZXRob2QoKSwgZmllbGQuZ2V0RGF0YVR5cGUoKSwgZmllbGQuZ2V0U2VhcmNoQWNjZXNzb3JNZXRob2QoKSk7XG5cblx0XHRcdHJldHVybiBuZXcgQ29sdW1uUGFyYW1zKGNvbHVtbiwgY29sdW1uRmllbGQpO1xuXHRcdH0pO1xuXG5cdH1cbn1cbiJdfQ==