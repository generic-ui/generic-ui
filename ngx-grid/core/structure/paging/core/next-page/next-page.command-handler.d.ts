import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { NextPageCommand } from './next-page.command';
import { StructureAggregate } from '../../../structure-core/domain/structure.aggregate';
export declare class NextPageCommandHandler implements CommandHandler<StructureAggregate, NextPageCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<NextPageCommand>;
    handle(aggregate: StructureAggregate, command: NextPageCommand): void;
    publish(aggregate: StructureAggregate, command: NextPageCommand): void;
}
