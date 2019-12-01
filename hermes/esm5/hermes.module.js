/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { COMMAND_HANDLERS } from './domain/command/command-handlers';
import { CommandBus } from './domain/command/command.bus';
import { CommandDispatcher } from './domain/command/command.dispatcher';
import { CommandLogger } from './domain/command/command.logger';
import { CommandStream } from './domain/command/command.stream';
import { FILTERED_COMMAND_STREAM } from './domain/command/filtered-command-stream';
import { AggregateStoreRegister } from './domain/command/store/aggregate-store.register';
import { DOMAIN_EVENT_HANDLERS } from './domain/event/domain-event-handlers';
import { DomainEventBus } from './domain/event/domain-event.bus';
import { DomainEventPublisher } from './domain/event/domain-event.publisher';
import { DomainEventLogger } from './domain/event/domain-event.logger';
import { DomainEventStore } from './domain/event/domain-event.store';
import { DomainEventStream } from './domain/event/domain-event.stream';
import { EVENT_LOGGER_ENABLED } from './domain/hermes-tokens';
import { COMMAND_LOGGER_ENABLED } from './domain/hermes-tokens';
import { HermesApi } from './api/hermes-api';
/**
 * Infrastructure
 */
import { ConsoleCommandLogger } from './infrastructure/logger/command/console.command.logger';
import { NoopCommandLogger } from './infrastructure/logger/command/noop.command.logger';
import { ConsoleEventLogger } from './infrastructure/logger/event/console.event.logger';
import { NoopEventLogger } from './infrastructure/logger/event/noop.event.logger';
import { RandomStringGenerator } from './common/random-string.generator';
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
    ConsoleEventLogger
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
    function HermesModule(commandHandlers, eventHandlers, commandBus, domainEventBus, commandLogger, eventLogger, hermesApi) {
        var _this = this;
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
        this.loggersStop();
    };
    /**
     * @private
     * @return {?}
     */
    HermesModule.prototype.loggersStart = /**
     * @private
     * @return {?}
     */
    function () {
        this.commandLogger.start();
        this.eventLogger.start();
    };
    /**
     * @private
     * @return {?}
     */
    HermesModule.prototype.loggersStop = /**
     * @private
     * @return {?}
     */
    function () {
        this.commandLogger.stop();
        this.eventLogger.stop();
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
        { type: CommandLogger },
        { type: DomainEventLogger },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImhlcm1lcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUF1QixRQUFRLEVBQWEsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU0zQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUV6RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENB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QixVQUF5QixVQUFzQixFQUFFLGVBQXNDO1FBQ3RGLFVBQVU7YUFDUixhQUFhLENBQUMsZUFBZSxDQUFDO2FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQWdCO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBVyxPQUFPLENBQUMsUUFBUSxFQUFFLGdEQUE2QyxDQUFDLENBQUM7UUFDekYsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxzREFBK0I7Ozs7O0lBQXZDLFVBQXdDLGVBQXNDO1FBQzdFLElBQUksZUFBZSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVFQUFxRSxDQUFDLENBQUM7U0FDbkY7SUFDRixDQUFDOztnQkFwRkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFNBQVMsRUFBRSxTQUFTO2lCQUNwQjs7OztnQkFZbUUsS0FBSyx1QkFBM0QsUUFBUSxZQUFJLE1BQU0sU0FBQyxnQkFBZ0I7Z0JBQ2EsS0FBSyx1QkFBOUQsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7Z0JBbEdwQyxVQUFVO2dCQVNWLGNBQWM7Z0JBTmQsYUFBYTtnQkFTYixpQkFBaUI7Z0JBVWpCLFNBQVM7O0lBZ0psQixtQkFBQztDQUFBLEFBdEZELElBc0ZDO1NBaEZZLFlBQVk7Ozs7OztJQUV4QixvQ0FBcUM7Ozs7O0lBYWxDLHFDQUFvQzs7Ozs7SUFDcEMsbUNBQXNDOzs7OztJQUN0QyxpQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIENvbW1hbmRcbiAqL1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vZG9tYWluL2NvbW1hbmQvY29tbWFuZCc7XG5pbXBvcnQgeyBDT01NQU5EX0hBTkRMRVJTIH0gZnJvbSAnLi9kb21haW4vY29tbWFuZC9jb21tYW5kLWhhbmRsZXJzJztcbmltcG9ydCB7IENvbW1hbmRCdXMgfSBmcm9tICcuL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuYnVzJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuaGFuZGxlcic7XG5pbXBvcnQgeyBDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBDb21tYW5kU3RyZWFtIH0gZnJvbSAnLi9kb21haW4vY29tbWFuZC9jb21tYW5kLnN0cmVhbSc7XG5pbXBvcnQgeyBGSUxURVJFRF9DT01NQU5EX1NUUkVBTSB9IGZyb20gJy4vZG9tYWluL2NvbW1hbmQvZmlsdGVyZWQtY29tbWFuZC1zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB9IGZyb20gJy4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERPTUFJTl9FVkVOVF9IQU5ETEVSUyB9IGZyb20gJy4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50TG9nZ2VyIH0gZnJvbSAnLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudFN0b3JlIH0gZnJvbSAnLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0b3JlJztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RyZWFtIH0gZnJvbSAnLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0cmVhbSc7XG5cbi8qKlxuICogQVBQXG4gKi9cbmltcG9ydCB7IEhlcm1lc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vaGVybWVzLW1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgRVZFTlRfTE9HR0VSX0VOQUJMRUQgfSBmcm9tICcuL2RvbWFpbi9oZXJtZXMtdG9rZW5zJztcbmltcG9ydCB7IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQgfSBmcm9tICcuL2RvbWFpbi9oZXJtZXMtdG9rZW5zJztcbmltcG9ydCB7IEhlcm1lc0FwaSB9IGZyb20gJy4vYXBpL2hlcm1lcy1hcGknO1xuXG4vKipcbiAqIEluZnJhc3RydWN0dXJlXG4gKi9cbmltcG9ydCB7IENvbnNvbGVDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvY29tbWFuZC9jb25zb2xlLmNvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvY29tbWFuZC9ub29wLmNvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IENvbnNvbGVFdmVudExvZ2dlciB9IGZyb20gJy4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L2NvbnNvbGUuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BFdmVudExvZ2dlciB9IGZyb20gJy4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L25vb3AuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJy4vY29tbW9uL3JhbmRvbS1zdHJpbmcuZ2VuZXJhdG9yJztcblxuXG5jb25zdCBoZXJtZXNQcm92aWRlcnMgPSBbXG5cdFJhbmRvbVN0cmluZ0dlbmVyYXRvcixcblx0eyBwcm92aWRlOiBGSUxURVJFRF9DT01NQU5EX1NUUkVBTSwgdXNlRXhpc3Rpbmc6IENvbW1hbmRTdHJlYW0gfSxcblx0Q29tbWFuZEJ1cyxcblx0Q29tbWFuZFN0cmVhbSxcblx0Q29tbWFuZERpc3BhdGNoZXIsXG5cdEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIsXG5cblx0RG9tYWluRXZlbnRCdXMsXG5cdERvbWFpbkV2ZW50U3RyZWFtLFxuXHREb21haW5FdmVudFB1Ymxpc2hlcixcblx0RG9tYWluRXZlbnRTdG9yZSxcblxuXHRIZXJtZXNBcGlcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcblx0eyBwcm92aWRlOiBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHRydWUgfSxcblx0eyBwcm92aWRlOiBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogdHJ1ZSB9LFxuXHR7IHByb3ZpZGU6IENvbW1hbmRMb2dnZXIsIHVzZUZhY3Rvcnk6IGNvbW1hbmRMb2dnZXJGYWN0b3J5LCBkZXBzOiBbQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgQ29uc29sZUNvbW1hbmRMb2dnZXIsIE5vb3BDb21tYW5kTG9nZ2VyXSB9LFxuXHR7IHByb3ZpZGU6IERvbWFpbkV2ZW50TG9nZ2VyLCB1c2VGYWN0b3J5OiBldmVudExvZ2dlckZhY3RvcnksIGRlcHM6IFtFVkVOVF9MT0dHRVJfRU5BQkxFRCwgQ29uc29sZUV2ZW50TG9nZ2VyLCBOb29wRXZlbnRMb2dnZXJdIH0sXG5cdENvbnNvbGVDb21tYW5kTG9nZ2VyLFxuXHROb29wQ29tbWFuZExvZ2dlcixcblx0Tm9vcEV2ZW50TG9nZ2VyLFxuXHRDb25zb2xlRXZlbnRMb2dnZXIsXG5cdC4uLmhlcm1lc1Byb3ZpZGVyc1xuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmRMb2dnZXJGYWN0b3J5KGVuYWJsZWQ6IGJvb2xlYW4sIGNvbnNvbGVDb21tYW5kTG9nZ2VyOiBDb25zb2xlQ29tbWFuZExvZ2dlciwgbm9vcENvbW1hbmRMb2dnZXI6IE5vb3BDb21tYW5kTG9nZ2VyKSB7XG5cblx0aWYgKGVuYWJsZWQpIHtcblx0XHRyZXR1cm4gY29uc29sZUNvbW1hbmRMb2dnZXI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5vb3BDb21tYW5kTG9nZ2VyO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudExvZ2dlckZhY3RvcnkoZW5hYmxlZDogYm9vbGVhbiwgY29uc29sZUV2ZW50TG9nZ2VyOiBDb25zb2xlRXZlbnRMb2dnZXIsIG5vb3BFdmVudExvZ2dlcjogTm9vcEV2ZW50TG9nZ2VyKSB7XG5cblx0aWYgKGVuYWJsZWQpIHtcblx0XHRyZXR1cm4gY29uc29sZUV2ZW50TG9nZ2VyO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBub29wRXZlbnRMb2dnZXI7XG5cdH1cbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IHByb3ZpZGVyc1xufSlcbmV4cG9ydCBjbGFzcyBIZXJtZXNNb2R1bGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuXHRzdGF0aWMgd2l0aENvbmZpZyhjb25maWc6IEhlcm1lc01vZHVsZUNvbmZpZyA9IHsgbG9nZ2VyczogZmFsc2UgfSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogSGVybWVzTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBwcm92aWRlcnNcblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChDT01NQU5EX0hBTkRMRVJTKSBjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVyPixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChET01BSU5fRVZFTlRfSEFORExFUlMpIGV2ZW50SGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlcj4sXG5cdFx0XHRcdGNvbW1hbmRCdXM6IENvbW1hbmRCdXMsXG5cdFx0XHRcdGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBjb21tYW5kTG9nZ2VyOiBDb21tYW5kTG9nZ2VyLFxuXHRcdFx0XHRwcml2YXRlIGV2ZW50TG9nZ2VyOiBEb21haW5FdmVudExvZ2dlcixcblx0XHRcdFx0cHJpdmF0ZSBoZXJtZXNBcGk6IEhlcm1lc0FwaSkgeyAvLyBIZXJtZXNBcGkgaW5pdGlhbGl6YXRpb25cblxuXHRcdHRoaXMubG9nZ2Vyc1N0YXJ0KCk7XG5cblx0XHR0aGlzLmNoZWNrTnVsbENvbW1hbmQoY29tbWFuZEJ1cywgY29tbWFuZEhhbmRsZXJzKTtcblx0XHR0aGlzLmNoZWNrQ29tbWFuZEhhbmRsZXJJc0NvbGxlY3Rpb24oY29tbWFuZEhhbmRsZXJzKTtcblxuXHRcdGlmIChjb21tYW5kSGFuZGxlcnMpIHtcblxuXHRcdFx0Y29tbWFuZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IENvbW1hbmRIYW5kbGVyKSA9PiB7XG5cdFx0XHRcdGNvbW1hbmRCdXNcblx0XHRcdFx0XHQub2ZIYW5kbGVyKGhhbmRsZXIpXG5cdFx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnRIYW5kbGVycykge1xuXHRcdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcblx0XHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cblx0XHRcdFx0XHRldmVudEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlcikgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGUoZXZlbnQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblxuXHRcdHRoaXMubG9nZ2Vyc1N0b3AoKTtcblx0fVxuXG5cdHByaXZhdGUgbG9nZ2Vyc1N0YXJ0KCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZExvZ2dlci5zdGFydCgpO1xuXHRcdHRoaXMuZXZlbnRMb2dnZXIuc3RhcnQoKTtcblx0fVxuXG5cdHByaXZhdGUgbG9nZ2Vyc1N0b3AoKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kTG9nZ2VyLnN0b3AoKTtcblx0XHR0aGlzLmV2ZW50TG9nZ2VyLnN0b3AoKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tOdWxsQ29tbWFuZChjb21tYW5kQnVzOiBDb21tYW5kQnVzLCBjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVyPik6IHZvaWQge1xuXHRcdGNvbW1hbmRCdXNcblx0XHRcdC5vZk51bGxIYW5kbGVyKGNvbW1hbmRIYW5kbGVycylcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBDb21tYW5kICR7Y29tbWFuZC50b1N0cmluZygpfSB3YXMgbm90IGludGVyY2VwdGVkIGJ5IGFueSBDb21tYW5kSGFuZGxlci5gKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NvbW1hbmRIYW5kbGVySXNDb2xsZWN0aW9uKGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXI+KTogdm9pZCB7XG5cdFx0aWYgKGNvbW1hbmRIYW5kbGVycyAmJiAhQXJyYXkuaXNBcnJheShjb21tYW5kSGFuZGxlcnMpKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgWW91IG1pZ2h0IHByb3ZpZGVkIGNvbW1hbmRIYW5kbGVyIHdpdGhvdXQgc3BlY2lmeWluZyBcIm11bHRpOiB0cnVlXCIuYCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==