/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { SortToggledEvent } from '../../../structure/command/sort/toggle/sort-toggled.event';
import { CompositionDispatcher } from '../composition.dispatcher';
import { ColumnFieldId } from '../column/field/column-field.id';
import { ChangeSortParams } from './change-sort.params';
var CompositionChangeSortStatusEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionChangeSortStatusEventHandler, _super);
    function CompositionChangeSortStatusEventHandler(compositionDispatcher) {
        var _this = _super.call(this) || this;
        _this.compositionDispatcher = compositionDispatcher;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CompositionChangeSortStatusEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof SortToggledEvent) {
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
}(DomainEventHandler));
export { CompositionChangeSortStatusEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusEventHandler.prototype.compositionDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFlLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFN0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3hEO0lBQzZELG1FQUFrQjtJQUU5RSxpREFBb0IscUJBQTRDO1FBQWhFLFlBQ0MsaUJBQU8sU0FDUDtRQUZtQiwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCOztJQUVoRSxDQUFDOzs7OztJQUVELHdEQUFNOzs7O0lBQU4sVUFBTyxLQUFrQjtRQUV4QixJQUFJLEtBQUssWUFBWSxnQkFBZ0IsRUFBRTs7Z0JBRWhDLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7O2dCQUM3QyxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRTs7Z0JBRXpCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsR0FBUTs7b0JBRXhCLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUU1RCxPQUFPLElBQUksZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzRCxDQUFDLEVBQUM7WUFFRixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM3RDtJQUNGLENBQUM7O2dCQXZCRCxVQUFVOzs7O2dCQUxGLHFCQUFxQjs7SUE2QjlCLDhDQUFDO0NBQUEsQUF4QkQsQ0FDNkQsa0JBQWtCLEdBdUI5RTtTQXZCWSx1Q0FBdUM7Ozs7OztJQUV2Qyx3RUFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTb3J0VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC90b2dnbGUvc29ydC10b2dnbGVkLmV2ZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZC5pZCc7XG5pbXBvcnQgeyBDaGFuZ2VTb3J0UGFyYW1zIH0gZnJvbSAnLi9jaGFuZ2Utc29ydC5wYXJhbXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25EaXNwYXRjaGVyOiBDb21wb3NpdGlvbkRpc3BhdGNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBEb21haW5FdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgU29ydFRvZ2dsZWRFdmVudCkge1xuXG5cdFx0XHRjb25zdCBjb21wb3NpdGlvbklkID0gZXZlbnQuZ2V0Q29tcG9zaXRpb25JZCgpLFxuXHRcdFx0XHRkaXJzID0gZXZlbnQuZ2V0RGlyZWN0aW9ucygpO1xuXG5cdFx0XHRsZXQgcGFyYW1zID0gZGlycy5tYXAoKGRpcjogYW55KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgY29sdW1uRmllbGRJZCA9IG5ldyBDb2x1bW5GaWVsZElkKGRpci5maWVsZElkLmdldElkKCkpO1xuXG5cdFx0XHRcdHJldHVybiBuZXcgQ2hhbmdlU29ydFBhcmFtcyhjb2x1bW5GaWVsZElkLCBkaXIuZGlyZWN0aW9uKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5jaGFuZ2VTb3J0KGNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=