import { Archive } from '@generic-ui/hermes';
import { StructureColumnMenuConfig } from './structure.column-menu-config';
import { ColumnMenuConfig } from '../../../../ui-api/column-menu-config';
export declare class StructureColumnMenuConfigArchive extends Archive<StructureColumnMenuConfig> {
    constructor();
    nextConfig(config: ColumnMenuConfig): void;
}
