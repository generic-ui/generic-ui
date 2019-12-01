/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureQueryService } from '../../../app/structure/structure-query.service';
import { StructureId } from '../../../domain/structure-id';
import { StructureRepository } from '../../../domain/structure/query/structure.repository';
export class LocalStructureQueryService extends StructureQueryService {
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
    select() {
        return super.select(this.structureId);
    }
    /**
     * @return {?}
     */
    selectVerticalScrollEnabled() {
        return super.selectVerticalScrollEnabled(this.structureId);
    }
}
LocalStructureQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureQueryService.ctorParameters = () => [
    { type: StructureId },
    { type: StructureRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalStructureQueryService.prototype, "select", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalStructureQueryService.prototype, "selectVerticalScrollEnabled", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureQueryService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvbG9jYWwvc3RydWN0dXJlL2xvY2FsLXN0cnVjdHVyZS1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFLM0YsTUFBTSxPQUFPLDBCQUEyQixTQUFRLHFCQUFxQjs7Ozs7SUFFcEUsWUFBb0IsV0FBd0IsRUFDekMsbUJBQXdDO1FBQzFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRlIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFHNUMsQ0FBQzs7OztJQUdELE1BQU07UUFDTCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFHRCwyQkFBMkI7UUFDMUIsT0FBTyxLQUFLLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzNELENBQUM7OztZQWhCRCxVQUFVOzs7O1lBTEYsV0FBVztZQUNYLG1CQUFtQjs7QUFhM0I7SUFEQyxRQUFROzs7NENBQ0MsVUFBVTt3REFFbkI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDc0IsVUFBVTs2RUFFeEM7Ozs7OztJQWJXLGlEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWVyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hcHAvc3RydWN0dXJlL3N0cnVjdHVyZS1xdWVyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9xdWVyeS9zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L3N0cnVjdHVyZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RydWN0dXJlUXVlcnlTZXJ2aWNlIGV4dGVuZHMgU3RydWN0dXJlUXVlcnlTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZVJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlbGVjdCgpOiBPYnNlcnZhYmxlPFN0cnVjdHVyZT4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3QodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VsZWN0VmVydGljYWxTY3JvbGxFbmFibGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3RWZXJ0aWNhbFNjcm9sbEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0fVxuXG59XG4iXX0=