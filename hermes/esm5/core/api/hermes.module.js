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
import { HermesApi } from './hermes-api';
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
import { DomainEventHandlerInitializer } from '../domain/event/init/domain-event-handler.initializer';
import { CommandHandlerInitializer } from '../domain/command/init/command-handler.initializer';
import { AggregateDefinitionInitializer } from '../domain/command/config/aggregate-definition.initializer';
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
        _this.aggregateDefinitionInitializer = new AggregateDefinitionInitializer();
        _this.commandHandlerInitializer = new CommandHandlerInitializer();
        _this.domainEventHandlerInitializer = new DomainEventHandlerInitializer();
        _this.hermesLoggersInitializer.start();
        _this.checkNullCommand(commandBus, commandHandlers, aggregateCommandHandlers);
        _this.checkCommandHandlerIsCollection(commandHandlers);
        _this.checkDomainEventHandlerIsCollection(eventHandlers);
        _this.aggregateDefinitionInitializer.register(definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive);
        _this.commandHandlerInitializer.register(commandHandlers, commandBus);
        _this.commandHandlerInitializer.registerAggregateCommandHandlers(aggregateCommandHandlers, commandBus);
        _this.domainEventHandlerInitializer.init(eventHandlers, domainEventBus);
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
        this.commandHandlerInitializer.ngOnDestroy();
        this.domainEventHandlerInitializer.ngOnDestroy();
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
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            // eslint-disable-next-line no-console
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
            // eslint-disable-next-line no-console
            console.warn('You might provided commandHandler without specifying "multi: true".');
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
            // eslint-disable-next-line no-console
            console.warn('You might provided eventHandler without specifying "multi: true".');
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
    HermesBaseModule.prototype.aggregateDefinitionInitializer;
    /**
     * @type {?}
     * @private
     */
    HermesBaseModule.prototype.commandHandlerInitializer;
    /**
     * @type {?}
     * @private
     */
    HermesBaseModule.prototype.domainEventHandlerInitializer;
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
     * @param {?} createCommandHandler
     * @param {?=} commandHandlers
     * @param {?=} domainEventHandlers
     * @return {?}
     */
    HermesModule.defineAggregate = /**
     * @template I, A, C
     * @param {?} aggregateKey
     * @param {?} factory
     * @param {?} repository
     * @param {?} createCommandHandler
     * @param {?=} commandHandlers
     * @param {?=} domainEventHandlers
     * @return {?}
     */
    function (aggregateKey, factory, repository, createCommandHandler, commandHandlers, domainEventHandlers) {
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
                repository], HermesModule.registerCreateCommandHandler(createCommandHandler, aggregateKey), commandHandlers, domainEventHandlers)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvYXBpL2hlcm1lcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFhLFFBQVEsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRTFGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUt4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBSXpDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQy9G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QUM7Q0FBQSxBQXRKRCxDQU1rQyxnQkFBZ0IsR0FnSmpEO1NBaEpZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdG9yLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT25EZXN0cm95LCBPcHRpb25hbCwgUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vKipcbiAqIENvbW1hbmRcbiAqL1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQnO1xuaW1wb3J0IHsgQ29tbWFuZEJ1cyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuYnVzJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBDb21tYW5kU3RyZWFtIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5zdHJlYW0nO1xuaW1wb3J0IHsgRklMVEVSRURfQ09NTUFORF9TVFJFQU0gfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9maWx0ZXJlZC1jb21tYW5kLXN0cmVhbSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudFN0b3JlIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdG9yZSc7XG5pbXBvcnQgeyBEb21haW5FdmVudFN0cmVhbSB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RyZWFtJztcbi8qKlxuICogQVBQXG4gKi9cbmltcG9ydCB7IEhlcm1lc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vaGVybWVzLW1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgRVZFTlRfTE9HR0VSX0VOQUJMRUQgfSBmcm9tICcuLi9kb21haW4vaGVybWVzLXRva2Vucyc7XG5pbXBvcnQgeyBIZXJtZXNBcGkgfSBmcm9tICcuL2hlcm1lcy1hcGknO1xuLyoqXG4gKiBJbmZyYXN0cnVjdHVyZVxuICovXG5pbXBvcnQgeyBDb25zb2xlQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9jb21tYW5kL2NvbnNvbGUuY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgTm9vcENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvY29tbWFuZC9ub29wLmNvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IENvbnNvbGVFdmVudExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9ldmVudC9jb25zb2xlLmV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBOb29wRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvZXZlbnQvbm9vcC5ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vY29tbW9uL3JhbmRvbS1zdHJpbmcuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplciB9IGZyb20gJy4vaGVybWVzLmxvZ2dlcnMuaW5pdGlhbGl6ZXInO1xuaW1wb3J0IHtcblx0Y3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJGYWN0b3J5LFxuXHRDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGxcbn0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY3JlYXRlLWFnZ3JlZ2F0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IENSRUFURV9BR0dSRUdBVEVfQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NyZWF0ZS1hZ2dyZWdhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXJzLXRva2VuJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLCBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbmZpZy9kZWZpbmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgYWdncmVnYXRlRGVmaW5pdGlvblRva2VuIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2FnZ3JlZ2F0ZS1kZWZpbml0aW9uLnRva2VuJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZURlZmluaXRpb24gfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb25maWcvYWdncmVnYXRlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jcmVhdGUtYWdncmVnYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEhlcm1lc0RvbWFpbk1vZHVsZSB9IGZyb20gJy4vaGVybWVzLmRvbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVycyc7XG5pbXBvcnQgeyBjb21tYW5kSGFuZGxlckZhY3RvcnksIENvbW1hbmRIYW5kbGVySW1wbCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQuaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlYWN0aXZlJztcbmltcG9ydCB7IGRvbWFpbkV2ZW50SGFuZGxlckZhY3RvcnksIERvbWFpbkV2ZW50SGFuZGxlckltcGwsIG11bHRpRG9tYWluRXZlbnRIYW5kbGVyRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2hhbmRsZXIvZG9tYWluLWV2ZW50LWhhbmRsZXJzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9oYW5kbGVyL2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IE11bHRpRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2hhbmRsZXIvbXVsdGktZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVySW5pdGlhbGl6ZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvaW5pdC9kb21haW4tZXZlbnQtaGFuZGxlci5pbml0aWFsaXplcic7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlckluaXRpYWxpemVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvaW5pdC9jb21tYW5kLWhhbmRsZXIuaW5pdGlhbGl6ZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlRGVmaW5pdGlvbkluaXRpYWxpemVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2FnZ3JlZ2F0ZS1kZWZpbml0aW9uLmluaXRpYWxpemVyJztcblxuXG5jb25zdCBoZXJtZXNQcm92aWRlcnMgPSBbXG5cdFJhbmRvbVN0cmluZ0dlbmVyYXRvcixcblx0eyBwcm92aWRlOiBGSUxURVJFRF9DT01NQU5EX1NUUkVBTSwgdXNlRXhpc3Rpbmc6IENvbW1hbmRTdHJlYW0gfSxcblx0Q29tbWFuZEJ1cyxcblx0Q29tbWFuZFN0cmVhbSxcblx0Q29tbWFuZERpc3BhdGNoZXIsXG5cdEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIsXG5cblx0RG9tYWluRXZlbnRCdXMsXG5cdERvbWFpbkV2ZW50U3RyZWFtLFxuXHREb21haW5FdmVudFB1Ymxpc2hlcixcblx0RG9tYWluRXZlbnRTdG9yZSxcblxuXHRIZXJtZXNBcGlcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcblx0eyBwcm92aWRlOiBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHRydWUgfSxcblx0eyBwcm92aWRlOiBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogdHJ1ZSB9LFxuXHR7IHByb3ZpZGU6IENvbW1hbmRMb2dnZXIsIHVzZUZhY3Rvcnk6IGNvbW1hbmRMb2dnZXJGYWN0b3J5LCBkZXBzOiBbQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgQ29uc29sZUNvbW1hbmRMb2dnZXIsIE5vb3BDb21tYW5kTG9nZ2VyXSB9LFxuXHR7IHByb3ZpZGU6IERvbWFpbkV2ZW50TG9nZ2VyLCB1c2VGYWN0b3J5OiBldmVudExvZ2dlckZhY3RvcnksIGRlcHM6IFtFVkVOVF9MT0dHRVJfRU5BQkxFRCwgQ29uc29sZUV2ZW50TG9nZ2VyLCBOb29wRXZlbnRMb2dnZXJdIH0sXG5cdENvbnNvbGVDb21tYW5kTG9nZ2VyLFxuXHROb29wQ29tbWFuZExvZ2dlcixcblx0Tm9vcEV2ZW50TG9nZ2VyLFxuXHRDb25zb2xlRXZlbnRMb2dnZXIsXG5cdEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcixcblx0QWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsXG5cdEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLFxuXHQuLi5oZXJtZXNQcm92aWRlcnNcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21tYW5kTG9nZ2VyRmFjdG9yeShlbmFibGVkOiBib29sZWFuLCBjb25zb2xlQ29tbWFuZExvZ2dlcjogQ29uc29sZUNvbW1hbmRMb2dnZXIsIG5vb3BDb21tYW5kTG9nZ2VyOiBOb29wQ29tbWFuZExvZ2dlcikge1xuXG5cdGlmIChlbmFibGVkKSB7XG5cdFx0cmV0dXJuIGNvbnNvbGVDb21tYW5kTG9nZ2VyO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBub29wQ29tbWFuZExvZ2dlcjtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRMb2dnZXJGYWN0b3J5KGVuYWJsZWQ6IGJvb2xlYW4sIGNvbnNvbGVFdmVudExvZ2dlcjogQ29uc29sZUV2ZW50TG9nZ2VyLCBub29wRXZlbnRMb2dnZXI6IE5vb3BFdmVudExvZ2dlcikge1xuXG5cdGlmIChlbmFibGVkKSB7XG5cdFx0cmV0dXJuIGNvbnNvbGVFdmVudExvZ2dlcjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbm9vcEV2ZW50TG9nZ2VyO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBIZXJtZXNCYXNlTW9kdWxlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPEk+LCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+XG5cdGV4dGVuZHMgUmVhY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlRGVmaW5pdGlvbkluaXRpYWxpemVyID0gbmV3IEFnZ3JlZ2F0ZURlZmluaXRpb25Jbml0aWFsaXplcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZEhhbmRsZXJJbml0aWFsaXplciA9IG5ldyBDb21tYW5kSGFuZGxlckluaXRpYWxpemVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEhhbmRsZXJJbml0aWFsaXplciA9IG5ldyBEb21haW5FdmVudEhhbmRsZXJJbml0aWFsaXplcigpO1xuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRE9NQUlOX0VWRU5UX0hBTkRMRVJTKSBldmVudEhhbmRsZXJzOiBBcnJheTxEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMpIGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChDT01NQU5EX0hBTkRMRVJTKSBjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4sXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3QoYWdncmVnYXRlRGVmaW5pdGlvblRva2VuKSBkZWZpbmVkQWdncmVnYXRlOiBBcnJheTxBZ2dyZWdhdGVEZWZpbml0aW9uPEksIEE+Pixcblx0XHRcdFx0aW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRhZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTogQWdncmVnYXRlRmFjdG9yeUFyY2hpdmU8SSwgQT4sXG5cdFx0XHRcdGFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlOiBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTxJLCBBPixcblx0XHRcdFx0Y29tbWFuZEJ1czogQ29tbWFuZEJ1cyxcblx0XHRcdFx0ZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIGhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcjogSGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHRcdFx0XHRwcml2YXRlIGhlcm1lc0FwaTogSGVybWVzQXBpKSB7IC8vIEhlcm1lc0FwaSBpbml0aWFsaXphdGlvblxuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmhlcm1lc0xvZ2dlcnNJbml0aWFsaXplci5zdGFydCgpO1xuXG5cdFx0dGhpcy5jaGVja051bGxDb21tYW5kKGNvbW1hbmRCdXMsIGNvbW1hbmRIYW5kbGVycywgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKTtcblx0XHR0aGlzLmNoZWNrQ29tbWFuZEhhbmRsZXJJc0NvbGxlY3Rpb24oY29tbWFuZEhhbmRsZXJzKTtcblx0XHR0aGlzLmNoZWNrRG9tYWluRXZlbnRIYW5kbGVySXNDb2xsZWN0aW9uKGV2ZW50SGFuZGxlcnMpO1xuXG5cblx0XHR0aGlzLmFnZ3JlZ2F0ZURlZmluaXRpb25Jbml0aWFsaXplci5yZWdpc3RlcihkZWZpbmVkQWdncmVnYXRlLCBpbmplY3RvciwgYWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsIGFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlKTtcblx0XHR0aGlzLmNvbW1hbmRIYW5kbGVySW5pdGlhbGl6ZXIucmVnaXN0ZXIoY29tbWFuZEhhbmRsZXJzLCBjb21tYW5kQnVzKTtcblx0XHR0aGlzLmNvbW1hbmRIYW5kbGVySW5pdGlhbGl6ZXIucmVnaXN0ZXJBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMoYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzLCBjb21tYW5kQnVzKTtcblx0XHR0aGlzLmRvbWFpbkV2ZW50SGFuZGxlckluaXRpYWxpemVyLmluaXQoZXZlbnRIYW5kbGVycywgZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLmhlcm1lc0xvZ2dlcnNJbml0aWFsaXplci5zdG9wKCk7XG5cdFx0dGhpcy5jb21tYW5kSGFuZGxlckluaXRpYWxpemVyLm5nT25EZXN0cm95KCk7XG5cdFx0dGhpcy5kb21haW5FdmVudEhhbmRsZXJJbml0aWFsaXplci5uZ09uRGVzdHJveSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja051bGxDb21tYW5kKFxuXHRcdGNvbW1hbmRCdXM6IENvbW1hbmRCdXMsXG5cdFx0Y29tbWFuZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+LFxuXHRcdGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+PlxuXHQpOiB2b2lkIHtcblxuXHRcdGNvbW1hbmRCdXNcblx0XHRcdC5vZk51bGxIYW5kbGVyKGNvbW1hbmRIYW5kbGVycywgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKVxuXHRcdFx0LnBpcGUodGhpcy5oZXJtZXNUYWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IEMpID0+IHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgQ29tbWFuZCAke2NvbW1hbmQudG9TdHJpbmcoKX0gd2FzIG5vdCBpbnRlcmNlcHRlZCBieSBhbnkgQ29tbWFuZEhhbmRsZXIuYCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDb21tYW5kSGFuZGxlcklzQ29sbGVjdGlvbihjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4pOiB2b2lkIHtcblx0XHRpZiAoY29tbWFuZEhhbmRsZXJzICYmICFBcnJheS5pc0FycmF5KGNvbW1hbmRIYW5kbGVycykpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0XHRjb25zb2xlLndhcm4oJ1lvdSBtaWdodCBwcm92aWRlZCBjb21tYW5kSGFuZGxlciB3aXRob3V0IHNwZWNpZnlpbmcgXCJtdWx0aTogdHJ1ZVwiLicpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tEb21haW5FdmVudEhhbmRsZXJJc0NvbGxlY3Rpb24oZXZlbnRIYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPj4pOiB2b2lkIHtcblx0XHRpZiAoZXZlbnRIYW5kbGVycyAmJiAhQXJyYXkuaXNBcnJheShldmVudEhhbmRsZXJzKSkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdGNvbnNvbGUud2FybignWW91IG1pZ2h0IHByb3ZpZGVkIGV2ZW50SGFuZGxlciB3aXRob3V0IHNwZWNpZnlpbmcgXCJtdWx0aTogdHJ1ZVwiLicpO1xuXHRcdH1cblx0fVxuXG59XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBwcm92aWRlcnNcbn0pXG5leHBvcnQgY2xhc3MgSGVybWVzTW9kdWxlIGV4dGVuZHMgSGVybWVzQmFzZU1vZHVsZTxhbnksIGFueSwgYW55LCBhbnk+IHtcblxuXHRzdGF0aWMgZGVmaW5lQWdncmVnYXRlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPEk+Pihcblx0XHRhZ2dyZWdhdGVLZXk6IHN0cmluZyxcblx0XHRmYWN0b3J5OiBUeXBlPEFnZ3JlZ2F0ZUZhY3Rvcnk8SSwgQT4+LFxuXHRcdHJlcG9zaXRvcnk6IFR5cGU8QWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPj4sXG5cdFx0Y3JlYXRlQ29tbWFuZEhhbmRsZXI6IFR5cGU8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz4+LFxuXHRcdGNvbW1hbmRIYW5kbGVyczogUmVhZG9ubHlBcnJheTxQcm92aWRlcj4gPSBbXSxcblx0XHRkb21haW5FdmVudEhhbmRsZXJzOiBSZWFkb25seUFycmF5PFByb3ZpZGVyPiA9IFtdKTogTW9kdWxlV2l0aFByb3ZpZGVyczxhbnk+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEhlcm1lc0RvbWFpbk1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0cHJvdmlkZTogYWdncmVnYXRlRGVmaW5pdGlvblRva2VuLFxuXHRcdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHRcdFx0dXNlVmFsdWU6IHtcblx0XHRcdFx0XHRrZXk6IGFnZ3JlZ2F0ZUtleSxcblx0XHRcdFx0XHRmYWN0b3J5OiBmYWN0b3J5LFxuXHRcdFx0XHRcdHJlcG9zaXRvcnk6IHJlcG9zaXRvcnlcblx0XHRcdFx0fVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBhZ2dyZWdhdGVLZXksXG5cdFx0XHRcdHVzZVZhbHVlOiBhZ2dyZWdhdGVLZXlcblx0XHRcdH0sXG5cdFx0XHRcdGZhY3RvcnksXG5cdFx0XHRcdHJlcG9zaXRvcnksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNyZWF0ZUNvbW1hbmRIYW5kbGVyKGNyZWF0ZUNvbW1hbmRIYW5kbGVyLCBhZ2dyZWdhdGVLZXkpLFxuXHRcdFx0XHQuLi5jb21tYW5kSGFuZGxlcnMsXG5cdFx0XHRcdC4uLmRvbWFpbkV2ZW50SGFuZGxlcnNcblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBIZXJtZXNNb2R1bGVDb25maWcgPSB7IGxvZ2dlcnM6IGZhbHNlIH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEhlcm1lc01vZHVsZT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogSGVybWVzTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBwcm92aWRlcnNcblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyQ29tbWFuZEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+KFxuXHRcdGNvbW1hbmRIYW5kbGVyVHlwZTogVHlwZTxDb21tYW5kSGFuZGxlcjxBLCBDPj4sXG5cdFx0YWdncmVnYXRlTmFtZTogc3RyaW5nKTogQXJyYXk8UHJvdmlkZXI+IHtcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHByb3ZpZGU6IGNvbW1hbmRIYW5kbGVyVHlwZSxcblx0XHRcdFx0dXNlQ2xhc3M6IGNvbW1hbmRIYW5kbGVyVHlwZVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdFx0XHR1c2VGYWN0b3J5OiBjb21tYW5kSGFuZGxlckZhY3RvcnksXG5cdFx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFx0Y29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHRcdEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLFxuXHRcdFx0XHRcdGFnZ3JlZ2F0ZU5hbWVcblx0XHRcdFx0XVxuXHRcdFx0fV07XG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KFxuXHRcdGRvbWFpbkV2ZW50SGFuZGxlclR5cGU6IFR5cGU8RG9tYWluRXZlbnRIYW5kbGVyPEksIEU+PlxuXHQpOiBBcnJheTxQcm92aWRlcj4ge1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0cHJvdmlkZTogZG9tYWluRXZlbnRIYW5kbGVyVHlwZSxcblx0XHRcdFx0dXNlQ2xhc3M6IGRvbWFpbkV2ZW50SGFuZGxlclR5cGVcblx0XHRcdH0sIHtcblx0XHRcdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdFx0XHR1c2VGYWN0b3J5OiBkb21haW5FdmVudEhhbmRsZXJGYWN0b3J5LFxuXHRcdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHRcdFx0ZGVwczogW1xuXHRcdFx0XHRcdGRvbWFpbkV2ZW50SGFuZGxlclR5cGVcblx0XHRcdFx0XVxuXHRcdFx0fV07XG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJNdWx0aURvbWFpbkV2ZW50SGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oXG5cdFx0ZG9tYWluRXZlbnRIYW5kbGVyVHlwZTogVHlwZTxNdWx0aURvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPj5cblx0KTogQXJyYXk8UHJvdmlkZXI+IHtcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHByb3ZpZGU6IGRvbWFpbkV2ZW50SGFuZGxlclR5cGUsXG5cdFx0XHRcdHVzZUNsYXNzOiBkb21haW5FdmVudEhhbmRsZXJUeXBlXG5cdFx0XHR9LCB7XG5cdFx0XHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHRcdFx0dXNlRmFjdG9yeTogbXVsdGlEb21haW5FdmVudEhhbmRsZXJGYWN0b3J5LFxuXHRcdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHRcdFx0ZGVwczogW1xuXHRcdFx0XHRcdGRvbWFpbkV2ZW50SGFuZGxlclR5cGVcblx0XHRcdFx0XVxuXHRcdFx0fV07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERPTUFJTl9FVkVOVF9IQU5ETEVSUykgZXZlbnRIYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVySW1wbDxhbnksIGFueT4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KENSRUFURV9BR0dSRUdBVEVfQ09NTUFORF9IQU5ETEVSUykgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8YW55LCBhbnksIGFueT4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KENPTU1BTkRfSEFORExFUlMpIGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPGFueSwgYW55LCBhbnk+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChhZ2dyZWdhdGVEZWZpbml0aW9uVG9rZW4pIGRlZmluZWRBZ2dyZWdhdGU6IEFycmF5PEFnZ3JlZ2F0ZURlZmluaXRpb248YW55LCBhbnk+Pixcblx0XHRcdFx0aW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRhZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTogQWdncmVnYXRlRmFjdG9yeUFyY2hpdmU8YW55LCBhbnk+LFxuXHRcdFx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU8YW55LCBhbnk+LFxuXHRcdFx0XHRjb21tYW5kQnVzOiBDb21tYW5kQnVzLFxuXHRcdFx0XHRkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdGhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcjogSGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHRcdFx0XHRoZXJtZXNBcGk6IEhlcm1lc0FwaSkgeyAvLyBIZXJtZXNBcGkgaW5pdGlhbGl6YXRpb25cblx0XHRzdXBlcihcblx0XHRcdGV2ZW50SGFuZGxlcnMsXG5cdFx0XHRhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMsXG5cdFx0XHRjb21tYW5kSGFuZGxlcnMsXG5cdFx0XHRkZWZpbmVkQWdncmVnYXRlLFxuXHRcdFx0aW5qZWN0b3IsXG5cdFx0XHRhZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSxcblx0XHRcdGFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLFxuXHRcdFx0Y29tbWFuZEJ1cyxcblx0XHRcdGRvbWFpbkV2ZW50QnVzLFxuXHRcdFx0aGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHRcdFx0aGVybWVzQXBpXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyQ3JlYXRlQ29tbWFuZEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+KFxuXHRcdGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZTogVHlwZTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxBLCBDPj4sXG5cdFx0YWdncmVnYXRlTmFtZTogc3RyaW5nKTogQXJyYXk8UHJvdmlkZXI+IHtcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHByb3ZpZGU6IGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZSxcblx0XHRcdFx0dXNlQ2xhc3M6IGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMsXG5cdFx0XHRcdHVzZUZhY3Rvcnk6IGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyRmFjdG9yeSxcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRjcmVhdGVDb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdFx0QWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsXG5cdFx0XHRcdFx0QWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdFx0XHRcdFx0YWdncmVnYXRlTmFtZSxcblx0XHRcdFx0XHREb21haW5FdmVudFB1Ymxpc2hlclxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0XTtcblx0fVxuXG59XG4iXX0=