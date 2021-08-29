/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SortToggledEvent } from '../../../../../structure/sorting/core/domain/toggle/sort-toggled.event';
import { CompositionDispatcher } from '../../composition.dispatcher';
import { ColumnFieldId } from '../field/column-field.id';
import { ChangeSortParams } from './change-sort.params';
import { SortOrderSetEvent } from '../../../../../structure/sorting/core/domain/order/sort-order-set.event';
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
            const params = dirs.map((/**
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
            const params = dirs.map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBRTFHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQU01RyxNQUFNLE9BQU8sdUNBQXVDOzs7O0lBRW5ELFlBQW9CLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ2hFLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTztZQUNOLGdCQUFnQjtZQUNoQixpQkFBaUI7U0FDakIsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQTJDO1FBRWpELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFOztrQkFFdEMsYUFBYSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTs7a0JBQzdDLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFOztrQkFFdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTs7c0JBRTlCLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUU1RCxPQUFPLElBQUksZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzRCxDQUFDLEVBQUM7WUFFRixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFOztrQkFFdkMsYUFBYSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTs7a0JBQzdDLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFOztrQkFFdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTs7c0JBRTlCLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUU1RCxPQUFPLElBQUksZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzRCxDQUFDLEVBQUM7WUFFRixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM3RDtJQUNGLENBQUM7OztZQTVDRCxVQUFVOzs7O1lBUkYscUJBQXFCOzs7Ozs7O0lBV2pCLHdFQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRUeXBlLCBNdWx0aURvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNvcnRUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2RvbWFpbi90b2dnbGUvc29ydC10b2dnbGVkLmV2ZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vZmllbGQvY29sdW1uLWZpZWxkLmlkJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuL2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBTb3J0T3JkZXJTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3J0aW5nL2NvcmUvZG9tYWluL29yZGVyL3NvcnQtb3JkZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5pZCc7XG5cbmV4cG9ydCB0eXBlIENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50VHlwZSA9IFNvcnRUb2dnbGVkRXZlbnQgfCBTb3J0T3JkZXJTZXRFdmVudDtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50SGFuZGxlciBpbXBsZW1lbnRzIE11bHRpRG9tYWluRXZlbnRIYW5kbGVyPENvbXBvc2l0aW9uSWQsIENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50VHlwZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25EaXNwYXRjaGVyOiBDb21wb3NpdGlvbkRpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGZvckV2ZW50cygpOiBBcnJheTxEb21haW5FdmVudFR5cGU8Q29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnRUeXBlPj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRTb3J0VG9nZ2xlZEV2ZW50LFxuXHRcdFx0U29ydE9yZGVyU2V0RXZlbnRcblx0XHRdO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudFR5cGUpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTb3J0VG9nZ2xlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgY29tcG9zaXRpb25JZCA9IGV2ZW50LmdldENvbXBvc2l0aW9uSWQoKSxcblx0XHRcdFx0ZGlycyA9IGV2ZW50LmdldERpcmVjdGlvbnMoKTtcblxuXHRcdFx0Y29uc3QgcGFyYW1zID0gZGlycy5tYXAoKGRpcjogYW55KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgY29sdW1uRmllbGRJZCA9IG5ldyBDb2x1bW5GaWVsZElkKGRpci5maWVsZElkLmdldElkKCkpO1xuXG5cdFx0XHRcdHJldHVybiBuZXcgQ2hhbmdlU29ydFBhcmFtcyhjb2x1bW5GaWVsZElkLCBkaXIuZGlyZWN0aW9uKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5jaGFuZ2VTb3J0KGNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1NvcnRPcmRlclNldEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgY29tcG9zaXRpb25JZCA9IGV2ZW50LmdldENvbXBvc2l0aW9uSWQoKSxcblx0XHRcdFx0ZGlycyA9IGV2ZW50LmdldERpcmVjdGlvbnMoKTtcblxuXHRcdFx0Y29uc3QgcGFyYW1zID0gZGlycy5tYXAoKGRpcjogYW55KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgY29sdW1uRmllbGRJZCA9IG5ldyBDb2x1bW5GaWVsZElkKGRpci5maWVsZElkLmdldElkKCkpO1xuXG5cdFx0XHRcdHJldHVybiBuZXcgQ2hhbmdlU29ydFBhcmFtcyhjb2x1bW5GaWVsZElkLCBkaXIuZGlyZWN0aW9uKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5jaGFuZ2VTb3J0KGNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdFx0fVxuXHR9XG5cblxufVxuIl19