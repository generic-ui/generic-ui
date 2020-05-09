/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { PagesizeChangedEvent } from '../change-pagesize/pagesize-changed.event';
var PagesizeChangedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(PagesizeChangedAggregateEvent, _super);
    function PagesizeChangedAggregateEvent(structureId) {
        return _super.call(this, structureId, 'PagesizeChangedAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    PagesizeChangedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new PagesizeChangedEvent(this.getAggregateId());
    };
    return PagesizeChangedAggregateEvent;
}(AggregateEvent));
export { PagesizeChangedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNpemUtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZG9tYWluL3BhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBR2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBR2pGO0lBQW1ELHlEQUEyQjtJQUU3RSx1Q0FBWSxXQUF3QjtlQUNuQyxrQkFBTSxXQUFXLEVBQUUsK0JBQStCLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELHFEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUYsb0NBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBbUQsY0FBYyxHQVVoRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vY2hhbmdlLXBhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgUGFnZXNpemVDaGFuZ2VkRXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG59XG4iXX0=