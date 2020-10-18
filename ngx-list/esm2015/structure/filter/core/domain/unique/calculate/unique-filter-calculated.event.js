/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
export class UniqueFilterCalculatedEvent extends StructureDomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} map
     */
    constructor(aggregateId, map) {
        super(aggregateId, 'UniqueFilterCalculatedEvent');
        this.map = map;
    }
    /**
     * @return {?}
     */
    getUniqueValues() {
        return this.map;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueFilterCalculatedEvent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS9jYWxjdWxhdGUvdW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUV6RixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsb0JBQW9COzs7OztJQUVwRSxZQUFZLFdBQXdCLEVBQ2hCLEdBQW9DO1FBQ3ZELEtBQUssQ0FBQyxXQUFXLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUQvQixRQUFHLEdBQUgsR0FBRyxDQUFpQztJQUV4RCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqQixDQUFDO0NBRUQ7Ozs7OztJQVJHLDBDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlIH0gZnJvbSAnLi4vdW5pcXVlLXZhbHVlJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1hcDogTWFwPHN0cmluZywgQXJyYXk8VW5pcXVlVmFsdWU+Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRVbmlxdWVWYWx1ZXMoKTogTWFwPHN0cmluZywgQXJyYXk8VW5pcXVlVmFsdWU+PiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwO1xuXHR9XG5cbn1cbiJdfQ==