/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { StructureReadModelRepository } from '../structure/structure.read-model-repository';
export class PagingRepository {
    /**
     * @param {?} structureRepository
     */
    constructor(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    on(structureId) {
        return this.structureRepository
            .onStructure(structureId)
            .pipe(filter((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getId().toString() === structureId.toString())), map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getPaging())));
    }
}
PagingRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingRepository.ctorParameters = () => [
    { type: StructureReadModelRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingRepository.prototype.structureRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcmVhZC9wYWdpbmcvcGFnaW5nLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQU81RixNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRTVCLFlBQW9CLG1CQUFpRDtRQUFqRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQThCO0lBQ3JFLENBQUM7Ozs7O0lBRUQsRUFBRSxDQUFDLFdBQXdCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxTQUFpQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQ3RHLEdBQUc7Ozs7UUFBQyxDQUFDLFNBQWlDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBQyxDQUNqRSxDQUFDO0lBQ1IsQ0FBQzs7O1lBZEQsVUFBVTs7OztZQU5GLDRCQUE0Qjs7Ozs7OztJQVN4QiwrQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi9zdHJ1Y3R1cmUvc3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi9wYWdpbmcnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFBhZ2luZz4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25TdHJ1Y3R1cmUoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiBzdHJ1Y3R1cmUuZ2V0SWQoKS50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4gc3RydWN0dXJlLmdldFBhZ2luZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==