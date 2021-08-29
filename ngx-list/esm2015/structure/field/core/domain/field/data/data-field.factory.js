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
export class DataFieldFactory {
    /**
     * @param {?} fieldConfig
     * @return {?}
     */
    create(fieldConfig) {
        /** @type {?} */
        const fieldMatchers = this.createMatchers(fieldConfig);
        /** @type {?} */
        let columnType = fieldConfig.type;
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
    }
    /**
     * @private
     * @param {?} fieldConfig
     * @return {?}
     */
    createMatchers(fieldConfig) {
        /** @type {?} */
        const matcher = fieldConfig.matcher;
        /** @type {?} */
        let sortMatcher;
        if (fieldConfig.sorting) {
            sortMatcher = fieldConfig.sorting.matcher;
        }
        return new FieldMatchers(matcher, sortMatcher);
    }
}
DataFieldFactory.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1maWVsZC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLWZpZWxkLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFNN0QsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFFNUIsTUFBTSxDQUFDLFdBQXdCOztjQUV4QixhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7O1lBRWxELFVBQVUsR0FBRyxXQUFXLENBQUMsSUFBSTtRQUVqQyxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDN0IsVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDN0I7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxtQkFBQSxXQUFXLENBQUMsS0FBSyxFQUFVLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvRjtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxtQkFBQSxXQUFXLENBQUMsS0FBSyxFQUFVLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5RjtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxtQkFBQSxXQUFXLENBQUMsS0FBSyxFQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDdkU7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxtQkFBQSxXQUFXLENBQUMsS0FBSyxFQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDeEU7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxhQUFhLENBQUMsbUJBQUEsV0FBVyxDQUFDLEtBQUssRUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ3JFO0lBRUYsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLFdBQXdCOztjQUV4QyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU87O1lBQy9CLFdBQVc7UUFFZixJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQzFDO1FBRUQsT0FBTyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBN0NELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vZGF0YS10eXBlJztcbmltcG9ydCB7IFVua25vd25EYXRhRmllbGQgfSBmcm9tICcuL3R5cGUvdW5rbm93bi1kYXRhLWZpZWxkJztcbmltcG9ydCB7IE51bWJlckRhdGFGaWVsZCB9IGZyb20gJy4vdHlwZS9udW1iZXItZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBTdHJpbmdEYXRhRmllbGQgfSBmcm9tICcuL3R5cGUvc3RyaW5nLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgQm9vbGVhbkRhdGFGaWVsZCB9IGZyb20gJy4vdHlwZS9ib29sZWFuLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgRGF0ZURhdGFGaWVsZCB9IGZyb20gJy4vdHlwZS9kYXRlLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgRGF0YUZpZWxkVHlwZXMgfSBmcm9tICcuL2RhdGEtZmllbGQtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9hcGkvZmllbGQuY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YUZpZWxkRmFjdG9yeSB7XG5cblx0Y3JlYXRlKGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZyk6IERhdGFGaWVsZFR5cGVzIHtcblxuXHRcdGNvbnN0IGZpZWxkTWF0Y2hlcnMgPSB0aGlzLmNyZWF0ZU1hdGNoZXJzKGZpZWxkQ29uZmlnKTtcblxuXHRcdGxldCBjb2x1bW5UeXBlID0gZmllbGRDb25maWcudHlwZTtcblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbHVtblR5cGUgPSBEYXRhVHlwZS5TVFJJTkc7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLlVOS05PV04pIHtcblx0XHRcdHJldHVybiBuZXcgVW5rbm93bkRhdGFGaWVsZChmaWVsZENvbmZpZy5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMsIGZpZWxkQ29uZmlnLnN1bW1hcmllcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0cmV0dXJuIG5ldyBOdW1iZXJEYXRhRmllbGQoZmllbGRDb25maWcuZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzLCBmaWVsZENvbmZpZy5zdW1tYXJpZXMpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5TVFJJTkcpIHtcblx0XHRcdHJldHVybiBuZXcgU3RyaW5nRGF0YUZpZWxkKGZpZWxkQ29uZmlnLmZpZWxkIGFzIHN0cmluZywgZmllbGRNYXRjaGVycyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLkJPT0xFQU4pIHtcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhbkRhdGFGaWVsZChmaWVsZENvbmZpZy5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5EQVRFKSB7XG5cdFx0XHRyZXR1cm4gbmV3IERhdGVEYXRhRmllbGQoZmllbGRDb25maWcuZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTWF0Y2hlcnMoZmllbGRDb25maWc6IEZpZWxkQ29uZmlnKTogRmllbGRNYXRjaGVycyB7XG5cblx0XHRjb25zdCBtYXRjaGVyID0gZmllbGRDb25maWcubWF0Y2hlcjtcblx0XHRsZXQgc29ydE1hdGNoZXI7XG5cblx0XHRpZiAoZmllbGRDb25maWcuc29ydGluZykge1xuXHRcdFx0c29ydE1hdGNoZXIgPSBmaWVsZENvbmZpZy5zb3J0aW5nLm1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBGaWVsZE1hdGNoZXJzKG1hdGNoZXIsIHNvcnRNYXRjaGVyKTtcblx0fVxuXG59XG4iXX0=