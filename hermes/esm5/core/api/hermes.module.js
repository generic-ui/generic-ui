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
import { RandomStringGenerator } from '../../common/random-string.generator';
import { HermesLoggersInitializer } from './hermes.loggers.initializer';
import { createAggregateCommandHandlerFactory } from '../domain/command/create-aggregate/create-aggregate.command-handler-impl';
import { CREATE_AGGREGATE_COMMAND_HANDLERS } from '../domain/command/create-aggregate/create-aggregate.command-handlers-token';
import { AggregateFactoryArchive, AggregateRepositoryArchive } from '../domain/command/config/define';
import { aggregateDefinitionToken } from '../domain/command/config/aggregate-definition.token';
import { HermesDomainModule } from './hermes.domain.module';
import { COMMAND_HANDLERS } from '../domain/command/handler/command-handlers';
import { commandHandlerFactory } from '../domain/command/handler/command-handler-impl';
import { Reactive } from '../../common/reactive';
import { domainEventHandlerFactory, multiDomainEventHandlerFactory } from '../domain/event/handler/domain-event-handler-impl';
import { DOMAIN_EVENT_HANDLERS } from '../domain/event/handler/domain-event-handlers';
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
var HermesBaseModule = /** @class */ (function (_super) {
    tslib_1.__extends(HermesBaseModule, _super);
    function HermesBaseModule(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        var _this = _super.call(this) || this;
        _this.hermesLoggersInitializer = hermesLoggersInitializer;
        _this.hermesApi = hermesApi;
        _this.hermesLoggersInitializer.start();
        _this.checkNullCommand(commandBus, commandHandlers, aggregateCommandHandlers);
        _this.checkCommandHandlerIsCollection(commandHandlers);
        _this.checkDomainEventHandlerIsCollection(eventHandlers);
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
        if (commandHandlers) {
            commandHandlers.forEach((/**
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
            eventHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                domainEventBus
                    .ofEventHandler(handler)
                    .pipe(_this.takeUntil())
                    .subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    handler.handleEvent(event);
                }));
            }));
            // domainEventBus
            // 	.pipe(this.takeUntil())
            // 	.subscribe((event: E) => {
            //
            // 		eventHandlers.forEach((handler: DomainEventHandlerImpl<I, E>) => {
            // 			handler.handleEvent(event);
            // 		});
            // 	});
        }
        return _this;
    }
    /**
     * @return {?}
     */
    HermesBaseModule.prototype.ngOnDestroy = /**
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
    HermesBaseModule.prototype.checkNullCommand = /**
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
    HermesBaseModule.prototype.checkCommandHandlerIsCollection = /**
     * @private
     * @param {?} commandHandlers
     * @return {?}
     */
    function (commandHandlers) {
        if (commandHandlers && !Array.isArray(commandHandlers)) {
            console.warn("You might provided commandHandler without specifying \"multi: true\".");
        }
    };
    /**
     * @private
     * @param {?} eventHandlers
     * @return {?}
     */
    HermesBaseModule.prototype.checkDomainEventHandlerIsCollection = /**
     * @private
     * @param {?} eventHandlers
     * @return {?}
     */
    function (eventHandlers) {
        if (eventHandlers && !Array.isArray(eventHandlers)) {
            console.warn("You might provided eventHandler without specifying \"multi: true\".");
        }
    };
    /** @nocollapse */
    HermesBaseModule.ctorParameters = function () { return [
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
    return HermesBaseModule;
}(Reactive));
export { HermesBaseModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesBaseModule.prototype.hermesLoggersInitializer;
    /**
     * @type {?}
     * @private
     */
    HermesBaseModule.prototype.hermesApi;
}
var HermesModule = /** @class */ (function (_super) {
    tslib_1.__extends(HermesModule, _super);
    function HermesModule(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        return _super.call(this, eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) || this;
    }
    /**
     * @template I, A, C
     * @param {?} aggregateKey
     * @param {?} factory
     * @param {?} repository
     * @param {?} createHandler
     * @param {?=} commandHandlers
     * @param {?=} domainEventHandlers
     * @return {?}
     */
    HermesModule.defineAggregate = /**
     * @template I, A, C
     * @param {?} aggregateKey
     * @param {?} factory
     * @param {?} repository
     * @param {?} createHandler
     * @param {?=} commandHandlers
     * @param {?=} domainEventHandlers
     * @return {?}
     */
    function (aggregateKey, factory, repository, createHandler, commandHandlers, domainEventHandlers) {
        if (commandHandlers === void 0) { commandHandlers = []; }
        if (domainEventHandlers === void 0) { domainEventHandlers = []; }
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
                repository], HermesModule.registerCreateCommandHandler(createHandler, aggregateKey), commandHandlers, domainEventHandlers)
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
     * @template I, E
     * @param {?} domainEventHandlerType
     * @return {?}
     */
    HermesModule.registerDomainEventHandler = /**
     * @template I, E
     * @param {?} domainEventHandlerType
     * @return {?}
     */
    function (domainEventHandlerType) {
        return [
            {
                provide: domainEventHandlerType,
                useClass: domainEventHandlerType
            }, {
                provide: DOMAIN_EVENT_HANDLERS,
                useFactory: domainEventHandlerFactory,
                multi: true,
                deps: [
                    domainEventHandlerType
                ]
            }
        ];
    };
    /**
     * @template I, E
     * @param {?} domainEventHandlerType
     * @return {?}
     */
    HermesModule.registerMultiDomainEventHandler = /**
     * @template I, E
     * @param {?} domainEventHandlerType
     * @return {?}
     */
    function (domainEventHandlerType) {
        return [
            {
                provide: domainEventHandlerType,
                useClass: domainEventHandlerType
            }, {
                provide: DOMAIN_EVENT_HANDLERS,
                useFactory: multiDomainEventHandlerFactory,
                multi: true,
                deps: [
                    domainEventHandlerType
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
}(HermesBaseModule));
export { HermesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvYXBpL2hlcm1lcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFhLFFBQVEsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRTFGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUt4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSTFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQy9G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QztnQkFDaEQsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFO29CQUNMLHdCQUF3QjtvQkFDeEIsdUJBQXVCO29CQUN2QiwwQkFBMEI7b0JBQzFCLGFBQWE7b0JBQ2Isb0JBQW9CO2lCQUNwQjthQUNEO1NBQ0QsQ0FBQztJQUNILENBQUM7O2dCQW5KRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsU0FBUyxFQUFFLFNBQVM7aUJBQ3BCOzs7O2dCQStGc0UsS0FBSyx1QkFBOUQsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7Z0JBQytCLEtBQUssdUJBQXJGLFFBQVEsWUFBSSxNQUFNLFNBQUMsaUNBQWlDO2dCQUNFLEtBQUssdUJBQTNELFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO2dCQUM0QixLQUFLLHVCQUFwRSxRQUFRLFlBQUksTUFBTSxTQUFDLHdCQUF3QjtnQkE5VC9CLFFBQVE7Z0JBdUNoQix1QkFBdUI7Z0JBQUUsMEJBQTBCO2dCQWhDbkQsVUFBVTtnQkFPVixjQUFjO2dCQW1CZCx3QkFBd0I7Z0JBVHhCLFNBQVM7O0lBb1ZsQixtQkFBQztDQUFBLEFBckpELENBTWtDLGdCQUFnQixHQStJakQ7U0EvSVksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0b3IsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBQcm92aWRlciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8qKlxuICogQ29tbWFuZFxuICovXG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZCc7XG5pbXBvcnQgeyBDb21tYW5kQnVzIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5idXMnO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IENvbW1hbmRTdHJlYW0gfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLnN0cmVhbSc7XG5pbXBvcnQgeyBGSUxURVJFRF9DT01NQU5EX1NUUkVBTSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2ZpbHRlcmVkLWNvbW1hbmQtc3RyZWFtJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUtc3RvcmUucmVnaXN0ZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RvcmUgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0b3JlJztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RyZWFtIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdHJlYW0nO1xuLyoqXG4gKiBBUFBcbiAqL1xuaW1wb3J0IHsgSGVybWVzTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9oZXJtZXMtbW9kdWxlLWNvbmZpZyc7XG5pbXBvcnQgeyBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBFVkVOVF9MT0dHRVJfRU5BQkxFRCB9IGZyb20gJy4uL2RvbWFpbi9oZXJtZXMtdG9rZW5zJztcbmltcG9ydCB7IEhlcm1lc0FwaSB9IGZyb20gJy4vL2hlcm1lcy1hcGknO1xuLyoqXG4gKiBJbmZyYXN0cnVjdHVyZVxuICovXG5pbXBvcnQgeyBDb25zb2xlQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9jb21tYW5kL2NvbnNvbGUuY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgTm9vcENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvY29tbWFuZC9ub29wLmNvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IENvbnNvbGVFdmVudExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9ldmVudC9jb25zb2xlLmV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBOb29wRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvZXZlbnQvbm9vcC5ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vY29tbW9uL3JhbmRvbS1zdHJpbmcuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplciB9IGZyb20gJy4vaGVybWVzLmxvZ2dlcnMuaW5pdGlhbGl6ZXInO1xuaW1wb3J0IHtcblx0Y3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJGYWN0b3J5LFxuXHRDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGxcbn0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY3JlYXRlLWFnZ3JlZ2F0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IENSRUFURV9BR0dSRUdBVEVfQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NyZWF0ZS1hZ2dyZWdhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXJzLXRva2VuJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLCBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbmZpZy9kZWZpbmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgYWdncmVnYXRlRGVmaW5pdGlvblRva2VuIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2FnZ3JlZ2F0ZS1kZWZpbml0aW9uLnRva2VuJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZURlZmluaXRpb24gfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb25maWcvYWdncmVnYXRlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jcmVhdGUtYWdncmVnYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEhlcm1lc0RvbWFpbk1vZHVsZSB9IGZyb20gJy4vaGVybWVzLmRvbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVycyc7XG5pbXBvcnQgeyBjb21tYW5kSGFuZGxlckZhY3RvcnksIENvbW1hbmRIYW5kbGVySW1wbCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQuaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlYWN0aXZlJztcbmltcG9ydCB7XG5cdGRvbWFpbkV2ZW50SGFuZGxlckZhY3RvcnksXG5cdERvbWFpbkV2ZW50SGFuZGxlckltcGwsXG5cdG11bHRpRG9tYWluRXZlbnRIYW5kbGVyRmFjdG9yeVxufSBmcm9tICcuLi9kb21haW4vZXZlbnQvaGFuZGxlci9kb21haW4tZXZlbnQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IERPTUFJTl9FVkVOVF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvaGFuZGxlci9kb21haW4tZXZlbnQuaGFuZGxlcic7XG5pbXBvcnQgeyBNdWx0aURvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9oYW5kbGVyL211bHRpLWRvbWFpbi1ldmVudC5oYW5kbGVyJztcblxuXG5jb25zdCBoZXJtZXNQcm92aWRlcnMgPSBbXG5cdFJhbmRvbVN0cmluZ0dlbmVyYXRvcixcblx0eyBwcm92aWRlOiBGSUxURVJFRF9DT01NQU5EX1NUUkVBTSwgdXNlRXhpc3Rpbmc6IENvbW1hbmRTdHJlYW0gfSxcblx0Q29tbWFuZEJ1cyxcblx0Q29tbWFuZFN0cmVhbSxcblx0Q29tbWFuZERpc3BhdGNoZXIsXG5cdEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIsXG5cblx0RG9tYWluRXZlbnRCdXMsXG5cdERvbWFpbkV2ZW50U3RyZWFtLFxuXHREb21haW5FdmVudFB1Ymxpc2hlcixcblx0RG9tYWluRXZlbnRTdG9yZSxcblxuXHRIZXJtZXNBcGlcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcblx0eyBwcm92aWRlOiBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHRydWUgfSxcblx0eyBwcm92aWRlOiBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogdHJ1ZSB9LFxuXHR7IHByb3ZpZGU6IENvbW1hbmRMb2dnZXIsIHVzZUZhY3Rvcnk6IGNvbW1hbmRMb2dnZXJGYWN0b3J5LCBkZXBzOiBbQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgQ29uc29sZUNvbW1hbmRMb2dnZXIsIE5vb3BDb21tYW5kTG9nZ2VyXSB9LFxuXHR7IHByb3ZpZGU6IERvbWFpbkV2ZW50TG9nZ2VyLCB1c2VGYWN0b3J5OiBldmVudExvZ2dlckZhY3RvcnksIGRlcHM6IFtFVkVOVF9MT0dHRVJfRU5BQkxFRCwgQ29uc29sZUV2ZW50TG9nZ2VyLCBOb29wRXZlbnRMb2dnZXJdIH0sXG5cdENvbnNvbGVDb21tYW5kTG9nZ2VyLFxuXHROb29wQ29tbWFuZExvZ2dlcixcblx0Tm9vcEV2ZW50TG9nZ2VyLFxuXHRDb25zb2xlRXZlbnRMb2dnZXIsXG5cdEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcixcblx0QWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsXG5cdEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLFxuXHQuLi5oZXJtZXNQcm92aWRlcnNcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21tYW5kTG9nZ2VyRmFjdG9yeShlbmFibGVkOiBib29sZWFuLCBjb25zb2xlQ29tbWFuZExvZ2dlcjogQ29uc29sZUNvbW1hbmRMb2dnZXIsIG5vb3BDb21tYW5kTG9nZ2VyOiBOb29wQ29tbWFuZExvZ2dlcikge1xuXG5cdGlmIChlbmFibGVkKSB7XG5cdFx0cmV0dXJuIGNvbnNvbGVDb21tYW5kTG9nZ2VyO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBub29wQ29tbWFuZExvZ2dlcjtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRMb2dnZXJGYWN0b3J5KGVuYWJsZWQ6IGJvb2xlYW4sIGNvbnNvbGVFdmVudExvZ2dlcjogQ29uc29sZUV2ZW50TG9nZ2VyLCBub29wRXZlbnRMb2dnZXI6IE5vb3BFdmVudExvZ2dlcikge1xuXG5cdGlmIChlbmFibGVkKSB7XG5cdFx0cmV0dXJuIGNvbnNvbGVFdmVudExvZ2dlcjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbm9vcEV2ZW50TG9nZ2VyO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBIZXJtZXNCYXNlTW9kdWxlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPEk+LCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+IGV4dGVuZHMgUmVhY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRE9NQUlOX0VWRU5UX0hBTkRMRVJTKSBldmVudEhhbmRsZXJzOiBBcnJheTxEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMpIGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChDT01NQU5EX0hBTkRMRVJTKSBjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4sXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3QoYWdncmVnYXRlRGVmaW5pdGlvblRva2VuKSBkZWZpbmVkQWdncmVnYXRlOiBBcnJheTxBZ2dyZWdhdGVEZWZpbml0aW9uPEksIEE+Pixcblx0XHRcdFx0aW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRhZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTogQWdncmVnYXRlRmFjdG9yeUFyY2hpdmU8SSwgQT4sXG5cdFx0XHRcdGFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlOiBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTxJLCBBPixcblx0XHRcdFx0Y29tbWFuZEJ1czogQ29tbWFuZEJ1cyxcblx0XHRcdFx0ZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIGhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcjogSGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHRcdFx0XHRwcml2YXRlIGhlcm1lc0FwaTogSGVybWVzQXBpKSB7IC8vIEhlcm1lc0FwaSBpbml0aWFsaXphdGlvblxuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmhlcm1lc0xvZ2dlcnNJbml0aWFsaXplci5zdGFydCgpO1xuXG5cdFx0dGhpcy5jaGVja051bGxDb21tYW5kKGNvbW1hbmRCdXMsIGNvbW1hbmRIYW5kbGVycywgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKTtcblx0XHR0aGlzLmNoZWNrQ29tbWFuZEhhbmRsZXJJc0NvbGxlY3Rpb24oY29tbWFuZEhhbmRsZXJzKTtcblx0XHR0aGlzLmNoZWNrRG9tYWluRXZlbnRIYW5kbGVySXNDb2xsZWN0aW9uKGV2ZW50SGFuZGxlcnMpO1xuXG5cdFx0aWYgKGRlZmluZWRBZ2dyZWdhdGUpIHtcblx0XHRcdGRlZmluZWRBZ2dyZWdhdGUuZm9yRWFjaCgoZGVmOiBBZ2dyZWdhdGVEZWZpbml0aW9uPEksIEE+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgZmFjdG9yeSA9IGluamVjdG9yLmdldChkZWYuZmFjdG9yeSksXG5cdFx0XHRcdFx0cmVwb3NpdG9yeSA9IGluamVjdG9yLmdldChkZWYucmVwb3NpdG9yeSk7XG5cblx0XHRcdFx0YWdncmVnYXRlRmFjdG9yeUFyY2hpdmUuYWRkKGRlZi5rZXksIGZhY3RvcnkpO1xuXHRcdFx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZS5hZGQoZGVmLmtleSwgcmVwb3NpdG9yeSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKSB7XG5cblx0XHRcdGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4pID0+IHtcblx0XHRcdFx0Y29tbWFuZEJ1c1xuXHRcdFx0XHRcdC5vZkNyZWF0ZUFnZ3JlZ2F0ZUhhbmRsZXIoaGFuZGxlcilcblx0XHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IEMpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChjb21tYW5kSGFuZGxlcnMpIHtcblx0XHRcdGNvbW1hbmRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4pID0+IHtcblx0XHRcdFx0Y29tbWFuZEJ1c1xuXHRcdFx0XHRcdC5vZkNvbW1hbmRIYW5kbGVyKGhhbmRsZXIpXG5cdFx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnRIYW5kbGVycykge1xuXG5cdFx0XHRldmVudEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4pID0+IHtcblx0XHRcdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0XHQub2ZFdmVudEhhbmRsZXIoaGFuZGxlcilcblx0XHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBFKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBkb21haW5FdmVudEJ1c1xuXHRcdFx0Ly8gXHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0Ly8gXHQuc3Vic2NyaWJlKChldmVudDogRSkgPT4ge1xuXHRcdFx0Ly9cblx0XHRcdC8vIFx0XHRldmVudEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4pID0+IHtcblx0XHRcdC8vIFx0XHRcdGhhbmRsZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuXHRcdFx0Ly8gXHRcdH0pO1xuXHRcdFx0Ly8gXHR9KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHRcdHRoaXMuaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLnN0b3AoKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tOdWxsQ29tbWFuZChjb21tYW5kQnVzOiBDb21tYW5kQnVzLCBjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4sIGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+Pik6IHZvaWQge1xuXHRcdGNvbW1hbmRCdXNcblx0XHRcdC5vZk51bGxIYW5kbGVyKGNvbW1hbmRIYW5kbGVycywgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IEMpID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgQ29tbWFuZCAke2NvbW1hbmQudG9TdHJpbmcoKX0gd2FzIG5vdCBpbnRlcmNlcHRlZCBieSBhbnkgQ29tbWFuZEhhbmRsZXIuYCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDb21tYW5kSGFuZGxlcklzQ29sbGVjdGlvbihjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4pOiB2b2lkIHtcblx0XHRpZiAoY29tbWFuZEhhbmRsZXJzICYmICFBcnJheS5pc0FycmF5KGNvbW1hbmRIYW5kbGVycykpIHtcblx0XHRcdGNvbnNvbGUud2FybihgWW91IG1pZ2h0IHByb3ZpZGVkIGNvbW1hbmRIYW5kbGVyIHdpdGhvdXQgc3BlY2lmeWluZyBcIm11bHRpOiB0cnVlXCIuYCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0RvbWFpbkV2ZW50SGFuZGxlcklzQ29sbGVjdGlvbihldmVudEhhbmRsZXJzOiBBcnJheTxEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+Pik6IHZvaWQge1xuXHRcdGlmIChldmVudEhhbmRsZXJzICYmICFBcnJheS5pc0FycmF5KGV2ZW50SGFuZGxlcnMpKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oYFlvdSBtaWdodCBwcm92aWRlZCBldmVudEhhbmRsZXIgd2l0aG91dCBzcGVjaWZ5aW5nIFwibXVsdGk6IHRydWVcIi5gKTtcblx0XHR9XG5cdH1cblxufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogcHJvdmlkZXJzXG59KVxuZXhwb3J0IGNsYXNzIEhlcm1lc01vZHVsZSBleHRlbmRzIEhlcm1lc0Jhc2VNb2R1bGU8YW55LCBhbnksIGFueSwgYW55PiB7XG5cblx0c3RhdGljIGRlZmluZUFnZ3JlZ2F0ZTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZDxJPj4oYWdncmVnYXRlS2V5OiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZmFjdG9yeTogVHlwZTxBZ2dyZWdhdGVGYWN0b3J5PEksIEE+Pixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCByZXBvc2l0b3J5OiBUeXBlPEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8SSwgQT4+LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGNyZWF0ZUhhbmRsZXI6IFR5cGU8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz4+LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGNvbW1hbmRIYW5kbGVyczogQXJyYXk8UHJvdmlkZXI+ID0gW10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZG9tYWluRXZlbnRIYW5kbGVyczogQXJyYXk8UHJvdmlkZXI+ID0gW10pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPGFueT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogSGVybWVzRG9tYWluTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbe1xuXHRcdFx0XHRwcm92aWRlOiBhZ2dyZWdhdGVEZWZpbml0aW9uVG9rZW4sXG5cdFx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdFx0XHR1c2VWYWx1ZToge1xuXHRcdFx0XHRcdGtleTogYWdncmVnYXRlS2V5LFxuXHRcdFx0XHRcdGZhY3Rvcnk6IGZhY3RvcnksXG5cdFx0XHRcdFx0cmVwb3NpdG9yeTogcmVwb3NpdG9yeVxuXHRcdFx0XHR9XG5cdFx0XHR9LCB7XG5cdFx0XHRcdHByb3ZpZGU6IGFnZ3JlZ2F0ZUtleSxcblx0XHRcdFx0dXNlVmFsdWU6IGFnZ3JlZ2F0ZUtleVxuXHRcdFx0fSxcblx0XHRcdFx0ZmFjdG9yeSxcblx0XHRcdFx0cmVwb3NpdG9yeSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ3JlYXRlQ29tbWFuZEhhbmRsZXIoY3JlYXRlSGFuZGxlciwgYWdncmVnYXRlS2V5KSxcblx0XHRcdFx0Li4uY29tbWFuZEhhbmRsZXJzLFxuXHRcdFx0XHQuLi5kb21haW5FdmVudEhhbmRsZXJzXG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogSGVybWVzTW9kdWxlQ29uZmlnID0geyBsb2dnZXJzOiBmYWxzZSB9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxIZXJtZXNNb2R1bGU+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEhlcm1lc01vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogcHJvdmlkZXJzXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyByZWdpc3RlckNvbW1hbmRIYW5kbGVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPEk+Pihcblx0XHRjb21tYW5kSGFuZGxlclR5cGU6IFR5cGU8Q29tbWFuZEhhbmRsZXI8QSwgQz4+LFxuXHRcdGFnZ3JlZ2F0ZU5hbWU6IHN0cmluZyk6IEFycmF5PFByb3ZpZGVyPiB7XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRwcm92aWRlOiBjb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdHVzZUNsYXNzOiBjb21tYW5kSGFuZGxlclR5cGVcblx0XHRcdH0sIHtcblx0XHRcdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHRcdFx0dXNlRmFjdG9yeTogY29tbWFuZEhhbmRsZXJGYWN0b3J5LFxuXHRcdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHRcdFx0ZGVwczogW1xuXHRcdFx0XHRcdGNvbW1hbmRIYW5kbGVyVHlwZSxcblx0XHRcdFx0XHRBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSxcblx0XHRcdFx0XHRhZ2dyZWdhdGVOYW1lXG5cdFx0XHRcdF1cblx0XHRcdH1dO1xuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+Pihcblx0XHRkb21haW5FdmVudEhhbmRsZXJUeXBlOiBUeXBlPERvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPj5cblx0KTogQXJyYXk8UHJvdmlkZXI+IHtcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHByb3ZpZGU6IGRvbWFpbkV2ZW50SGFuZGxlclR5cGUsXG5cdFx0XHRcdHVzZUNsYXNzOiBkb21haW5FdmVudEhhbmRsZXJUeXBlXG5cdFx0XHR9LCB7XG5cdFx0XHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHRcdFx0dXNlRmFjdG9yeTogZG9tYWluRXZlbnRIYW5kbGVyRmFjdG9yeSxcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRkb21haW5FdmVudEhhbmRsZXJUeXBlXG5cdFx0XHRcdF1cblx0XHRcdH1dO1xuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyTXVsdGlEb21haW5FdmVudEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KFxuXHRcdGRvbWFpbkV2ZW50SGFuZGxlclR5cGU6IFR5cGU8TXVsdGlEb21haW5FdmVudEhhbmRsZXI8SSwgRT4+XG5cdCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRwcm92aWRlOiBkb21haW5FdmVudEhhbmRsZXJUeXBlLFxuXHRcdFx0XHR1c2VDbGFzczogZG9tYWluRXZlbnRIYW5kbGVyVHlwZVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0XHRcdHVzZUZhY3Rvcnk6IG11bHRpRG9tYWluRXZlbnRIYW5kbGVyRmFjdG9yeSxcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRkb21haW5FdmVudEhhbmRsZXJUeXBlXG5cdFx0XHRcdF1cblx0XHRcdH1dO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChET01BSU5fRVZFTlRfSEFORExFUlMpIGV2ZW50SGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlckltcGw8YW55LCBhbnk+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMpIGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPGFueSwgYW55LCBhbnk+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChDT01NQU5EX0hBTkRMRVJTKSBjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxhbnksIGFueSwgYW55Pj4sXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3QoYWdncmVnYXRlRGVmaW5pdGlvblRva2VuKSBkZWZpbmVkQWdncmVnYXRlOiBBcnJheTxBZ2dyZWdhdGVEZWZpbml0aW9uPGFueSwgYW55Pj4sXG5cdFx0XHRcdGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0YWdncmVnYXRlRmFjdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlPGFueSwgYW55Pixcblx0XHRcdFx0YWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPGFueSwgYW55Pixcblx0XHRcdFx0Y29tbWFuZEJ1czogQ29tbWFuZEJ1cyxcblx0XHRcdFx0ZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRoZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXI6IEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcixcblx0XHRcdFx0aGVybWVzQXBpOiBIZXJtZXNBcGkpIHsgLy8gSGVybWVzQXBpIGluaXRpYWxpemF0aW9uXG5cdFx0c3VwZXIoXG5cdFx0XHRldmVudEhhbmRsZXJzLFxuXHRcdFx0YWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzLFxuXHRcdFx0Y29tbWFuZEhhbmRsZXJzLFxuXHRcdFx0ZGVmaW5lZEFnZ3JlZ2F0ZSxcblx0XHRcdGluamVjdG9yLFxuXHRcdFx0YWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsXG5cdFx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSxcblx0XHRcdGNvbW1hbmRCdXMsXG5cdFx0XHRkb21haW5FdmVudEJ1cyxcblx0XHRcdGhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcixcblx0XHRcdGhlcm1lc0FwaVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyByZWdpc3RlckNyZWF0ZUNvbW1hbmRIYW5kbGVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPEk+Pihcblx0XHRjcmVhdGVDb21tYW5kSGFuZGxlclR5cGU6IFR5cGU8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz4+LFxuXHRcdGFnZ3JlZ2F0ZU5hbWU6IHN0cmluZyk6IEFycmF5PFByb3ZpZGVyPiB7XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRwcm92aWRlOiBjcmVhdGVDb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdHVzZUNsYXNzOiBjcmVhdGVDb21tYW5kSGFuZGxlclR5cGVcblx0XHRcdH0sIHtcblx0XHRcdFx0cHJvdmlkZTogQ1JFQVRFX0FHR1JFR0FURV9DT01NQU5EX0hBTkRMRVJTLFxuXHRcdFx0XHR1c2VGYWN0b3J5OiBjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3RvcnksXG5cdFx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFx0Y3JlYXRlQ29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHRcdEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLFxuXHRcdFx0XHRcdEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLFxuXHRcdFx0XHRcdGFnZ3JlZ2F0ZU5hbWUsXG5cdFx0XHRcdFx0RG9tYWluRXZlbnRQdWJsaXNoZXJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdF07XG5cdH1cblxufVxuIl19