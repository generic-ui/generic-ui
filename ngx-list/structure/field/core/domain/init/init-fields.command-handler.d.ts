import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { InitFieldsCommand } from './init-fields.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class InitFieldsCommandHandler implements CommandHandler<StructureAggregate, InitFieldsCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<InitFieldsCommand>;
    publish(aggregate: StructureAggregate, command: InitFieldsCommand): void;
    handle(structure: StructureAggregate, command: InitFieldsCommand): void;
}
