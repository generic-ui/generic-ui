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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvYXBpL2hlcm1lcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQWEsUUFBUSxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFMUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBS3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFJMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDL0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDekYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFDTixvQ0FBb0MsRUFFcEMsTUFBTSwwRUFBMEUsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV0RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUkvRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQXNCLE1BQU0sZ0RBQWdELENBQUM7QUFHM0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTix5QkFBeUIsRUFFekIsOEJBQThCLEVBQzlCLE1BQU0sbURBQW1ELENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7O01BS2hGLGVBQWUsR0FBRztJQUN2QixxQkFBcUI7SUFDckIsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRTtJQUNoRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFFdEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBRWhCLFNBQVM7Q0FDVDs7TUFFSyxTQUFTLEdBQUc7SUFDakIsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUNqRCxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ25ELEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLENBQUMsRUFBRTtJQUNySSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLEVBQUU7SUFDakksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLEdBQUcsZUFBZTtDQUNsQjs7Ozs7OztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxPQUFnQixFQUFFLG9CQUEwQyxFQUFFLGlCQUFvQztJQUV0SSxJQUFJLE9BQU8sRUFBRTtRQUNaLE9BQU8sb0JBQW9CLENBQUM7S0FDNUI7U0FBTTtRQUNOLE9BQU8saUJBQWlCLENBQUM7S0FDekI7QUFDRixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLE9BQWdCLEVBQUUsa0JBQXNDLEVBQUUsZUFBZ0M7SUFFNUgsSUFBSSxPQUFPLEVBQUU7UUFDWixPQUFPLGtCQUFrQixDQUFDO0tBQzFCO1NBQU07UUFDTixPQUFPLGVBQWUsQ0FBQztLQUN2QjtBQUNGLENBQUM7Ozs7QUFFRCxNQUFNLE9BQU8sZ0JBQW9ILFNBQVEsUUFBUTs7Ozs7Ozs7Ozs7Ozs7SUFFaEosWUFBdUQsYUFBa0QsRUFDL0Msd0JBQTJFLEVBQzVGLGVBQW1ELEVBQzNDLGdCQUFrRCxFQUNoRyxRQUFrQixFQUNsQix1QkFBc0QsRUFDdEQsMEJBQTRELEVBQzVELFVBQXNCLEVBQ3RCLGNBQThCLEVBQ3RCLHdCQUFrRCxFQUNsRCxTQUFvQjtRQUM5QixLQUFLLEVBQUUsQ0FBQztRQUZFLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUc5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsK0JBQStCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXhELElBQUksZ0JBQWdCLEVBQUU7WUFDckIsZ0JBQWdCLENBQUMsT0FBTzs7OztZQUFDLENBQUMsR0FBOEIsRUFBRSxFQUFFOztzQkFFckQsT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7c0JBQ3hDLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBRTFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNyRCxDQUFDLEVBQUMsQ0FBQztTQUNIO1FBRUQsSUFBSSx3QkFBd0IsRUFBRTtZQUU3Qix3QkFBd0IsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxPQUFtRCxFQUFFLEVBQUU7Z0JBQ3hGLFVBQVU7cUJBQ1Isd0JBQXdCLENBQUMsT0FBTyxDQUFDO3FCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3FCQUN0QixTQUFTOzs7O2dCQUFDLENBQUMsT0FBVSxFQUFFLEVBQUU7b0JBQ3pCLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7U0FDSDtRQUVELElBQUksZUFBZSxFQUFFO1lBQ3BCLGVBQWUsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxPQUFvQyxFQUFFLEVBQUU7Z0JBQ2hFLFVBQVU7cUJBQ1IsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO3FCQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3FCQUN0QixTQUFTOzs7O2dCQUFDLENBQUMsT0FBVSxFQUFFLEVBQUU7b0JBQ3pCLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7U0FDSDtRQUVELElBQUksYUFBYSxFQUFFO1lBRWxCLGFBQWEsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxPQUFxQyxFQUFFLEVBQUU7Z0JBQy9ELGNBQWM7cUJBQ1osY0FBYyxDQUFDLE9BQU8sQ0FBQztxQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztxQkFDdEIsU0FBUzs7OztnQkFBQyxDQUFDLEtBQVEsRUFBRSxFQUFFO29CQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1lBRUgsaUJBQWlCO1lBQ2pCLDJCQUEyQjtZQUMzQiw4QkFBOEI7WUFDOUIsRUFBRTtZQUNGLHVFQUF1RTtZQUN2RSxpQ0FBaUM7WUFDakMsUUFBUTtZQUNSLE9BQU87U0FDUDtJQUNGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7OztJQUVPLGdCQUFnQixDQUFDLFVBQXNCLEVBQUUsZUFBbUQsRUFBRSx3QkFBMkU7UUFDaEwsVUFBVTthQUNSLGFBQWEsQ0FBQyxlQUFlLEVBQUUsd0JBQXdCLENBQUM7YUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsQ0FBQyxPQUFVLEVBQUUsRUFBRTtZQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsT0FBTyxDQUFDLFFBQVEsRUFBRSw2Q0FBNkMsQ0FBQyxDQUFDO1FBQzNGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sK0JBQStCLENBQUMsZUFBbUQ7UUFDMUYsSUFBSSxlQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3ZELE9BQU8sQ0FBQyxJQUFJLENBQUMscUVBQXFFLENBQUMsQ0FBQztTQUNwRjtJQUNGLENBQUM7Ozs7OztJQUVPLG1DQUFtQyxDQUFDLGFBQWtEO1FBQzdGLElBQUksYUFBYSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNuRCxPQUFPLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxDQUFDLENBQUM7U0FDbEY7SUFDRixDQUFDOzs7O1lBbkdxRSxLQUFLLHVCQUE5RCxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjtZQUMrQixLQUFLLHVCQUFyRixRQUFRLFlBQUksTUFBTSxTQUFDLGlDQUFpQztZQUNFLEtBQUssdUJBQTNELFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO1lBQzRCLEtBQUssdUJBQXBFLFFBQVEsWUFBSSxNQUFNLFNBQUMsd0JBQXdCO1lBbkgvQixRQUFRO1lBdUNoQix1QkFBdUI7WUFBRSwwQkFBMEI7WUFoQ25ELFVBQVU7WUFPVixjQUFjO1lBbUJkLHdCQUF3QjtZQVR4QixTQUFTOzs7Ozs7O0lBaUdkLG9EQUEwRDs7Ozs7SUFDMUQscUNBQTRCOztBQW1HaEMsTUFBTSxPQUFPLFlBQWEsU0FBUSxnQkFBb0M7Ozs7Ozs7Ozs7Ozs7O0lBOEZyRSxZQUF1RCxhQUFzRCxFQUNuRCx3QkFBaUYsRUFDbEcsZUFBeUQsRUFDakQsZ0JBQXNELEVBQ3BHLFFBQWtCLEVBQ2xCLHVCQUEwRCxFQUMxRCwwQkFBZ0UsRUFDaEUsVUFBc0IsRUFDdEIsY0FBOEIsRUFDOUIsd0JBQWtELEVBQ2xELFNBQW9CO1FBQ3RCLEtBQUssQ0FDSixhQUFhLEVBQ2Isd0JBQXdCLEVBQ3hCLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLHVCQUF1QixFQUN2QiwwQkFBMEIsRUFDMUIsVUFBVSxFQUNWLGNBQWMsRUFDZCx3QkFBd0IsRUFDeEIsU0FBUyxDQUNULENBQUM7SUFDSCxDQUFDOzs7Ozs7Ozs7OztJQXBIRCxNQUFNLENBQUMsZUFBZSxDQUEwRSxZQUFvQixFQUM1RixPQUFxQyxFQUNyQyxVQUEyQyxFQUMzQyxhQUF3RCxFQUN4RCxrQkFBbUMsRUFBRSxFQUNyQyxzQkFBdUMsRUFBRTtRQUNoRSxPQUFPO1lBQ04sUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEVBQUUsd0JBQXdCO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtvQkFDWCxRQUFRLEVBQUU7d0JBQ1QsR0FBRyxFQUFFLFlBQVk7d0JBQ2pCLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixVQUFVLEVBQUUsVUFBVTtxQkFDdEI7aUJBQ0QsRUFBRTtvQkFDRixPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLFlBQVk7aUJBQ3RCO2dCQUNBLE9BQU87Z0JBQ1AsVUFBVTtnQkFDVixHQUFHLFlBQVksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDO2dCQUN6RSxHQUFHLGVBQWU7Z0JBQ2xCLEdBQUcsbUJBQW1CO2FBQ3RCO1NBQ0QsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUE2QixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7UUFDaEUsT0FBTztZQUNOLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxTQUFTO1NBQ3BCLENBQUM7SUFDSCxDQUFDOzs7Ozs7O0lBRUQsTUFBTSxDQUFDLHNCQUFzQixDQUM1QixrQkFBOEMsRUFDOUMsYUFBcUI7UUFFckIsT0FBTztZQUNOO2dCQUNDLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLFFBQVEsRUFBRSxrQkFBa0I7YUFDNUIsRUFBRTtnQkFDRixPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixVQUFVLEVBQUUscUJBQXFCO2dCQUNqQyxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUU7b0JBQ0wsa0JBQWtCO29CQUNsQiwwQkFBMEI7b0JBQzFCLGFBQWE7aUJBQ2I7YUFDRDtTQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsMEJBQTBCLENBQ2hDLHNCQUFzRDtRQUd0RCxPQUFPO1lBQ047Z0JBQ0MsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsUUFBUSxFQUFFLHNCQUFzQjthQUNoQyxFQUFFO2dCQUNGLE9BQU8sRUFBRSxxQkFBcUI7Z0JBQzlCLFVBQVUsRUFBRSx5QkFBeUI7Z0JBQ3JDLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRTtvQkFDTCxzQkFBc0I7aUJBQ3RCO2FBQ0Q7U0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLCtCQUErQixDQUNyQyxzQkFBMkQ7UUFHM0QsT0FBTztZQUNOO2dCQUNDLE9BQU8sRUFBRSxzQkFBc0I7Z0JBQy9CLFFBQVEsRUFBRSxzQkFBc0I7YUFDaEMsRUFBRTtnQkFDRixPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixVQUFVLEVBQUUsOEJBQThCO2dCQUMxQyxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUU7b0JBQ0wsc0JBQXNCO2lCQUN0QjthQUNEO1NBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7O0lBNEJPLE1BQU0sQ0FBQyw0QkFBNEIsQ0FDMUMsd0JBQW1FLEVBQ25FLGFBQXFCO1FBRXJCLE9BQU87WUFDTjtnQkFDQyxPQUFPLEVBQUUsd0JBQXdCO2dCQUNqQyxRQUFRLEVBQUUsd0JBQXdCO2FBQ2xDLEVBQUU7Z0JBQ0YsT0FBTyxFQUFFLGlDQUFpQztnQkFDMUMsVUFBVSxFQUFFLG9DQUFvQztnQkFDaEQsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFO29CQUNMLHdCQUF3QjtvQkFDeEIsdUJBQXVCO29CQUN2QiwwQkFBMEI7b0JBQzFCLGFBQWE7b0JBQ2Isb0JBQW9CO2lCQUNwQjthQUNEO1NBQ0QsQ0FBQztJQUNILENBQUM7OztZQW5KRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFLFNBQVM7YUFDcEI7Ozs7WUErRnNFLEtBQUssdUJBQTlELFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCO1lBQytCLEtBQUssdUJBQXJGLFFBQVEsWUFBSSxNQUFNLFNBQUMsaUNBQWlDO1lBQ0UsS0FBSyx1QkFBM0QsUUFBUSxZQUFJLE1BQU0sU0FBQyxnQkFBZ0I7WUFDNEIsS0FBSyx1QkFBcEUsUUFBUSxZQUFJLE1BQU0sU0FBQyx3QkFBd0I7WUE5VC9CLFFBQVE7WUF1Q2hCLHVCQUF1QjtZQUFFLDBCQUEwQjtZQWhDbkQsVUFBVTtZQU9WLGNBQWM7WUFtQmQsd0JBQXdCO1lBVHhCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdG9yLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT25EZXN0cm95LCBPcHRpb25hbCwgUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vKipcbiAqIENvbW1hbmRcbiAqL1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQnO1xuaW1wb3J0IHsgQ29tbWFuZEJ1cyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuYnVzJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBDb21tYW5kU3RyZWFtIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5zdHJlYW0nO1xuaW1wb3J0IHsgRklMVEVSRURfQ09NTUFORF9TVFJFQU0gfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9maWx0ZXJlZC1jb21tYW5kLXN0cmVhbSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudFN0b3JlIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdG9yZSc7XG5pbXBvcnQgeyBEb21haW5FdmVudFN0cmVhbSB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RyZWFtJztcbi8qKlxuICogQVBQXG4gKi9cbmltcG9ydCB7IEhlcm1lc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vaGVybWVzLW1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgRVZFTlRfTE9HR0VSX0VOQUJMRUQgfSBmcm9tICcuLi9kb21haW4vaGVybWVzLXRva2Vucyc7XG5pbXBvcnQgeyBIZXJtZXNBcGkgfSBmcm9tICcuLy9oZXJtZXMtYXBpJztcbi8qKlxuICogSW5mcmFzdHJ1Y3R1cmVcbiAqL1xuaW1wb3J0IHsgQ29uc29sZUNvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvY29tbWFuZC9jb25zb2xlLmNvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvbm9vcC5jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBDb25zb2xlRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvZXZlbnQvY29uc29sZS5ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgTm9vcEV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L25vb3AuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJy4uLy4uL2NvbW1vbi9yYW5kb20tc3RyaW5nLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIgfSBmcm9tICcuL2hlcm1lcy5sb2dnZXJzLmluaXRpYWxpemVyJztcbmltcG9ydCB7XG5cdGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyRmFjdG9yeSxcblx0Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsXG59IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NyZWF0ZS1hZ2dyZWdhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jcmVhdGUtYWdncmVnYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVycy10b2tlbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSwgQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb25maWcvZGVmaW5lJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbiB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbmZpZy9hZ2dyZWdhdGUtZGVmaW5pdGlvbi50b2tlbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVEZWZpbml0aW9uIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2FnZ3JlZ2F0ZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY3JlYXRlLWFnZ3JlZ2F0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBIZXJtZXNEb21haW5Nb2R1bGUgfSBmcm9tICcuL2hlcm1lcy5kb21haW4ubW9kdWxlJztcbmltcG9ydCB7IENPTU1BTkRfSEFORExFUlMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlcnMnO1xuaW1wb3J0IHsgY29tbWFuZEhhbmRsZXJGYWN0b3J5LCBDb21tYW5kSGFuZGxlckltcGwgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvaGFuZGxlci9jb21tYW5kLmhhbmRsZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9yZWFjdGl2ZSc7XG5pbXBvcnQge1xuXHRkb21haW5FdmVudEhhbmRsZXJGYWN0b3J5LFxuXHREb21haW5FdmVudEhhbmRsZXJJbXBsLFxuXHRtdWx0aURvbWFpbkV2ZW50SGFuZGxlckZhY3Rvcnlcbn0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2hhbmRsZXIvZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBET01BSU5fRVZFTlRfSEFORExFUlMgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvaGFuZGxlci9kb21haW4tZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2hhbmRsZXIvZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuaW1wb3J0IHsgTXVsdGlEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvaGFuZGxlci9tdWx0aS1kb21haW4tZXZlbnQuaGFuZGxlcic7XG5cblxuY29uc3QgaGVybWVzUHJvdmlkZXJzID0gW1xuXHRSYW5kb21TdHJpbmdHZW5lcmF0b3IsXG5cdHsgcHJvdmlkZTogRklMVEVSRURfQ09NTUFORF9TVFJFQU0sIHVzZUV4aXN0aW5nOiBDb21tYW5kU3RyZWFtIH0sXG5cdENvbW1hbmRCdXMsXG5cdENvbW1hbmRTdHJlYW0sXG5cdENvbW1hbmREaXNwYXRjaGVyLFxuXHRBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLFxuXG5cdERvbWFpbkV2ZW50QnVzLFxuXHREb21haW5FdmVudFN0cmVhbSxcblx0RG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cdERvbWFpbkV2ZW50U3RvcmUsXG5cblx0SGVybWVzQXBpXG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdHsgcHJvdmlkZTogRVZFTlRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiB0cnVlIH0sXG5cdHsgcHJvdmlkZTogQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHRydWUgfSxcblx0eyBwcm92aWRlOiBDb21tYW5kTG9nZ2VyLCB1c2VGYWN0b3J5OiBjb21tYW5kTG9nZ2VyRmFjdG9yeSwgZGVwczogW0NPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIENvbnNvbGVDb21tYW5kTG9nZ2VyLCBOb29wQ29tbWFuZExvZ2dlcl0gfSxcblx0eyBwcm92aWRlOiBEb21haW5FdmVudExvZ2dlciwgdXNlRmFjdG9yeTogZXZlbnRMb2dnZXJGYWN0b3J5LCBkZXBzOiBbRVZFTlRfTE9HR0VSX0VOQUJMRUQsIENvbnNvbGVFdmVudExvZ2dlciwgTm9vcEV2ZW50TG9nZ2VyXSB9LFxuXHRDb25zb2xlQ29tbWFuZExvZ2dlcixcblx0Tm9vcENvbW1hbmRMb2dnZXIsXG5cdE5vb3BFdmVudExvZ2dlcixcblx0Q29uc29sZUV2ZW50TG9nZ2VyLFxuXHRIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIsXG5cdEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLFxuXHRBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSxcblx0Li4uaGVybWVzUHJvdmlkZXJzXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tbWFuZExvZ2dlckZhY3RvcnkoZW5hYmxlZDogYm9vbGVhbiwgY29uc29sZUNvbW1hbmRMb2dnZXI6IENvbnNvbGVDb21tYW5kTG9nZ2VyLCBub29wQ29tbWFuZExvZ2dlcjogTm9vcENvbW1hbmRMb2dnZXIpIHtcblxuXHRpZiAoZW5hYmxlZCkge1xuXHRcdHJldHVybiBjb25zb2xlQ29tbWFuZExvZ2dlcjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbm9vcENvbW1hbmRMb2dnZXI7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50TG9nZ2VyRmFjdG9yeShlbmFibGVkOiBib29sZWFuLCBjb25zb2xlRXZlbnRMb2dnZXI6IENvbnNvbGVFdmVudExvZ2dlciwgbm9vcEV2ZW50TG9nZ2VyOiBOb29wRXZlbnRMb2dnZXIpIHtcblxuXHRpZiAoZW5hYmxlZCkge1xuXHRcdHJldHVybiBjb25zb2xlRXZlbnRMb2dnZXI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5vb3BFdmVudExvZ2dlcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSGVybWVzQmFzZU1vZHVsZTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZDxJPiwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+PiBleHRlbmRzIFJlYWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERPTUFJTl9FVkVOVF9IQU5ETEVSUykgZXZlbnRIYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPj4sXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3QoQ1JFQVRFX0FHR1JFR0FURV9DT01NQU5EX0hBTkRMRVJTKSBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnM6IEFycmF5PENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4sXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3QoQ09NTUFORF9IQU5ETEVSUykgY29tbWFuZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbikgZGVmaW5lZEFnZ3JlZ2F0ZTogQXJyYXk8QWdncmVnYXRlRGVmaW5pdGlvbjxJLCBBPj4sXG5cdFx0XHRcdGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0YWdncmVnYXRlRmFjdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlPEksIEE+LFxuXHRcdFx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU8SSwgQT4sXG5cdFx0XHRcdGNvbW1hbmRCdXM6IENvbW1hbmRCdXMsXG5cdFx0XHRcdGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBoZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXI6IEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcixcblx0XHRcdFx0cHJpdmF0ZSBoZXJtZXNBcGk6IEhlcm1lc0FwaSkgeyAvLyBIZXJtZXNBcGkgaW5pdGlhbGl6YXRpb25cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5oZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIuc3RhcnQoKTtcblxuXHRcdHRoaXMuY2hlY2tOdWxsQ29tbWFuZChjb21tYW5kQnVzLCBjb21tYW5kSGFuZGxlcnMsIGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycyk7XG5cdFx0dGhpcy5jaGVja0NvbW1hbmRIYW5kbGVySXNDb2xsZWN0aW9uKGNvbW1hbmRIYW5kbGVycyk7XG5cdFx0dGhpcy5jaGVja0RvbWFpbkV2ZW50SGFuZGxlcklzQ29sbGVjdGlvbihldmVudEhhbmRsZXJzKTtcblxuXHRcdGlmIChkZWZpbmVkQWdncmVnYXRlKSB7XG5cdFx0XHRkZWZpbmVkQWdncmVnYXRlLmZvckVhY2goKGRlZjogQWdncmVnYXRlRGVmaW5pdGlvbjxJLCBBPikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGZhY3RvcnkgPSBpbmplY3Rvci5nZXQoZGVmLmZhY3RvcnkpLFxuXHRcdFx0XHRcdHJlcG9zaXRvcnkgPSBpbmplY3Rvci5nZXQoZGVmLnJlcG9zaXRvcnkpO1xuXG5cdFx0XHRcdGFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLmFkZChkZWYua2V5LCBmYWN0b3J5KTtcblx0XHRcdFx0YWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUuYWRkKGRlZi5rZXksIHJlcG9zaXRvcnkpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycykge1xuXG5cdFx0XHRhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+KSA9PiB7XG5cdFx0XHRcdGNvbW1hbmRCdXNcblx0XHRcdFx0XHQub2ZDcmVhdGVBZ2dyZWdhdGVIYW5kbGVyKGhhbmRsZXIpXG5cdFx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoY29tbWFuZEhhbmRsZXJzKSB7XG5cdFx0XHRjb21tYW5kSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+KSA9PiB7XG5cdFx0XHRcdGNvbW1hbmRCdXNcblx0XHRcdFx0XHQub2ZDb21tYW5kSGFuZGxlcihoYW5kbGVyKVxuXHRcdFx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQykgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50SGFuZGxlcnMpIHtcblxuXHRcdFx0ZXZlbnRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+KSA9PiB7XG5cdFx0XHRcdGRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdFx0Lm9mRXZlbnRIYW5kbGVyKGhhbmRsZXIpXG5cdFx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChldmVudDogRSkgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGVFdmVudChldmVudCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gZG9tYWluRXZlbnRCdXNcblx0XHRcdC8vIFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC8vIFx0LnN1YnNjcmliZSgoZXZlbnQ6IEUpID0+IHtcblx0XHRcdC8vXG5cdFx0XHQvLyBcdFx0ZXZlbnRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+KSA9PiB7XG5cdFx0XHQvLyBcdFx0XHRoYW5kbGVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcblx0XHRcdC8vIFx0XHR9KTtcblx0XHRcdC8vIFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLmhlcm1lc0xvZ2dlcnNJbml0aWFsaXplci5zdG9wKCk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTnVsbENvbW1hbmQoY29tbWFuZEJ1czogQ29tbWFuZEJ1cywgY29tbWFuZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+LCBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnM6IEFycmF5PENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4pOiB2b2lkIHtcblx0XHRjb21tYW5kQnVzXG5cdFx0XHQub2ZOdWxsSGFuZGxlcihjb21tYW5kSGFuZGxlcnMsIGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycylcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYENvbW1hbmQgJHtjb21tYW5kLnRvU3RyaW5nKCl9IHdhcyBub3QgaW50ZXJjZXB0ZWQgYnkgYW55IENvbW1hbmRIYW5kbGVyLmApO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ29tbWFuZEhhbmRsZXJJc0NvbGxlY3Rpb24oY29tbWFuZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+KTogdm9pZCB7XG5cdFx0aWYgKGNvbW1hbmRIYW5kbGVycyAmJiAhQXJyYXkuaXNBcnJheShjb21tYW5kSGFuZGxlcnMpKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oYFlvdSBtaWdodCBwcm92aWRlZCBjb21tYW5kSGFuZGxlciB3aXRob3V0IHNwZWNpZnlpbmcgXCJtdWx0aTogdHJ1ZVwiLmApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tEb21haW5FdmVudEhhbmRsZXJJc0NvbGxlY3Rpb24oZXZlbnRIYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPj4pOiB2b2lkIHtcblx0XHRpZiAoZXZlbnRIYW5kbGVycyAmJiAhQXJyYXkuaXNBcnJheShldmVudEhhbmRsZXJzKSkge1xuXHRcdFx0Y29uc29sZS53YXJuKGBZb3UgbWlnaHQgcHJvdmlkZWQgZXZlbnRIYW5kbGVyIHdpdGhvdXQgc3BlY2lmeWluZyBcIm11bHRpOiB0cnVlXCIuYCk7XG5cdFx0fVxuXHR9XG5cbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IHByb3ZpZGVyc1xufSlcbmV4cG9ydCBjbGFzcyBIZXJtZXNNb2R1bGUgZXh0ZW5kcyBIZXJtZXNCYXNlTW9kdWxlPGFueSwgYW55LCBhbnksIGFueT4ge1xuXG5cdHN0YXRpYyBkZWZpbmVBZ2dyZWdhdGU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+KGFnZ3JlZ2F0ZUtleTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGZhY3Rvcnk6IFR5cGU8QWdncmVnYXRlRmFjdG9yeTxJLCBBPj4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgcmVwb3NpdG9yeTogVHlwZTxBZ2dyZWdhdGVSZXBvc2l0b3J5PEksIEE+Pixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBjcmVhdGVIYW5kbGVyOiBUeXBlPENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPEEsIEM+Pixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBjb21tYW5kSGFuZGxlcnM6IEFycmF5PFByb3ZpZGVyPiA9IFtdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRvbWFpbkV2ZW50SGFuZGxlcnM6IEFycmF5PFByb3ZpZGVyPiA9IFtdKTogTW9kdWxlV2l0aFByb3ZpZGVyczxhbnk+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEhlcm1lc0RvbWFpbk1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0cHJvdmlkZTogYWdncmVnYXRlRGVmaW5pdGlvblRva2VuLFxuXHRcdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHRcdFx0dXNlVmFsdWU6IHtcblx0XHRcdFx0XHRrZXk6IGFnZ3JlZ2F0ZUtleSxcblx0XHRcdFx0XHRmYWN0b3J5OiBmYWN0b3J5LFxuXHRcdFx0XHRcdHJlcG9zaXRvcnk6IHJlcG9zaXRvcnlcblx0XHRcdFx0fVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBhZ2dyZWdhdGVLZXksXG5cdFx0XHRcdHVzZVZhbHVlOiBhZ2dyZWdhdGVLZXlcblx0XHRcdH0sXG5cdFx0XHRcdGZhY3RvcnksXG5cdFx0XHRcdHJlcG9zaXRvcnksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNyZWF0ZUNvbW1hbmRIYW5kbGVyKGNyZWF0ZUhhbmRsZXIsIGFnZ3JlZ2F0ZUtleSksXG5cdFx0XHRcdC4uLmNvbW1hbmRIYW5kbGVycyxcblx0XHRcdFx0Li4uZG9tYWluRXZlbnRIYW5kbGVyc1xuXHRcdFx0XVxuXHRcdH07XG5cdH1cblxuXHRzdGF0aWMgd2l0aENvbmZpZyhjb25maWc6IEhlcm1lc01vZHVsZUNvbmZpZyA9IHsgbG9nZ2VyczogZmFsc2UgfSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SGVybWVzTW9kdWxlPiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBIZXJtZXNNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IHByb3ZpZGVyc1xuXHRcdH07XG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJDb21tYW5kSGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZDxJPj4oXG5cdFx0Y29tbWFuZEhhbmRsZXJUeXBlOiBUeXBlPENvbW1hbmRIYW5kbGVyPEEsIEM+Pixcblx0XHRhZ2dyZWdhdGVOYW1lOiBzdHJpbmcpOiBBcnJheTxQcm92aWRlcj4ge1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0cHJvdmlkZTogY29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHR1c2VDbGFzczogY29tbWFuZEhhbmRsZXJUeXBlXG5cdFx0XHR9LCB7XG5cdFx0XHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0XHRcdHVzZUZhY3Rvcnk6IGNvbW1hbmRIYW5kbGVyRmFjdG9yeSxcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRjb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdFx0QWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdFx0XHRcdFx0YWdncmVnYXRlTmFtZVxuXHRcdFx0XHRdXG5cdFx0XHR9XTtcblx0fVxuXG5cdHN0YXRpYyByZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oXG5cdFx0ZG9tYWluRXZlbnRIYW5kbGVyVHlwZTogVHlwZTxEb21haW5FdmVudEhhbmRsZXI8SSwgRT4+XG5cdCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRwcm92aWRlOiBkb21haW5FdmVudEhhbmRsZXJUeXBlLFxuXHRcdFx0XHR1c2VDbGFzczogZG9tYWluRXZlbnRIYW5kbGVyVHlwZVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0XHRcdHVzZUZhY3Rvcnk6IGRvbWFpbkV2ZW50SGFuZGxlckZhY3RvcnksXG5cdFx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFx0ZG9tYWluRXZlbnRIYW5kbGVyVHlwZVxuXHRcdFx0XHRdXG5cdFx0XHR9XTtcblx0fVxuXG5cdHN0YXRpYyByZWdpc3Rlck11bHRpRG9tYWluRXZlbnRIYW5kbGVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+Pihcblx0XHRkb21haW5FdmVudEhhbmRsZXJUeXBlOiBUeXBlPE11bHRpRG9tYWluRXZlbnRIYW5kbGVyPEksIEU+PlxuXHQpOiBBcnJheTxQcm92aWRlcj4ge1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0cHJvdmlkZTogZG9tYWluRXZlbnRIYW5kbGVyVHlwZSxcblx0XHRcdFx0dXNlQ2xhc3M6IGRvbWFpbkV2ZW50SGFuZGxlclR5cGVcblx0XHRcdH0sIHtcblx0XHRcdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdFx0XHR1c2VGYWN0b3J5OiBtdWx0aURvbWFpbkV2ZW50SGFuZGxlckZhY3RvcnksXG5cdFx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFx0ZG9tYWluRXZlbnRIYW5kbGVyVHlwZVxuXHRcdFx0XHRdXG5cdFx0XHR9XTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRE9NQUlOX0VWRU5UX0hBTkRMRVJTKSBldmVudEhhbmRsZXJzOiBBcnJheTxEb21haW5FdmVudEhhbmRsZXJJbXBsPGFueSwgYW55Pj4sXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3QoQ1JFQVRFX0FHR1JFR0FURV9DT01NQU5EX0hBTkRMRVJTKSBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnM6IEFycmF5PENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxhbnksIGFueSwgYW55Pj4sXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3QoQ09NTUFORF9IQU5ETEVSUykgY29tbWFuZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8YW55LCBhbnksIGFueT4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbikgZGVmaW5lZEFnZ3JlZ2F0ZTogQXJyYXk8QWdncmVnYXRlRGVmaW5pdGlvbjxhbnksIGFueT4+LFxuXHRcdFx0XHRpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdGFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlOiBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTxhbnksIGFueT4sXG5cdFx0XHRcdGFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlOiBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTxhbnksIGFueT4sXG5cdFx0XHRcdGNvbW1hbmRCdXM6IENvbW1hbmRCdXMsXG5cdFx0XHRcdGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0aGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyOiBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIsXG5cdFx0XHRcdGhlcm1lc0FwaTogSGVybWVzQXBpKSB7IC8vIEhlcm1lc0FwaSBpbml0aWFsaXphdGlvblxuXHRcdHN1cGVyKFxuXHRcdFx0ZXZlbnRIYW5kbGVycyxcblx0XHRcdGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycyxcblx0XHRcdGNvbW1hbmRIYW5kbGVycyxcblx0XHRcdGRlZmluZWRBZ2dyZWdhdGUsXG5cdFx0XHRpbmplY3Rvcixcblx0XHRcdGFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLFxuXHRcdFx0YWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdFx0XHRjb21tYW5kQnVzLFxuXHRcdFx0ZG9tYWluRXZlbnRCdXMsXG5cdFx0XHRoZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIsXG5cdFx0XHRoZXJtZXNBcGlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXJDcmVhdGVDb21tYW5kSGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZDxJPj4oXG5cdFx0Y3JlYXRlQ29tbWFuZEhhbmRsZXJUeXBlOiBUeXBlPENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPEEsIEM+Pixcblx0XHRhZ2dyZWdhdGVOYW1lOiBzdHJpbmcpOiBBcnJheTxQcm92aWRlcj4ge1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0cHJvdmlkZTogY3JlYXRlQ29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHR1c2VDbGFzczogY3JlYXRlQ29tbWFuZEhhbmRsZXJUeXBlXG5cdFx0XHR9LCB7XG5cdFx0XHRcdHByb3ZpZGU6IENSRUFURV9BR0dSRUdBVEVfQ09NTUFORF9IQU5ETEVSUyxcblx0XHRcdFx0dXNlRmFjdG9yeTogY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJGYWN0b3J5LFxuXHRcdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHRcdFx0ZGVwczogW1xuXHRcdFx0XHRcdGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZSxcblx0XHRcdFx0XHRBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSxcblx0XHRcdFx0XHRBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSxcblx0XHRcdFx0XHRhZ2dyZWdhdGVOYW1lLFxuXHRcdFx0XHRcdERvbWFpbkV2ZW50UHVibGlzaGVyXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRdO1xuXHR9XG5cbn1cbiJdfQ==