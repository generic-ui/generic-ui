import { StructureDomainEvent } from '../../../structure-core/core/structure.domain-event';
export class SelectionModeSetEvent extends StructureDomainEvent {
    constructor(aggregateId, mode) {
        super(aggregateId, mode, 'SelectionModeSetEvent');
        this.mode = mode;
    }
    getMode() {
        return this.mode;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vY29yZS9tb2RlL3NlbGVjdGlvbi1tb2RlLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUUzRixNQUFNLE9BQU8scUJBQXNCLFNBQVEsb0JBQW9CO0lBRTlELFlBQVksV0FBd0IsRUFDaEIsSUFBc0I7UUFDekMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUQvQixTQUFJLEdBQUosSUFBSSxDQUFrQjtJQUUxQyxDQUFDO0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGUgfSBmcm9tICcuLi8uLi9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9jb3JlL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uTW9kZVNldEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIG1vZGUsICdTZWxlY3Rpb25Nb2RlU2V0RXZlbnQnKTtcblx0fVxuXG5cdGdldE1vZGUoKTogUm93U2VsZWN0aW9uTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubW9kZTtcblx0fVxuXG59XG4iXX0=