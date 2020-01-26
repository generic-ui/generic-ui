/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from '../field';
import { DataType } from '../data-type';
import { AggregationType } from '../../../aggregation/aggregation.type';
export class UnknownField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, aggregationConfig) {
        super(id, accessor, DataType.UNKNOWN, aggregationConfig);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkcy91bmtub3duLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBR3hFLE1BQU0sT0FBTyxZQUFhLFNBQVEsS0FBSzs7Ozs7O0lBRXRDLFlBQVksRUFBVyxFQUNwQixRQUFhLEVBQ2IsaUJBQTJDO1FBQzdDLEtBQUssQ0FBQyxFQUFFLEVBQ1AsUUFBUSxFQUNSLFFBQVEsQ0FBQyxPQUFPLEVBQ2hCLGlCQUFpQixDQUFDLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHlCQUF5QjtRQUN4QixPQUFPLENBQUMsQ0FBQztRQUNULGlDQUFpQztRQUNqQyw2QkFBNkI7SUFDOUIsQ0FBQzs7OztJQUVELDBCQUEwQjtRQUN6QixPQUFPLGVBQWUsQ0FBQyxLQUFLO1lBQzNCLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uQWdncmVnYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uLWFnZ3JlZ2F0aW9uLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi50eXBlJztcblxuXG5leHBvcnQgY2xhc3MgVW5rbm93bkZpZWxkIGV4dGVuZHMgRmllbGQge1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBGaWVsZElkLFxuXHRcdFx0XHRhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZz86IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKSB7XG5cdFx0c3VwZXIoaWQsXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdERhdGFUeXBlLlVOS05PV04sXG5cdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZyk7XG5cdH1cblxuXHRhc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZSB7XG5cdFx0cmV0dXJuIDA7XG5cdFx0Ly8gcmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5DT1VOVCB8XG5cdFx0Ly8gXHRBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1Q7XG5cdH1cblxuXHRhc3NpZ25Qb3NzaWJsZUFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGUge1xuXHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQ09VTlQgfFxuXHRcdFx0QWdncmVnYXRpb25UeXBlLkRJU1RJTkNUO1xuXHR9XG5cbn1cbiJdfQ==