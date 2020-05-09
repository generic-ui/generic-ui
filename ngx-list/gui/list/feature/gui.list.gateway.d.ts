import { OnChanges, SimpleChanges } from '@angular/core';
import { GuiListItemComponent } from './item/gui.list-item.component';
import { ContanierTemplate } from '../../../structure/list/feature/template/contanier-template';
import { GuiListPaging } from '../domain-api/gui.list.api';
import { GuiListPagingConverter } from './paging/gui-list.paging.converter';
export declare abstract class GuiListGateway implements OnChanges {
    listItem: GuiListItemComponent;
    items: Array<any>;
    template: (item: any) => string;
    paging: boolean | GuiListPaging;
    containerTemplate: ContanierTemplate;
    guiListPagingConverter: GuiListPagingConverter;
    ngOnChanges(changes: SimpleChanges): void;
}
