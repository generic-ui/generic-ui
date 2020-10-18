/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    function ListViewComponent(structureId, listViewReadModelRootId, elementRef, sourceCommandService, containerTemplateArchive, listCardTemplateArchive, structureCommandService, structurePagingCommandDispatcher, listViewCommandDispatcher) {
        var _this = _super.call(this, structureId, sourceCommandService) || this;
        _this.structureId = structureId;
        _this.listViewReadModelRootId = listViewReadModelRootId;
        _this.elementRef = elementRef;
        structureCommandService.createStructure(_this.structureId);
        listViewCommandDispatcher.create(_this.listViewReadModelRootId);
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewComponent.prototype.getElementRef = /**
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    ListViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-list-view',
                    template: "\n\n\t\t<gui-list-view-layout></gui-list-view-layout>\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: tslib_1.__spread(componentProviders, [
                        {
                            provide: filterContainerToken,
                            useExisting: ListViewComponent
                        }
                    ]),
                    host: {
                        '[class.gui-list-view]': "\"true\"",
                        '[class.gui-generic]': "\"true\"",
                        '[id]': 'structureId.toString()'
                    },
                    styles: [".gui-list-view,.gui-list-view *{border-color:#d6d6d6}.gui-list-view .gui-search-bar form .gui-search-icon{top:10px}.gui-list-view .gui-search-bar form input{font-size:14px;padding:10px 6px 10px 38px}.gui-list-panel-search{display:-ms-flexbox;display:flex;padding-left:8px;padding-right:8px}.gui-list-card-wrapper{border:1px solid transparent;min-height:100px;height:100%;margin:0;padding:0 12px;position:relative;transition:.2s}.gui-list-card-wrapper:hover{border:1px solid #d6d6d6;box-shadow:0 2px 6px rgba(0,0,0,.15)}.gui-list-panel-top{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:8px;padding-right:8px}.gui-list-panel-top .gui-paging{margin-left:auto}.gui-list-container-card{border-top:1px solid #d6d6d6}", ".gui-list-view-source{display:block}.gui-list-item{border-radius:4px;border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.15);display:block;margin:8px 0;width:100%}.gui-list-item .gui-list-item-container{padding-top:12px;padding-bottom:12px}.gui-list-container-card{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0;padding:0}.gui-list-card{cursor:pointer;display:block;padding:0;position:relative;margin:0}@media (min-width:480px){.gui-list-card{width:100%}.gui-list-item-container{padding-left:8px;padding-right:8px}}@media (min-width:768px){.gui-list-card{width:50%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:992px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:1200px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:16px;padding-right:16px}}", ".gui-list-view.gui-generic .gui-paging{border:0}"]
                }] }
    ];
    /** @nocollapse */
    ListViewComponent.ctorParameters = function () { return [
        { type: StructureId },
        { type: ListViewReadModelRootId },
        { type: ElementRef },
        { type: SourceCommandInvoker },
        { type: ListViewTemplateArchive },
        { type: ListViewCardTemplateArchive },
        { type: StructureCommandDispatcher },
        { type: PagingCommandInvoker },
        { type: ListViewCommandInvoker }
    ]; };
    return ListViewComponent;
}(ListViewGateway));
export { ListViewComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9saXN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7O0FBSzFGLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxTQUErQjtJQUNoRSxPQUFPLElBQUksdUJBQXVCLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7U0FJWSxrQkFBa0I7O0lBRnpCLGtCQUFrQixxQkFBSTtRQUMzQixPQUFPLEVBQUUsV0FBVztRQUNwQixVQUFVLElBQW9CO1FBQzlCLElBQUksRUFBRTtZQUNMLG9CQUFvQjtTQUNwQjtLQUNELEVBQUU7UUFDRixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFVBQVUsRUFBRSxpQkFBaUI7UUFDN0IsSUFBSSxFQUFFO1lBQ0wsb0JBQW9CO1NBQ3BCO0tBQ0QsR0FDRyxpQkFBaUIsRUFFakIsd0JBQXdCLEVBQUUsR0FFN0IsbUJBQW1CLENBQUMsWUFBWSxFQUFFLEVBQ2xDO0FBRUQ7SUEwQnVDLDZDQUFlO0lBRXJELDJCQUE0QixXQUF3QixFQUNqQyx1QkFBZ0QsRUFDL0MsVUFBc0IsRUFDdkMsb0JBQTBDLEVBQzFDLHdCQUFpRCxFQUNqRCx1QkFBb0QsRUFDcEQsdUJBQW1ELEVBQ25ELGdDQUFzRCxFQUN0RCx5QkFBaUQ7UUFScEQsWUFVQyxrQkFDQyxXQUFXLEVBQ1gsb0JBQW9CLENBQ3BCLFNBR0Q7UUFoQjJCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDL0MsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFZekMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRCx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7O0lBQ2hFLENBQUM7Ozs7SUFFRCx5Q0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7Z0JBaERELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLDJEQUdUO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxtQkFDTCxrQkFBa0I7d0JBQ3JCOzRCQUNDLE9BQU8sRUFBRSxvQkFBb0I7NEJBQzdCLFdBQVcsRUFBRSxpQkFBaUI7eUJBQzlCO3NCQUNEO29CQU1ELElBQUksRUFBRTt3QkFDTCx1QkFBdUIsRUFBRSxVQUFRO3dCQUNqQyxxQkFBcUIsRUFBRSxVQUFRO3dCQUMvQixNQUFNLEVBQUUsd0JBQXdCO3FCQUNoQzs7aUJBQ0Q7Ozs7Z0JBbkVRLFdBQVc7Z0JBV1gsdUJBQXVCO2dCQWZhLFVBQVU7Z0JBUTlDLG9CQUFvQjtnQkFLcEIsdUJBQXVCO2dCQUN2QiwyQkFBMkI7Z0JBUDNCLDBCQUEwQjtnQkFLMUIsb0JBQW9CO2dCQUlwQixzQkFBc0I7O0lBZ0YvQix3QkFBQztDQUFBLEFBbERELENBMEJ1QyxlQUFlLEdBd0JyRDtTQXhCWSxpQkFBaUI7OztJQUVqQix3Q0FBd0M7O0lBQ2pELG9EQUFnRTs7Ozs7SUFDaEUsdUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGlzdFZpZXdHYXRld2F5IH0gZnJvbSAnLi9nYXRld2F5L2xpc3Qtdmlldy5nYXRld2F5JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWRHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9ncmlkL2ZlYXR1cmUvc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVJZEZhY3RvcnkgfSBmcm9tICcuLi8uLi9ncmlkL2ZlYXR1cmUvc3RydWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBsaXN0Vmlld1Byb3ZpZGVycyB9IGZyb20gJy4vbGlzdC12aWV3LnByb3ZpZGVycyc7XG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IHByb3ZpZGVDb21wb25lbnRTZXJ2aWNlcyB9IGZyb20gJy4uLy4uL2dyaWQvZmVhdHVyZS9sb2NhbC9sb2NhbC1wcm92aWRlcnMnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vc291cmNlL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vY2FyZC90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vY29yZS9hcGkvcmVhZC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IExpc3RWaWV3Q29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9jb3JlL2FwaS9saXN0LXZpZXcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IGZpbHRlckNvbnRhaW5lclRva2VuIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2ZlYXR1cmUvY29uZmlnL2ZpbHRlci1jb250YWluZXItdG9rZW4nO1xuaW1wb3J0IHsgRmlsdGVyQ29udGFpbmVyUmVmIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2ZlYXR1cmUvY29uZmlnL2ZpbHRlci1jb250YWluZXItcmVmJztcblxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdFZpZXdJZEZhY3RvcnkoZ2VuZXJhdG9yOiBTdHJ1Y3R1cmVJZEdlbmVyYXRvcik6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIHtcblx0cmV0dXJuIG5ldyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCgnZ3VpLScgKyBnZW5lcmF0b3IuZ2VuZXJhdGVJZCgpKTtcbn1cblxuY29uc3QgY29tcG9uZW50UHJvdmlkZXJzID0gW3tcblx0cHJvdmlkZTogU3RydWN0dXJlSWQsXG5cdHVzZUZhY3Rvcnk6IHN0cnVjdHVyZUlkRmFjdG9yeSxcblx0ZGVwczogW1xuXHRcdFN0cnVjdHVyZUlkR2VuZXJhdG9yXG5cdF1cbn0sIHtcblx0cHJvdmlkZTogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdHVzZUZhY3Rvcnk6IGxpc3RWaWV3SWRGYWN0b3J5LFxuXHRkZXBzOiBbXG5cdFx0U3RydWN0dXJlSWRHZW5lcmF0b3Jcblx0XVxufSxcblx0Li4ubGlzdFZpZXdQcm92aWRlcnMsXG5cblx0Li4ucHJvdmlkZUNvbXBvbmVudFNlcnZpY2VzKCksXG5cblx0UGFnaW5nRmVhdHVyZU1vZHVsZS5mb3JDb21wb25lbnQoKVxuXTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3QtdmlldycsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWxpc3Qtdmlldy1sYXlvdXQ+PC9ndWktbGlzdC12aWV3LWxheW91dD5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHByb3ZpZGVyczogW1xuXHRcdC4uLmNvbXBvbmVudFByb3ZpZGVycyxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBmaWx0ZXJDb250YWluZXJUb2tlbixcblx0XHRcdHVzZUV4aXN0aW5nOiBMaXN0Vmlld0NvbXBvbmVudFxuXHRcdH1cblx0XSxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvbGlzdC12aWV3Lm5neC5zY3NzJyxcblx0XHQnLi9zb3VyY2UvbGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQubmd4LnNjc3MnLFxuXHRcdCcuL3N0eWxlL3RoZW1lL2dlbmVyaWMubGlzdC5uZ3guc2Nzcydcblx0XSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3Qtdmlld10nOiBgXCJ0cnVlXCJgLFxuXHRcdCdbY2xhc3MuZ3VpLWdlbmVyaWNdJzogYFwidHJ1ZVwiYCxcblx0XHQnW2lkXSc6ICdzdHJ1Y3R1cmVJZC50b1N0cmluZygpJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Q29tcG9uZW50IGV4dGVuZHMgTGlzdFZpZXdHYXRld2F5IGltcGxlbWVudHMgRmlsdGVyQ29udGFpbmVyUmVmIHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwdWJsaWMgcmVhZG9ubHkgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdFx0Y29udGFpbmVyVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSxcblx0XHRcdFx0bGlzdENhcmRUZW1wbGF0ZUFyY2hpdmU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlQXJjaGl2ZSxcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcjogUGFnaW5nQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdGxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXI6IExpc3RWaWV3Q29tbWFuZEludm9rZXJcblx0KSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRzdHJ1Y3R1cmVJZCxcblx0XHRcdHNvdXJjZUNvbW1hbmRTZXJ2aWNlXG5cdFx0KTtcblx0XHRzdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5jcmVhdGVTdHJ1Y3R1cmUodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0bGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlci5jcmVhdGUodGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XG5cdH1cblxufVxuIl19