/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { StructureSummariesCommandDispatcher } from './structure-summaries.command-dispatcher';
import { StructureSummariesUiEventsRepository } from './structure-summaries.ui-events-repository';
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
                        StructureSummariesUiEventsRepository,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9hcGkvc3VtbWFyaWVzLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0YsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHOUU7SUFld0MsOENBQVM7SUFmakQ7O0lBZ0JBLENBQUM7O2dCQWhCQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1oscUJBQXFCO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsbUNBQW1DO3dCQUNuQyxvQ0FBb0M7d0JBRXBDLDRCQUE0Qjt3QkFDNUIsMkJBQTJCO3FCQUMzQjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7O0lBRUQseUJBQUM7Q0FBQSxBQWhCRCxDQWV3QyxTQUFTLEdBQ2hEO1NBRFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtc3VtbWFyaWVzLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNVaUV2ZW50c1JlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS1zdW1tYXJpZXMudWktZXZlbnRzLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3VtbWFyaWVzRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3N1bW1hcmllcy5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkgfSBmcm9tICcuL2VuYWJsZWQvc3RydWN0dXJlLnN1bW1hcmllcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1dhcmVob3VzZSB9IGZyb20gJy4vc3RydWN0dXJlLXN1bW1hcmllcy53YXJlaG91c2UnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0U3VtbWFyaWVzRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFN0cnVjdHVyZVN1bW1hcmllc1VpRXZlbnRzUmVwb3NpdG9yeSxcblxuXHRcdFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnksXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzV2FyZWhvdXNlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc0FwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG59XG4iXX0=