import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { initializeSummaries } from '../../../../core/structure/summaries/src/api/summaries.api-module';
import { StructureSummariesPanelComponent } from './panel/structure.summaries-panel.component';
import { FabricModule } from '@generic-ui/fabric';
import { TranslationFeatureModule } from '../../../l10n/src/translation.feature-module';
import { provideSummariesCalculator } from './summaries.providers';
import { BooleanSummariesCalculator } from '../../../../core/structure/summaries/src/domain/calculation/boolean/boolean-summaries.calculator';
import { DateSummariesCalculator } from '../../../../core/structure/summaries/src/domain/calculation/date/date-summaries.calculator';
import { NumberSummariesCalculator } from '../../../../core/structure/summaries/src/domain/calculation/number/number-summaries.calculator';
import { StringSummariesCalculator } from '../../../../core/structure/summaries/src/domain/calculation/string/string-summaries.calculator';
import { UnknownSummariesCalculator } from '../../../../core/structure/summaries/src/domain/calculation/unknown/unknown-summaries.calculator';
import { SummariesPublisher } from '../../../../core/structure/summaries/src/api/summaries.publisher';
import { SummariesEventRepository } from '../../../../core/structure/summaries/src/api/summaries.event-repository';
import { SummariesWarehouse } from '../../../../core/structure/summaries/src/api/summaries.warehouse';
import { GuiTemplateModule } from '../../../gui-angular/template/gui.template.module';
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SummariesFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SummariesFeatureModule, declarations: [StructureSummariesPanelComponent], imports: [CommonModule,
            FabricModule,
            TranslationFeatureModule,
            GuiTemplateModule], exports: [StructureSummariesPanelComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SummariesFeatureModule, providers: [
            { provide: SummariesPublisher, useFactory: provideSummariesCommandInvoker },
            { provide: SummariesWarehouse, useFactory: provideSummariesWarehouse },
            { provide: SummariesEventRepository, useFactory: provideSummariesEventRepository },
            provideSummariesCalculator(BooleanSummariesCalculator),
            provideSummariesCalculator(DateSummariesCalculator),
            provideSummariesCalculator(NumberSummariesCalculator),
            provideSummariesCalculator(StringSummariesCalculator),
            provideSummariesCalculator(UnknownSummariesCalculator)
        ], imports: [CommonModule,
            FabricModule,
            TranslationFeatureModule,
            GuiTemplateModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SummariesFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        TranslationFeatureModule,
                        GuiTemplateModule
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
                        provideSummariesCalculator(BooleanSummariesCalculator),
                        provideSummariesCalculator(DateSummariesCalculator),
                        provideSummariesCalculator(NumberSummariesCalculator),
                        provideSummariesCalculator(StringSummariesCalculator),
                        provideSummariesCalculator(UnknownSummariesCalculator)
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3JjL3N1bW1hcmllcy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrR0FBa0csQ0FBQztBQUM5SSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0RkFBNEYsQ0FBQztBQUNySSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnR0FBZ0csQ0FBQztBQUMzSSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnR0FBZ0csQ0FBQztBQUMzSSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrR0FBa0csQ0FBQztBQUM5SSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN0RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7QUFHdEYsbUJBQW1CLEVBQUUsQ0FBQztBQUV0QixNQUFNLFVBQVUsOEJBQThCO0lBQzdDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxNQUFNLFVBQVUseUJBQXlCO0lBQ3hDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxNQUFNLFVBQVUsK0JBQStCO0lBQzlDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUEyQkQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7SUFFeEQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO3dHQUpXLHNCQUFzQjt5R0FBdEIsc0JBQXNCLGlCQWpCakMsZ0NBQWdDLGFBTmhDLFlBQVk7WUFDWixZQUFZO1lBQ1osd0JBQXdCO1lBQ3hCLGlCQUFpQixhQU1qQixnQ0FBZ0M7eUdBY3JCLHNCQUFzQixhQVp2QjtZQUNWLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSw4QkFBOEIsRUFBRTtZQUMzRSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUseUJBQXlCLEVBQUU7WUFDdEUsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLCtCQUErQixFQUFFO1lBRWxGLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDO1lBQ3RELDBCQUEwQixDQUFDLHVCQUF1QixDQUFDO1lBQ25ELDBCQUEwQixDQUFDLHlCQUF5QixDQUFDO1lBQ3JELDBCQUEwQixDQUFDLHlCQUF5QixDQUFDO1lBQ3JELDBCQUEwQixDQUFDLDBCQUEwQixDQUFDO1NBQ3RELFlBckJBLFlBQVk7WUFDWixZQUFZO1lBQ1osd0JBQXdCO1lBQ3hCLGlCQUFpQjs7NEZBb0JOLHNCQUFzQjtrQkF6QmxDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osWUFBWTt3QkFDWix3QkFBd0I7d0JBQ3hCLGlCQUFpQjtxQkFDakI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGdDQUFnQztxQkFDaEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGdDQUFnQztxQkFDaEM7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSw4QkFBOEIsRUFBRTt3QkFDM0UsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixFQUFFO3dCQUN0RSxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsK0JBQStCLEVBQUU7d0JBRWxGLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDO3dCQUN0RCwwQkFBMEIsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDbkQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7d0JBQ3JELDBCQUEwQixDQUFDLHlCQUF5QixDQUFDO3dCQUNyRCwwQkFBMEIsQ0FBQywwQkFBMEIsQ0FBQztxQkFDdEQ7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvcmVDb250YWluZXIsIEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBpbml0aWFsaXplU3VtbWFyaWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9hcGkvc3VtbWFyaWVzLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BhbmVsL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9sMTBuL3NyYy90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4vc3VtbWFyaWVzLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBCb29sZWFuU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9zcmMvZG9tYWluL2NhbGN1bGF0aW9uL2Jvb2xlYW4vYm9vbGVhbi1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBEYXRlU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9zcmMvZG9tYWluL2NhbGN1bGF0aW9uL2RhdGUvZGF0ZS1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBOdW1iZXJTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9kb21haW4vY2FsY3VsYXRpb24vbnVtYmVyL251bWJlci1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBTdHJpbmdTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9kb21haW4vY2FsY3VsYXRpb24vc3RyaW5nL3N0cmluZy1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBVbmtub3duU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9zcmMvZG9tYWluL2NhbGN1bGF0aW9uL3Vua25vd24vdW5rbm93bi1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBTdW1tYXJpZXNQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3JjL2FwaS9zdW1tYXJpZXMucHVibGlzaGVyJztcbmltcG9ydCB7IFN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9zcmMvYXBpL3N1bW1hcmllcy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN1bW1hcmllc1dhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9zcmMvYXBpL3N1bW1hcmllcy53YXJlaG91c2UnO1xuaW1wb3J0IHsgR3VpVGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9ndWktYW5ndWxhci90ZW1wbGF0ZS9ndWkudGVtcGxhdGUubW9kdWxlJztcblxuXG5pbml0aWFsaXplU3VtbWFyaWVzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3VtbWFyaWVzQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU3VtbWFyaWVzUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdW1tYXJpZXNXYXJlaG91c2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU3VtbWFyaWVzV2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnkoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5KTtcbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlLFxuXHRcdEd1aVRlbXBsYXRlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IFN1bW1hcmllc1B1Ymxpc2hlciwgdXNlRmFjdG9yeTogcHJvdmlkZVN1bW1hcmllc0NvbW1hbmRJbnZva2VyIH0sXG5cdFx0eyBwcm92aWRlOiBTdW1tYXJpZXNXYXJlaG91c2UsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdW1tYXJpZXNXYXJlaG91c2UgfSxcblx0XHR7IHByb3ZpZGU6IFN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogcHJvdmlkZVN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeSB9LFxuXG5cdFx0cHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoQm9vbGVhblN1bW1hcmllc0NhbGN1bGF0b3IpLFxuXHRcdHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yKERhdGVTdW1tYXJpZXNDYWxjdWxhdG9yKSxcblx0XHRwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvcihOdW1iZXJTdW1tYXJpZXNDYWxjdWxhdG9yKSxcblx0XHRwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvcihTdHJpbmdTdW1tYXJpZXNDYWxjdWxhdG9yKSxcblx0XHRwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvcihVbmtub3duU3VtbWFyaWVzQ2FsY3VsYXRvcilcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxufVxuIl19