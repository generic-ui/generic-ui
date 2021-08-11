import { OnChanges } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import { StructureTitlePanelConfigArchive } from '../../panel/banner-panels/title-panel/structure.title-panel.config-archive';
import { StructureFooterPanelConfigArchive } from '../../panel/banner-panels/footer-panel/structure.footer-panel.config-archive';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
import { StructureBannerPanelConfig } from '../../panel/banner-panels/structure-banner-panel.config';
export declare class StructurePanelGate extends Gate implements OnChanges {
    private readonly structureTitlePanelConfigArchive;
    private readonly structureFooterPanelConfigArchive;
    titlePanel: StructureBannerPanelConfig;
    footerPanel: StructureBannerPanelConfig;
    constructor(structureTitlePanelConfigArchive: StructureTitlePanelConfigArchive, structureFooterPanelConfigArchive: StructureFooterPanelConfigArchive);
    ngOnChanges(changes: NgChanges<StructurePanelGate>): void;
}
