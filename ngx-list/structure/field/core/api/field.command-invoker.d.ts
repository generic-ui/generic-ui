import { CommandDispatcher, CommandInvoker, DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { FieldConfig } from './field.config';
export declare class FieldCommandInvoker implements CommandInvoker {
    private readonly domainEventBus;
    private readonly commandDispatcher;
    constructor(domainEventBus: DomainEventBus, commandDispatcher: CommandDispatcher);
    initFields(fieldConfigs: Array<FieldConfig>, structureId?: StructureId): void;
}
