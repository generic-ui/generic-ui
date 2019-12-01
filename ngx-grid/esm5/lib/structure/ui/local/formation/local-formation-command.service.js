/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { FormationCommandService } from '../../../app/formation/formation-command.service';
import { StructureId } from '../../../domain/structure-id';
import { FormationDispatcher } from '../../../domain/formation/command/formation.dispatcher';
var LocalFormationCommandService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalFormationCommandService, _super);
    function LocalFormationCommandService(structureId, formationDispatcher) {
        var _this = _super.call(this, formationDispatcher) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalFormationCommandService.prototype.setDefault = /**
     * @return {?}
     */
    function () {
        _super.prototype.setDefaultFormation.call(this, this.structureId);
    };
    /**
     * @param {?} selectedRow
     * @return {?}
     */
    LocalFormationCommandService.prototype.toggleSelectedRow = /**
     * @param {?} selectedRow
     * @return {?}
     */
    function (selectedRow) {
        _super.prototype.toggleSelectedRow.call(this, selectedRow, this.structureId);
    };
    LocalFormationCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalFormationCommandService.ctorParameters = function () { return [
        { type: StructureId },
        { type: FormationDispatcher }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalFormationCommandService.prototype, "toggleSelectedRow", null);
    return LocalFormationCommandService;
}(FormationCommandService));
export { LocalFormationCommandService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationCommandService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9mb3JtYXRpb24vbG9jYWwtZm9ybWF0aW9uLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUc3RjtJQUNrRCx3REFBdUI7SUFFeEUsc0NBQW9CLFdBQXdCLEVBQ3pDLG1CQUF3QztRQUQzQyxZQUVDLGtCQUFNLG1CQUFtQixDQUFDLFNBQzFCO1FBSG1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUc1QyxDQUFDOzs7O0lBRUQsaURBQVU7OztJQUFWO1FBQ0MsaUJBQU0sbUJBQW1CLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBR0Qsd0RBQWlCOzs7O0lBQWpCLFVBQWtCLFdBQW1CO1FBQ3BDLGlCQUFNLGlCQUFpQixZQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Z0JBZkQsVUFBVTs7OztnQkFKRixXQUFXO2dCQUNYLG1CQUFtQjs7SUFnQjNCO1FBREMsUUFBUTs7Ozt5RUFHUjtJQUVGLG1DQUFDO0NBQUEsQUFqQkQsQ0FDa0QsdUJBQXVCLEdBZ0J4RTtTQWhCWSw0QkFBNEI7Ozs7OztJQUU1QixtREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hcHAvZm9ybWF0aW9uL2Zvcm1hdGlvbi1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEZvcm1hdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZm9ybWF0aW9uL2NvbW1hbmQvZm9ybWF0aW9uLmRpc3BhdGNoZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbEZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlIGV4dGVuZHMgRm9ybWF0aW9uQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRmb3JtYXRpb25EaXNwYXRjaGVyOiBGb3JtYXRpb25EaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoZm9ybWF0aW9uRGlzcGF0Y2hlcik7XG5cdH1cblxuXHRzZXREZWZhdWx0KCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldERlZmF1bHRGb3JtYXRpb24odGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0dG9nZ2xlU2VsZWN0ZWRSb3coc2VsZWN0ZWRSb3c6IHN0cmluZyk6IHZvaWQge1xuXHRcdHN1cGVyLnRvZ2dsZVNlbGVjdGVkUm93KHNlbGVjdGVkUm93LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=