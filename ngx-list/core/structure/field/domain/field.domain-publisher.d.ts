import { StructureId } from '../../core/api/global/structure.id';
import { FieldPublisher } from '../api/field.publisher';
import { FieldConfig } from '../api/config/field.config';
import { FieldDispatcher } from './field.dispatcher';
export declare class FieldDomainPublisher extends FieldPublisher {
    private readonly fieldDispatcher;
    constructor(fieldDispatcher: FieldDispatcher);
    static readonly services: readonly [typeof FieldDispatcher];
    initFields(fieldConfigs: Array<FieldConfig>, structureId: StructureId): void;
}
