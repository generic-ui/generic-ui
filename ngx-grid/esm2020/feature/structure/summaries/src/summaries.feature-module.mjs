import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { initializeSummaries } from '../../../../core/structure/summaries/src/api/summaries.api-module';
import { StructureSummariesPanelComponent } from './panel/structure.summaries-panel.component';
import { FabricModule } from '@generic-ui/fabric';
import { TranslationFeatureModule } from '../../../l10n/translation.feature-module';
import { provideSummariesCalculator } from './summaries.providers';
import { BooleanSummariesCalculator } from '../../../../core/structure/summaries/src/domain/calculation/boolean/boolean-summaries.calculator';
import { DateSummariesCalculator } from '../../../../core/structure/summaries/src/domain/calculation/date/date-summaries.calculator';
import { NumberSummariesCalculator } from '../../../../core/structure/summaries/src/domain/calculation/number/number-summaries.calculator';
import { StringSummariesCalculator } from '../../../../core/structure/summaries/src/domain/calculation/string/string-summaries.calculator';
import { UnknownSummariesCalculator } from '../../../../core/structure/summaries/src/domain/calculation/unknown/unknown-summaries.calculator';
import { SummariesPublisher } from '../../../../core/structure/summaries/src/api/summaries.publisher';
import { SummariesEventRepository } from '../../../../core/structure/summaries/src/api/summaries.event-repository';
import { SummariesWarehouse } from '../../../../core/structure/summaries/src/api/summaries.warehouse';
import * as i0 from "@angular/core";
initializeSummaries();
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
SummariesFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SummariesFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SummariesFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: SummariesFeatureModule, declarations: [StructureSummariesPanelComponent], imports: [CommonModule,
        FabricModule,
        TranslationFeatureModule], exports: [StructureSummariesPanelComponent] });
SummariesFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SummariesFeatureModule, providers: [
        { provide: SummariesPublisher, useFactory: provideSummariesCommandInvoker },
        { provide: SummariesWarehouse, useFactory: provideSummariesWarehouse },
        { provide: SummariesEventRepository, useFactory: provideSummariesEventRepository },
        // provideClass(SummariesEnabledArchive),
        provideSummariesCalculator(BooleanSummariesCalculator),
        provideSummariesCalculator(DateSummariesCalculator),
        provideSummariesCalculator(NumberSummariesCalculator),
        provideSummariesCalculator(StringSummariesCalculator),
        provideSummariesCalculator(UnknownSummariesCalculator)
    ], imports: [CommonModule,
        FabricModule,
        TranslationFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SummariesFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3JjL3N1bW1hcmllcy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrR0FBa0csQ0FBQztBQUM5SSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0RkFBNEYsQ0FBQztBQUNySSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnR0FBZ0csQ0FBQztBQUMzSSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnR0FBZ0csQ0FBQztBQUMzSSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrR0FBa0csQ0FBQztBQUM5SSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN0RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQzs7QUFHdEcsbUJBQW1CLEVBQUUsQ0FBQztBQUV0QixNQUFNLFVBQVUsOEJBQThCO0lBQzdDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxNQUFNLFVBQVUseUJBQXlCO0lBQ3hDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxNQUFNLFVBQVUsK0JBQStCO0lBQzlDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUE0QkQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7SUFFeEQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOzttSEFKVyxzQkFBc0I7b0hBQXRCLHNCQUFzQixpQkFuQmpDLGdDQUFnQyxhQUxoQyxZQUFZO1FBQ1osWUFBWTtRQUNaLHdCQUF3QixhQU14QixnQ0FBZ0M7b0hBZ0JyQixzQkFBc0IsYUFkdkI7UUFDVixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsOEJBQThCLEVBQUU7UUFDM0UsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixFQUFFO1FBQ3RFLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSwrQkFBK0IsRUFBRTtRQUVsRix5Q0FBeUM7UUFFekMsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7UUFDdEQsMEJBQTBCLENBQUMsdUJBQXVCLENBQUM7UUFDbkQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7UUFDckQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7UUFDckQsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7S0FDdEQsWUF0QkEsWUFBWTtRQUNaLFlBQVk7UUFDWix3QkFBd0I7MkZBc0JiLHNCQUFzQjtrQkExQmxDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osWUFBWTt3QkFDWix3QkFBd0I7cUJBQ3hCO29CQUNELFlBQVksRUFBRTt3QkFDYixnQ0FBZ0M7cUJBQ2hDO29CQUNELE9BQU8sRUFBRTt3QkFDUixnQ0FBZ0M7cUJBQ2hDO29CQUNELFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsOEJBQThCLEVBQUU7d0JBQzNFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTt3QkFDdEUsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLCtCQUErQixFQUFFO3dCQUVsRix5Q0FBeUM7d0JBRXpDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDO3dCQUN0RCwwQkFBMEIsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDbkQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7d0JBQ3JELDBCQUEwQixDQUFDLHlCQUF5QixDQUFDO3dCQUNyRCwwQkFBMEIsQ0FBQywwQkFBMEIsQ0FBQztxQkFDdEQ7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvcmVDb250YWluZXIsIEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBpbml0aWFsaXplU3VtbWFyaWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9hcGkvc3VtbWFyaWVzLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BhbmVsL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9sMTBuL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi9zdW1tYXJpZXMucHJvdmlkZXJzJztcbmltcG9ydCB7IEJvb2xlYW5TdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9kb21haW4vY2FsY3VsYXRpb24vYm9vbGVhbi9ib29sZWFuLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IERhdGVTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9kb21haW4vY2FsY3VsYXRpb24vZGF0ZS9kYXRlLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IE51bWJlclN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3JjL2RvbWFpbi9jYWxjdWxhdGlvbi9udW1iZXIvbnVtYmVyLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFN0cmluZ1N1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3JjL2RvbWFpbi9jYWxjdWxhdGlvbi9zdHJpbmcvc3RyaW5nLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFVua25vd25TdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9kb21haW4vY2FsY3VsYXRpb24vdW5rbm93bi91bmtub3duLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFN1bW1hcmllc1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9zcmMvYXBpL3N1bW1hcmllcy5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9hcGkvc3VtbWFyaWVzLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3VtbWFyaWVzV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9hcGkvc3VtbWFyaWVzLndhcmVob3VzZSc7XG5cblxuaW5pdGlhbGl6ZVN1bW1hcmllcygpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN1bW1hcmllc0NvbW1hbmRJbnZva2VyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFN1bW1hcmllc1B1Ymxpc2hlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3VtbWFyaWVzV2FyZWhvdXNlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFN1bW1hcmllc1dhcmVob3VzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5KCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeSk7XG59XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBTdW1tYXJpZXNQdWJsaXNoZXIsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdW1tYXJpZXNDb21tYW5kSW52b2tlciB9LFxuXHRcdHsgcHJvdmlkZTogU3VtbWFyaWVzV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiBwcm92aWRlU3VtbWFyaWVzV2FyZWhvdXNlIH0sXG5cdFx0eyBwcm92aWRlOiBTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnksIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnkgfSxcblxuXHRcdC8vIHByb3ZpZGVDbGFzcyhTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSksXG5cblx0XHRwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvcihCb29sZWFuU3VtbWFyaWVzQ2FsY3VsYXRvciksXG5cdFx0cHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoRGF0ZVN1bW1hcmllc0NhbGN1bGF0b3IpLFxuXHRcdHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yKE51bWJlclN1bW1hcmllc0NhbGN1bGF0b3IpLFxuXHRcdHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yKFN0cmluZ1N1bW1hcmllc0NhbGN1bGF0b3IpLFxuXHRcdHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yKFVua25vd25TdW1tYXJpZXNDYWxjdWxhdG9yKVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc0ZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59XG4iXX0=