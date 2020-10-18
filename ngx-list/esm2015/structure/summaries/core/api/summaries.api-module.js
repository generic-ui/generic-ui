/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { StructureSummariesCommandDispatcher } from './structure-summaries.command-dispatcher';
import { StructureSummariesUiEventsRepository } from './structure-summaries.ui-events-repository';
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
                    StructureSummariesUiEventsRepository,
                    StructureSummariesRepository,
                    StructureSummariesWarehouse
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9hcGkvc3VtbWFyaWVzLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQWtCOUUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFNBQVM7OztZQWZoRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1oscUJBQXFCO2lCQUNyQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsbUNBQW1DO29CQUNuQyxvQ0FBb0M7b0JBRXBDLDRCQUE0QjtvQkFDNUIsMkJBQTJCO2lCQUMzQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vc3RydWN0dXJlLXN1bW1hcmllcy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzVWlFdmVudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmUtc3VtbWFyaWVzLnVpLWV2ZW50cy1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN1bW1hcmllc0RvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9zdW1tYXJpZXMuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9lbmFibGVkL3N0cnVjdHVyZS5zdW1tYXJpZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNXYXJlaG91c2UgfSBmcm9tICcuL3N0cnVjdHVyZS1zdW1tYXJpZXMud2FyZWhvdXNlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFN1bW1hcmllc0RvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNVaUV2ZW50c1JlcG9zaXRvcnksXG5cblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5LFxuXHRcdFN0cnVjdHVyZVN1bW1hcmllc1dhcmVob3VzZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19