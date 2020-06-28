/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { AllUniqueFilterUnselectedEvent } from './all-unique-filter-unselected.event';
var AllUniqueFilterUnselectedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(AllUniqueFilterUnselectedAggregateEvent, _super);
    function AllUniqueFilterUnselectedAggregateEvent(aggregateId) {
        return _super.call(this, aggregateId, 'AllUniqueFilterUnselectedAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    AllUniqueFilterUnselectedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new AllUniqueFilterUnselectedEvent(this.getAggregateId());
    };
    return AllUniqueFilterUnselectedAggregateEvent;
}(AggregateEvent));
export { AllUniqueFilterUnselectedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLXVuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluL3VuaXF1ZS91bnNlbGVjdC1hbGwvYWxsLXVuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHdEY7SUFBNkQsbUVBQTJCO0lBRXZGLGlEQUFZLFdBQXdCO2VBQ25DLGtCQUFNLFdBQVcsRUFBRSx5Q0FBeUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBRUQsK0RBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLDhCQUE4QixDQUN4QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUYsOENBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBNkQsY0FBYyxHQVkxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEFsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRFdmVudCB9IGZyb20gJy4vYWxsLXVuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIEFsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdBbGxVbmlxdWVGaWx0ZXJVbnNlbGVjdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IEFsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRFdmVudChcblx0XHRcdHRoaXMuZ2V0QWdncmVnYXRlSWQoKVxuXHRcdCk7XG5cdH1cblxufVxuIl19