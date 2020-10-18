/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AllUniqueFilterUnselectedEvent } from './all-unique-filter-unselected.event';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
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
}(StructureAggregateEvent));
export { AllUniqueFilterUnselectedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLXVuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3Vuc2VsZWN0LWFsbC9hbGwtdW5pcXVlLWZpbHRlci11bnNlbGVjdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRy9GO0lBQTZELG1FQUF1QjtJQUVuRixpREFBWSxXQUF3QjtlQUNuQyxrQkFBTSxXQUFXLEVBQUUseUNBQXlDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUVELCtEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSw4QkFBOEIsQ0FDeEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVGLDhDQUFDO0FBQUQsQ0FBQyxBQVpELENBQTZELHVCQUF1QixHQVluRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQWxsVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEV2ZW50IH0gZnJvbSAnLi9hbGwtdW5pcXVlLWZpbHRlci11bnNlbGVjdGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIEFsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0FsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgQWxsVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEV2ZW50KFxuXHRcdFx0dGhpcy5nZXRBZ2dyZWdhdGVJZCgpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=