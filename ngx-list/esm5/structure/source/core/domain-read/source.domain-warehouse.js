/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { StructureReadModelRepository } from '../../../grid/core/api/read/structure.read-model-repository';
import { hermesDistinctUntilChanged, hermesMap, hermesTake } from '@generic-ui/hermes';
import { SourceWarehouse } from '../api/source.warehouse';
import { StructurePreparedItemsArchive } from '../domain/prepared/structure.prepared-items.archive';
import { StructureSourceOriginArchive } from '../domain/origin/structure.source-origin.archive';
var SourceDomainWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(SourceDomainWarehouse, _super);
    function SourceDomainWarehouse(structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) {
        var _this = _super.call(this) || this;
        _this.structureRepository = structureRepository;
        _this.structurePreparedItemsRepository = structurePreparedItemsRepository;
        _this.structureSourceOriginRepository = structureSourceOriginRepository;
        return _this;
    }
    /**
     * @deprecated
     */
    /**
     * @deprecated
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainWarehouse.prototype.getEntities = /**
     * @deprecated
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureRepository.getStructure(structureId).getEntities();
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainWarehouse.prototype.onEntities = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureRepository
            .on(structureId)
            .pipe(hermesMap((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getEntities(); })), hermesDistinctUntilChanged((/**
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
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainWarehouse.prototype.onEntitiesSize = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onEntities(structureId)
            .pipe(hermesMap((/**
         * @param {?} entities
         * @return {?}
         */
        function (entities) {
            return entities.length;
        })));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainWarehouse.prototype.onceEntities = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onEntities(structureId)
            .pipe(hermesTake(1));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainWarehouse.prototype.onOriginSize = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureSourceOriginRepository
            .on(structureId)
            .pipe(hermesMap((/**
         * @param {?} origin
         * @return {?}
         */
        function (origin) { return origin.length; })));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainWarehouse.prototype.onLoading = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureRepository
            .on(structureId)
            .pipe(hermesMap((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getSource().isLoading(); })));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainWarehouse.prototype.onPreparedEntities = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structurePreparedItemsRepository.on(structureId);
    };
    /**
     * @deprecated
     */
    /**
     * @deprecated
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainWarehouse.prototype.getPreparedEntities = /**
     * @deprecated
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structurePreparedItemsRepository.getPreparedItems(structureId);
    };
    SourceDomainWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceDomainWarehouse.ctorParameters = function () { return [
        { type: StructureReadModelRepository },
        { type: StructurePreparedItemsArchive },
        { type: StructureSourceOriginArchive }
    ]; };
    return SourceDomainWarehouse;
}(SourceWarehouse));
export { SourceDomainWarehouse };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4tcmVhZC9zb3VyY2UuZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFLM0csT0FBTyxFQUFFLDBCQUEwQixFQUFFLFNBQVMsRUFBb0IsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR2hHO0lBQzJDLGlEQUFlO0lBRXpELCtCQUE2QixtQkFBaUQsRUFDMUQsZ0NBQStELEVBQy9ELCtCQUE2RDtRQUZqRixZQUdDLGlCQUFPLFNBQ1A7UUFKNEIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUE4QjtRQUMxRCxzQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQStCO1FBQy9ELHFDQUErQixHQUEvQiwrQkFBK0IsQ0FBOEI7O0lBRWpGLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsMkNBQVc7Ozs7O0lBQVgsVUFBWSxXQUF3QjtRQUNuQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsV0FBd0I7UUFFbEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CO2FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDZixJQUFJLENBQ0osU0FBUzs7OztRQUFDLFVBQUMsU0FBaUMsSUFBSyxPQUFBLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBdkIsQ0FBdUIsRUFBQyxFQUN6RSwwQkFBMEI7Ozs7O1FBQUMsVUFBQyxLQUFnQyxFQUFFLEtBQWdDO1lBQzdGLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNsQyxPQUFPLEtBQUssQ0FBQzthQUNiOztnQkFFRyxJQUFJLEdBQUcsSUFBSTtZQUVmLEtBQUssQ0FBQyxPQUFPOzs7OztZQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7Z0JBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUM5QixJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUNiLE9BQU87aUJBQ1A7WUFDRixDQUFDLEVBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsOENBQWM7Ozs7SUFBZCxVQUFlLFdBQXdCO1FBRXRDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7YUFDN0IsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxVQUFDLFFBQW1DO1lBQzdDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCw0Q0FBWTs7OztJQUFaLFVBQWEsV0FBd0I7UUFFcEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQzthQUM3QixJQUFJLENBQ0osVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUNiLENBQUM7SUFDUixDQUFDOzs7OztJQUVELDRDQUFZOzs7O0lBQVosVUFBYSxXQUF3QjtRQUNwQyxPQUFPLElBQUksQ0FBQywrQkFBK0I7YUFDckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUNmLElBQUksQ0FDSixTQUFTOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxFQUFiLENBQWEsRUFBQyxDQUNsQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCx5Q0FBUzs7OztJQUFULFVBQVUsV0FBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsbUJBQW1CO2FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDZixJQUFJLENBQ0osU0FBUzs7OztRQUFDLFVBQUMsU0FBaUMsSUFBSyxPQUFBLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBakMsQ0FBaUMsRUFBQyxDQUNuRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxrREFBa0I7Ozs7SUFBbEIsVUFBbUIsV0FBd0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsbURBQW1COzs7OztJQUFuQixVQUFvQixXQUF3QjtRQUMzQyxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RSxDQUFDOztnQkFwRkQsVUFBVTs7OztnQkFYRiw0QkFBNEI7Z0JBTzVCLDZCQUE2QjtnQkFDN0IsNEJBQTRCOztJQXlGckMsNEJBQUM7Q0FBQSxBQXRGRCxDQUMyQyxlQUFlLEdBcUZ6RDtTQXJGWSxxQkFBcUI7Ozs7OztJQUVyQixvREFBa0U7Ozs7O0lBQzNFLGlFQUFnRjs7Ozs7SUFDaEYsZ0VBQThFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCwgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlLCBoZXJtZXNUYWtlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpbkFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLmFyY2hpdmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VEb21haW5XYXJlaG91c2UgZXh0ZW5kcyBTb3VyY2VXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeTogU3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeTogU3RydWN0dXJlU291cmNlT3JpZ2luQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHQvKipcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGdldEVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8SXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnkuZ2V0U3RydWN0dXJlKHN0cnVjdHVyZUlkKS5nZXRFbnRpdGllcygpO1xuXHR9XG5cblx0b25FbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8SXRlbUVudGl0eT4+IHtcblxuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4gc3RydWN0dXJlLmdldEVudGl0aWVzKCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkKChlbnRzMTogUmVhZG9ubHlBcnJheTxJdGVtRW50aXR5PiwgZW50czI6IFJlYWRvbmx5QXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdCAgIGlmIChlbnRzMS5sZW5ndGggIT09IGVudHMyLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHQgICByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdCAgIGxldCBmbGFnID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0ICAgZW50czEuZm9yRWFjaCgoZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHQgICBpZiAoIWVudC5lcXVhbHMoZW50czJbaW5kZXhdKSkge1xuXHRcdFx0XHRcdFx0XHRcdCAgIGZsYWcgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm47XG5cdFx0XHRcdFx0XHRcdCAgIH1cblx0XHRcdFx0XHRcdCAgIH0pO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gZmxhZztcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25FbnRpdGllc1NpemUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRW50aXRpZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoZW50aXRpZXM6IFJlYWRvbmx5QXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBlbnRpdGllcy5sZW5ndGg7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uY2VFbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8SXRlbUVudGl0eT4+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRW50aXRpZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc1Rha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uT3JpZ2luU2l6ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAob3JpZ2luID0+IG9yaWdpbi5sZW5ndGgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkxvYWRpbmcoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiBzdHJ1Y3R1cmUuZ2V0U291cmNlKCkuaXNMb2FkaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRnZXRQcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5LmdldFByZXBhcmVkSXRlbXMoc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==