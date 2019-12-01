/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Formation } from './query/formation';
var FormationConverter = /** @class */ (function () {
    function FormationConverter() {
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    FormationConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        /** @type {?} */
        var rows = aggregate.getSelectedRows();
        return new Formation(rows);
    };
    FormationConverter.decorators = [
        { type: Injectable }
    ];
    return FormationConverter;
}());
export { FormationConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRzlDO0lBQUE7SUFTQSxDQUFDOzs7OztJQU5BLG9DQUFPOzs7O0lBQVAsVUFBUSxTQUE2Qjs7WUFFOUIsSUFBSSxHQUFHLFNBQVMsQ0FBQyxlQUFlLEVBQUU7UUFFeEMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkFSRCxVQUFVOztJQVNYLHlCQUFDO0NBQUEsQUFURCxJQVNDO1NBUlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuL2NvbW1hbmQvZm9ybWF0aW9uLWFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb24gfSBmcm9tICcuL3F1ZXJ5L2Zvcm1hdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkNvbnZlcnRlciB7XG5cblx0Y29udmVydChhZ2dyZWdhdGU6IEZvcm1hdGlvbkFnZ3JlZ2F0ZSk6IEZvcm1hdGlvbiB7XG5cblx0XHRjb25zdCByb3dzID0gYWdncmVnYXRlLmdldFNlbGVjdGVkUm93cygpO1xuXG5cdFx0cmV0dXJuIG5ldyBGb3JtYXRpb24ocm93cyk7XG5cdH1cbn1cbiJdfQ==