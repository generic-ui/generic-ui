/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var StructureConfigQuickFilterSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureConfigQuickFilterSetEvent, _super);
    function StructureConfigQuickFilterSetEvent(aggregateId, enabled) {
        var _this = _super.call(this, aggregateId, 'StructureConfigQuickFilterSetEvent') || this;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureConfigQuickFilterSetEvent.prototype.getEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    return StructureConfigQuickFilterSetEvent;
}(DomainEvent));
export { StructureConfigQuickFilterSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigQuickFilterSetEvent.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvcXVpY2svc3RydWN0dXJlLmNvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFlLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzlEO0lBQXdELDhEQUFXO0lBRWxFLDRDQUFZLFdBQXdCLEVBQ2hCLE9BQWdCO1FBRHBDLFlBRUMsa0JBQU0sV0FBVyxFQUFFLG9DQUFvQyxDQUFDLFNBQ3hEO1FBRm1CLGFBQU8sR0FBUCxPQUFPLENBQVM7O0lBRXBDLENBQUM7Ozs7SUFFRCx1REFBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVGLHlDQUFDO0FBQUQsQ0FBQyxBQVhELENBQXdELFdBQVcsR0FXbEU7Ozs7Ozs7SUFSRyxxREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50IGV4dGVuZHMgRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19