import { ListViewComponent } from './list-view.component';
import { PagingFeatureModule } from '../../paging/feature/paging.feature-module';
export declare class ListViewFeatureModule {
    private readonly paging;
    static exportDeclarations: (typeof ListViewComponent | typeof import("./gate/paging/list-view-paging.gate").ListViewPagingGate | typeof import("./gate/mode/list-view-mode.gate").ListViewModeGate | typeof import("./gate/template/list-view-template.gate").ListViewTemplateGate | typeof import("./gate/field/list-view-field.gate").ListViewFieldGate | typeof import("./gate/searching/list-view-searching.gate").ListViewSearchingGate | typeof import("./gate/l10n/list-view-l10n.gate").ListViewL10nGate | typeof import("./gate/source/list-view-source.gate").ListViewSourceGate | (typeof import("./gate/paging/list-view-paging.gate").ListViewPagingGate | typeof import("./gate/mode/list-view-mode.gate").ListViewModeGate | typeof import("./gate/template/list-view-template.gate").ListViewTemplateGate | typeof import("./gate/field/list-view-field.gate").ListViewFieldGate | typeof import("./gate/searching/list-view-searching.gate").ListViewSearchingGate | typeof import("./gate/l10n/list-view-l10n.gate").ListViewL10nGate | typeof import("./gate/source/list-view-source.gate").ListViewSourceGate)[])[];
    constructor(paging: PagingFeatureModule);
}
