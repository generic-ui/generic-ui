/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    }], listViewProviders, provideComponentServices(), [PagingFeatureModule.forComponent()]);
var ListViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewComponent, _super);
    function ListViewComponent(structureId, listViewReadModelRootId, sourceCommandService, containerTemplateArchive, listCardTemplateArchive, structureCommandService, structurePagingCommandDispatcher, listViewCommandDispatcher) {
        var _this = _super.call(this, structureId, sourceCommandService) || this;
        _this.structureId = structureId;
        _this.listViewReadModelRootId = listViewReadModelRootId;
        structureCommandService.createStructure(_this.structureId);
        listViewCommandDispatcher.create(_this.listViewReadModelRootId);
        return _this;
    }
    ListViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-list-view',
                    template: "\n\n\t\t<gui-list-view-layout></gui-list-view-layout>\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: componentProviders,
                    host: {
                        '[class.gui-list-view]': "\"true\"",
                        '[class.gui-generic]': "\"true\"",
                        '[id]': 'structureId.toString()'
                    },
                    styles: [".gui-list-view,.gui-list-view *{border-color:#d6d6d6}.gui-list-view .gui-search-bar form .gui-search-icon{top:10px}.gui-list-view .gui-search-bar form input{font-size:14px;padding:10px 6px 10px 38px}.gui-list-panel-search{padding-left:8px;padding-right:8px}.gui-list-card-wrapper{border:1px solid transparent;min-height:100px;height:100%;margin:0;padding:0 12px;position:relative;transition:.2s}.gui-list-card-wrapper:hover{border:1px solid #d6d6d6;box-shadow:0 2px 6px rgba(0,0,0,.15)}.gui-list-panel-top{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:8px;padding-right:8px}.gui-list-panel-top .gui-paging{margin-left:auto}.gui-list-container-card{border-top:1px solid #d6d6d6}", ".gui-list-view-source{display:block;padding:8px}.gui-list-item{border-radius:4px;border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.15);display:block;margin:8px 0;width:100%}.gui-list-item .gui-list-item-container{padding-top:12px;padding-bottom:12px}.gui-list-container-card{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0;padding:0}.gui-list-card{cursor:pointer;display:block;padding:0;position:relative;margin:0}@media (min-width:480px){.gui-list-card{width:100%}.gui-list-item-container{padding-left:8px;padding-right:8px}}@media (min-width:768px){.gui-list-card{width:50%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:992px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:1200px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:16px;padding-right:16px}}", ".gui-list-view.gui-generic .gui-paging{border:0}"]
                }] }
    ];
    /** @nocollapse */
    ListViewComponent.ctorParameters = function () { return [
        { type: StructureId },
        { type: ListViewReadModelRootId },
        { type: SourceCommandDispatcher },
        { type: ListViewTemplateArchive },
        { type: ListViewCardTemplateArchive },
        { type: StructureCommandDispatcher },
        { type: PagingCommandDispatcher },
        { type: ListViewCommandDispatcher }
    ]; };
    return ListViewComponent;
}(ListViewGateway));
export { ListViewComponent };
if (false) {
    /** @type {?} */
    ListViewComponent.prototype.structureId;
    /** @type {?} */
    ListViewComponent.prototype.listViewReadModelRootId;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9saXN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7Ozs7QUFJdkYsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFNBQStCO0lBQ2hFLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDckUsQ0FBQztTQUlZLGtCQUFrQjs7SUFGekIsa0JBQWtCLHFCQUFJO1FBQzNCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFVBQVUsSUFBb0I7UUFDOUIsSUFBSSxFQUFFO1lBQ0wsb0JBQW9CO1NBQ3BCO0tBQ0QsRUFBRTtRQUNGLE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixJQUFJLEVBQUU7WUFDTCxvQkFBb0I7U0FDcEI7S0FDRCxHQUNHLGlCQUFpQixFQUVqQix3QkFBd0IsRUFBRSxHQUU3QixtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsRUFDbEM7QUFFRDtJQW9CdUMsNkNBQWU7SUFFckQsMkJBQTRCLFdBQXdCLEVBQ2pDLHVCQUFnRCxFQUNoRSxvQkFBNkMsRUFDN0Msd0JBQWlELEVBQ2pELHVCQUFvRCxFQUNwRCx1QkFBbUQsRUFDbkQsZ0NBQXlELEVBQ3pELHlCQUFvRDtRQVB2RCxZQVNDLGtCQUNDLFdBQVcsRUFDWCxvQkFBb0IsQ0FDcEIsU0FHRDtRQWYyQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBWWxFLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUQseUJBQXlCLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztJQUNoRSxDQUFDOztnQkFyQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsMkRBR1Q7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUUsa0JBQWtCO29CQU03QixJQUFJLEVBQUU7d0JBQ0wsdUJBQXVCLEVBQUUsVUFBUTt3QkFDakMscUJBQXFCLEVBQUUsVUFBUTt3QkFDL0IsTUFBTSxFQUFFLHdCQUF3QjtxQkFDaEM7O2lCQUNEOzs7O2dCQTNEUSxXQUFXO2dCQVdYLHVCQUF1QjtnQkFQdkIsdUJBQXVCO2dCQUt2Qix1QkFBdUI7Z0JBQ3ZCLDJCQUEyQjtnQkFQM0IsMEJBQTBCO2dCQUsxQix1QkFBdUI7Z0JBSXZCLHlCQUF5Qjs7SUFtRWxDLHdCQUFDO0NBQUEsQUF2Q0QsQ0FvQnVDLGVBQWUsR0FtQnJEO1NBbkJZLGlCQUFpQjs7O0lBRWpCLHdDQUF3Qzs7SUFDakQsb0RBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGlzdFZpZXdHYXRld2F5IH0gZnJvbSAnLi9nYXRld2F5L2xpc3Qtdmlldy5nYXRld2F5JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWRHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2ZlYXR1cmUvc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVJZEZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2ZlYXR1cmUvc3RydWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3NvdXJjZS9zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IGxpc3RWaWV3UHJvdmlkZXJzIH0gZnJvbSAnLi9saXN0LXZpZXcucHJvdmlkZXJzJztcbmltcG9ydCB7IFBhZ2luZ0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9wYWdpbmcvZmVhdHVyZS9wYWdpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbXBvbmVudFNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL2xvY2FsLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL3NvdXJjZS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL2NhcmQvdGVtcGxhdGUvbGlzdC12aWV3LmNhcmQtdGVtcGxhdGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2RvbWFpbi1hcGkvcmVhZC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IExpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4tYXBpL2xpc3Qtdmlldy5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBsaXN0Vmlld0lkRmFjdG9yeShnZW5lcmF0b3I6IFN0cnVjdHVyZUlkR2VuZXJhdG9yKTogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQge1xuXHRyZXR1cm4gbmV3IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkKCdndWktJyArIGdlbmVyYXRvci5nZW5lcmF0ZUlkKCkpO1xufVxuXG5jb25zdCBjb21wb25lbnRQcm92aWRlcnMgPSBbe1xuXHRwcm92aWRlOiBTdHJ1Y3R1cmVJZCxcblx0dXNlRmFjdG9yeTogc3RydWN0dXJlSWRGYWN0b3J5LFxuXHRkZXBzOiBbXG5cdFx0U3RydWN0dXJlSWRHZW5lcmF0b3Jcblx0XVxufSwge1xuXHRwcm92aWRlOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0dXNlRmFjdG9yeTogbGlzdFZpZXdJZEZhY3RvcnksXG5cdGRlcHM6IFtcblx0XHRTdHJ1Y3R1cmVJZEdlbmVyYXRvclxuXHRdXG59LFxuXHQuLi5saXN0Vmlld1Byb3ZpZGVycyxcblxuXHQuLi5wcm92aWRlQ29tcG9uZW50U2VydmljZXMoKSxcblxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlLmZvckNvbXBvbmVudCgpXG5dO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktbGlzdC12aWV3LWxheW91dD48L2d1aS1saXN0LXZpZXctbGF5b3V0PlxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0cHJvdmlkZXJzOiBjb21wb25lbnRQcm92aWRlcnMsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3N0eWxlL2xpc3Qtdmlldy5uZ3guc2NzcycsXG5cdFx0Jy4vc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50Lm5neC5zY3NzJyxcblx0XHQnLi9zdHlsZS90aGVtZS9nZW5lcmljLmxpc3Qubmd4LnNjc3MnXG5cdF0sXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1saXN0LXZpZXddJzogYFwidHJ1ZVwiYCxcblx0XHQnW2NsYXNzLmd1aS1nZW5lcmljXSc6IGBcInRydWVcImAsXG5cdFx0J1tpZF0nOiAnc3RydWN0dXJlSWQudG9TdHJpbmcoKSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbXBvbmVudCBleHRlbmRzIExpc3RWaWV3R2F0ZXdheSB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0c291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRjb250YWluZXJUZW1wbGF0ZUFyY2hpdmU6IExpc3RWaWV3VGVtcGxhdGVBcmNoaXZlLFxuXHRcdFx0XHRsaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyOiBQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0bGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlcjogTGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlclxuXHQpIHtcblx0XHRzdXBlcihcblx0XHRcdHN0cnVjdHVyZUlkLFxuXHRcdFx0c291cmNlQ29tbWFuZFNlcnZpY2Vcblx0XHQpO1xuXHRcdHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLmNyZWF0ZVN0cnVjdHVyZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRsaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyLmNyZWF0ZSh0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG59XG4iXX0=