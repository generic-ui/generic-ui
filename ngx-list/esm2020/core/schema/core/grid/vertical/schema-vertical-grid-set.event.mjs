import { SchemaDomainEvent } from '../../schema.domain-event';
export class SchemaVerticalGridSetEvent extends SchemaDomainEvent {
    constructor(schemaId, verticalGrid) {
        super(schemaId, verticalGrid, 'SchemaVerticalGridSetEvent');
        this.verticalGrid = verticalGrid;
    }
    getVerticalGrid() {
        return this.verticalGrid;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3NjaGVtYS9jb3JlL2dyaWQvdmVydGljYWwvc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTlELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxpQkFBaUI7SUFFaEUsWUFBWSxRQUFrQixFQUNWLFlBQXFCO1FBQ3hDLEtBQUssQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFEekMsaUJBQVksR0FBWixZQUFZLENBQVM7SUFFekMsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi9zY2hlbWEuZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50IGV4dGVuZHMgU2NoZW1hRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKHNjaGVtYUlkOiBTY2hlbWFJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihzY2hlbWFJZCwgdmVydGljYWxHcmlkLCAnU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQnKTtcblx0fVxuXG5cdGdldFZlcnRpY2FsR3JpZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEdyaWQ7XG5cdH1cbn1cbiJdfQ==