import { EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaThemeSetEvent } from '../../core/theme/schema-theme-set.event';
export class SchemaThemeRepository extends EventDrivenRepository {
    constructor() {
        super();
    }
    forEvent() {
        return SchemaThemeSetEvent;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnRoZW1lLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc2NoZW1hL2NvcmUtcmVhZC90aGVtZS9zY2hlbWEudGhlbWUucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW1CLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHNUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHOUUsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHFCQUFpRTtJQUUzRztRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50VHlwZSwgRXZlbnREcml2ZW5SZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2NvcmUvc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9jb3JlL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudERyaXZlblJlcG9zaXRvcnk8U2NoZW1hSWQsIFNjaGVtYVRoZW1lU2V0RXZlbnQsIFNjaGVtYVRoZW1lPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTY2hlbWFUaGVtZVNldEV2ZW50PiB7XG5cdFx0cmV0dXJuIFNjaGVtYVRoZW1lU2V0RXZlbnQ7XG5cdH1cblxufVxuIl19