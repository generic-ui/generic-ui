/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injector, NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
import { aggregateCommandHandlerFactory } from '../domain/command/create-handler/aggregate-command-handler.impl';
import { AGGREGATE_COMMAND_HANDLERS } from '../domain/command/create-handler/aggregate-command-handlers.token';
import { AggregateFactoryArchive, AggregateRepositoryArchive } from '../domain/command/config/define';
import { aggregateDefinitionToken } from '../domain/command/config/aggregate-definition.token';
import { HermesDomainModule } from './hermes.domain.module';
import { COMMAND_HANDLERS } from '../domain/command/handler/command-handlers';
import { commandHandlerFactory } from '../domain/command/handler/command-handler-impl';
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
var HermesModule = /** @class */ (function () {
    function HermesModule(eventHandlers, aggregateCommandHandlers, handlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        var _this = this;
        this.hermesLoggersInitializer = hermesLoggersInitializer;
        this.hermesApi = hermesApi;
        this.unsubscribe$ = new Subject();
        this.hermesLoggersInitializer.start();
        this.checkNullCommand(commandBus, handlers, aggregateCommandHandlers);
        this.checkCommandHandlerIsCollection(handlers);
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
        if (handlers) {
            handlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                commandBus
                    .ofCommandHandler(handler)
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
     * @template A, C
     * @param {?} aggregateKey
     * @param {?} factory
     * @param {?} repository
     * @param {?} createHandler
     * @param {?} handlers
     * @return {?}
     */
    HermesModule.defineAggregate = /**
     * @template A, C
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
     * @template A, C
     * @param {?} commandHandlerType
     * @param {?} aggregateName
     * @return {?}
     */
    HermesModule.registerCommandHandler = /**
     * @template A, C
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
     * @template A, C
     * @param {?} createCommandHandlerType
     * @param {?} aggregateName
     * @return {?}
     */
    HermesModule.registerCreateCommandHandler = /**
     * @private
     * @template A, C
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
                provide: AGGREGATE_COMMAND_HANDLERS,
                useFactory: aggregateCommandHandlerFactory,
                multi: true,
                deps: [
                    createCommandHandlerType,
                    AggregateFactoryArchive,
                    AggregateRepositoryArchive,
                    aggregateName
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
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
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
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [DOMAIN_EVENT_HANDLERS,] }] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [AGGREGATE_COMMAND_HANDLERS,] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInVpLWFwaS9oZXJtZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBYSxRQUFRLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU0zQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUUxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFLeEUsT0FBTyxFQUFFLHNCQUFzQixF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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFByb3ZpZGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLyoqXG4gKiBDb21tYW5kXG4gKi9cbmltcG9ydCB7IEFnZ3JlZ2F0ZSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQnO1xuaW1wb3J0IHsgQ29tbWFuZEJ1cyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuYnVzJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBDb21tYW5kU3RyZWFtIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5zdHJlYW0nO1xuaW1wb3J0IHsgRklMVEVSRURfQ09NTUFORF9TVFJFQU0gfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9maWx0ZXJlZC1jb21tYW5kLXN0cmVhbSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBET01BSU5fRVZFTlRfSEFORExFUlMgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LWhhbmRsZXJzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudFN0b3JlIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdG9yZSc7XG5pbXBvcnQgeyBEb21haW5FdmVudFN0cmVhbSB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RyZWFtJztcbi8qKlxuICogQVBQXG4gKi9cbmltcG9ydCB7IEhlcm1lc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vaGVybWVzLW1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgRVZFTlRfTE9HR0VSX0VOQUJMRUQgfSBmcm9tICcuLi9kb21haW4vaGVybWVzLXRva2Vucyc7XG5pbXBvcnQgeyBIZXJtZXNBcGkgfSBmcm9tICcuLi91aS1hcGkvaGVybWVzLWFwaSc7XG4vKipcbiAqIEluZnJhc3RydWN0dXJlXG4gKi9cbmltcG9ydCB7IENvbnNvbGVDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvY29uc29sZS5jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBOb29wQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9jb21tYW5kL25vb3AuY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgQ29uc29sZUV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L2NvbnNvbGUuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BFdmVudExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9ldmVudC9ub29wLmV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICcuLi9jb21tb24vcmFuZG9tLXN0cmluZy5nZW5lcmF0b3InO1xuaW1wb3J0IHsgSGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyIH0gZnJvbSAnLi9oZXJtZXMubG9nZ2Vycy5pbml0aWFsaXplcic7XG5pbXBvcnQgeyBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3RvcnksIEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NyZWF0ZS1oYW5kbGVyL2FnZ3JlZ2F0ZS1jb21tYW5kLWhhbmRsZXIuaW1wbCc7XG5pbXBvcnQgeyBBR0dSRUdBVEVfQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NyZWF0ZS1oYW5kbGVyL2FnZ3JlZ2F0ZS1jb21tYW5kLWhhbmRsZXJzLnRva2VuJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLCBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbmZpZy9kZWZpbmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NyZWF0ZS1oYW5kbGVyL2FnZ3JlZ2F0ZS5mYWN0b3J5JztcbmltcG9ydCB7IGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbiB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbmZpZy9hZ2dyZWdhdGUtZGVmaW5pdGlvbi50b2tlbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVEZWZpbml0aW9uIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2FnZ3JlZ2F0ZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jcmVhdGUtaGFuZGxlci9hZ2dyZWdhdGUtY29tbWFuZC5oYW5kbGVyJztcbmltcG9ydCB7IEhlcm1lc0RvbWFpbk1vZHVsZSB9IGZyb20gJy4vaGVybWVzLmRvbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVycyc7XG5pbXBvcnQgeyBjb21tYW5kSGFuZGxlckZhY3RvcnksIENvbW1hbmRIYW5kbGVySW1wbCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQuaGFuZGxlcic7XG5cblxuY29uc3QgaGVybWVzUHJvdmlkZXJzID0gW1xuXHRSYW5kb21TdHJpbmdHZW5lcmF0b3IsXG5cdHsgcHJvdmlkZTogRklMVEVSRURfQ09NTUFORF9TVFJFQU0sIHVzZUV4aXN0aW5nOiBDb21tYW5kU3RyZWFtIH0sXG5cdENvbW1hbmRCdXMsXG5cdENvbW1hbmRTdHJlYW0sXG5cdENvbW1hbmREaXNwYXRjaGVyLFxuXHRBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLFxuXG5cdERvbWFpbkV2ZW50QnVzLFxuXHREb21haW5FdmVudFN0cmVhbSxcblx0RG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cdERvbWFpbkV2ZW50U3RvcmUsXG5cblx0SGVybWVzQXBpXG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdHsgcHJvdmlkZTogRVZFTlRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiB0cnVlIH0sXG5cdHsgcHJvdmlkZTogQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHRydWUgfSxcblx0eyBwcm92aWRlOiBDb21tYW5kTG9nZ2VyLCB1c2VGYWN0b3J5OiBjb21tYW5kTG9nZ2VyRmFjdG9yeSwgZGVwczogW0NPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIENvbnNvbGVDb21tYW5kTG9nZ2VyLCBOb29wQ29tbWFuZExvZ2dlcl0gfSxcblx0eyBwcm92aWRlOiBEb21haW5FdmVudExvZ2dlciwgdXNlRmFjdG9yeTogZXZlbnRMb2dnZXJGYWN0b3J5LCBkZXBzOiBbRVZFTlRfTE9HR0VSX0VOQUJMRUQsIENvbnNvbGVFdmVudExvZ2dlciwgTm9vcEV2ZW50TG9nZ2VyXSB9LFxuXHRDb25zb2xlQ29tbWFuZExvZ2dlcixcblx0Tm9vcENvbW1hbmRMb2dnZXIsXG5cdE5vb3BFdmVudExvZ2dlcixcblx0Q29uc29sZUV2ZW50TG9nZ2VyLFxuXHRIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIsXG5cdEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLFxuXHRBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSxcblx0Li4uaGVybWVzUHJvdmlkZXJzXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tbWFuZExvZ2dlckZhY3RvcnkoZW5hYmxlZDogYm9vbGVhbiwgY29uc29sZUNvbW1hbmRMb2dnZXI6IENvbnNvbGVDb21tYW5kTG9nZ2VyLCBub29wQ29tbWFuZExvZ2dlcjogTm9vcENvbW1hbmRMb2dnZXIpIHtcblxuXHRpZiAoZW5hYmxlZCkge1xuXHRcdHJldHVybiBjb25zb2xlQ29tbWFuZExvZ2dlcjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbm9vcENvbW1hbmRMb2dnZXI7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50TG9nZ2VyRmFjdG9yeShlbmFibGVkOiBib29sZWFuLCBjb25zb2xlRXZlbnRMb2dnZXI6IENvbnNvbGVFdmVudExvZ2dlciwgbm9vcEV2ZW50TG9nZ2VyOiBOb29wRXZlbnRMb2dnZXIpIHtcblxuXHRpZiAoZW5hYmxlZCkge1xuXHRcdHJldHVybiBjb25zb2xlRXZlbnRMb2dnZXI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5vb3BFdmVudExvZ2dlcjtcblx0fVxufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogcHJvdmlkZXJzXG59KVxuZXhwb3J0IGNsYXNzIEhlcm1lc01vZHVsZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdHN0YXRpYyBkZWZpbmVBZ2dyZWdhdGU8QSBleHRlbmRzIEFnZ3JlZ2F0ZSwgQyBleHRlbmRzIENvbW1hbmQ+KGFnZ3JlZ2F0ZUtleTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBmYWN0b3J5OiBUeXBlPEFnZ3JlZ2F0ZUZhY3Rvcnk8QT4+LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICByZXBvc2l0b3J5OiBUeXBlPEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8QT4+LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBjcmVhdGVIYW5kbGVyOiBUeXBlPEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPEEsIEM+Pixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaGFuZGxlcnM6IEFycmF5PFByb3ZpZGVyPik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogSGVybWVzRG9tYWluTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbe1xuXHRcdFx0XHRwcm92aWRlOiBhZ2dyZWdhdGVEZWZpbml0aW9uVG9rZW4sXG5cdFx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdFx0XHR1c2VWYWx1ZToge1xuXHRcdFx0XHRcdGtleTogYWdncmVnYXRlS2V5LFxuXHRcdFx0XHRcdGZhY3Rvcnk6IGZhY3RvcnksXG5cdFx0XHRcdFx0cmVwb3NpdG9yeTogcmVwb3NpdG9yeVxuXHRcdFx0XHR9XG5cdFx0XHR9LCB7XG5cdFx0XHRcdHByb3ZpZGU6IGFnZ3JlZ2F0ZUtleSxcblx0XHRcdFx0dXNlVmFsdWU6IGFnZ3JlZ2F0ZUtleVxuXHRcdFx0fSxcblx0XHRcdFx0ZmFjdG9yeSxcblx0XHRcdFx0cmVwb3NpdG9yeSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ3JlYXRlQ29tbWFuZEhhbmRsZXIoY3JlYXRlSGFuZGxlciwgYWdncmVnYXRlS2V5KSxcblx0XHRcdFx0Li4uaGFuZGxlcnNcblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBIZXJtZXNNb2R1bGVDb25maWcgPSB7IGxvZ2dlcnM6IGZhbHNlIH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEhlcm1lc01vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogcHJvdmlkZXJzXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyByZWdpc3RlckNvbW1hbmRIYW5kbGVyPEEgZXh0ZW5kcyBBZ2dyZWdhdGUsIEMgZXh0ZW5kcyBDb21tYW5kPihcblx0XHRjb21tYW5kSGFuZGxlclR5cGU6IFR5cGU8Q29tbWFuZEhhbmRsZXI8QSwgQz4+LFxuXHRcdGFnZ3JlZ2F0ZU5hbWU6IHN0cmluZyk6IEFycmF5PFByb3ZpZGVyPiB7XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRwcm92aWRlOiBjb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdHVzZUNsYXNzOiBjb21tYW5kSGFuZGxlclR5cGVcblx0XHRcdH0sIHtcblx0XHRcdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHRcdFx0dXNlRmFjdG9yeTogY29tbWFuZEhhbmRsZXJGYWN0b3J5LFxuXHRcdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHRcdFx0ZGVwczogW1xuXHRcdFx0XHRcdGNvbW1hbmRIYW5kbGVyVHlwZSxcblx0XHRcdFx0XHRBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSxcblx0XHRcdFx0XHRhZ2dyZWdhdGVOYW1lXG5cdFx0XHRcdF1cblx0XHRcdH1dO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXJDcmVhdGVDb21tYW5kSGFuZGxlcjxBIGV4dGVuZHMgQWdncmVnYXRlLCBDIGV4dGVuZHMgQ29tbWFuZD4oXG5cdFx0Y3JlYXRlQ29tbWFuZEhhbmRsZXJUeXBlOiBUeXBlPEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPEEsIEM+Pixcblx0XHRhZ2dyZWdhdGVOYW1lOiBzdHJpbmcpOiBBcnJheTxQcm92aWRlcj4ge1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0cHJvdmlkZTogY3JlYXRlQ29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHR1c2VDbGFzczogY3JlYXRlQ29tbWFuZEhhbmRsZXJUeXBlXG5cdFx0XHR9LCB7XG5cdFx0XHRcdHByb3ZpZGU6IEFHR1JFR0FURV9DT01NQU5EX0hBTkRMRVJTLFxuXHRcdFx0XHR1c2VGYWN0b3J5OiBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3RvcnksXG5cdFx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFx0Y3JlYXRlQ29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHRcdEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLFxuXHRcdFx0XHRcdEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLFxuXHRcdFx0XHRcdGFnZ3JlZ2F0ZU5hbWVcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdF07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERPTUFJTl9FVkVOVF9IQU5ETEVSUykgZXZlbnRIYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVyPixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChBR0dSRUdBVEVfQ09NTUFORF9IQU5ETEVSUykgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8QWdncmVnYXRlLCBDb21tYW5kPj4sXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3QoQ09NTUFORF9IQU5ETEVSUykgaGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGUsIENvbW1hbmQ+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChhZ2dyZWdhdGVEZWZpbml0aW9uVG9rZW4pIGRlZmluZWRBZ2dyZWdhdGU6IEFycmF5PEFnZ3JlZ2F0ZURlZmluaXRpb24+LFxuXHRcdFx0XHRpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdGFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlOiBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSxcblx0XHRcdFx0YWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLFxuXHRcdFx0XHRjb21tYW5kQnVzOiBDb21tYW5kQnVzLFxuXHRcdFx0XHRkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyOiBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIsXG5cdFx0XHRcdHByaXZhdGUgaGVybWVzQXBpOiBIZXJtZXNBcGkpIHsgLy8gSGVybWVzQXBpIGluaXRpYWxpemF0aW9uXG5cblx0XHR0aGlzLmhlcm1lc0xvZ2dlcnNJbml0aWFsaXplci5zdGFydCgpO1xuXG5cdFx0dGhpcy5jaGVja051bGxDb21tYW5kKGNvbW1hbmRCdXMsIGhhbmRsZXJzLCBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMpO1xuXHRcdHRoaXMuY2hlY2tDb21tYW5kSGFuZGxlcklzQ29sbGVjdGlvbihoYW5kbGVycyk7XG5cblx0XHRpZiAoZGVmaW5lZEFnZ3JlZ2F0ZSkge1xuXHRcdFx0ZGVmaW5lZEFnZ3JlZ2F0ZS5mb3JFYWNoKChkZWY6IEFnZ3JlZ2F0ZURlZmluaXRpb24pID0+IHtcblxuXHRcdFx0XHRjb25zdCBmYWN0b3J5ID0gaW5qZWN0b3IuZ2V0KGRlZi5mYWN0b3J5KSxcblx0XHRcdFx0XHRyZXBvc2l0b3J5ID0gaW5qZWN0b3IuZ2V0KGRlZi5yZXBvc2l0b3J5KTtcblxuXHRcdFx0XHRhZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZS5hZGQoZGVmLmtleSwgZmFjdG9yeSk7XG5cdFx0XHRcdGFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLmFkZChkZWYua2V5LCByZXBvc2l0b3J5KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMpIHtcblxuXHRcdFx0YWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGUsIENvbW1hbmQ+KSA9PiB7XG5cdFx0XHRcdGNvbW1hbmRCdXNcblx0XHRcdFx0XHQub2ZDcmVhdGVBZ2dyZWdhdGVIYW5kbGVyKGhhbmRsZXIpXG5cdFx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoaGFuZGxlcnMpIHtcblxuXHRcdFx0aGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZSwgQ29tbWFuZD4pID0+IHtcblx0XHRcdFx0Y29tbWFuZEJ1c1xuXHRcdFx0XHRcdC5vZkNvbW1hbmRIYW5kbGVyKGhhbmRsZXIpXG5cdFx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnRIYW5kbGVycykge1xuXHRcdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcblx0XHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cblx0XHRcdFx0XHRldmVudEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlcikgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGUoZXZlbnQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblxuXHRcdHRoaXMuaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLnN0b3AoKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tOdWxsQ29tbWFuZChjb21tYW5kQnVzOiBDb21tYW5kQnVzLCBjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGUsIENvbW1hbmQ+PiwgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8QWdncmVnYXRlLCBDb21tYW5kPj4pOiB2b2lkIHtcblx0XHRjb21tYW5kQnVzXG5cdFx0XHQub2ZOdWxsSGFuZGxlcihjb21tYW5kSGFuZGxlcnMsIGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycylcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBDb21tYW5kICR7Y29tbWFuZC50b1N0cmluZygpfSB3YXMgbm90IGludGVyY2VwdGVkIGJ5IGFueSBDb21tYW5kSGFuZGxlci5gKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NvbW1hbmRIYW5kbGVySXNDb2xsZWN0aW9uKGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZSwgQ29tbWFuZD4+KTogdm9pZCB7XG5cdFx0aWYgKGNvbW1hbmRIYW5kbGVycyAmJiAhQXJyYXkuaXNBcnJheShjb21tYW5kSGFuZGxlcnMpKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgWW91IG1pZ2h0IHByb3ZpZGVkIGNvbW1hbmRIYW5kbGVyIHdpdGhvdXQgc3BlY2lmeWluZyBcIm11bHRpOiB0cnVlXCIuYCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==