import { VerticalFormationRepository } from '../api/vertical-formation.repository';
import { VerticalFormationScrollBarPositionArchive } from './scroll-bar/vertical-formation.scroll-bar-position.archive';
import { StructureId } from '../../../core/api/structure.id';
import { HermesObservable } from '@generic-ui/hermes';
import { VerticalFormationWarehouse } from '../api/vertical-formation.warehouse';
import * as i0 from "@angular/core";
export declare class VerticalFormationDomainWarehouse extends VerticalFormationWarehouse {
    private readonly verticalFormationRepository;
    private readonly positionRepository;
    constructor(verticalFormationRepository: VerticalFormationRepository, positionRepository: VerticalFormationScrollBarPositionArchive);
    onVerticalScrollEnabled(structureId: StructureId): HermesObservable<boolean>;
    onRowHeight(structureId: StructureId): HermesObservable<number>;
    onContainerHeight(structureId: StructureId): HermesObservable<number>;
    onTopMargin(structureId: StructureId): HermesObservable<number>;
    onScrollBarPosition(structureId: StructureId): HermesObservable<number>;
    static ɵfac: i0.ɵɵFactoryDeclaration<VerticalFormationDomainWarehouse, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<VerticalFormationDomainWarehouse>;
}
//# sourceMappingURL=vertical-formation.domain-warehouse.d.ts.map