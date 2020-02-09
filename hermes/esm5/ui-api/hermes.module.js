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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInVpLWFwaS9oZXJtZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBdUIsUUFBUSxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFMUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFD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O1FBQ3pGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sc0RBQStCOzs7OztJQUF2QyxVQUF3QyxlQUFzQztRQUM3RSxJQUFJLGVBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1RUFBcUUsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQzs7Z0JBekVELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxTQUFTLEVBQUUsU0FBUztpQkFDcEI7Ozs7Z0JBWW1FLEtBQUssdUJBQTNELFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO2dCQUNhLEtBQUssdUJBQTlELFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCO2dCQWpHcEMsVUFBVTtnQkFTVixjQUFjO2dCQW9CZCx3QkFBd0I7Z0JBVHhCLFNBQVM7O0lBc0lsQixtQkFBQztDQUFBLEFBM0VELElBMkVDO1NBckVZLFlBQVk7Ozs7OztJQUV4QixvQ0FBcUM7Ozs7O0lBYWxDLGdEQUEwRDs7Ozs7SUFDMUQsaUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8qKlxuICogQ29tbWFuZFxuICovXG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZCc7XG5pbXBvcnQgeyBDT01NQU5EX0hBTkRMRVJTIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC1oYW5kbGVycyc7XG5pbXBvcnQgeyBDb21tYW5kQnVzIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5idXMnO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmhhbmRsZXInO1xuaW1wb3J0IHsgQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IENvbW1hbmRTdHJlYW0gfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLnN0cmVhbSc7XG5pbXBvcnQgeyBGSUxURVJFRF9DT01NQU5EX1NUUkVBTSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2ZpbHRlcmVkLWNvbW1hbmQtc3RyZWFtJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUtc3RvcmUucmVnaXN0ZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERPTUFJTl9FVkVOVF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmJ1cyc7XG5pbXBvcnQgeyBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuaGFuZGxlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RvcmUgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0b3JlJztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RyZWFtIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdHJlYW0nO1xuLyoqXG4gKiBBUFBcbiAqL1xuaW1wb3J0IHsgSGVybWVzTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9oZXJtZXMtbW9kdWxlLWNvbmZpZyc7XG5pbXBvcnQgeyBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBFVkVOVF9MT0dHRVJfRU5BQkxFRCB9IGZyb20gJy4uL2RvbWFpbi9oZXJtZXMtdG9rZW5zJztcbmltcG9ydCB7IEhlcm1lc0FwaSB9IGZyb20gJy4uL3VpLWFwaS9oZXJtZXMtYXBpJztcbi8qKlxuICogSW5mcmFzdHJ1Y3R1cmVcbiAqL1xuaW1wb3J0IHsgQ29uc29sZUNvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvY29tbWFuZC9jb25zb2xlLmNvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvbm9vcC5jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBDb25zb2xlRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvZXZlbnQvY29uc29sZS5ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgTm9vcEV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L25vb3AuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJy4uL2NvbW1vbi9yYW5kb20tc3RyaW5nLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIgfSBmcm9tICcuL2hlcm1lcy5sb2dnZXJzLmluaXRpYWxpemVyJztcblxuXG5jb25zdCBoZXJtZXNQcm92aWRlcnMgPSBbXG5cdFJhbmRvbVN0cmluZ0dlbmVyYXRvcixcblx0eyBwcm92aWRlOiBGSUxURVJFRF9DT01NQU5EX1NUUkVBTSwgdXNlRXhpc3Rpbmc6IENvbW1hbmRTdHJlYW0gfSxcblx0Q29tbWFuZEJ1cyxcblx0Q29tbWFuZFN0cmVhbSxcblx0Q29tbWFuZERpc3BhdGNoZXIsXG5cdEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIsXG5cblx0RG9tYWluRXZlbnRCdXMsXG5cdERvbWFpbkV2ZW50U3RyZWFtLFxuXHREb21haW5FdmVudFB1Ymxpc2hlcixcblx0RG9tYWluRXZlbnRTdG9yZSxcblxuXHRIZXJtZXNBcGlcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcblx0eyBwcm92aWRlOiBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHRydWUgfSxcblx0eyBwcm92aWRlOiBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogdHJ1ZSB9LFxuXHR7IHByb3ZpZGU6IENvbW1hbmRMb2dnZXIsIHVzZUZhY3Rvcnk6IGNvbW1hbmRMb2dnZXJGYWN0b3J5LCBkZXBzOiBbQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgQ29uc29sZUNvbW1hbmRMb2dnZXIsIE5vb3BDb21tYW5kTG9nZ2VyXSB9LFxuXHR7IHByb3ZpZGU6IERvbWFpbkV2ZW50TG9nZ2VyLCB1c2VGYWN0b3J5OiBldmVudExvZ2dlckZhY3RvcnksIGRlcHM6IFtFVkVOVF9MT0dHRVJfRU5BQkxFRCwgQ29uc29sZUV2ZW50TG9nZ2VyLCBOb29wRXZlbnRMb2dnZXJdIH0sXG5cdENvbnNvbGVDb21tYW5kTG9nZ2VyLFxuXHROb29wQ29tbWFuZExvZ2dlcixcblx0Tm9vcEV2ZW50TG9nZ2VyLFxuXHRDb25zb2xlRXZlbnRMb2dnZXIsXG5cdEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcixcblx0Li4uaGVybWVzUHJvdmlkZXJzXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tbWFuZExvZ2dlckZhY3RvcnkoZW5hYmxlZDogYm9vbGVhbiwgY29uc29sZUNvbW1hbmRMb2dnZXI6IENvbnNvbGVDb21tYW5kTG9nZ2VyLCBub29wQ29tbWFuZExvZ2dlcjogTm9vcENvbW1hbmRMb2dnZXIpIHtcblxuXHRpZiAoZW5hYmxlZCkge1xuXHRcdHJldHVybiBjb25zb2xlQ29tbWFuZExvZ2dlcjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbm9vcENvbW1hbmRMb2dnZXI7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50TG9nZ2VyRmFjdG9yeShlbmFibGVkOiBib29sZWFuLCBjb25zb2xlRXZlbnRMb2dnZXI6IENvbnNvbGVFdmVudExvZ2dlciwgbm9vcEV2ZW50TG9nZ2VyOiBOb29wRXZlbnRMb2dnZXIpIHtcblxuXHRpZiAoZW5hYmxlZCkge1xuXHRcdHJldHVybiBjb25zb2xlRXZlbnRMb2dnZXI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5vb3BFdmVudExvZ2dlcjtcblx0fVxufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogcHJvdmlkZXJzXG59KVxuZXhwb3J0IGNsYXNzIEhlcm1lc01vZHVsZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogSGVybWVzTW9kdWxlQ29uZmlnID0geyBsb2dnZXJzOiBmYWxzZSB9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBIZXJtZXNNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IHByb3ZpZGVyc1xuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KENPTU1BTkRfSEFORExFUlMpIGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXI+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KERPTUFJTl9FVkVOVF9IQU5ETEVSUykgZXZlbnRIYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVyPixcblx0XHRcdFx0Y29tbWFuZEJ1czogQ29tbWFuZEJ1cyxcblx0XHRcdFx0ZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIGhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcjogSGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHRcdFx0XHRwcml2YXRlIGhlcm1lc0FwaTogSGVybWVzQXBpKSB7IC8vIEhlcm1lc0FwaSBpbml0aWFsaXphdGlvblxuXG5cdFx0dGhpcy5oZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIuc3RhcnQoKTtcblxuXHRcdHRoaXMuY2hlY2tOdWxsQ29tbWFuZChjb21tYW5kQnVzLCBjb21tYW5kSGFuZGxlcnMpO1xuXHRcdHRoaXMuY2hlY2tDb21tYW5kSGFuZGxlcklzQ29sbGVjdGlvbihjb21tYW5kSGFuZGxlcnMpO1xuXG5cdFx0aWYgKGNvbW1hbmRIYW5kbGVycykge1xuXG5cdFx0XHRjb21tYW5kSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXIpID0+IHtcblx0XHRcdFx0Y29tbWFuZEJ1c1xuXHRcdFx0XHRcdC5vZkhhbmRsZXIoaGFuZGxlcilcblx0XHRcdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IENvbW1hbmQpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChldmVudEhhbmRsZXJzKSB7XG5cdFx0XHRkb21haW5FdmVudEJ1c1xuXHRcdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKChldmVudDogRG9tYWluRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdGV2ZW50SGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVyKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZShldmVudCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXG5cdFx0dGhpcy5oZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIuc3RvcCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja051bGxDb21tYW5kKGNvbW1hbmRCdXM6IENvbW1hbmRCdXMsIGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXI+KTogdm9pZCB7XG5cdFx0Y29tbWFuZEJ1c1xuXHRcdFx0Lm9mTnVsbEhhbmRsZXIoY29tbWFuZEhhbmRsZXJzKVxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IENvbW1hbmQpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coYENvbW1hbmQgJHtjb21tYW5kLnRvU3RyaW5nKCl9IHdhcyBub3QgaW50ZXJjZXB0ZWQgYnkgYW55IENvbW1hbmRIYW5kbGVyLmApO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ29tbWFuZEhhbmRsZXJJc0NvbGxlY3Rpb24oY29tbWFuZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlcj4pOiB2b2lkIHtcblx0XHRpZiAoY29tbWFuZEhhbmRsZXJzICYmICFBcnJheS5pc0FycmF5KGNvbW1hbmRIYW5kbGVycykpIHtcblx0XHRcdGNvbnNvbGUubG9nKGBZb3UgbWlnaHQgcHJvdmlkZWQgY29tbWFuZEhhbmRsZXIgd2l0aG91dCBzcGVjaWZ5aW5nIFwibXVsdGk6IHRydWVcIi5gKTtcblx0XHR9XG5cdH1cblxufVxuIl19