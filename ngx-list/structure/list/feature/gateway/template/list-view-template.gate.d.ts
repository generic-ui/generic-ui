import { OnChanges } from '@angular/core';
import { ListViewTemplateArchive } from '../../source/template/list-view-template.archive';
import { ListViewCardTemplateArchive } from '../../card/template/list-view.card-template.archive';
import { ListViewTemplate } from '../../source/template/list-view-template';
import { ListViewCardTemplate } from '../../card/template/list-view.card-template';
import { Gate } from '../../../../../common/cdk/component/gate';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
export declare class ListViewTemplateGate extends Gate implements OnChanges {
    private readonly containerTemplateArchive;
    private readonly listCardTemplateArchive;
    template: ListViewTemplate;
    cardTemplate: ListViewCardTemplate;
    constructor(containerTemplateArchive: ListViewTemplateArchive, listCardTemplateArchive: ListViewCardTemplateArchive);
    ngOnChanges(changes: NgChanges<ListViewTemplateGate>): void;
}
