/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var ɵ0 = structureIdFactory;
/** @type {?} */
var componentProviders = tslib_1.__spread([{
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
    }], containerProviders, provideComponentServices(), [PagingFeatureModule.forComponent()]);
var ContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ContainerComponent, _super);
    function ContainerComponent(structureId, listViewReadModelRootId, sourceCommandService, containerTemplateArchive, listCardTemplateArchive, structureCommandService, structurePagingCommandDispatcher, listViewCommandDispatcher) {
        var _this = _super.call(this, structureId, listViewReadModelRootId, sourceCommandService, containerTemplateArchive, listCardTemplateArchive, structurePagingCommandDispatcher, listViewCommandDispatcher) || this;
        _this.structureId = structureId;
        _this.listViewReadModelRootId = listViewReadModelRootId;
        structureCommandService.createStructure(_this.structureId);
        listViewCommandDispatcher.create(_this.listViewReadModelRootId);
        return _this;
    }
    ContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-container',
                    template: "\n\n\t\t<gui-container-layout></gui-container-layout>\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: componentProviders,
                    host: {
                        '[class.gui-container]': "\"true\"",
                        '[class.gui-generic]': "\"true\"",
                        '[id]': 'structureId.toString()'
                    },
                    styles: [".gui-list-card-wrapper{border:1px solid transparent;min-height:100px;height:100%;margin:0;padding:0 12px;position:relative;transition:.2s}.gui-list-card-wrapper:hover{border:1px solid #d6d6d6;box-shadow:0 2px 6px rgba(0,0,0,.15)}.gui-list-panel-top{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.gui-list-panel-top .gui-paging{margin-left:auto}.gui-list-container-card{border-top:1px solid #d6d6d6}", ".gui-container-source{display:block;padding:8px}.gui-list-item{border-radius:4px;border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.15);display:block;margin:8px 0;width:100%}.gui-list-item .gui-list-item-container{padding-top:12px;padding-bottom:12px}.gui-list-container-card{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0;padding:0}.gui-list-card{cursor:pointer;display:block;padding:0;position:relative;margin:0}@media (min-width:480px){.gui-list-card{width:100%}.gui-list-item-container{padding-left:8px;padding-right:8px}}@media (min-width:768px){.gui-list-card{width:50%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:992px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:1200px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:16px;padding-right:16px}}", ".gui-container.gui-generic .gui-paging{border:0}"]
                }] }
    ];
    /** @nocollapse */
    ContainerComponent.ctorParameters = function () { return [
        { type: StructureId },
        { type: ListViewReadModelRootId },
        { type: SourceCommandDispatcher },
        { type: ContainerTemplateArchive },
        { type: ListCardTemplateArchive },
        { type: StructureCommandDispatcher },
        { type: PagingCommandDispatcher },
        { type: ListViewCommandDispatcher }
    ]; };
    return ContainerComponent;
}(ContainerGateway));
export { ContainerComponent };
if (false) {
    /** @type {?} */
    ContainerComponent.prototype.structureId;
    /** @type {?} */
    ContainerComponent.prototype.listViewReadModelRootId;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDeEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDN0csT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFrQix3QkFBd0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7Ozs7QUFJdkYsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFNBQStCO0lBQ2hFLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDckUsQ0FBQztTQUlZLGtCQUFrQjs7SUFGekIsa0JBQWtCLHFCQUFJO1FBQzNCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFVBQVUsSUFBb0I7UUFDOUIsSUFBSSxFQUFFO1lBQ0wsb0JBQW9CO1NBQ3BCO0tBQ0QsRUFBQztRQUNELE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixJQUFJLEVBQUU7WUFDTCxvQkFBb0I7U0FDcEI7S0FDRCxHQUNHLGtCQUFrQixFQUVsQix3QkFBd0IsRUFBRSxHQUU3QixtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsRUFDbEM7QUFFRDtJQW9Cd0MsOENBQWdCO0lBRXZELDRCQUE0QixXQUF3QixFQUNqQyx1QkFBZ0QsRUFDaEUsb0JBQTZDLEVBQzdDLHdCQUFrRCxFQUNsRCx1QkFBZ0QsRUFDaEQsdUJBQW1ELEVBQ25ELGdDQUF5RCxFQUN6RCx5QkFBb0Q7UUFQdkQsWUFTQyxrQkFDQyxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQix3QkFBd0IsRUFDeEIsdUJBQXVCLEVBQ3ZCLGdDQUFnQyxFQUNoQyx5QkFBeUIsQ0FDekIsU0FHRDtRQXBCMkIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQWlCbEUsdUJBQXVCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRCx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7O0lBQ2hFLENBQUM7O2dCQTFDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSwyREFHVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxrQkFBa0I7b0JBTTdCLElBQUksRUFBRTt3QkFDTCx1QkFBdUIsRUFBRSxVQUFRO3dCQUNqQyxxQkFBcUIsRUFBRSxVQUFRO3dCQUMvQixNQUFNLEVBQUUsd0JBQXdCO3FCQUNoQzs7aUJBQ0Q7Ozs7Z0JBM0RRLFdBQVc7Z0JBV1gsdUJBQXVCO2dCQVB2Qix1QkFBdUI7Z0JBS3ZCLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2dCQVB2QiwwQkFBMEI7Z0JBSzFCLHVCQUF1QjtnQkFJdkIseUJBQXlCOztJQXdFbEMseUJBQUM7Q0FBQSxBQTVDRCxDQW9Cd0MsZ0JBQWdCLEdBd0J2RDtTQXhCWSxrQkFBa0I7OztJQUVsQix5Q0FBd0M7O0lBQ2pELHFEQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRhaW5lckdhdGV3YXkgfSBmcm9tICcuL2NvbnRhaW5lci5nYXRld2F5JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWRHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2ZlYXR1cmUvc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVJZEZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2ZlYXR1cmUvc3RydWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3NvdXJjZS9zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IGNvbnRhaW5lclByb3ZpZGVycyB9IGZyb20gJy4vY29udGFpbmVyLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IGxvY2FsUHJvdmlkZXJzLCBwcm92aWRlQ29tcG9uZW50U2VydmljZXMgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2ZlYXR1cmUvbG9jYWwvbG9jYWwtcHJvdmlkZXJzJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb250YWluZXJUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL3NvdXJjZS90ZW1wbGF0ZS9jb250YWluZXItdGVtcGxhdGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBMaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vY2FyZC90ZW1wbGF0ZS9saXN0LmNhcmQtdGVtcGxhdGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2RvbWFpbi1hcGkvcmVhZC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IExpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4tYXBpL2xpc3Qtdmlldy5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBsaXN0Vmlld0lkRmFjdG9yeShnZW5lcmF0b3I6IFN0cnVjdHVyZUlkR2VuZXJhdG9yKTogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQge1xuXHRyZXR1cm4gbmV3IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkKCdndWktJyArIGdlbmVyYXRvci5nZW5lcmF0ZUlkKCkpO1xufVxuXG5jb25zdCBjb21wb25lbnRQcm92aWRlcnMgPSBbe1xuXHRwcm92aWRlOiBTdHJ1Y3R1cmVJZCxcblx0dXNlRmFjdG9yeTogc3RydWN0dXJlSWRGYWN0b3J5LFxuXHRkZXBzOiBbXG5cdFx0U3RydWN0dXJlSWRHZW5lcmF0b3Jcblx0XVxufSx7XG5cdHByb3ZpZGU6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHR1c2VGYWN0b3J5OiBsaXN0Vmlld0lkRmFjdG9yeSxcblx0ZGVwczogW1xuXHRcdFN0cnVjdHVyZUlkR2VuZXJhdG9yXG5cdF1cbn0sXG5cdC4uLmNvbnRhaW5lclByb3ZpZGVycyxcblxuXHQuLi5wcm92aWRlQ29tcG9uZW50U2VydmljZXMoKSxcblxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlLmZvckNvbXBvbmVudCgpXG5dO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktY29udGFpbmVyJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktY29udGFpbmVyLWxheW91dD48L2d1aS1jb250YWluZXItbGF5b3V0PlxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0cHJvdmlkZXJzOiBjb21wb25lbnRQcm92aWRlcnMsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3N0eWxlL2xpc3Qubmd4LnNjc3MnLFxuXHRcdCcuL3NvdXJjZS9jb250YWluZXItc291cmNlLmNvbXBvbmVudC5uZ3guc2NzcycsXG5cdFx0Jy4vc3R5bGUvdGhlbWUvZ2VuZXJpYy5saXN0Lm5neC5zY3NzJ1xuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktY29udGFpbmVyXSc6IGBcInRydWVcImAsXG5cdFx0J1tjbGFzcy5ndWktZ2VuZXJpY10nOiBgXCJ0cnVlXCJgLFxuXHRcdCdbaWRdJzogJ3N0cnVjdHVyZUlkLnRvU3RyaW5nKCknXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQ29udGFpbmVyR2F0ZXdheSB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0c291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRjb250YWluZXJUZW1wbGF0ZUFyY2hpdmU6IENvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZSxcblx0XHRcdFx0bGlzdENhcmRUZW1wbGF0ZUFyY2hpdmU6IExpc3RDYXJkVGVtcGxhdGVBcmNoaXZlLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyOiBQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0bGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlcjogTGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlclxuXHQpIHtcblx0XHRzdXBlcihcblx0XHRcdHN0cnVjdHVyZUlkLFxuXHRcdFx0bGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRzb3VyY2VDb21tYW5kU2VydmljZSxcblx0XHRcdGNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZSxcblx0XHRcdGxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlLFxuXHRcdFx0c3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRsaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyXG5cdFx0KTtcblx0XHRzdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5jcmVhdGVTdHJ1Y3R1cmUodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0bGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlci5jcmVhdGUodGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxufVxuIl19