/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Formation } from './formation';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9yZWFkL2Zvcm1hdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUl4QyxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUU5QixPQUFPLENBQUMsU0FBNkI7O2NBRTlCLElBQUksR0FBRyxTQUFTLENBQUMsZUFBZSxFQUFFO1FBRXhDLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBUkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9mb3JtYXRpb24tYWdncmVnYXRlJztcbmltcG9ydCB7IEZvcm1hdGlvbiB9IGZyb20gJy4vZm9ybWF0aW9uJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogRm9ybWF0aW9uQWdncmVnYXRlKTogRm9ybWF0aW9uIHtcblxuXHRcdGNvbnN0IHJvd3MgPSBhZ2dyZWdhdGUuZ2V0U2VsZWN0ZWRSb3dzKCk7XG5cblx0XHRyZXR1cm4gbmV3IEZvcm1hdGlvbihyb3dzKTtcblx0fVxufVxuIl19