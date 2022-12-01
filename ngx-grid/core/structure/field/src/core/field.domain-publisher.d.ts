import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { FieldPublisher } from '../api/field.publisher';
import { FieldConfig } from '../api/config/field.config';
export declare class FieldDomainPublisher extends FieldPublisher {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    static readonly services: readonly [typeof CommandDispatcher];
    initFields(fieldConfigs: Array<FieldConfig>, structureId: StructureId): void;
}
