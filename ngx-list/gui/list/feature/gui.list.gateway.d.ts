import { OnChanges, SimpleChanges } from '@angular/core';
import { GuiListItemComponent } from './item/gui.list-item.component';
import { GuiListPaging, GuiListView } from '../domain-api/gui.list.api';
import { GuiListPagingConverter } from './paging/gui-list.paging.converter';
import { GuiListCardComponent } from './card/gui.list-card.component';
import { ListCardTemplate } from '../../../structure/list/feature/card/template/list.card-template';
import { ContainerTemplate } from '../../../structure/list/feature/source/template/container-template';
import { GuiListModeConverter } from './mode/gui-list.mode.converter';
import { ListViewMode } from '../../../structure/list/domain/mode/list-view-mode';
export declare abstract class GuiListGateway implements OnChanges {
    listItem: GuiListItemComponent;
    listCard: GuiListCardComponent;
    source: Array<any>;
    template: (item: any) => string;
    cardTemplate: (item: any) => string;
    paging: boolean | GuiListPaging;
    view: GuiListView;
    containerTemplate: ContainerTemplate;
    listCardTemplate: ListCardTemplate;
    listViewMode: ListViewMode;
    listViewModeSelector: boolean;
    guiListPagingConverter: GuiListPagingConverter;
    guiListModeConverter: GuiListModeConverter;
    ngOnChanges(changes: SimpleChanges): void;
}
