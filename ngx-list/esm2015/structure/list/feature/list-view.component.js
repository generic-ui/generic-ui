/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { ListViewGateway } from './gateway/list-view.gateway';
import { StructureId } from '../../core/api/structure.id';
import { StructureIdGenerator } from '../../grid/feature/structure-id.generator';
import { structureIdFactory } from '../../grid/feature/structure.component';
import { StructureCommandDispatcher } from '../../core/api/structure.command-dispatcher';
import { SourceCommandInvoker } from '../../source/core/api/source.command-invoker';
import { listViewProviders } from './list-view.providers';
import { PagingFeatureModule } from '../../paging/feature/paging.feature-module';
import { provideComponentServices } from '../../grid/feature/local/local-providers';
import { PagingCommandInvoker } from '../../paging/core/api/paging.command-invoker';
import { ListViewTemplateArchive } from './source/template/list-view-template.archive';
import { ListViewCardTemplateArchive } from './card/template/list-view.card-template.archive';
import { ListViewReadModelRootId } from '../core/api/read/list-view.read-model-root-id';
import { ListViewCommandInvoker } from '../core/api/list-view.command-invoker';
import { filterContainerToken } from '../../filter/feature/config/filter-container-token';
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
     * @param {?} elementRef
     * @param {?} sourceCommandService
     * @param {?} containerTemplateArchive
     * @param {?} listCardTemplateArchive
     * @param {?} structureCommandService
     * @param {?} structurePagingCommandDispatcher
     * @param {?} listViewCommandDispatcher
     */
    constructor(structureId, listViewReadModelRootId, elementRef, sourceCommandService, containerTemplateArchive, listCardTemplateArchive, structureCommandService, structurePagingCommandDispatcher, listViewCommandDispatcher) {
        super(structureId, sourceCommandService);
        this.structureId = structureId;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.elementRef = elementRef;
        structureCommandService.createStructure(this.structureId);
        listViewCommandDispatcher.create(this.listViewReadModelRootId);
    }
    /**
     * @return {?}
     */
    getElementRef() {
        return this.elementRef;
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
                providers: [
                    ...componentProviders,
                    {
                        provide: filterContainerToken,
                        useExisting: ListViewComponent
                    }
                ],
                host: {
                    '[class.gui-list-view]': `"true"`,
                    '[class.gui-generic]': `"true"`,
                    '[id]': 'structureId.toString()'
                },
                styles: [".gui-list-view,.gui-list-view *{border-color:#d6d6d6}.gui-list-view .gui-search-bar form .gui-search-icon{top:10px}.gui-list-view .gui-search-bar form input{font-size:14px;padding:10px 6px 10px 38px}.gui-list-panel-search{display:-ms-flexbox;display:flex;padding-left:8px;padding-right:8px}.gui-list-card-wrapper{border:1px solid transparent;min-height:100px;height:100%;margin:0;padding:0 12px;position:relative;transition:.2s}.gui-list-card-wrapper:hover{border:1px solid #d6d6d6;box-shadow:0 2px 6px rgba(0,0,0,.15)}.gui-list-panel-top{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:8px;padding-right:8px}.gui-list-panel-top .gui-paging{margin-left:auto}.gui-list-container-card{border-top:1px solid #d6d6d6}", ".gui-list-view-source{display:block}.gui-list-item{border-radius:4px;border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.15);display:block;margin:8px 0;width:100%}.gui-list-item .gui-list-item-container{padding-top:12px;padding-bottom:12px}.gui-list-container-card{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0;padding:0}.gui-list-card{cursor:pointer;display:block;padding:0;position:relative;margin:0}@media (min-width:480px){.gui-list-card{width:100%}.gui-list-item-container{padding-left:8px;padding-right:8px}}@media (min-width:768px){.gui-list-card{width:50%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:992px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:1200px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:16px;padding-right:16px}}", ".gui-list-view.gui-generic .gui-paging{border:0}"]
            }] }
];
/** @nocollapse */
ListViewComponent.ctorParameters = () => [
    { type: StructureId },
    { type: ListViewReadModelRootId },
    { type: ElementRef },
    { type: SourceCommandInvoker },
    { type: ListViewTemplateArchive },
    { type: ListViewCardTemplateArchive },
    { type: StructureCommandDispatcher },
    { type: PagingCommandInvoker },
    { type: ListViewCommandInvoker }
];
if (false) {
    /** @type {?} */
    ListViewComponent.prototype.structureId;
    /** @type {?} */
    ListViewComponent.prototype.listViewReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    ListViewComponent.prototype.elementRef;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9saXN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7QUFLMUYsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFNBQStCO0lBQ2hFLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDckUsQ0FBQztXQUlZLGtCQUFrQjs7TUFGekIsa0JBQWtCLEdBQUcsQ0FBQztRQUMzQixPQUFPLEVBQUUsV0FBVztRQUNwQixVQUFVLElBQW9CO1FBQzlCLElBQUksRUFBRTtZQUNMLG9CQUFvQjtTQUNwQjtLQUNELEVBQUU7UUFDRixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFVBQVUsRUFBRSxpQkFBaUI7UUFDN0IsSUFBSSxFQUFFO1lBQ0wsb0JBQW9CO1NBQ3BCO0tBQ0Q7SUFDQSxHQUFHLGlCQUFpQjtJQUVwQixHQUFHLHdCQUF3QixFQUFFO0lBRTdCLG1CQUFtQixDQUFDLFlBQVksRUFBRTtDQUNsQztBQTRCRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZUFBZTs7Ozs7Ozs7Ozs7O0lBRXJELFlBQTRCLFdBQXdCLEVBQ2pDLHVCQUFnRCxFQUMvQyxVQUFzQixFQUN2QyxvQkFBMEMsRUFDMUMsd0JBQWlELEVBQ2pELHVCQUFvRCxFQUNwRCx1QkFBbUQsRUFDbkQsZ0NBQXNELEVBQ3RELHlCQUFpRDtRQUVuRCxLQUFLLENBQ0osV0FBVyxFQUNYLG9CQUFvQixDQUNwQixDQUFDO1FBYnlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDL0MsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVl6Qyx1QkFBdUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFELHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7WUFoREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7OztFQUdUO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFO29CQUNWLEdBQUcsa0JBQWtCO29CQUNyQjt3QkFDQyxPQUFPLEVBQUUsb0JBQW9CO3dCQUM3QixXQUFXLEVBQUUsaUJBQWlCO3FCQUM5QjtpQkFDRDtnQkFNRCxJQUFJLEVBQUU7b0JBQ0wsdUJBQXVCLEVBQUUsUUFBUTtvQkFDakMscUJBQXFCLEVBQUUsUUFBUTtvQkFDL0IsTUFBTSxFQUFFLHdCQUF3QjtpQkFDaEM7O2FBQ0Q7Ozs7WUFuRVEsV0FBVztZQVdYLHVCQUF1QjtZQWZhLFVBQVU7WUFROUMsb0JBQW9CO1lBS3BCLHVCQUF1QjtZQUN2QiwyQkFBMkI7WUFQM0IsMEJBQTBCO1lBSzFCLG9CQUFvQjtZQUlwQixzQkFBc0I7Ozs7SUEwRGxCLHdDQUF3Qzs7SUFDakQsb0RBQWdFOzs7OztJQUNoRSx1Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0dhdGV3YXkgfSBmcm9tICcuL2dhdGV3YXkvbGlzdC12aWV3LmdhdGV3YXknO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4uLy4uL2dyaWQvZmVhdHVyZS9zdHJ1Y3R1cmUtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IHN0cnVjdHVyZUlkRmFjdG9yeSB9IGZyb20gJy4uLy4uL2dyaWQvZmVhdHVyZS9zdHJ1Y3R1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IGxpc3RWaWV3UHJvdmlkZXJzIH0gZnJvbSAnLi9saXN0LXZpZXcucHJvdmlkZXJzJztcbmltcG9ydCB7IFBhZ2luZ0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9wYWdpbmcvZmVhdHVyZS9wYWdpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbXBvbmVudFNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vZ3JpZC9mZWF0dXJlL2xvY2FsL2xvY2FsLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi9zb3VyY2UvdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi9jYXJkL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9jb3JlL2FwaS9yZWFkL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL2NvcmUvYXBpL2xpc3Qtdmlldy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgZmlsdGVyQ29udGFpbmVyVG9rZW4gfSBmcm9tICcuLi8uLi9maWx0ZXIvZmVhdHVyZS9jb25maWcvZmlsdGVyLWNvbnRhaW5lci10b2tlbic7XG5pbXBvcnQgeyBGaWx0ZXJDb250YWluZXJSZWYgfSBmcm9tICcuLi8uLi9maWx0ZXIvZmVhdHVyZS9jb25maWcvZmlsdGVyLWNvbnRhaW5lci1yZWYnO1xuXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBsaXN0Vmlld0lkRmFjdG9yeShnZW5lcmF0b3I6IFN0cnVjdHVyZUlkR2VuZXJhdG9yKTogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQge1xuXHRyZXR1cm4gbmV3IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkKCdndWktJyArIGdlbmVyYXRvci5nZW5lcmF0ZUlkKCkpO1xufVxuXG5jb25zdCBjb21wb25lbnRQcm92aWRlcnMgPSBbe1xuXHRwcm92aWRlOiBTdHJ1Y3R1cmVJZCxcblx0dXNlRmFjdG9yeTogc3RydWN0dXJlSWRGYWN0b3J5LFxuXHRkZXBzOiBbXG5cdFx0U3RydWN0dXJlSWRHZW5lcmF0b3Jcblx0XVxufSwge1xuXHRwcm92aWRlOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0dXNlRmFjdG9yeTogbGlzdFZpZXdJZEZhY3RvcnksXG5cdGRlcHM6IFtcblx0XHRTdHJ1Y3R1cmVJZEdlbmVyYXRvclxuXHRdXG59LFxuXHQuLi5saXN0Vmlld1Byb3ZpZGVycyxcblxuXHQuLi5wcm92aWRlQ29tcG9uZW50U2VydmljZXMoKSxcblxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlLmZvckNvbXBvbmVudCgpXG5dO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktbGlzdC12aWV3LWxheW91dD48L2d1aS1saXN0LXZpZXctbGF5b3V0PlxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uY29tcG9uZW50UHJvdmlkZXJzLFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IGZpbHRlckNvbnRhaW5lclRva2VuLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IExpc3RWaWV3Q29tcG9uZW50XG5cdFx0fVxuXHRdLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zdHlsZS9saXN0LXZpZXcubmd4LnNjc3MnLFxuXHRcdCcuL3NvdXJjZS9saXN0LXZpZXctc291cmNlLmNvbXBvbmVudC5uZ3guc2NzcycsXG5cdFx0Jy4vc3R5bGUvdGhlbWUvZ2VuZXJpYy5saXN0Lm5neC5zY3NzJ1xuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbGlzdC12aWV3XSc6IGBcInRydWVcImAsXG5cdFx0J1tjbGFzcy5ndWktZ2VuZXJpY10nOiBgXCJ0cnVlXCJgLFxuXHRcdCdbaWRdJzogJ3N0cnVjdHVyZUlkLnRvU3RyaW5nKCknXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb21wb25lbnQgZXh0ZW5kcyBMaXN0Vmlld0dhdGV3YXkgaW1wbGVtZW50cyBGaWx0ZXJDb250YWluZXJSZWYge1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHB1YmxpYyByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0c291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRjb250YWluZXJUZW1wbGF0ZUFyY2hpdmU6IExpc3RWaWV3VGVtcGxhdGVBcmNoaXZlLFxuXHRcdFx0XHRsaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyOiBQYWdpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdFx0bGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlcjogTGlzdFZpZXdDb21tYW5kSW52b2tlclxuXHQpIHtcblx0XHRzdXBlcihcblx0XHRcdHN0cnVjdHVyZUlkLFxuXHRcdFx0c291cmNlQ29tbWFuZFNlcnZpY2Vcblx0XHQpO1xuXHRcdHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLmNyZWF0ZVN0cnVjdHVyZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRsaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyLmNyZWF0ZSh0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdGdldEVsZW1lbnRSZWYoKTogRWxlbWVudFJlZiB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudFJlZjtcblx0fVxuXG59XG4iXX0=