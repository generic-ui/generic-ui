import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigQuickFilterCommand } from './set-config-quick-filter.command';
import { StructureAggregateRepository } from '../../../../core/domain/structure-aggregate.repository';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class SetConfigQuickFilterCommandHandler implements CommandHandler<StructureAggregate, SetConfigQuickFilterCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetConfigQuickFilterCommand>;
    handle(aggregate: StructureAggregate, command: SetConfigQuickFilterCommand): void;
    publish(aggregate: StructureAggregate, command: SetConfigQuickFilterCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetConfigQuickFilterCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetConfigQuickFilterCommandHandler>;
}
//# sourceMappingURL=set-config-quick-filter.command-handler.d.ts.map