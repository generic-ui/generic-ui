import { DomainEventBus } from '../../domain/event/domain-event.bus';
import { Reactive } from '../../../common/reactive/reactive';
import { CoreContainer } from '../core.container';
/**
 * @deprecated
 */
export class ReadModelRootRepository extends Reactive {
    domainEventBus = CoreContainer.resolve(DomainEventBus);
    constructor() {
        super();
        this.domainEventBus
            .ofEvents(this.forEvents())
            .pipe(this.hermesTakeUntil())
            .subscribe((event) => {
            try {
                this.subscribe(event);
            }
            catch (e) {
                // eslint-disable-next-line no-console
                console.error(e);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb2RlbC1yb290LnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29yZS9hcGkvcmVhZC9yZWFkLW1vZGVsLXJvb3QucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFckUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRDs7R0FFRztBQUNILE1BQU0sT0FBZ0IsdUJBQStDLFNBQVEsUUFBUTtJQUVuRSxjQUFjLEdBQW1CLGFBQWEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFeEY7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxjQUFjO2FBQ2pCLFFBQVEsQ0FDUixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTLENBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFFcEMsSUFBSTtnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsc0NBQXNDO2dCQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBTUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vcmVhY3RpdmUvcmVhY3RpdmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IENvcmVDb250YWluZXIgfSBmcm9tICcuLi9jb3JlLmNvbnRhaW5lcic7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4gZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMgPSBDb3JlQ29udGFpbmVyLnJlc29sdmUoRG9tYWluRXZlbnRCdXMpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50cyhcblx0XHRcdFx0dGhpcy5mb3JFdmVudHMoKVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudDxJPikgPT4ge1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5zdWJzY3JpYmUoZXZlbnQpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBmb3JFdmVudHMoKTogQXJyYXk8dHlwZW9mIERvbWFpbkV2ZW50PjtcblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3Qgc3Vic2NyaWJlKGV2ZW50OiBEb21haW5FdmVudDxJPik6IHZvaWQ7XG5cbn1cbiJdfQ==