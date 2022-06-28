import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
export class HermesLoggersInitializer {
    // private readonly commandLogger: CommandLogger = CoreContainer.resolve(CommandLogger);
    // private readonly eventLogger: DomainEventLogger = CoreContainer.resolve(DomainEventLogger);
    constructor(platformId) {
        this.platformId = platformId;
    }
    start() {
        this.loggersStart();
    }
    stop() {
        this.loggersStop();
    }
    loggersStart() {
        if (isPlatformBrowser(this.platformId)) {
            // this.commandLogger.start();
            // this.eventLogger.start();
        }
    }
    loggersStop() {
        if (isPlatformBrowser(this.platformId)) {
            // this.commandLogger.stop(); // TO FIX
            // this.eventLogger.stop();
        }
    }
}
HermesLoggersInitializer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HermesLoggersInitializer, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
HermesLoggersInitializer.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HermesLoggersInitializer });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HermesLoggersInitializer, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmxvZ2dlcnMuaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29yZS9hcGkvaGVybWVzLmxvZ2dlcnMuaW5pdGlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUlwRCxNQUFNLE9BQU8sd0JBQXdCO0lBRXBDLHdGQUF3RjtJQUV4Riw4RkFBOEY7SUFFOUYsWUFBa0QsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7SUFDakUsQ0FBQztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUk7UUFDSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLFlBQVk7UUFDbkIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsOEJBQThCO1lBQzlCLDRCQUE0QjtTQUM1QjtJQUNGLENBQUM7SUFFTyxXQUFXO1FBQ2xCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLHVDQUF1QztZQUN2QywyQkFBMkI7U0FDM0I7SUFDRixDQUFDOztxSEE3Qlcsd0JBQXdCLGtCQU1oQixXQUFXO3lIQU5uQix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFEcEMsVUFBVTs7MEJBT0csTUFBTTsyQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIge1xuXG5cdC8vIHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZExvZ2dlcjogQ29tbWFuZExvZ2dlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShDb21tYW5kTG9nZ2VyKTtcblxuXHQvLyBwcml2YXRlIHJlYWRvbmx5IGV2ZW50TG9nZ2VyOiBEb21haW5FdmVudExvZ2dlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudExvZ2dlcik7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0fVxuXG5cdHN0YXJ0KCk6IHZvaWQge1xuXHRcdHRoaXMubG9nZ2Vyc1N0YXJ0KCk7XG5cdH1cblxuXHRzdG9wKCk6IHZvaWQge1xuXHRcdHRoaXMubG9nZ2Vyc1N0b3AoKTtcblx0fVxuXG5cdHByaXZhdGUgbG9nZ2Vyc1N0YXJ0KCk6IHZvaWQge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHQvLyB0aGlzLmNvbW1hbmRMb2dnZXIuc3RhcnQoKTtcblx0XHRcdC8vIHRoaXMuZXZlbnRMb2dnZXIuc3RhcnQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGxvZ2dlcnNTdG9wKCk6IHZvaWQge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHQvLyB0aGlzLmNvbW1hbmRMb2dnZXIuc3RvcCgpOyAvLyBUTyBGSVhcblx0XHRcdC8vIHRoaXMuZXZlbnRMb2dnZXIuc3RvcCgpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=