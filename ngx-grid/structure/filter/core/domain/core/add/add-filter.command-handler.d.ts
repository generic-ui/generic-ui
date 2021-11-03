import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { AddFilterCommand } from './add-filter.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class AddFilterCommandHandler implements CommandHandler<StructureAggregate, AddFilterCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<AddFilterCommand>;
    handle(structure: StructureAggregate, command: AddFilterCommand): void;
    publish(aggregate: StructureAggregate, command: AddFilterCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddFilterCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AddFilterCommandHandler>;
}
//# sourceMappingURL=add-filter.command-handler.d.ts.map