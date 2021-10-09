/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FilterTypesInitedEvent } from './filter-types-inited.event';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
export class FilterTypesInitedAggregateEvent extends StructureAggregateEvent {
    /**
     * @param {?} structureId
     * @param {?} filterTypes
     */
    constructor(structureId, filterTypes) {
        super(structureId, 'FilterTypesInitedAggregateEvent');
        this.filterTypes = filterTypes;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new FilterTypesInitedEvent(this.getAggregateId(), this.filterTypes);
    }
    /**
     * @return {?}
     */
    getFilterTypes() {
        return this.filterTypes;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterTypesInitedAggregateEvent.prototype.filterTypes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGVzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdHlwZS9pbml0L2ZpbHRlci10eXBlcy1pbml0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUcvRixNQUFNLE9BQU8sK0JBQWdDLFNBQVEsdUJBQXVCOzs7OztJQUUzRSxZQUFZLFdBQXdCLEVBQ2hCLFdBQW9EO1FBQ3ZFLEtBQUssQ0FBQyxXQUFXLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQURuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUM7SUFFeEUsQ0FBQzs7OztJQUVELGFBQWE7UUFFWixPQUFPLElBQUksc0JBQXNCLENBQ2hDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FDaEIsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Q0FDRDs7Ozs7O0lBZkcsc0RBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3R5cGUvZmlsdGVyLXR5cGUucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50IH0gZnJvbSAnLi9maWx0ZXItdHlwZXMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVzSW5pdGVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVzOiBNYXA8c3RyaW5nLCBBcnJheTxGaWx0ZXJUeXBlUmVhZE1vZGVsPj4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ0ZpbHRlclR5cGVzSW5pdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRcdHJldHVybiBuZXcgRmlsdGVyVHlwZXNJbml0ZWRFdmVudChcblx0XHRcdHRoaXMuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdHRoaXMuZmlsdGVyVHlwZXNcblx0XHQpO1xuXHR9XG5cblx0Z2V0RmlsdGVyVHlwZXMoKTogTWFwPHN0cmluZywgQXJyYXk8RmlsdGVyVHlwZVJlYWRNb2RlbD4+IHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJUeXBlcztcblx0fVxufVxuIl19