/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFieldUiArchive } from './structure.field.ui-archive';
var StructureFieldUiRepository = /** @class */ (function () {
    function StructureFieldUiRepository(structureFieldUiArchive) {
        this.structureFieldUiArchive = structureFieldUiArchive;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureFieldUiRepository.prototype.onFields = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureFieldUiArchive.when(structureId);
    };
    StructureFieldUiRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFieldUiRepository.ctorParameters = function () { return [
        { type: StructureFieldUiArchive }
    ]; };
    return StructureFieldUiRepository;
}());
export { StructureFieldUiRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFieldUiRepository.prototype.structureFieldUiArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkLnVpLXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3N0cnVjdHVyZS9maWVsZC9zdHJ1Y3R1cmUuZmllbGQudWktcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUt2RTtJQUdDLG9DQUFvQix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUNwRSxDQUFDOzs7OztJQUVELDZDQUFROzs7O0lBQVIsVUFBUyxXQUF3QjtRQUNoQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBUkQsVUFBVTs7OztnQkFMRix1QkFBdUI7O0lBZWhDLGlDQUFDO0NBQUEsQUFWRCxJQVVDO1NBVFksMEJBQTBCOzs7Ozs7SUFFMUIsNkRBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLmZpZWxkLnVpLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlNb2RlbCB9IGZyb20gJy4vc3RydWN0dXJlLmZpZWxkLnVpLW1vZGVsJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlRmllbGRVaUFyY2hpdmU6IFN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlKSB7XG5cdH1cblxuXHRvbkZpZWxkcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPEFycmF5PFN0cnVjdHVyZUZpZWxkVWlNb2RlbD4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVGaWVsZFVpQXJjaGl2ZS53aGVuKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=