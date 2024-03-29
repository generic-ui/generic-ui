import { EventDrivenRepository } from '@generic-ui/hermes';
import { SelectionTypeSetEvent } from '../../core/type/selection-type-set.event';
export class FormationTypeRepository extends EventDrivenRepository {
    constructor() {
        super();
    }
    forEvent() {
        return SelectionTypeSetEvent;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLnR5cGUucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9jb3JlLXJlYWQvdHlwZS9mb3JtYXRpb24udHlwZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUIscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUdqRixNQUFNLE9BQU8sdUJBQXdCLFNBQVEscUJBQTJFO0lBRXZIO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRUeXBlLCBFdmVudERyaXZlblJlcG9zaXRvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vY29yZS90eXBlL3NlbGVjdGlvbi10eXBlLXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vYXBpL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvblR5cGVSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnREcml2ZW5SZXBvc2l0b3J5PFN0cnVjdHVyZUlkLCBTZWxlY3Rpb25UeXBlU2V0RXZlbnQsIFJvd1NlbGVjdGlvblR5cGU+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFNlbGVjdGlvblR5cGVTZXRFdmVudD4ge1xuXHRcdHJldHVybiBTZWxlY3Rpb25UeXBlU2V0RXZlbnQ7XG5cdH1cblxufVxuIl19