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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInVpLWFwaS9oZXJtZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUF1QixRQUFRLEVBQWEsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUszQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUUxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNB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QUFDLFFBQVEsRUFBRSw2Q0FBNkMsQ0FBQyxDQUFDO1FBQ3pGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sK0JBQStCLENBQUMsZUFBc0M7UUFDN0UsSUFBSSxlQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMscUVBQXFFLENBQUMsQ0FBQztTQUNuRjtJQUNGLENBQUM7OztZQXpFRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFLFNBQVM7YUFDcEI7Ozs7WUFZbUUsS0FBSyx1QkFBM0QsUUFBUSxZQUFJLE1BQU0sU0FBQyxnQkFBZ0I7WUFDYSxLQUFLLHVCQUE5RCxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjtZQWpHcEMsVUFBVTtZQVNWLGNBQWM7WUFvQmQsd0JBQXdCO1lBVHhCLFNBQVM7Ozs7Ozs7SUFtRWpCLG9DQUFxQzs7Ozs7SUFhbEMsZ0RBQTBEOzs7OztJQUMxRCxpQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLyoqXG4gKiBDb21tYW5kXG4gKi9cbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IENPTU1BTkRfSEFORExFUlMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLWhhbmRsZXJzJztcbmltcG9ydCB7IENvbW1hbmRCdXMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmJ1cyc7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuaGFuZGxlcic7XG5pbXBvcnQgeyBDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgQ29tbWFuZFN0cmVhbSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuc3RyZWFtJztcbmltcG9ydCB7IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvZmlsdGVyZWQtY29tbWFuZC1zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS1zdG9yZS5yZWdpc3Rlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdG9yZSB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RvcmUnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0cmVhbSc7XG4vKipcbiAqIEFQUFxuICovXG5pbXBvcnQgeyBIZXJtZXNNb2R1bGVDb25maWcgfSBmcm9tICcuL2hlcm1lcy1tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIEVWRU5UX0xPR0dFUl9FTkFCTEVEIH0gZnJvbSAnLi4vZG9tYWluL2hlcm1lcy10b2tlbnMnO1xuaW1wb3J0IHsgSGVybWVzQXBpIH0gZnJvbSAnLi4vdWktYXBpL2hlcm1lcy1hcGknO1xuLyoqXG4gKiBJbmZyYXN0cnVjdHVyZVxuICovXG5pbXBvcnQgeyBDb25zb2xlQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9jb21tYW5kL2NvbnNvbGUuY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgTm9vcENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvY29tbWFuZC9ub29wLmNvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IENvbnNvbGVFdmVudExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9ldmVudC9jb25zb2xlLmV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBOb29wRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvZXZlbnQvbm9vcC5ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnLi4vY29tbW9uL3JhbmRvbS1zdHJpbmcuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplciB9IGZyb20gJy4vaGVybWVzLmxvZ2dlcnMuaW5pdGlhbGl6ZXInO1xuXG5cbmNvbnN0IGhlcm1lc1Byb3ZpZGVycyA9IFtcblx0UmFuZG9tU3RyaW5nR2VuZXJhdG9yLFxuXHR7IHByb3ZpZGU6IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNLCB1c2VFeGlzdGluZzogQ29tbWFuZFN0cmVhbSB9LFxuXHRDb21tYW5kQnVzLFxuXHRDb21tYW5kU3RyZWFtLFxuXHRDb21tYW5kRGlzcGF0Y2hlcixcblx0QWdncmVnYXRlU3RvcmVSZWdpc3RlcixcblxuXHREb21haW5FdmVudEJ1cyxcblx0RG9tYWluRXZlbnRTdHJlYW0sXG5cdERvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHREb21haW5FdmVudFN0b3JlLFxuXG5cdEhlcm1lc0FwaVxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHR7IHByb3ZpZGU6IEVWRU5UX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogdHJ1ZSB9LFxuXHR7IHByb3ZpZGU6IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiB0cnVlIH0sXG5cdHsgcHJvdmlkZTogQ29tbWFuZExvZ2dlciwgdXNlRmFjdG9yeTogY29tbWFuZExvZ2dlckZhY3RvcnksIGRlcHM6IFtDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBDb25zb2xlQ29tbWFuZExvZ2dlciwgTm9vcENvbW1hbmRMb2dnZXJdIH0sXG5cdHsgcHJvdmlkZTogRG9tYWluRXZlbnRMb2dnZXIsIHVzZUZhY3Rvcnk6IGV2ZW50TG9nZ2VyRmFjdG9yeSwgZGVwczogW0VWRU5UX0xPR0dFUl9FTkFCTEVELCBDb25zb2xlRXZlbnRMb2dnZXIsIE5vb3BFdmVudExvZ2dlcl0gfSxcblx0Q29uc29sZUNvbW1hbmRMb2dnZXIsXG5cdE5vb3BDb21tYW5kTG9nZ2VyLFxuXHROb29wRXZlbnRMb2dnZXIsXG5cdENvbnNvbGVFdmVudExvZ2dlcixcblx0SGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHQuLi5oZXJtZXNQcm92aWRlcnNcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21tYW5kTG9nZ2VyRmFjdG9yeShlbmFibGVkOiBib29sZWFuLCBjb25zb2xlQ29tbWFuZExvZ2dlcjogQ29uc29sZUNvbW1hbmRMb2dnZXIsIG5vb3BDb21tYW5kTG9nZ2VyOiBOb29wQ29tbWFuZExvZ2dlcikge1xuXG5cdGlmIChlbmFibGVkKSB7XG5cdFx0cmV0dXJuIGNvbnNvbGVDb21tYW5kTG9nZ2VyO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBub29wQ29tbWFuZExvZ2dlcjtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRMb2dnZXJGYWN0b3J5KGVuYWJsZWQ6IGJvb2xlYW4sIGNvbnNvbGVFdmVudExvZ2dlcjogQ29uc29sZUV2ZW50TG9nZ2VyLCBub29wRXZlbnRMb2dnZXI6IE5vb3BFdmVudExvZ2dlcikge1xuXG5cdGlmIChlbmFibGVkKSB7XG5cdFx0cmV0dXJuIGNvbnNvbGVFdmVudExvZ2dlcjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbm9vcEV2ZW50TG9nZ2VyO1xuXHR9XG59XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBwcm92aWRlcnNcbn0pXG5leHBvcnQgY2xhc3MgSGVybWVzTW9kdWxlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0c3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBIZXJtZXNNb2R1bGVDb25maWcgPSB7IGxvZ2dlcnM6IGZhbHNlIH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEhlcm1lc01vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogcHJvdmlkZXJzXG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoQ09NTUFORF9IQU5ETEVSUykgY29tbWFuZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlcj4sXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3QoRE9NQUlOX0VWRU5UX0hBTkRMRVJTKSBldmVudEhhbmRsZXJzOiBBcnJheTxEb21haW5FdmVudEhhbmRsZXI+LFxuXHRcdFx0XHRjb21tYW5kQnVzOiBDb21tYW5kQnVzLFxuXHRcdFx0XHRkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyOiBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIsXG5cdFx0XHRcdHByaXZhdGUgaGVybWVzQXBpOiBIZXJtZXNBcGkpIHsgLy8gSGVybWVzQXBpIGluaXRpYWxpemF0aW9uXG5cblx0XHR0aGlzLmhlcm1lc0xvZ2dlcnNJbml0aWFsaXplci5zdGFydCgpO1xuXG5cdFx0dGhpcy5jaGVja051bGxDb21tYW5kKGNvbW1hbmRCdXMsIGNvbW1hbmRIYW5kbGVycyk7XG5cdFx0dGhpcy5jaGVja0NvbW1hbmRIYW5kbGVySXNDb2xsZWN0aW9uKGNvbW1hbmRIYW5kbGVycyk7XG5cblx0XHRpZiAoY29tbWFuZEhhbmRsZXJzKSB7XG5cblx0XHRcdGNvbW1hbmRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDb21tYW5kSGFuZGxlcikgPT4ge1xuXHRcdFx0XHRjb21tYW5kQnVzXG5cdFx0XHRcdFx0Lm9mSGFuZGxlcihoYW5kbGVyKVxuXHRcdFx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQ29tbWFuZCkgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50SGFuZGxlcnMpIHtcblx0XHRcdGRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdFx0ZXZlbnRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBEb21haW5FdmVudEhhbmRsZXIpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlKGV2ZW50KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cblx0XHR0aGlzLmhlcm1lc0xvZ2dlcnNJbml0aWFsaXplci5zdG9wKCk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTnVsbENvbW1hbmQoY29tbWFuZEJ1czogQ29tbWFuZEJ1cywgY29tbWFuZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlcj4pOiB2b2lkIHtcblx0XHRjb21tYW5kQnVzXG5cdFx0XHQub2ZOdWxsSGFuZGxlcihjb21tYW5kSGFuZGxlcnMpXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQ29tbWFuZCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhgQ29tbWFuZCAke2NvbW1hbmQudG9TdHJpbmcoKX0gd2FzIG5vdCBpbnRlcmNlcHRlZCBieSBhbnkgQ29tbWFuZEhhbmRsZXIuYCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDb21tYW5kSGFuZGxlcklzQ29sbGVjdGlvbihjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVyPik6IHZvaWQge1xuXHRcdGlmIChjb21tYW5kSGFuZGxlcnMgJiYgIUFycmF5LmlzQXJyYXkoY29tbWFuZEhhbmRsZXJzKSkge1xuXHRcdFx0Y29uc29sZS5sb2coYFlvdSBtaWdodCBwcm92aWRlZCBjb21tYW5kSGFuZGxlciB3aXRob3V0IHNwZWNpZnlpbmcgXCJtdWx0aTogdHJ1ZVwiLmApO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=