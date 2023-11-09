import { ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../core/composition/src/core-read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../../feature/common/component/src/smart-component';
import { StructureColumnMenuConfigArchive } from './structure.column-menu-config.archive';
import { StructureColumnMenuConfig } from './structure.column-menu-config';
import { TranslationFacade } from '../../../../../../core/l10n/src/api/translation.facade';
import { HermesObservable } from '@generic-ui/hermes';
import { CompositionId } from '../../../../../../core/composition/src/api/global/composition.id';
import { CompositionPublisher } from '../../../../../../core/composition/src/api/composition.publisher';
import { Translation } from '../../../../../../core/l10n/src/api/translation';
import { GuiState } from '../../../../../../feature/gui-angular/state/gui.state';
import * as i0 from "@angular/core";
export interface StructureColumnConfigComponentState {
    isEnabled: boolean;
    config: StructureColumnMenuConfig;
    translations: Translation;
}
export declare class StructureColumnConfigComponent extends SmartComponent {
    private readonly changeDetectorRef;
    private readonly state;
    private readonly translationFacade;
    private readonly structureColumnMenuConfigArchive;
    private readonly compositionId;
    private readonly compositionCommandInvoker;
    private readonly injector;
    readonly column: CellTemplateWithContext;
    readonly headerSortMenu?: ElementRef;
    readonly state$: HermesObservable<StructureColumnConfigComponentState>;
    private readonly structureColumnConfigService;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, state: GuiState<StructureColumnConfigComponentState>, translationFacade: TranslationFacade, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, compositionId: CompositionId, compositionCommandInvoker: CompositionPublisher, injector: Injector, column: CellTemplateWithContext);
    isEnabled(config: StructureColumnMenuConfig): boolean;
    hideColumn(): void;
    moveLeft(): void;
    moveRight(): void;
    highlightColumn(): void;
    protected getSelectorName(): string;
    private selectIsEnabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureColumnConfigComponent, "div[gui-column-config]", never, {}, {}, never, never, false, never>;
}
