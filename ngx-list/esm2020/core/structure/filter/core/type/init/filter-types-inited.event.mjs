import { StructureDomainEvent } from '../../../../structure-core/core/structure.domain-event';
export class FilterTypesInitedEvent extends StructureDomainEvent {
    constructor(aggregateId, map) {
        super(aggregateId, map, 'FilterTypesInitedEvent');
        this.map = map;
    }
    getMap() {
        return this.map;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGVzLWluaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvdHlwZS9pbml0L2ZpbHRlci10eXBlcy1pbml0ZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFOUYsTUFBTSxPQUFPLHNCQUF1QixTQUFRLG9CQUFvQjtJQUUvRCxZQUFZLFdBQXdCLEVBQ2hCLEdBQXdDO1FBQzNELEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFEL0IsUUFBRyxHQUFILEdBQUcsQ0FBcUM7SUFFNUQsQ0FBQztJQUVELE1BQU07UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9hcGkvdHlwZS9maWx0ZXItdHlwZS5tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL2NvcmUvc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBtYXA6IE1hcDxzdHJpbmcsIEFycmF5PEZpbHRlclR5cGVNb2RlbD4+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIG1hcCwgJ0ZpbHRlclR5cGVzSW5pdGVkRXZlbnQnKTtcblx0fVxuXG5cdGdldE1hcCgpOiBNYXA8c3RyaW5nLCBBcnJheTxGaWx0ZXJUeXBlTW9kZWw+PiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwO1xuXHR9XG5cbn1cbiJdfQ==