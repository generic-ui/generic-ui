import { NgModule } from '@angular/core';
import { Logger } from './logger';
import { ConsoleLogger } from './console.logger';
import { CoreContainer } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export function initializeLogger() {
    CoreContainer.provide(Logger, ConsoleLogger);
}
initializeLogger();
export function provideLogger() {
    return CoreContainer.resolve(Logger);
}
export class LoggerModule {
}
LoggerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: LoggerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LoggerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: LoggerModule });
LoggerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: LoggerModule, providers: [
        { provide: Logger, useFactory: provideLogger }
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: LoggerModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        { provide: Logger, useFactory: provideLogger }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9jb21tb24vc3JjL2Nkay9sb2dnZXIvbG9nZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHbkQsTUFBTSxVQUFVLGdCQUFnQjtJQUMvQixhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRUQsZ0JBQWdCLEVBQUUsQ0FBQztBQUVuQixNQUFNLFVBQVUsYUFBYTtJQUM1QixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQU9ELE1BQU0sT0FBTyxZQUFZOzt5R0FBWixZQUFZOzBHQUFaLFlBQVk7MEdBQVosWUFBWSxhQUpiO1FBQ1YsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUU7S0FDOUM7MkZBRVcsWUFBWTtrQkFMeEIsUUFBUTttQkFBQztvQkFDVCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUU7cUJBQzlDO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IENvbnNvbGVMb2dnZXIgfSBmcm9tICcuL2NvbnNvbGUubG9nZ2VyJztcbmltcG9ydCB7IENvcmVDb250YWluZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTG9nZ2VyKCk6IHZvaWQge1xuXHRDb3JlQ29udGFpbmVyLnByb3ZpZGUoTG9nZ2VyLCBDb25zb2xlTG9nZ2VyKTtcbn1cblxuaW5pdGlhbGl6ZUxvZ2dlcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUxvZ2dlcigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShMb2dnZXIpO1xufVxuXG5ATmdNb2R1bGUoe1xuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IExvZ2dlciwgdXNlRmFjdG9yeTogcHJvdmlkZUxvZ2dlciB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgTG9nZ2VyTW9kdWxlIHtcbn1cbiJdfQ==