/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    AggregateFactoryArchive,
    AggregateRepositoryArchive,
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
/**
 * @template I, A, C, E
 */
export class HermesModule extends Reactive {
    /**
     * @param {?} eventHandlers
     * @param {?} aggregateCommandHandlers
     * @param {?} handlers
     * @param {?} definedAggregate
     * @param {?} injector
     * @param {?} aggregateFactoryArchive
     * @param {?} aggregateRepositoryArchive
     * @param {?} commandBus
     * @param {?} domainEventBus
     * @param {?} hermesLoggersInitializer
     * @param {?} hermesApi
     */
    constructor(eventHandlers, aggregateCommandHandlers, handlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        super();
        this.hermesLoggersInitializer = hermesLoggersInitializer;
        this.hermesApi = hermesApi;
        this.hermesLoggersInitializer.start();
        this.checkNullCommand(commandBus, handlers, aggregateCommandHandlers);
        this.checkCommandHandlerIsCollection(handlers);
        if (definedAggregate) {
            definedAggregate.forEach((/**
             * @param {?} def
             * @return {?}
             */
            (def) => {
                /** @type {?} */
                const factory = injector.get(def.factory);
                /** @type {?} */
                const repository = injector.get(def.repository);
                aggregateFactoryArchive.add(def.key, factory);
                aggregateRepositoryArchive.add(def.key, repository);
            }));
        }
        if (aggregateCommandHandlers) {
            aggregateCommandHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                commandBus
                    .ofCreateAggregateHandler(handler)
                    .pipe(this.takeUntil())
                    .subscribe((/**
                 * @param {?} command
                 * @return {?}
                 */
                (command) => {
                    handler.handleCommand(command);
                }));
            }));
        }
        if (handlers) {
            handlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                commandBus
                    .ofCommandHandler(handler)
                    .pipe(this.takeUntil())
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
                .pipe(this.takeUntil())
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
     * @template I, A, C
     * @param {?} aggregateKey
     * @param {?} factory
     * @param {?} repository
     * @param {?} createHandler
     * @param {?} handlers
     * @return {?}
     */
    static defineAggregate(aggregateKey, factory, repository, createHandler, handlers) {
        return {
            ngModule: HermesDomainModule,
            providers: [{
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
                repository,
                ...HermesModule.registerCreateCommandHandler(createHandler, aggregateKey),
                ...handlers
            ]
        };
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
     * @template I, A, C
     * @param {?} commandHandlerType
     * @param {?} aggregateName
     * @return {?}
     */
    static registerCommandHandler(commandHandlerType, aggregateName) {
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
    }
    /**
     * @private
     * @template I, A, C
     * @param {?} createCommandHandlerType
     * @param {?} aggregateName
     * @return {?}
     */
    static registerCreateCommandHandler(createCommandHandlerType, aggregateName) {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this.hermesLoggersInitializer.stop();
    }
    /**
     * @private
     * @param {?} commandBus
     * @param {?} commandHandlers
     * @param {?} aggregateCommandHandlers
     * @return {?}
     */
    checkNullCommand(commandBus, commandHandlers, aggregateCommandHandlers) {
        commandBus
            .ofNullHandler(commandHandlers, aggregateCommandHandlers)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            console.error(`Command ${command.toString()} was not intercepted by any CommandHandler.`);
        }));
    }
    /**
     * @private
     * @param {?} commandHandlers
     * @return {?}
     */
    checkCommandHandlerIsCollection(commandHandlers) {
        if (commandHandlers && !Array.isArray(commandHandlers)) {
            console.warn(`You might provided commandHandler without specifying "multi: true".`);
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
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi1hcGkvaGVybWVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBYSxRQUFRLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0vQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUUxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFLeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUkx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RCxFQUFFLHdCQUEyRTtRQUNoTCxVQUFVO2FBQ1IsYUFBYSxDQUFDLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQzthQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQVUsRUFBRSxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxPQUFPLENBQUMsUUFBUSxFQUFFLDZDQUE2QyxDQUFDLENBQUM7UUFDM0YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTywrQkFBK0IsQ0FBQyxlQUFtRDtRQUMxRixJQUFJLGVBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDdkQsT0FBTyxDQUFDLElBQUksQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO1NBQ3BGO0lBQ0YsQ0FBQzs7O1lBeEtELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjtnQkFDRCxTQUFTLEVBQUUsU0FBUzthQUNwQjs7OztZQWdGc0UsS0FBSyx1QkFBOUQsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7WUFDK0IsS0FBSyx1QkFBckYsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQ0FBaUM7WUFDTCxLQUFLLHVCQUFwRCxRQUFRLFlBQUksTUFBTSxTQUFDLGdCQUFnQjtZQUM0QixLQUFLLHVCQUFwRSxRQUFRLFlBQUksTUFBTSxTQUFDLHdCQUF3QjtZQWhNL0IsUUFBUTtZQXlDaEIsdUJBQXVCO1lBQUUsMEJBQTBCO1lBbENuRCxVQUFVO1lBUVYsY0FBYztZQW9CZCx3QkFBd0I7WUFUeEIsU0FBUzs7Ozs7OztJQTRLZCxnREFBMEQ7Ozs7O0lBQzFELGlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0b3IsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBQcm92aWRlciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8qKlxuICogQ29tbWFuZFxuICovXG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IENvbW1hbmRCdXMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmJ1cyc7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgQ29tbWFuZFN0cmVhbSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuc3RyZWFtJztcbmltcG9ydCB7IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvZmlsdGVyZWQtY29tbWFuZC1zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS1zdG9yZS5yZWdpc3Rlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdG9yZSB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RvcmUnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0cmVhbSc7XG4vKipcbiAqIEFQUFxuICovXG5pbXBvcnQgeyBIZXJtZXNNb2R1bGVDb25maWcgfSBmcm9tICcuL2hlcm1lcy1tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIEVWRU5UX0xPR0dFUl9FTkFCTEVEIH0gZnJvbSAnLi4vZG9tYWluL2hlcm1lcy10b2tlbnMnO1xuaW1wb3J0IHsgSGVybWVzQXBpIH0gZnJvbSAnLi8vaGVybWVzLWFwaSc7XG4vKipcbiAqIEluZnJhc3RydWN0dXJlXG4gKi9cbmltcG9ydCB7IENvbnNvbGVDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvY29uc29sZS5jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBOb29wQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9jb21tYW5kL25vb3AuY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgQ29uc29sZUV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L2NvbnNvbGUuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BFdmVudExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9ldmVudC9ub29wLmV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICcuLi9jb21tb24vcmFuZG9tLXN0cmluZy5nZW5lcmF0b3InO1xuaW1wb3J0IHsgSGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyIH0gZnJvbSAnLi9oZXJtZXMubG9nZ2Vycy5pbml0aWFsaXplcic7XG5pbXBvcnQge1xuXHRjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3RvcnksXG5cdENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbFxufSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvY3JlYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQ1JFQVRFX0FHR1JFR0FURV9DT01NQU5EX0hBTkRMRVJTIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2NyZWF0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlcnMtdG9rZW4nO1xuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsIEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2RlZmluZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbiB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbmZpZy9hZ2dyZWdhdGUtZGVmaW5pdGlvbi50b2tlbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVEZWZpbml0aW9uIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2FnZ3JlZ2F0ZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvY3JlYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEhlcm1lc0RvbWFpbk1vZHVsZSB9IGZyb20gJy4vaGVybWVzLmRvbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVycyc7XG5pbXBvcnQgeyBjb21tYW5kSGFuZGxlckZhY3RvcnksIENvbW1hbmRIYW5kbGVySW1wbCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQuaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi9jb21tb24vcmVhY3RpdmUnO1xuXG5cbmNvbnN0IGhlcm1lc1Byb3ZpZGVycyA9IFtcblx0UmFuZG9tU3RyaW5nR2VuZXJhdG9yLFxuXHR7IHByb3ZpZGU6IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNLCB1c2VFeGlzdGluZzogQ29tbWFuZFN0cmVhbSB9LFxuXHRDb21tYW5kQnVzLFxuXHRDb21tYW5kU3RyZWFtLFxuXHRDb21tYW5kRGlzcGF0Y2hlcixcblx0QWdncmVnYXRlU3RvcmVSZWdpc3RlcixcblxuXHREb21haW5FdmVudEJ1cyxcblx0RG9tYWluRXZlbnRTdHJlYW0sXG5cdERvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHREb21haW5FdmVudFN0b3JlLFxuXG5cdEhlcm1lc0FwaVxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHR7IHByb3ZpZGU6IEVWRU5UX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogdHJ1ZSB9LFxuXHR7IHByb3ZpZGU6IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiB0cnVlIH0sXG5cdHsgcHJvdmlkZTogQ29tbWFuZExvZ2dlciwgdXNlRmFjdG9yeTogY29tbWFuZExvZ2dlckZhY3RvcnksIGRlcHM6IFtDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBDb25zb2xlQ29tbWFuZExvZ2dlciwgTm9vcENvbW1hbmRMb2dnZXJdIH0sXG5cdHsgcHJvdmlkZTogRG9tYWluRXZlbnRMb2dnZXIsIHVzZUZhY3Rvcnk6IGV2ZW50TG9nZ2VyRmFjdG9yeSwgZGVwczogW0VWRU5UX0xPR0dFUl9FTkFCTEVELCBDb25zb2xlRXZlbnRMb2dnZXIsIE5vb3BFdmVudExvZ2dlcl0gfSxcblx0Q29uc29sZUNvbW1hbmRMb2dnZXIsXG5cdE5vb3BDb21tYW5kTG9nZ2VyLFxuXHROb29wRXZlbnRMb2dnZXIsXG5cdENvbnNvbGVFdmVudExvZ2dlcixcblx0SGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHRBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSxcblx0QWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdC4uLmhlcm1lc1Byb3ZpZGVyc1xuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmRMb2dnZXJGYWN0b3J5KGVuYWJsZWQ6IGJvb2xlYW4sIGNvbnNvbGVDb21tYW5kTG9nZ2VyOiBDb25zb2xlQ29tbWFuZExvZ2dlciwgbm9vcENvbW1hbmRMb2dnZXI6IE5vb3BDb21tYW5kTG9nZ2VyKSB7XG5cblx0aWYgKGVuYWJsZWQpIHtcblx0XHRyZXR1cm4gY29uc29sZUNvbW1hbmRMb2dnZXI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5vb3BDb21tYW5kTG9nZ2VyO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudExvZ2dlckZhY3RvcnkoZW5hYmxlZDogYm9vbGVhbiwgY29uc29sZUV2ZW50TG9nZ2VyOiBDb25zb2xlRXZlbnRMb2dnZXIsIG5vb3BFdmVudExvZ2dlcjogTm9vcEV2ZW50TG9nZ2VyKSB7XG5cblx0aWYgKGVuYWJsZWQpIHtcblx0XHRyZXR1cm4gY29uc29sZUV2ZW50TG9nZ2VyO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBub29wRXZlbnRMb2dnZXI7XG5cdH1cbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IHByb3ZpZGVyc1xufSlcbmV4cG9ydCBjbGFzcyBIZXJtZXNNb2R1bGU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4gZXh0ZW5kcyBSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0c3RhdGljIGRlZmluZUFnZ3JlZ2F0ZTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZD4oYWdncmVnYXRlS2V5OiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZmFjdG9yeTogVHlwZTxBZ2dyZWdhdGVGYWN0b3J5PEksIEE+Pixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCByZXBvc2l0b3J5OiBUeXBlPEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8SSwgQT4+LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGNyZWF0ZUhhbmRsZXI6IFR5cGU8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz4+LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGhhbmRsZXJzOiBBcnJheTxQcm92aWRlcj4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEhlcm1lc0RvbWFpbk1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0cHJvdmlkZTogYWdncmVnYXRlRGVmaW5pdGlvblRva2VuLFxuXHRcdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHRcdFx0dXNlVmFsdWU6IHtcblx0XHRcdFx0XHRrZXk6IGFnZ3JlZ2F0ZUtleSxcblx0XHRcdFx0XHRmYWN0b3J5OiBmYWN0b3J5LFxuXHRcdFx0XHRcdHJlcG9zaXRvcnk6IHJlcG9zaXRvcnlcblx0XHRcdFx0fVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBhZ2dyZWdhdGVLZXksXG5cdFx0XHRcdHVzZVZhbHVlOiBhZ2dyZWdhdGVLZXlcblx0XHRcdH0sXG5cdFx0XHRcdGZhY3RvcnksXG5cdFx0XHRcdHJlcG9zaXRvcnksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNyZWF0ZUNvbW1hbmRIYW5kbGVyKGNyZWF0ZUhhbmRsZXIsIGFnZ3JlZ2F0ZUtleSksXG5cdFx0XHRcdC4uLmhhbmRsZXJzXG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogSGVybWVzTW9kdWxlQ29uZmlnID0geyBsb2dnZXJzOiBmYWxzZSB9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBIZXJtZXNNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IHByb3ZpZGVyc1xuXHRcdH07XG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJDb21tYW5kSGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZD4oXG5cdFx0Y29tbWFuZEhhbmRsZXJUeXBlOiBUeXBlPENvbW1hbmRIYW5kbGVyPEEsIEM+Pixcblx0XHRhZ2dyZWdhdGVOYW1lOiBzdHJpbmcpOiBBcnJheTxQcm92aWRlcj4ge1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0cHJvdmlkZTogY29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHR1c2VDbGFzczogY29tbWFuZEhhbmRsZXJUeXBlXG5cdFx0XHR9LCB7XG5cdFx0XHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0XHRcdHVzZUZhY3Rvcnk6IGNvbW1hbmRIYW5kbGVyRmFjdG9yeSxcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRjb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdFx0QWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdFx0XHRcdFx0YWdncmVnYXRlTmFtZVxuXHRcdFx0XHRdXG5cdFx0XHR9XTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyQ3JlYXRlQ29tbWFuZEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ+KFxuXHRcdGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZTogVHlwZTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxBLCBDPj4sXG5cdFx0YWdncmVnYXRlTmFtZTogc3RyaW5nKTogQXJyYXk8UHJvdmlkZXI+IHtcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHByb3ZpZGU6IGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZSxcblx0XHRcdFx0dXNlQ2xhc3M6IGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMsXG5cdFx0XHRcdHVzZUZhY3Rvcnk6IGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyRmFjdG9yeSxcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRjcmVhdGVDb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdFx0QWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsXG5cdFx0XHRcdFx0QWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdFx0XHRcdFx0YWdncmVnYXRlTmFtZSxcblx0XHRcdFx0XHREb21haW5FdmVudFB1Ymxpc2hlclxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0XTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRE9NQUlOX0VWRU5UX0hBTkRMRVJTKSBldmVudEhhbmRsZXJzOiBBcnJheTxEb21haW5FdmVudEhhbmRsZXI8SSwgRT4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KENSRUFURV9BR0dSRUdBVEVfQ09NTUFORF9IQU5ETEVSUykgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KENPTU1BTkRfSEFORExFUlMpIGhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbikgZGVmaW5lZEFnZ3JlZ2F0ZTogQXJyYXk8QWdncmVnYXRlRGVmaW5pdGlvbjxJLCBBPj4sXG5cdFx0XHRcdGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0YWdncmVnYXRlRmFjdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlPEksIEE+LFxuXHRcdFx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU8SSwgQT4sXG5cdFx0XHRcdGNvbW1hbmRCdXM6IENvbW1hbmRCdXMsXG5cdFx0XHRcdGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBoZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXI6IEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcixcblx0XHRcdFx0cHJpdmF0ZSBoZXJtZXNBcGk6IEhlcm1lc0FwaSkgeyAvLyBIZXJtZXNBcGkgaW5pdGlhbGl6YXRpb25cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5oZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIuc3RhcnQoKTtcblxuXHRcdHRoaXMuY2hlY2tOdWxsQ29tbWFuZChjb21tYW5kQnVzLCBoYW5kbGVycywgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKTtcblx0XHR0aGlzLmNoZWNrQ29tbWFuZEhhbmRsZXJJc0NvbGxlY3Rpb24oaGFuZGxlcnMpO1xuXG5cdFx0aWYgKGRlZmluZWRBZ2dyZWdhdGUpIHtcblx0XHRcdGRlZmluZWRBZ2dyZWdhdGUuZm9yRWFjaCgoZGVmOiBBZ2dyZWdhdGVEZWZpbml0aW9uPEksIEE+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgZmFjdG9yeSA9IGluamVjdG9yLmdldChkZWYuZmFjdG9yeSksXG5cdFx0XHRcdFx0cmVwb3NpdG9yeSA9IGluamVjdG9yLmdldChkZWYucmVwb3NpdG9yeSk7XG5cblx0XHRcdFx0YWdncmVnYXRlRmFjdG9yeUFyY2hpdmUuYWRkKGRlZi5rZXksIGZhY3RvcnkpO1xuXHRcdFx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZS5hZGQoZGVmLmtleSwgcmVwb3NpdG9yeSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKSB7XG5cblx0XHRcdGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4pID0+IHtcblx0XHRcdFx0Y29tbWFuZEJ1c1xuXHRcdFx0XHRcdC5vZkNyZWF0ZUFnZ3JlZ2F0ZUhhbmRsZXIoaGFuZGxlcilcblx0XHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IEMpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChoYW5kbGVycykge1xuXG5cdFx0XHRoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4pID0+IHtcblx0XHRcdFx0Y29tbWFuZEJ1c1xuXHRcdFx0XHRcdC5vZkNvbW1hbmRIYW5kbGVyKGhhbmRsZXIpXG5cdFx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnRIYW5kbGVycykge1xuXHRcdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IEUpID0+IHtcblxuXHRcdFx0XHRcdGV2ZW50SGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVyPEksIEU+KSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZShldmVudCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdFx0dGhpcy5oZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIuc3RvcCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja051bGxDb21tYW5kKGNvbW1hbmRCdXM6IENvbW1hbmRCdXMsIGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+PiwgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+KTogdm9pZCB7XG5cdFx0Y29tbWFuZEJ1c1xuXHRcdFx0Lm9mTnVsbEhhbmRsZXIoY29tbWFuZEhhbmRsZXJzLCBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQykgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBDb21tYW5kICR7Y29tbWFuZC50b1N0cmluZygpfSB3YXMgbm90IGludGVyY2VwdGVkIGJ5IGFueSBDb21tYW5kSGFuZGxlci5gKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NvbW1hbmRIYW5kbGVySXNDb2xsZWN0aW9uKGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+Pik6IHZvaWQge1xuXHRcdGlmIChjb21tYW5kSGFuZGxlcnMgJiYgIUFycmF5LmlzQXJyYXkoY29tbWFuZEhhbmRsZXJzKSkge1xuXHRcdFx0Y29uc29sZS53YXJuKGBZb3UgbWlnaHQgcHJvdmlkZWQgY29tbWFuZEhhbmRsZXIgd2l0aG91dCBzcGVjaWZ5aW5nIFwibXVsdGk6IHRydWVcIi5gKTtcblx0XHR9XG5cdH1cblxufVxuIl19