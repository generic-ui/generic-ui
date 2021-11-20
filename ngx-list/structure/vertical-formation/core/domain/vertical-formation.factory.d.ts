import { Logger } from '../../../../common/cdk/logger/logger';
import { VerticalFormation } from './vertical-formation';
import { StructureId } from '../../../core/api/structure.id';
export declare class VerticalFormationFactory {
    private readonly logger;
    constructor(logger: Logger);
    create(structureId: StructureId, enabled?: boolean, viewportHeight?: number, sourceSize?: number, scrollPosition?: number, rowHeight?: number, hiddenItemsTop?: number, hiddenItemsBottom?: number): VerticalFormation;
}
