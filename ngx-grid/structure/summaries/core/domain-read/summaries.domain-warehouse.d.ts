import { SummariesEnabledArchive } from '../domain/enabled/summaries-enabled-archive.service';
import { StructureId } from '../../../core/api/structure.id';
import { SummariesWarehouse } from '../api/summaries.warehouse';
import { HermesObservable } from '@generic-ui/hermes';
export declare class SummariesDomainWarehouse extends SummariesWarehouse {
    private structureSummariesRepository;
    constructor(structureSummariesRepository: SummariesEnabledArchive);
    onSummariesEnabled(structureId: StructureId): HermesObservable<boolean>;
}
