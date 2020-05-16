/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
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
        if (event.ofMessageType('FieldsInitedEvent')) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi1maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFlLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0vQyxNQUFNLE9BQU8sbUNBQW9DLFNBQVEsa0JBQW9EOzs7OztJQUU1RyxZQUE2QixxQkFBNEMsRUFDckQsa0JBQXNDO1FBQ3pELEtBQUssRUFBRSxDQUFDO1FBRm9CLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDckQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUUxRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUF3QjtRQUU5QixJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRTs7O2tCQUd2QyxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRTs7a0JBQy9CLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDOztrQkFDbkQsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPOztrQkFDdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUM7WUFFOUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25FO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsTUFBd0I7UUFFckQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNaLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQ25GLENBQUM7Ozs7Ozs7O0lBRU8sY0FBYyxDQUFDLE9BQTRCLEVBQUUsTUFBd0IsRUFBRSxjQUFvQztRQUVsSCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sT0FBTyxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEtBQWEsRUFBRSxFQUFFOztrQkFFcEQsYUFBYSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7O2tCQUMxQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzs7a0JBRWhCLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFFbEosT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxFQUFDLENBQUM7SUFFSixDQUFDOzs7WUEvQ0QsVUFBVTs7OztZQVRGLHFCQUFxQjtZQUNyQixrQkFBa0I7Ozs7Ozs7SUFXZCxvRUFBNkQ7Ozs7O0lBQ3RFLGlFQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi9maWVsZC9jb2x1bS1maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IENvbHVtbkZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC9jb2x1bW4tZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25GaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXI8Q29tcG9zaXRpb25JZCwgRmllbGRzSW5pdGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkZpZWxkRmFjdG9yeTogQ29sdW1uRmllbGRGYWN0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogRmllbGRzSW5pdGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdGaWVsZHNJbml0ZWRFdmVudCcpKSB7XG5cblx0XHRcdC8vIFRPRE8gTW92ZSB0byBkaWZmZXJlbnQgbGF5ZXJcblx0XHRcdGNvbnN0IGZpZWxkcyA9IGV2ZW50LmdldEZpZWxkcygpLFxuXHRcdFx0XHRjb2x1bW5GaWVsZElkcyA9IHRoaXMuY29udmVydENvbHVtbkZpZWxkSWRzKGZpZWxkcyksXG5cdFx0XHRcdGNvbHVtbnMgPSBldmVudC5jb2x1bW5zLFxuXHRcdFx0XHRwYXJhbXMgPSB0aGlzLmNvbnZlcnRDb2x1bW5zKGNvbHVtbnMsIGZpZWxkcywgY29sdW1uRmllbGRJZHMpO1xuXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb2x1bW5zKGV2ZW50LmNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1uRmllbGRJZHMoZmllbGRzOiBBcnJheTxUeXBlRmllbGQ+KTogQXJyYXk8Q29sdW1uRmllbGRJZD4ge1xuXG5cdFx0aWYgKCFmaWVsZHMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmllbGRzLm1hcCgoZmllbGQ6IFR5cGVGaWVsZCkgPT4gbmV3IENvbHVtbkZpZWxkSWQoZmllbGQuZ2V0SWQoKS5nZXRJZCgpKSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sIGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPiwgY29sdW1uRmllbGRJZHM6IEFycmF5PENvbHVtbkZpZWxkSWQ+KTogQXJyYXk8Q29sdW1uUGFyYW1zPiB7XG5cblx0XHRpZiAoIWNvbHVtbnMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkSWQgPSBjb2x1bW5GaWVsZElkc1tpbmRleF0sXG5cdFx0XHRcdGZpZWxkID0gZmllbGRzW2luZGV4XTtcblxuXHRcdFx0Y29uc3QgY29sdW1uRmllbGQgPSB0aGlzLmNvbHVtbkZpZWxkRmFjdG9yeS5jcmVhdGUoY29sdW1uRmllbGRJZCwgZmllbGQuZ2V0QWNjZXNzb3JNZXRob2QoKSwgZmllbGQuZ2V0RGF0YVR5cGUoKSwgZmllbGQuZ2V0U2VhcmNoQWNjZXNzb3JNZXRob2QoKSk7XG5cblx0XHRcdHJldHVybiBuZXcgQ29sdW1uUGFyYW1zKGNvbHVtbiwgY29sdW1uRmllbGQpO1xuXHRcdH0pO1xuXG5cdH1cbn1cbiJdfQ==