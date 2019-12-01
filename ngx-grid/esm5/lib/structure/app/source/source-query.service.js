/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, take } from 'rxjs/operators';
import { StructureRepository } from '../../domain/structure/query/structure.repository';
import { StructureSourceOriginRepository } from '../../domain/source/query/origin/structure.source-origin.repository';
import { globalStructureId } from '../../domain/global-structure-id';
var SourceQueryService = /** @class */ (function () {
    function SourceQueryService(structureRepository, structureSourceOriginRepository) {
        this.structureRepository = structureRepository;
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceQueryService.prototype.select = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.structureRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getEntities(); })), distinctUntilChanged((/**
         * @param {?} ents1
         * @param {?} ents2
         * @return {?}
         */
        function (ents1, ents2) {
            if (ents1.length !== ents2.length) {
                return false;
            }
            /** @type {?} */
            var flag = true;
            ents1.forEach((/**
             * @param {?} ent
             * @param {?} index
             * @return {?}
             */
            function (ent, index) {
                if (!ent.equals(ents2[index])) {
                    flag = false;
                    return;
                }
            }));
            return flag;
        })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceQueryService.prototype.selectOriginSize = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.structureSourceOriginRepository
            .selectOrigin(structureId)
            .pipe(map((/**
         * @param {?} origin
         * @return {?}
         */
        function (origin) { return origin.length; })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceQueryService.prototype.selectOne = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.select(structureId)
            .pipe(take(1));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceQueryService.prototype.selectLoading = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.structureRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getSource().isLoading(); })));
    };
    SourceQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceQueryService.ctorParameters = function () { return [
        { type: StructureRepository },
        { type: StructureSourceOriginRepository }
    ]; };
    return SourceQueryService;
}());
export { SourceQueryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceQueryService.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    SourceQueryService.prototype.structureSourceOriginRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvYXBwL3NvdXJjZS9zb3VyY2UtcXVlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBRXRILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBS3JFO0lBR0MsNEJBQW9CLG1CQUF3QyxFQUNqRCwrQkFBZ0U7UUFEdkQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUNqRCxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO0lBQzNFLENBQUM7Ozs7O0lBRUQsbUNBQU07Ozs7SUFBTixVQUFPLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ25CLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxTQUFvQixJQUFLLE9BQUEsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUF2QixDQUF1QixFQUFDLEVBQ3RELG9CQUFvQjs7Ozs7UUFBQyxVQUFDLEtBQW9CLEVBQUUsS0FBb0I7WUFDL0QsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLE9BQU8sS0FBSyxDQUFDO2FBQ2I7O2dCQUVHLElBQUksR0FBRyxJQUFJO1lBRWYsS0FBSyxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSztnQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLElBQUksR0FBRyxLQUFLLENBQUM7b0JBQ2IsT0FBTztpQkFDUDtZQUNGLENBQUMsRUFBQyxDQUFDO1lBRUgsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCw2Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDNUQsT0FBTyxJQUFJLENBQUMsK0JBQStCO2FBQ3JDLFlBQVksQ0FBQyxXQUFXLENBQUM7YUFDekIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLEVBQWIsQ0FBYSxFQUFDLENBQzVCLENBQUM7SUFDUixDQUFDOzs7OztJQUVELHNDQUFTOzs7O0lBQVQsVUFBVSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNyRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ3pCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsMENBQWE7Ozs7SUFBYixVQUFjLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3pELE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ25CLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxTQUFvQixJQUFLLE9BQUEsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFqQyxDQUFpQyxFQUFDLENBQ2hFLENBQUM7SUFDUixDQUFDOztnQkFwREQsVUFBVTs7OztnQkFSRixtQkFBbUI7Z0JBQ25CLCtCQUErQjs7SUE2RHhDLHlCQUFDO0NBQUEsQUF0REQsSUFzREM7U0FyRFksa0JBQWtCOzs7Ozs7SUFFbEIsaURBQWdEOzs7OztJQUN6RCw2REFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9xdWVyeS9zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9xdWVyeS9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgZ2xvYmFsU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vZ2xvYmFsLXN0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2VudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L3N0cnVjdHVyZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZVF1ZXJ5U2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnk6IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdHNlbGVjdChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8QXJyYXk8RW50aXR5Pj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLnNlbGVjdChzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZSkgPT4gc3RydWN0dXJlLmdldEVudGl0aWVzKCkpLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChlbnRzMTogQXJyYXk8RW50aXR5PiwgZW50czI6IEFycmF5PEVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdCAgIGlmIChlbnRzMS5sZW5ndGggIT09IGVudHMyLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHQgICByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdCAgIGxldCBmbGFnID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0ICAgZW50czEuZm9yRWFjaCgoZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHQgICBpZiAoIWVudC5lcXVhbHMoZW50czJbaW5kZXhdKSkge1xuXHRcdFx0XHRcdFx0XHRcdCAgIGZsYWcgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm47XG5cdFx0XHRcdFx0XHRcdCAgIH1cblx0XHRcdFx0XHRcdCAgIH0pO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gZmxhZztcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0c2VsZWN0T3JpZ2luU2l6ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAuc2VsZWN0T3JpZ2luKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAob3JpZ2luID0+IG9yaWdpbi5sZW5ndGgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRzZWxlY3RPbmUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPEFycmF5PEVudGl0eT4+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3Qoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIHRha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHNlbGVjdExvYWRpbmcoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5zZWxlY3Qoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmUpID0+IHN0cnVjdHVyZS5nZXRTb3VyY2UoKS5pc0xvYWRpbmcoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=