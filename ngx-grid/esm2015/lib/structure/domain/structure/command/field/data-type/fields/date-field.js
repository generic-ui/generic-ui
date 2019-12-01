/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from '../field';
import { DataType } from '../data-type';
import { AggregationType } from '../../../aggregation/aggregation.type';
export class DateField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, aggregationConfig) {
        super(id, accessor, DataType.DATE, aggregationConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultAggregations() {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT;
    }
    /**
     * @return {?}
     */
    assignPossibleAggregations() {
        return AggregationType.COUNT |
            AggregationType.DISTINCT;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkcy9kYXRlLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBR3hFLE1BQU0sT0FBTyxTQUFVLFNBQVEsS0FBSzs7Ozs7O0lBRW5DLFlBQVksRUFBVyxFQUNwQixRQUFhLEVBQ2IsaUJBQTJDO1FBQzdDLEtBQUssQ0FBQyxFQUFFLEVBQ1AsUUFBUSxFQUNSLFFBQVEsQ0FBQyxJQUFJLEVBQ2IsaUJBQWlCLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQseUJBQXlCO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDO1FBQ1QsaUNBQWlDO1FBQ2pDLDZCQUE2QjtJQUM5QixDQUFDOzs7O0lBRUQsMEJBQTBCO1FBQ3pCLE9BQU8sZUFBZSxDQUFDLEtBQUs7WUFDM0IsZUFBZSxDQUFDLFFBQVEsQ0FBQztJQUMzQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvbHVtbi1hZ2dyZWdhdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vYWdncmVnYXRpb24vYWdncmVnYXRpb24udHlwZSc7XG5cblxuZXhwb3J0IGNsYXNzIERhdGVGaWVsZCBleHRlbmRzIEZpZWxkIHtcblxuXHRjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0YWNjZXNzb3I6IGFueSxcblx0XHRcdFx0YWdncmVnYXRpb25Db25maWc/OiBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZykge1xuXHRcdHN1cGVyKGlkLFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5EQVRFLFxuXHRcdFx0YWdncmVnYXRpb25Db25maWcpO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdEFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGUge1xuXHRcdHJldHVybiAwO1xuXHRcdC8vIHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQ09VTlQgfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLkRJU1RJTkNUO1xuXHR9XG5cblx0YXNzaWduUG9zc2libGVBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlIHtcblx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkNPVU5UIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVDtcblx0fVxuXG59XG4iXX0=