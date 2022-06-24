import { NgModule } from '@angular/core';
import { Logger } from './logger';
import { ConsoleLogger } from './console.logger';
import { CoreContainer } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
CoreContainer.provide(Logger, ConsoleLogger);
export function provideLogger() {
    return CoreContainer.resolve(Logger);
}
export class LoggerModule {
}
LoggerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LoggerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LoggerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LoggerModule });
LoggerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LoggerModule, providers: [
        { provide: Logger, useFactory: provideLogger }
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LoggerModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        { provide: Logger, useFactory: provideLogger }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVuRCxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztBQUU3QyxNQUFNLFVBQVUsYUFBYTtJQUM1QixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQU9ELE1BQU0sT0FBTyxZQUFZOzswR0FBWixZQUFZOzJHQUFaLFlBQVk7MkdBQVosWUFBWSxhQUpiO1FBQ1YsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUU7S0FDOUM7NEZBRVcsWUFBWTtrQkFMeEIsUUFBUTttQkFBQztvQkFDVCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUU7cUJBQzlDO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IENvbnNvbGVMb2dnZXIgfSBmcm9tICcuL2NvbnNvbGUubG9nZ2VyJztcbmltcG9ydCB7IENvcmVDb250YWluZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5Db3JlQ29udGFpbmVyLnByb3ZpZGUoTG9nZ2VyLCBDb25zb2xlTG9nZ2VyKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVMb2dnZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoTG9nZ2VyKTtcbn1cblxuQE5nTW9kdWxlKHtcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBMb2dnZXIsIHVzZUZhY3Rvcnk6IHByb3ZpZGVMb2dnZXIgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2dlck1vZHVsZSB7XG59XG4iXX0=