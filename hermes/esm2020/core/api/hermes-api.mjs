import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommandLogger } from '../domain/command/command.logger';
import { DomainEventLogger } from '../domain/event/domain-event.logger';
import { CoreContainer } from './core.container';
import * as i0 from "@angular/core";
export const hermesApi = 'hermesApi';
export class HermesApi {
    constructor(platformId) {
        this.platformId = platformId;
        this.commandLogger = CoreContainer.resolve(CommandLogger);
        this.eventLogger = CoreContainer.resolve(DomainEventLogger);
        if (isPlatformBrowser(this.platformId)) {
            const api = (api) => {
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
                            api.commandLogger.setDomain(domainName);
                            api.eventLogger.setDomain(domainName);
                        }
                    }
                };
            };
            window[hermesApi] = api(this);
            window[hermesApi].loggers = false;
        }
    }
    init() {
    }
}
HermesApi.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesApi, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
HermesApi.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesApi });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesApi, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2FwaS9oZXJtZXMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUlqRCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBR3JDLE1BQU0sT0FBTyxTQUFTO0lBTXJCLFlBQWtELFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFKbkQsa0JBQWEsR0FBa0IsYUFBYSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVwRSxnQkFBVyxHQUFzQixhQUFhLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFJMUYsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFFdkMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFjLEVBQUUsRUFBRTtnQkFDOUIsT0FBTztvQkFDTixJQUFJLE9BQU8sQ0FBQyxPQUFnQjt3QkFDM0IsSUFBSSxPQUFPLEVBQUU7NEJBQ1osb0NBQW9DOzRCQUNwQywyQkFBMkI7eUJBQzNCOzZCQUFNOzRCQUNOLHNDQUFzQzs0QkFDdEMsMEJBQTBCO3lCQUMxQjtvQkFDRixDQUFDO29CQUNELElBQUksTUFBTSxDQUFDLFVBQWtCO3dCQUM1QixJQUFJLFVBQVUsRUFBRTs0QkFDZixHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDeEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7eUJBQ3RDO29CQUNGLENBQUM7aUJBQ0QsQ0FBQztZQUNILENBQUMsQ0FBQztZQUVGLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDbEM7SUFDRixDQUFDO0lBRUQsSUFBSTtJQUNKLENBQUM7O3VHQXJDVyxTQUFTLGtCQU1ELFdBQVc7MkdBTm5CLFNBQVM7NEZBQVQsU0FBUztrQkFEckIsVUFBVTswREFPb0QsTUFBTTswQkFBdkQsTUFBTTsyQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBDb3JlQ29udGFpbmVyIH0gZnJvbSAnLi9jb3JlLmNvbnRhaW5lcic7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBjb25zdCBoZXJtZXNBcGkgPSAnaGVybWVzQXBpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlcm1lc0FwaSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kTG9nZ2VyOiBDb21tYW5kTG9nZ2VyID0gQ29yZUNvbnRhaW5lci5yZXNvbHZlKENvbW1hbmRMb2dnZXIpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRMb2dnZXI6IERvbWFpbkV2ZW50TG9nZ2VyID0gQ29yZUNvbnRhaW5lci5yZXNvbHZlKERvbWFpbkV2ZW50TG9nZ2VyKTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IE9iamVjdCkge1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblxuXHRcdFx0Y29uc3QgYXBpID0gKGFwaTogSGVybWVzQXBpKSA9PiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0c2V0IGxvZ2dlcnMoZW5hYmxlZDogYm9vbGVhbikge1xuXHRcdFx0XHRcdFx0aWYgKGVuYWJsZWQpIHtcblx0XHRcdFx0XHRcdFx0Ly8gYXBpLmNvbW1hbmRMb2dnZXIuc3RhcnQoKTsgVE8gRklYXG5cdFx0XHRcdFx0XHRcdC8vIGFwaS5ldmVudExvZ2dlci5zdGFydCgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gYXBpLmNvbW1hbmRMb2dnZXIuc3RvcCgpOyAvLyBUTyBGSVhcblx0XHRcdFx0XHRcdFx0Ly8gYXBpLmV2ZW50TG9nZ2VyLnN0b3AoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNldCBkb21haW4oZG9tYWluTmFtZTogc3RyaW5nKSB7XG5cdFx0XHRcdFx0XHRpZiAoZG9tYWluTmFtZSkge1xuXHRcdFx0XHRcdFx0XHRhcGkuY29tbWFuZExvZ2dlci5zZXREb21haW4oZG9tYWluTmFtZSk7XG5cdFx0XHRcdFx0XHRcdGFwaS5ldmVudExvZ2dlci5zZXREb21haW4oZG9tYWluTmFtZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblxuXHRcdFx0d2luZG93W2hlcm1lc0FwaV0gPSBhcGkodGhpcyk7XG5cblx0XHRcdHdpbmRvd1toZXJtZXNBcGldLmxvZ2dlcnMgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRpbml0KCkge1xuXHR9XG59XG4iXX0=