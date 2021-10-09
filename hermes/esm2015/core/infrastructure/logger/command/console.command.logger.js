/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandBus } from '../../../domain/command/command.bus';
import { CommandLogger } from '../../../domain/command/command.logger';
import { hermesFilter } from '../../../../common/stream/operator/hermes.filter';
import { hermesTakeUntil } from '../../../../common/stream/operator/hermes.take-until';
import { HermesSubject } from '../../../../common/stream/observable/hermes.subject';
export class ConsoleCommandLogger extends CommandLogger {
    /**
     * @param {?} commandBus
     */
    constructor(commandBus) {
        super();
        this.enabled = false;
        this.unsubscribe$ = new HermesSubject();
        commandBus
            .pipe(hermesFilter((/**
         * @return {?}
         */
        () => this.enabled)), hermesTakeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            this.log(command);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @return {?}
     */
    start() {
        this.enabled = true;
    }
    /**
     * @return {?}
     */
    stop() {
        this.enabled = false;
    }
    /**
     * @protected
     * @param {?} command
     * @return {?}
     */
    print(command) {
        // eslint-disable-next-line no-console
        console.log(command.toString(), command);
    }
}
ConsoleCommandLogger.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConsoleCommandLogger.ctorParameters = () => [
    { type: CommandBus }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConsoleCommandLogger.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    ConsoleCommandLogger.prototype.unsubscribe$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5jb21tYW5kLmxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvY29uc29sZS5jb21tYW5kLmxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBSXBGLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxhQUFhOzs7O0lBTXRELFlBQVksVUFBc0I7UUFDakMsS0FBSyxFQUFFLENBQUM7UUFMRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGlCQUFZLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztRQUtoRCxVQUFVO2FBQ1IsSUFBSSxDQUNKLFlBQVk7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFDaEMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDbEM7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxPQUE2QixFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELElBQUk7UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFFUyxLQUFLLENBQUMsT0FBNkI7UUFDNUMsc0NBQXNDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7OztZQXBDRCxVQUFVOzs7O1lBVEYsVUFBVTs7Ozs7OztJQVlsQix1Q0FBd0I7Ozs7O0lBRXhCLDRDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kQnVzIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5idXMnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQnO1xuaW1wb3J0IHsgQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgaGVybWVzRmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMuZmlsdGVyJztcbmltcG9ydCB7IGhlcm1lc1Rha2VVbnRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLnRha2UtdW50aWwnO1xuaW1wb3J0IHsgSGVybWVzU3ViamVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMuc3ViamVjdCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnNvbGVDb21tYW5kTG9nZ2VyIGV4dGVuZHMgQ29tbWFuZExvZ2dlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBlbmFibGVkID0gZmFsc2U7XG5cblx0cHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKGNvbW1hbmRCdXM6IENvbW1hbmRCdXMpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0Y29tbWFuZEJ1c1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc0ZpbHRlcigoKSA9PiB0aGlzLmVuYWJsZWQpLFxuXHRcdFx0XHRoZXJtZXNUYWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDb21tYW5kPEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0XHR0aGlzLmxvZyhjb21tYW5kKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRzdGFydCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHR9XG5cblx0c3RvcCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblx0fVxuXG5cdHByb3RlY3RlZCBwcmludChjb21tYW5kOiBDb21tYW5kPEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0Y29uc29sZS5sb2coY29tbWFuZC50b1N0cmluZygpLCBjb21tYW5kKTtcblx0fVxuXG59XG4iXX0=