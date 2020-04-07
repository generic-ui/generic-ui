/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { SortToggledEvent } from '../../../../structure/domain/structure/sort/toggle/sort-toggled.event';
import { CompositionDispatcher } from '../../composition.dispatcher';
import { ColumnFieldId } from '../field/column-field.id';
import { ChangeSortParams } from './change-sort.params';
import { SortOrderSetEvent } from '../../../../structure/domain/structure/sort/order/sort-order-set.event';
export class CompositionChangeSortStatusEventHandler extends DomainEventHandler {
    /**
     * @param {?} compositionDispatcher
     */
    constructor(compositionDispatcher) {
        super();
        this.compositionDispatcher = compositionDispatcher;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof SortToggledEvent) {
            /** @type {?} */
            const compositionId = event.getCompositionId();
            /** @type {?} */
            const dirs = event.getDirections();
            /** @type {?} */
            let params = dirs.map((/**
             * @param {?} dir
             * @return {?}
             */
            (dir) => {
                /** @type {?} */
                const columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            }));
            this.compositionDispatcher.changeSort(compositionId, params);
        }
        if (event instanceof SortOrderSetEvent) {
            /** @type {?} */
            const compositionId = event.getCompositionId();
            /** @type {?} */
            const dirs = event.getDirections();
            /** @type {?} */
            let params = dirs.map((/**
             * @param {?} dir
             * @return {?}
             */
            (dir) => {
                /** @type {?} */
                const columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            }));
            this.compositionDispatcher.changeSort(compositionId, params);
        }
    }
}
CompositionChangeSortStatusEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionChangeSortStatusEventHandler.ctorParameters = () => [
    { type: CompositionDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusEventHandler.prototype.compositionDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFlLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFFekcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBSTNHLE1BQU0sT0FBTyx1Q0FBd0MsU0FBUSxrQkFBa0I7Ozs7SUFFOUUsWUFBb0IscUJBQTRDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRFcsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUVoRSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFrQjtRQUV4QixJQUFJLEtBQUssWUFBWSxnQkFBZ0IsRUFBRTs7a0JBRWhDLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7O2tCQUM3QyxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRTs7Z0JBRXpCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRzs7OztZQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7O3NCQUU1QixhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFFNUQsT0FBTyxJQUFJLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxFQUFDO1lBRUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJLEtBQUssWUFBWSxpQkFBaUIsRUFBRTs7a0JBRWpDLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7O2tCQUM3QyxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRTs7Z0JBRXpCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRzs7OztZQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7O3NCQUU1QixhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFFNUQsT0FBTyxJQUFJLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxFQUFDO1lBRUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDN0Q7SUFDRixDQUFDOzs7WUF0Q0QsVUFBVTs7OztZQU5GLHFCQUFxQjs7Ozs7OztJQVNqQix3RUFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTb3J0VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc29ydC90b2dnbGUvc29ydC10b2dnbGVkLmV2ZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vZmllbGQvY29sdW1uLWZpZWxkLmlkJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuL2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBTb3J0T3JkZXJTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3NvcnQvb3JkZXIvc29ydC1vcmRlci1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25EaXNwYXRjaGVyOiBDb21wb3NpdGlvbkRpc3BhdGNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBEb21haW5FdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgU29ydFRvZ2dsZWRFdmVudCkge1xuXG5cdFx0XHRjb25zdCBjb21wb3NpdGlvbklkID0gZXZlbnQuZ2V0Q29tcG9zaXRpb25JZCgpLFxuXHRcdFx0XHRkaXJzID0gZXZlbnQuZ2V0RGlyZWN0aW9ucygpO1xuXG5cdFx0XHRsZXQgcGFyYW1zID0gZGlycy5tYXAoKGRpcjogYW55KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgY29sdW1uRmllbGRJZCA9IG5ldyBDb2x1bW5GaWVsZElkKGRpci5maWVsZElkLmdldElkKCkpO1xuXG5cdFx0XHRcdHJldHVybiBuZXcgQ2hhbmdlU29ydFBhcmFtcyhjb2x1bW5GaWVsZElkLCBkaXIuZGlyZWN0aW9uKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5jaGFuZ2VTb3J0KGNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgU29ydE9yZGVyU2V0RXZlbnQpIHtcblxuXHRcdFx0Y29uc3QgY29tcG9zaXRpb25JZCA9IGV2ZW50LmdldENvbXBvc2l0aW9uSWQoKSxcblx0XHRcdFx0ZGlycyA9IGV2ZW50LmdldERpcmVjdGlvbnMoKTtcblxuXHRcdFx0bGV0IHBhcmFtcyA9IGRpcnMubWFwKChkaXI6IGFueSkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkSWQgPSBuZXcgQ29sdW1uRmllbGRJZChkaXIuZmllbGRJZC5nZXRJZCgpKTtcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENoYW5nZVNvcnRQYXJhbXMoY29sdW1uRmllbGRJZCwgZGlyLmRpcmVjdGlvbik7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuY2hhbmdlU29ydChjb21wb3NpdGlvbklkLCBwYXJhbXMpO1xuXHRcdH1cblx0fVxufVxuIl19