import { StructureSummariesChangedEvent } from './structure.summaries-changed.event';
import { StructureAggregateEvent } from '../../structure-core/core/structure.aggregate-event';
export class StructureSummariesChangedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId, summarizedValues) {
        super(aggregateId, 'StructureSummariesChangedAggregateEvent');
        this.summarizedValues = summarizedValues;
    }
    toDomainEvent() {
        return new StructureSummariesChangedEvent(this.getAggregateId(), this.summarizedValues);
    }
    getSummaries() {
        return this.summarizedValues;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvc3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUc5RixNQUFNLE9BQU8sdUNBQXdDLFNBQVEsdUJBQXVCO0lBRW5GLFlBQVksV0FBd0IsRUFDaEIsZ0JBQThDO1FBQ2pFLEtBQUssQ0FBQyxXQUFXLEVBQUUseUNBQXlDLENBQUMsQ0FBQztRQUQzQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQThCO0lBRWxFLENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLDhCQUE4QixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN1bW1hcmllc1ZhbHVlcyB9IGZyb20gJy4uL2RvbWFpbi9jYWxjdWxhdGlvbi9zdW1tYXJpZXMudmFsdWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWNvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtY29yZS9jb3JlL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN1bW1hcml6ZWRWYWx1ZXM6IE1hcDxzdHJpbmcsIFN1bW1hcmllc1ZhbHVlcz4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1N0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5zdW1tYXJpemVkVmFsdWVzKTtcblx0fVxuXG5cdGdldFN1bW1hcmllcygpOiBNYXA8c3RyaW5nLCBTdW1tYXJpZXNWYWx1ZXM+IHtcblx0XHRyZXR1cm4gdGhpcy5zdW1tYXJpemVkVmFsdWVzO1xuXHR9XG59XG4iXX0=