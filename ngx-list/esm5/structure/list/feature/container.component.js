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
import { StructureCommandDispatcher } from '../../../lib/structure/feature-api/structure.command-dispatcher';
import { SourceCommandDispatcher } from '../../../lib/structure/feature-api/source/source.command-dispatcher';
import { containerProviders } from './container.providers';
import { ContainerTemplateArchive } from './template/container-template.archive';
import { PagingFeatureModule } from '../../paging/feature/paging.feature-module';
import { provideComponentServices } from '../../../lib/structure/feature/local/local-providers';
import { PagingCommandDispatcher } from '../../paging/domain-api/paging.command-dispatcher';
var ɵ0 = structureIdFactory;
/** @type {?} */
var componentProviders = tslib_1.__spread([{
        provide: StructureId,
        useFactory: ɵ0,
        deps: [
            StructureIdGenerator
        ]
    }], containerProviders, provideComponentServices(), [PagingFeatureModule.forComponent()]);
var ContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ContainerComponent, _super);
    function ContainerComponent(structureId, sourceCommandService, containerTemplateArchive, structureCommandService, structurePagingCommandDispatcher) {
        var _this = _super.call(this, structureId, sourceCommandService, containerTemplateArchive, structurePagingCommandDispatcher) || this;
        _this.structureId = structureId;
        structureCommandService.createStructure(_this.structureId);
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
                    styles: [".gui-container-source{display:block;padding:8px}.gui-list-item{border-radius:4px;border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.15);display:block;margin:8px 0;width:100%}.gui-list-item .gui-list-item-container{padding:12px 16px}", ".gui-container.gui-generic .gui-paging{border:0}"]
                }] }
    ];
    /** @nocollapse */
    ContainerComponent.ctorParameters = function () { return [
        { type: StructureId },
        { type: SourceCommandDispatcher },
        { type: ContainerTemplateArchive },
        { type: StructureCommandDispatcher },
        { type: PagingCommandDispatcher }
    ]; };
    return ContainerComponent;
}(ContainerGateway));
export { ContainerComponent };
if (false) {
    /** @type {?} */
    ContainerComponent.prototype.structureId;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDeEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDN0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDOUcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFrQix3QkFBd0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO1NBSy9FLGtCQUFrQjs7SUFGekIsa0JBQWtCLHFCQUFJO1FBQzNCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFVBQVUsSUFBb0I7UUFDOUIsSUFBSSxFQUFFO1lBQ0wsb0JBQW9CO1NBQ3BCO0tBQ0QsR0FDRyxrQkFBa0IsRUFFbEIsd0JBQXdCLEVBQUUsR0FFN0IsbUJBQW1CLENBQUMsWUFBWSxFQUFFLEVBQ2xDO0FBRUQ7SUFtQndDLDhDQUFnQjtJQUV2RCw0QkFBNEIsV0FBd0IsRUFDakQsb0JBQTZDLEVBQzdDLHdCQUFrRCxFQUNsRCx1QkFBbUQsRUFDbkQsZ0NBQXlEO1FBSjVELFlBTUMsa0JBQ0MsV0FBVyxFQUNYLG9CQUFvQixFQUNwQix3QkFBd0IsRUFDeEIsZ0NBQWdDLENBQ2hDLFNBRUQ7UUFiMkIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFZbkQsdUJBQXVCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFDM0QsQ0FBQzs7Z0JBbENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLDJEQUdUO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLGtCQUFrQjtvQkFLN0IsSUFBSSxFQUFFO3dCQUNMLHVCQUF1QixFQUFFLFVBQVE7d0JBQ2pDLHFCQUFxQixFQUFFLFVBQVE7d0JBQy9CLE1BQU0sRUFBRSx3QkFBd0I7cUJBQ2hDOztpQkFDRDs7OztnQkE1Q1EsV0FBVztnQkFJWCx1QkFBdUI7Z0JBRXZCLHdCQUF3QjtnQkFIeEIsMEJBQTBCO2dCQU0xQix1QkFBdUI7O0lBcURoQyx5QkFBQztDQUFBLEFBcENELENBbUJ3QyxnQkFBZ0IsR0FpQnZEO1NBakJZLGtCQUFrQjs7O0lBRWxCLHlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRhaW5lckdhdGV3YXkgfSBmcm9tICcuL2NvbnRhaW5lci5nYXRld2F5JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWRHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2ZlYXR1cmUvc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVJZEZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2ZlYXR1cmUvc3RydWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgY29udGFpbmVyUHJvdmlkZXJzIH0gZnJvbSAnLi9jb250YWluZXIucHJvdmlkZXJzJztcbmltcG9ydCB7IENvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vdGVtcGxhdGUvY29udGFpbmVyLXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgUGFnaW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBsb2NhbFByb3ZpZGVycywgcHJvdmlkZUNvbXBvbmVudFNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL2xvY2FsLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5cbmNvbnN0IGNvbXBvbmVudFByb3ZpZGVycyA9IFt7XG5cdHByb3ZpZGU6IFN0cnVjdHVyZUlkLFxuXHR1c2VGYWN0b3J5OiBzdHJ1Y3R1cmVJZEZhY3RvcnksXG5cdGRlcHM6IFtcblx0XHRTdHJ1Y3R1cmVJZEdlbmVyYXRvclxuXHRdXG59LFxuXHQuLi5jb250YWluZXJQcm92aWRlcnMsXG5cblx0Li4ucHJvdmlkZUNvbXBvbmVudFNlcnZpY2VzKCksXG5cblx0UGFnaW5nRmVhdHVyZU1vZHVsZS5mb3JDb21wb25lbnQoKVxuXTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWNvbnRhaW5lcicsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWNvbnRhaW5lci1sYXlvdXQ+PC9ndWktY29udGFpbmVyLWxheW91dD5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHByb3ZpZGVyczogY29tcG9uZW50UHJvdmlkZXJzLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zb3VyY2UvY29udGFpbmVyLXNvdXJjZS5jb21wb25lbnQubmd4LnNjc3MnLFxuXHRcdCcuL3N0eWxlL3RoZW1lL2dlbmVyaWMubGlzdC5uZ3guc2Nzcydcblx0XSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWNvbnRhaW5lcl0nOiBgXCJ0cnVlXCJgLFxuXHRcdCdbY2xhc3MuZ3VpLWdlbmVyaWNdJzogYFwidHJ1ZVwiYCxcblx0XHQnW2lkXSc6ICdzdHJ1Y3R1cmVJZC50b1N0cmluZygpJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIENvbnRhaW5lckdhdGV3YXkge1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0Y29udGFpbmVyVGVtcGxhdGVBcmNoaXZlOiBDb250YWluZXJUZW1wbGF0ZUFyY2hpdmUsXG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0c3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXI6IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyXG5cdCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0c3RydWN0dXJlSWQsXG5cdFx0XHRzb3VyY2VDb21tYW5kU2VydmljZSxcblx0XHRcdGNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZSxcblx0XHRcdHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyXG5cdFx0KTtcblx0XHRzdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5jcmVhdGVTdHJ1Y3R1cmUodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19