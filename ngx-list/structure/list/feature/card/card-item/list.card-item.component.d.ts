import { PureComponent } from '../../../../../common/cdk/pure-component';
import { ListCardTemplate } from '../template/list.card-template';
export declare class ListCardItemComponent extends PureComponent {
    item: any;
    template: ListCardTemplate;
    context: string;
    hasTemplateRef: boolean;
    constructor();
    ngOnChanges(): void;
}
