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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1maWVsZC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLWZpZWxkLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLN0Q7SUFBQTtJQStDQSxDQUFDOzs7OztJQTVDQSxpQ0FBTTs7OztJQUFOLFVBQU8sV0FBd0I7O1lBRXhCLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQzs7WUFFbEQsVUFBVSxHQUFHLFdBQVcsQ0FBQyxJQUFJO1FBRWpDLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUM3QixVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUM3QjtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLG1CQUFBLFdBQVcsQ0FBQyxLQUFLLEVBQVUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9GO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLElBQUksZUFBZSxDQUFDLG1CQUFBLFdBQVcsQ0FBQyxLQUFLLEVBQVUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlGO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLElBQUksZUFBZSxDQUFDLG1CQUFBLFdBQVcsQ0FBQyxLQUFLLEVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUN2RTtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLG1CQUFBLFdBQVcsQ0FBQyxLQUFLLEVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUN4RTtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDakMsT0FBTyxJQUFJLGFBQWEsQ0FBQyxtQkFBQSxXQUFXLENBQUMsS0FBSyxFQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDckU7SUFFRixDQUFDOzs7Ozs7SUFFTyx5Q0FBYzs7Ozs7SUFBdEIsVUFBdUIsV0FBd0I7O1lBRTFDLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTzs7WUFDaEMsV0FBVztRQUVaLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUN4QixXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDMUM7UUFFRCxPQUFPLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDOztnQkE3Q0QsVUFBVTs7SUErQ1gsdUJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQTlDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vZGF0YS10eXBlJztcbmltcG9ydCB7IFVua25vd25EYXRhRmllbGQgfSBmcm9tICcuL3R5cGUvdW5rbm93bi1kYXRhLWZpZWxkJztcbmltcG9ydCB7IE51bWJlckRhdGFGaWVsZCB9IGZyb20gJy4vdHlwZS9udW1iZXItZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBTdHJpbmdEYXRhRmllbGQgfSBmcm9tICcuL3R5cGUvc3RyaW5nLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgQm9vbGVhbkRhdGFGaWVsZCB9IGZyb20gJy4vdHlwZS9ib29sZWFuLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgRGF0ZURhdGFGaWVsZCB9IGZyb20gJy4vdHlwZS9kYXRlLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgRGF0YUZpZWxkVHlwZXMgfSBmcm9tICcuL2RhdGEtZmllbGQtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9hcGkvZmllbGQuY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YUZpZWxkRmFjdG9yeSB7XG5cblx0Y3JlYXRlKGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZyk6IERhdGFGaWVsZFR5cGVzIHtcblxuXHRcdGNvbnN0IGZpZWxkTWF0Y2hlcnMgPSB0aGlzLmNyZWF0ZU1hdGNoZXJzKGZpZWxkQ29uZmlnKTtcblxuXHRcdGxldCBjb2x1bW5UeXBlID0gZmllbGRDb25maWcudHlwZTtcblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbHVtblR5cGUgPSBEYXRhVHlwZS5TVFJJTkc7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLlVOS05PV04pIHtcblx0XHRcdHJldHVybiBuZXcgVW5rbm93bkRhdGFGaWVsZChmaWVsZENvbmZpZy5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMsIGZpZWxkQ29uZmlnLnN1bW1hcmllcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0cmV0dXJuIG5ldyBOdW1iZXJEYXRhRmllbGQoZmllbGRDb25maWcuZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzLCBmaWVsZENvbmZpZy5zdW1tYXJpZXMpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5TVFJJTkcpIHtcblx0XHRcdHJldHVybiBuZXcgU3RyaW5nRGF0YUZpZWxkKGZpZWxkQ29uZmlnLmZpZWxkIGFzIHN0cmluZywgZmllbGRNYXRjaGVycyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLkJPT0xFQU4pIHtcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhbkRhdGFGaWVsZChmaWVsZENvbmZpZy5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5EQVRFKSB7XG5cdFx0XHRyZXR1cm4gbmV3IERhdGVEYXRhRmllbGQoZmllbGRDb25maWcuZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTWF0Y2hlcnMoZmllbGRDb25maWc6IEZpZWxkQ29uZmlnKTogRmllbGRNYXRjaGVycyB7XG5cblx0XHRsZXQgbWF0Y2hlciA9IGZpZWxkQ29uZmlnLm1hdGNoZXIsXG5cdFx0XHRzb3J0TWF0Y2hlcjtcblxuXHRcdGlmIChmaWVsZENvbmZpZy5zb3J0aW5nKSB7XG5cdFx0XHRzb3J0TWF0Y2hlciA9IGZpZWxkQ29uZmlnLnNvcnRpbmcubWF0Y2hlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEZpZWxkTWF0Y2hlcnMobWF0Y2hlciwgc29ydE1hdGNoZXIpO1xuXHR9XG5cbn1cbiJdfQ==