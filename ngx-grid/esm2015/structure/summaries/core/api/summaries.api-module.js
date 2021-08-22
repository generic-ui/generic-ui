/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { StructureSummariesCommandDispatcher } from './structure-summaries.command-dispatcher';
import { StructureSummariesEventRepository } from './structure-summaries.event-repository';
import { SummariesDomainModule } from '../domain/summaries.domain-module';
import { StructureSummariesRepository } from './enabled/structure.summaries.repository';
import { StructureSummariesWarehouse } from './structure-summaries.warehouse';
export class SummariesApiModule extends ApiModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9hcGkvc3VtbWFyaWVzLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQWtCOUUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFNBQVM7OztZQWZoRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1oscUJBQXFCO2lCQUNyQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsbUNBQW1DO29CQUNuQyxpQ0FBaUM7b0JBRWpDLDRCQUE0QjtvQkFDNUIsMkJBQTJCO2lCQUMzQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vc3RydWN0dXJlLXN1bW1hcmllcy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmUtc3VtbWFyaWVzLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3VtbWFyaWVzRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3N1bW1hcmllcy5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkgfSBmcm9tICcuL2VuYWJsZWQvc3RydWN0dXJlLnN1bW1hcmllcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1dhcmVob3VzZSB9IGZyb20gJy4vc3RydWN0dXJlLXN1bW1hcmllcy53YXJlaG91c2UnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0U3VtbWFyaWVzRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFN0cnVjdHVyZVN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeSxcblxuXHRcdFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnksXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzV2FyZWhvdXNlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc0FwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG59XG4iXX0=