import { Logger } from '../../../../common/cdk/logger/logger';
import { VerticalFormation } from './vertical-formation';
import { StructureId } from '../../../core/api/structure.id';
import * as i0 from "@angular/core";
export declare class VerticalFormationFactory {
    private logger;
    constructor(logger: Logger);
    create(structureId: StructureId, enabled?: boolean, viewportHeight?: number, sourceSize?: number, scrollPosition?: number, rowHeight?: number, hiddenItemsTop?: number, hiddenItemsBottom?: number): VerticalFormation;
    static ɵfac: i0.ɵɵFactoryDeclaration<VerticalFormationFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<VerticalFormationFactory>;
}
//# sourceMappingURL=vertical-formation.factory.d.ts.map