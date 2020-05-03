import { OnChanges, SimpleChanges } from '@angular/core';
import { GuiListItemComponent } from './item/gui.list-item.component';
import { ContanierTemplate } from '../../../lib/container/template/contanier-template';
export declare abstract class GuiListGateway implements OnChanges {
    listItem: GuiListItemComponent;
    items: Array<any>;
    template: (item: any) => string;
    containerTemplate: ContanierTemplate;
    ngOnChanges(changes: SimpleChanges): void;
}
