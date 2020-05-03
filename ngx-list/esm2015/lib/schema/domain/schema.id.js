/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateId } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../feature-api/read/schema.read-model-root-id';
export class SchemaId extends AggregateId {
    /**
     * @param {?} id
     */
    constructor(id) {
        super(id);
    }
    /**
     * @return {?}
     */
    toReadModelRootId() {
        return new SchemaReadModelRootId(this.getId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc2NoZW1hL2RvbWFpbi9zY2hlbWEuaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUd0RixNQUFNLE9BQU8sUUFBUyxTQUFRLFdBQVc7Ozs7SUFFeEMsWUFBWSxFQUFVO1FBQ3JCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vZmVhdHVyZS1hcGkvcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hSWQgZXh0ZW5kcyBBZ2dyZWdhdGVJZCB7XG5cblx0Y29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xuXHRcdHN1cGVyKGlkKTtcblx0fVxuXG5cdHRvUmVhZE1vZGVsUm9vdElkKCk6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB7XG5cdFx0cmV0dXJuIG5ldyBTY2hlbWFSZWFkTW9kZWxSb290SWQodGhpcy5nZXRJZCgpKTtcblx0fVxufVxuIl19