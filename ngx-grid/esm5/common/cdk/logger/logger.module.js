/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Logger } from './logger';
import { ConsoleLogger } from './console.logger';
var LoggerModule = /** @class */ (function () {
    function LoggerModule() {
    }
    LoggerModule.decorators = [
        { type: NgModule, args: [{
                    providers: [{
                            provide: Logger,
                            useClass: ConsoleLogger
                        }]
                },] }
    ];
    return LoggerModule;
}());
export { LoggerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRDtJQUFBO0lBTTJCLENBQUM7O2dCQU4zQixRQUFRLFNBQUM7b0JBQ1QsU0FBUyxFQUFFLENBQUM7NEJBQ1gsT0FBTyxFQUFFLE1BQU07NEJBQ2YsUUFBUSxFQUFFLGFBQWE7eUJBQ3ZCLENBQUM7aUJBQ0Y7O0lBQzBCLG1CQUFDO0NBQUEsQUFONUIsSUFNNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IENvbnNvbGVMb2dnZXIgfSBmcm9tICcuL2NvbnNvbGUubG9nZ2VyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRwcm92aWRlcnM6IFt7XG5cdFx0cHJvdmlkZTogTG9nZ2VyLFxuXHRcdHVzZUNsYXNzOiBDb25zb2xlTG9nZ2VyXG5cdH1dXG59KVxuZXhwb3J0IGNsYXNzIExvZ2dlck1vZHVsZSB7fVxuIl19