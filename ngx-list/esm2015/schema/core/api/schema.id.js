/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateId } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../domain-read/schema.read-model-root-id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvY29yZS9hcGkvc2NoZW1hLmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHakYsTUFBTSxPQUFPLFFBQVMsU0FBUSxXQUFXOzs7O0lBRXhDLFlBQVksRUFBVTtRQUNyQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFJZCBleHRlbmRzIEFnZ3JlZ2F0ZUlkIHtcblxuXHRjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XG5cdFx0c3VwZXIoaWQpO1xuXHR9XG5cblx0dG9SZWFkTW9kZWxSb290SWQoKTogU2NoZW1hUmVhZE1vZGVsUm9vdElkIHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCh0aGlzLmdldElkKCkpO1xuXHR9XG59XG4iXX0=