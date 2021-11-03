import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../core/domain/structure-aggregate.repository';
import { SetPagingCommand } from './set-paging.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class SetPagingCommandHandler implements CommandHandler<StructureAggregate, SetPagingCommand> {
    private structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetPagingCommand>;
    handle(structureAggregate: StructureAggregate, command: SetPagingCommand): void;
    publish(aggregate: StructureAggregate, command: SetPagingCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetPagingCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetPagingCommandHandler>;
}
//# sourceMappingURL=set-paging.command-handler.d.ts.map