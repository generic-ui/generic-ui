/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { FormationCommandInvoker } from '../../../../source/domain-api/formation/formation.command-invoker';
import { StructureId } from '../../../domain/structure.id';
import { FormationDispatcher } from '../../../../source/domain/formation/formation.dispatcher';
import { RowSelectToggleType } from '../../../../source/domain/formation/core/row-select-toggle-type';
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
}(FormationCommandInvoker));
export { LocalFormationCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9sb2NhbC9mb3JtYXRpb24vbG9jYWwtZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RDtJQUNxRCwyREFBdUI7SUFFM0UseUNBQW9CLFdBQXdCLEVBQ3pDLGlCQUFvQyxFQUNwQyxtQkFBd0M7UUFGM0MsWUFHQyxrQkFBTSxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQyxTQUM3QztRQUptQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFJNUMsQ0FBQzs7OztJQUVELG9EQUFVOzs7SUFBVjtRQUNDLGlCQUFNLG1CQUFtQixZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFHRCwyREFBaUI7Ozs7O0lBQWpCLFVBQWtCLFdBQW1CLEVBQUUsSUFBeUI7UUFDL0QsaUJBQU0saUJBQWlCLFlBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Z0JBaEJELFVBQVU7Ozs7Z0JBTkYsV0FBVztnQkFHWCxpQkFBaUI7Z0JBRmpCLG1CQUFtQjs7SUFtQjNCO1FBREMsUUFBUTs7Ozs0RUFHUjtJQUVGLHNDQUFDO0NBQUEsQUFsQkQsQ0FDcUQsdUJBQXVCLEdBaUIzRTtTQWpCWSwrQkFBK0I7Ozs7OztJQUUvQixzREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9kb21haW4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluL2Zvcm1hdGlvbi9jb3JlL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbEZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdGZvcm1hdGlvbkRpc3BhdGNoZXI6IEZvcm1hdGlvbkRpc3BhdGNoZXIpIHtcblx0XHRzdXBlcihjb21tYW5kRGlzcGF0Y2hlciwgZm9ybWF0aW9uRGlzcGF0Y2hlcik7XG5cdH1cblxuXHRzZXREZWZhdWx0KCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldERlZmF1bHRGb3JtYXRpb24odGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0dG9nZ2xlU2VsZWN0ZWRSb3coc2VsZWN0ZWRSb3c6IHN0cmluZywgdHlwZTogUm93U2VsZWN0VG9nZ2xlVHlwZSk6IHZvaWQge1xuXHRcdHN1cGVyLnRvZ2dsZVNlbGVjdGVkUm93KHNlbGVjdGVkUm93LCB0eXBlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=