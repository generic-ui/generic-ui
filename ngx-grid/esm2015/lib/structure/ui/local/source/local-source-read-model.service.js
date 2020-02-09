/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
import { StructureId } from '../../../domain/structure-id';
import { StructureRepository } from '../../../domain/structure/read/structure.repository';
import { StructureSourceOriginRepository } from '../../../domain/source/read/origin/structure.source-origin.repository';
import { StructurePreparedItemsRepository } from '../../../domain/source/read/prepared/structure.prepared-items.repository';
export class LocalSourceReadModelService extends SourceReadModelService {
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
LocalSourceReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSourceReadModelService.ctorParameters = () => [
    { type: StructureId },
    { type: StructureRepository },
    { type: StructurePreparedItemsRepository },
    { type: StructureSourceOriginRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSourceReadModelService.prototype, "onEntities", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSourceReadModelService.prototype, "onEntitiesSize", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSourceReadModelService.prototype, "onSingleEntities", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSourceReadModelService.prototype, "onOriginSize", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSourceReadModelService.prototype, "onLoading", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSourceReadModelService.prototype, "onPreparedEntities", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceReadModelService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zb3VyY2UvbG9jYWwtc291cmNlLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBRXhILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBSTVILE1BQU0sT0FBTywyQkFBNEIsU0FBUSxzQkFBc0I7Ozs7Ozs7SUFFdEUsWUFBb0IsV0FBd0IsRUFDekMsbUJBQXdDLEVBQ3hDLGdDQUFrRSxFQUNsRSwrQkFBZ0U7UUFDbEUsS0FBSyxDQUFDLG1CQUFtQixFQUFFLGdDQUFnQyxFQUFFLCtCQUErQixDQUFDLENBQUM7UUFKM0UsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFLNUMsQ0FBQzs7OztJQUdELFVBQVU7UUFDVCxPQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFHRCxjQUFjO1FBQ2IsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBR0QsZ0JBQWdCO1FBQ2YsT0FBTyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFHRCxZQUFZO1FBQ1gsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBR0QsU0FBUztRQUNSLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUdELGtCQUFrQjtRQUNqQixPQUFPLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7O1lBdENELFVBQVU7Ozs7WUFQRixXQUFXO1lBQ1gsbUJBQW1CO1lBR25CLGdDQUFnQztZQUZoQywrQkFBK0I7O0FBZ0J2QztJQURDLFFBQVE7Ozs0Q0FDSyxVQUFVOzZEQUV2QjtBQUdEO0lBREMsUUFBUTs7OzRDQUNTLFVBQVU7aUVBRTNCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1csVUFBVTttRUFFN0I7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDTyxVQUFVOytEQUV6QjtBQUdEO0lBREMsUUFBUTs7OzRDQUNJLFVBQVU7NERBRXRCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ2EsVUFBVTtxRUFFL0I7Ozs7OztJQW5DVyxrREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU291cmNlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zb3VyY2Uvc291cmNlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9yZWFkL29yaWdpbi9zdHJ1Y3R1cmUuc291cmNlLW9yaWdpbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9yZWFkL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTb3VyY2VSZWFkTW9kZWxTZXJ2aWNlIGV4dGVuZHMgU291cmNlUmVhZE1vZGVsU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHN0cnVjdHVyZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVJlcG9zaXRvcnksXG5cdFx0XHRcdHN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSxcblx0XHRcdFx0c3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeTogU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZVJlcG9zaXRvcnksIHN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5LCBzdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkVudGl0aWVzKCk6IE9ic2VydmFibGU8QXJyYXk8SXRlbUVudGl0eT4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25FbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkVudGl0aWVzU2l6ZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkVudGl0aWVzU2l6ZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNpbmdsZUVudGl0aWVzKCk6IE9ic2VydmFibGU8QXJyYXk8SXRlbUVudGl0eT4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25TaW5nbGVFbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbk9yaWdpblNpemUoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25PcmlnaW5TaXplKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Mb2FkaW5nKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uUHJlcGFyZWRFbnRpdGllcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25QcmVwYXJlZEVudGl0aWVzKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==