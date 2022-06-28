import { StructureDomainEvent } from '../../../../structure-core/core/structure.domain-event';
export class UniqueFilterSelectedEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'UniqueFilterSelectedEvent');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1zZWxlY3RlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvdW5pcXVlL3NlbGVjdC91bmlxdWUtZmlsdGVyLXNlbGVjdGVkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRzlGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxvQkFBb0I7SUFFbEUsWUFBWSxXQUF3QjtRQUNuQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9jb3JlL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVGaWx0ZXJTZWxlY3RlZEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCBudWxsLCAnVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudCcpO1xuXHR9XG5cbn1cbiJdfQ==