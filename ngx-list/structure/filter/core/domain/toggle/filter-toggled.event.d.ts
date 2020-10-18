import { StructureId } from '../../../../core/api/structure.id';
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export declare class FilterToggledEvent extends StructureDomainEvent {
    constructor(aggregateId: StructureId);
}
