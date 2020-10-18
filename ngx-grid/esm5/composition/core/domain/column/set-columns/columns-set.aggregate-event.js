/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CompositionColumnsSetEvent } from './composition.columns-set.event';
import { CompositionAggregateEvent } from '../../composition.aggregate-event';
var ColumnsSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnsSetAggregateEvent, _super);
    function ColumnsSetAggregateEvent(compositionId) {
        return _super.call(this, compositionId, 'ColumnsSetAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    ColumnsSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new CompositionColumnsSetEvent(this.getAggregateId());
    };
    return ColumnsSetAggregateEvent;
}(CompositionAggregateEvent));
export { ColumnsSetAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1ucy1zZXQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1ucy1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHOUU7SUFBOEMsb0RBQXlCO0lBRXRFLGtDQUFZLGFBQTRCO2VBQ3ZDLGtCQUFNLGFBQWEsRUFBRSwwQkFBMEIsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsZ0RBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLDBCQUEwQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRiwrQkFBQztBQUFELENBQUMsQUFWRCxDQUE4Qyx5QkFBeUIsR0FVdEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKSB7XG5cdFx0c3VwZXIoY29tcG9zaXRpb25JZCwgJ0NvbHVtbnNTZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxDb21wb3NpdGlvbklkPiB7XG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cbn1cbiJdfQ==