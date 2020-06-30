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
import { domainEventHandlerFactory, multiDomainEventHandlerFactory } from '../domain/event/handler/domain-event-handler-impl';
import { DOMAIN_EVENT_HANDLERS } from '../domain/event/handler/domain-event-handlers';
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
export class HermesBaseModule extends Reactive {
    /**
     * @param {?} eventHandlers
     * @param {?} aggregateCommandHandlers
     * @param {?} commandHandlers
     * @param {?} definedAggregate
     * @param {?} injector
     * @param {?} aggregateFactoryArchive
     * @param {?} aggregateRepositoryArchive
     * @param {?} commandBus
     * @param {?} domainEventBus
     * @param {?} hermesLoggersInitializer
     * @param {?} hermesApi
     */
    constructor(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        super();
        this.hermesLoggersInitializer = hermesLoggersInitializer;
        this.hermesApi = hermesApi;
        this.hermesLoggersInitializer.start();
        this.checkNullCommand(commandBus, commandHandlers, aggregateCommandHandlers);
        this.checkCommandHandlerIsCollection(commandHandlers);
        this.checkDomainEventHandlerIsCollection(eventHandlers);
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
        if (commandHandlers) {
            commandHandlers.forEach((/**
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
            eventHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                domainEventBus
                    .ofEventHandler(handler)
                    .pipe(this.takeUntil())
                    .subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
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
    /**
     * @private
     * @param {?} eventHandlers
     * @return {?}
     */
    checkDomainEventHandlerIsCollection(eventHandlers) {
        if (eventHandlers && !Array.isArray(eventHandlers)) {
            console.warn(`You might provided eventHandler without specifying "multi: true".`);
        }
    }
}
/** @nocollapse */
HermesBaseModule.ctorParameters = () => [
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
    HermesBaseModule.prototype.hermesLoggersInitializer;
    /**
     * @type {?}
     * @private
     */
    HermesBaseModule.prototype.hermesApi;
}
export class HermesModule extends HermesBaseModule {
    /**
     * @param {?} eventHandlers
     * @param {?} aggregateCommandHandlers
     * @param {?} commandHandlers
     * @param {?} definedAggregate
     * @param {?} injector
     * @param {?} aggregateFactoryArchive
     * @param {?} aggregateRepositoryArchive
     * @param {?} commandBus
     * @param {?} domainEventBus
     * @param {?} hermesLoggersInitializer
     * @param {?} hermesApi
     */
    constructor(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        super(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi);
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
    static defineAggregate(aggregateKey, factory, repository, createHandler, commandHandlers = [], domainEventHandlers = []) {
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
                ...commandHandlers,
                ...domainEventHandlers
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
     * @template I, E
     * @param {?} domainEventHandlerType
     * @return {?}
     */
    static registerDomainEventHandler(domainEventHandlerType) {
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
    }
    /**
     * @template I, E
     * @param {?} domainEventHandlerType
     * @return {?}
     */
    static registerMultiDomainEventHandler(domainEventHandlerType) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi1hcGkvaGVybWVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBYSxRQUFRLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0vQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUUxRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFLeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUkxQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMv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QUUsb0NBQW9DO2dCQUNoRCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUU7b0JBQ0wsd0JBQXdCO29CQUN4Qix1QkFBdUI7b0JBQ3ZCLDBCQUEwQjtvQkFDMUIsYUFBYTtvQkFDYixvQkFBb0I7aUJBQ3BCO2FBQ0Q7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7O1lBbkpELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjtnQkFDRCxTQUFTLEVBQUUsU0FBUzthQUNwQjs7OztZQStGc0UsS0FBSyx1QkFBOUQsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7WUFDK0IsS0FBSyx1QkFBckYsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQ0FBaUM7WUFDRSxLQUFLLHVCQUEzRCxRQUFRLFlBQUksTUFBTSxTQUFDLGdCQUFnQjtZQUM0QixLQUFLLHVCQUFwRSxRQUFRLFlBQUksTUFBTSxTQUFDLHdCQUF3QjtZQTlUL0IsUUFBUTtZQXVDaEIsdUJBQXVCO1lBQUUsMEJBQTBCO1lBaENuRCxVQUFVO1lBT1YsY0FBYztZQW1CZCx3QkFBd0I7WUFUeEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0b3IsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBQcm92aWRlciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8qKlxuICogQ29tbWFuZFxuICovXG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IENvbW1hbmRCdXMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmJ1cyc7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgQ29tbWFuZFN0cmVhbSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuc3RyZWFtJztcbmltcG9ydCB7IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvZmlsdGVyZWQtY29tbWFuZC1zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS1zdG9yZS5yZWdpc3Rlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmJ1cyc7XG5pbXBvcnQgeyBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdG9yZSB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RvcmUnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0cmVhbSc7XG4vKipcbiAqIEFQUFxuICovXG5pbXBvcnQgeyBIZXJtZXNNb2R1bGVDb25maWcgfSBmcm9tICcuL2hlcm1lcy1tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIEVWRU5UX0xPR0dFUl9FTkFCTEVEIH0gZnJvbSAnLi4vZG9tYWluL2hlcm1lcy10b2tlbnMnO1xuaW1wb3J0IHsgSGVybWVzQXBpIH0gZnJvbSAnLi8vaGVybWVzLWFwaSc7XG4vKipcbiAqIEluZnJhc3RydWN0dXJlXG4gKi9cbmltcG9ydCB7IENvbnNvbGVDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvY29uc29sZS5jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBOb29wQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9jb21tYW5kL25vb3AuY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgQ29uc29sZUV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L2NvbnNvbGUuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BFdmVudExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9ldmVudC9ub29wLmV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICcuLi9jb21tb24vcmFuZG9tLXN0cmluZy5nZW5lcmF0b3InO1xuaW1wb3J0IHsgSGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyIH0gZnJvbSAnLi9oZXJtZXMubG9nZ2Vycy5pbml0aWFsaXplcic7XG5pbXBvcnQge1xuXHRjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3RvcnksXG5cdENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbFxufSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvY3JlYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQ1JFQVRFX0FHR1JFR0FURV9DT01NQU5EX0hBTkRMRVJTIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2NyZWF0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlcnMtdG9rZW4nO1xuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsIEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2RlZmluZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbiB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbmZpZy9hZ2dyZWdhdGUtZGVmaW5pdGlvbi50b2tlbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVEZWZpbml0aW9uIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2FnZ3JlZ2F0ZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvY3JlYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEhlcm1lc0RvbWFpbk1vZHVsZSB9IGZyb20gJy4vaGVybWVzLmRvbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVycyc7XG5pbXBvcnQgeyBjb21tYW5kSGFuZGxlckZhY3RvcnksIENvbW1hbmRIYW5kbGVySW1wbCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQuaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi9jb21tb24vcmVhY3RpdmUnO1xuaW1wb3J0IHtcblx0ZG9tYWluRXZlbnRIYW5kbGVyRmFjdG9yeSxcblx0RG9tYWluRXZlbnRIYW5kbGVySW1wbCxcblx0bXVsdGlEb21haW5FdmVudEhhbmRsZXJGYWN0b3J5XG59IGZyb20gJy4uL2RvbWFpbi9ldmVudC9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2hhbmRsZXIvZG9tYWluLWV2ZW50LWhhbmRsZXJzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9oYW5kbGVyL2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IE11bHRpRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2hhbmRsZXIvbXVsdGktZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuXG5cbmNvbnN0IGhlcm1lc1Byb3ZpZGVycyA9IFtcblx0UmFuZG9tU3RyaW5nR2VuZXJhdG9yLFxuXHR7IHByb3ZpZGU6IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNLCB1c2VFeGlzdGluZzogQ29tbWFuZFN0cmVhbSB9LFxuXHRDb21tYW5kQnVzLFxuXHRDb21tYW5kU3RyZWFtLFxuXHRDb21tYW5kRGlzcGF0Y2hlcixcblx0QWdncmVnYXRlU3RvcmVSZWdpc3RlcixcblxuXHREb21haW5FdmVudEJ1cyxcblx0RG9tYWluRXZlbnRTdHJlYW0sXG5cdERvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHREb21haW5FdmVudFN0b3JlLFxuXG5cdEhlcm1lc0FwaVxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHR7IHByb3ZpZGU6IEVWRU5UX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogdHJ1ZSB9LFxuXHR7IHByb3ZpZGU6IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiB0cnVlIH0sXG5cdHsgcHJvdmlkZTogQ29tbWFuZExvZ2dlciwgdXNlRmFjdG9yeTogY29tbWFuZExvZ2dlckZhY3RvcnksIGRlcHM6IFtDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBDb25zb2xlQ29tbWFuZExvZ2dlciwgTm9vcENvbW1hbmRMb2dnZXJdIH0sXG5cdHsgcHJvdmlkZTogRG9tYWluRXZlbnRMb2dnZXIsIHVzZUZhY3Rvcnk6IGV2ZW50TG9nZ2VyRmFjdG9yeSwgZGVwczogW0VWRU5UX0xPR0dFUl9FTkFCTEVELCBDb25zb2xlRXZlbnRMb2dnZXIsIE5vb3BFdmVudExvZ2dlcl0gfSxcblx0Q29uc29sZUNvbW1hbmRMb2dnZXIsXG5cdE5vb3BDb21tYW5kTG9nZ2VyLFxuXHROb29wRXZlbnRMb2dnZXIsXG5cdENvbnNvbGVFdmVudExvZ2dlcixcblx0SGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHRBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSxcblx0QWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdC4uLmhlcm1lc1Byb3ZpZGVyc1xuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmRMb2dnZXJGYWN0b3J5KGVuYWJsZWQ6IGJvb2xlYW4sIGNvbnNvbGVDb21tYW5kTG9nZ2VyOiBDb25zb2xlQ29tbWFuZExvZ2dlciwgbm9vcENvbW1hbmRMb2dnZXI6IE5vb3BDb21tYW5kTG9nZ2VyKSB7XG5cblx0aWYgKGVuYWJsZWQpIHtcblx0XHRyZXR1cm4gY29uc29sZUNvbW1hbmRMb2dnZXI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5vb3BDb21tYW5kTG9nZ2VyO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudExvZ2dlckZhY3RvcnkoZW5hYmxlZDogYm9vbGVhbiwgY29uc29sZUV2ZW50TG9nZ2VyOiBDb25zb2xlRXZlbnRMb2dnZXIsIG5vb3BFdmVudExvZ2dlcjogTm9vcEV2ZW50TG9nZ2VyKSB7XG5cblx0aWYgKGVuYWJsZWQpIHtcblx0XHRyZXR1cm4gY29uc29sZUV2ZW50TG9nZ2VyO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBub29wRXZlbnRMb2dnZXI7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEhlcm1lc0Jhc2VNb2R1bGU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4gZXh0ZW5kcyBSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChET01BSU5fRVZFTlRfSEFORExFUlMpIGV2ZW50SGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KENSRUFURV9BR0dSRUdBVEVfQ09NTUFORF9IQU5ETEVSUykgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KENPTU1BTkRfSEFORExFUlMpIGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChhZ2dyZWdhdGVEZWZpbml0aW9uVG9rZW4pIGRlZmluZWRBZ2dyZWdhdGU6IEFycmF5PEFnZ3JlZ2F0ZURlZmluaXRpb248SSwgQT4+LFxuXHRcdFx0XHRpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdGFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlOiBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTxJLCBBPixcblx0XHRcdFx0YWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+LFxuXHRcdFx0XHRjb21tYW5kQnVzOiBDb21tYW5kQnVzLFxuXHRcdFx0XHRkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyOiBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIsXG5cdFx0XHRcdHByaXZhdGUgaGVybWVzQXBpOiBIZXJtZXNBcGkpIHsgLy8gSGVybWVzQXBpIGluaXRpYWxpemF0aW9uXG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLnN0YXJ0KCk7XG5cblx0XHR0aGlzLmNoZWNrTnVsbENvbW1hbmQoY29tbWFuZEJ1cywgY29tbWFuZEhhbmRsZXJzLCBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMpO1xuXHRcdHRoaXMuY2hlY2tDb21tYW5kSGFuZGxlcklzQ29sbGVjdGlvbihjb21tYW5kSGFuZGxlcnMpO1xuXHRcdHRoaXMuY2hlY2tEb21haW5FdmVudEhhbmRsZXJJc0NvbGxlY3Rpb24oZXZlbnRIYW5kbGVycyk7XG5cblx0XHRpZiAoZGVmaW5lZEFnZ3JlZ2F0ZSkge1xuXHRcdFx0ZGVmaW5lZEFnZ3JlZ2F0ZS5mb3JFYWNoKChkZWY6IEFnZ3JlZ2F0ZURlZmluaXRpb248SSwgQT4pID0+IHtcblxuXHRcdFx0XHRjb25zdCBmYWN0b3J5ID0gaW5qZWN0b3IuZ2V0KGRlZi5mYWN0b3J5KSxcblx0XHRcdFx0XHRyZXBvc2l0b3J5ID0gaW5qZWN0b3IuZ2V0KGRlZi5yZXBvc2l0b3J5KTtcblxuXHRcdFx0XHRhZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZS5hZGQoZGVmLmtleSwgZmFjdG9yeSk7XG5cdFx0XHRcdGFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLmFkZChkZWYua2V5LCByZXBvc2l0b3J5KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMpIHtcblxuXHRcdFx0YWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPikgPT4ge1xuXHRcdFx0XHRjb21tYW5kQnVzXG5cdFx0XHRcdFx0Lm9mQ3JlYXRlQWdncmVnYXRlSGFuZGxlcihoYW5kbGVyKVxuXHRcdFx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQykgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbW1hbmRIYW5kbGVycykge1xuXHRcdFx0Y29tbWFuZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPikgPT4ge1xuXHRcdFx0XHRjb21tYW5kQnVzXG5cdFx0XHRcdFx0Lm9mQ29tbWFuZEhhbmRsZXIoaGFuZGxlcilcblx0XHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IEMpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChldmVudEhhbmRsZXJzKSB7XG5cblx0XHRcdGV2ZW50SGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPikgPT4ge1xuXHRcdFx0XHRkb21haW5FdmVudEJ1c1xuXHRcdFx0XHRcdC5vZkV2ZW50SGFuZGxlcihoYW5kbGVyKVxuXHRcdFx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IEUpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGRvbWFpbkV2ZW50QnVzXG5cdFx0XHQvLyBcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQvLyBcdC5zdWJzY3JpYmUoKGV2ZW50OiBFKSA9PiB7XG5cdFx0XHQvL1xuXHRcdFx0Ly8gXHRcdGV2ZW50SGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPikgPT4ge1xuXHRcdFx0Ly8gXHRcdFx0aGFuZGxlci5oYW5kbGVFdmVudChldmVudCk7XG5cdFx0XHQvLyBcdFx0fSk7XG5cdFx0XHQvLyBcdH0pO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdFx0dGhpcy5oZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIuc3RvcCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja051bGxDb21tYW5kKGNvbW1hbmRCdXM6IENvbW1hbmRCdXMsIGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+PiwgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+KTogdm9pZCB7XG5cdFx0Y29tbWFuZEJ1c1xuXHRcdFx0Lm9mTnVsbEhhbmRsZXIoY29tbWFuZEhhbmRsZXJzLCBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQykgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBDb21tYW5kICR7Y29tbWFuZC50b1N0cmluZygpfSB3YXMgbm90IGludGVyY2VwdGVkIGJ5IGFueSBDb21tYW5kSGFuZGxlci5gKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NvbW1hbmRIYW5kbGVySXNDb2xsZWN0aW9uKGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+Pik6IHZvaWQge1xuXHRcdGlmIChjb21tYW5kSGFuZGxlcnMgJiYgIUFycmF5LmlzQXJyYXkoY29tbWFuZEhhbmRsZXJzKSkge1xuXHRcdFx0Y29uc29sZS53YXJuKGBZb3UgbWlnaHQgcHJvdmlkZWQgY29tbWFuZEhhbmRsZXIgd2l0aG91dCBzcGVjaWZ5aW5nIFwibXVsdGk6IHRydWVcIi5gKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRG9tYWluRXZlbnRIYW5kbGVySXNDb2xsZWN0aW9uKGV2ZW50SGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4+KTogdm9pZCB7XG5cdFx0aWYgKGV2ZW50SGFuZGxlcnMgJiYgIUFycmF5LmlzQXJyYXkoZXZlbnRIYW5kbGVycykpIHtcblx0XHRcdGNvbnNvbGUud2FybihgWW91IG1pZ2h0IHByb3ZpZGVkIGV2ZW50SGFuZGxlciB3aXRob3V0IHNwZWNpZnlpbmcgXCJtdWx0aTogdHJ1ZVwiLmApO1xuXHRcdH1cblx0fVxuXG59XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBwcm92aWRlcnNcbn0pXG5leHBvcnQgY2xhc3MgSGVybWVzTW9kdWxlIGV4dGVuZHMgSGVybWVzQmFzZU1vZHVsZTxhbnksIGFueSwgYW55LCBhbnk+IHtcblxuXHRzdGF0aWMgZGVmaW5lQWdncmVnYXRlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPihhZ2dyZWdhdGVLZXk6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBmYWN0b3J5OiBUeXBlPEFnZ3JlZ2F0ZUZhY3Rvcnk8SSwgQT4+LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHJlcG9zaXRvcnk6IFR5cGU8QWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPj4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgY3JlYXRlSGFuZGxlcjogVHlwZTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxBLCBDPj4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgY29tbWFuZEhhbmRsZXJzOiBBcnJheTxQcm92aWRlcj4gPSBbXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkb21haW5FdmVudEhhbmRsZXJzOiBBcnJheTxQcm92aWRlcj4gPSBbXSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8YW55PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBIZXJtZXNEb21haW5Nb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFt7XG5cdFx0XHRcdHByb3ZpZGU6IGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbixcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdHVzZVZhbHVlOiB7XG5cdFx0XHRcdFx0a2V5OiBhZ2dyZWdhdGVLZXksXG5cdFx0XHRcdFx0ZmFjdG9yeTogZmFjdG9yeSxcblx0XHRcdFx0XHRyZXBvc2l0b3J5OiByZXBvc2l0b3J5XG5cdFx0XHRcdH1cblx0XHRcdH0sIHtcblx0XHRcdFx0cHJvdmlkZTogYWdncmVnYXRlS2V5LFxuXHRcdFx0XHR1c2VWYWx1ZTogYWdncmVnYXRlS2V5XG5cdFx0XHR9LFxuXHRcdFx0XHRmYWN0b3J5LFxuXHRcdFx0XHRyZXBvc2l0b3J5LFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDcmVhdGVDb21tYW5kSGFuZGxlcihjcmVhdGVIYW5kbGVyLCBhZ2dyZWdhdGVLZXkpLFxuXHRcdFx0XHQuLi5jb21tYW5kSGFuZGxlcnMsXG5cdFx0XHRcdC4uLmRvbWFpbkV2ZW50SGFuZGxlcnNcblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBIZXJtZXNNb2R1bGVDb25maWcgPSB7IGxvZ2dlcnM6IGZhbHNlIH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEhlcm1lc01vZHVsZT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogSGVybWVzTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBwcm92aWRlcnNcblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyQ29tbWFuZEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ+KFxuXHRcdGNvbW1hbmRIYW5kbGVyVHlwZTogVHlwZTxDb21tYW5kSGFuZGxlcjxBLCBDPj4sXG5cdFx0YWdncmVnYXRlTmFtZTogc3RyaW5nKTogQXJyYXk8UHJvdmlkZXI+IHtcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHByb3ZpZGU6IGNvbW1hbmRIYW5kbGVyVHlwZSxcblx0XHRcdFx0dXNlQ2xhc3M6IGNvbW1hbmRIYW5kbGVyVHlwZVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdFx0XHR1c2VGYWN0b3J5OiBjb21tYW5kSGFuZGxlckZhY3RvcnksXG5cdFx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFx0Y29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHRcdEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLFxuXHRcdFx0XHRcdGFnZ3JlZ2F0ZU5hbWVcblx0XHRcdFx0XVxuXHRcdFx0fV07XG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KFxuXHRcdGRvbWFpbkV2ZW50SGFuZGxlclR5cGU6IFR5cGU8RG9tYWluRXZlbnRIYW5kbGVyPEksIEU+PlxuXHQpOiBBcnJheTxQcm92aWRlcj4ge1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0cHJvdmlkZTogZG9tYWluRXZlbnRIYW5kbGVyVHlwZSxcblx0XHRcdFx0dXNlQ2xhc3M6IGRvbWFpbkV2ZW50SGFuZGxlclR5cGVcblx0XHRcdH0sIHtcblx0XHRcdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdFx0XHR1c2VGYWN0b3J5OiBkb21haW5FdmVudEhhbmRsZXJGYWN0b3J5LFxuXHRcdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHRcdFx0ZGVwczogW1xuXHRcdFx0XHRcdGRvbWFpbkV2ZW50SGFuZGxlclR5cGVcblx0XHRcdFx0XVxuXHRcdFx0fV07XG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJNdWx0aURvbWFpbkV2ZW50SGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oXG5cdFx0ZG9tYWluRXZlbnRIYW5kbGVyVHlwZTogVHlwZTxNdWx0aURvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPj5cblx0KTogQXJyYXk8UHJvdmlkZXI+IHtcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHByb3ZpZGU6IGRvbWFpbkV2ZW50SGFuZGxlclR5cGUsXG5cdFx0XHRcdHVzZUNsYXNzOiBkb21haW5FdmVudEhhbmRsZXJUeXBlXG5cdFx0XHR9LCB7XG5cdFx0XHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHRcdFx0dXNlRmFjdG9yeTogbXVsdGlEb21haW5FdmVudEhhbmRsZXJGYWN0b3J5LFxuXHRcdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHRcdFx0ZGVwczogW1xuXHRcdFx0XHRcdGRvbWFpbkV2ZW50SGFuZGxlclR5cGVcblx0XHRcdFx0XVxuXHRcdFx0fV07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERPTUFJTl9FVkVOVF9IQU5ETEVSUykgZXZlbnRIYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVySW1wbDxhbnksIGFueT4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KENSRUFURV9BR0dSRUdBVEVfQ09NTUFORF9IQU5ETEVSUykgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8YW55LCBhbnksIGFueT4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KENPTU1BTkRfSEFORExFUlMpIGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPGFueSwgYW55LCBhbnk+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChhZ2dyZWdhdGVEZWZpbml0aW9uVG9rZW4pIGRlZmluZWRBZ2dyZWdhdGU6IEFycmF5PEFnZ3JlZ2F0ZURlZmluaXRpb248YW55LCBhbnk+Pixcblx0XHRcdFx0aW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRhZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTogQWdncmVnYXRlRmFjdG9yeUFyY2hpdmU8YW55LCBhbnk+LFxuXHRcdFx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU8YW55LCBhbnk+LFxuXHRcdFx0XHRjb21tYW5kQnVzOiBDb21tYW5kQnVzLFxuXHRcdFx0XHRkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdGhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcjogSGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHRcdFx0XHRoZXJtZXNBcGk6IEhlcm1lc0FwaSkgeyAvLyBIZXJtZXNBcGkgaW5pdGlhbGl6YXRpb25cblx0XHRzdXBlcihcblx0XHRcdGV2ZW50SGFuZGxlcnMsXG5cdFx0XHRhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMsXG5cdFx0XHRjb21tYW5kSGFuZGxlcnMsXG5cdFx0XHRkZWZpbmVkQWdncmVnYXRlLFxuXHRcdFx0aW5qZWN0b3IsXG5cdFx0XHRhZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSxcblx0XHRcdGFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLFxuXHRcdFx0Y29tbWFuZEJ1cyxcblx0XHRcdGRvbWFpbkV2ZW50QnVzLFxuXHRcdFx0aGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHRcdFx0aGVybWVzQXBpXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyQ3JlYXRlQ29tbWFuZEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ+KFxuXHRcdGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZTogVHlwZTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxBLCBDPj4sXG5cdFx0YWdncmVnYXRlTmFtZTogc3RyaW5nKTogQXJyYXk8UHJvdmlkZXI+IHtcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHByb3ZpZGU6IGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZSxcblx0XHRcdFx0dXNlQ2xhc3M6IGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMsXG5cdFx0XHRcdHVzZUZhY3Rvcnk6IGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyRmFjdG9yeSxcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRjcmVhdGVDb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdFx0QWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsXG5cdFx0XHRcdFx0QWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdFx0XHRcdFx0YWdncmVnYXRlTmFtZSxcblx0XHRcdFx0XHREb21haW5FdmVudFB1Ymxpc2hlclxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0XTtcblx0fVxuXG59XG4iXX0=