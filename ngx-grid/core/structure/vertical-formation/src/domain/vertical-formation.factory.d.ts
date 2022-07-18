import { Logger } from '../../../../../feature/common/src/cdk/logger/logger';
import { VerticalFormation } from './vertical-formation';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
export declare class VerticalFormationFactory {
    private readonly logger;
    constructor(logger: Logger);
    static readonly services: (typeof Logger)[];
    create(structureId: StructureId, enabled?: boolean, viewportHeight?: number, sourceSize?: number, scrollPosition?: number, rowHeight?: number, hiddenItemsTop?: number, hiddenItemsBottom?: number): VerticalFormation;
}
