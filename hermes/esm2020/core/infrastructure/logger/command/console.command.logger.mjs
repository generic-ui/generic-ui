import { Injectable } from '@angular/core';
import { CommandBus } from '../../../domain/command/command.bus';
import { CommandLogger } from '../../../domain/command/command.logger';
import { hermesFilter } from '../../../../common/stream/core/operator/hermes.filter';
import { hermesTakeUntil } from '../../../../common/stream/core/operator/hermes.take-until';
import { HermesSubject } from '../../../../common/stream/core/observable/hermes.subject';
import { CoreContainer } from '../../../api/core.container';
import * as i0 from "@angular/core";
export class ConsoleCommandLogger extends CommandLogger {
    constructor() {
        super();
        this.enabled = false;
        this.unsubscribe$ = new HermesSubject();
        this.commandBus = CoreContainer.resolve(CommandBus);
        this.commandBus
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
ConsoleCommandLogger.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ConsoleCommandLogger, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ConsoleCommandLogger.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ConsoleCommandLogger });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ConsoleCommandLogger, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5jb21tYW5kLmxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2luZnJhc3RydWN0dXJlL2xvZ2dlci9jb21tYW5kL2NvbnNvbGUuY29tbWFuZC5sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFJNUQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGFBQWE7SUFRdEQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQVBELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFUCxpQkFBWSxHQUFHLElBQUksYUFBYSxFQUFRLENBQUM7UUFFekMsZUFBVSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQW1DLFVBQVUsQ0FBQyxDQUFDO1FBS2pHLElBQUksQ0FBQyxVQUFVO2FBQ2IsSUFBSSxDQUNKLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQ2hDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2xDO2FBQ0EsU0FBUyxDQUFDLENBQUMsT0FBNkIsRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVTLEtBQUssQ0FBQyxPQUE2QjtRQUM1QyxzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7a0hBckNXLG9CQUFvQjtzSEFBcEIsb0JBQW9COzRGQUFwQixvQkFBb0I7a0JBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEJ1cyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuYnVzJztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2FwaS90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IGhlcm1lc0ZpbHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vY29yZS9vcGVyYXRvci9oZXJtZXMuZmlsdGVyJztcbmltcG9ydCB7IGhlcm1lc1Rha2VVbnRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vY29yZS9vcGVyYXRvci9oZXJtZXMudGFrZS11bnRpbCc7XG5pbXBvcnQgeyBIZXJtZXNTdWJqZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9jb3JlL29ic2VydmFibGUvaGVybWVzLnN1YmplY3QnO1xuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb3JlLmNvbnRhaW5lcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnNvbGVDb21tYW5kTG9nZ2VyIGV4dGVuZHMgQ29tbWFuZExvZ2dlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBlbmFibGVkID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YnNjcmliZSQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZEJ1cyA9IENvcmVDb250YWluZXIucmVzb2x2ZTxDb21tYW5kQnVzPENvbW1hbmQ8QWdncmVnYXRlSWQ+Pj4oQ29tbWFuZEJ1cyk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuY29tbWFuZEJ1c1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc0ZpbHRlcigoKSA9PiB0aGlzLmVuYWJsZWQpLFxuXHRcdFx0XHRoZXJtZXNUYWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDb21tYW5kPEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0XHR0aGlzLmxvZyhjb21tYW5kKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRzdGFydCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHR9XG5cblx0c3RvcCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblx0fVxuXG5cdHByb3RlY3RlZCBwcmludChjb21tYW5kOiBDb21tYW5kPEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0Y29uc29sZS5sb2coY29tbWFuZC50b1N0cmluZygpLCBjb21tYW5kKTtcblx0fVxuXG59XG4iXX0=