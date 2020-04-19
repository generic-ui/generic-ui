/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureFormationDispatcher } from '../../../feature-api/formation/structure-formation.dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { FormationDispatcher } from '../../../domain/formation/formation.dispatcher';
var LocalFormationCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(LocalFormationCommandDispatcher, _super);
    function LocalFormationCommandDispatcher(structureId, formationDispatcher) {
        var _this = _super.call(this, formationDispatcher) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalFormationCommandDispatcher.prototype.setDefault = /**
     * @return {?}
     */
    function () {
        _super.prototype.setDefaultFormation.call(this, this.structureId);
    };
    /**
     * @param {?} selectedRow
     * @return {?}
     */
    LocalFormationCommandDispatcher.prototype.toggleSelectedRow = /**
     * @param {?} selectedRow
     * @return {?}
     */
    function (selectedRow) {
        _super.prototype.toggleSelectedRow.call(this, selectedRow, this.structureId);
    };
    LocalFormationCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalFormationCommandDispatcher.ctorParameters = function () { return [
        { type: StructureId },
        { type: FormationDispatcher }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalFormationCommandDispatcher.prototype, "toggleSelectedRow", null);
    return LocalFormationCommandDispatcher;
}(StructureFormationDispatcher));
export { LocalFormationCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL2Zvcm1hdGlvbi9sb2NhbC1mb3JtYXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDN0csT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBR3JGO0lBQ3FELDJEQUE0QjtJQUVoRix5Q0FBb0IsV0FBd0IsRUFDekMsbUJBQXdDO1FBRDNDLFlBRUMsa0JBQU0sbUJBQW1CLENBQUMsU0FDMUI7UUFIbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBRzVDLENBQUM7Ozs7SUFFRCxvREFBVTs7O0lBQVY7UUFDQyxpQkFBTSxtQkFBbUIsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFHRCwyREFBaUI7Ozs7SUFBakIsVUFBa0IsV0FBbUI7UUFDcEMsaUJBQU0saUJBQWlCLFlBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkFmRCxVQUFVOzs7O2dCQUpGLFdBQVc7Z0JBQ1gsbUJBQW1COztJQWdCM0I7UUFEQyxRQUFROzs7OzRFQUdSO0lBRUYsc0NBQUM7Q0FBQSxBQWpCRCxDQUNxRCw0QkFBNEIsR0FnQmhGO1NBaEJZLCtCQUErQjs7Ozs7O0lBRS9CLHNEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS1hcGkvZm9ybWF0aW9uL3N0cnVjdHVyZS1mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vZm9ybWF0aW9uLmRpc3BhdGNoZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbEZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgU3RydWN0dXJlRm9ybWF0aW9uRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGZvcm1hdGlvbkRpc3BhdGNoZXI6IEZvcm1hdGlvbkRpc3BhdGNoZXIpIHtcblx0XHRzdXBlcihmb3JtYXRpb25EaXNwYXRjaGVyKTtcblx0fVxuXG5cdHNldERlZmF1bHQoKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0RGVmYXVsdEZvcm1hdGlvbih0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHR0b2dnbGVTZWxlY3RlZFJvdyhzZWxlY3RlZFJvdzogc3RyaW5nKTogdm9pZCB7XG5cdFx0c3VwZXIudG9nZ2xlU2VsZWN0ZWRSb3coc2VsZWN0ZWRSb3csIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==