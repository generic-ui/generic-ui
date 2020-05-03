/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var SortToggledEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SortToggledEvent, _super);
    function SortToggledEvent(aggregateId, compositionId, directions) {
        var _this = _super.call(this, aggregateId, 'ToggleSortEvent') || this;
        _this.compositionId = compositionId;
        _this.directions = directions;
        return _this;
    }
    /**
     * @return {?}
     */
    SortToggledEvent.prototype.getCompositionId = /**
     * @return {?}
     */
    function () {
        return this.compositionId;
    };
    /**
     * @return {?}
     */
    SortToggledEvent.prototype.getDirections = /**
     * @return {?}
     */
    function () {
        return this.directions;
    };
    return SortToggledEvent;
}(DomainEvent));
export { SortToggledEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortToggledEvent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SortToggledEvent.prototype.directions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC10b2dnbGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc29ydC90b2dnbGUvc29ydC10b2dnbGVkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTWpEO0lBQXNDLDRDQUF3QjtJQUU3RCwwQkFBWSxXQUF3QixFQUNoQixhQUE0QixFQUM1QixVQUEyRDtRQUYvRSxZQUdDLGtCQUFNLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxTQUNyQztRQUhtQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVSxHQUFWLFVBQVUsQ0FBaUQ7O0lBRS9FLENBQUM7Ozs7SUFFRCwyQ0FBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsd0NBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7SUFDRix1QkFBQztBQUFELENBQUMsQUFmRCxDQUFzQyxXQUFXLEdBZWhEOzs7Ozs7O0lBWkcseUNBQTZDOzs7OztJQUM3QyxzQ0FBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTb3J0VG9nZ2xlZEV2ZW50IGV4dGVuZHMgRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkaXJlY3Rpb25zOiBBcnJheTx7IGZpZWxkSWQ6IEZpZWxkSWQsIGRpcmVjdGlvbjogYm9vbGVhbiB9Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnVG9nZ2xlU29ydEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRDb21wb3NpdGlvbklkKCk6IENvbXBvc2l0aW9uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uSWQ7XG5cdH1cblxuXHRnZXREaXJlY3Rpb25zKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZGlyZWN0aW9ucztcblx0fVxufVxuIl19