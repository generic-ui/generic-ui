import { OnChanges } from '@angular/core';
import { ListViewTemplateArchive } from '../../source/template/list-view-template.archive';
import { ListViewCardTemplateArchive } from '../../card/template/list-view.card-template.archive';
import { ListViewTemplate } from '../../source/template/list-view-template';
import { ListViewCardTemplate } from '../../card/template/list-view.card-template';
import { Gate } from '../../../../../feature/common/src/cdk/component/lib/src/gate';
import { NgChanges } from '../../../../../feature/common/src/cdk/component/lib/src/ng-changes';
import * as i0 from "@angular/core";
export declare class ListViewTemplateGate extends Gate implements OnChanges {
    private readonly containerTemplateArchive;
    private readonly listCardTemplateArchive;
    template: ListViewTemplate;
    cardTemplate: ListViewCardTemplate;
    constructor(containerTemplateArchive: ListViewTemplateArchive, listCardTemplateArchive: ListViewCardTemplateArchive);
    ngOnChanges(changes: NgChanges<ListViewTemplateGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewTemplateGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListViewTemplateGate, "gui-list-view[mode]", never, { "template": "template"; "cardTemplate": "cardTemplate"; }, {}, never, never, false>;
}
