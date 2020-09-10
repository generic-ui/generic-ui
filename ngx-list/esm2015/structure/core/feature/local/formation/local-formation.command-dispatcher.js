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
export class LocalFormationCommandDispatcher extends FormationCommandInvoker {
    /**
     * @param {?} structureId
     * @param {?} commandDispatcher
     * @param {?} formationDispatcher
     */
    constructor(structureId, commandDispatcher, formationDispatcher) {
        super(commandDispatcher, formationDispatcher);
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
     * @param {?} type
     * @return {?}
     */
    toggleSelectedRow(selectedRow, type) {
        super.toggleSelectedRow(selectedRow, type, this.structureId);
    }
}
LocalFormationCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalFormationCommandDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: CommandDispatcher },
    { type: FormationDispatcher }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalFormationCommandDispatcher.prototype, "toggleSelectedRow", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9sb2NhbC9mb3JtYXRpb24vbG9jYWwtZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUl2RCxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsdUJBQXVCOzs7Ozs7SUFFM0UsWUFBb0IsV0FBd0IsRUFDekMsaUJBQW9DLEVBQ3BDLG1CQUF3QztRQUMxQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUgzQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUk1QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBR0QsaUJBQWlCLENBQUMsV0FBbUIsRUFBRSxJQUF5QjtRQUMvRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7O1lBaEJELFVBQVU7Ozs7WUFORixXQUFXO1lBR1gsaUJBQWlCO1lBRmpCLG1CQUFtQjs7QUFtQjNCO0lBREMsUUFBUTs7Ozt3RUFHUjs7Ozs7O0lBYlcsc0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluL2Zvcm1hdGlvbi9mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9mb3JtYXRpb24vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxGb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlciBleHRlbmRzIEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Y29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRmb3JtYXRpb25EaXNwYXRjaGVyOiBGb3JtYXRpb25EaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoY29tbWFuZERpc3BhdGNoZXIsIGZvcm1hdGlvbkRpc3BhdGNoZXIpO1xuXHR9XG5cblx0c2V0RGVmYXVsdCgpOiB2b2lkIHtcblx0XHRzdXBlci5zZXREZWZhdWx0Rm9ybWF0aW9uKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHRvZ2dsZVNlbGVjdGVkUm93KHNlbGVjdGVkUm93OiBzdHJpbmcsIHR5cGU6IFJvd1NlbGVjdFRvZ2dsZVR5cGUpOiB2b2lkIHtcblx0XHRzdXBlci50b2dnbGVTZWxlY3RlZFJvdyhzZWxlY3RlZFJvdywgdHlwZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19