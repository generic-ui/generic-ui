import { PureComponent } from '../../../../../common/cdk/pure-component';
import { ContainerTemplate } from '../template/container-template';
export declare class ContainerListItemComponent extends PureComponent {
    item: any;
    template: ContainerTemplate;
    context: string;
    hasTemplateRef: boolean;
    constructor();
    ngOnChanges(): void;
}
