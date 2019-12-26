/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureReadModelService } from '../../../ui-api/structure/structure-read-model.service';
import { StructureId } from '../../../domain/structure-id';
import { StructureRepository } from '../../../domain/structure/read/structure.repository';
export class LocalStructureReadModelService extends StructureReadModelService {
    /**
     * @param {?} structureId
     * @param {?} structureRepository
     */
    constructor(structureId, structureRepository) {
        super(structureRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    onStructure() {
        return super.onStructure(this.structureId);
    }
    /**
     * @return {?}
     */
    onVerticalScrollEnabled() {
        return super.onVerticalScrollEnabled(this.structureId);
    }
}
LocalStructureReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureReadModelService.ctorParameters = () => [
    { type: StructureId },
    { type: StructureRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalStructureReadModelService.prototype, "onStructure", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalStructureReadModelService.prototype, "onVerticalScrollEnabled", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureReadModelService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zdHJ1Y3R1cmUvbG9jYWwtc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbkcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBSzFGLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSx5QkFBeUI7Ozs7O0lBRTVFLFlBQW9CLFdBQXdCLEVBQ3pDLG1CQUF3QztRQUMxQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUZSLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRzVDLENBQUM7Ozs7SUFHRCxXQUFXO1FBQ1YsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBR0QsdUJBQXVCO1FBQ3RCLE9BQU8sS0FBSyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN2RCxDQUFDOzs7WUFoQkQsVUFBVTs7OztZQUxGLFdBQVc7WUFDWCxtQkFBbUI7O0FBYTNCO0lBREMsUUFBUTs7OzRDQUNNLFVBQVU7aUVBRXhCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ2tCLFVBQVU7NkVBRXBDOzs7Ozs7SUFiVyxxREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc3RydWN0dXJlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlIGV4dGVuZHMgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHN0cnVjdHVyZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVSZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblN0cnVjdHVyZSgpOiBPYnNlcnZhYmxlPFN0cnVjdHVyZT4ge1xuXHRcdHJldHVybiBzdXBlci5vblN0cnVjdHVyZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0fVxuXG59XG4iXX0=