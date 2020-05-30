/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ListViewGateway } from './gateway/list-view.gateway';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { StructureIdGenerator } from '../../../lib/structure/feature/structure-id.generator';
import { structureIdFactory } from '../../../lib/structure/feature/structure.component';
import { StructureCommandDispatcher } from '../../../lib/structure/domain-api/structure.command-dispatcher';
import { SourceCommandDispatcher } from '../../../lib/structure/domain-api/source/source.command-dispatcher';
import { listViewProviders } from './list-view.providers';
import { PagingFeatureModule } from '../../paging/feature/paging.feature-module';
import { provideComponentServices } from '../../../lib/structure/feature/local/local-providers';
import { PagingCommandDispatcher } from '../../paging/domain-api/paging.command-dispatcher';
import { ListViewTemplateArchive } from './source/template/list-view-template.archive';
import { ListViewCardTemplateArchive } from './card/template/list-view.card-template.archive';
import { ListViewReadModelRootId } from '../domain-api/read/list-view.read-model-root-id';
import { ListViewCommandDispatcher } from '../domain-api/list-view.command-dispatcher';
/**
 * \@internal
 * @param {?} generator
 * @return {?}
 */
export function listViewIdFactory(generator) {
    return new ListViewReadModelRootId('gui-' + generator.generateId());
}
const ɵ0 = structureIdFactory;
/** @type {?} */
const componentProviders = [{
        provide: StructureId,
        useFactory: ɵ0,
        deps: [
            StructureIdGenerator
        ]
    }, {
        provide: ListViewReadModelRootId,
        useFactory: listViewIdFactory,
        deps: [
            StructureIdGenerator
        ]
    },
    ...listViewProviders,
    ...provideComponentServices(),
    PagingFeatureModule.forComponent()
];
export class ListViewComponent extends ListViewGateway {
    /**
     * @param {?} structureId
     * @param {?} listViewReadModelRootId
     * @param {?} sourceCommandService
     * @param {?} containerTemplateArchive
     * @param {?} listCardTemplateArchive
     * @param {?} structureCommandService
     * @param {?} structurePagingCommandDispatcher
     * @param {?} listViewCommandDispatcher
     */
    constructor(structureId, listViewReadModelRootId, sourceCommandService, containerTemplateArchive, listCardTemplateArchive, structureCommandService, structurePagingCommandDispatcher, listViewCommandDispatcher) {
        super(structureId, sourceCommandService);
        this.structureId = structureId;
        this.listViewReadModelRootId = listViewReadModelRootId;
        structureCommandService.createStructure(this.structureId);
        listViewCommandDispatcher.create(this.listViewReadModelRootId);
    }
}
ListViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-list-view',
                template: `

		<gui-list-view-layout></gui-list-view-layout>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: componentProviders,
                host: {
                    '[class.gui-list-view]': `"true"`,
                    '[class.gui-generic]': `"true"`,
                    '[id]': 'structureId.toString()'
                },
                styles: [".gui-list-view,.gui-list-view *{border-color:#d6d6d6}.gui-list-view .gui-search-bar form .gui-search-icon{top:10px}.gui-list-view .gui-search-bar form input{font-size:14px;padding:10px 6px 10px 38px}.gui-list-panel-search{padding-left:8px;padding-right:8px}.gui-list-card-wrapper{border:1px solid transparent;min-height:100px;height:100%;margin:0;padding:0 12px;position:relative;transition:.2s}.gui-list-card-wrapper:hover{border:1px solid #d6d6d6;box-shadow:0 2px 6px rgba(0,0,0,.15)}.gui-list-panel-top{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:8px;padding-right:8px}.gui-list-panel-top .gui-paging{margin-left:auto}.gui-list-container-card{border-top:1px solid #d6d6d6}", ".gui-list-view-source{display:block;padding:8px}.gui-list-item{border-radius:4px;border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.15);display:block;margin:8px 0;width:100%}.gui-list-item .gui-list-item-container{padding-top:12px;padding-bottom:12px}.gui-list-container-card{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0;padding:0}.gui-list-card{cursor:pointer;display:block;padding:0;position:relative;margin:0}@media (min-width:480px){.gui-list-card{width:100%}.gui-list-item-container{padding-left:8px;padding-right:8px}}@media (min-width:768px){.gui-list-card{width:50%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:992px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:1200px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:16px;padding-right:16px}}", ".gui-list-view.gui-generic .gui-paging{border:0}"]
            }] }
];
/** @nocollapse */
ListViewComponent.ctorParameters = () => [
    { type: StructureId },
    { type: ListViewReadModelRootId },
    { type: SourceCommandDispatcher },
    { type: ListViewTemplateArchive },
    { type: ListViewCardTemplateArchive },
    { type: StructureCommandDispatcher },
    { type: PagingCommandDispatcher },
    { type: ListViewCommandDispatcher }
];
if (false) {
    /** @type {?} */
    ListViewComponent.prototype.structureId;
    /** @type {?} */
    ListViewComponent.prototype.listViewReadModelRootId;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9saXN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDeEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDN0csT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDaEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDOUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDMUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7OztBQUl2RixNQUFNLFVBQVUsaUJBQWlCLENBQUMsU0FBK0I7SUFDaEUsT0FBTyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUNyRSxDQUFDO1dBSVksa0JBQWtCOztNQUZ6QixrQkFBa0IsR0FBRyxDQUFDO1FBQzNCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFVBQVUsSUFBb0I7UUFDOUIsSUFBSSxFQUFFO1lBQ0wsb0JBQW9CO1NBQ3BCO0tBQ0QsRUFBRTtRQUNGLE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixJQUFJLEVBQUU7WUFDTCxvQkFBb0I7U0FDcEI7S0FDRDtJQUNBLEdBQUcsaUJBQWlCO0lBRXBCLEdBQUcsd0JBQXdCLEVBQUU7SUFFN0IsbUJBQW1CLENBQUMsWUFBWSxFQUFFO0NBQ2xDO0FBc0JELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxlQUFlOzs7Ozs7Ozs7OztJQUVyRCxZQUE0QixXQUF3QixFQUNqQyx1QkFBZ0QsRUFDaEUsb0JBQTZDLEVBQzdDLHdCQUFpRCxFQUNqRCx1QkFBb0QsRUFDcEQsdUJBQW1ELEVBQ25ELGdDQUF5RCxFQUN6RCx5QkFBb0Q7UUFFdEQsS0FBSyxDQUNKLFdBQVcsRUFDWCxvQkFBb0IsQ0FDcEIsQ0FBQztRQVp5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBWWxFLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUQseUJBQXlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OztZQXJDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7O0VBR1Q7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsa0JBQWtCO2dCQU03QixJQUFJLEVBQUU7b0JBQ0wsdUJBQXVCLEVBQUUsUUFBUTtvQkFDakMscUJBQXFCLEVBQUUsUUFBUTtvQkFDL0IsTUFBTSxFQUFFLHdCQUF3QjtpQkFDaEM7O2FBQ0Q7Ozs7WUEzRFEsV0FBVztZQVdYLHVCQUF1QjtZQVB2Qix1QkFBdUI7WUFLdkIsdUJBQXVCO1lBQ3ZCLDJCQUEyQjtZQVAzQiwwQkFBMEI7WUFLMUIsdUJBQXVCO1lBSXZCLHlCQUF5Qjs7OztJQWtEckIsd0NBQXdDOztJQUNqRCxvREFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0dhdGV3YXkgfSBmcm9tICcuL2dhdGV3YXkvbGlzdC12aWV3LmdhdGV3YXknO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9zdHJ1Y3R1cmUtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IHN0cnVjdHVyZUlkRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9zdHJ1Y3R1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgbGlzdFZpZXdQcm92aWRlcnMgfSBmcm9tICcuL2xpc3Qtdmlldy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgUGFnaW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29tcG9uZW50U2VydmljZXMgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2ZlYXR1cmUvbG9jYWwvbG9jYWwtcHJvdmlkZXJzJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vc291cmNlL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vY2FyZC90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9yZWFkL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi1hcGkvbGlzdC12aWV3LmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3RWaWV3SWRGYWN0b3J5KGdlbmVyYXRvcjogU3RydWN0dXJlSWRHZW5lcmF0b3IpOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB7XG5cdHJldHVybiBuZXcgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQoJ2d1aS0nICsgZ2VuZXJhdG9yLmdlbmVyYXRlSWQoKSk7XG59XG5cbmNvbnN0IGNvbXBvbmVudFByb3ZpZGVycyA9IFt7XG5cdHByb3ZpZGU6IFN0cnVjdHVyZUlkLFxuXHR1c2VGYWN0b3J5OiBzdHJ1Y3R1cmVJZEZhY3RvcnksXG5cdGRlcHM6IFtcblx0XHRTdHJ1Y3R1cmVJZEdlbmVyYXRvclxuXHRdXG59LCB7XG5cdHByb3ZpZGU6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHR1c2VGYWN0b3J5OiBsaXN0Vmlld0lkRmFjdG9yeSxcblx0ZGVwczogW1xuXHRcdFN0cnVjdHVyZUlkR2VuZXJhdG9yXG5cdF1cbn0sXG5cdC4uLmxpc3RWaWV3UHJvdmlkZXJzLFxuXG5cdC4uLnByb3ZpZGVDb21wb25lbnRTZXJ2aWNlcygpLFxuXG5cdFBhZ2luZ0ZlYXR1cmVNb2R1bGUuZm9yQ29tcG9uZW50KClcbl07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXcnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1saXN0LXZpZXctbGF5b3V0PjwvZ3VpLWxpc3Qtdmlldy1sYXlvdXQ+XG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRwcm92aWRlcnM6IGNvbXBvbmVudFByb3ZpZGVycyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvbGlzdC12aWV3Lm5neC5zY3NzJyxcblx0XHQnLi9zb3VyY2UvbGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQubmd4LnNjc3MnLFxuXHRcdCcuL3N0eWxlL3RoZW1lL2dlbmVyaWMubGlzdC5uZ3guc2Nzcydcblx0XSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3Qtdmlld10nOiBgXCJ0cnVlXCJgLFxuXHRcdCdbY2xhc3MuZ3VpLWdlbmVyaWNdJzogYFwidHJ1ZVwiYCxcblx0XHQnW2lkXSc6ICdzdHJ1Y3R1cmVJZC50b1N0cmluZygpJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Q29tcG9uZW50IGV4dGVuZHMgTGlzdFZpZXdHYXRld2F5IHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwdWJsaWMgcmVhZG9ubHkgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdGNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdUZW1wbGF0ZUFyY2hpdmUsXG5cdFx0XHRcdGxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUsXG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0c3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXI6IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRsaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyOiBMaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyXG5cdCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0c3RydWN0dXJlSWQsXG5cdFx0XHRzb3VyY2VDb21tYW5kU2VydmljZVxuXHRcdCk7XG5cdFx0c3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuY3JlYXRlU3RydWN0dXJlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdGxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIuY3JlYXRlKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cbn1cbiJdfQ==