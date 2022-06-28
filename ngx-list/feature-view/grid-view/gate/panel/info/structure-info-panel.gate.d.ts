import { OnChanges } from '@angular/core';
import { InfoPanelConfig } from '../../../../../core/structure/structure-core/api/panel/info/info-panel.config';
import { Gate } from '../../../../../feature/common/cdk/component/gate';
import { StructureInfoPanelConfigService } from '../../../../../core/structure/structure-core/api/panel/info/structure.info-panel-config.service';
import { NgChanges } from '../../../../../feature/common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare class StructureInfoPanelGate extends Gate implements OnChanges {
    protected readonly structureInfoPanelConfigService: StructureInfoPanelConfigService;
    infoPanel: boolean | InfoPanelConfig;
    constructor(structureInfoPanelConfigService: StructureInfoPanelConfigService);
    ngOnChanges(changes: NgChanges<StructureInfoPanelGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureInfoPanelGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureInfoPanelGate, "gui-structure[infoPanel]", never, { "infoPanel": "infoPanel"; }, {}, never, never, false>;
}
