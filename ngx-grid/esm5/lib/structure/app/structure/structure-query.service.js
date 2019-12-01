/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { StructureRepository } from '../../domain/structure/query/structure.repository';
import { globalStructureId } from '../../domain/global-structure-id';
var StructureQueryService = /** @class */ (function () {
    function StructureQueryService(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    StructureQueryService.prototype.select = /**
     * @param {?=} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        if (aggregateId === void 0) { aggregateId = globalStructureId; }
        return this.structureRepository.select(aggregateId);
    };
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    StructureQueryService.prototype.selectVerticalScrollEnabled = /**
     * @param {?=} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        if (aggregateId === void 0) { aggregateId = globalStructureId; }
        return this.structureRepository
            .select(aggregateId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.isVerticalScrollEnabled(); })), distinctUntilChanged());
    };
    StructureQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureQueryService.ctorParameters = function () { return [
        { type: StructureRepository }
    ]; };
    return StructureQueryService;
}());
export { StructureQueryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureQueryService.prototype.structureRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvYXBwL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtcXVlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFJckU7SUFHQywrQkFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxzQ0FBTTs7OztJQUFOLFVBQU8sV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDbEQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsMkRBQTJCOzs7O0lBQTNCLFVBQTRCLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ25CLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxTQUFvQixJQUFLLE9BQUEsU0FBUyxDQUFDLHVCQUF1QixFQUFFLEVBQW5DLENBQW1DLEVBQUMsRUFDbEUsb0JBQW9CLEVBQUUsQ0FDdEIsQ0FBQztJQUNSLENBQUM7O2dCQWpCRCxVQUFVOzs7O2dCQUxGLG1CQUFtQjs7SUF3QjVCLDRCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlkscUJBQXFCOzs7Ozs7SUFFckIsb0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9xdWVyeS9zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcXVlcnkvc3RydWN0dXJlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUXVlcnlTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdHNlbGVjdChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8U3RydWN0dXJlPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeS5zZWxlY3QoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0c2VsZWN0VmVydGljYWxTY3JvbGxFbmFibGVkKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAuc2VsZWN0KGFnZ3JlZ2F0ZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlKSA9PiBzdHJ1Y3R1cmUuaXNWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==