import { Logger } from '../../../../../../common/cdk/logger/logger';
import { VerticalFormation } from './vertical-formation';
export declare class VerticalFormationFactory {
    private logger;
    constructor(logger: Logger);
    create(enabled?: boolean, viewportHeight?: number, sourceSize?: number, scrollPosition?: number, rowHeight?: number, hiddenItemsTop?: number, hiddenItemsBottom?: number): VerticalFormation;
}
