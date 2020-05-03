import { PureComponent } from '../../../../common/cdk/pure-component';
import { ContanierTemplate } from '../../template/contanier-template';
export declare class ContainerListItemComponent extends PureComponent {
    item: any;
    template: ContanierTemplate;
    context: string;
    hasTemplateRef: boolean;
    constructor();
    ngOnChanges(): void;
}
