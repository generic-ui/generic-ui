import { InfoPanelConfig } from './info-panel.config';
import { StructureInfoPanelArchive } from './structure.info-panel.archive';
import { StructureInfoPanelConfigConverter } from './structure.info-panel.config-converter';
export declare class StructureInfoPanelConfigService {
    private structureInfoPanelConfigConverter;
    private structureInfoPanelArchive;
    constructor(structureInfoPanelConfigConverter: StructureInfoPanelConfigConverter, structureInfoPanelArchive: StructureInfoPanelArchive);
    set(config: InfoPanelConfig): void;
}
