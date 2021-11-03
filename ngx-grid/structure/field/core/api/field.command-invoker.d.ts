import { CommandDispatcher, CommandInvoker, DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { FieldConfig } from './field.config';
import * as i0 from "@angular/core";
export declare class FieldCommandInvoker implements CommandInvoker {
    private readonly domainEventBus;
    private readonly commandDispatcher;
    constructor(domainEventBus: DomainEventBus, commandDispatcher: CommandDispatcher);
    initFields(fieldConfigs: Array<FieldConfig>, structureId: StructureId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldCommandInvoker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FieldCommandInvoker>;
}
//# sourceMappingURL=field.command-invoker.d.ts.map