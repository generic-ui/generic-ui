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
import { COMMAND_LOGGER_ENABLED, EVENT_LOGGER_ENABLED } from '../domain/hermes-tokens';
import { HermesApi } from '../ui-api/hermes-api';
/**
 * Infrastructure
 */
import { ConsoleCommandLogger } from '../infrastructure/logger/command/console.command.logger';
import { NoopCommandLogger } from '../infrastructure/logger/command/noop.command.logger';
import { ConsoleEventLogger } from '../infrastructure/logger/event/console.event.logger';
import { NoopEventLogger } from '../infrastructure/logger/event/noop.event.logger';
import { RandomStringGenerator } from '../common/random-string.generator';
import { HermesLoggersInitializer } from './hermes.loggers.initializer';
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
    HermesLoggersInitializer,
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
     * @param {?} hermesLoggersInitializer
     * @param {?} hermesApi
     */
    constructor(commandHandlers, eventHandlers, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        this.hermesLoggersInitializer = hermesLoggersInitializer;
        this.hermesApi = hermesApi;
        this.unsubscribe$ = new Subject();
        this.hermesLoggersInitializer.start();
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
        this.hermesLoggersInitializer.stop();
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
    { type: HermesLoggersInitializer },
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
    HermesModule.prototype.hermesLoggersInitializer;
    /**
     * @type {?}
     * @private
     */
    HermesModule.prototype.hermesApi;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInVpLWFwaS9oZXJtZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUF1QixRQUFRLEVBQWEsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU0zQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUUxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNB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QUFDLFFBQVEsRUFBRSw2Q0FBNkMsQ0FBQyxDQUFDO1FBQ3pGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sK0JBQStCLENBQUMsZUFBaUQ7UUFDeEYsSUFBSSxlQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMscUVBQXFFLENBQUMsQ0FBQztTQUNuRjtJQUNGLENBQUM7OztZQXpFRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFLFNBQVM7YUFDcEI7Ozs7WUFZbUUsS0FBSyx1QkFBM0QsUUFBUSxZQUFJLE1BQU0sU0FBQyxnQkFBZ0I7WUFDYSxLQUFLLHVCQUE5RCxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjtZQWpHcEMsVUFBVTtZQVNWLGNBQWM7WUFvQmQsd0JBQXdCO1lBVHhCLFNBQVM7Ozs7Ozs7SUFtRWpCLG9DQUFxQzs7Ozs7SUFhbEMsZ0RBQTBEOzs7OztJQUMxRCxpQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLyoqXG4gKiBDb21tYW5kXG4gKi9cbmltcG9ydCB7IEFnZ3JlZ2F0ZSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZCc7XG5pbXBvcnQgeyBDT01NQU5EX0hBTkRMRVJTIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC1oYW5kbGVycyc7XG5pbXBvcnQgeyBDb21tYW5kQnVzIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5idXMnO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmhhbmRsZXInO1xuaW1wb3J0IHsgQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IENvbW1hbmRTdHJlYW0gfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLnN0cmVhbSc7XG5pbXBvcnQgeyBGSUxURVJFRF9DT01NQU5EX1NUUkVBTSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2ZpbHRlcmVkLWNvbW1hbmQtc3RyZWFtJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUtc3RvcmUucmVnaXN0ZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERPTUFJTl9FVkVOVF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmJ1cyc7XG5pbXBvcnQgeyBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuaGFuZGxlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RvcmUgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0b3JlJztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RyZWFtIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdHJlYW0nO1xuLyoqXG4gKiBBUFBcbiAqL1xuaW1wb3J0IHsgSGVybWVzTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9oZXJtZXMtbW9kdWxlLWNvbmZpZyc7XG5pbXBvcnQgeyBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBFVkVOVF9MT0dHRVJfRU5BQkxFRCB9IGZyb20gJy4uL2RvbWFpbi9oZXJtZXMtdG9rZW5zJztcbmltcG9ydCB7IEhlcm1lc0FwaSB9IGZyb20gJy4uL3VpLWFwaS9oZXJtZXMtYXBpJztcbi8qKlxuICogSW5mcmFzdHJ1Y3R1cmVcbiAqL1xuaW1wb3J0IHsgQ29uc29sZUNvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvY29tbWFuZC9jb25zb2xlLmNvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvbm9vcC5jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBDb25zb2xlRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvZXZlbnQvY29uc29sZS5ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgTm9vcEV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L25vb3AuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJy4uL2NvbW1vbi9yYW5kb20tc3RyaW5nLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIgfSBmcm9tICcuL2hlcm1lcy5sb2dnZXJzLmluaXRpYWxpemVyJztcblxuXG5jb25zdCBoZXJtZXNQcm92aWRlcnMgPSBbXG5cdFJhbmRvbVN0cmluZ0dlbmVyYXRvcixcblx0eyBwcm92aWRlOiBGSUxURVJFRF9DT01NQU5EX1NUUkVBTSwgdXNlRXhpc3Rpbmc6IENvbW1hbmRTdHJlYW0gfSxcblx0Q29tbWFuZEJ1cyxcblx0Q29tbWFuZFN0cmVhbSxcblx0Q29tbWFuZERpc3BhdGNoZXIsXG5cdEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIsXG5cblx0RG9tYWluRXZlbnRCdXMsXG5cdERvbWFpbkV2ZW50U3RyZWFtLFxuXHREb21haW5FdmVudFB1Ymxpc2hlcixcblx0RG9tYWluRXZlbnRTdG9yZSxcblxuXHRIZXJtZXNBcGlcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcblx0eyBwcm92aWRlOiBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHRydWUgfSxcblx0eyBwcm92aWRlOiBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogdHJ1ZSB9LFxuXHR7IHByb3ZpZGU6IENvbW1hbmRMb2dnZXIsIHVzZUZhY3Rvcnk6IGNvbW1hbmRMb2dnZXJGYWN0b3J5LCBkZXBzOiBbQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgQ29uc29sZUNvbW1hbmRMb2dnZXIsIE5vb3BDb21tYW5kTG9nZ2VyXSB9LFxuXHR7IHByb3ZpZGU6IERvbWFpbkV2ZW50TG9nZ2VyLCB1c2VGYWN0b3J5OiBldmVudExvZ2dlckZhY3RvcnksIGRlcHM6IFtFVkVOVF9MT0dHRVJfRU5BQkxFRCwgQ29uc29sZUV2ZW50TG9nZ2VyLCBOb29wRXZlbnRMb2dnZXJdIH0sXG5cdENvbnNvbGVDb21tYW5kTG9nZ2VyLFxuXHROb29wQ29tbWFuZExvZ2dlcixcblx0Tm9vcEV2ZW50TG9nZ2VyLFxuXHRDb25zb2xlRXZlbnRMb2dnZXIsXG5cdEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcixcblx0Li4uaGVybWVzUHJvdmlkZXJzXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tbWFuZExvZ2dlckZhY3RvcnkoZW5hYmxlZDogYm9vbGVhbiwgY29uc29sZUNvbW1hbmRMb2dnZXI6IENvbnNvbGVDb21tYW5kTG9nZ2VyLCBub29wQ29tbWFuZExvZ2dlcjogTm9vcENvbW1hbmRMb2dnZXIpIHtcblxuXHRpZiAoZW5hYmxlZCkge1xuXHRcdHJldHVybiBjb25zb2xlQ29tbWFuZExvZ2dlcjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbm9vcENvbW1hbmRMb2dnZXI7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50TG9nZ2VyRmFjdG9yeShlbmFibGVkOiBib29sZWFuLCBjb25zb2xlRXZlbnRMb2dnZXI6IENvbnNvbGVFdmVudExvZ2dlciwgbm9vcEV2ZW50TG9nZ2VyOiBOb29wRXZlbnRMb2dnZXIpIHtcblxuXHRpZiAoZW5hYmxlZCkge1xuXHRcdHJldHVybiBjb25zb2xlRXZlbnRMb2dnZXI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5vb3BFdmVudExvZ2dlcjtcblx0fVxufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogcHJvdmlkZXJzXG59KVxuZXhwb3J0IGNsYXNzIEhlcm1lc01vZHVsZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogSGVybWVzTW9kdWxlQ29uZmlnID0geyBsb2dnZXJzOiBmYWxzZSB9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBIZXJtZXNNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IHByb3ZpZGVyc1xuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KENPTU1BTkRfSEFORExFUlMpIGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXI8QWdncmVnYXRlPj4sXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3QoRE9NQUlOX0VWRU5UX0hBTkRMRVJTKSBldmVudEhhbmRsZXJzOiBBcnJheTxEb21haW5FdmVudEhhbmRsZXI+LFxuXHRcdFx0XHRjb21tYW5kQnVzOiBDb21tYW5kQnVzLFxuXHRcdFx0XHRkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyOiBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIsXG5cdFx0XHRcdHByaXZhdGUgaGVybWVzQXBpOiBIZXJtZXNBcGkpIHsgLy8gSGVybWVzQXBpIGluaXRpYWxpemF0aW9uXG5cblx0XHR0aGlzLmhlcm1lc0xvZ2dlcnNJbml0aWFsaXplci5zdGFydCgpO1xuXG5cdFx0dGhpcy5jaGVja051bGxDb21tYW5kKGNvbW1hbmRCdXMsIGNvbW1hbmRIYW5kbGVycyk7XG5cdFx0dGhpcy5jaGVja0NvbW1hbmRIYW5kbGVySXNDb2xsZWN0aW9uKGNvbW1hbmRIYW5kbGVycyk7XG5cblx0XHRpZiAoY29tbWFuZEhhbmRsZXJzKSB7XG5cblx0XHRcdGNvbW1hbmRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDb21tYW5kSGFuZGxlcjxBZ2dyZWdhdGU+KSA9PiB7XG5cdFx0XHRcdGNvbW1hbmRCdXNcblx0XHRcdFx0XHQub2ZIYW5kbGVyKGhhbmRsZXIpXG5cdFx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnRIYW5kbGVycykge1xuXHRcdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcblx0XHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cblx0XHRcdFx0XHRldmVudEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlcikgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGUoZXZlbnQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblxuXHRcdHRoaXMuaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLnN0b3AoKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tOdWxsQ29tbWFuZChjb21tYW5kQnVzOiBDb21tYW5kQnVzLCBjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVyPEFnZ3JlZ2F0ZT4+KTogdm9pZCB7XG5cdFx0Y29tbWFuZEJ1c1xuXHRcdFx0Lm9mTnVsbEhhbmRsZXIoY29tbWFuZEhhbmRsZXJzKVxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IENvbW1hbmQpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coYENvbW1hbmQgJHtjb21tYW5kLnRvU3RyaW5nKCl9IHdhcyBub3QgaW50ZXJjZXB0ZWQgYnkgYW55IENvbW1hbmRIYW5kbGVyLmApO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ29tbWFuZEhhbmRsZXJJc0NvbGxlY3Rpb24oY29tbWFuZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlcjxBZ2dyZWdhdGU+Pik6IHZvaWQge1xuXHRcdGlmIChjb21tYW5kSGFuZGxlcnMgJiYgIUFycmF5LmlzQXJyYXkoY29tbWFuZEhhbmRsZXJzKSkge1xuXHRcdFx0Y29uc29sZS5sb2coYFlvdSBtaWdodCBwcm92aWRlZCBjb21tYW5kSGFuZGxlciB3aXRob3V0IHNwZWNpZnlpbmcgXCJtdWx0aTogdHJ1ZVwiLmApO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=