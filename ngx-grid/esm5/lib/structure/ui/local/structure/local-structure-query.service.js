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
var LocalStructureQueryService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStructureQueryService, _super);
    function LocalStructureQueryService(structureId, structureRepository) {
        var _this = _super.call(this, structureRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalStructureQueryService.prototype.select = /**
     * @return {?}
     */
    function () {
        return _super.prototype.select.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureQueryService.prototype.selectVerticalScrollEnabled = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectVerticalScrollEnabled.call(this, this.structureId);
    };
    LocalStructureQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStructureQueryService.ctorParameters = function () { return [
        { type: StructureId },
        { type: StructureRepository }
    ]; };
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
    return LocalStructureQueryService;
}(StructureQueryService));
export { LocalStructureQueryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureQueryService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvbG9jYWwvc3RydWN0dXJlL2xvY2FsLXN0cnVjdHVyZS1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFJM0Y7SUFDZ0Qsc0RBQXFCO0lBRXBFLG9DQUFvQixXQUF3QixFQUN6QyxtQkFBd0M7UUFEM0MsWUFFQyxrQkFBTSxtQkFBbUIsQ0FBQyxTQUMxQjtRQUhtQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFHNUMsQ0FBQzs7OztJQUdELDJDQUFNOzs7SUFBTjtRQUNDLE9BQU8saUJBQU0sTUFBTSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBR0QsZ0VBQTJCOzs7SUFBM0I7UUFDQyxPQUFPLGlCQUFNLDJCQUEyQixZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMzRCxDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFMRixXQUFXO2dCQUNYLG1CQUFtQjs7SUFhM0I7UUFEQyxRQUFROzs7Z0RBQ0MsVUFBVTs0REFFbkI7SUFHRDtRQURDLFFBQVE7OztnREFDc0IsVUFBVTtpRkFFeEM7SUFFRixpQ0FBQztDQUFBLEFBbEJELENBQ2dELHFCQUFxQixHQWlCcEU7U0FqQlksMEJBQTBCOzs7Ozs7SUFFMUIsaURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVF1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FwcC9zdHJ1Y3R1cmUvc3RydWN0dXJlLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L3N0cnVjdHVyZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcXVlcnkvc3RydWN0dXJlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTdHJ1Y3R1cmVRdWVyeVNlcnZpY2UgZXh0ZW5kcyBTdHJ1Y3R1cmVRdWVyeVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VsZWN0KCk6IE9ic2VydmFibGU8U3RydWN0dXJlPiB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlbGVjdCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlbGVjdFZlcnRpY2FsU2Nyb2xsRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHR9XG5cbn1cbiJdfQ==