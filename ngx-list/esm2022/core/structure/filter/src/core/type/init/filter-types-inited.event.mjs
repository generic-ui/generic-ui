import { StructureDomainEvent } from '../../../../../structure-core/src/core/structure.domain-event';
export class FilterTypesInitedEvent extends StructureDomainEvent {
    map;
    constructor(aggregateId, map) {
        super(aggregateId, map, 'FilterTypesInitedEvent');
        this.map = map;
    }
    getMap() {
        return this.map;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGVzLWluaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9jb3JlL3R5cGUvaW5pdC9maWx0ZXItdHlwZXMtaW5pdGVkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRXJHLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxvQkFBb0I7SUFHM0M7SUFEcEIsWUFBWSxXQUF3QixFQUNoQixHQUF3QztRQUMzRCxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBRC9CLFFBQUcsR0FBSCxHQUFHLENBQXFDO0lBRTVELENBQUM7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlclR5cGVNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2FwaS90eXBlL2ZpbHRlci10eXBlLm1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2NvcmUvc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBtYXA6IE1hcDxzdHJpbmcsIEFycmF5PEZpbHRlclR5cGVNb2RlbD4+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIG1hcCwgJ0ZpbHRlclR5cGVzSW5pdGVkRXZlbnQnKTtcblx0fVxuXG5cdGdldE1hcCgpOiBNYXA8c3RyaW5nLCBBcnJheTxGaWx0ZXJUeXBlTW9kZWw+PiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwO1xuXHR9XG5cbn1cbiJdfQ==