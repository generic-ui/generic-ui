import { OnChanges } from '@angular/core';
import { Gate } from '../../../../../feature/common/src/cdk/component/lib/src/gate';
import { StructureTitlePanelConfigArchive } from '../../panel/banner-panels/title-panel/structure.title-panel.config-archive';
import { StructureFooterPanelConfigArchive } from '../../panel/banner-panels/footer-panel/structure.footer-panel.config-archive';
import { NgChanges } from '../../../../../feature/common/src/cdk/component/lib/src/ng-changes';
import { StructureBannerPanelConfig } from '../../panel/banner-panels/structure-banner-panel.config';
import * as i0 from "@angular/core";
export declare class StructurePanelGate extends Gate implements OnChanges {
    private readonly structureTitlePanelConfigArchive;
    private readonly structureFooterPanelConfigArchive;
    titlePanel: StructureBannerPanelConfig;
    footerPanel: StructureBannerPanelConfig;
    constructor(structureTitlePanelConfigArchive: StructureTitlePanelConfigArchive, structureFooterPanelConfigArchive: StructureFooterPanelConfigArchive);
    ngOnChanges(changes: NgChanges<StructurePanelGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructurePanelGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructurePanelGate, "gui-structure[titlePanel][footerPanel]", never, { "titlePanel": "titlePanel"; "footerPanel": "footerPanel"; }, {}, never, never, false, never>;
}
