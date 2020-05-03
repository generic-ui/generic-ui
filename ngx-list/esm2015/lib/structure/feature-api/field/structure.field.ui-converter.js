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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkLnVpLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9maWVsZC9zdHJ1Y3R1cmUuZmllbGQudWktY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBS25FLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBRXJDLE9BQU8sQ0FBQyxNQUF3QjtRQUMvQixPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxLQUFnQixFQUFFLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLEtBQWdCO1FBRWxDLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7O1lBWkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaU1vZGVsIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZmllbGQudWktbW9kZWwnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoZmllbGRzOiBBcnJheTxUeXBlRmllbGQ+KTogQXJyYXk8U3RydWN0dXJlRmllbGRVaU1vZGVsPiB7XG5cdFx0cmV0dXJuIGZpZWxkcy5tYXAoKGZpZWxkOiBUeXBlRmllbGQpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRPbmUoZmllbGQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0T25lKGZpZWxkOiBUeXBlRmllbGQpOiBTdHJ1Y3R1cmVGaWVsZFVpTW9kZWwge1xuXG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVGaWVsZFVpTW9kZWwoZmllbGQuZ2V0SWQoKSwgZmllbGQuZ2V0RGF0YVR5cGUoKSk7XG5cdH1cbn1cbiJdfQ==