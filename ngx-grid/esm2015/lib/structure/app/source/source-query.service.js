/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, take } from 'rxjs/operators';
import { StructureRepository } from '../../domain/structure/query/structure.repository';
import { StructureSourceOriginRepository } from '../../domain/source/query/origin/structure.source-origin.repository';
import { globalStructureId } from '../../domain/global-structure-id';
export class SourceQueryService {
    /**
     * @param {?} structureRepository
     * @param {?} structureSourceOriginRepository
     */
    constructor(structureRepository, structureSourceOriginRepository) {
        this.structureRepository = structureRepository;
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    select(structureId = globalStructureId) {
        return this.structureRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getEntities())), distinctUntilChanged((/**
         * @param {?} ents1
         * @param {?} ents2
         * @return {?}
         */
        (ents1, ents2) => {
            if (ents1.length !== ents2.length) {
                return false;
            }
            /** @type {?} */
            let flag = true;
            ents1.forEach((/**
             * @param {?} ent
             * @param {?} index
             * @return {?}
             */
            (ent, index) => {
                if (!ent.equals(ents2[index])) {
                    flag = false;
                    return;
                }
            }));
            return flag;
        })));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    selectOriginSize(structureId = globalStructureId) {
        return this.structureSourceOriginRepository
            .selectOrigin(structureId)
            .pipe(map((/**
         * @param {?} origin
         * @return {?}
         */
        origin => origin.length)));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    selectOne(structureId = globalStructureId) {
        return this.select(structureId)
            .pipe(take(1));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    selectLoading(structureId = globalStructureId) {
        return this.structureRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getSource().isLoading())));
    }
}
SourceQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceQueryService.ctorParameters = () => [
    { type: StructureRepository },
    { type: StructureSourceOriginRepository }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvYXBwL3NvdXJjZS9zb3VyY2UtcXVlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBRXRILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBTXJFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBRTlCLFlBQW9CLG1CQUF3QyxFQUNqRCwrQkFBZ0U7UUFEdkQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUNqRCxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO0lBQzNFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGNBQTJCLGlCQUFpQjtRQUNsRCxPQUFPLElBQUksQ0FBQyxtQkFBbUI7YUFDekIsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNuQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFDLEVBQ3RELG9CQUFvQjs7Ozs7UUFBQyxDQUFDLEtBQW9CLEVBQUUsS0FBb0IsRUFBRSxFQUFFO1lBQ25FLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNsQyxPQUFPLEtBQUssQ0FBQzthQUNiOztnQkFFRyxJQUFJLEdBQUcsSUFBSTtZQUVmLEtBQUssQ0FBQyxPQUFPOzs7OztZQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDOUIsSUFBSSxHQUFHLEtBQUssQ0FBQztvQkFDYixPQUFPO2lCQUNQO1lBQ0YsQ0FBQyxFQUFDLENBQUM7WUFFSCxPQUFPLElBQUksQ0FBQztRQUNiLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLGNBQTJCLGlCQUFpQjtRQUM1RCxPQUFPLElBQUksQ0FBQywrQkFBK0I7YUFDckMsWUFBWSxDQUFDLFdBQVcsQ0FBQzthQUN6QixJQUFJLENBQ0osR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUM1QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsY0FBMkIsaUJBQWlCO1FBQ3JELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDekIsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsY0FBMkIsaUJBQWlCO1FBQ3pELE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ25CLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FDaEUsQ0FBQztJQUNSLENBQUM7OztZQXBERCxVQUFVOzs7O1lBUkYsbUJBQW1CO1lBQ25CLCtCQUErQjs7Ozs7OztJQVUzQixpREFBZ0Q7Ozs7O0lBQ3pELDZEQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L3N0cnVjdHVyZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL3F1ZXJ5L29yaWdpbi9zdHJ1Y3R1cmUuc291cmNlLW9yaWdpbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcXVlcnkvc3RydWN0dXJlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlUXVlcnlTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeTogU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0c2VsZWN0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxFbnRpdHk+PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAuc2VsZWN0KHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlKSA9PiBzdHJ1Y3R1cmUuZ2V0RW50aXRpZXMoKSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKGVudHMxOiBBcnJheTxFbnRpdHk+LCBlbnRzMjogQXJyYXk8RW50aXR5PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgaWYgKGVudHMxLmxlbmd0aCAhPT0gZW50czIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdCAgIHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0ICAgbGV0IGZsYWcgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHQgICBlbnRzMS5mb3JFYWNoKChlbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgIGlmICghZW50LmVxdWFscyhlbnRzMltpbmRleF0pKSB7XG5cdFx0XHRcdFx0XHRcdFx0ICAgZmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdCAgIHJldHVybjtcblx0XHRcdFx0XHRcdFx0ICAgfVxuXHRcdFx0XHRcdFx0ICAgfSk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBmbGFnO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRzZWxlY3RPcmlnaW5TaXplKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5zZWxlY3RPcmlnaW4oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcChvcmlnaW4gPT4gb3JpZ2luLmxlbmd0aClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHNlbGVjdE9uZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8QXJyYXk8RW50aXR5Pj4ge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdChzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0c2VsZWN0TG9hZGluZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLnNlbGVjdChzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZSkgPT4gc3RydWN0dXJlLmdldFNvdXJjZSgpLmlzTG9hZGluZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==