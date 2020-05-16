/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ContainerGateway } from './container.gateway';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { StructureIdGenerator } from '../../../lib/structure/feature/structure-id.generator';
import { structureIdFactory } from '../../../lib/structure/feature/structure.component';
import { StructureCommandDispatcher } from '../../../lib/structure/domain-api/structure.command-dispatcher';
import { SourceCommandDispatcher } from '../../../lib/structure/domain-api/source/source.command-dispatcher';
import { containerProviders } from './container.providers';
import { PagingFeatureModule } from '../../paging/feature/paging.feature-module';
import { provideComponentServices } from '../../../lib/structure/feature/local/local-providers';
import { PagingCommandDispatcher } from '../../paging/domain-api/paging.command-dispatcher';
import { ContainerTemplateArchive } from './source/template/container-template.archive';
import { ListCardTemplateArchive } from './card/template/list.card-template.archive';
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
    ...containerProviders,
    ...provideComponentServices(),
    PagingFeatureModule.forComponent()
];
export class ContainerComponent extends ContainerGateway {
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
        super(structureId, listViewReadModelRootId, sourceCommandService, containerTemplateArchive, listCardTemplateArchive, structurePagingCommandDispatcher, listViewCommandDispatcher);
        this.structureId = structureId;
        this.listViewReadModelRootId = listViewReadModelRootId;
        structureCommandService.createStructure(this.structureId);
        listViewCommandDispatcher.create(this.listViewReadModelRootId);
    }
}
ContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-container',
                template: `

		<gui-container-layout></gui-container-layout>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: componentProviders,
                host: {
                    '[class.gui-container]': `"true"`,
                    '[class.gui-generic]': `"true"`,
                    '[id]': 'structureId.toString()'
                },
                styles: [".gui-list-card-wrapper{border:1px solid transparent;min-height:100px;height:100%;margin:0;padding:0 12px;position:relative;transition:.2s}.gui-list-card-wrapper:hover{border:1px solid #d6d6d6;box-shadow:0 2px 6px rgba(0,0,0,.15)}.gui-list-panel-top{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.gui-list-panel-top .gui-paging{margin-left:auto}.gui-list-container-card{border-top:1px solid #d6d6d6}", ".gui-container-source{display:block;padding:8px}.gui-list-item{border-radius:4px;border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.15);display:block;margin:8px 0;width:100%}.gui-list-item .gui-list-item-container{padding-top:12px;padding-bottom:12px}.gui-list-container-card{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0;padding:0}.gui-list-card{cursor:pointer;display:block;padding:0;position:relative;margin:0}@media (min-width:480px){.gui-list-card{width:100%}.gui-list-item-container{padding-left:8px;padding-right:8px}}@media (min-width:768px){.gui-list-card{width:50%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:992px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:1200px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:16px;padding-right:16px}}", ".gui-container.gui-generic .gui-paging{border:0}"]
            }] }
];
/** @nocollapse */
ContainerComponent.ctorParameters = () => [
    { type: StructureId },
    { type: ListViewReadModelRootId },
    { type: SourceCommandDispatcher },
    { type: ContainerTemplateArchive },
    { type: ListCardTemplateArchive },
    { type: StructureCommandDispatcher },
    { type: PagingCommandDispatcher },
    { type: ListViewCommandDispatcher }
];
if (false) {
    /** @type {?} */
    ContainerComponent.prototype.structureId;
    /** @type {?} */
    ContainerComponent.prototype.listViewReadModelRootId;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRixPQUFPLEVBQWtCLHdCQUF3QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDaEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDMUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7OztBQUl2RixNQUFNLFVBQVUsaUJBQWlCLENBQUMsU0FBK0I7SUFDaEUsT0FBTyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUNyRSxDQUFDO1dBSVksa0JBQWtCOztNQUZ6QixrQkFBa0IsR0FBRyxDQUFDO1FBQzNCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFVBQVUsSUFBb0I7UUFDOUIsSUFBSSxFQUFFO1lBQ0wsb0JBQW9CO1NBQ3BCO0tBQ0QsRUFBQztRQUNELE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixJQUFJLEVBQUU7WUFDTCxvQkFBb0I7U0FDcEI7S0FDRDtJQUNBLEdBQUcsa0JBQWtCO0lBRXJCLEdBQUcsd0JBQXdCLEVBQUU7SUFFN0IsbUJBQW1CLENBQUMsWUFBWSxFQUFFO0NBQ2xDO0FBc0JELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxnQkFBZ0I7Ozs7Ozs7Ozs7O0lBRXZELFlBQTRCLFdBQXdCLEVBQ2pDLHVCQUFnRCxFQUNoRSxvQkFBNkMsRUFDN0Msd0JBQWtELEVBQ2xELHVCQUFnRCxFQUNoRCx1QkFBbUQsRUFDbkQsZ0NBQXlELEVBQ3pELHlCQUFvRDtRQUV0RCxLQUFLLENBQ0osV0FBVyxFQUNYLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsd0JBQXdCLEVBQ3hCLHVCQUF1QixFQUN2QixnQ0FBZ0MsRUFDaEMseUJBQXlCLENBQ3pCLENBQUM7UUFqQnlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFpQmxFLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUQseUJBQXlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OztZQTFDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7O0VBR1Q7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsa0JBQWtCO2dCQU03QixJQUFJLEVBQUU7b0JBQ0wsdUJBQXVCLEVBQUUsUUFBUTtvQkFDakMscUJBQXFCLEVBQUUsUUFBUTtvQkFDL0IsTUFBTSxFQUFFLHdCQUF3QjtpQkFDaEM7O2FBQ0Q7Ozs7WUEzRFEsV0FBVztZQVdYLHVCQUF1QjtZQVB2Qix1QkFBdUI7WUFLdkIsd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQVB2QiwwQkFBMEI7WUFLMUIsdUJBQXVCO1lBSXZCLHlCQUF5Qjs7OztJQWtEckIseUNBQXdDOztJQUNqRCxxREFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250YWluZXJHYXRld2F5IH0gZnJvbSAnLi9jb250YWluZXIuZ2F0ZXdheSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlL3N0cnVjdHVyZS1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgc3RydWN0dXJlSWRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlL3N0cnVjdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zb3VyY2Uvc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBjb250YWluZXJQcm92aWRlcnMgfSBmcm9tICcuL2NvbnRhaW5lci5wcm92aWRlcnMnO1xuaW1wb3J0IHsgUGFnaW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBsb2NhbFByb3ZpZGVycywgcHJvdmlkZUNvbXBvbmVudFNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL2xvY2FsLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29udGFpbmVyVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi9zb3VyY2UvdGVtcGxhdGUvY29udGFpbmVyLXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdENhcmRUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL2NhcmQvdGVtcGxhdGUvbGlzdC5jYXJkLXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9kb21haW4tYXBpL3JlYWQvbGlzdC12aWV3LnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9saXN0LXZpZXcuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdFZpZXdJZEZhY3RvcnkoZ2VuZXJhdG9yOiBTdHJ1Y3R1cmVJZEdlbmVyYXRvcik6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIHtcblx0cmV0dXJuIG5ldyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCgnZ3VpLScgKyBnZW5lcmF0b3IuZ2VuZXJhdGVJZCgpKTtcbn1cblxuY29uc3QgY29tcG9uZW50UHJvdmlkZXJzID0gW3tcblx0cHJvdmlkZTogU3RydWN0dXJlSWQsXG5cdHVzZUZhY3Rvcnk6IHN0cnVjdHVyZUlkRmFjdG9yeSxcblx0ZGVwczogW1xuXHRcdFN0cnVjdHVyZUlkR2VuZXJhdG9yXG5cdF1cbn0se1xuXHRwcm92aWRlOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0dXNlRmFjdG9yeTogbGlzdFZpZXdJZEZhY3RvcnksXG5cdGRlcHM6IFtcblx0XHRTdHJ1Y3R1cmVJZEdlbmVyYXRvclxuXHRdXG59LFxuXHQuLi5jb250YWluZXJQcm92aWRlcnMsXG5cblx0Li4ucHJvdmlkZUNvbXBvbmVudFNlcnZpY2VzKCksXG5cblx0UGFnaW5nRmVhdHVyZU1vZHVsZS5mb3JDb21wb25lbnQoKVxuXTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWNvbnRhaW5lcicsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWNvbnRhaW5lci1sYXlvdXQ+PC9ndWktY29udGFpbmVyLWxheW91dD5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHByb3ZpZGVyczogY29tcG9uZW50UHJvdmlkZXJzLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zdHlsZS9saXN0Lm5neC5zY3NzJyxcblx0XHQnLi9zb3VyY2UvY29udGFpbmVyLXNvdXJjZS5jb21wb25lbnQubmd4LnNjc3MnLFxuXHRcdCcuL3N0eWxlL3RoZW1lL2dlbmVyaWMubGlzdC5uZ3guc2Nzcydcblx0XSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWNvbnRhaW5lcl0nOiBgXCJ0cnVlXCJgLFxuXHRcdCdbY2xhc3MuZ3VpLWdlbmVyaWNdJzogYFwidHJ1ZVwiYCxcblx0XHQnW2lkXSc6ICdzdHJ1Y3R1cmVJZC50b1N0cmluZygpJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIENvbnRhaW5lckdhdGV3YXkge1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHB1YmxpYyByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0Y29udGFpbmVyVGVtcGxhdGVBcmNoaXZlOiBDb250YWluZXJUZW1wbGF0ZUFyY2hpdmUsXG5cdFx0XHRcdGxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlOiBMaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZSxcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcjogUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdGxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXI6IExpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXJcblx0KSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRzdHJ1Y3R1cmVJZCxcblx0XHRcdGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0c291cmNlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRjb250YWluZXJUZW1wbGF0ZUFyY2hpdmUsXG5cdFx0XHRsaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZSxcblx0XHRcdHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0bGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlclxuXHRcdCk7XG5cdFx0c3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuY3JlYXRlU3RydWN0dXJlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdGxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIuY3JlYXRlKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cbn1cbiJdfQ==