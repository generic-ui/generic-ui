/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../domain/structure-id';
import { FormationQueryService } from '../../../app/formation/formation-query.service';
import { FormationRepository } from '../../../domain/formation/query/formation-repository';
var LocalFormationQueryService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalFormationQueryService, _super);
    function LocalFormationQueryService(structureId, formationRepository) {
        var _this = _super.call(this, formationRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalFormationQueryService.prototype.selectSelectedRows = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectSelectedRows.call(this, this.structureId);
    };
    LocalFormationQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalFormationQueryService.ctorParameters = function () { return [
        { type: StructureId },
        { type: FormationRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalFormationQueryService.prototype, "selectSelectedRows", null);
    return LocalFormationQueryService;
}(FormationQueryService));
export { LocalFormationQueryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationQueryService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvbG9jYWwvZm9ybWF0aW9uL2xvY2FsLWZvcm1hdGlvbi1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFJM0Y7SUFDZ0Qsc0RBQXFCO0lBRXBFLG9DQUFvQixXQUF3QixFQUN6QyxtQkFBd0M7UUFEM0MsWUFFQyxrQkFBTSxtQkFBbUIsQ0FBQyxTQUMxQjtRQUhtQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFHNUMsQ0FBQzs7OztJQUdELHVEQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxpQkFBTSxrQkFBa0IsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBWEQsVUFBVTs7OztnQkFORixXQUFXO2dCQUVYLG1CQUFtQjs7SUFhM0I7UUFEQyxRQUFROzs7Z0RBQ2EsVUFBVTt3RUFFL0I7SUFDRixpQ0FBQztDQUFBLEFBWkQsQ0FDZ0QscUJBQXFCLEdBV3BFO1NBWFksMEJBQTBCOzs7Ozs7SUFFMUIsaURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25RdWVyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hcHAvZm9ybWF0aW9uL2Zvcm1hdGlvbi1xdWVyeS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZm9ybWF0aW9uL3F1ZXJ5L2Zvcm1hdGlvbi1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlbGVjdGVkUm93c0xpc3QgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZm9ybWF0aW9uL3F1ZXJ5L3NlbGVjdGVkLXJvd3Mvc2VsZWN0ZWQtcm93cy1saXN0JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxGb3JtYXRpb25RdWVyeVNlcnZpY2UgZXh0ZW5kcyBGb3JtYXRpb25RdWVyeVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRmb3JtYXRpb25SZXBvc2l0b3J5OiBGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoZm9ybWF0aW9uUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VsZWN0U2VsZWN0ZWRSb3dzKCk6IE9ic2VydmFibGU8U2VsZWN0ZWRSb3dzTGlzdD4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3RTZWxlY3RlZFJvd3ModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==