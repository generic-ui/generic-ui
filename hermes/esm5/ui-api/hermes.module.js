/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var hermesProviders = [
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
var providers = tslib_1.__spread([
    { provide: EVENT_LOGGER_ENABLED, useValue: true },
    { provide: COMMAND_LOGGER_ENABLED, useValue: true },
    { provide: CommandLogger, useFactory: commandLoggerFactory, deps: [COMMAND_LOGGER_ENABLED, ConsoleCommandLogger, NoopCommandLogger] },
    { provide: DomainEventLogger, useFactory: eventLoggerFactory, deps: [EVENT_LOGGER_ENABLED, ConsoleEventLogger, NoopEventLogger] },
    ConsoleCommandLogger,
    NoopCommandLogger,
    NoopEventLogger,
    ConsoleEventLogger,
    HermesLoggersInitializer
], hermesProviders);
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
var HermesModule = /** @class */ (function () {
    function HermesModule(commandHandlers, eventHandlers, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        var _this = this;
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
            function (handler) {
                commandBus
                    .ofHandler(handler)
                    .pipe(takeUntil(_this.unsubscribe$))
                    .subscribe((/**
                 * @param {?} command
                 * @return {?}
                 */
                function (command) {
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
            function (event) {
                eventHandlers.forEach((/**
                 * @param {?} handler
                 * @return {?}
                 */
                function (handler) {
                    handler.handle(event);
                }));
            }));
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    HermesModule.withConfig = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = { loggers: false }; }
        return {
            ngModule: HermesModule,
            providers: providers
        };
    };
    /**
     * @return {?}
     */
    HermesModule.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.hermesLoggersInitializer.stop();
    };
    /**
     * @private
     * @param {?} commandBus
     * @param {?} commandHandlers
     * @return {?}
     */
    HermesModule.prototype.checkNullCommand = /**
     * @private
     * @param {?} commandBus
     * @param {?} commandHandlers
     * @return {?}
     */
    function (commandBus, commandHandlers) {
        commandBus
            .ofNullHandler(commandHandlers)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            console.log("Command " + command.toString() + " was not intercepted by any CommandHandler.");
        }));
    };
    /**
     * @private
     * @param {?} commandHandlers
     * @return {?}
     */
    HermesModule.prototype.checkCommandHandlerIsCollection = /**
     * @private
     * @param {?} commandHandlers
     * @return {?}
     */
    function (commandHandlers) {
        if (commandHandlers && !Array.isArray(commandHandlers)) {
            console.log("You might provided commandHandler without specifying \"multi: true\".");
        }
    };
    HermesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: providers
                },] }
    ];
    /** @nocollapse */
    HermesModule.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [COMMAND_HANDLERS,] }] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [DOMAIN_EVENT_HANDLERS,] }] },
        { type: CommandBus },
        { type: DomainEventBus },
        { type: HermesLoggersInitializer },
        { type: HermesApi }
    ]; };
    return HermesModule;
}());
export { HermesModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInVpLWFwaS9oZXJtZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBdUIsUUFBUSxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFMUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFD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O1FBQ3pGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sc0RBQStCOzs7OztJQUF2QyxVQUF3QyxlQUFpRDtRQUN4RixJQUFJLGVBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1RUFBcUUsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQzs7Z0JBekVELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxTQUFTLEVBQUUsU0FBUztpQkFDcEI7Ozs7Z0JBWW1FLEtBQUssdUJBQTNELFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO2dCQUNhLEtBQUssdUJBQTlELFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCO2dCQWpHcEMsVUFBVTtnQkFTVixjQUFjO2dCQW9CZCx3QkFBd0I7Z0JBVHhCLFNBQVM7O0lBc0lsQixtQkFBQztDQUFBLEFBM0VELElBMkVDO1NBckVZLFlBQVk7Ozs7OztJQUV4QixvQ0FBcUM7Ozs7O0lBYWxDLGdEQUEwRDs7Ozs7SUFDMUQsaUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8qKlxuICogQ29tbWFuZFxuICovXG5pbXBvcnQgeyBBZ2dyZWdhdGUgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQnO1xuaW1wb3J0IHsgQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQtaGFuZGxlcnMnO1xuaW1wb3J0IHsgQ29tbWFuZEJ1cyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuYnVzJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5oYW5kbGVyJztcbmltcG9ydCB7IENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBDb21tYW5kU3RyZWFtIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5zdHJlYW0nO1xuaW1wb3J0IHsgRklMVEVSRURfQ09NTUFORF9TVFJFQU0gfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9maWx0ZXJlZC1jb21tYW5kLXN0cmVhbSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBET01BSU5fRVZFTlRfSEFORExFUlMgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LWhhbmRsZXJzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudFN0b3JlIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdG9yZSc7XG5pbXBvcnQgeyBEb21haW5FdmVudFN0cmVhbSB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RyZWFtJztcbi8qKlxuICogQVBQXG4gKi9cbmltcG9ydCB7IEhlcm1lc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vaGVybWVzLW1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgRVZFTlRfTE9HR0VSX0VOQUJMRUQgfSBmcm9tICcuLi9kb21haW4vaGVybWVzLXRva2Vucyc7XG5pbXBvcnQgeyBIZXJtZXNBcGkgfSBmcm9tICcuLi91aS1hcGkvaGVybWVzLWFwaSc7XG4vKipcbiAqIEluZnJhc3RydWN0dXJlXG4gKi9cbmltcG9ydCB7IENvbnNvbGVDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvY29uc29sZS5jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBOb29wQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9jb21tYW5kL25vb3AuY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgQ29uc29sZUV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L2NvbnNvbGUuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BFdmVudExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9ldmVudC9ub29wLmV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICcuLi9jb21tb24vcmFuZG9tLXN0cmluZy5nZW5lcmF0b3InO1xuaW1wb3J0IHsgSGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyIH0gZnJvbSAnLi9oZXJtZXMubG9nZ2Vycy5pbml0aWFsaXplcic7XG5cblxuY29uc3QgaGVybWVzUHJvdmlkZXJzID0gW1xuXHRSYW5kb21TdHJpbmdHZW5lcmF0b3IsXG5cdHsgcHJvdmlkZTogRklMVEVSRURfQ09NTUFORF9TVFJFQU0sIHVzZUV4aXN0aW5nOiBDb21tYW5kU3RyZWFtIH0sXG5cdENvbW1hbmRCdXMsXG5cdENvbW1hbmRTdHJlYW0sXG5cdENvbW1hbmREaXNwYXRjaGVyLFxuXHRBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLFxuXG5cdERvbWFpbkV2ZW50QnVzLFxuXHREb21haW5FdmVudFN0cmVhbSxcblx0RG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cdERvbWFpbkV2ZW50U3RvcmUsXG5cblx0SGVybWVzQXBpXG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdHsgcHJvdmlkZTogRVZFTlRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiB0cnVlIH0sXG5cdHsgcHJvdmlkZTogQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHRydWUgfSxcblx0eyBwcm92aWRlOiBDb21tYW5kTG9nZ2VyLCB1c2VGYWN0b3J5OiBjb21tYW5kTG9nZ2VyRmFjdG9yeSwgZGVwczogW0NPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIENvbnNvbGVDb21tYW5kTG9nZ2VyLCBOb29wQ29tbWFuZExvZ2dlcl0gfSxcblx0eyBwcm92aWRlOiBEb21haW5FdmVudExvZ2dlciwgdXNlRmFjdG9yeTogZXZlbnRMb2dnZXJGYWN0b3J5LCBkZXBzOiBbRVZFTlRfTE9HR0VSX0VOQUJMRUQsIENvbnNvbGVFdmVudExvZ2dlciwgTm9vcEV2ZW50TG9nZ2VyXSB9LFxuXHRDb25zb2xlQ29tbWFuZExvZ2dlcixcblx0Tm9vcENvbW1hbmRMb2dnZXIsXG5cdE5vb3BFdmVudExvZ2dlcixcblx0Q29uc29sZUV2ZW50TG9nZ2VyLFxuXHRIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIsXG5cdC4uLmhlcm1lc1Byb3ZpZGVyc1xuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmRMb2dnZXJGYWN0b3J5KGVuYWJsZWQ6IGJvb2xlYW4sIGNvbnNvbGVDb21tYW5kTG9nZ2VyOiBDb25zb2xlQ29tbWFuZExvZ2dlciwgbm9vcENvbW1hbmRMb2dnZXI6IE5vb3BDb21tYW5kTG9nZ2VyKSB7XG5cblx0aWYgKGVuYWJsZWQpIHtcblx0XHRyZXR1cm4gY29uc29sZUNvbW1hbmRMb2dnZXI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5vb3BDb21tYW5kTG9nZ2VyO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudExvZ2dlckZhY3RvcnkoZW5hYmxlZDogYm9vbGVhbiwgY29uc29sZUV2ZW50TG9nZ2VyOiBDb25zb2xlRXZlbnRMb2dnZXIsIG5vb3BFdmVudExvZ2dlcjogTm9vcEV2ZW50TG9nZ2VyKSB7XG5cblx0aWYgKGVuYWJsZWQpIHtcblx0XHRyZXR1cm4gY29uc29sZUV2ZW50TG9nZ2VyO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBub29wRXZlbnRMb2dnZXI7XG5cdH1cbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IHByb3ZpZGVyc1xufSlcbmV4cG9ydCBjbGFzcyBIZXJtZXNNb2R1bGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuXHRzdGF0aWMgd2l0aENvbmZpZyhjb25maWc6IEhlcm1lc01vZHVsZUNvbmZpZyA9IHsgbG9nZ2VyczogZmFsc2UgfSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogSGVybWVzTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBwcm92aWRlcnNcblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChDT01NQU5EX0hBTkRMRVJTKSBjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVyPEFnZ3JlZ2F0ZT4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KERPTUFJTl9FVkVOVF9IQU5ETEVSUykgZXZlbnRIYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVyPixcblx0XHRcdFx0Y29tbWFuZEJ1czogQ29tbWFuZEJ1cyxcblx0XHRcdFx0ZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIGhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcjogSGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHRcdFx0XHRwcml2YXRlIGhlcm1lc0FwaTogSGVybWVzQXBpKSB7IC8vIEhlcm1lc0FwaSBpbml0aWFsaXphdGlvblxuXG5cdFx0dGhpcy5oZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIuc3RhcnQoKTtcblxuXHRcdHRoaXMuY2hlY2tOdWxsQ29tbWFuZChjb21tYW5kQnVzLCBjb21tYW5kSGFuZGxlcnMpO1xuXHRcdHRoaXMuY2hlY2tDb21tYW5kSGFuZGxlcklzQ29sbGVjdGlvbihjb21tYW5kSGFuZGxlcnMpO1xuXG5cdFx0aWYgKGNvbW1hbmRIYW5kbGVycykge1xuXG5cdFx0XHRjb21tYW5kSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXI8QWdncmVnYXRlPikgPT4ge1xuXHRcdFx0XHRjb21tYW5kQnVzXG5cdFx0XHRcdFx0Lm9mSGFuZGxlcihoYW5kbGVyKVxuXHRcdFx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQ29tbWFuZCkgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50SGFuZGxlcnMpIHtcblx0XHRcdGRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdFx0ZXZlbnRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBEb21haW5FdmVudEhhbmRsZXIpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlKGV2ZW50KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cblx0XHR0aGlzLmhlcm1lc0xvZ2dlcnNJbml0aWFsaXplci5zdG9wKCk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTnVsbENvbW1hbmQoY29tbWFuZEJ1czogQ29tbWFuZEJ1cywgY29tbWFuZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlcjxBZ2dyZWdhdGU+Pik6IHZvaWQge1xuXHRcdGNvbW1hbmRCdXNcblx0XHRcdC5vZk51bGxIYW5kbGVyKGNvbW1hbmRIYW5kbGVycylcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBDb21tYW5kICR7Y29tbWFuZC50b1N0cmluZygpfSB3YXMgbm90IGludGVyY2VwdGVkIGJ5IGFueSBDb21tYW5kSGFuZGxlci5gKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NvbW1hbmRIYW5kbGVySXNDb2xsZWN0aW9uKGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXI8QWdncmVnYXRlPj4pOiB2b2lkIHtcblx0XHRpZiAoY29tbWFuZEhhbmRsZXJzICYmICFBcnJheS5pc0FycmF5KGNvbW1hbmRIYW5kbGVycykpIHtcblx0XHRcdGNvbnNvbGUubG9nKGBZb3UgbWlnaHQgcHJvdmlkZWQgY29tbWFuZEhhbmRsZXIgd2l0aG91dCBzcGVjaWZ5aW5nIFwibXVsdGk6IHRydWVcIi5gKTtcblx0XHR9XG5cdH1cblxufVxuIl19