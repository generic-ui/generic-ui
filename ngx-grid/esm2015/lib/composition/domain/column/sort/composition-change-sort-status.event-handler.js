/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SortToggledEvent } from '../../../../../structure/sorting/domain/toggle/sort-toggled.event';
import { CompositionDispatcher } from '../../composition.dispatcher';
import { ColumnFieldId } from '../field/column-field.id';
import { ChangeSortParams } from './change-sort.params';
import { SortOrderSetEvent } from '../../../../../structure/sorting/domain/order/sort-order-set.event';
export class CompositionChangeSortStatusEventHandler {
    /**
     * @param {?} compositionDispatcher
     */
    constructor(compositionDispatcher) {
        this.compositionDispatcher = compositionDispatcher;
    }
    /**
     * @return {?}
     */
    forEvents() {
        return [
            SortToggledEvent,
            SortOrderSetEvent
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('SortToggledEvent')) {
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
        if (event.ofMessageType('SortOrderSetEvent')) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFJakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFFckcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBTXZHLE1BQU0sT0FBTyx1Q0FBdUM7Ozs7SUFFbkQsWUFBb0IscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDaEUsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPO1lBQ04sZ0JBQWdCO1lBQ2hCLGlCQUFpQjtTQUNqQixDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBMkM7UUFFakQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7O2tCQUV0QyxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFOztrQkFDN0MsSUFBSSxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUU7O2dCQUV6QixNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFOztzQkFFNUIsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRTVELE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELENBQUMsRUFBQztZQUVGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7O2tCQUV2QyxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFOztrQkFDN0MsSUFBSSxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUU7O2dCQUV6QixNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFOztzQkFFNUIsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRTVELE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELENBQUMsRUFBQztZQUVGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzdEO0lBQ0YsQ0FBQzs7O1lBNUNELFVBQVU7Ozs7WUFSRixxQkFBcUI7Ozs7Ozs7SUFXakIsd0VBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNdWx0aURvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNvcnRUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc29ydGluZy9kb21haW4vdG9nZ2xlL3NvcnQtdG9nZ2xlZC5ldmVudCc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkL2NvbHVtbi1maWVsZC5pZCc7XG5pbXBvcnQgeyBDaGFuZ2VTb3J0UGFyYW1zIH0gZnJvbSAnLi9jaGFuZ2Utc29ydC5wYXJhbXMnO1xuaW1wb3J0IHsgU29ydE9yZGVyU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc29ydGluZy9kb21haW4vb3JkZXIvc29ydC1vcmRlci1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmlkJztcblxuZXhwb3J0IHR5cGUgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnRUeXBlID0gU29ydFRvZ2dsZWRFdmVudCB8IFNvcnRPcmRlclNldEV2ZW50O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgTXVsdGlEb21haW5FdmVudEhhbmRsZXI8Q29tcG9zaXRpb25JZCwgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnRUeXBlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvbkRpc3BhdGNoZXI6IENvbXBvc2l0aW9uRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0Zm9yRXZlbnRzKCk6IEFycmF5PFR5cGU8Q29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnRUeXBlPj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRTb3J0VG9nZ2xlZEV2ZW50LFxuXHRcdFx0U29ydE9yZGVyU2V0RXZlbnRcblx0XHRdO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudFR5cGUpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTb3J0VG9nZ2xlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgY29tcG9zaXRpb25JZCA9IGV2ZW50LmdldENvbXBvc2l0aW9uSWQoKSxcblx0XHRcdFx0ZGlycyA9IGV2ZW50LmdldERpcmVjdGlvbnMoKTtcblxuXHRcdFx0bGV0IHBhcmFtcyA9IGRpcnMubWFwKChkaXI6IGFueSkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkSWQgPSBuZXcgQ29sdW1uRmllbGRJZChkaXIuZmllbGRJZC5nZXRJZCgpKTtcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENoYW5nZVNvcnRQYXJhbXMoY29sdW1uRmllbGRJZCwgZGlyLmRpcmVjdGlvbik7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuY2hhbmdlU29ydChjb21wb3NpdGlvbklkLCBwYXJhbXMpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTb3J0T3JkZXJTZXRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IGNvbXBvc2l0aW9uSWQgPSBldmVudC5nZXRDb21wb3NpdGlvbklkKCksXG5cdFx0XHRcdGRpcnMgPSBldmVudC5nZXREaXJlY3Rpb25zKCk7XG5cblx0XHRcdGxldCBwYXJhbXMgPSBkaXJzLm1hcCgoZGlyOiBhbnkpID0+IHtcblxuXHRcdFx0XHRjb25zdCBjb2x1bW5GaWVsZElkID0gbmV3IENvbHVtbkZpZWxkSWQoZGlyLmZpZWxkSWQuZ2V0SWQoKSk7XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDaGFuZ2VTb3J0UGFyYW1zKGNvbHVtbkZpZWxkSWQsIGRpci5kaXJlY3Rpb24pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLmNoYW5nZVNvcnQoY29tcG9zaXRpb25JZCwgcGFyYW1zKTtcblx0XHR9XG5cdH1cblxuXG59XG4iXX0=