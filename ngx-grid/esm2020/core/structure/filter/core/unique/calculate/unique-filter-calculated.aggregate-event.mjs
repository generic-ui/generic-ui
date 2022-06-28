import { UniqueFilterCalculatedEvent } from './unique-filter-calculated.event';
import { StructureAggregateEvent } from '../../../../structure-core/core/structure.aggregate-event';
export class UniqueFilterCalculatedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId, map) {
        super(aggregateId, 'UniqueFilterCalculatedAggregateEvent');
        this.map = map;
    }
    toDomainEvent() {
        return new UniqueFilterCalculatedEvent(this.getAggregateId(), this.map);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvdW5pcXVlL2NhbGN1bGF0ZS91bmlxdWUtZmlsdGVyLWNhbGN1bGF0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBR3BHLE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSx1QkFBdUI7SUFFaEYsWUFBWSxXQUF3QixFQUNoQixHQUFvQztRQUN2RCxLQUFLLENBQUMsV0FBVyxFQUFFLHNDQUFzQyxDQUFDLENBQUM7UUFEeEMsUUFBRyxHQUFILEdBQUcsQ0FBaUM7SUFFeEQsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksMkJBQTJCLENBQ3JDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FDUixDQUFDO0lBQ0gsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudCB9IGZyb20gJy4vdW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50JztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3VuaXF1ZS91bmlxdWUtdmFsdWUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9jb3JlL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1hcDogTWFwPHN0cmluZywgQXJyYXk8VW5pcXVlVmFsdWU+Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQoXG5cdFx0XHR0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHR0aGlzLm1hcFxuXHRcdCk7XG5cdH1cblxufVxuIl19