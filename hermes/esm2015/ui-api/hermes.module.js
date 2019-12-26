/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { COMMAND_HANDLERS } from '../domain/command/command-handlers';
import { CommandBus } from '../domain/command/command.bus';
import { CommandDispatcher } from '../domain/command/command.dispatcher';
import { CommandLogger } from '../domain/command/command.logger';
import { CommandStream } from '../domain/command/command.stream';
import { FILTERED_COMMAND_STREAM } from '../domain/command/filtered-command-stream';
import { AggregateStoreRegister } from '../domain/command/store/aggregate-store.register';
import { DOMAIN_EVENT_HANDLERS } from '../domain/event/domain-event-handlers';
import { DomainEventBus } from '../domain/event/domain-event.bus';
import { DomainEventPublisher } from '../domain/event/domain-event.publisher';
import { DomainEventLogger } from '../domain/event/domain-event.logger';
import { DomainEventStore } from '../domain/event/domain-event.store';
import { DomainEventStream } from '../domain/event/domain-event.stream';
import { EVENT_LOGGER_ENABLED } from '../domain/hermes-tokens';
import { COMMAND_LOGGER_ENABLED } from '../domain/hermes-tokens';
import { HermesApi } from '../ui-api/hermes-api';
/**
 * Infrastructure
 */
import { ConsoleCommandLogger } from '../infrastructure/logger/command/console.command.logger';
import { NoopCommandLogger } from '../infrastructure/logger/command/noop.command.logger';
import { ConsoleEventLogger } from '../infrastructure/logger/event/console.event.logger';
import { NoopEventLogger } from '../infrastructure/logger/event/noop.event.logger';
import { RandomStringGenerator } from '../common/random-string.generator';
/** @type {?} */
const hermesProviders = [
    RandomStringGenerator,
    { provide: FILTERED_COMMAND_STREAM, useExisting: CommandStream },
    CommandBus,
    CommandStream,
    CommandDispatcher,
    AggregateStoreRegister,
    DomainEventBus,
    DomainEventStream,
    DomainEventPublisher,
    DomainEventStore,
    HermesApi
];
/** @type {?} */
const providers = [
    { provide: EVENT_LOGGER_ENABLED, useValue: true },
    { provide: COMMAND_LOGGER_ENABLED, useValue: true },
    { provide: CommandLogger, useFactory: commandLoggerFactory, deps: [COMMAND_LOGGER_ENABLED, ConsoleCommandLogger, NoopCommandLogger] },
    { provide: DomainEventLogger, useFactory: eventLoggerFactory, deps: [EVENT_LOGGER_ENABLED, ConsoleEventLogger, NoopEventLogger] },
    ConsoleCommandLogger,
    NoopCommandLogger,
    NoopEventLogger,
    ConsoleEventLogger,
    ...hermesProviders
];
/**
 * @param {?} enabled
 * @param {?} consoleCommandLogger
 * @param {?} noopCommandLogger
 * @return {?}
 */
export function commandLoggerFactory(enabled, consoleCommandLogger, noopCommandLogger) {
    if (enabled) {
        return consoleCommandLogger;
    }
    else {
        return noopCommandLogger;
    }
}
/**
 * @param {?} enabled
 * @param {?} consoleEventLogger
 * @param {?} noopEventLogger
 * @return {?}
 */
export function eventLoggerFactory(enabled, consoleEventLogger, noopEventLogger) {
    if (enabled) {
        return consoleEventLogger;
    }
    else {
        return noopEventLogger;
    }
}
export class HermesModule {
    /**
     * @param {?} commandHandlers
     * @param {?} eventHandlers
     * @param {?} commandBus
     * @param {?} domainEventBus
     * @param {?} commandLogger
     * @param {?} eventLogger
     * @param {?} hermesApi
     */
    constructor(commandHandlers, eventHandlers, commandBus, domainEventBus, commandLogger, eventLogger, hermesApi) {
        this.commandLogger = commandLogger;
        this.eventLogger = eventLogger;
        this.hermesApi = hermesApi;
        this.unsubscribe$ = new Subject();
        this.loggersStart();
        this.checkNullCommand(commandBus, commandHandlers);
        this.checkCommandHandlerIsCollection(commandHandlers);
        if (commandHandlers) {
            commandHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                commandBus
                    .ofHandler(handler)
                    .pipe(takeUntil(this.unsubscribe$))
                    .subscribe((/**
                 * @param {?} command
                 * @return {?}
                 */
                (command) => {
                    handler.handleCommand(command);
                }));
            }));
        }
        if (eventHandlers) {
            domainEventBus
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                eventHandlers.forEach((/**
                 * @param {?} handler
                 * @return {?}
                 */
                (handler) => {
                    handler.handle(event);
                }));
            }));
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config = { loggers: false }) {
        return {
            ngModule: HermesModule,
            providers: providers
        };
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.loggersStop();
    }
    /**
     * @private
     * @return {?}
     */
    loggersStart() {
        this.commandLogger.start();
        this.eventLogger.start();
    }
    /**
     * @private
     * @return {?}
     */
    loggersStop() {
        this.commandLogger.stop();
        this.eventLogger.stop();
    }
    /**
     * @private
     * @param {?} commandBus
     * @param {?} commandHandlers
     * @return {?}
     */
    checkNullCommand(commandBus, commandHandlers) {
        commandBus
            .ofNullHandler(commandHandlers)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            console.log(`Command ${command.toString()} was not intercepted by any CommandHandler.`);
        }));
    }
    /**
     * @private
     * @param {?} commandHandlers
     * @return {?}
     */
    checkCommandHandlerIsCollection(commandHandlers) {
        if (commandHandlers && !Array.isArray(commandHandlers)) {
            console.log(`You might provided commandHandler without specifying "multi: true".`);
        }
    }
}
HermesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: providers
            },] }
];
/** @nocollapse */
HermesModule.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [COMMAND_HANDLERS,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [DOMAIN_EVENT_HANDLERS,] }] },
    { type: CommandBus },
    { type: DomainEventBus },
    { type: CommandLogger },
    { type: DomainEventLogger },
    { type: HermesApi }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesModule.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    HermesModule.prototype.commandLogger;
    /**
     * @type {?}
     * @private
     */
    HermesModule.prototype.eventLogger;
    /**
     * @type {?}
     * @private
     */
    HermesModule.prototype.hermesApi;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInVpLWFwaS9oZXJtZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUF1QixRQUFRLEVBQWEsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU0zQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUUxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNB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OztJQUVPLGdCQUFnQixDQUFDLFVBQXNCLEVBQUUsZUFBc0M7UUFDdEYsVUFBVTthQUNSLGFBQWEsQ0FBQyxlQUFlLENBQUM7YUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEMsU0FBUzs7OztRQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxPQUFPLENBQUMsUUFBUSxFQUFFLDZDQUE2QyxDQUFDLENBQUM7UUFDekYsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTywrQkFBK0IsQ0FBQyxlQUFzQztRQUM3RSxJQUFJLGVBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQzs7O1lBcEZELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjtnQkFDRCxTQUFTLEVBQUUsU0FBUzthQUNwQjs7OztZQVltRSxLQUFLLHVCQUEzRCxRQUFRLFlBQUksTUFBTSxTQUFDLGdCQUFnQjtZQUNhLEtBQUssdUJBQTlELFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCO1lBbEdwQyxVQUFVO1lBU1YsY0FBYztZQU5kLGFBQWE7WUFTYixpQkFBaUI7WUFVakIsU0FBUzs7Ozs7OztJQWtFakIsb0NBQXFDOzs7OztJQWFsQyxxQ0FBb0M7Ozs7O0lBQ3BDLG1DQUFzQzs7Ozs7SUFDdEMsaUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBDb21tYW5kXG4gKi9cbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IENPTU1BTkRfSEFORExFUlMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLWhhbmRsZXJzJztcbmltcG9ydCB7IENvbW1hbmRCdXMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmJ1cyc7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuaGFuZGxlcic7XG5pbXBvcnQgeyBDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgQ29tbWFuZFN0cmVhbSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuc3RyZWFtJztcbmltcG9ydCB7IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvZmlsdGVyZWQtY29tbWFuZC1zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS1zdG9yZS5yZWdpc3Rlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdG9yZSB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RvcmUnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0cmVhbSc7XG5cbi8qKlxuICogQVBQXG4gKi9cbmltcG9ydCB7IEhlcm1lc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vaGVybWVzLW1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgRVZFTlRfTE9HR0VSX0VOQUJMRUQgfSBmcm9tICcuLi9kb21haW4vaGVybWVzLXRva2Vucyc7XG5pbXBvcnQgeyBDT01NQU5EX0xPR0dFUl9FTkFCTEVEIH0gZnJvbSAnLi4vZG9tYWluL2hlcm1lcy10b2tlbnMnO1xuaW1wb3J0IHsgSGVybWVzQXBpIH0gZnJvbSAnLi4vdWktYXBpL2hlcm1lcy1hcGknO1xuXG4vKipcbiAqIEluZnJhc3RydWN0dXJlXG4gKi9cbmltcG9ydCB7IENvbnNvbGVDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvY29uc29sZS5jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBOb29wQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9jb21tYW5kL25vb3AuY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgQ29uc29sZUV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L2NvbnNvbGUuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BFdmVudExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9ldmVudC9ub29wLmV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICcuLi9jb21tb24vcmFuZG9tLXN0cmluZy5nZW5lcmF0b3InO1xuXG5cbmNvbnN0IGhlcm1lc1Byb3ZpZGVycyA9IFtcblx0UmFuZG9tU3RyaW5nR2VuZXJhdG9yLFxuXHR7IHByb3ZpZGU6IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNLCB1c2VFeGlzdGluZzogQ29tbWFuZFN0cmVhbSB9LFxuXHRDb21tYW5kQnVzLFxuXHRDb21tYW5kU3RyZWFtLFxuXHRDb21tYW5kRGlzcGF0Y2hlcixcblx0QWdncmVnYXRlU3RvcmVSZWdpc3RlcixcblxuXHREb21haW5FdmVudEJ1cyxcblx0RG9tYWluRXZlbnRTdHJlYW0sXG5cdERvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHREb21haW5FdmVudFN0b3JlLFxuXG5cdEhlcm1lc0FwaVxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHR7IHByb3ZpZGU6IEVWRU5UX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogdHJ1ZSB9LFxuXHR7IHByb3ZpZGU6IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiB0cnVlIH0sXG5cdHsgcHJvdmlkZTogQ29tbWFuZExvZ2dlciwgdXNlRmFjdG9yeTogY29tbWFuZExvZ2dlckZhY3RvcnksIGRlcHM6IFtDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBDb25zb2xlQ29tbWFuZExvZ2dlciwgTm9vcENvbW1hbmRMb2dnZXJdIH0sXG5cdHsgcHJvdmlkZTogRG9tYWluRXZlbnRMb2dnZXIsIHVzZUZhY3Rvcnk6IGV2ZW50TG9nZ2VyRmFjdG9yeSwgZGVwczogW0VWRU5UX0xPR0dFUl9FTkFCTEVELCBDb25zb2xlRXZlbnRMb2dnZXIsIE5vb3BFdmVudExvZ2dlcl0gfSxcblx0Q29uc29sZUNvbW1hbmRMb2dnZXIsXG5cdE5vb3BDb21tYW5kTG9nZ2VyLFxuXHROb29wRXZlbnRMb2dnZXIsXG5cdENvbnNvbGVFdmVudExvZ2dlcixcblx0Li4uaGVybWVzUHJvdmlkZXJzXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tbWFuZExvZ2dlckZhY3RvcnkoZW5hYmxlZDogYm9vbGVhbiwgY29uc29sZUNvbW1hbmRMb2dnZXI6IENvbnNvbGVDb21tYW5kTG9nZ2VyLCBub29wQ29tbWFuZExvZ2dlcjogTm9vcENvbW1hbmRMb2dnZXIpIHtcblxuXHRpZiAoZW5hYmxlZCkge1xuXHRcdHJldHVybiBjb25zb2xlQ29tbWFuZExvZ2dlcjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbm9vcENvbW1hbmRMb2dnZXI7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50TG9nZ2VyRmFjdG9yeShlbmFibGVkOiBib29sZWFuLCBjb25zb2xlRXZlbnRMb2dnZXI6IENvbnNvbGVFdmVudExvZ2dlciwgbm9vcEV2ZW50TG9nZ2VyOiBOb29wRXZlbnRMb2dnZXIpIHtcblxuXHRpZiAoZW5hYmxlZCkge1xuXHRcdHJldHVybiBjb25zb2xlRXZlbnRMb2dnZXI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5vb3BFdmVudExvZ2dlcjtcblx0fVxufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogcHJvdmlkZXJzXG59KVxuZXhwb3J0IGNsYXNzIEhlcm1lc01vZHVsZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogSGVybWVzTW9kdWxlQ29uZmlnID0geyBsb2dnZXJzOiBmYWxzZSB9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBIZXJtZXNNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IHByb3ZpZGVyc1xuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KENPTU1BTkRfSEFORExFUlMpIGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXI+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KERPTUFJTl9FVkVOVF9IQU5ETEVSUykgZXZlbnRIYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVyPixcblx0XHRcdFx0Y29tbWFuZEJ1czogQ29tbWFuZEJ1cyxcblx0XHRcdFx0ZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIGNvbW1hbmRMb2dnZXI6IENvbW1hbmRMb2dnZXIsXG5cdFx0XHRcdHByaXZhdGUgZXZlbnRMb2dnZXI6IERvbWFpbkV2ZW50TG9nZ2VyLFxuXHRcdFx0XHRwcml2YXRlIGhlcm1lc0FwaTogSGVybWVzQXBpKSB7IC8vIEhlcm1lc0FwaSBpbml0aWFsaXphdGlvblxuXG5cdFx0dGhpcy5sb2dnZXJzU3RhcnQoKTtcblxuXHRcdHRoaXMuY2hlY2tOdWxsQ29tbWFuZChjb21tYW5kQnVzLCBjb21tYW5kSGFuZGxlcnMpO1xuXHRcdHRoaXMuY2hlY2tDb21tYW5kSGFuZGxlcklzQ29sbGVjdGlvbihjb21tYW5kSGFuZGxlcnMpO1xuXG5cdFx0aWYgKGNvbW1hbmRIYW5kbGVycykge1xuXG5cdFx0XHRjb21tYW5kSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXIpID0+IHtcblx0XHRcdFx0Y29tbWFuZEJ1c1xuXHRcdFx0XHRcdC5vZkhhbmRsZXIoaGFuZGxlcilcblx0XHRcdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IENvbW1hbmQpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChldmVudEhhbmRsZXJzKSB7XG5cdFx0XHRkb21haW5FdmVudEJ1c1xuXHRcdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKChldmVudDogRG9tYWluRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdGV2ZW50SGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVyKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZShldmVudCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXG5cdFx0dGhpcy5sb2dnZXJzU3RvcCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBsb2dnZXJzU3RhcnQoKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kTG9nZ2VyLnN0YXJ0KCk7XG5cdFx0dGhpcy5ldmVudExvZ2dlci5zdGFydCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBsb2dnZXJzU3RvcCgpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmRMb2dnZXIuc3RvcCgpO1xuXHRcdHRoaXMuZXZlbnRMb2dnZXIuc3RvcCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja051bGxDb21tYW5kKGNvbW1hbmRCdXM6IENvbW1hbmRCdXMsIGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXI+KTogdm9pZCB7XG5cdFx0Y29tbWFuZEJ1c1xuXHRcdFx0Lm9mTnVsbEhhbmRsZXIoY29tbWFuZEhhbmRsZXJzKVxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IENvbW1hbmQpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coYENvbW1hbmQgJHtjb21tYW5kLnRvU3RyaW5nKCl9IHdhcyBub3QgaW50ZXJjZXB0ZWQgYnkgYW55IENvbW1hbmRIYW5kbGVyLmApO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ29tbWFuZEhhbmRsZXJJc0NvbGxlY3Rpb24oY29tbWFuZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlcj4pOiB2b2lkIHtcblx0XHRpZiAoY29tbWFuZEhhbmRsZXJzICYmICFBcnJheS5pc0FycmF5KGNvbW1hbmRIYW5kbGVycykpIHtcblx0XHRcdGNvbnNvbGUubG9nKGBZb3UgbWlnaHQgcHJvdmlkZWQgY29tbWFuZEhhbmRsZXIgd2l0aG91dCBzcGVjaWZ5aW5nIFwibXVsdGk6IHRydWVcIi5gKTtcblx0XHR9XG5cdH1cblxufVxuIl19