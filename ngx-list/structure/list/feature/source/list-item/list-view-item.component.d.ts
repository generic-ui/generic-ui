import { PureComponent } from '../../../../../common/cdk/pure-component';
import { ListViewTemplate } from '../template/list-view-template';
export declare class ListViewItemComponent extends PureComponent {
    item: any;
    template: ListViewTemplate;
    context: string;
    hasTemplateRef: boolean;
    constructor();
    ngOnChanges(): void;
}
