/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ListViewCreatedEvent } from './list-view-created.event';
import { ListViewAggregateEvent } from '../list-view.aggregate-event';
var ListViewCreatedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewCreatedAggregateEvent, _super);
    function ListViewCreatedAggregateEvent(aggregateId) {
        return _super.call(this, aggregateId, 'ListViewCreatedAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    ListViewCreatedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new ListViewCreatedEvent(this.getAggregateId());
    };
    return ListViewCreatedAggregateEvent;
}(ListViewAggregateEvent));
export { ListViewCreatedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9jb3JlL2RvbWFpbi9jcmVhdGUvbGlzdC12aWV3LWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdEU7SUFBbUQseURBQXNCO0lBRXhFLHVDQUFZLFdBQXVCO2VBQ2xDLGtCQUFNLFdBQVcsRUFBRSwrQkFBK0IsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQscURBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRixvQ0FBQztBQUFELENBQUMsQUFURCxDQUFtRCxzQkFBc0IsR0FTeEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3Q3JlYXRlZEV2ZW50IH0gZnJvbSAnLi9saXN0LXZpZXctY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vLi4vYXBpL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0FnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vbGlzdC12aWV3LmFnZ3JlZ2F0ZS1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NyZWF0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIExpc3RWaWV3QWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBMaXN0Vmlld0lkKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdMaXN0Vmlld0NyZWF0ZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxMaXN0Vmlld0lkPiB7XG5cdFx0cmV0dXJuIG5ldyBMaXN0Vmlld0NyZWF0ZWRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG59XG4iXX0=