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
 * @template I, A, C
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInVpLWFwaS9oZXJtZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFhLFFBQVEsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRTFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUt4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFJakQs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LEVBQUUsd0JBQTJFO1FBQ2hMLFVBQVU7YUFDUixhQUFhLENBQUMsZUFBZSxFQUFFLHdCQUF3QixDQUFDO2FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsT0FBVSxFQUFFLEVBQUU7WUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLE9BQU8sQ0FBQyxRQUFRLEVBQUUsNkNBQTZDLENBQUMsQ0FBQztRQUMzRixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLCtCQUErQixDQUFDLGVBQW1EO1FBQzFGLElBQUksZUFBZSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN2RCxPQUFPLENBQUMsSUFBSSxDQUFDLHFFQUFxRSxDQUFDLENBQUM7U0FDcEY7SUFDRixDQUFDOzs7WUF4S0QsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFNBQVMsRUFBRSxTQUFTO2FBQ3BCOzs7O1lBZ0ZzRSxLQUFLLHVCQUE5RCxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjtZQUMrQixLQUFLLHVCQUFyRixRQUFRLFlBQUksTUFBTSxTQUFDLGlDQUFpQztZQUNMLEtBQUssdUJBQXBELFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO1lBQzRCLEtBQUssdUJBQXBFLFFBQVEsWUFBSSxNQUFNLFNBQUMsd0JBQXdCO1lBaE0vQixRQUFRO1lBeUNoQix1QkFBdUI7WUFBRSwwQkFBMEI7WUFsQ25ELFVBQVU7WUFRVixjQUFjO1lBb0JkLHdCQUF3QjtZQVR4QixTQUFTOzs7Ozs7O0lBNEtkLGdEQUEwRDs7Ozs7SUFDMUQsaUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFByb3ZpZGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLyoqXG4gKiBDb21tYW5kXG4gKi9cbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQnO1xuaW1wb3J0IHsgQ29tbWFuZEJ1cyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuYnVzJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBDb21tYW5kU3RyZWFtIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5zdHJlYW0nO1xuaW1wb3J0IHsgRklMVEVSRURfQ09NTUFORF9TVFJFQU0gfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9maWx0ZXJlZC1jb21tYW5kLXN0cmVhbSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBET01BSU5fRVZFTlRfSEFORExFUlMgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LWhhbmRsZXJzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudFN0b3JlIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdG9yZSc7XG5pbXBvcnQgeyBEb21haW5FdmVudFN0cmVhbSB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RyZWFtJztcbi8qKlxuICogQVBQXG4gKi9cbmltcG9ydCB7IEhlcm1lc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vaGVybWVzLW1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgRVZFTlRfTE9HR0VSX0VOQUJMRUQgfSBmcm9tICcuLi9kb21haW4vaGVybWVzLXRva2Vucyc7XG5pbXBvcnQgeyBIZXJtZXNBcGkgfSBmcm9tICcuLi91aS1hcGkvaGVybWVzLWFwaSc7XG4vKipcbiAqIEluZnJhc3RydWN0dXJlXG4gKi9cbmltcG9ydCB7IENvbnNvbGVDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvY29uc29sZS5jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBOb29wQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9jb21tYW5kL25vb3AuY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgQ29uc29sZUV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L2NvbnNvbGUuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BFdmVudExvZ2dlciB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2xvZ2dlci9ldmVudC9ub29wLmV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICcuLi9jb21tb24vcmFuZG9tLXN0cmluZy5nZW5lcmF0b3InO1xuaW1wb3J0IHsgSGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyIH0gZnJvbSAnLi9oZXJtZXMubG9nZ2Vycy5pbml0aWFsaXplcic7XG5pbXBvcnQge1xuXHRjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3RvcnksXG5cdENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbFxufSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvY3JlYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQ1JFQVRFX0FHR1JFR0FURV9DT01NQU5EX0hBTkRMRVJTIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2NyZWF0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlcnMtdG9rZW4nO1xuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsIEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2RlZmluZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbiB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbmZpZy9hZ2dyZWdhdGUtZGVmaW5pdGlvbi50b2tlbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVEZWZpbml0aW9uIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2FnZ3JlZ2F0ZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvY3JlYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEhlcm1lc0RvbWFpbk1vZHVsZSB9IGZyb20gJy4vaGVybWVzLmRvbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVycyc7XG5pbXBvcnQgeyBjb21tYW5kSGFuZGxlckZhY3RvcnksIENvbW1hbmRIYW5kbGVySW1wbCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQuaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi9jb21tb24vcmVhY3RpdmUnO1xuXG5cbmNvbnN0IGhlcm1lc1Byb3ZpZGVycyA9IFtcblx0UmFuZG9tU3RyaW5nR2VuZXJhdG9yLFxuXHR7IHByb3ZpZGU6IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNLCB1c2VFeGlzdGluZzogQ29tbWFuZFN0cmVhbSB9LFxuXHRDb21tYW5kQnVzLFxuXHRDb21tYW5kU3RyZWFtLFxuXHRDb21tYW5kRGlzcGF0Y2hlcixcblx0QWdncmVnYXRlU3RvcmVSZWdpc3RlcixcblxuXHREb21haW5FdmVudEJ1cyxcblx0RG9tYWluRXZlbnRTdHJlYW0sXG5cdERvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHREb21haW5FdmVudFN0b3JlLFxuXG5cdEhlcm1lc0FwaVxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHR7IHByb3ZpZGU6IEVWRU5UX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogdHJ1ZSB9LFxuXHR7IHByb3ZpZGU6IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiB0cnVlIH0sXG5cdHsgcHJvdmlkZTogQ29tbWFuZExvZ2dlciwgdXNlRmFjdG9yeTogY29tbWFuZExvZ2dlckZhY3RvcnksIGRlcHM6IFtDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBDb25zb2xlQ29tbWFuZExvZ2dlciwgTm9vcENvbW1hbmRMb2dnZXJdIH0sXG5cdHsgcHJvdmlkZTogRG9tYWluRXZlbnRMb2dnZXIsIHVzZUZhY3Rvcnk6IGV2ZW50TG9nZ2VyRmFjdG9yeSwgZGVwczogW0VWRU5UX0xPR0dFUl9FTkFCTEVELCBDb25zb2xlRXZlbnRMb2dnZXIsIE5vb3BFdmVudExvZ2dlcl0gfSxcblx0Q29uc29sZUNvbW1hbmRMb2dnZXIsXG5cdE5vb3BDb21tYW5kTG9nZ2VyLFxuXHROb29wRXZlbnRMb2dnZXIsXG5cdENvbnNvbGVFdmVudExvZ2dlcixcblx0SGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHRBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSxcblx0QWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdC4uLmhlcm1lc1Byb3ZpZGVyc1xuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmRMb2dnZXJGYWN0b3J5KGVuYWJsZWQ6IGJvb2xlYW4sIGNvbnNvbGVDb21tYW5kTG9nZ2VyOiBDb25zb2xlQ29tbWFuZExvZ2dlciwgbm9vcENvbW1hbmRMb2dnZXI6IE5vb3BDb21tYW5kTG9nZ2VyKSB7XG5cblx0aWYgKGVuYWJsZWQpIHtcblx0XHRyZXR1cm4gY29uc29sZUNvbW1hbmRMb2dnZXI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5vb3BDb21tYW5kTG9nZ2VyO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudExvZ2dlckZhY3RvcnkoZW5hYmxlZDogYm9vbGVhbiwgY29uc29sZUV2ZW50TG9nZ2VyOiBDb25zb2xlRXZlbnRMb2dnZXIsIG5vb3BFdmVudExvZ2dlcjogTm9vcEV2ZW50TG9nZ2VyKSB7XG5cblx0aWYgKGVuYWJsZWQpIHtcblx0XHRyZXR1cm4gY29uc29sZUV2ZW50TG9nZ2VyO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBub29wRXZlbnRMb2dnZXI7XG5cdH1cbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IHByb3ZpZGVyc1xufSlcbmV4cG9ydCBjbGFzcyBIZXJtZXNNb2R1bGU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ+IGV4dGVuZHMgUmVhY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHN0YXRpYyBkZWZpbmVBZ2dyZWdhdGU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ+KGFnZ3JlZ2F0ZUtleTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGZhY3Rvcnk6IFR5cGU8QWdncmVnYXRlRmFjdG9yeTxJLCBBPj4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgcmVwb3NpdG9yeTogVHlwZTxBZ2dyZWdhdGVSZXBvc2l0b3J5PEksIEE+Pixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBjcmVhdGVIYW5kbGVyOiBUeXBlPENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPEEsIEM+Pixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBoYW5kbGVyczogQXJyYXk8UHJvdmlkZXI+KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBIZXJtZXNEb21haW5Nb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFt7XG5cdFx0XHRcdHByb3ZpZGU6IGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbixcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdHVzZVZhbHVlOiB7XG5cdFx0XHRcdFx0a2V5OiBhZ2dyZWdhdGVLZXksXG5cdFx0XHRcdFx0ZmFjdG9yeTogZmFjdG9yeSxcblx0XHRcdFx0XHRyZXBvc2l0b3J5OiByZXBvc2l0b3J5XG5cdFx0XHRcdH1cblx0XHRcdH0sIHtcblx0XHRcdFx0cHJvdmlkZTogYWdncmVnYXRlS2V5LFxuXHRcdFx0XHR1c2VWYWx1ZTogYWdncmVnYXRlS2V5XG5cdFx0XHR9LFxuXHRcdFx0XHRmYWN0b3J5LFxuXHRcdFx0XHRyZXBvc2l0b3J5LFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDcmVhdGVDb21tYW5kSGFuZGxlcihjcmVhdGVIYW5kbGVyLCBhZ2dyZWdhdGVLZXkpLFxuXHRcdFx0XHQuLi5oYW5kbGVyc1xuXHRcdFx0XVxuXHRcdH07XG5cdH1cblxuXHRzdGF0aWMgd2l0aENvbmZpZyhjb25maWc6IEhlcm1lc01vZHVsZUNvbmZpZyA9IHsgbG9nZ2VyczogZmFsc2UgfSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogSGVybWVzTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBwcm92aWRlcnNcblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyQ29tbWFuZEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ+KFxuXHRcdGNvbW1hbmRIYW5kbGVyVHlwZTogVHlwZTxDb21tYW5kSGFuZGxlcjxBLCBDPj4sXG5cdFx0YWdncmVnYXRlTmFtZTogc3RyaW5nKTogQXJyYXk8UHJvdmlkZXI+IHtcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHByb3ZpZGU6IGNvbW1hbmRIYW5kbGVyVHlwZSxcblx0XHRcdFx0dXNlQ2xhc3M6IGNvbW1hbmRIYW5kbGVyVHlwZVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdFx0XHR1c2VGYWN0b3J5OiBjb21tYW5kSGFuZGxlckZhY3RvcnksXG5cdFx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFx0Y29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHRcdEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLFxuXHRcdFx0XHRcdGFnZ3JlZ2F0ZU5hbWVcblx0XHRcdFx0XVxuXHRcdFx0fV07XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyByZWdpc3RlckNyZWF0ZUNvbW1hbmRIYW5kbGVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPihcblx0XHRjcmVhdGVDb21tYW5kSGFuZGxlclR5cGU6IFR5cGU8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz4+LFxuXHRcdGFnZ3JlZ2F0ZU5hbWU6IHN0cmluZyk6IEFycmF5PFByb3ZpZGVyPiB7XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRwcm92aWRlOiBjcmVhdGVDb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdHVzZUNsYXNzOiBjcmVhdGVDb21tYW5kSGFuZGxlclR5cGVcblx0XHRcdH0sIHtcblx0XHRcdFx0cHJvdmlkZTogQ1JFQVRFX0FHR1JFR0FURV9DT01NQU5EX0hBTkRMRVJTLFxuXHRcdFx0XHR1c2VGYWN0b3J5OiBjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3RvcnksXG5cdFx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFx0Y3JlYXRlQ29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHRcdEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLFxuXHRcdFx0XHRcdEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLFxuXHRcdFx0XHRcdGFnZ3JlZ2F0ZU5hbWUsXG5cdFx0XHRcdFx0RG9tYWluRXZlbnRQdWJsaXNoZXJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdF07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERPTUFJTl9FVkVOVF9IQU5ETEVSUykgZXZlbnRIYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVyPEk+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMpIGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChDT01NQU5EX0hBTkRMRVJTKSBoYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChhZ2dyZWdhdGVEZWZpbml0aW9uVG9rZW4pIGRlZmluZWRBZ2dyZWdhdGU6IEFycmF5PEFnZ3JlZ2F0ZURlZmluaXRpb248SSwgQT4+LFxuXHRcdFx0XHRpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdGFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlOiBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTxJLCBBPixcblx0XHRcdFx0YWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+LFxuXHRcdFx0XHRjb21tYW5kQnVzOiBDb21tYW5kQnVzLFxuXHRcdFx0XHRkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyOiBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIsXG5cdFx0XHRcdHByaXZhdGUgaGVybWVzQXBpOiBIZXJtZXNBcGkpIHsgLy8gSGVybWVzQXBpIGluaXRpYWxpemF0aW9uXG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLnN0YXJ0KCk7XG5cblx0XHR0aGlzLmNoZWNrTnVsbENvbW1hbmQoY29tbWFuZEJ1cywgaGFuZGxlcnMsIGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycyk7XG5cdFx0dGhpcy5jaGVja0NvbW1hbmRIYW5kbGVySXNDb2xsZWN0aW9uKGhhbmRsZXJzKTtcblxuXHRcdGlmIChkZWZpbmVkQWdncmVnYXRlKSB7XG5cdFx0XHRkZWZpbmVkQWdncmVnYXRlLmZvckVhY2goKGRlZjogQWdncmVnYXRlRGVmaW5pdGlvbjxJLCBBPikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGZhY3RvcnkgPSBpbmplY3Rvci5nZXQoZGVmLmZhY3RvcnkpLFxuXHRcdFx0XHRcdHJlcG9zaXRvcnkgPSBpbmplY3Rvci5nZXQoZGVmLnJlcG9zaXRvcnkpO1xuXG5cdFx0XHRcdGFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLmFkZChkZWYua2V5LCBmYWN0b3J5KTtcblx0XHRcdFx0YWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUuYWRkKGRlZi5rZXksIHJlcG9zaXRvcnkpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycykge1xuXG5cdFx0XHRhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+KSA9PiB7XG5cdFx0XHRcdGNvbW1hbmRCdXNcblx0XHRcdFx0XHQub2ZDcmVhdGVBZ2dyZWdhdGVIYW5kbGVyKGhhbmRsZXIpXG5cdFx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoaGFuZGxlcnMpIHtcblxuXHRcdFx0aGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+KSA9PiB7XG5cdFx0XHRcdGNvbW1hbmRCdXNcblx0XHRcdFx0XHQub2ZDb21tYW5kSGFuZGxlcihoYW5kbGVyKVxuXHRcdFx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQykgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50SGFuZGxlcnMpIHtcblx0XHRcdGRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudDxJPikgPT4ge1xuXG5cdFx0XHRcdFx0ZXZlbnRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBEb21haW5FdmVudEhhbmRsZXI8ST4pID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlKGV2ZW50KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLmhlcm1lc0xvZ2dlcnNJbml0aWFsaXplci5zdG9wKCk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTnVsbENvbW1hbmQoY29tbWFuZEJ1czogQ29tbWFuZEJ1cywgY29tbWFuZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+LCBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnM6IEFycmF5PENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4pOiB2b2lkIHtcblx0XHRjb21tYW5kQnVzXG5cdFx0XHQub2ZOdWxsSGFuZGxlcihjb21tYW5kSGFuZGxlcnMsIGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycylcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYENvbW1hbmQgJHtjb21tYW5kLnRvU3RyaW5nKCl9IHdhcyBub3QgaW50ZXJjZXB0ZWQgYnkgYW55IENvbW1hbmRIYW5kbGVyLmApO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ29tbWFuZEhhbmRsZXJJc0NvbGxlY3Rpb24oY29tbWFuZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+KTogdm9pZCB7XG5cdFx0aWYgKGNvbW1hbmRIYW5kbGVycyAmJiAhQXJyYXkuaXNBcnJheShjb21tYW5kSGFuZGxlcnMpKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oYFlvdSBtaWdodCBwcm92aWRlZCBjb21tYW5kSGFuZGxlciB3aXRob3V0IHNwZWNpZnlpbmcgXCJtdWx0aTogdHJ1ZVwiLmApO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=