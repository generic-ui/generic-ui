/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, take } from 'rxjs/operators';
import { StructureReadModelRepository } from '../../../grid/core/domain-read/structure.read-model-repository';
import { StructureSourceOriginRepository } from './origin/structure.source-origin.repository';
import { structureGlobalId } from '../../../core/api/structure.global-id';
import { StructurePreparedItemsRepository } from './prepared/structure.prepared-items.repository';
export class SourceWarehouse {
    /**
     * @param {?} structureRepository
     * @param {?} structurePreparedItemsRepository
     * @param {?} structureSourceOriginRepository
     */
    constructor(structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) {
        this.structureRepository = structureRepository;
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    getEntities(structureId = structureGlobalId) {
        return this.structureRepository.getStructure(structureId).getEntities();
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onEntities(structureId = structureGlobalId) {
        return this.structureRepository
            .onStructure(structureId)
            .pipe(
        // tap(() => {
        //    console.log('onEntities');
        // }),
        map((/**
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
    onEntitiesSize(structureId = structureGlobalId) {
        return this.onEntities(structureId)
            .pipe(map((/**
         * @param {?} entities
         * @return {?}
         */
        (entities) => {
            return entities.length;
        })));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSingleEntities(structureId = structureGlobalId) {
        return this.onEntities(structureId)
            .pipe(take(1));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onOriginSize(structureId = structureGlobalId) {
        return this.structureSourceOriginRepository
            .onOrigin(structureId)
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
    onLoading(structureId = structureGlobalId) {
        return this.structureRepository
            .onStructure(structureId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getSource().isLoading())));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onPreparedEntities(structureId = structureGlobalId) {
        return this.structurePreparedItemsRepository.onPreparedItems(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    getPreparedEntities(structureId = structureGlobalId) {
        return this.structurePreparedItemsRepository.getPreparedItems(structureId);
    }
}
SourceWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceWarehouse.ctorParameters = () => [
    { type: StructureReadModelRepository },
    { type: StructurePreparedItemsRepository },
    { type: StructureSourceOriginRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceWarehouse.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    SourceWarehouse.prototype.structurePreparedItemsRepository;
    /**
     * @type {?}
     * @private
     */
    SourceWarehouse.prototype.structureSourceOriginRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDOUcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFOUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHMUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFNbEcsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUUzQixZQUFvQixtQkFBaUQsRUFDMUQsZ0NBQWtFLEVBQ2xFLCtCQUFnRTtRQUZ2RCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQThCO1FBQzFELHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDbEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztJQUMzRSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxjQUEyQixpQkFBaUI7UUFDdkQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pFLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLGNBQTJCLGlCQUFpQjtRQUV0RCxPQUFPLElBQUksQ0FBQyxtQkFBbUI7YUFDekIsV0FBVyxDQUFDLFdBQVcsQ0FBQzthQUN4QixJQUFJO1FBQ0osY0FBYztRQUNkLGdDQUFnQztRQUNoQyxNQUFNO1FBQ04sR0FBRzs7OztRQUFDLENBQUMsU0FBaUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFDLEVBQ25FLG9CQUFvQjs7Ozs7UUFBQyxDQUFDLEtBQXdCLEVBQUUsS0FBd0IsRUFBRSxFQUFFO1lBQzNFLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNsQyxPQUFPLEtBQUssQ0FBQzthQUNiOztnQkFFRyxJQUFJLEdBQUcsSUFBSTtZQUVmLEtBQUssQ0FBQyxPQUFPOzs7OztZQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDOUIsSUFBSSxHQUFHLEtBQUssQ0FBQztvQkFDYixPQUFPO2lCQUNQO1lBQ0YsQ0FBQyxFQUFDLENBQUM7WUFFSCxPQUFPLElBQUksQ0FBQztRQUNiLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxjQUEyQixpQkFBaUI7UUFFMUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQzthQUM3QixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsUUFBMkIsRUFBRSxFQUFFO1lBQ25DLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxjQUEyQixpQkFBaUI7UUFFNUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQzthQUM3QixJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDUixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxjQUEyQixpQkFBaUI7UUFDeEQsT0FBTyxJQUFJLENBQUMsK0JBQStCO2FBQ3JDLFFBQVEsQ0FBQyxXQUFXLENBQUM7YUFDckIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FDNUIsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLGNBQTJCLGlCQUFpQjtRQUNyRCxPQUFPLElBQUksQ0FBQyxtQkFBbUI7YUFDekIsV0FBVyxDQUFDLFdBQVcsQ0FBQzthQUN4QixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsU0FBaUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFDLENBQzdFLENBQUM7SUFDUixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLGNBQTJCLGlCQUFpQjtRQUM5RCxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxjQUEyQixpQkFBaUI7UUFDL0QsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7O1lBaEZELFVBQVU7Ozs7WUFYRiw0QkFBNEI7WUFNNUIsZ0NBQWdDO1lBTGhDLCtCQUErQjs7Ozs7OztJQWEzQiw4Q0FBeUQ7Ozs7O0lBQ2xFLDJEQUEwRTs7Ozs7SUFDMUUsMERBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2dyaWQvY29yZS9kb21haW4tcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkgfSBmcm9tICcuL29yaWdpbi9zdHJ1Y3R1cmUuc291cmNlLW9yaWdpbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vZ3JpZC9jb3JlL2RvbWFpbi1yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkgfSBmcm9tICcuL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VXYXJlaG91c2UgaW1wbGVtZW50cyBXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeTogU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeTogU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Z2V0RW50aXRpZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeS5nZXRTdHJ1Y3R1cmUoc3RydWN0dXJlSWQpLmdldEVudGl0aWVzKCk7XG5cdH1cblxuXHRvbkVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxBcnJheTxJdGVtRW50aXR5Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25TdHJ1Y3R1cmUoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIC8vIHRhcCgoKSA9PiB7XG5cdFx0XHRcdFx0ICAgLy8gICAgY29uc29sZS5sb2coJ29uRW50aXRpZXMnKTtcblx0XHRcdFx0XHQgICAvLyB9KSxcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4gc3RydWN0dXJlLmdldEVudGl0aWVzKCkpLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChlbnRzMTogQXJyYXk8SXRlbUVudGl0eT4sIGVudHMyOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgaWYgKGVudHMxLmxlbmd0aCAhPT0gZW50czIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdCAgIHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0ICAgbGV0IGZsYWcgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHQgICBlbnRzMS5mb3JFYWNoKChlbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgIGlmICghZW50LmVxdWFscyhlbnRzMltpbmRleF0pKSB7XG5cdFx0XHRcdFx0XHRcdFx0ICAgZmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdCAgIHJldHVybjtcblx0XHRcdFx0XHRcdFx0ICAgfVxuXHRcdFx0XHRcdFx0ICAgfSk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBmbGFnO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkVudGl0aWVzU2l6ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkVudGl0aWVzKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGVudGl0aWVzLmxlbmd0aDtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25TaW5nbGVFbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8QXJyYXk8SXRlbUVudGl0eT4+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRW50aXRpZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIHRha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uT3JpZ2luU2l6ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25PcmlnaW4oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcChvcmlnaW4gPT4gb3JpZ2luLmxlbmd0aClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uTG9hZGluZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uU3RydWN0dXJlKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4gc3RydWN0dXJlLmdldFNvdXJjZSgpLmlzTG9hZGluZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25QcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxBcnJheTxPcmlnaW5JdGVtRW50aXR5Pj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5Lm9uUHJlcGFyZWRJdGVtcyhzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRnZXRQcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5LmdldFByZXBhcmVkSXRlbXMoc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==