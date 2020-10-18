/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
var SortToggledEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SortToggledEvent, _super);
    function SortToggledEvent(aggregateId, compositionId, directions) {
        var _this = _super.call(this, aggregateId, 'SortToggledEvent') || this;
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
}(StructureDomainEvent));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC10b2dnbGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2RvbWFpbi90b2dnbGUvc29ydC10b2dnbGVkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFHdEY7SUFBc0MsNENBQW9CO0lBRXpELDBCQUFZLFdBQXdCLEVBQ2hCLGFBQTRCLEVBQzVCLFVBQTJEO1FBRi9FLFlBR0Msa0JBQU0sV0FBVyxFQUFFLGtCQUFrQixDQUFDLFNBQ3RDO1FBSG1CLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFVLEdBQVYsVUFBVSxDQUFpRDs7SUFFL0UsQ0FBQzs7OztJQUVELDJDQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx3Q0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUNGLHVCQUFDO0FBQUQsQ0FBQyxBQWZELENBQXNDLG9CQUFvQixHQWV6RDs7Ozs7OztJQVpHLHlDQUE2Qzs7Ozs7SUFDN0Msc0NBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTb3J0VG9nZ2xlZEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRpcmVjdGlvbnM6IEFycmF5PHsgZmllbGRJZDogRmllbGRJZCwgZGlyZWN0aW9uOiBib29sZWFuIH0+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTb3J0VG9nZ2xlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRDb21wb3NpdGlvbklkKCk6IENvbXBvc2l0aW9uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uSWQ7XG5cdH1cblxuXHRnZXREaXJlY3Rpb25zKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZGlyZWN0aW9ucztcblx0fVxufVxuIl19