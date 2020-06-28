/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../domain/structure.id';
import { FormationWarehouse } from '../../../../../structure/source/domain-api/formation/formation.warehouse';
import { RowSelectedRepository } from '../../../../../structure/source/domain-api/formation/row-selected/row-selected.repository';
import { RowSelectionModeRepository } from '../../../../../structure/source/domain-api/formation/mode/row-selection-mode.repository';
import { SourceWarehouse } from '../../../../../structure/source/domain-api/source.warehouse';
export class LocalFormationWarehouse extends FormationWarehouse {
    /**
     * @param {?} structureId
     * @param {?} rowSelectedArchive
     * @param {?} rowSelectionModeRepository
     * @param {?} sourceWarehouse
     */
    constructor(structureId, rowSelectedArchive, rowSelectionModeRepository, sourceWarehouse) {
        super(rowSelectedArchive, rowSelectionModeRepository, sourceWarehouse);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    onRowSelectedReadModel() {
        return super.onRowSelectedReadModel(this.structureId);
    }
}
LocalFormationWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalFormationWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: RowSelectedRepository },
    { type: RowSelectionModeRepository },
    { type: SourceWarehouse }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalFormationWarehouse.prototype, "onRowSelectedReadModel", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL2Zvcm1hdGlvbi9sb2NhbC1mb3JtYXRpb24ud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDOUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkZBQTJGLENBQUM7QUFFbEksT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFDckksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBSTlGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxrQkFBa0I7Ozs7Ozs7SUFFOUQsWUFBb0IsV0FBd0IsRUFDekMsa0JBQXlDLEVBQ3pDLDBCQUFzRCxFQUN0RCxlQUFnQztRQUNsQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsMEJBQTBCLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFKcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFLNUMsQ0FBQzs7OztJQUdELHNCQUFzQjtRQUNyQixPQUFPLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBYkQsVUFBVTs7OztZQVJGLFdBQVc7WUFFWCxxQkFBcUI7WUFFckIsMEJBQTBCO1lBQzFCLGVBQWU7O0FBY3ZCO0lBREMsUUFBUTs7OzRDQUNpQixVQUFVO3FFQUVuQzs7Ozs7O0lBVlcsOENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL3Jvdy1zZWxlY3RlZC5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9tb2RlL3Jvdy1zZWxlY3Rpb24tbW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9zb3VyY2Uud2FyZWhvdXNlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxGb3JtYXRpb25XYXJlaG91c2UgZXh0ZW5kcyBGb3JtYXRpb25XYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRyb3dTZWxlY3RlZEFyY2hpdmU6IFJvd1NlbGVjdGVkUmVwb3NpdG9yeSxcblx0XHRcdFx0cm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnk6IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKHJvd1NlbGVjdGVkQXJjaGl2ZSwgcm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnksIHNvdXJjZVdhcmVob3VzZSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Sb3dTZWxlY3RlZFJlYWRNb2RlbCgpOiBPYnNlcnZhYmxlPFJvd1NlbGVjdGVkUmVhZE1vZGVsPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUm93U2VsZWN0ZWRSZWFkTW9kZWwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==