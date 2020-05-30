import { PureComponent } from '../../../../../common/cdk/pure-component';
import { ListViewCardTemplate } from '../template/list-view.card-template';
export declare class ListViewCardItemComponent extends PureComponent {
    item: any;
    template: ListViewCardTemplate;
    context: string;
    hasTemplateRef: boolean;
    constructor();
    ngOnChanges(): void;
}
