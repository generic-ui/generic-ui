import { DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { FieldCommandInvoker } from '../api/field.command-invoker';
import { FieldConfig } from '../api/field.config';
import { FieldDispatcher } from './field.dispatcher';
export declare class FieldDomainCommandInvoker extends FieldCommandInvoker {
    private readonly domainEventBus;
    private readonly fieldDispatcher;
    constructor(domainEventBus: DomainEventBus, fieldDispatcher: FieldDispatcher);
    initFields(fieldConfigs: Array<FieldConfig>, structureId: StructureId): void;
}
