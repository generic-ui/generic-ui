/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
var SortOrderSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SortOrderSetEvent, _super);
    function SortOrderSetEvent(aggregateId, compositionId, directions) {
        var _this = _super.call(this, aggregateId, 'SortOrderSetEvent') || this;
        _this.compositionId = compositionId;
        _this.directions = directions;
        return _this;
    }
    /**
     * @return {?}
     */
    SortOrderSetEvent.prototype.getCompositionId = /**
     * @return {?}
     */
    function () {
        return this.compositionId;
    };
    /**
     * @return {?}
     */
    SortOrderSetEvent.prototype.getDirections = /**
     * @return {?}
     */
    function () {
        return this.directions;
    };
    return SortOrderSetEvent;
}(StructureDomainEvent));
export { SortOrderSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortOrderSetEvent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SortOrderSetEvent.prototype.directions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vcmRlci1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2NvcmUvZG9tYWluL29yZGVyL3NvcnQtb3JkZXItc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFdEY7SUFBdUMsNkNBQW9CO0lBRTFELDJCQUFZLFdBQXdCLEVBQ2hCLGFBQTRCLEVBQzVCLFVBQTJEO1FBRi9FLFlBR0Msa0JBQU0sV0FBVyxFQUFFLG1CQUFtQixDQUFDLFNBQ3ZDO1FBSG1CLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFVLEdBQVYsVUFBVSxDQUFpRDs7SUFFL0UsQ0FBQzs7OztJQUVELDRDQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx5Q0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0FBQyxBQWZELENBQXVDLG9CQUFvQixHQWUxRDs7Ozs7OztJQVpHLDBDQUE2Qzs7Ozs7SUFDN0MsdUNBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU29ydE9yZGVyU2V0RXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGlyZWN0aW9uczogQXJyYXk8eyBmaWVsZElkOiBGaWVsZElkLCBkaXJlY3Rpb246IGJvb2xlYW4gfT4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1NvcnRPcmRlclNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRDb21wb3NpdGlvbklkKCk6IENvbXBvc2l0aW9uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uSWQ7XG5cdH1cblxuXHRnZXREaXJlY3Rpb25zKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZGlyZWN0aW9ucztcblx0fVxufVxuIl19