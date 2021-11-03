import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { InitFieldsCommand } from './init-fields.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class InitFieldsCommandHandler implements CommandHandler<StructureAggregate, InitFieldsCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<InitFieldsCommand>;
    handle(structure: StructureAggregate, command: InitFieldsCommand): void;
    publish(aggregate: StructureAggregate, command: InitFieldsCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InitFieldsCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InitFieldsCommandHandler>;
}
//# sourceMappingURL=init-fields.command-handler.d.ts.map