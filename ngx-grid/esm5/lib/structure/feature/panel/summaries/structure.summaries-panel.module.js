/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { StructureSummariesArchive } from './structure.summaries.archive';
import { StructureSummariesConfigService } from './structure.summaries-config.service';
import { StructureSummariesPanelConfigConverter } from './structure.summaries-panel.config-converter';
import { StructureSummariesPanelComponent } from './structure.summaries-panel.component';
var StructureSummariesPanelModule = /** @class */ (function () {
    function StructureSummariesPanelModule() {
    }
    StructureSummariesPanelModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricModule
                    ],
                    declarations: [
                        StructureSummariesPanelComponent
                    ],
                    exports: [
                        StructureSummariesPanelComponent
                    ],
                    providers: [
                        StructureSummariesArchive,
                        StructureSummariesConfigService,
                        StructureSummariesPanelConfigConverter
                    ]
                },] }
    ];
    return StructureSummariesPanelModule;
}());
export { StructureSummariesPanelModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9wYW5lbC9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUd6RjtJQUFBO0lBa0JBLENBQUM7O2dCQWxCQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osWUFBWTtxQkFDWjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsZ0NBQWdDO3FCQUNoQztvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsZ0NBQWdDO3FCQUNoQztvQkFDRCxTQUFTLEVBQUU7d0JBQ1YseUJBQXlCO3dCQUN6QiwrQkFBK0I7d0JBQy9CLHNDQUFzQztxQkFDdEM7aUJBQ0Q7O0lBRUQsb0NBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQURZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUsXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSxcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlclxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsTW9kdWxlIHtcbn1cbiJdfQ==