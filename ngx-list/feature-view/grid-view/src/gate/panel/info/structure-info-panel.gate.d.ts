import { OnChanges } from '@angular/core';
import { InfoPanelConfig } from '../../../../../../core/structure/structure-core/src/api/panel/info/info-panel.config';
import { Gate } from '../../../../../../feature/common/src/cdk/component/lib/src/gate';
import { StructureInfoPanelConfigService } from './structure.info-panel-config.service';
import { NgChanges } from '../../../../../../feature/common/src/cdk/component/lib/src/ng-changes';
import * as i0 from "@angular/core";
export declare class StructureInfoPanelGate extends Gate implements OnChanges {
    protected readonly structureInfoPanelConfigService: StructureInfoPanelConfigService;
    infoPanel: boolean | InfoPanelConfig;
    constructor(structureInfoPanelConfigService: StructureInfoPanelConfigService);
    ngOnChanges(changes: NgChanges<StructureInfoPanelGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureInfoPanelGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureInfoPanelGate, "gui-structure[infoPanel]", never, { "infoPanel": "infoPanel"; }, {}, never, never, false, never>;
}
