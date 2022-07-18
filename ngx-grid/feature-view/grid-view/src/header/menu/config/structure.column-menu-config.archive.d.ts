import { Archive } from '@generic-ui/hermes';
import { StructureColumnMenuConfig } from './structure.column-menu-config';
import { ColumnMenuConfig } from '../../../../../../core/structure/structure-core/src/api/config/column-menu-config';
import * as i0 from "@angular/core";
export declare class StructureColumnMenuConfigArchive extends Archive<StructureColumnMenuConfig> {
    constructor();
    nextConfig(config: ColumnMenuConfig): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnMenuConfigArchive, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureColumnMenuConfigArchive>;
}
