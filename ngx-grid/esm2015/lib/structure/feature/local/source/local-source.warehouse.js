/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureSourceWarehouse } from '../../../feature-api/source/structure-source.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../feature-api/read/structure.read-model-repository';
import { StructureSourceOriginRepository } from '../../../feature-api/source/origin/structure.source-origin.repository';
import { StructurePreparedItemsRepository } from '../../../feature-api/source/prepared/structure.prepared-items.repository';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3NvdXJjZS9sb2NhbC1zb3VyY2Uud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDekcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFFeEgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFJNUgsTUFBTSxPQUFPLG9CQUFxQixTQUFRLHdCQUF3Qjs7Ozs7OztJQUVqRSxZQUFvQixXQUF3QixFQUN6QyxtQkFBaUQsRUFDakQsZ0NBQWtFLEVBQ2xFLCtCQUFnRTtRQUNsRSxLQUFLLENBQUMsbUJBQW1CLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLENBQUMsQ0FBQztRQUozRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUs1QyxDQUFDOzs7O0lBR0QsVUFBVTtRQUNULE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUdELGNBQWM7UUFDYixPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFHRCxnQkFBZ0I7UUFDZixPQUFPLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUdELFlBQVk7UUFDWCxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFHRCxTQUFTO1FBQ1IsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBR0Qsa0JBQWtCO1FBQ2pCLE9BQU8sS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7WUF0Q0QsVUFBVTs7OztZQVBGLFdBQVc7WUFDWCw0QkFBNEI7WUFHNUIsZ0NBQWdDO1lBRmhDLCtCQUErQjs7QUFnQnZDO0lBREMsUUFBUTs7OzRDQUNLLFVBQVU7c0RBRXZCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1MsVUFBVTswREFFM0I7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDVyxVQUFVOzREQUU3QjtBQUdEO0lBREMsUUFBUTs7OzRDQUNPLFVBQVU7d0RBRXpCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ0ksVUFBVTtxREFFdEI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDYSxVQUFVOzhEQUUvQjs7Ozs7O0lBbkNXLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS9zb3VyY2Uvc3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3NvdXJjZS9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3NvdXJjZS9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU291cmNlV2FyZWhvdXNlIGV4dGVuZHMgU3RydWN0dXJlU291cmNlV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0c3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnk6IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5LFxuXHRcdFx0XHRzdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlUmVwb3NpdG9yeSwgc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnksIHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxBcnJheTxJdGVtRW50aXR5Pj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkVudGl0aWVzKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uRW50aXRpZXNTaXplKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uRW50aXRpZXNTaXplKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2luZ2xlRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxBcnJheTxJdGVtRW50aXR5Pj4ge1xuXHRcdHJldHVybiBzdXBlci5vblNpbmdsZUVudGl0aWVzKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uT3JpZ2luU2l6ZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbk9yaWdpblNpemUodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Mb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkxvYWRpbmcodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25QcmVwYXJlZEVudGl0aWVzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5vblByZXBhcmVkRW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19