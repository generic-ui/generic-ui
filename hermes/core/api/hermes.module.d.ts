import { ModuleWithProviders, OnDestroy, Type } from '@angular/core';
/**
 * Command
 */
import { AggregateRoot } from './tactical/aggregate/aggregate-root';
import { Command } from './command/command';
import { DomainEvent } from './event/domain-event';
/**
 * APP
 */
import { HermesApi } from './hermes-api';
/**
 * Infrastructure
 */
import { ConsoleCommandLogger } from '../infrastructure/logger/command/console.command.logger';
import { NoopCommandLogger } from '../infrastructure/logger/command/noop.command.logger';
import { ConsoleEventLogger } from '../infrastructure/logger/event/console.event.logger';
import { NoopEventLogger } from '../infrastructure/logger/event/noop.event.logger';
import { HermesLoggersInitializer } from './hermes.loggers.initializer';
import { AggregateFactory } from './tactical/aggregate/aggregate-factory';
import { AggregateRepository } from './tactical/aggregate/aggregate-repository';
import { CreateAggregateCommandHandler } from '../domain/command/create-aggregate/create-aggregate.command-handler';
import { CommandHandler } from '../domain/command/handler/command.handler';
import { AggregateId } from './tactical/aggregate/aggregate-id';
import { Reactive } from '../../common/reactive/reactive';
import { DomainEventHandler } from './event/domain-event.handler';
import { MultiDomainEventHandler } from './event/multi-domain-event.handler';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare function commandLoggerFactory(enabled: boolean, consoleCommandLogger: ConsoleCommandLogger, noopCommandLogger: NoopCommandLogger): ConsoleCommandLogger | NoopCommandLogger;
export declare function eventLoggerFactory(enabled: boolean, consoleEventLogger: ConsoleEventLogger, noopEventLogger: NoopEventLogger): NoopEventLogger | ConsoleEventLogger;
export declare class HermesBaseModule extends Reactive implements OnDestroy {
    private readonly hermesLoggersInitializer;
    private readonly hermesApi;
    private readonly hermesRunner;
    constructor(hermesLoggersInitializer: HermesLoggersInitializer, hermesApi: HermesApi);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HermesBaseModule, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HermesBaseModule>;
}
export declare class HermesModule extends HermesBaseModule {
    constructor(hermesLoggersInitializer: HermesLoggersInitializer, hermesApi: HermesApi);
    static defineAggregate<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>>(aggregateKey: string, createCommandHandler: Type<CreateAggregateCommandHandler<C>>, factory: Type<AggregateFactory<I, A>>, repository: Type<AggregateRepository<I, A>>): void;
    static withConfig(): ModuleWithProviders<HermesModule>;
    static registerCommandHandler<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>>(commandHandlerType: Type<CommandHandler<A, C>>, aggregateName: string): void;
    static registerDomainEventHandler<I extends AggregateId, E extends DomainEvent<I>>(domainEventHandlerType: Type<DomainEventHandler<I, E>>): void;
    static registerMultiDomainEventHandler<I extends AggregateId, E extends DomainEvent<I>>(domainEventHandlerType: Type<MultiDomainEventHandler<I, E>>): void;
    private static registerCreateCommandHandler;
    static ɵfac: i0.ɵɵFactoryDeclaration<HermesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<HermesModule, never, [typeof i1.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<HermesModule>;
}
