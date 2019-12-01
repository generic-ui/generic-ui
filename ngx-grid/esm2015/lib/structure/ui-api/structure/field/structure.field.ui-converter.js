/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFieldUiModel } from './structure.field.ui-model';
export class StructureFieldUiConverter {
    /**
     * @param {?} fields
     * @return {?}
     */
    convert(fields) {
        return fields.map((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            return this.convertOne(field);
        }));
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    convertOne(field) {
        return new StructureFieldUiModel(field.getId(), field.getDataType());
    }
}
StructureFieldUiConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkLnVpLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJbkUsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFFckMsT0FBTyxDQUFDLE1BQW9CO1FBQzNCLE9BQU8sTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxLQUFZO1FBRTlCLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7O1lBWkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlNb2RlbCB9IGZyb20gJy4vc3RydWN0dXJlLmZpZWxkLnVpLW1vZGVsJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRmllbGRVaUNvbnZlcnRlciB7XG5cblx0Y29udmVydChmaWVsZHM6IEFycmF5PEZpZWxkPik6IEFycmF5PFN0cnVjdHVyZUZpZWxkVWlNb2RlbD4ge1xuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZDogRmllbGQpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRPbmUoZmllbGQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0T25lKGZpZWxkOiBGaWVsZCk6IFN0cnVjdHVyZUZpZWxkVWlNb2RlbCB7XG5cblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUZpZWxkVWlNb2RlbChmaWVsZC5nZXRJZCgpLCBmaWVsZC5nZXREYXRhVHlwZSgpKTtcblx0fVxufVxuIl19