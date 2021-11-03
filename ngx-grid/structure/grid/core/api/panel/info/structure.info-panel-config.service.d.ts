import { InfoPanelConfig } from './info-panel.config';
import { StructureInfoPanelArchive } from './structure.info-panel.archive';
import { StructureInfoPanelConfigConverter } from './structure.info-panel.config-converter';
import * as i0 from "@angular/core";
export declare class StructureInfoPanelConfigService {
    private structureInfoPanelConfigConverter;
    private structureInfoPanelArchive;
    constructor(structureInfoPanelConfigConverter: StructureInfoPanelConfigConverter, structureInfoPanelArchive: StructureInfoPanelArchive);
    set(config: InfoPanelConfig): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureInfoPanelConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureInfoPanelConfigService>;
}
//# sourceMappingURL=structure.info-panel-config.service.d.ts.map