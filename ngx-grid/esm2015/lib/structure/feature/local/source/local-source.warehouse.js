/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureSourceWarehouse } from '../../../domain-api/source/structure-source.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../domain-api/read/structure.read-model-repository';
import { StructureSourceOriginRepository } from '../../../domain-api/source/origin/structure.source-origin.repository';
import { StructurePreparedItemsRepository } from '../../../domain-api/source/prepared/structure.prepared-items.repository';
export class LocalSourceWarehouse extends StructureSourceWarehouse {
    /**
     * @param {?} structureId
     * @param {?} structureRepository
     * @param {?} structurePreparedItemsRepository
     * @param {?} structureSourceOriginRepository
     */
    constructor(structureId, structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) {
        super(structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    onEntities() {
        return super.onEntities(this.structureId);
    }
    /**
     * @return {?}
     */
    onEntitiesSize() {
        return super.onEntitiesSize(this.structureId);
    }
    /**
     * @return {?}
     */
    onSingleEntities() {
        return super.onSingleEntities(this.structureId);
    }
    /**
     * @return {?}
     */
    onOriginSize() {
        return super.onOriginSize(this.structureId);
    }
    /**
     * @return {?}
     */
    onLoading() {
        return super.onLoading(this.structureId);
    }
    /**
     * @return {?}
     */
    onPreparedEntities() {
        return super.onPreparedEntities(this.structureId);
    }
}
LocalSourceWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSourceWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: StructureReadModelRepository },
    { type: StructurePreparedItemsRepository },
    { type: StructureSourceOriginRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSourceWarehouse.prototype, "onEntities", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSourceWarehouse.prototype, "onEntitiesSize", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSourceWarehouse.prototype, "onSingleEntities", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSourceWarehouse.prototype, "onOriginSize", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSourceWarehouse.prototype, "onLoading", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSourceWarehouse.prototype, "onPreparedEntities", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3NvdXJjZS9sb2NhbC1zb3VyY2Uud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDeEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFFdkgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFJM0gsTUFBTSxPQUFPLG9CQUFxQixTQUFRLHdCQUF3Qjs7Ozs7OztJQUVqRSxZQUFvQixXQUF3QixFQUN6QyxtQkFBaUQsRUFDakQsZ0NBQWtFLEVBQ2xFLCtCQUFnRTtRQUNsRSxLQUFLLENBQUMsbUJBQW1CLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLENBQUMsQ0FBQztRQUozRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUs1QyxDQUFDOzs7O0lBR0QsVUFBVTtRQUNULE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUdELGNBQWM7UUFDYixPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFHRCxnQkFBZ0I7UUFDZixPQUFPLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUdELFlBQVk7UUFDWCxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFHRCxTQUFTO1FBQ1IsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBR0Qsa0JBQWtCO1FBQ2pCLE9BQU8sS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7WUF0Q0QsVUFBVTs7OztZQVBGLFdBQVc7WUFDWCw0QkFBNEI7WUFHNUIsZ0NBQWdDO1lBRmhDLCtCQUErQjs7QUFnQnZDO0lBREMsUUFBUTs7OzRDQUNLLFVBQVU7c0RBRXZCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1MsVUFBVTswREFFM0I7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDVyxVQUFVOzREQUU3QjtBQUdEO0lBREMsUUFBUTs7OzRDQUNPLFVBQVU7d0RBRXpCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ0ksVUFBVTtxREFFdEI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDYSxVQUFVOzhEQUUvQjs7Ozs7O0lBbkNXLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3NvdXJjZS9zdHJ1Y3R1cmUtc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3NvdXJjZS9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc291cmNlL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTb3VyY2VXYXJlaG91c2UgZXh0ZW5kcyBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRcdFx0XHRzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeTogU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnksXG5cdFx0XHRcdHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnk6IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVSZXBvc2l0b3J5LCBzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSwgc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25FbnRpdGllcygpOiBPYnNlcnZhYmxlPEFycmF5PEl0ZW1FbnRpdHk+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uRW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25FbnRpdGllc1NpemUoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25FbnRpdGllc1NpemUodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TaW5nbGVFbnRpdGllcygpOiBPYnNlcnZhYmxlPEFycmF5PEl0ZW1FbnRpdHk+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU2luZ2xlRW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25PcmlnaW5TaXplKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uT3JpZ2luU2l6ZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkxvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uTG9hZGluZyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblByZXBhcmVkRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUHJlcGFyZWRFbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=