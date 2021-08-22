/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { StructureSummariesCommandDispatcher } from './structure-summaries.command-dispatcher';
import { StructureSummariesEventRepository } from './structure-summaries.event-repository';
import { SummariesDomainModule } from '../domain/summaries.domain-module';
import { StructureSummariesRepository } from './enabled/structure.summaries.repository';
import { StructureSummariesWarehouse } from './structure-summaries.warehouse';
var SummariesApiModule = /** @class */ (function (_super) {
    tslib_1.__extends(SummariesApiModule, _super);
    function SummariesApiModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SummariesApiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SummariesDomainModule
                    ],
                    providers: [
                        StructureSummariesCommandDispatcher,
                        StructureSummariesEventRepository,
                        StructureSummariesRepository,
                        StructureSummariesWarehouse
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    return SummariesApiModule;
}(ApiModule));
export { SummariesApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9hcGkvc3VtbWFyaWVzLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0YsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHOUU7SUFld0MsOENBQVM7SUFmakQ7O0lBZ0JBLENBQUM7O2dCQWhCQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1oscUJBQXFCO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsbUNBQW1DO3dCQUNuQyxpQ0FBaUM7d0JBRWpDLDRCQUE0Qjt3QkFDNUIsMkJBQTJCO3FCQUMzQjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7O0lBRUQseUJBQUM7Q0FBQSxBQWhCRCxDQWV3QyxTQUFTLEdBQ2hEO1NBRFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtc3VtbWFyaWVzLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS1zdW1tYXJpZXMuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vc3VtbWFyaWVzLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSB9IGZyb20gJy4vZW5hYmxlZC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzV2FyZWhvdXNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtc3VtbWFyaWVzLndhcmVob3VzZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRTdW1tYXJpZXNEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5LFxuXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSxcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNXYXJlaG91c2Vcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcbn1cbiJdfQ==