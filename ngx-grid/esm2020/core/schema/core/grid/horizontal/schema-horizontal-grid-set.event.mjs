import { SchemaDomainEvent } from '../../schema.domain-event';
export class SchemaHorizontalGridSetEvent extends SchemaDomainEvent {
    constructor(schemaId, horizontalGrid) {
        super(schemaId, horizontalGrid, 'SchemaHorizontalGridSetEvent');
        this.horizontalGrid = horizontalGrid;
    }
    getHorizontalGrid() {
        return this.horizontalGrid;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc2NoZW1hL2NvcmUvZ3JpZC9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRzlELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxpQkFBaUI7SUFFbEUsWUFBWSxRQUFrQixFQUNWLGNBQXVCO1FBQzFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFEN0MsbUJBQWMsR0FBZCxjQUFjLENBQVM7SUFFM0MsQ0FBQztJQUVELGlCQUFpQjtRQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi9zY2hlbWEuZG9tYWluLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCBleHRlbmRzIFNjaGVtYURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogU2NoZW1hSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihzY2hlbWFJZCwgaG9yaXpvbnRhbEdyaWQsICdTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRIb3Jpem9udGFsR3JpZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ob3Jpem9udGFsR3JpZDtcblx0fVxufVxuIl19