/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, take } from 'rxjs/operators';
import { StructureReadModelRepository } from '../../read/structure/structure.read-model-repository';
import { StructureSourceOriginRepository } from '../../read/source/origin/structure.source-origin.repository';
import { structureGlobalId } from '../structure.global-id';
import { StructurePreparedItemsRepository } from '../../read/source/prepared/structure.prepared-items.repository';
var StructureSourceWarehouse = /** @class */ (function () {
    function StructureSourceWarehouse(structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) {
        this.structureRepository = structureRepository;
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureSourceWarehouse.prototype.onEntities = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structureRepository
            .onStructure(structureId)
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
    StructureSourceWarehouse.prototype.onEntitiesSize = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.onEntities(structureId)
            .pipe(map((/**
         * @param {?} entities
         * @return {?}
         */
        function (entities) {
            return entities.length;
        })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureSourceWarehouse.prototype.onSingleEntities = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.onEntities(structureId)
            .pipe(take(1));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureSourceWarehouse.prototype.onOriginSize = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structureSourceOriginRepository
            .onOrigin(structureId)
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
    StructureSourceWarehouse.prototype.onLoading = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structureRepository
            .onStructure(structureId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getSource().isLoading(); })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureSourceWarehouse.prototype.onPreparedEntities = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structurePreparedItemsRepository.onPreparedItems(structureId);
    };
    StructureSourceWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSourceWarehouse.ctorParameters = function () { return [
        { type: StructureReadModelRepository },
        { type: StructurePreparedItemsRepository },
        { type: StructureSourceOriginRepository }
    ]; };
    return StructureSourceWarehouse;
}());
export { StructureSourceWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceWarehouse.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSourceWarehouse.prototype.structurePreparedItemsRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSourceWarehouse.prototype.structureSourceOriginRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3NvdXJjZS9zdHJ1Y3R1cmUtc291cmNlLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBRTlHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBR2xIO0lBR0Msa0NBQW9CLG1CQUFpRCxFQUMxRCxnQ0FBa0UsRUFDbEUsK0JBQWdFO1FBRnZELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBOEI7UUFDMUQscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztRQUNsRSxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO0lBQzNFLENBQUM7Ozs7O0lBRUQsNkNBQVU7Ozs7SUFBVixVQUFXLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBRXRELE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxTQUFpQyxJQUFLLE9BQUEsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUF2QixDQUF1QixFQUFDLEVBQ25FLG9CQUFvQjs7Ozs7UUFBQyxVQUFDLEtBQXdCLEVBQUUsS0FBd0I7WUFDdkUsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLE9BQU8sS0FBSyxDQUFDO2FBQ2I7O2dCQUVHLElBQUksR0FBRyxJQUFJO1lBRWYsS0FBSyxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSztnQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLElBQUksR0FBRyxLQUFLLENBQUM7b0JBQ2IsT0FBTztpQkFDUDtZQUNGLENBQUMsRUFBQyxDQUFDO1lBRUgsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxpREFBYzs7OztJQUFkLFVBQWUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFFMUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQzthQUM3QixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsUUFBMkI7WUFDL0IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELG1EQUFnQjs7OztJQUFoQixVQUFpQixXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUU1RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO2FBQzdCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsK0NBQVk7Ozs7SUFBWixVQUFhLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3hELE9BQU8sSUFBSSxDQUFDLCtCQUErQjthQUNyQyxRQUFRLENBQUMsV0FBVyxDQUFDO2FBQ3JCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxFQUFiLENBQWEsRUFBQyxDQUM1QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCw0Q0FBUzs7OztJQUFULFVBQVUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDckQsT0FBTyxJQUFJLENBQUMsbUJBQW1CO2FBQ3pCLFdBQVcsQ0FBQyxXQUFXLENBQUM7YUFDeEIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLFNBQWlDLElBQUssT0FBQSxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQWpDLENBQWlDLEVBQUMsQ0FDN0UsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQscURBQWtCOzs7O0lBQWxCLFVBQW1CLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzlELE9BQU8sSUFBSSxDQUFDLGdDQUFnQyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRSxDQUFDOztnQkFyRUQsVUFBVTs7OztnQkFURiw0QkFBNEI7Z0JBTTVCLGdDQUFnQztnQkFMaEMsK0JBQStCOztJQStFeEMsK0JBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQXRFWSx3QkFBd0I7Ozs7OztJQUV4Qix1REFBeUQ7Ozs7O0lBQ2xFLG9FQUEwRTs7Ozs7SUFDMUUsbUVBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3JlYWQvc3RydWN0dXJlL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3JlYWQvc291cmNlL29yaWdpbi9zdHJ1Y3R1cmUuc291cmNlLW9yaWdpbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uL3JlYWQvc3RydWN0dXJlL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9yZWFkL3NvdXJjZS9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvbkVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxBcnJheTxJdGVtRW50aXR5Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25TdHJ1Y3R1cmUoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiBzdHJ1Y3R1cmUuZ2V0RW50aXRpZXMoKSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKGVudHMxOiBBcnJheTxJdGVtRW50aXR5PiwgZW50czI6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICBpZiAoZW50czEubGVuZ3RoICE9PSBlbnRzMi5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0ICAgfVxuXG5cdFx0XHRcdFx0XHQgICBsZXQgZmxhZyA9IHRydWU7XG5cblx0XHRcdFx0XHRcdCAgIGVudHMxLmZvckVhY2goKGVudCwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0ICAgaWYgKCFlbnQuZXF1YWxzKGVudHMyW2luZGV4XSkpIHtcblx0XHRcdFx0XHRcdFx0XHQgICBmbGFnID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuO1xuXHRcdFx0XHRcdFx0XHQgICB9XG5cdFx0XHRcdFx0XHQgICB9KTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGZsYWc7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uRW50aXRpZXNTaXplKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRW50aXRpZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gZW50aXRpZXMubGVuZ3RoO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblNpbmdsZUVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxBcnJheTxJdGVtRW50aXR5Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FbnRpdGllcyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25PcmlnaW5TaXplKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbk9yaWdpbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKG9yaWdpbiA9PiBvcmlnaW4ubGVuZ3RoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Mb2FkaW5nKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25TdHJ1Y3R1cmUoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiBzdHJ1Y3R1cmUuZ2V0U291cmNlKCkuaXNMb2FkaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5Lm9uUHJlcGFyZWRJdGVtcyhzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19