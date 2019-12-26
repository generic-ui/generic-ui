/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Formation } from './read/formation';
export class FormationConverter {
    /**
     * @param {?} aggregate
     * @return {?}
     */
    convert(aggregate) {
        /** @type {?} */
        const rows = aggregate.getSelectedRows();
        return new Formation(rows);
    }
}
FormationConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBSTdDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBRTlCLE9BQU8sQ0FBQyxTQUE2Qjs7Y0FFOUIsSUFBSSxHQUFHLFNBQVMsQ0FBQyxlQUFlLEVBQUU7UUFFeEMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFSRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuL2NvbW1hbmQvZm9ybWF0aW9uLWFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb24gfSBmcm9tICcuL3JlYWQvZm9ybWF0aW9uJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogRm9ybWF0aW9uQWdncmVnYXRlKTogRm9ybWF0aW9uIHtcblxuXHRcdGNvbnN0IHJvd3MgPSBhZ2dyZWdhdGUuZ2V0U2VsZWN0ZWRSb3dzKCk7XG5cblx0XHRyZXR1cm4gbmV3IEZvcm1hdGlvbihyb3dzKTtcblx0fVxufVxuIl19