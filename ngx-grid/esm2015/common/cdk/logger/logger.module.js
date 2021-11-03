import { NgModule } from '@angular/core';
import { Logger } from './logger';
import { ConsoleLogger } from './console.logger';
import * as i0 from "@angular/core";
export class LoggerModule {
}
LoggerModule.ɵfac = function LoggerModule_Factory(t) { return new (t || LoggerModule)(); };
LoggerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LoggerModule });
LoggerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [{
            provide: Logger,
            useClass: ConsoleLogger
        }] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoggerModule, [{
        type: NgModule,
        args: [{
                providers: [{
                        provide: Logger,
                        useClass: ConsoleLogger
                    }]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQVNqRCxNQUFNLE9BQU8sWUFBWTs7d0VBQVosWUFBWTs4REFBWixZQUFZO21FQUxiLENBQUM7WUFDWCxPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxhQUFhO1NBQ3ZCLENBQUM7dUZBRVUsWUFBWTtjQU54QixRQUFRO2VBQUM7Z0JBQ1QsU0FBUyxFQUFFLENBQUM7d0JBQ1gsT0FBTyxFQUFFLE1BQU07d0JBQ2YsUUFBUSxFQUFFLGFBQWE7cUJBQ3ZCLENBQUM7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyBDb25zb2xlTG9nZ2VyIH0gZnJvbSAnLi9jb25zb2xlLmxvZ2dlcic7XG5cblxuQE5nTW9kdWxlKHtcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IExvZ2dlcixcblx0XHR1c2VDbGFzczogQ29uc29sZUxvZ2dlclxuXHR9XVxufSlcbmV4cG9ydCBjbGFzcyBMb2dnZXJNb2R1bGUge1xufVxuIl19