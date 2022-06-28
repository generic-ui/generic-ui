import { EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaHorizontalGridSetEvent } from '../../core/grid/horizontal/schema-horizontal-grid-set.event';
export class SchemaHorizontalGridRepository extends EventDrivenRepository {
    constructor() {
        super();
    }
    forEvent() {
        return SchemaHorizontalGridSetEvent;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmhvcml6b250YWwtZ3JpZC5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3NjaGVtYS9jb3JlLXJlYWQvaG9yaXpvbnRhbC1ncmlkL3NjaGVtYS5ob3Jpem9udGFsLWdyaWQucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW1CLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFNUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFHM0csTUFBTSxPQUFPLDhCQUErQixTQUFRLHFCQUFzRTtJQUV6SDtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLDRCQUE0QixDQUFDO0lBQ3JDLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50VHlwZSwgRXZlbnREcml2ZW5SZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vY29yZS9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uLy4uL2NvcmUvZ3JpZC9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnREcml2ZW5SZXBvc2l0b3J5PFNjaGVtYUlkLCBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50LCBib29sZWFuPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50PiB7XG5cdFx0cmV0dXJuIFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQ7XG5cdH1cblxufVxuIl19