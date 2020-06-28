/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { FormationCommandDispatcher } from '../../../../../structure/source/domain-api/formation/formation.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { FormationDispatcher } from '../../../../../structure/source/domain/formation/formation.dispatcher';
import { RowSelectToggleType } from '../../../../../structure/source/domain/formation/core/row-select-toggle-type';
import { CommandDispatcher } from '@generic-ui/hermes';
var LocalFormationCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(LocalFormationCommandDispatcher, _super);
    function LocalFormationCommandDispatcher(structureId, commandDispatcher, formationDispatcher) {
        var _this = _super.call(this, commandDispatcher, formationDispatcher) || this;
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
     * @param {?} type
     * @return {?}
     */
    LocalFormationCommandDispatcher.prototype.toggleSelectedRow = /**
     * @param {?} selectedRow
     * @param {?} type
     * @return {?}
     */
    function (selectedRow, type) {
        _super.prototype.toggleSelectedRow.call(this, selectedRow, type, this.structureId);
    };
    LocalFormationCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalFormationCommandDispatcher.ctorParameters = function () { return [
        { type: StructureId },
        { type: CommandDispatcher },
        { type: FormationDispatcher }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalFormationCommandDispatcher.prototype, "toggleSelectedRow", null);
    return LocalFormationCommandDispatcher;
}(FormationCommandDispatcher));
export { LocalFormationCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL2Zvcm1hdGlvbi9sb2NhbC1mb3JtYXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFDL0gsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZEO0lBQ3FELDJEQUEwQjtJQUU5RSx5Q0FBb0IsV0FBd0IsRUFDekMsaUJBQW9DLEVBQ3BDLG1CQUF3QztRQUYzQyxZQUdDLGtCQUFNLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDLFNBQzdDO1FBSm1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUk1QyxDQUFDOzs7O0lBRUQsb0RBQVU7OztJQUFWO1FBQ0MsaUJBQU0sbUJBQW1CLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUdELDJEQUFpQjs7Ozs7SUFBakIsVUFBa0IsV0FBbUIsRUFBRSxJQUF5QjtRQUMvRCxpQkFBTSxpQkFBaUIsWUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RCxDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFORixXQUFXO2dCQUdYLGlCQUFpQjtnQkFGakIsbUJBQW1COztJQW1CM0I7UUFEQyxRQUFROzs7OzRFQUdSO0lBRUYsc0NBQUM7Q0FBQSxBQWxCRCxDQUNxRCwwQkFBMEIsR0FpQjlFO1NBakJZLCtCQUErQjs7Ozs7O0lBRS9CLHNEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvZG9tYWluL2Zvcm1hdGlvbi9mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4vZm9ybWF0aW9uL2NvcmUvcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsRm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBGb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0Zm9ybWF0aW9uRGlzcGF0Y2hlcjogRm9ybWF0aW9uRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKGNvbW1hbmREaXNwYXRjaGVyLCBmb3JtYXRpb25EaXNwYXRjaGVyKTtcblx0fVxuXG5cdHNldERlZmF1bHQoKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0RGVmYXVsdEZvcm1hdGlvbih0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHR0b2dnbGVTZWxlY3RlZFJvdyhzZWxlY3RlZFJvdzogc3RyaW5nLCB0eXBlOiBSb3dTZWxlY3RUb2dnbGVUeXBlKTogdm9pZCB7XG5cdFx0c3VwZXIudG9nZ2xlU2VsZWN0ZWRSb3coc2VsZWN0ZWRSb3csIHR5cGUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==