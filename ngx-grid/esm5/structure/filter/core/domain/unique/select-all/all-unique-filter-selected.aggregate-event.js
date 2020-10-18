/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AllUniqueFilterSelectedEvent } from './all-unique-filter-selected.event';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
var AllUniqueFilterSelectedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(AllUniqueFilterSelectedAggregateEvent, _super);
    function AllUniqueFilterSelectedAggregateEvent(aggregateId) {
        return _super.call(this, aggregateId, 'AllUniqueFilterSelectedAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    AllUniqueFilterSelectedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new AllUniqueFilterSelectedEvent(this.getAggregateId());
    };
    return AllUniqueFilterSelectedAggregateEvent;
}(StructureAggregateEvent));
export { AllUniqueFilterSelectedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLXVuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS9zZWxlY3QtYWxsL2FsbC11bmlxdWUtZmlsdGVyLXNlbGVjdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRy9GO0lBQTJELGlFQUF1QjtJQUVqRiwrQ0FBWSxXQUF3QjtlQUNuQyxrQkFBTSxXQUFXLEVBQUUsdUNBQXVDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELDZEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSw0QkFBNEIsQ0FDdEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVGLDRDQUFDO0FBQUQsQ0FBQyxBQVpELENBQTJELHVCQUF1QixHQVlqRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQWxsVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudCB9IGZyb20gJy4vYWxsLXVuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgQWxsVW5pcXVlRmlsdGVyU2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0FsbFVuaXF1ZUZpbHRlclNlbGVjdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IEFsbFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQoXG5cdFx0XHR0aGlzLmdldEFnZ3JlZ2F0ZUlkKClcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==