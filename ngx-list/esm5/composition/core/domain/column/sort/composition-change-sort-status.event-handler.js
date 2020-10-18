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
var CompositionChangeSortStatusEventHandler = /** @class */ (function () {
    function CompositionChangeSortStatusEventHandler(compositionDispatcher) {
        this.compositionDispatcher = compositionDispatcher;
    }
    /**
     * @return {?}
     */
    CompositionChangeSortStatusEventHandler.prototype.forEvents = /**
     * @return {?}
     */
    function () {
        return [
            SortToggledEvent,
            SortOrderSetEvent
        ];
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CompositionChangeSortStatusEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('SortToggledEvent')) {
            /** @type {?} */
            var compositionId = event.getCompositionId();
            /** @type {?} */
            var dirs = event.getDirections();
            /** @type {?} */
            var params = dirs.map((/**
             * @param {?} dir
             * @return {?}
             */
            function (dir) {
                /** @type {?} */
                var columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            }));
            this.compositionDispatcher.changeSort(compositionId, params);
        }
        if (event.ofMessageType('SortOrderSetEvent')) {
            /** @type {?} */
            var compositionId = event.getCompositionId();
            /** @type {?} */
            var dirs = event.getDirections();
            /** @type {?} */
            var params = dirs.map((/**
             * @param {?} dir
             * @return {?}
             */
            function (dir) {
                /** @type {?} */
                var columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            }));
            this.compositionDispatcher.changeSort(compositionId, params);
        }
    };
    CompositionChangeSortStatusEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionChangeSortStatusEventHandler.ctorParameters = function () { return [
        { type: CompositionDispatcher }
    ]; };
    return CompositionChangeSortStatusEventHandler;
}());
export { CompositionChangeSortStatusEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusEventHandler.prototype.compositionDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBRTFHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUs1RztJQUdDLGlEQUFvQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNoRSxDQUFDOzs7O0lBRUQsMkRBQVM7OztJQUFUO1FBQ0MsT0FBTztZQUNOLGdCQUFnQjtZQUNoQixpQkFBaUI7U0FDakIsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsd0RBQU07Ozs7SUFBTixVQUFPLEtBQTJDO1FBRWpELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFOztnQkFFdEMsYUFBYSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTs7Z0JBQzdDLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFOztnQkFFekIsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxHQUFROztvQkFFeEIsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRTVELE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELENBQUMsRUFBQztZQUVGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7O2dCQUV2QyxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFOztnQkFDN0MsSUFBSSxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUU7O2dCQUV6QixNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLEdBQVE7O29CQUV4QixhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFFNUQsT0FBTyxJQUFJLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxFQUFDO1lBRUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDN0Q7SUFDRixDQUFDOztnQkE1Q0QsVUFBVTs7OztnQkFSRixxQkFBcUI7O0lBdUQ5Qiw4Q0FBQztDQUFBLEFBL0NELElBK0NDO1NBOUNZLHVDQUF1Qzs7Ozs7O0lBRXZDLHdFQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRUeXBlLCBNdWx0aURvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNvcnRUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2RvbWFpbi90b2dnbGUvc29ydC10b2dnbGVkLmV2ZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vZmllbGQvY29sdW1uLWZpZWxkLmlkJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuL2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBTb3J0T3JkZXJTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3J0aW5nL2NvcmUvZG9tYWluL29yZGVyL3NvcnQtb3JkZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29tcG9zaXRpb24uaWQnO1xuXG5leHBvcnQgdHlwZSBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudFR5cGUgPSBTb3J0VG9nZ2xlZEV2ZW50IHwgU29ydE9yZGVyU2V0RXZlbnQ7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBNdWx0aURvbWFpbkV2ZW50SGFuZGxlcjxDb21wb3NpdGlvbklkLCBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudFR5cGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRmb3JFdmVudHMoKTogQXJyYXk8RG9tYWluRXZlbnRUeXBlPENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50VHlwZT4+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0U29ydFRvZ2dsZWRFdmVudCxcblx0XHRcdFNvcnRPcmRlclNldEV2ZW50XG5cdFx0XTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnRUeXBlKTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU29ydFRvZ2dsZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IGNvbXBvc2l0aW9uSWQgPSBldmVudC5nZXRDb21wb3NpdGlvbklkKCksXG5cdFx0XHRcdGRpcnMgPSBldmVudC5nZXREaXJlY3Rpb25zKCk7XG5cblx0XHRcdGxldCBwYXJhbXMgPSBkaXJzLm1hcCgoZGlyOiBhbnkpID0+IHtcblxuXHRcdFx0XHRjb25zdCBjb2x1bW5GaWVsZElkID0gbmV3IENvbHVtbkZpZWxkSWQoZGlyLmZpZWxkSWQuZ2V0SWQoKSk7XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDaGFuZ2VTb3J0UGFyYW1zKGNvbHVtbkZpZWxkSWQsIGRpci5kaXJlY3Rpb24pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLmNoYW5nZVNvcnQoY29tcG9zaXRpb25JZCwgcGFyYW1zKTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU29ydE9yZGVyU2V0RXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCBjb21wb3NpdGlvbklkID0gZXZlbnQuZ2V0Q29tcG9zaXRpb25JZCgpLFxuXHRcdFx0XHRkaXJzID0gZXZlbnQuZ2V0RGlyZWN0aW9ucygpO1xuXG5cdFx0XHRsZXQgcGFyYW1zID0gZGlycy5tYXAoKGRpcjogYW55KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgY29sdW1uRmllbGRJZCA9IG5ldyBDb2x1bW5GaWVsZElkKGRpci5maWVsZElkLmdldElkKCkpO1xuXG5cdFx0XHRcdHJldHVybiBuZXcgQ2hhbmdlU29ydFBhcmFtcyhjb2x1bW5GaWVsZElkLCBkaXIuZGlyZWN0aW9uKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5jaGFuZ2VTb3J0KGNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdFx0fVxuXHR9XG5cblxufVxuIl19