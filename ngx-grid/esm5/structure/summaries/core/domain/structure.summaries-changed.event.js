/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../core/domain/structure.domain-event';
var StructureSummariesChangedEvent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesChangedEvent, _super);
    function StructureSummariesChangedEvent(structureId, values) {
        var _this = _super.call(this, structureId, 'StructureSummariesChangedEvent') || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBR25GO0lBQW9ELDBEQUFvQjtJQUV2RSx3Q0FBWSxXQUF3QixFQUNoQixNQUFvQztRQUR4RCxZQUVDLGtCQUFNLFdBQVcsRUFBRSxnQ0FBZ0MsQ0FBQyxTQUNwRDtRQUZtQixZQUFNLEdBQU4sTUFBTSxDQUE4Qjs7SUFFeEQsQ0FBQzs7OztJQUVELHFEQUFZOzs7SUFBWjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBRUYscUNBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBb0Qsb0JBQW9CLEdBV3ZFOzs7Ozs7O0lBUkcsZ0RBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzVmFsdWVzIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9zdW1tYXJpZXMudmFsdWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmFsdWVzOiBNYXA8c3RyaW5nLCBTdW1tYXJpZXNWYWx1ZXM+KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQnKTtcblx0fVxuXG5cdGdldFN1bW1hcmllcygpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXM7XG5cdH1cblxufVxuIl19