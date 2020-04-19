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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImZlYXR1cmUtYXBpL2hlcm1lcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQWEsUUFBUSxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFMUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBS3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFJ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QW1ELEVBQUUsd0JBQTJFO1FBQ2hMLFVBQVU7YUFDUixhQUFhLENBQUMsZUFBZSxFQUFFLHdCQUF3QixDQUFDO2FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsT0FBVSxFQUFFLEVBQUU7WUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLE9BQU8sQ0FBQyxRQUFRLEVBQUUsNkNBQTZDLENBQUMsQ0FBQztRQUMzRixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLCtCQUErQixDQUFDLGVBQW1EO1FBQzFGLElBQUksZUFBZSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN2RCxPQUFPLENBQUMsSUFBSSxDQUFDLHFFQUFxRSxDQUFDLENBQUM7U0FDcEY7SUFDRixDQUFDOzs7WUF4S0QsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFNBQVMsRUFBRSxTQUFTO2FBQ3BCOzs7O1lBZ0ZzRSxLQUFLLHVCQUE5RCxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjtZQUMrQixLQUFLLHVCQUFyRixRQUFRLFlBQUksTUFBTSxTQUFDLGlDQUFpQztZQUNMLEtBQUssdUJBQXBELFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO1lBQzRCLEtBQUssdUJBQXBFLFFBQVEsWUFBSSxNQUFNLFNBQUMsd0JBQXdCO1lBaE0vQixRQUFRO1lBeUNoQix1QkFBdUI7WUFBRSwwQkFBMEI7WUFsQ25ELFVBQVU7WUFRVixjQUFjO1lBb0JkLHdCQUF3QjtZQVR4QixTQUFTOzs7Ozs7O0lBNEtkLGdEQUEwRDs7Ozs7SUFDMUQsaUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFByb3ZpZGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLyoqXG4gKiBDb21tYW5kXG4gKi9cbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQnO1xuaW1wb3J0IHsgQ29tbWFuZEJ1cyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuYnVzJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBDb21tYW5kU3RyZWFtIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5zdHJlYW0nO1xuaW1wb3J0IHsgRklMVEVSRURfQ09NTUFORF9TVFJFQU0gfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9maWx0ZXJlZC1jb21tYW5kLXN0cmVhbSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBET01BSU5fRVZFTlRfSEFORExFUlMgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LWhhbmRsZXJzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudFN0b3JlIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdG9yZSc7XG5pbXBvcnQgeyBEb21haW5FdmVudFN0cmVhbSB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RyZWFtJztcbi8qKlxuICogQVBQXG4gKi9cbmltcG9ydCB7IEhlcm1lc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vaGVybWVzLW1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgRVZFTlRfTE9HR0VSX0VOQUJMRUQgfSBmcm9tICcuLi9kb21haW4vaGVybWVzLXRva2Vucyc7XG5pbXBvcnQgeyBIZXJtZXNBcGkgfSBmcm9tICcuLy9oZXJtZXMtYXBpJztcbi8qKlxuICogSW5mcmFzdHJ1Y3R1cmVcbiAqL1xuaW1wb3J0IHsgQ29uc29sZUNvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvY29tbWFuZC9jb25zb2xlLmNvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvbm9vcC5jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBDb25zb2xlRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvZXZlbnQvY29uc29sZS5ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgTm9vcEV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L25vb3AuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJy4uL2NvbW1vbi9yYW5kb20tc3RyaW5nLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIgfSBmcm9tICcuL2hlcm1lcy5sb2dnZXJzLmluaXRpYWxpemVyJztcbmltcG9ydCB7XG5cdGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyRmFjdG9yeSxcblx0Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsXG59IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZS9jcmVhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvY3JlYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVycy10b2tlbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSwgQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb25maWcvZGVmaW5lJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgYWdncmVnYXRlRGVmaW5pdGlvblRva2VuIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2FnZ3JlZ2F0ZS1kZWZpbml0aW9uLnRva2VuJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZURlZmluaXRpb24gfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb25maWcvYWdncmVnYXRlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZS9jcmVhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgSGVybWVzRG9tYWluTW9kdWxlIH0gZnJvbSAnLi9oZXJtZXMuZG9tYWluLm1vZHVsZSc7XG5pbXBvcnQgeyBDT01NQU5EX0hBTkRMRVJTIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvaGFuZGxlci9jb21tYW5kLWhhbmRsZXJzJztcbmltcG9ydCB7IGNvbW1hbmRIYW5kbGVyRmFjdG9yeSwgQ29tbWFuZEhhbmRsZXJJbXBsIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvaGFuZGxlci9jb21tYW5kLWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC5oYW5kbGVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uL2NvbW1vbi9yZWFjdGl2ZSc7XG5cblxuY29uc3QgaGVybWVzUHJvdmlkZXJzID0gW1xuXHRSYW5kb21TdHJpbmdHZW5lcmF0b3IsXG5cdHsgcHJvdmlkZTogRklMVEVSRURfQ09NTUFORF9TVFJFQU0sIHVzZUV4aXN0aW5nOiBDb21tYW5kU3RyZWFtIH0sXG5cdENvbW1hbmRCdXMsXG5cdENvbW1hbmRTdHJlYW0sXG5cdENvbW1hbmREaXNwYXRjaGVyLFxuXHRBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLFxuXG5cdERvbWFpbkV2ZW50QnVzLFxuXHREb21haW5FdmVudFN0cmVhbSxcblx0RG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cdERvbWFpbkV2ZW50U3RvcmUsXG5cblx0SGVybWVzQXBpXG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdHsgcHJvdmlkZTogRVZFTlRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiB0cnVlIH0sXG5cdHsgcHJvdmlkZTogQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHRydWUgfSxcblx0eyBwcm92aWRlOiBDb21tYW5kTG9nZ2VyLCB1c2VGYWN0b3J5OiBjb21tYW5kTG9nZ2VyRmFjdG9yeSwgZGVwczogW0NPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIENvbnNvbGVDb21tYW5kTG9nZ2VyLCBOb29wQ29tbWFuZExvZ2dlcl0gfSxcblx0eyBwcm92aWRlOiBEb21haW5FdmVudExvZ2dlciwgdXNlRmFjdG9yeTogZXZlbnRMb2dnZXJGYWN0b3J5LCBkZXBzOiBbRVZFTlRfTE9HR0VSX0VOQUJMRUQsIENvbnNvbGVFdmVudExvZ2dlciwgTm9vcEV2ZW50TG9nZ2VyXSB9LFxuXHRDb25zb2xlQ29tbWFuZExvZ2dlcixcblx0Tm9vcENvbW1hbmRMb2dnZXIsXG5cdE5vb3BFdmVudExvZ2dlcixcblx0Q29uc29sZUV2ZW50TG9nZ2VyLFxuXHRIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIsXG5cdEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLFxuXHRBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSxcblx0Li4uaGVybWVzUHJvdmlkZXJzXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tbWFuZExvZ2dlckZhY3RvcnkoZW5hYmxlZDogYm9vbGVhbiwgY29uc29sZUNvbW1hbmRMb2dnZXI6IENvbnNvbGVDb21tYW5kTG9nZ2VyLCBub29wQ29tbWFuZExvZ2dlcjogTm9vcENvbW1hbmRMb2dnZXIpIHtcblxuXHRpZiAoZW5hYmxlZCkge1xuXHRcdHJldHVybiBjb25zb2xlQ29tbWFuZExvZ2dlcjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbm9vcENvbW1hbmRMb2dnZXI7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50TG9nZ2VyRmFjdG9yeShlbmFibGVkOiBib29sZWFuLCBjb25zb2xlRXZlbnRMb2dnZXI6IENvbnNvbGVFdmVudExvZ2dlciwgbm9vcEV2ZW50TG9nZ2VyOiBOb29wRXZlbnRMb2dnZXIpIHtcblxuXHRpZiAoZW5hYmxlZCkge1xuXHRcdHJldHVybiBjb25zb2xlRXZlbnRMb2dnZXI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5vb3BFdmVudExvZ2dlcjtcblx0fVxufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogcHJvdmlkZXJzXG59KVxuZXhwb3J0IGNsYXNzIEhlcm1lc01vZHVsZTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZD4gZXh0ZW5kcyBSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0c3RhdGljIGRlZmluZUFnZ3JlZ2F0ZTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZD4oYWdncmVnYXRlS2V5OiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZmFjdG9yeTogVHlwZTxBZ2dyZWdhdGVGYWN0b3J5PEksIEE+Pixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCByZXBvc2l0b3J5OiBUeXBlPEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8SSwgQT4+LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGNyZWF0ZUhhbmRsZXI6IFR5cGU8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz4+LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGhhbmRsZXJzOiBBcnJheTxQcm92aWRlcj4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEhlcm1lc0RvbWFpbk1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0cHJvdmlkZTogYWdncmVnYXRlRGVmaW5pdGlvblRva2VuLFxuXHRcdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHRcdFx0dXNlVmFsdWU6IHtcblx0XHRcdFx0XHRrZXk6IGFnZ3JlZ2F0ZUtleSxcblx0XHRcdFx0XHRmYWN0b3J5OiBmYWN0b3J5LFxuXHRcdFx0XHRcdHJlcG9zaXRvcnk6IHJlcG9zaXRvcnlcblx0XHRcdFx0fVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBhZ2dyZWdhdGVLZXksXG5cdFx0XHRcdHVzZVZhbHVlOiBhZ2dyZWdhdGVLZXlcblx0XHRcdH0sXG5cdFx0XHRcdGZhY3RvcnksXG5cdFx0XHRcdHJlcG9zaXRvcnksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNyZWF0ZUNvbW1hbmRIYW5kbGVyKGNyZWF0ZUhhbmRsZXIsIGFnZ3JlZ2F0ZUtleSksXG5cdFx0XHRcdC4uLmhhbmRsZXJzXG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogSGVybWVzTW9kdWxlQ29uZmlnID0geyBsb2dnZXJzOiBmYWxzZSB9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBIZXJtZXNNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IHByb3ZpZGVyc1xuXHRcdH07XG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJDb21tYW5kSGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZD4oXG5cdFx0Y29tbWFuZEhhbmRsZXJUeXBlOiBUeXBlPENvbW1hbmRIYW5kbGVyPEEsIEM+Pixcblx0XHRhZ2dyZWdhdGVOYW1lOiBzdHJpbmcpOiBBcnJheTxQcm92aWRlcj4ge1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0cHJvdmlkZTogY29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHR1c2VDbGFzczogY29tbWFuZEhhbmRsZXJUeXBlXG5cdFx0XHR9LCB7XG5cdFx0XHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0XHRcdHVzZUZhY3Rvcnk6IGNvbW1hbmRIYW5kbGVyRmFjdG9yeSxcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRjb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdFx0QWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdFx0XHRcdFx0YWdncmVnYXRlTmFtZVxuXHRcdFx0XHRdXG5cdFx0XHR9XTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyQ3JlYXRlQ29tbWFuZEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ+KFxuXHRcdGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZTogVHlwZTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxBLCBDPj4sXG5cdFx0YWdncmVnYXRlTmFtZTogc3RyaW5nKTogQXJyYXk8UHJvdmlkZXI+IHtcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHByb3ZpZGU6IGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZSxcblx0XHRcdFx0dXNlQ2xhc3M6IGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMsXG5cdFx0XHRcdHVzZUZhY3Rvcnk6IGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyRmFjdG9yeSxcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRjcmVhdGVDb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdFx0QWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsXG5cdFx0XHRcdFx0QWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdFx0XHRcdFx0YWdncmVnYXRlTmFtZSxcblx0XHRcdFx0XHREb21haW5FdmVudFB1Ymxpc2hlclxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0XTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRE9NQUlOX0VWRU5UX0hBTkRMRVJTKSBldmVudEhhbmRsZXJzOiBBcnJheTxEb21haW5FdmVudEhhbmRsZXI8ST4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KENSRUFURV9BR0dSRUdBVEVfQ09NTUFORF9IQU5ETEVSUykgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KENPTU1BTkRfSEFORExFUlMpIGhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbikgZGVmaW5lZEFnZ3JlZ2F0ZTogQXJyYXk8QWdncmVnYXRlRGVmaW5pdGlvbjxJLCBBPj4sXG5cdFx0XHRcdGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0YWdncmVnYXRlRmFjdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlPEksIEE+LFxuXHRcdFx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU8SSwgQT4sXG5cdFx0XHRcdGNvbW1hbmRCdXM6IENvbW1hbmRCdXMsXG5cdFx0XHRcdGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBoZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXI6IEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcixcblx0XHRcdFx0cHJpdmF0ZSBoZXJtZXNBcGk6IEhlcm1lc0FwaSkgeyAvLyBIZXJtZXNBcGkgaW5pdGlhbGl6YXRpb25cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5oZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIuc3RhcnQoKTtcblxuXHRcdHRoaXMuY2hlY2tOdWxsQ29tbWFuZChjb21tYW5kQnVzLCBoYW5kbGVycywgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKTtcblx0XHR0aGlzLmNoZWNrQ29tbWFuZEhhbmRsZXJJc0NvbGxlY3Rpb24oaGFuZGxlcnMpO1xuXG5cdFx0aWYgKGRlZmluZWRBZ2dyZWdhdGUpIHtcblx0XHRcdGRlZmluZWRBZ2dyZWdhdGUuZm9yRWFjaCgoZGVmOiBBZ2dyZWdhdGVEZWZpbml0aW9uPEksIEE+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgZmFjdG9yeSA9IGluamVjdG9yLmdldChkZWYuZmFjdG9yeSksXG5cdFx0XHRcdFx0cmVwb3NpdG9yeSA9IGluamVjdG9yLmdldChkZWYucmVwb3NpdG9yeSk7XG5cblx0XHRcdFx0YWdncmVnYXRlRmFjdG9yeUFyY2hpdmUuYWRkKGRlZi5rZXksIGZhY3RvcnkpO1xuXHRcdFx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZS5hZGQoZGVmLmtleSwgcmVwb3NpdG9yeSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKSB7XG5cblx0XHRcdGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4pID0+IHtcblx0XHRcdFx0Y29tbWFuZEJ1c1xuXHRcdFx0XHRcdC5vZkNyZWF0ZUFnZ3JlZ2F0ZUhhbmRsZXIoaGFuZGxlcilcblx0XHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IEMpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChoYW5kbGVycykge1xuXG5cdFx0XHRoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4pID0+IHtcblx0XHRcdFx0Y29tbWFuZEJ1c1xuXHRcdFx0XHRcdC5vZkNvbW1hbmRIYW5kbGVyKGhhbmRsZXIpXG5cdFx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnRIYW5kbGVycykge1xuXHRcdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KSA9PiB7XG5cblx0XHRcdFx0XHRldmVudEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlcjxJPikgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGUoZXZlbnQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHRcdHRoaXMuaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLnN0b3AoKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tOdWxsQ29tbWFuZChjb21tYW5kQnVzOiBDb21tYW5kQnVzLCBjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4sIGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+Pik6IHZvaWQge1xuXHRcdGNvbW1hbmRCdXNcblx0XHRcdC5vZk51bGxIYW5kbGVyKGNvbW1hbmRIYW5kbGVycywgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IEMpID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgQ29tbWFuZCAke2NvbW1hbmQudG9TdHJpbmcoKX0gd2FzIG5vdCBpbnRlcmNlcHRlZCBieSBhbnkgQ29tbWFuZEhhbmRsZXIuYCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDb21tYW5kSGFuZGxlcklzQ29sbGVjdGlvbihjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4pOiB2b2lkIHtcblx0XHRpZiAoY29tbWFuZEhhbmRsZXJzICYmICFBcnJheS5pc0FycmF5KGNvbW1hbmRIYW5kbGVycykpIHtcblx0XHRcdGNvbnNvbGUud2FybihgWW91IG1pZ2h0IHByb3ZpZGVkIGNvbW1hbmRIYW5kbGVyIHdpdGhvdXQgc3BlY2lmeWluZyBcIm11bHRpOiB0cnVlXCIuYCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==