/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionCreatedEvent } from './composition-created.event';
var CompositionCreatedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionCreatedAggregateEvent, _super);
    function CompositionCreatedAggregateEvent(compositionId) {
        return _super.call(this, compositionId, 'SchemaCreatedEvent') || this;
    }
    /**
     * @return {?}
     */
    CompositionCreatedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new CompositionCreatedEvent(this.getAggregateId());
    };
    return CompositionCreatedAggregateEvent;
}(AggregateEvent));
export { CompositionCreatedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY3JlYXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY3JlYXRlL2NvbXBvc2l0aW9uLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBR2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXRFO0lBQXNELDREQUE2QjtJQUVsRiwwQ0FBWSxhQUE0QjtlQUN2QyxrQkFBTSxhQUFhLEVBQUUsb0JBQW9CLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELHdEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0YsdUNBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBc0QsY0FBYyxHQVNuRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNyZWF0ZWRFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24tY3JlYXRlZC5ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNyZWF0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKSB7XG5cdFx0c3VwZXIoY29tcG9zaXRpb25JZCwgJ1NjaGVtYUNyZWF0ZWRFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxDb21wb3NpdGlvbklkPiB7XG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNyZWF0ZWRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG59XG4iXX0=