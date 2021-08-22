/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../core/domain/structure.domain-event';
var StructureSummariesChangedEvent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesChangedEvent, _super);
    function StructureSummariesChangedEvent(structureId, values) {
        var _this = _super.call(this, structureId, values, 'StructureSummariesChangedEvent') || this;
        _this.values = values;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSummariesChangedEvent.prototype.getSummaries = /**
     * @return {?}
     */
    function () {
        return this.values;
    };
    return StructureSummariesChangedEvent;
}(StructureDomainEvent));
export { StructureSummariesChangedEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesChangedEvent.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBR25GO0lBQW9ELDBEQUFvQjtJQUV2RSx3Q0FBWSxXQUF3QixFQUNoQixNQUFvQztRQUR4RCxZQUVDLGtCQUFNLFdBQVcsRUFBRSxNQUFNLEVBQUUsZ0NBQWdDLENBQUMsU0FDNUQ7UUFGbUIsWUFBTSxHQUFOLE1BQU0sQ0FBOEI7O0lBRXhELENBQUM7Ozs7SUFFRCxxREFBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVGLHFDQUFDO0FBQUQsQ0FBQyxBQVhELENBQW9ELG9CQUFvQixHQVd2RTs7Ozs7OztJQVJHLGdEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN1bW1hcmllc1ZhbHVlcyB9IGZyb20gJy4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLnZhbHVlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlczogTWFwPHN0cmluZywgU3VtbWFyaWVzVmFsdWVzPikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCB2YWx1ZXMsICdTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQnKTtcblx0fVxuXG5cdGdldFN1bW1hcmllcygpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXM7XG5cdH1cblxufVxuIl19