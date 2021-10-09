/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureReadModelRepository } from '../../../grid/core/api/read/structure.read-model-repository';
import { hermesDistinctUntilChanged, hermesMap, hermesTake } from '@generic-ui/hermes';
import { SourceWarehouse } from '../api/source.warehouse';
import { StructurePreparedItemsArchive } from '../domain/prepared/structure.prepared-items.archive';
import { StructureSourceOriginArchive } from '../domain/origin/structure.source-origin.archive';
export class SourceDomainWarehouse extends SourceWarehouse {
    /**
     * @param {?} structureRepository
     * @param {?} structurePreparedItemsRepository
     * @param {?} structureSourceOriginRepository
     */
    constructor(structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) {
        super();
        this.structureRepository = structureRepository;
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @deprecated
     * @param {?} structureId
     * @return {?}
     */
    getEntities(structureId) {
        return this.structureRepository.getStructure(structureId).getEntities();
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onEntities(structureId) {
        return this.structureRepository
            .on(structureId)
            .pipe(hermesMap((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getEntities())), hermesDistinctUntilChanged((/**
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
     * @param {?} structureId
     * @return {?}
     */
    onEntitiesSize(structureId) {
        return this.onEntities(structureId)
            .pipe(hermesMap((/**
         * @param {?} entities
         * @return {?}
         */
        (entities) => {
            return entities.length;
        })));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onceEntities(structureId) {
        return this.onEntities(structureId)
            .pipe(hermesTake(1));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onOriginSize(structureId) {
        return this.structureSourceOriginRepository
            .on(structureId)
            .pipe(hermesMap((/**
         * @param {?} origin
         * @return {?}
         */
        origin => origin.length)));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onLoading(structureId) {
        return this.structureRepository
            .on(structureId)
            .pipe(hermesMap((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getSource().isLoading())));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onPreparedEntities(structureId) {
        return this.structurePreparedItemsRepository.on(structureId);
    }
    /**
     * @deprecated
     * @param {?} structureId
     * @return {?}
     */
    getPreparedEntities(structureId) {
        return this.structurePreparedItemsRepository.getPreparedItems(structureId);
    }
}
SourceDomainWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceDomainWarehouse.ctorParameters = () => [
    { type: StructureReadModelRepository },
    { type: StructurePreparedItemsArchive },
    { type: StructureSourceOriginArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceDomainWarehouse.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    SourceDomainWarehouse.prototype.structurePreparedItemsRepository;
    /**
     * @type {?}
     * @private
     */
    SourceDomainWarehouse.prototype.structureSourceOriginRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4tcmVhZC9zb3VyY2UuZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUszRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsU0FBUyxFQUFvQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJaEcsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGVBQWU7Ozs7OztJQUV6RCxZQUE2QixtQkFBaUQsRUFDMUQsZ0NBQStELEVBQy9ELCtCQUE2RDtRQUNoRixLQUFLLEVBQUUsQ0FBQztRQUhvQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQThCO1FBQzFELHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBK0I7UUFDL0Qsb0NBQStCLEdBQS9CLCtCQUErQixDQUE4QjtJQUVqRixDQUFDOzs7Ozs7SUFLRCxXQUFXLENBQUMsV0FBd0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pFLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLFdBQXdCO1FBRWxDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ2YsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxDQUFDLFNBQWlDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBQyxFQUN6RSwwQkFBMEI7Ozs7O1FBQUMsQ0FBQyxLQUFnQyxFQUFFLEtBQWdDLEVBQUUsRUFBRTtZQUNqRyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDbEMsT0FBTyxLQUFLLENBQUM7YUFDYjs7Z0JBRUcsSUFBSSxHQUFHLElBQUk7WUFFZixLQUFLLENBQUMsT0FBTzs7Ozs7WUFBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLElBQUksR0FBRyxLQUFLLENBQUM7b0JBQ2IsT0FBTztpQkFDUDtZQUNGLENBQUMsRUFBQyxDQUFDO1lBRUgsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBd0I7UUFFdEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQzthQUM3QixJQUFJLENBQ0osU0FBUzs7OztRQUFDLENBQUMsUUFBbUMsRUFBRSxFQUFFO1lBQ2pELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsV0FBd0I7UUFFcEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQzthQUM3QixJQUFJLENBQ0osVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUNiLENBQUM7SUFDUixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxXQUF3QjtRQUNwQyxPQUFPLElBQUksQ0FBQywrQkFBK0I7YUFDckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUNmLElBQUksQ0FDSixTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQ2xDLENBQUM7SUFDUixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxXQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxtQkFBbUI7YUFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUNmLElBQUksQ0FDSixTQUFTOzs7O1FBQUMsQ0FBQyxTQUFpQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FDbkYsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsV0FBd0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUtELG1CQUFtQixDQUFDLFdBQXdCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLGdDQUFnQyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVFLENBQUM7OztZQXBGRCxVQUFVOzs7O1lBWEYsNEJBQTRCO1lBTzVCLDZCQUE2QjtZQUM3Qiw0QkFBNEI7Ozs7Ozs7SUFNeEIsb0RBQWtFOzs7OztJQUMzRSxpRUFBZ0Y7Ozs7O0lBQ2hGLGdFQUE4RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi8uLi9ncmlkL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgaGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQsIGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSwgaGVybWVzVGFrZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5BcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL29yaWdpbi9zdHJ1Y3R1cmUuc291cmNlLW9yaWdpbi5hcmNoaXZlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlRG9tYWluV2FyZWhvdXNlIGV4dGVuZHMgU291cmNlV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnk6IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnk6IFN0cnVjdHVyZVNvdXJjZU9yaWdpbkFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRnZXRFbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBSZWFkb25seUFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5LmdldFN0cnVjdHVyZShzdHJ1Y3R1cmVJZCkuZ2V0RW50aXRpZXMoKTtcblx0fVxuXG5cdG9uRW50aXRpZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PEl0ZW1FbnRpdHk+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHN0cnVjdHVyZS5nZXRFbnRpdGllcygpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCgoZW50czE6IFJlYWRvbmx5QXJyYXk8SXRlbUVudGl0eT4sIGVudHMyOiBSZWFkb25seUFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICBpZiAoZW50czEubGVuZ3RoICE9PSBlbnRzMi5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0ICAgfVxuXG5cdFx0XHRcdFx0XHQgICBsZXQgZmxhZyA9IHRydWU7XG5cblx0XHRcdFx0XHRcdCAgIGVudHMxLmZvckVhY2goKGVudCwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0ICAgaWYgKCFlbnQuZXF1YWxzKGVudHMyW2luZGV4XSkpIHtcblx0XHRcdFx0XHRcdFx0XHQgICBmbGFnID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuO1xuXHRcdFx0XHRcdFx0XHQgICB9XG5cdFx0XHRcdFx0XHQgICB9KTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGZsYWc7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uRW50aXRpZXNTaXplKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkVudGl0aWVzKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGVudGl0aWVzOiBSZWFkb25seUFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gZW50aXRpZXMubGVuZ3RoO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbmNlRW50aXRpZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PEl0ZW1FbnRpdHk+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkVudGl0aWVzKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNUYWtlKDEpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbk9yaWdpblNpemUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKG9yaWdpbiA9PiBvcmlnaW4ubGVuZ3RoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Mb2FkaW5nKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4gc3RydWN0dXJlLmdldFNvdXJjZSgpLmlzTG9hZGluZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25QcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxPcmlnaW5JdGVtRW50aXR5Pj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Z2V0UHJlcGFyZWRFbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBSZWFkb25seUFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeS5nZXRQcmVwYXJlZEl0ZW1zKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=