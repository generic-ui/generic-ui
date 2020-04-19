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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9mb3JtYXRpb24vcmVhZC9mb3JtYXRpb24uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJeEMsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFFOUIsT0FBTyxDQUFDLFNBQTZCOztjQUU5QixJQUFJLEdBQUcsU0FBUyxDQUFDLGVBQWUsRUFBRTtRQUV4QyxPQUFPLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQVJELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vZm9ybWF0aW9uLWFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb24gfSBmcm9tICcuL2Zvcm1hdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkNvbnZlcnRlciB7XG5cblx0Y29udmVydChhZ2dyZWdhdGU6IEZvcm1hdGlvbkFnZ3JlZ2F0ZSk6IEZvcm1hdGlvbiB7XG5cblx0XHRjb25zdCByb3dzID0gYWdncmVnYXRlLmdldFNlbGVjdGVkUm93cygpO1xuXG5cdFx0cmV0dXJuIG5ldyBGb3JtYXRpb24ocm93cyk7XG5cdH1cbn1cbiJdfQ==