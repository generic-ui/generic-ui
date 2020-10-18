/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { UniqueFilterSelectedEvent } from './unique-filter-selected.event';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
var UniqueFilterSelectedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(UniqueFilterSelectedAggregateEvent, _super);
    function UniqueFilterSelectedAggregateEvent(aggregateId) {
        return _super.call(this, aggregateId, 'UniqueFilterSelectedAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    UniqueFilterSelectedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new UniqueFilterSelectedEvent(this.getAggregateId());
    };
    return UniqueFilterSelectedAggregateEvent;
}(StructureAggregateEvent));
export { UniqueFilterSelectedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1zZWxlY3RlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3NlbGVjdC91bmlxdWUtZmlsdGVyLXNlbGVjdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRy9GO0lBQXdELDhEQUF1QjtJQUU5RSw0Q0FBWSxXQUF3QjtlQUNuQyxrQkFBTSxXQUFXLEVBQUUsb0NBQW9DLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELDBEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSx5QkFBeUIsQ0FDbkMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVGLHlDQUFDO0FBQUQsQ0FBQyxBQVpELENBQXdELHVCQUF1QixHQVk5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudCB9IGZyb20gJy4vdW5pcXVlLWZpbHRlci1zZWxlY3RlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVGaWx0ZXJTZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnVW5pcXVlRmlsdGVyU2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudChcblx0XHRcdHRoaXMuZ2V0QWdncmVnYXRlSWQoKVxuXHRcdCk7XG5cdH1cblxufVxuIl19