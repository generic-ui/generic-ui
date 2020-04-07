import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSourceOriginRepository } from './structure.source-origin.repository';
import { OriginSetEvent } from '../../../domain/source/origin/set-origin/origin-set.event';
export declare class StructureOriginChangedEventHandler extends DomainEventHandler {
    private structureSourceOriginRepository;
    constructor(structureSourceOriginRepository: StructureSourceOriginRepository);
    handle(event: OriginSetEvent): void;
}
