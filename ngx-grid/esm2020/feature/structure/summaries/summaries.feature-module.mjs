import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { summariesInitializer } from '../../../core/structure/summaries/api/summaries.api-module';
import { StructureSummariesPanelComponent } from './panel/structure.summaries-panel.component';
import { FabricModule } from '@generic-ui/fabric';
import { TranslationFeatureModule } from '../../l10n/translation.feature-module';
import { provideSummariesCalculator } from './summaries.providers';
import { BooleanSummariesCalculator } from '../../../core/structure/summaries/domain/calculation/boolean/boolean-summaries.calculator';
import { DateSummariesCalculator } from '../../../core/structure/summaries/domain/calculation/date/date-summaries.calculator';
import { NumberSummariesCalculator } from '../../../core/structure/summaries/domain/calculation/number/number-summaries.calculator';
import { StringSummariesCalculator } from '../../../core/structure/summaries/domain/calculation/string/string-summaries.calculator';
import { UnknownSummariesCalculator } from '../../../core/structure/summaries/domain/calculation/unknown/unknown-summaries.calculator';
import { SummariesPublisher } from '../../../core/structure/summaries/api/summaries.publisher';
import { SummariesEventRepository } from '../../../core/structure/summaries/api/summaries.event-repository';
import { SummariesWarehouse } from '../../../core/structure/summaries/api/summaries.warehouse';
import * as i0 from "@angular/core";
summariesInitializer.init();
export function provideSummariesCommandInvoker() {
    return CoreContainer.resolve(SummariesPublisher);
}
export function provideSummariesWarehouse() {
    return CoreContainer.resolve(SummariesWarehouse);
}
export function provideSummariesEventRepository() {
    return CoreContainer.resolve(SummariesEventRepository);
}
export class SummariesFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SummariesFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SummariesFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SummariesFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SummariesFeatureModule, declarations: [StructureSummariesPanelComponent], imports: [CommonModule,
        FabricModule,
        TranslationFeatureModule], exports: [StructureSummariesPanelComponent] });
SummariesFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SummariesFeatureModule, providers: [
        { provide: SummariesPublisher, useFactory: provideSummariesCommandInvoker },
        { provide: SummariesWarehouse, useFactory: provideSummariesWarehouse },
        { provide: SummariesEventRepository, useFactory: provideSummariesEventRepository },
        // provideClass(SummariesEnabledArchive),
        provideSummariesCalculator(BooleanSummariesCalculator),
        provideSummariesCalculator(DateSummariesCalculator),
        provideSummariesCalculator(NumberSummariesCalculator),
        provideSummariesCalculator(StringSummariesCalculator),
        provideSummariesCalculator(UnknownSummariesCalculator)
    ], imports: [[
            CommonModule,
            FabricModule,
            TranslationFeatureModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SummariesFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        TranslationFeatureModule
                    ],
                    declarations: [
                        StructureSummariesPanelComponent
                    ],
                    exports: [
                        StructureSummariesPanelComponent
                    ],
                    providers: [
                        { provide: SummariesPublisher, useFactory: provideSummariesCommandInvoker },
                        { provide: SummariesWarehouse, useFactory: provideSummariesWarehouse },
                        { provide: SummariesEventRepository, useFactory: provideSummariesEventRepository },
                        // provideClass(SummariesEnabledArchive),
                        provideSummariesCalculator(BooleanSummariesCalculator),
                        provideSummariesCalculator(DateSummariesCalculator),
                        provideSummariesCalculator(NumberSummariesCalculator),
                        provideSummariesCalculator(StringSummariesCalculator),
                        provideSummariesCalculator(UnknownSummariesCalculator)
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJGQUEyRixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQzlILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQ3BJLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQ3BJLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJGQUEyRixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDOztBQUcvRixvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUU1QixNQUFNLFVBQVUsOEJBQThCO0lBQzdDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxNQUFNLFVBQVUseUJBQXlCO0lBQ3hDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxNQUFNLFVBQVUsK0JBQStCO0lBQzlDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUE0QkQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7SUFFeEQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztvSEFKVyxzQkFBc0I7cUhBQXRCLHNCQUFzQixpQkFuQmpDLGdDQUFnQyxhQUxoQyxZQUFZO1FBQ1osWUFBWTtRQUNaLHdCQUF3QixhQU14QixnQ0FBZ0M7cUhBZ0JyQixzQkFBc0IsYUFkdkI7UUFDVixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsOEJBQThCLEVBQUU7UUFDM0UsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixFQUFFO1FBQ3RFLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSwrQkFBK0IsRUFBRTtRQUVsRix5Q0FBeUM7UUFFekMsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7UUFDdEQsMEJBQTBCLENBQUMsdUJBQXVCLENBQUM7UUFDbkQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7UUFDckQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7UUFDckQsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7S0FDdEQsWUF2QlE7WUFDUixZQUFZO1lBQ1osWUFBWTtZQUNaLHdCQUF3QjtTQUN4Qjs0RkFxQlcsc0JBQXNCO2tCQTFCbEMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixZQUFZO3dCQUNaLHdCQUF3QjtxQkFDeEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGdDQUFnQztxQkFDaEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGdDQUFnQztxQkFDaEM7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSw4QkFBOEIsRUFBRTt3QkFDM0UsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixFQUFFO3dCQUN0RSxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsK0JBQStCLEVBQUU7d0JBRWxGLHlDQUF5Qzt3QkFFekMsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7d0JBQ3RELDBCQUEwQixDQUFDLHVCQUF1QixDQUFDO3dCQUNuRCwwQkFBMEIsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDckQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7d0JBQ3JELDBCQUEwQixDQUFDLDBCQUEwQixDQUFDO3FCQUN0RDtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciwgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IHN1bW1hcmllc0luaXRpYWxpemVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2FwaS9zdW1tYXJpZXMuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vcGFuZWwvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2wxMG4vdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgcHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL3N1bW1hcmllcy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgQm9vbGVhblN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvZG9tYWluL2NhbGN1bGF0aW9uL2Jvb2xlYW4vYm9vbGVhbi1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBEYXRlU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9kb21haW4vY2FsY3VsYXRpb24vZGF0ZS9kYXRlLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IE51bWJlclN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvZG9tYWluL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgU3RyaW5nU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9kb21haW4vY2FsY3VsYXRpb24vc3RyaW5nL3N0cmluZy1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBVbmtub3duU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9kb21haW4vY2FsY3VsYXRpb24vdW5rbm93bi91bmtub3duLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFN1bW1hcmllc1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9hcGkvc3VtbWFyaWVzLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvYXBpL3N1bW1hcmllcy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN1bW1hcmllc1dhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9hcGkvc3VtbWFyaWVzLndhcmVob3VzZSc7XG5cblxuc3VtbWFyaWVzSW5pdGlhbGl6ZXIuaW5pdCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN1bW1hcmllc0NvbW1hbmRJbnZva2VyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFN1bW1hcmllc1B1Ymxpc2hlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3VtbWFyaWVzV2FyZWhvdXNlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFN1bW1hcmllc1dhcmVob3VzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5KCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeSk7XG59XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBTdW1tYXJpZXNQdWJsaXNoZXIsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdW1tYXJpZXNDb21tYW5kSW52b2tlciB9LFxuXHRcdHsgcHJvdmlkZTogU3VtbWFyaWVzV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiBwcm92aWRlU3VtbWFyaWVzV2FyZWhvdXNlIH0sXG5cdFx0eyBwcm92aWRlOiBTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnksIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnkgfSxcblxuXHRcdC8vIHByb3ZpZGVDbGFzcyhTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSksXG5cblx0XHRwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvcihCb29sZWFuU3VtbWFyaWVzQ2FsY3VsYXRvciksXG5cdFx0cHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoRGF0ZVN1bW1hcmllc0NhbGN1bGF0b3IpLFxuXHRcdHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yKE51bWJlclN1bW1hcmllc0NhbGN1bGF0b3IpLFxuXHRcdHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yKFN0cmluZ1N1bW1hcmllc0NhbGN1bGF0b3IpLFxuXHRcdHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yKFVua25vd25TdW1tYXJpZXNDYWxjdWxhdG9yKVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc0ZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59XG4iXX0=