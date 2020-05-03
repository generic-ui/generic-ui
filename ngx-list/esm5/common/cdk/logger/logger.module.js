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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRDtJQUFBO0lBT0EsQ0FBQzs7Z0JBUEEsUUFBUSxTQUFDO29CQUNULFNBQVMsRUFBRSxDQUFDOzRCQUNYLE9BQU8sRUFBRSxNQUFNOzRCQUNmLFFBQVEsRUFBRSxhQUFhO3lCQUN2QixDQUFDO2lCQUNGOztJQUVELG1CQUFDO0NBQUEsQUFQRCxJQU9DO1NBRFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyBDb25zb2xlTG9nZ2VyIH0gZnJvbSAnLi9jb25zb2xlLmxvZ2dlcic7XG5cblxuQE5nTW9kdWxlKHtcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IExvZ2dlcixcblx0XHR1c2VDbGFzczogQ29uc29sZUxvZ2dlclxuXHR9XVxufSlcbmV4cG9ydCBjbGFzcyBMb2dnZXJNb2R1bGUge1xufVxuIl19