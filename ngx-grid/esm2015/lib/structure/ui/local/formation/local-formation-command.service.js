/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { FormationCommandService } from '../../../ui-api/formation/formation-command.service';
import { StructureId } from '../../../domain/structure-id';
import { FormationDispatcher } from '../../../domain/formation/command/formation.dispatcher';
export class LocalFormationCommandService extends FormationCommandService {
    /**
     * @param {?} structureId
     * @param {?} formationDispatcher
     */
    constructor(structureId, formationDispatcher) {
        super(formationDispatcher);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    setDefault() {
        super.setDefaultFormation(this.structureId);
    }
    /**
     * @param {?} selectedRow
     * @return {?}
     */
    toggleSelectedRow(selectedRow) {
        super.toggleSelectedRow(selectedRow, this.structureId);
    }
}
LocalFormationCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalFormationCommandService.ctorParameters = () => [
    { type: StructureId },
    { type: FormationDispatcher }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalFormationCommandService.prototype, "toggleSelectedRow", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationCommandService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9mb3JtYXRpb24vbG9jYWwtZm9ybWF0aW9uLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUk3RixNQUFNLE9BQU8sNEJBQTZCLFNBQVEsdUJBQXVCOzs7OztJQUV4RSxZQUFvQixXQUF3QixFQUN6QyxtQkFBd0M7UUFDMUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFGUixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUc1QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFHRCxpQkFBaUIsQ0FBQyxXQUFtQjtRQUNwQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7WUFmRCxVQUFVOzs7O1lBSkYsV0FBVztZQUNYLG1CQUFtQjs7QUFnQjNCO0lBREMsUUFBUTs7OztxRUFHUjs7Ozs7O0lBWlcsbURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL2Zvcm1hdGlvbi5kaXNwYXRjaGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxGb3JtYXRpb25Db21tYW5kU2VydmljZSBleHRlbmRzIEZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Zm9ybWF0aW9uRGlzcGF0Y2hlcjogRm9ybWF0aW9uRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKGZvcm1hdGlvbkRpc3BhdGNoZXIpO1xuXHR9XG5cblx0c2V0RGVmYXVsdCgpOiB2b2lkIHtcblx0XHRzdXBlci5zZXREZWZhdWx0Rm9ybWF0aW9uKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHRvZ2dsZVNlbGVjdGVkUm93KHNlbGVjdGVkUm93OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRzdXBlci50b2dnbGVTZWxlY3RlZFJvdyhzZWxlY3RlZFJvdywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19