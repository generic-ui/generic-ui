import { AggregateDefinitionInitializer } from '../../domain/command/config/aggregate-definition.initializer';
import { CommandHandlerInitializer } from '../../domain/command/init/command-handler.initializer';
import { DomainEventHandlerInitializer } from '../../domain/event/init/domain-event-handler.initializer';
import { CommandBus } from '../../domain/command/command.bus';
import { AggregateDefinition } from '../../domain/command/config/aggregate-definition';
import { DomainEventHandlerImpl } from '../../domain/event/handler/domain-event-handler-impl';
import { CreateAggregateCommandHandlerImpl } from '../../domain/command/create-aggregate/create-aggregate.command-handler-impl';
import { CommandHandlerImpl } from '../../domain/command/handler/command-handler-impl';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { AggregateRoot } from '../tactical/aggregate/aggregate-root';
import { Command } from '../command/command';
import { DomainEvent } from '../event/domain-event';
import { Reactive } from '../../../common/reactive/reactive';
export declare class HermesRunner<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>, E extends DomainEvent<I>> extends Reactive {
    private readonly aggregateDefinitionInitializer;
    private readonly commandHandlerInitializer;
    private readonly domainEventHandlerInitializer;
    private readonly commandBus;
    private readonly definedAggregate;
    private readonly eventHandlers;
    private readonly aggregateCommandHandlers;
    private readonly commandHandlers;
    private started;
    constructor(aggregateDefinitionInitializer: AggregateDefinitionInitializer<I, A>, commandHandlerInitializer: CommandHandlerInitializer<I, A, C>, domainEventHandlerInitializer: DomainEventHandlerInitializer<I, E>, commandBus: CommandBus, definedAggregate: Array<AggregateDefinition<I, A>>, eventHandlers: Array<DomainEventHandlerImpl<I, E>>, aggregateCommandHandlers: Array<CreateAggregateCommandHandlerImpl<I, A, C>>, commandHandlers: Array<CommandHandlerImpl<I, A, C>>);
    static readonly services: readonly [typeof AggregateDefinitionInitializer, typeof CommandHandlerInitializer, typeof DomainEventHandlerInitializer, typeof CommandBus, {
        readonly inject: "Hermes - aggregateDefinitionToken";
        readonly collection: true;
    }, {
        readonly inject: "HERMES - DOMAIN_EVENT_HANDLERS_TOKEN";
        readonly collection: true;
        readonly optional: true;
    }, {
        readonly inject: "HERMES - CREATE_AGGREGATE_COMMAND_HANDLERS";
        readonly collection: true;
        readonly optional: true;
    }, {
        readonly inject: "HERMES - COMMAND_HANDLERS_TOKEN";
        readonly collection: true;
        readonly optional: true;
    }];
    run(): void;
    destroy(): void;
    private checkNullCommand;
    private checkCommandHandlerIsCollection;
    private checkDomainEventHandlerIsCollection;
}
