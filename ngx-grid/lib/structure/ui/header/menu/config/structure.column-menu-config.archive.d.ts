import { Archive } from '../../../../../../common/cdk/archive';
import { StructureColumnMenuConfig } from './structure.column-menu-config';
import { ColumnMenuConfig } from '../../../../ui-api/structure/column-menu-config';
export declare class StructureColumnMenuConfigArchive extends Archive<StructureColumnMenuConfig> {
    constructor();
    nextConfig(config: ColumnMenuConfig): void;
}
