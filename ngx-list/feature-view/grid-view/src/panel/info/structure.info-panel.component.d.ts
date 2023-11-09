import { ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import { StructureInfoModalComponent } from './info-modal/structure-info-modal.component';
import { SourceWarehouse } from '../../../../../core/structure/source/src/api/source.warehouse';
import { StructureDialogColumnManagerService } from '../../column-manager/dialog/structure.dialog-column-manager.service';
import { CompositionId } from '../../../../../core/composition/src/api/global/composition.id';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { SchemaReadModelRootId } from '../../../../../core/schema/src/api/global/schema.read-model-root-id';
import { StructureInfoPanelArchive } from '../../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.archive';
import { StructureInfoPanelConfig } from '../../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.config';
import { StructureDialogSchemaManagerService } from '../../../../../feature/schema/src/manager/dialog/structure.dialog-schema-manager.service';
import { TranslationFacade } from '../../../../../core/l10n/src/api/translation.facade';
import { Translation } from '../../../../../core/l10n/src/api/translation';
import { GuiState } from '../../../../../feature/gui-angular/state/gui.state';
import * as i0 from "@angular/core";
export interface StructureInfoPanelComponentState {
    translations: Translation;
    infoPanelConfig: StructureInfoPanelConfig;
    preparedItemsSize: number;
}
export declare class StructureInfoPanelComponent extends SmartComponent {
    private readonly changeDetectorRef;
    private readonly injector;
    private readonly state;
    private readonly sourceWarehouse;
    private readonly dialog;
    private readonly compositionId;
    private readonly structureId;
    private readonly schemaReadModelRootId;
    private readonly menuColumnManagerService;
    private readonly translationService;
    private readonly schemaManagerService;
    private readonly structureInfoPanelArchive;
    state$: import("@generic-ui/hermes").HermesObservable<StructureInfoPanelComponentState>;
    totalItemsSize$: import("@generic-ui/hermes").HermesObservable<number>;
    infoModal: typeof StructureInfoModalComponent;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, injector: Injector, state: GuiState<StructureInfoPanelComponentState>, sourceWarehouse: SourceWarehouse, dialog: FabricDialogService, compositionId: CompositionId, structureId: StructureId, schemaReadModelRootId: SchemaReadModelRootId, menuColumnManagerService: StructureDialogColumnManagerService, translationService: TranslationFacade, schemaManagerService: StructureDialogSchemaManagerService, structureInfoPanelArchive: StructureInfoPanelArchive);
    openInfo(): void;
    openColumnManager(): void;
    openSchemaManager(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureInfoPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureInfoPanelComponent, "div[gui-structure-info-panel]", never, {}, {}, never, never, false, never>;
}
