import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { FieldConfig } from './field.config';
export declare class FieldCommandDispatcher {
    private readonly domainEventBus;
    private readonly commandDispatcher;
    constructor(domainEventBus: DomainEventBus, commandDispatcher: CommandDispatcher);
    initFields(fieldConfigs: Array<FieldConfig>, structureId?: StructureId): void;
}
