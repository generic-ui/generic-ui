/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateId } from '@generic-ui/hermes';
import { StructureReadModelRootId } from '../feature-api/read/structure.read-model-root-id';
export class StructureId extends AggregateId {
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
        return new StructureReadModelRootId(this.getId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUc1RixNQUFNLE9BQU8sV0FBWSxTQUFRLFdBQVc7Ozs7SUFFM0MsWUFBWSxFQUFVO1FBQ3JCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLHdCQUF3QixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vZmVhdHVyZS1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSWQgZXh0ZW5kcyBBZ2dyZWdhdGVJZCB7XG5cblx0Y29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xuXHRcdHN1cGVyKGlkKTtcblx0fVxuXG5cdHRvUmVhZE1vZGVsUm9vdElkKCk6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQodGhpcy5nZXRJZCgpKTtcblx0fVxuXG59XG4iXX0=