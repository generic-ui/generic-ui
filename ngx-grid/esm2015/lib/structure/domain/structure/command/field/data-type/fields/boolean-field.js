/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from '../field';
import { DataType } from '../data-type';
import { AggregationType } from '../../../aggregation/aggregation.type';
export class BooleanField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?} matchers
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, matchers, aggregationConfig) {
        super(id, accessor, DataType.BOOLEAN, matchers, aggregationConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultAggregations() {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT |
        // 	AggregationType.TRUTHY |
        // 	AggregationType.FALSY;
    }
    /**
     * @return {?}
     */
    assignPossibleAggregations() {
        return AggregationType.COUNT |
            AggregationType.DISTINCT |
            AggregationType.TRUTHY |
            AggregationType.FALSY;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkcy9ib29sZWFuLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBSXhFLE1BQU0sT0FBTyxZQUFhLFNBQVEsS0FBSzs7Ozs7OztJQUV0QyxZQUFZLEVBQVcsRUFDcEIsUUFBYSxFQUNiLFFBQXVCLEVBQ3ZCLGlCQUEyQztRQUM3QyxLQUFLLENBQUMsRUFBRSxFQUNQLFFBQVEsRUFDUixRQUFRLENBQUMsT0FBTyxFQUNoQixRQUFRLEVBQ1IsaUJBQWlCLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQseUJBQXlCO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDO1FBQ1QsaUNBQWlDO1FBQ2pDLDhCQUE4QjtRQUM5Qiw0QkFBNEI7UUFDNUIsMEJBQTBCO0lBQzNCLENBQUM7Ozs7SUFFRCwwQkFBMEI7UUFDekIsT0FBTyxlQUFlLENBQUMsS0FBSztZQUMzQixlQUFlLENBQUMsUUFBUTtZQUN4QixlQUFlLENBQUMsTUFBTTtZQUN0QixlQUFlLENBQUMsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi1hZ2dyZWdhdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vYWdncmVnYXRpb24vYWdncmVnYXRpb24udHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5cblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5GaWVsZCBleHRlbmRzIEZpZWxkIHtcblxuXHRjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0YWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnPzogQ29sdW1uQWdncmVnYXRpb25Db25maWcpIHtcblx0XHRzdXBlcihpZCxcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0RGF0YVR5cGUuQk9PTEVBTixcblx0XHRcdG1hdGNoZXJzLFxuXHRcdFx0YWdncmVnYXRpb25Db25maWcpO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdEFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGUge1xuXHRcdHJldHVybiAwO1xuXHRcdC8vIHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQ09VTlQgfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLkRJU1RJTkNUIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5UUlVUSFkgfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLkZBTFNZO1xuXHR9XG5cblx0YXNzaWduUG9zc2libGVBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlIHtcblx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkNPVU5UIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVCB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuVFJVVEhZIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5GQUxTWTtcblx0fVxuXG59XG4iXX0=