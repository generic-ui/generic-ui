import { Inject, NgModule, Optional, Injectable } from '@angular/core';
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
import * as i0 from "@angular/core";
import * as i1 from "../domain/command/config/define";
import * as i2 from "../domain/command/command.bus";
import * as i3 from "../domain/event/domain-event.bus";
import * as i4 from "./hermes.loggers.initializer";
import * as i5 from "./hermes-api";
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
export function commandLoggerFactory(enabled, consoleCommandLogger, noopCommandLogger) {
    if (enabled) {
        return consoleCommandLogger;
    }
    else {
        return noopCommandLogger;
    }
}
export function eventLoggerFactory(enabled, consoleEventLogger, noopEventLogger) {
    if (enabled) {
        return consoleEventLogger;
    }
    else {
        return noopEventLogger;
    }
}
export class HermesBaseModule extends Reactive {
    constructor(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        super();
        this.hermesLoggersInitializer = hermesLoggersInitializer;
        this.hermesApi = hermesApi;
        this.aggregateDefinitionInitializer = new AggregateDefinitionInitializer();
        this.commandHandlerInitializer = new CommandHandlerInitializer();
        this.domainEventHandlerInitializer = new DomainEventHandlerInitializer();
        this.hermesLoggersInitializer.start();
        this.checkNullCommand(commandBus, commandHandlers, aggregateCommandHandlers);
        this.checkCommandHandlerIsCollection(commandHandlers);
        this.checkDomainEventHandlerIsCollection(eventHandlers);
        this.aggregateDefinitionInitializer.register(definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive);
        this.commandHandlerInitializer.register(commandHandlers, commandBus);
        this.commandHandlerInitializer.registerAggregateCommandHandlers(aggregateCommandHandlers, commandBus);
        this.domainEventHandlerInitializer.init(eventHandlers, domainEventBus);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.hermesLoggersInitializer.stop();
        this.commandHandlerInitializer.ngOnDestroy();
        this.domainEventHandlerInitializer.ngOnDestroy();
    }
    checkNullCommand(commandBus, commandHandlers, aggregateCommandHandlers) {
        commandBus
            .ofNullHandler(commandHandlers, aggregateCommandHandlers)
            .pipe(this.hermesTakeUntil())
            .subscribe((command) => {
            // eslint-disable-next-line no-console
            console.error(`Command ${command.toString()} was not intercepted by any CommandHandler.`);
        });
    }
    checkCommandHandlerIsCollection(commandHandlers) {
        if (commandHandlers && !Array.isArray(commandHandlers)) {
            // eslint-disable-next-line no-console
            console.warn('You might provided commandHandler without specifying "multi: true".');
        }
    }
    checkDomainEventHandlerIsCollection(eventHandlers) {
        if (eventHandlers && !Array.isArray(eventHandlers)) {
            // eslint-disable-next-line no-console
            console.warn('You might provided eventHandler without specifying "multi: true".');
        }
    }
}
HermesBaseModule.ɵfac = function HermesBaseModule_Factory(t) { return new (t || HermesBaseModule)(i0.ɵɵinject(DOMAIN_EVENT_HANDLERS, 8), i0.ɵɵinject(CREATE_AGGREGATE_COMMAND_HANDLERS, 8), i0.ɵɵinject(COMMAND_HANDLERS, 8), i0.ɵɵinject(aggregateDefinitionToken, 8), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i1.AggregateFactoryArchive), i0.ɵɵinject(i1.AggregateRepositoryArchive), i0.ɵɵinject(i2.CommandBus), i0.ɵɵinject(i3.DomainEventBus), i0.ɵɵinject(i4.HermesLoggersInitializer), i0.ɵɵinject(i5.HermesApi)); };
HermesBaseModule.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HermesBaseModule, factory: HermesBaseModule.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HermesBaseModule, [{
        type: Injectable
    }], function () { return [{ type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOMAIN_EVENT_HANDLERS]
            }] }, { type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [CREATE_AGGREGATE_COMMAND_HANDLERS]
            }] }, { type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [COMMAND_HANDLERS]
            }] }, { type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [aggregateDefinitionToken]
            }] }, { type: i0.Injector }, { type: i1.AggregateFactoryArchive }, { type: i1.AggregateRepositoryArchive }, { type: i2.CommandBus }, { type: i3.DomainEventBus }, { type: i4.HermesLoggersInitializer }, { type: i5.HermesApi }]; }, null); })();
export class HermesModule extends HermesBaseModule {
    constructor(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        super(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi);
    }
    static defineAggregate(aggregateKey, factory, repository, createCommandHandler, commandHandlers = [], domainEventHandlers = []) {
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
                HermesModule.registerCreateCommandHandler(createCommandHandler, aggregateKey),
                commandHandlers,
                domainEventHandlers
            ]
        };
    }
    static withConfig(config = { loggers: false }) {
        return {
            ngModule: HermesModule,
            providers: providers
        };
    }
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
HermesModule.ɵfac = function HermesModule_Factory(t) { return new (t || HermesModule)(i0.ɵɵinject(DOMAIN_EVENT_HANDLERS, 8), i0.ɵɵinject(CREATE_AGGREGATE_COMMAND_HANDLERS, 8), i0.ɵɵinject(COMMAND_HANDLERS, 8), i0.ɵɵinject(aggregateDefinitionToken, 8), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i1.AggregateFactoryArchive), i0.ɵɵinject(i1.AggregateRepositoryArchive), i0.ɵɵinject(i2.CommandBus), i0.ɵɵinject(i3.DomainEventBus), i0.ɵɵinject(i4.HermesLoggersInitializer), i0.ɵɵinject(i5.HermesApi)); };
HermesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HermesModule });
HermesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: providers, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HermesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                providers: providers
            }]
    }], function () { return [{ type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOMAIN_EVENT_HANDLERS]
            }] }, { type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [CREATE_AGGREGATE_COMMAND_HANDLERS]
            }] }, { type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [COMMAND_HANDLERS]
            }] }, { type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [aggregateDefinitionToken]
            }] }, { type: i0.Injector }, { type: i1.AggregateFactoryArchive }, { type: i1.AggregateRepositoryArchive }, { type: i2.CommandBus }, { type: i3.DomainEventBus }, { type: i4.HermesLoggersInitializer }, { type: i5.HermesApi }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HermesModule, { imports: [CommonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2FwaS9oZXJtZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQWlDLFFBQVEsRUFBYSxRQUFRLEVBQWtCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFMUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBS3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekM7O0dBRUc7QUFDSCxPQUFPLEVBQUUsb0JBQW9CLEVB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QyxDQUFDO0lBQ0wsQ0FBQztJQTRCTyxNQUFNLENBQUMsNEJBQTRCLENBQzFDLHdCQUFtRSxFQUNuRSxhQUFxQjtRQUVyQixPQUFPO1lBQ047Z0JBQ0MsT0FBTyxFQUFFLHdCQUF3QjtnQkFDakMsUUFBUSxFQUFFLHdCQUF3QjthQUNsQyxFQUFFO2dCQUNGLE9BQU8sRUFBRSxpQ0FBaUM7Z0JBQzFDLFVBQVUsRUFBRSxvQ0FBb0M7Z0JBQ2hELEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRTtvQkFDTCx3QkFBd0I7b0JBQ3hCLHVCQUF1QjtvQkFDdkIsMEJBQTBCO29CQUMxQixhQUFhO29CQUNiLG9CQUFvQjtpQkFDcEI7YUFDRDtTQUNELENBQUM7SUFDSCxDQUFDOzt3RUE5SVcsWUFBWSxjQStGUSxxQkFBcUIsa0JBQzlCLGlDQUFpQyxrQkFDakMsZ0JBQWdCLGtCQUNoQix3QkFBd0I7OERBbEduQyxZQUFZO21FQUZiLFNBQVMsWUFIWDtZQUNSLFlBQVk7U0FDWjt1RkFHVyxZQUFZO2NBTnhCLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjtnQkFDRCxTQUFTLEVBQUUsU0FBUzthQUNwQjtzQ0FnR3NFLEtBQUs7c0JBQTlELFFBQVE7O3NCQUFJLE1BQU07dUJBQUMscUJBQXFCOzBCQUMrQixLQUFLO3NCQUFyRixRQUFROztzQkFBSSxNQUFNO3VCQUFDLGlDQUFpQzswQkFDRSxLQUFLO3NCQUEzRCxRQUFROztzQkFBSSxNQUFNO3VCQUFDLGdCQUFnQjswQkFDNEIsS0FBSztzQkFBcEUsUUFBUTs7c0JBQUksTUFBTTt1QkFBQyx3QkFBd0I7O3dGQWxHbkMsWUFBWSxjQUp2QixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFByb3ZpZGVyLCBUeXBlLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLyoqXG4gKiBDb21tYW5kXG4gKi9cbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IENvbW1hbmRCdXMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmJ1cyc7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgQ29tbWFuZFN0cmVhbSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuc3RyZWFtJztcbmltcG9ydCB7IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvZmlsdGVyZWQtY29tbWFuZC1zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS1zdG9yZS5yZWdpc3Rlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmJ1cyc7XG5pbXBvcnQgeyBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdG9yZSB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RvcmUnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0cmVhbSc7XG4vKipcbiAqIEFQUFxuICovXG5pbXBvcnQgeyBIZXJtZXNNb2R1bGVDb25maWcgfSBmcm9tICcuL2hlcm1lcy1tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIEVWRU5UX0xPR0dFUl9FTkFCTEVEIH0gZnJvbSAnLi4vZG9tYWluL2hlcm1lcy10b2tlbnMnO1xuaW1wb3J0IHsgSGVybWVzQXBpIH0gZnJvbSAnLi9oZXJtZXMtYXBpJztcbi8qKlxuICogSW5mcmFzdHJ1Y3R1cmVcbiAqL1xuaW1wb3J0IHsgQ29uc29sZUNvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvY29tbWFuZC9jb25zb2xlLmNvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvbm9vcC5jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBDb25zb2xlRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvZXZlbnQvY29uc29sZS5ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgTm9vcEV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L25vb3AuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJy4uLy4uL2NvbW1vbi9yYW5kb20tc3RyaW5nLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIgfSBmcm9tICcuL2hlcm1lcy5sb2dnZXJzLmluaXRpYWxpemVyJztcbmltcG9ydCB7XG5cdGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyRmFjdG9yeSxcblx0Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsXG59IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NyZWF0ZS1hZ2dyZWdhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jcmVhdGUtYWdncmVnYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVycy10b2tlbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSwgQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb25maWcvZGVmaW5lJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbiB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbmZpZy9hZ2dyZWdhdGUtZGVmaW5pdGlvbi50b2tlbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVEZWZpbml0aW9uIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2FnZ3JlZ2F0ZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY3JlYXRlLWFnZ3JlZ2F0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBIZXJtZXNEb21haW5Nb2R1bGUgfSBmcm9tICcuL2hlcm1lcy5kb21haW4ubW9kdWxlJztcbmltcG9ydCB7IENPTU1BTkRfSEFORExFUlMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlcnMnO1xuaW1wb3J0IHsgY29tbWFuZEhhbmRsZXJGYWN0b3J5LCBDb21tYW5kSGFuZGxlckltcGwgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvaGFuZGxlci9jb21tYW5kLmhhbmRsZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBkb21haW5FdmVudEhhbmRsZXJGYWN0b3J5LCBEb21haW5FdmVudEhhbmRsZXJJbXBsLCBtdWx0aURvbWFpbkV2ZW50SGFuZGxlckZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvaGFuZGxlci9kb21haW4tZXZlbnQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IERPTUFJTl9FVkVOVF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvaGFuZGxlci9kb21haW4tZXZlbnQuaGFuZGxlcic7XG5pbXBvcnQgeyBNdWx0aURvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9oYW5kbGVyL211bHRpLWRvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlckluaXRpYWxpemVyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2luaXQvZG9tYWluLWV2ZW50LWhhbmRsZXIuaW5pdGlhbGl6ZXInO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXJJbml0aWFsaXplciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2luaXQvY29tbWFuZC1oYW5kbGVyLmluaXRpYWxpemVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZURlZmluaXRpb25Jbml0aWFsaXplciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbmZpZy9hZ2dyZWdhdGUtZGVmaW5pdGlvbi5pbml0aWFsaXplcic7XG5cblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHR7IHByb3ZpZGU6IEVWRU5UX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogdHJ1ZSB9LFxuXHR7IHByb3ZpZGU6IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiB0cnVlIH0sXG5cdHsgcHJvdmlkZTogQ29tbWFuZExvZ2dlciwgdXNlRmFjdG9yeTogY29tbWFuZExvZ2dlckZhY3RvcnksIGRlcHM6IFtDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBDb25zb2xlQ29tbWFuZExvZ2dlciwgTm9vcENvbW1hbmRMb2dnZXJdIH0sXG5cdHsgcHJvdmlkZTogRG9tYWluRXZlbnRMb2dnZXIsIHVzZUZhY3Rvcnk6IGV2ZW50TG9nZ2VyRmFjdG9yeSwgZGVwczogW0VWRU5UX0xPR0dFUl9FTkFCTEVELCBDb25zb2xlRXZlbnRMb2dnZXIsIE5vb3BFdmVudExvZ2dlcl0gfSxcblx0Q29uc29sZUNvbW1hbmRMb2dnZXIsXG5cdE5vb3BDb21tYW5kTG9nZ2VyLFxuXHROb29wRXZlbnRMb2dnZXIsXG5cdENvbnNvbGVFdmVudExvZ2dlcixcblx0SGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHRBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSxcblx0QWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdFJhbmRvbVN0cmluZ0dlbmVyYXRvcixcblxuXHR7IHByb3ZpZGU6IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNLCB1c2VFeGlzdGluZzogQ29tbWFuZFN0cmVhbSB9LFxuXHRDb21tYW5kQnVzLFxuXHRDb21tYW5kU3RyZWFtLFxuXHRDb21tYW5kRGlzcGF0Y2hlcixcblx0QWdncmVnYXRlU3RvcmVSZWdpc3RlcixcblxuXHREb21haW5FdmVudEJ1cyxcblx0RG9tYWluRXZlbnRTdHJlYW0sXG5cdERvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHREb21haW5FdmVudFN0b3JlLFxuXG5cdEhlcm1lc0FwaVxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmRMb2dnZXJGYWN0b3J5KGVuYWJsZWQ6IGJvb2xlYW4sIGNvbnNvbGVDb21tYW5kTG9nZ2VyOiBDb25zb2xlQ29tbWFuZExvZ2dlciwgbm9vcENvbW1hbmRMb2dnZXI6IE5vb3BDb21tYW5kTG9nZ2VyKSB7XG5cblx0aWYgKGVuYWJsZWQpIHtcblx0XHRyZXR1cm4gY29uc29sZUNvbW1hbmRMb2dnZXI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5vb3BDb21tYW5kTG9nZ2VyO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudExvZ2dlckZhY3RvcnkoZW5hYmxlZDogYm9vbGVhbiwgY29uc29sZUV2ZW50TG9nZ2VyOiBDb25zb2xlRXZlbnRMb2dnZXIsIG5vb3BFdmVudExvZ2dlcjogTm9vcEV2ZW50TG9nZ2VyKSB7XG5cblx0aWYgKGVuYWJsZWQpIHtcblx0XHRyZXR1cm4gY29uc29sZUV2ZW50TG9nZ2VyO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBub29wRXZlbnRMb2dnZXI7XG5cdH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlcm1lc0Jhc2VNb2R1bGU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4sIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj5cblx0ZXh0ZW5kcyBSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVEZWZpbml0aW9uSW5pdGlhbGl6ZXIgPSBuZXcgQWdncmVnYXRlRGVmaW5pdGlvbkluaXRpYWxpemVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kSGFuZGxlckluaXRpYWxpemVyID0gbmV3IENvbW1hbmRIYW5kbGVySW5pdGlhbGl6ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50SGFuZGxlckluaXRpYWxpemVyID0gbmV3IERvbWFpbkV2ZW50SGFuZGxlckluaXRpYWxpemVyKCk7XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChET01BSU5fRVZFTlRfSEFORExFUlMpIGV2ZW50SGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KENSRUFURV9BR0dSRUdBVEVfQ09NTUFORF9IQU5ETEVSUykgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+LFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KENPTU1BTkRfSEFORExFUlMpIGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChhZ2dyZWdhdGVEZWZpbml0aW9uVG9rZW4pIGRlZmluZWRBZ2dyZWdhdGU6IEFycmF5PEFnZ3JlZ2F0ZURlZmluaXRpb248SSwgQT4+LFxuXHRcdFx0XHRpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdGFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlOiBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTxJLCBBPixcblx0XHRcdFx0YWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+LFxuXHRcdFx0XHRjb21tYW5kQnVzOiBDb21tYW5kQnVzLFxuXHRcdFx0XHRkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyOiBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIsXG5cdFx0XHRcdHByaXZhdGUgaGVybWVzQXBpOiBIZXJtZXNBcGkpIHsgLy8gSGVybWVzQXBpIGluaXRpYWxpemF0aW9uXG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLnN0YXJ0KCk7XG5cblx0XHR0aGlzLmNoZWNrTnVsbENvbW1hbmQoY29tbWFuZEJ1cywgY29tbWFuZEhhbmRsZXJzLCBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMpO1xuXHRcdHRoaXMuY2hlY2tDb21tYW5kSGFuZGxlcklzQ29sbGVjdGlvbihjb21tYW5kSGFuZGxlcnMpO1xuXHRcdHRoaXMuY2hlY2tEb21haW5FdmVudEhhbmRsZXJJc0NvbGxlY3Rpb24oZXZlbnRIYW5kbGVycyk7XG5cblxuXHRcdHRoaXMuYWdncmVnYXRlRGVmaW5pdGlvbkluaXRpYWxpemVyLnJlZ2lzdGVyKGRlZmluZWRBZ2dyZWdhdGUsIGluamVjdG9yLCBhZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSwgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUpO1xuXHRcdHRoaXMuY29tbWFuZEhhbmRsZXJJbml0aWFsaXplci5yZWdpc3Rlcihjb21tYW5kSGFuZGxlcnMsIGNvbW1hbmRCdXMpO1xuXHRcdHRoaXMuY29tbWFuZEhhbmRsZXJJbml0aWFsaXplci5yZWdpc3RlckFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycyhhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMsIGNvbW1hbmRCdXMpO1xuXHRcdHRoaXMuZG9tYWluRXZlbnRIYW5kbGVySW5pdGlhbGl6ZXIuaW5pdChldmVudEhhbmRsZXJzLCBkb21haW5FdmVudEJ1cyk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHRcdHRoaXMuaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLnN0b3AoKTtcblx0XHR0aGlzLmNvbW1hbmRIYW5kbGVySW5pdGlhbGl6ZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLmRvbWFpbkV2ZW50SGFuZGxlckluaXRpYWxpemVyLm5nT25EZXN0cm95KCk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTnVsbENvbW1hbmQoXG5cdFx0Y29tbWFuZEJ1czogQ29tbWFuZEJ1cyxcblx0XHRjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4sXG5cdFx0YWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+XG5cdCk6IHZvaWQge1xuXG5cdFx0Y29tbWFuZEJ1c1xuXHRcdFx0Lm9mTnVsbEhhbmRsZXIoY29tbWFuZEhhbmRsZXJzLCBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMpXG5cdFx0XHQucGlwZSh0aGlzLmhlcm1lc1Rha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQykgPT4ge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBDb21tYW5kICR7Y29tbWFuZC50b1N0cmluZygpfSB3YXMgbm90IGludGVyY2VwdGVkIGJ5IGFueSBDb21tYW5kSGFuZGxlci5gKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NvbW1hbmRIYW5kbGVySXNDb2xsZWN0aW9uKGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+Pik6IHZvaWQge1xuXHRcdGlmIChjb21tYW5kSGFuZGxlcnMgJiYgIUFycmF5LmlzQXJyYXkoY29tbWFuZEhhbmRsZXJzKSkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdGNvbnNvbGUud2FybignWW91IG1pZ2h0IHByb3ZpZGVkIGNvbW1hbmRIYW5kbGVyIHdpdGhvdXQgc3BlY2lmeWluZyBcIm11bHRpOiB0cnVlXCIuJyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0RvbWFpbkV2ZW50SGFuZGxlcklzQ29sbGVjdGlvbihldmVudEhhbmRsZXJzOiBBcnJheTxEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+Pik6IHZvaWQge1xuXHRcdGlmIChldmVudEhhbmRsZXJzICYmICFBcnJheS5pc0FycmF5KGV2ZW50SGFuZGxlcnMpKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0Y29uc29sZS53YXJuKCdZb3UgbWlnaHQgcHJvdmlkZWQgZXZlbnRIYW5kbGVyIHdpdGhvdXQgc3BlY2lmeWluZyBcIm11bHRpOiB0cnVlXCIuJyk7XG5cdFx0fVxuXHR9XG5cbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IHByb3ZpZGVyc1xufSlcbmV4cG9ydCBjbGFzcyBIZXJtZXNNb2R1bGUgZXh0ZW5kcyBIZXJtZXNCYXNlTW9kdWxlPGFueSwgYW55LCBhbnksIGFueT4ge1xuXG5cdHN0YXRpYyBkZWZpbmVBZ2dyZWdhdGU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+KFxuXHRcdGFnZ3JlZ2F0ZUtleTogc3RyaW5nLFxuXHRcdGZhY3Rvcnk6IFR5cGU8QWdncmVnYXRlRmFjdG9yeTxJLCBBPj4sXG5cdFx0cmVwb3NpdG9yeTogVHlwZTxBZ2dyZWdhdGVSZXBvc2l0b3J5PEksIEE+Pixcblx0XHRjcmVhdGVDb21tYW5kSGFuZGxlcjogVHlwZTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxBLCBDPj4sXG5cdFx0Y29tbWFuZEhhbmRsZXJzOiBBcnJheTxQcm92aWRlcj4gPSBbXSxcblx0XHRkb21haW5FdmVudEhhbmRsZXJzOiBBcnJheTxQcm92aWRlcj4gPSBbXSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SGVybWVzRG9tYWluTW9kdWxlPiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBIZXJtZXNEb21haW5Nb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFt7XG5cdFx0XHRcdHByb3ZpZGU6IGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbixcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdHVzZVZhbHVlOiB7XG5cdFx0XHRcdFx0a2V5OiBhZ2dyZWdhdGVLZXksXG5cdFx0XHRcdFx0ZmFjdG9yeTogZmFjdG9yeSxcblx0XHRcdFx0XHRyZXBvc2l0b3J5OiByZXBvc2l0b3J5XG5cdFx0XHRcdH1cblx0XHRcdH0sIHtcblx0XHRcdFx0cHJvdmlkZTogYWdncmVnYXRlS2V5LFxuXHRcdFx0XHR1c2VWYWx1ZTogYWdncmVnYXRlS2V5XG5cdFx0XHR9LFxuXHRcdFx0XHRmYWN0b3J5LFxuXHRcdFx0XHRyZXBvc2l0b3J5LFxuXHRcdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDcmVhdGVDb21tYW5kSGFuZGxlcihjcmVhdGVDb21tYW5kSGFuZGxlciwgYWdncmVnYXRlS2V5KSxcblx0XHRcdFx0Y29tbWFuZEhhbmRsZXJzLFxuXHRcdFx0XHRkb21haW5FdmVudEhhbmRsZXJzXG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogSGVybWVzTW9kdWxlQ29uZmlnID0geyBsb2dnZXJzOiBmYWxzZSB9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxIZXJtZXNNb2R1bGU+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEhlcm1lc01vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogcHJvdmlkZXJzXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyByZWdpc3RlckNvbW1hbmRIYW5kbGVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPEk+Pihcblx0XHRjb21tYW5kSGFuZGxlclR5cGU6IFR5cGU8Q29tbWFuZEhhbmRsZXI8QSwgQz4+LFxuXHRcdGFnZ3JlZ2F0ZU5hbWU6IHN0cmluZyk6IEFycmF5PFByb3ZpZGVyPiB7XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRwcm92aWRlOiBjb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdHVzZUNsYXNzOiBjb21tYW5kSGFuZGxlclR5cGVcblx0XHRcdH0sIHtcblx0XHRcdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHRcdFx0dXNlRmFjdG9yeTogY29tbWFuZEhhbmRsZXJGYWN0b3J5LFxuXHRcdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHRcdFx0ZGVwczogW1xuXHRcdFx0XHRcdGNvbW1hbmRIYW5kbGVyVHlwZSxcblx0XHRcdFx0XHRBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSxcblx0XHRcdFx0XHRhZ2dyZWdhdGVOYW1lXG5cdFx0XHRcdF1cblx0XHRcdH1dO1xuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+Pihcblx0XHRkb21haW5FdmVudEhhbmRsZXJUeXBlOiBUeXBlPERvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPj5cblx0KTogQXJyYXk8UHJvdmlkZXI+IHtcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHByb3ZpZGU6IGRvbWFpbkV2ZW50SGFuZGxlclR5cGUsXG5cdFx0XHRcdHVzZUNsYXNzOiBkb21haW5FdmVudEhhbmRsZXJUeXBlXG5cdFx0XHR9LCB7XG5cdFx0XHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHRcdFx0dXNlRmFjdG9yeTogZG9tYWluRXZlbnRIYW5kbGVyRmFjdG9yeSxcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRkb21haW5FdmVudEhhbmRsZXJUeXBlXG5cdFx0XHRcdF1cblx0XHRcdH1dO1xuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyTXVsdGlEb21haW5FdmVudEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KFxuXHRcdGRvbWFpbkV2ZW50SGFuZGxlclR5cGU6IFR5cGU8TXVsdGlEb21haW5FdmVudEhhbmRsZXI8SSwgRT4+XG5cdCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRwcm92aWRlOiBkb21haW5FdmVudEhhbmRsZXJUeXBlLFxuXHRcdFx0XHR1c2VDbGFzczogZG9tYWluRXZlbnRIYW5kbGVyVHlwZVxuXHRcdFx0fSwge1xuXHRcdFx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0XHRcdHVzZUZhY3Rvcnk6IG11bHRpRG9tYWluRXZlbnRIYW5kbGVyRmFjdG9yeSxcblx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRkb21haW5FdmVudEhhbmRsZXJUeXBlXG5cdFx0XHRcdF1cblx0XHRcdH1dO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChET01BSU5fRVZFTlRfSEFORExFUlMpIGV2ZW50SGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlckltcGw8YW55LCBhbnk+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMpIGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPGFueSwgYW55LCBhbnk+Pixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChDT01NQU5EX0hBTkRMRVJTKSBjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxhbnksIGFueSwgYW55Pj4sXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3QoYWdncmVnYXRlRGVmaW5pdGlvblRva2VuKSBkZWZpbmVkQWdncmVnYXRlOiBBcnJheTxBZ2dyZWdhdGVEZWZpbml0aW9uPGFueSwgYW55Pj4sXG5cdFx0XHRcdGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0YWdncmVnYXRlRmFjdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlPGFueSwgYW55Pixcblx0XHRcdFx0YWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPGFueSwgYW55Pixcblx0XHRcdFx0Y29tbWFuZEJ1czogQ29tbWFuZEJ1cyxcblx0XHRcdFx0ZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRoZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXI6IEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcixcblx0XHRcdFx0aGVybWVzQXBpOiBIZXJtZXNBcGkpIHsgLy8gSGVybWVzQXBpIGluaXRpYWxpemF0aW9uXG5cdFx0c3VwZXIoXG5cdFx0XHRldmVudEhhbmRsZXJzLFxuXHRcdFx0YWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzLFxuXHRcdFx0Y29tbWFuZEhhbmRsZXJzLFxuXHRcdFx0ZGVmaW5lZEFnZ3JlZ2F0ZSxcblx0XHRcdGluamVjdG9yLFxuXHRcdFx0YWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsXG5cdFx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSxcblx0XHRcdGNvbW1hbmRCdXMsXG5cdFx0XHRkb21haW5FdmVudEJ1cyxcblx0XHRcdGhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcixcblx0XHRcdGhlcm1lc0FwaVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyByZWdpc3RlckNyZWF0ZUNvbW1hbmRIYW5kbGVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPEk+Pihcblx0XHRjcmVhdGVDb21tYW5kSGFuZGxlclR5cGU6IFR5cGU8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz4+LFxuXHRcdGFnZ3JlZ2F0ZU5hbWU6IHN0cmluZyk6IEFycmF5PFByb3ZpZGVyPiB7XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRwcm92aWRlOiBjcmVhdGVDb21tYW5kSGFuZGxlclR5cGUsXG5cdFx0XHRcdHVzZUNsYXNzOiBjcmVhdGVDb21tYW5kSGFuZGxlclR5cGVcblx0XHRcdH0sIHtcblx0XHRcdFx0cHJvdmlkZTogQ1JFQVRFX0FHR1JFR0FURV9DT01NQU5EX0hBTkRMRVJTLFxuXHRcdFx0XHR1c2VGYWN0b3J5OiBjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3RvcnksXG5cdFx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFx0Y3JlYXRlQ29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHRcdEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLFxuXHRcdFx0XHRcdEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLFxuXHRcdFx0XHRcdGFnZ3JlZ2F0ZU5hbWUsXG5cdFx0XHRcdFx0RG9tYWluRXZlbnRQdWJsaXNoZXJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdF07XG5cdH1cblxufVxuIl19