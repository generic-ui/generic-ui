/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { StructurePagingComponent } from './structure-paging.component';
import { StructurePagingNavigatorComponent } from './navigator/structure-paging-navigator.component';
import { StructurePagingSelectComponent } from './select/structure-paging-select.component';
import { StructurePagingStatsComponent } from './stats/structure-paging-stats.component';
import { StructureAlternativePagingNavigatorComponent } from './alternative-paging/navigator/structure-alternative-paging-navigator.component';
import { StructureAlternativePagingPagesComponent } from './alternative-paging/pages/structure-alternative-paging-pages.component';
var StructurePagingModule = /** @class */ (function () {
    function StructurePagingModule() {
    }
    StructurePagingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricModule
                    ],
                    declarations: [
                        StructurePagingComponent,
                        StructurePagingNavigatorComponent,
                        StructurePagingSelectComponent,
                        StructurePagingStatsComponent,
                        StructureAlternativePagingNavigatorComponent,
                        StructureAlternativePagingPagesComponent
                    ],
                    exports: [
                        StructurePagingComponent,
                        StructurePagingNavigatorComponent,
                        StructurePagingSelectComponent,
                        StructurePagingStatsComponent,
                        StructureAlternativePagingNavigatorComponent,
                        StructureAlternativePagingPagesComponent
                    ]
                },] }
    ];
    return StructurePagingModule;
}());
export { StructurePagingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDNUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDekYsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDL0ksT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFHbkk7SUFBQTtJQXVCQSxDQUFDOztnQkF2QkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLHdCQUF3Qjt3QkFDeEIsaUNBQWlDO3dCQUNqQyw4QkFBOEI7d0JBQzlCLDZCQUE2Qjt3QkFDN0IsNENBQTRDO3dCQUM1Qyx3Q0FBd0M7cUJBQ3hDO29CQUNELE9BQU8sRUFBRTt3QkFDUix3QkFBd0I7d0JBQ3hCLGlDQUFpQzt3QkFDakMsOEJBQThCO3dCQUM5Qiw2QkFBNkI7d0JBQzdCLDRDQUE0Qzt3QkFDNUMsd0NBQXdDO3FCQUN4QztpQkFDRDs7SUFFRCw0QkFBQztDQUFBLEFBdkJELElBdUJDO1NBRFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ0NvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLXBhZ2luZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0b3Ivc3RydWN0dXJlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0L3N0cnVjdHVyZS1wYWdpbmctc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdTdGF0c0NvbXBvbmVudCB9IGZyb20gJy4vc3RhdHMvc3RydWN0dXJlLXBhZ2luZy1zdGF0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgfSBmcm9tICcuL2FsdGVybmF0aXZlLXBhZ2luZy9uYXZpZ2F0b3Ivc3RydWN0dXJlLWFsdGVybmF0aXZlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnQgfSBmcm9tICcuL2FsdGVybmF0aXZlLXBhZ2luZy9wYWdlcy9zdHJ1Y3R1cmUtYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0U3RydWN0dXJlUGFnaW5nQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVQYWdpbmdTZWxlY3RDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlUGFnaW5nU3RhdHNDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlQWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlQWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlUGFnaW5nQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVQYWdpbmdTZWxlY3RDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlUGFnaW5nU3RhdHNDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlQWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlQWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhZ2luZ01vZHVsZSB7XG59XG4iXX0=