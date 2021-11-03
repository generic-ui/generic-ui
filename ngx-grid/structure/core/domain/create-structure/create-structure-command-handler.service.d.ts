import { AggregateRepository, CommandType, CreateAggregateCommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../structure-aggregate.repository';
import { CreateStructureCommand } from './create-structure.command';
import { StructureAggregate } from '../structure.aggregate';
import { StructureId } from '../../api/structure.id';
import * as i0 from "@angular/core";
export declare class CreateStructureCommandHandler implements CreateAggregateCommandHandler<StructureAggregate, CreateStructureCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<CreateStructureCommand> | any;
    getAggregateRepository(): AggregateRepository<StructureId, StructureAggregate>;
    publishDomainEvents(aggregate: StructureAggregate, command: CreateStructureCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateStructureCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateStructureCommandHandler>;
}
//# sourceMappingURL=create-structure-command-handler.service.d.ts.map