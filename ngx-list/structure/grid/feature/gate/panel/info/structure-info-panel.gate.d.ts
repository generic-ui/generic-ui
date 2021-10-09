import { OnChanges } from '@angular/core';
import { InfoPanelConfig } from '../../../../core/api/panel/info/info-panel.config';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { StructureInfoPanelConfigService } from '../../../../core/api/panel/info/structure.info-panel-config.service';
import { NgChanges } from '../../../../../../common/cdk/component/ng-changes';
export declare class StructureInfoPanelGate extends Gate implements OnChanges {
    protected readonly structureInfoPanelConfigService: StructureInfoPanelConfigService;
    infoPanel: boolean | InfoPanelConfig;
    constructor(structureInfoPanelConfigService: StructureInfoPanelConfigService);
    ngOnChanges(changes: NgChanges<StructureInfoPanelGate>): void;
}
