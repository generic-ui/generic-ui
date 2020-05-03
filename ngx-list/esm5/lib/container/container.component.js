/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ContainerGateway } from './container.gateway';
import { StructureId } from '../structure/domain/structure.id';
import { StructureIdGenerator } from '../structure/feature/structure-id.generator';
import { structureIdFactory } from '../structure/feature/structure.component';
import { StructureCommandDispatcher } from '../structure/feature-api/structure.command-dispatcher';
import { SourceCommandDispatcher } from '../structure/feature-api/source/source.command-dispatcher';
import { containerProviders } from './container.providers';
import { ContainerTemplateArchive } from './template/container-template.archive';
var ɵ0 = structureIdFactory;
/** @type {?} */
var localProviders = tslib_1.__spread([{
        provide: StructureId,
        useFactory: ɵ0,
        deps: [
            StructureIdGenerator
        ]
    }], containerProviders);
var ContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ContainerComponent, _super);
    function ContainerComponent(structureId, sourceCommandService, containerTemplateArchive, structureCommandService) {
        var _this = _super.call(this, structureId, sourceCommandService, containerTemplateArchive) || this;
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
                    providers: localProviders,
                    host: {
                        '[class]': "\"gui-container\"",
                        '[id]': 'structureId.toString()'
                    },
                    styles: [".gui-container-source{display:block;padding:8px}.gui-list-item{border-radius:4px;border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.15);display:block;margin:8px 0;width:100%}.gui-list-item div{padding:12px 16px}"]
                }] }
    ];
    /** @nocollapse */
    ContainerComponent.ctorParameters = function () { return [
        { type: StructureId },
        { type: SourceCommandDispatcher },
        { type: ContainerTemplateArchive },
        { type: StructureCommandDispatcher }
    ]; };
    return ContainerComponent;
}(ContainerGateway));
export { ContainerComponent };
if (false) {
    /** @type {?} */
    ContainerComponent.prototype.structureId;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbkcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDcEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7U0FLcEUsa0JBQWtCOztJQUZ6QixjQUFjLHFCQUFJO1FBQ3ZCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFVBQVUsSUFBb0I7UUFDOUIsSUFBSSxFQUFFO1lBQ0wsb0JBQW9CO1NBQ3BCO0tBQ0QsR0FDRyxrQkFBa0IsQ0FDckI7QUFFRDtJQWlCd0MsOENBQWdCO0lBRXZELDRCQUE0QixXQUF3QixFQUNqRCxvQkFBNkMsRUFDN0Msd0JBQWtELEVBQ2xELHVCQUFtRDtRQUh0RCxZQUtDLGtCQUNDLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsd0JBQXdCLENBQ3hCLFNBRUQ7UUFYMkIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFVbkQsdUJBQXVCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFDM0QsQ0FBQzs7Z0JBOUJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLDJEQUdUO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLGNBQWM7b0JBSXpCLElBQUksRUFBRTt3QkFDTCxTQUFTLEVBQUUsbUJBQWlCO3dCQUM1QixNQUFNLEVBQUUsd0JBQXdCO3FCQUNoQzs7aUJBQ0Q7Ozs7Z0JBbkNRLFdBQVc7Z0JBSVgsdUJBQXVCO2dCQUV2Qix3QkFBd0I7Z0JBSHhCLDBCQUEwQjs7SUFnRG5DLHlCQUFDO0NBQUEsQUFoQ0QsQ0FpQndDLGdCQUFnQixHQWV2RDtTQWZZLGtCQUFrQjs7O0lBRWxCLHlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRhaW5lckdhdGV3YXkgfSBmcm9tICcuL2NvbnRhaW5lci5nYXRld2F5JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4uL3N0cnVjdHVyZS9mZWF0dXJlL3N0cnVjdHVyZS1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgc3RydWN0dXJlSWRGYWN0b3J5IH0gZnJvbSAnLi4vc3RydWN0dXJlL2ZlYXR1cmUvc3RydWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vc3RydWN0dXJlL2ZlYXR1cmUtYXBpL3NvdXJjZS9zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IGNvbnRhaW5lclByb3ZpZGVycyB9IGZyb20gJy4vY29udGFpbmVyLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBDb250YWluZXJUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL3RlbXBsYXRlL2NvbnRhaW5lci10ZW1wbGF0ZS5hcmNoaXZlJztcblxuXG5jb25zdCBsb2NhbFByb3ZpZGVycyA9IFt7XG5cdHByb3ZpZGU6IFN0cnVjdHVyZUlkLFxuXHR1c2VGYWN0b3J5OiBzdHJ1Y3R1cmVJZEZhY3RvcnksXG5cdGRlcHM6IFtcblx0XHRTdHJ1Y3R1cmVJZEdlbmVyYXRvclxuXHRdXG59LFxuXHQuLi5jb250YWluZXJQcm92aWRlcnNcbl07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1jb250YWluZXInLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1jb250YWluZXItbGF5b3V0PjwvZ3VpLWNvbnRhaW5lci1sYXlvdXQ+XG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRwcm92aWRlcnM6IGxvY2FsUHJvdmlkZXJzLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zb3VyY2UvY29udGFpbmVyLXNvdXJjZS5jb21wb25lbnQubmd4LnNjc3MnXG5cdF0sXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6IGBcImd1aS1jb250YWluZXJcImAsXG5cdFx0J1tpZF0nOiAnc3RydWN0dXJlSWQudG9TdHJpbmcoKSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBDb250YWluZXJHYXRld2F5IHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdGNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZTogQ29udGFpbmVyVGVtcGxhdGVBcmNoaXZlLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXJcblx0KSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRzdHJ1Y3R1cmVJZCxcblx0XHRcdHNvdXJjZUNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0Y29udGFpbmVyVGVtcGxhdGVBcmNoaXZlXG5cdFx0KTtcblx0XHRzdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5jcmVhdGVTdHJ1Y3R1cmUodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19