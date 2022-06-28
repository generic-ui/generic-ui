import { hermesFilter, hermesMap } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from './column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from './width/set-container-width/composition-container-width-set.event';
import { CompositionEventRepository } from '../api/composition.event-repository';
export class CompositionDomainEventRepository extends CompositionEventRepository {
    constructor() {
        super();
    }
    onColumnsChanged(compositionId) {
        return this.onEvent(compositionId, CompositionColumnsSetEvent);
    }
    onContainerWidthChanged(compositionId) {
        return this.onEvent(compositionId, CompositionContainerWidthSetEvent)
            .pipe(hermesMap((event) => {
            return event.getPayload();
        }), hermesFilter((width) => !!width));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZG9tYWluLWV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvY29tcG9zaXRpb24vY29yZS9jb21wb3NpdGlvbi5kb21haW4tZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQztBQUUvRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUdqRixNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsMEJBQTBCO0lBRS9FO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsYUFBeUM7UUFFekQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxhQUF5QztRQUVoRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGlDQUFpQyxDQUFDO2FBQy9ELElBQUksQ0FDSixTQUFTLENBQUMsQ0FBQyxLQUF3QyxFQUFFLEVBQUU7WUFDdEQsT0FBTyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLEVBQ0YsWUFBWSxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQ3hDLENBQUM7SUFDUixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoZXJtZXNGaWx0ZXIsIGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2FwaS9nbG9iYWwvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vc2V0LWNvbHVtbnMvY29tcG9zaXRpb24uY29sdW1ucy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi9hcGkvY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRG9tYWluRXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvbkNvbHVtbnNDaGFuZ2VkKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudD4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChjb21wb3NpdGlvbklkLCBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCk7XG5cdH1cblxuXHRvbkNvbnRhaW5lcldpZHRoQ2hhbmdlZChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KGNvbXBvc2l0aW9uSWQsIENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChldmVudDogQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gZXZlbnQuZ2V0UGF5bG9hZCgpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigod2lkdGg6IG51bWJlcikgPT4gISF3aWR0aClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=