/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DataType } from './data-type';
import { UnknownDataField } from './type/unknown-data-field';
import { NumberDataField } from './type/number-data-field';
import { StringDataField } from './type/string-data-field';
import { BooleanDataField } from './type/boolean-data-field';
import { DateDataField } from './type/date-data-field';
import { FieldMatchers } from '../../matcher/field.matchers';
var DataFieldFactory = /** @class */ (function () {
    function DataFieldFactory() {
    }
    /**
     * @param {?} fieldConfig
     * @return {?}
     */
    DataFieldFactory.prototype.create = /**
     * @param {?} fieldConfig
     * @return {?}
     */
    function (fieldConfig) {
        /** @type {?} */
        var fieldMatchers = this.createMatchers(fieldConfig);
        /** @type {?} */
        var columnType = fieldConfig.type;
        if (columnType === undefined) {
            columnType = DataType.STRING;
        }
        if (columnType === DataType.UNKNOWN) {
            return new UnknownDataField((/** @type {?} */ (fieldConfig.field)), fieldMatchers, fieldConfig.summaries);
        }
        if (columnType === DataType.NUMBER) {
            return new NumberDataField((/** @type {?} */ (fieldConfig.field)), fieldMatchers, fieldConfig.summaries);
        }
        if (columnType === DataType.STRING) {
            return new StringDataField((/** @type {?} */ (fieldConfig.field)), fieldMatchers);
        }
        if (columnType === DataType.BOOLEAN) {
            return new BooleanDataField((/** @type {?} */ (fieldConfig.field)), fieldMatchers);
        }
        if (columnType === DataType.DATE) {
            return new DateDataField((/** @type {?} */ (fieldConfig.field)), fieldMatchers);
        }
    };
    /**
     * @private
     * @param {?} fieldConfig
     * @return {?}
     */
    DataFieldFactory.prototype.createMatchers = /**
     * @private
     * @param {?} fieldConfig
     * @return {?}
     */
    function (fieldConfig) {
        /** @type {?} */
        var matcher = fieldConfig.matcher;
        /** @type {?} */
        var sortMatcher;
        if (fieldConfig.sorting) {
            sortMatcher = fieldConfig.sorting.matcher;
        }
        return new FieldMatchers(matcher, sortMatcher);
    };
    DataFieldFactory.decorators = [
        { type: Injectable }
    ];
    return DataFieldFactory;
}());
export { DataFieldFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1maWVsZC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZGF0YS9kYXRhLWZpZWxkLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLN0Q7SUFBQTtJQStDQSxDQUFDOzs7OztJQTVDQSxpQ0FBTTs7OztJQUFOLFVBQU8sV0FBd0I7O1lBRXhCLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQzs7WUFFbEQsVUFBVSxHQUFHLFdBQVcsQ0FBQyxJQUFJO1FBRWpDLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUM3QixVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUM3QjtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLG1CQUFBLFdBQVcsQ0FBQyxLQUFLLEVBQVUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9GO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLElBQUksZUFBZSxDQUFDLG1CQUFBLFdBQVcsQ0FBQyxLQUFLLEVBQVUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlGO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLElBQUksZUFBZSxDQUFDLG1CQUFBLFdBQVcsQ0FBQyxLQUFLLEVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUN2RTtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLG1CQUFBLFdBQVcsQ0FBQyxLQUFLLEVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUN4RTtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDakMsT0FBTyxJQUFJLGFBQWEsQ0FBQyxtQkFBQSxXQUFXLENBQUMsS0FBSyxFQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDckU7SUFFRixDQUFDOzs7Ozs7SUFFTyx5Q0FBYzs7Ozs7SUFBdEIsVUFBdUIsV0FBd0I7O1lBRTFDLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTzs7WUFDaEMsV0FBVztRQUVaLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUN4QixXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDMUM7UUFFRCxPQUFPLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDOztnQkE3Q0QsVUFBVTs7SUErQ1gsdUJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQTlDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vZGF0YS10eXBlJztcbmltcG9ydCB7IFVua25vd25EYXRhRmllbGQgfSBmcm9tICcuL3R5cGUvdW5rbm93bi1kYXRhLWZpZWxkJztcbmltcG9ydCB7IE51bWJlckRhdGFGaWVsZCB9IGZyb20gJy4vdHlwZS9udW1iZXItZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBTdHJpbmdEYXRhRmllbGQgfSBmcm9tICcuL3R5cGUvc3RyaW5nLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgQm9vbGVhbkRhdGFGaWVsZCB9IGZyb20gJy4vdHlwZS9ib29sZWFuLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgRGF0ZURhdGFGaWVsZCB9IGZyb20gJy4vdHlwZS9kYXRlLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgRGF0YUZpZWxkVHlwZXMgfSBmcm9tICcuL2RhdGEtZmllbGQtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4tYXBpL2ZpZWxkLmNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFGaWVsZEZhY3Rvcnkge1xuXG5cdGNyZWF0ZShmaWVsZENvbmZpZzogRmllbGRDb25maWcpOiBEYXRhRmllbGRUeXBlcyB7XG5cblx0XHRjb25zdCBmaWVsZE1hdGNoZXJzID0gdGhpcy5jcmVhdGVNYXRjaGVycyhmaWVsZENvbmZpZyk7XG5cblx0XHRsZXQgY29sdW1uVHlwZSA9IGZpZWxkQ29uZmlnLnR5cGU7XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb2x1bW5UeXBlID0gRGF0YVR5cGUuU1RSSU5HO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5VTktOT1dOKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFVua25vd25EYXRhRmllbGQoZmllbGRDb25maWcuZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzLCBmaWVsZENvbmZpZy5zdW1tYXJpZXMpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiBuZXcgTnVtYmVyRGF0YUZpZWxkKGZpZWxkQ29uZmlnLmZpZWxkIGFzIHN0cmluZywgZmllbGRNYXRjaGVycywgZmllbGRDb25maWcuc3VtbWFyaWVzKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFN0cmluZ0RhdGFGaWVsZChmaWVsZENvbmZpZy5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5CT09MRUFOKSB7XG5cdFx0XHRyZXR1cm4gbmV3IEJvb2xlYW5EYXRhRmllbGQoZmllbGRDb25maWcuZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuREFURSkge1xuXHRcdFx0cmV0dXJuIG5ldyBEYXRlRGF0YUZpZWxkKGZpZWxkQ29uZmlnLmZpZWxkIGFzIHN0cmluZywgZmllbGRNYXRjaGVycyk7XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU1hdGNoZXJzKGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZyk6IEZpZWxkTWF0Y2hlcnMge1xuXG5cdFx0bGV0IG1hdGNoZXIgPSBmaWVsZENvbmZpZy5tYXRjaGVyLFxuXHRcdFx0c29ydE1hdGNoZXI7XG5cblx0XHRpZiAoZmllbGRDb25maWcuc29ydGluZykge1xuXHRcdFx0c29ydE1hdGNoZXIgPSBmaWVsZENvbmZpZy5zb3J0aW5nLm1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBGaWVsZE1hdGNoZXJzKG1hdGNoZXIsIHNvcnRNYXRjaGVyKTtcblx0fVxuXG59XG4iXX0=