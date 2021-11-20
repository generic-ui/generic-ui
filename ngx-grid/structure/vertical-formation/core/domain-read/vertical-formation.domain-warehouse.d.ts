import { VerticalFormationRepository } from './vertical-formation.repository';
import { VerticalFormationScrollBarPositionArchive } from './scroll-bar/vertical-formation.scroll-bar-position.archive';
import { StructureId } from '../../../core/api/structure.id';
import { HermesObservable } from '@generic-ui/hermes';
import { VerticalFormationWarehouse } from '../api/vertical-formation.warehouse';
export declare class VerticalFormationDomainWarehouse extends VerticalFormationWarehouse {
    private readonly verticalFormationRepository;
    private readonly positionRepository;
    constructor(verticalFormationRepository: VerticalFormationRepository, positionRepository: VerticalFormationScrollBarPositionArchive);
    onVerticalScrollEnabled(structureId: StructureId): HermesObservable<boolean>;
    onRowHeight(structureId: StructureId): HermesObservable<number>;
    onContainerHeight(structureId: StructureId): HermesObservable<number>;
    onTopMargin(structureId: StructureId): HermesObservable<number>;
    onScrollBarPosition(structureId: StructureId): HermesObservable<number>;
}
