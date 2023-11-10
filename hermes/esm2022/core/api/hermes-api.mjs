import { CommandLogger } from '../domain/command/command.logger';
import { DomainEventLogger } from '../domain/event/domain-event.logger';
import { CoreContainer } from './core.container';
export const hermesApi = 'hermesApi';
export function initHermesApi() {
    const cl = CoreContainer.resolve(CommandLogger), del = CoreContainer.resolve(DomainEventLogger);
    const api = () => {
        return {
            set loggers(enabled) {
                if (enabled) {
                    // api.commandLogger.start(); TO FIX
                    // api.eventLogger.start();
                }
                else {
                    // api.commandLogger.stop(); // TO FIX
                    // api.eventLogger.stop();
                }
            },
            set domain(domainName) {
                if (domainName) {
                    cl.setDomain(domainName);
                    del.setDomain(domainName);
                }
            }
        };
    };
    window[hermesApi] = api();
    window[hermesApi].loggers = false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2FwaS9oZXJtZXMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJakQsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUVyQyxNQUFNLFVBQVUsYUFBYTtJQUU1QixNQUFNLEVBQUUsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUM5QyxHQUFHLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRWhELE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRTtRQUNoQixPQUFPO1lBQ04sSUFBSSxPQUFPLENBQUMsT0FBZ0I7Z0JBQzNCLElBQUksT0FBTyxFQUFFO29CQUNaLG9DQUFvQztvQkFDcEMsMkJBQTJCO2lCQUMzQjtxQkFBTTtvQkFDTixzQ0FBc0M7b0JBQ3RDLDBCQUEwQjtpQkFDMUI7WUFDRixDQUFDO1lBQ0QsSUFBSSxNQUFNLENBQUMsVUFBa0I7Z0JBQzVCLElBQUksVUFBVSxFQUFFO29CQUNmLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzFCO1lBQ0YsQ0FBQztTQUNELENBQUM7SUFDSCxDQUFDLENBQUM7SUFFRixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFFMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IENvcmVDb250YWluZXIgfSBmcm9tICcuL2NvcmUuY29udGFpbmVyJztcblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcblxuZXhwb3J0IGNvbnN0IGhlcm1lc0FwaSA9ICdoZXJtZXNBcGknO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEhlcm1lc0FwaSgpOiB2b2lkIHtcblxuXHRjb25zdCBjbCA9IENvcmVDb250YWluZXIucmVzb2x2ZShDb21tYW5kTG9nZ2VyKSxcblx0XHRkZWwgPSBDb3JlQ29udGFpbmVyLnJlc29sdmUoRG9tYWluRXZlbnRMb2dnZXIpO1xuXG5cdGNvbnN0IGFwaSA9ICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0IGxvZ2dlcnMoZW5hYmxlZDogYm9vbGVhbikge1xuXHRcdFx0XHRpZiAoZW5hYmxlZCkge1xuXHRcdFx0XHRcdC8vIGFwaS5jb21tYW5kTG9nZ2VyLnN0YXJ0KCk7IFRPIEZJWFxuXHRcdFx0XHRcdC8vIGFwaS5ldmVudExvZ2dlci5zdGFydCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIGFwaS5jb21tYW5kTG9nZ2VyLnN0b3AoKTsgLy8gVE8gRklYXG5cdFx0XHRcdFx0Ly8gYXBpLmV2ZW50TG9nZ2VyLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHNldCBkb21haW4oZG9tYWluTmFtZTogc3RyaW5nKSB7XG5cdFx0XHRcdGlmIChkb21haW5OYW1lKSB7XG5cdFx0XHRcdFx0Y2wuc2V0RG9tYWluKGRvbWFpbk5hbWUpO1xuXHRcdFx0XHRcdGRlbC5zZXREb21haW4oZG9tYWluTmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXG5cdHdpbmRvd1toZXJtZXNBcGldID0gYXBpKCk7XG5cblx0d2luZG93W2hlcm1lc0FwaV0ubG9nZ2VycyA9IGZhbHNlO1xufVxuIl19