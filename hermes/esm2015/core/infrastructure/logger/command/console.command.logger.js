import { Injectable } from '@angular/core';
import { CommandLogger } from '../../../domain/command/command.logger';
import { hermesFilter } from '../../../../common/stream/operator/hermes.filter';
import { hermesTakeUntil } from '../../../../common/stream/operator/hermes.take-until';
import { HermesSubject } from '../../../../common/stream/observable/hermes.subject';
import * as i0 from "@angular/core";
import * as i1 from "../../../domain/command/command.bus";
export class ConsoleCommandLogger extends CommandLogger {
    constructor(commandBus) {
        super();
        this.enabled = false;
        this.unsubscribe$ = new HermesSubject();
        commandBus
            .pipe(hermesFilter(() => this.enabled), hermesTakeUntil(this.unsubscribe$))
            .subscribe((command) => {
            this.log(command);
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    start() {
        this.enabled = true;
    }
    stop() {
        this.enabled = false;
    }
    print(command) {
        // eslint-disable-next-line no-console
        console.log(command.toString(), command);
    }
}
ConsoleCommandLogger.ɵfac = function ConsoleCommandLogger_Factory(t) { return new (t || ConsoleCommandLogger)(i0.ɵɵinject(i1.CommandBus)); };
ConsoleCommandLogger.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConsoleCommandLogger, factory: ConsoleCommandLogger.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConsoleCommandLogger, [{
        type: Injectable
    }], function () { return [{ type: i1.CommandBus }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5jb21tYW5kLmxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2luZnJhc3RydWN0dXJlL2xvZ2dlci9jb21tYW5kL2NvbnNvbGUuY29tbWFuZC5sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUl0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scURBQXFELENBQUM7OztBQUlwRixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsYUFBYTtJQU10RCxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssRUFBRSxDQUFDO1FBTEQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixpQkFBWSxHQUFHLElBQUksYUFBYSxFQUFRLENBQUM7UUFLaEQsVUFBVTthQUNSLElBQUksQ0FDSixZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUNoQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNsQzthQUNBLFNBQVMsQ0FBQyxDQUFDLE9BQTZCLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSTtRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFUyxLQUFLLENBQUMsT0FBNkI7UUFDNUMsc0NBQXNDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7O3dGQW5DVyxvQkFBb0I7MEVBQXBCLG9CQUFvQixXQUFwQixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRCdXMgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmJ1cyc7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZCc7XG5pbXBvcnQgeyBDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBoZXJtZXNGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5maWx0ZXInO1xuaW1wb3J0IHsgaGVybWVzVGFrZVVudGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMudGFrZS11bnRpbCc7XG5pbXBvcnQgeyBIZXJtZXNTdWJqZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5zdWJqZWN0JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uc29sZUNvbW1hbmRMb2dnZXIgZXh0ZW5kcyBDb21tYW5kTG9nZ2VyIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIGVuYWJsZWQgPSBmYWxzZTtcblxuXHRwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBIZXJtZXNTdWJqZWN0PHZvaWQ+KCk7XG5cblx0Y29uc3RydWN0b3IoY29tbWFuZEJ1czogQ29tbWFuZEJ1cykge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRjb21tYW5kQnVzXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKCgpID0+IHRoaXMuZW5hYmxlZCksXG5cdFx0XHRcdGhlcm1lc1Rha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IENvbW1hbmQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMubG9nKGNvbW1hbmQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG5cdHN0YXJ0KCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdH1cblxuXHRzdG9wKCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXHR9XG5cblx0cHJvdGVjdGVkIHByaW50KGNvbW1hbmQ6IENvbW1hbmQ8QWdncmVnYXRlSWQ+KTogdm9pZCB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRjb25zb2xlLmxvZyhjb21tYW5kLnRvU3RyaW5nKCksIGNvbW1hbmQpO1xuXHR9XG5cbn1cbiJdfQ==