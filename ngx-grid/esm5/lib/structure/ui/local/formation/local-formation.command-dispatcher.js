/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureFormationDispatcher } from '../../../ui-api/formation/structure-formation.dispatcher';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9mb3JtYXRpb24vbG9jYWwtZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUdyRjtJQUNxRCwyREFBNEI7SUFFaEYseUNBQW9CLFdBQXdCLEVBQ3pDLG1CQUF3QztRQUQzQyxZQUVDLGtCQUFNLG1CQUFtQixDQUFDLFNBQzFCO1FBSG1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUc1QyxDQUFDOzs7O0lBRUQsb0RBQVU7OztJQUFWO1FBQ0MsaUJBQU0sbUJBQW1CLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBR0QsMkRBQWlCOzs7O0lBQWpCLFVBQWtCLFdBQW1CO1FBQ3BDLGlCQUFNLGlCQUFpQixZQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Z0JBZkQsVUFBVTs7OztnQkFKRixXQUFXO2dCQUNYLG1CQUFtQjs7SUFnQjNCO1FBREMsUUFBUTs7Ozs0RUFHUjtJQUVGLHNDQUFDO0NBQUEsQUFqQkQsQ0FDcUQsNEJBQTRCLEdBZ0JoRjtTQWhCWSwrQkFBK0I7Ozs7OztJQUUvQixzREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9mb3JtYXRpb24vc3RydWN0dXJlLWZvcm1hdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsRm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBTdHJ1Y3R1cmVGb3JtYXRpb25EaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Zm9ybWF0aW9uRGlzcGF0Y2hlcjogRm9ybWF0aW9uRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKGZvcm1hdGlvbkRpc3BhdGNoZXIpO1xuXHR9XG5cblx0c2V0RGVmYXVsdCgpOiB2b2lkIHtcblx0XHRzdXBlci5zZXREZWZhdWx0Rm9ybWF0aW9uKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHRvZ2dsZVNlbGVjdGVkUm93KHNlbGVjdGVkUm93OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRzdXBlci50b2dnbGVTZWxlY3RlZFJvdyhzZWxlY3RlZFJvdywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19