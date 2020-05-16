/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injector, NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { HermesApi } from './/hermes-api';
/**
 * Infrastructure
 */
import { ConsoleCommandLogger } from '../infrastructure/logger/command/console.command.logger';
import { NoopCommandLogger } from '../infrastructure/logger/command/noop.command.logger';
import { ConsoleEventLogger } from '../infrastructure/logger/event/console.event.logger';
import { NoopEventLogger } from '../infrastructure/logger/event/noop.event.logger';
import { RandomStringGenerator } from '../common/random-string.generator';
import { HermesLoggersInitializer } from './hermes.loggers.initializer';
import { createAggregateCommandHandlerFactory } from '../domain/command/aggregate/create/create-aggregate.command-handler-impl';
import { CREATE_AGGREGATE_COMMAND_HANDLERS } from '../domain/command/aggregate/create/create-aggregate.command-handlers-token';
import { AggregateFactoryArchive, AggregateRepositoryArchive } from '../domain/command/config/define';
import { aggregateDefinitionToken } from '../domain/command/config/aggregate-definition.token';
import { HermesDomainModule } from './hermes.domain.module';
import { COMMAND_HANDLERS } from '../domain/command/handler/command-handlers';
import { commandHandlerFactory } from '../domain/command/handler/command-handler-impl';
import { Reactive } from '../common/reactive';
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
    HermesLoggersInitializer,
    AggregateFactoryArchive,
    AggregateRepositoryArchive
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
/**
 * @template I, A, C, E
 */
var HermesModule = /** @class */ (function (_super) {
    tslib_1.__extends(HermesModule, _super);
    function HermesModule(eventHandlers, aggregateCommandHandlers, handlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        var _this = _super.call(this) || this;
        _this.hermesLoggersInitializer = hermesLoggersInitializer;
        _this.hermesApi = hermesApi;
        _this.hermesLoggersInitializer.start();
        _this.checkNullCommand(commandBus, handlers, aggregateCommandHandlers);
        _this.checkCommandHandlerIsCollection(handlers);
        if (definedAggregate) {
            definedAggregate.forEach((/**
             * @param {?} def
             * @return {?}
             */
            function (def) {
                /** @type {?} */
                var factory = injector.get(def.factory);
                /** @type {?} */
                var repository = injector.get(def.repository);
                aggregateFactoryArchive.add(def.key, factory);
                aggregateRepositoryArchive.add(def.key, repository);
            }));
        }
        if (aggregateCommandHandlers) {
            aggregateCommandHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                commandBus
                    .ofCreateAggregateHandler(handler)
                    .pipe(_this.takeUntil())
                    .subscribe((/**
                 * @param {?} command
                 * @return {?}
                 */
                function (command) {
                    handler.handleCommand(command);
                }));
            }));
        }
        if (handlers) {
            handlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                commandBus
                    .ofCommandHandler(handler)
                    .pipe(_this.takeUntil())
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
                .pipe(_this.takeUntil())
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
        return _this;
    }
    /**
     * @template I, A, C
     * @param {?} aggregateKey
     * @param {?} factory
     * @param {?} repository
     * @param {?} createHandler
     * @param {?} handlers
     * @return {?}
     */
    HermesModule.defineAggregate = /**
     * @template I, A, C
     * @param {?} aggregateKey
     * @param {?} factory
     * @param {?} repository
     * @param {?} createHandler
     * @param {?} handlers
     * @return {?}
     */
    function (aggregateKey, factory, repository, createHandler, handlers) {
        return {
            ngModule: HermesDomainModule,
            providers: tslib_1.__spread([{
                    provide: aggregateDefinitionToken,
                    multi: true,
                    useValue: {
                        key: aggregateKey,
                        factory: factory,
                        repository: repository
                    }
                }, {
                    provide: aggregateKey,
                    useValue: aggregateKey
                },
                factory,
                repository], HermesModule.registerCreateCommandHandler(createHandler, aggregateKey), handlers)
        };
    };
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
     * @template I, A, C
     * @param {?} commandHandlerType
     * @param {?} aggregateName
     * @return {?}
     */
    HermesModule.registerCommandHandler = /**
     * @template I, A, C
     * @param {?} commandHandlerType
     * @param {?} aggregateName
     * @return {?}
     */
    function (commandHandlerType, aggregateName) {
        return [
            {
                provide: commandHandlerType,
                useClass: commandHandlerType
            }, {
                provide: COMMAND_HANDLERS,
                useFactory: commandHandlerFactory,
                multi: true,
                deps: [
                    commandHandlerType,
                    AggregateRepositoryArchive,
                    aggregateName
                ]
            }
        ];
    };
    /**
     * @private
     * @template I, A, C
     * @param {?} createCommandHandlerType
     * @param {?} aggregateName
     * @return {?}
     */
    HermesModule.registerCreateCommandHandler = /**
     * @private
     * @template I, A, C
     * @param {?} createCommandHandlerType
     * @param {?} aggregateName
     * @return {?}
     */
    function (createCommandHandlerType, aggregateName) {
        return [
            {
                provide: createCommandHandlerType,
                useClass: createCommandHandlerType
            }, {
                provide: CREATE_AGGREGATE_COMMAND_HANDLERS,
                useFactory: createAggregateCommandHandlerFactory,
                multi: true,
                deps: [
                    createCommandHandlerType,
                    AggregateFactoryArchive,
                    AggregateRepositoryArchive,
                    aggregateName,
                    DomainEventPublisher
                ]
            }
        ];
    };
    /**
     * @return {?}
     */
    HermesModule.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        this.hermesLoggersInitializer.stop();
    };
    /**
     * @private
     * @param {?} commandBus
     * @param {?} commandHandlers
     * @param {?} aggregateCommandHandlers
     * @return {?}
     */
    HermesModule.prototype.checkNullCommand = /**
     * @private
     * @param {?} commandBus
     * @param {?} commandHandlers
     * @param {?} aggregateCommandHandlers
     * @return {?}
     */
    function (commandBus, commandHandlers, aggregateCommandHandlers) {
        commandBus
            .ofNullHandler(commandHandlers, aggregateCommandHandlers)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            console.error("Command " + command.toString() + " was not intercepted by any CommandHandler.");
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
            console.warn("You might provided commandHandler without specifying \"multi: true\".");
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
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [DOMAIN_EVENT_HANDLERS,] }] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [CREATE_AGGREGATE_COMMAND_HANDLERS,] }] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [COMMAND_HANDLERS,] }] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [aggregateDefinitionToken,] }] },
        { type: Injector },
        { type: AggregateFactoryArchive },
        { type: AggregateRepositoryArchive },
        { type: CommandBus },
        { type: DomainEventBus },
        { type: HermesLoggersInitializer },
        { type: HermesApi }
    ]; };
    return HermesModule;
}(Reactive));
export { HermesModule };
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi1hcGkvaGVybWVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQWEsUUFBUSxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFMUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBS3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFJ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QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLFVBQUMsT0FBVTtZQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLGFBQVcsT0FBTyxDQUFDLFFBQVEsRUFBRSxnREFBNkMsQ0FBQyxDQUFDO1FBQzNGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sc0RBQStCOzs7OztJQUF2QyxVQUF3QyxlQUFtRDtRQUMxRixJQUFJLGVBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDdkQsT0FBTyxDQUFDLElBQUksQ0FBQyx1RUFBcUUsQ0FBQyxDQUFDO1NBQ3BGO0lBQ0YsQ0FBQzs7Z0JBeEtELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxTQUFTLEVBQUUsU0FBUztpQkFDcEI7Ozs7Z0JBZ0ZzRSxLQUFLLHVCQUE5RCxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjtnQkFDK0IsS0FBSyx1QkFBckYsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQ0FBaUM7Z0JBQ0wsS0FBSyx1QkFBcEQsUUFBUSxZQUFJLE1BQU0sU0FBQyxnQkFBZ0I7Z0JBQzRCLEtBQUssdUJBQXBFLFFBQVEsWUFBSSxNQUFNLFNBQUMsd0JBQXdCO2dCQWhNL0IsUUFBUTtnQkF5Q2hCLHVCQUF1QjtnQkFBRSwwQkFBMEI7Z0JBbENuRCxVQUFVO2dCQVFWLGNBQWM7Z0JBb0JkLHdCQUF3QjtnQkFUeEIsU0FBUzs7SUF3UGxCLG1CQUFDO0NBQUEsQUExS0QsQ0FNa0ksUUFBUSxHQW9Lekk7U0FwS1ksWUFBWTs7Ozs7O0lBd0ZyQixnREFBMEQ7Ozs7O0lBQzFELGlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0b3IsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBQcm92aWRlciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8qKlxuICogQ29tbWFuZFxuICovXG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IENvbW1hbmRCdXMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmJ1cyc7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgQ29tbWFuZFN0cmVhbSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuc3RyZWFtJztcbmltcG9ydCB7IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvZmlsdGVyZWQtY29tbWFuZC1zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS1zdG9yZS5yZWdpc3Rlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdG9yZSB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RvcmUnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0cmVhbSc7XG4vKipcbiAqIEFQUFxuICovXG5pbXBvcnQgeyBIZXJtZXNNb2R1bGVDb25maWcgfSBmcm9tICcuL2hlcm1lcy1tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIEVWRU5UX0xPR0dFUl9FTkFCTEVEIH0gZnJvbSAnLi4vZG9tYWluL2hlcm1lcy10b2tlbnMnO1xuaW1wb3J0IHsgSGVybWVzQXBpIH0gZnJvbSAnLi8vaGVybWVzLWFwaSc7XG4vKipcbiAqIEluZnJhc3RydWN0dXJlXG4gKi9cbmltcG9ydCB7IENvbnNvbGVDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvY29uc29sZS5jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBOb29wQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9jb21tYW5kL25vb3AuY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgQ29uc29sZUV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L2NvbnNvbGUuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BFdmVudExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9ldmVudC9ub29wLmV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICcuLi9jb21tb24vcmFuZG9tLXN0cmluZy5nZW5lcmF0b3InO1xuaW1wb3J0IHsgSGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyIH0gZnJvbSAnLi9oZXJtZXMubG9nZ2Vycy5pbml0aWFsaXplcic7XG5pbXBvcnQge1xuXHRjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3RvcnksXG5cdENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbFxufSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvY3JlYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQ1JFQVRFX0FHR1JFR0FURV9DT01NQU5EX0hBTkRMRVJTIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2NyZWF0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlcnMtdG9rZW4nO1xuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsIEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2RlZmluZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbiB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbmZpZy9hZ2dyZWdhdGUtZGVmaW5pdGlvbi50b2tlbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVEZWZpbml0aW9uIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2FnZ3JlZ2F0ZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvY3JlYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEhlcm1lc0RvbWFpbk1vZHVsZSB9IGZyb20gJy4vaGVybWVzLmRvbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVycyc7XG5pbXBvcnQgeyBjb21tYW5kSGFuZGxlckZhY3RvcnksIENvbW1hbmRIYW5kbGVySW1wbCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQuaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi9jb21tb24vcmVhY3RpdmUnO1xuXG5cbmNvbnN0IGhlcm1lc1Byb3ZpZGVycyA9IFtcblx0UmFuZG9tU3RyaW5nR2VuZXJhdG9yLFxuXHR7IHByb3ZpZGU6IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNLCB1c2VFeGlzdGluZzogQ29tbWFuZFN0cmVhbSB9LFxuXHRDb21tYW5kQnVzLFxuXHRDb21tYW5kU3RyZWFtLFxuXHRDb21tYW5kRGlzcGF0Y2hlcixcblx0QWdncmVnYXRlU3RvcmVSZWdpc3RlcixcblxuXHREb21haW5FdmVudEJ1cyxcblx0RG9tYWluRXZlbnRTdHJlYW0sXG5cdERvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHREb21haW5FdmVudFN0b3JlLFxuXG5cdEhlcm1lc0FwaVxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHR7IHByb3ZpZGU6IEVWRU5UX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogdHJ1ZSB9LFxuXHR7IHByb3ZpZGU6IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiB0cnVlIH0sXG5cdHsgcHJvdmlkZTogQ29tbWFuZExvZ2dlciwgdXNlRmFjdG9yeTogY29tbWFuZExvZ2dlckZhY3RvcnksIGRlcHM6IFtDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBDb25zb2xlQ29tbWFuZExvZ2dlciwgTm9vcENvbW1hbmRMb2dnZXJdIH0sXG5cdHsgcHJvdmlkZTogRG9tYWluRXZlbnRMb2dnZXIsIHVzZUZhY3Rvcnk6IGV2ZW50TG9nZ2VyRmFjdG9yeSwgZGVwczogW0VWRU5UX0xPR0dFUl9FTkFCTEVELCBDb25zb2xlRXZlbnRMb2dnZXIsIE5vb3BFdmVudExvZ2dlcl0gfSxcblx0Q29uc29sZUNvbW1hbmRMb2dnZXIsXG5cdE5vb3BDb21tYW5kTG9nZ2VyLFxuXHROb29wRXZlbnRMb2dnZXIsXG5cdENvbnNvbGVFdmVudExvZ2dlcixcblx0SGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHRBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSxcblx0QWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdC4uLmhlcm1lc1Byb3ZpZGVyc1xuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmRMb2dnZXJGYWN0b3J5KGVuYWJsZWQ6IGJvb2xlYW4sIGNvbnNvbGVDb21tYW5kTG9nZ2VyOiBDb25zb2xlQ29tbWFuZExvZ2dlciwgbm9vcENvbW1hbmRMb2dnZXI6IE5vb3BDb21tYW5kTG9nZ2VyKSB7XG5cblx0aWYgKGVuYWJsZWQpIHtcblx0XHRyZXR1cm4gY29uc29sZUNvbW1hbmRMb2dnZXI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5vb3BDb21tYW5kTG9nZ2VyO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudExvZ2dlckZhY3RvcnkoZW5hYmxlZDogYm9vbGVhbiwgY29uc29sZUV2ZW50TG9nZ2VyOiBDb25zb2xlRXZlbnRMb2dnZXIsIG5vb3BFdmVudExvZ2dlcjogTm9vcEV2ZW50TG9nZ2VyKSB7XG5cblx0aWYgKGVuYWJsZWQpIHtcblx0XHRyZXR1cm4gY29uc29sZUV2ZW50TG9nZ2VyO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBub29wRXZlbnRMb2dnZXI7XG5cdH1cbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IHByb3ZpZGVyc1xufSlcbmV4cG9ydCBjbGFzcyBIZXJtZXNNb2R1bGU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4gZXh0ZW5kcyBSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0c3RhdGljIGRlZmluZUFnZ3JlZ2F0ZTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZD4oYWdncmVnYXRlS2V5OiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZmFjdG9yeTogVHlwZTxBZ2dyZWdhdGVGYWN0b3J5PEksIEE+Pixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCByZXBvc2l0b3J5OiBUeXBlPEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8SSwgQT4+LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGNyZWF0ZUhhbmRsZXI6IFR5cGU8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz4+LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGhhbmRsZXJzOiBBcnJheTxQcm92aWRlcj4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEhlcm1lc0RvbWFpbk1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0cHJvdmlkZTogYWdncmVnYXRlRGVmaW5pdGlvblRva2VuLFxuXHRcdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHRcdFx0dXNlVmFsdWU6IHtcblx0XHRcdFx0XHRrZXk6IGFnZ3JlZ2F0ZUtleSxcblx0XHRcdFx0XHRmYWN0b3J5OiBmYWN0b3J5LFxuXHRcdFx0XHRcdHJlcG9zaXRvcnk6IHJlcG9zaXRvcnlcblx0XHRcdFx0fVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBhZ2dyZWdhdGVLZXksXG5cdFx0XHRcdHVzZVZhbHVlOiBhZ2dyZWdhdGVLZXlcblx0XHRcdH0sXG5cdFx0XHRcdGZhY3RvcnksXG5cdFx0XHRcdHJlcG9zaXRvcnksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNyZWF0ZUNvbW1hbmRIYW5kbGVyKGNyZWF0ZUhhbmRsZXIsIGFnZ3JlZ2F0ZUtleSksXG5cdFx0XHRcdC4uLmhhbmRsZXJzXG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogSGVybWVzTW9kdWxlQ29uZmlnID0geyBsb2dnZXJzOiBmYWxzZSB9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBIZXJtZXNNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IHByb3ZpZGVyc1xuXHRcdH07XG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJDb21tYW5kSGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZD4oXG5cdFx0Y29tbWFuZEhhbmRsZXJUeXBlOiBUeXBlPENvbW1hbmRIYW5kbGVyPEEsIEM+Pixcblx0XHRhZ2dyZWdhdGVOYW1lOiBzdHJpbmcpOiBBcnJheTxQcm92aWRlcj4ge1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0cHJvdmlkZTogY29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHR1c2VDbGFzczogY29tbWFuZEhhbmRsZXJUeXBlXG5cdFx0XHR9LCB7XG5cdFx0XHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0XHRcdHVzZUZhY3Rvcnk6IGNvbW1hbmRIYW5kbGVyRmFjdG9yeSxcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRjb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdFx0QWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdFx0XHRcdFx0YWdncmVnYXRlTmFtZVxuXHRcdFx0XHRdXG5cdFx0XHR9XTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyQ3JlYXRlQ29tbWFuZEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ+KFxuXHRcdGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZTogVHlwZTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxBLCBDPj4sXG5cdFx0YWdncmVnYXRlTmFtZTogc3RyaW5nKTogQXJyYXk8UHJvdmlkZXI+IHtcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHByb3ZpZGU6IGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZSxcblx0XHRcdFx0dXNlQ2xhc3M6IGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMsXG5cdFx0XHRcdHVzZUZhY3Rvcnk6IGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyRmFjdG9yeSxcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRjcmVhdGVDb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdFx0QWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsXG5cdFx0XHRcdFx0QWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdFx0XHRcdFx0YWdncmVnYXRlTmFtZSxcblx0XHRcdFx0XHREb21haW5FdmVudFB1Ymxpc2hlclxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0XTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRE9NQUlOX0VWRU5UX0hBTkRMRVJTKSBldmVudEhhbmRsZXJzOiBBcnJheTxEb21haW5FdmVudEhhbmRsZXI8SSwgRT4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KENSRUFURV9BR0dSRUdBVEVfQ09NTUFORF9IQU5ETEVSUykgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KENPTU1BTkRfSEFORExFUlMpIGhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbikgZGVmaW5lZEFnZ3JlZ2F0ZTogQXJyYXk8QWdncmVnYXRlRGVmaW5pdGlvbjxJLCBBPj4sXG5cdFx0XHRcdGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0YWdncmVnYXRlRmFjdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlPEksIEE+LFxuXHRcdFx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU8SSwgQT4sXG5cdFx0XHRcdGNvbW1hbmRCdXM6IENvbW1hbmRCdXMsXG5cdFx0XHRcdGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBoZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXI6IEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcixcblx0XHRcdFx0cHJpdmF0ZSBoZXJtZXNBcGk6IEhlcm1lc0FwaSkgeyAvLyBIZXJtZXNBcGkgaW5pdGlhbGl6YXRpb25cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5oZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIuc3RhcnQoKTtcblxuXHRcdHRoaXMuY2hlY2tOdWxsQ29tbWFuZChjb21tYW5kQnVzLCBoYW5kbGVycywgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKTtcblx0XHR0aGlzLmNoZWNrQ29tbWFuZEhhbmRsZXJJc0NvbGxlY3Rpb24oaGFuZGxlcnMpO1xuXG5cdFx0aWYgKGRlZmluZWRBZ2dyZWdhdGUpIHtcblx0XHRcdGRlZmluZWRBZ2dyZWdhdGUuZm9yRWFjaCgoZGVmOiBBZ2dyZWdhdGVEZWZpbml0aW9uPEksIEE+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgZmFjdG9yeSA9IGluamVjdG9yLmdldChkZWYuZmFjdG9yeSksXG5cdFx0XHRcdFx0cmVwb3NpdG9yeSA9IGluamVjdG9yLmdldChkZWYucmVwb3NpdG9yeSk7XG5cblx0XHRcdFx0YWdncmVnYXRlRmFjdG9yeUFyY2hpdmUuYWRkKGRlZi5rZXksIGZhY3RvcnkpO1xuXHRcdFx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZS5hZGQoZGVmLmtleSwgcmVwb3NpdG9yeSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKSB7XG5cblx0XHRcdGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4pID0+IHtcblx0XHRcdFx0Y29tbWFuZEJ1c1xuXHRcdFx0XHRcdC5vZkNyZWF0ZUFnZ3JlZ2F0ZUhhbmRsZXIoaGFuZGxlcilcblx0XHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IEMpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChoYW5kbGVycykge1xuXG5cdFx0XHRoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4pID0+IHtcblx0XHRcdFx0Y29tbWFuZEJ1c1xuXHRcdFx0XHRcdC5vZkNvbW1hbmRIYW5kbGVyKGhhbmRsZXIpXG5cdFx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnRIYW5kbGVycykge1xuXHRcdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IEUpID0+IHtcblxuXHRcdFx0XHRcdGV2ZW50SGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVyPEksIEU+KSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZShldmVudCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdFx0dGhpcy5oZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIuc3RvcCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja051bGxDb21tYW5kKGNvbW1hbmRCdXM6IENvbW1hbmRCdXMsIGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+PiwgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+KTogdm9pZCB7XG5cdFx0Y29tbWFuZEJ1c1xuXHRcdFx0Lm9mTnVsbEhhbmRsZXIoY29tbWFuZEhhbmRsZXJzLCBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQykgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBDb21tYW5kICR7Y29tbWFuZC50b1N0cmluZygpfSB3YXMgbm90IGludGVyY2VwdGVkIGJ5IGFueSBDb21tYW5kSGFuZGxlci5gKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NvbW1hbmRIYW5kbGVySXNDb2xsZWN0aW9uKGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+Pik6IHZvaWQge1xuXHRcdGlmIChjb21tYW5kSGFuZGxlcnMgJiYgIUFycmF5LmlzQXJyYXkoY29tbWFuZEhhbmRsZXJzKSkge1xuXHRcdFx0Y29uc29sZS53YXJuKGBZb3UgbWlnaHQgcHJvdmlkZWQgY29tbWFuZEhhbmRsZXIgd2l0aG91dCBzcGVjaWZ5aW5nIFwibXVsdGk6IHRydWVcIi5gKTtcblx0XHR9XG5cdH1cblxufVxuIl19