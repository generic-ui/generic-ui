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
SummariesFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SummariesFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SummariesFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SummariesFeatureModule, declarations: [StructureSummariesPanelComponent], imports: [CommonModule,
        FabricModule,
        TranslationFeatureModule], exports: [StructureSummariesPanelComponent] });
SummariesFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SummariesFeatureModule, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SummariesFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJGQUEyRixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQzlILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQ3BJLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQ3BJLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJGQUEyRixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDOztBQUcvRixvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUU1QixNQUFNLFVBQVUsOEJBQThCO0lBQzdDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxNQUFNLFVBQVUseUJBQXlCO0lBQ3hDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxNQUFNLFVBQVUsK0JBQStCO0lBQzlDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUE0QkQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7SUFFeEQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOzttSEFKVyxzQkFBc0I7b0hBQXRCLHNCQUFzQixpQkFuQmpDLGdDQUFnQyxhQUxoQyxZQUFZO1FBQ1osWUFBWTtRQUNaLHdCQUF3QixhQU14QixnQ0FBZ0M7b0hBZ0JyQixzQkFBc0IsYUFkdkI7UUFDVixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsOEJBQThCLEVBQUU7UUFDM0UsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixFQUFFO1FBQ3RFLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSwrQkFBK0IsRUFBRTtRQUVsRix5Q0FBeUM7UUFFekMsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7UUFDdEQsMEJBQTBCLENBQUMsdUJBQXVCLENBQUM7UUFDbkQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7UUFDckQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7UUFDckQsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7S0FDdEQsWUF0QkEsWUFBWTtRQUNaLFlBQVk7UUFDWix3QkFBd0I7MkZBc0JiLHNCQUFzQjtrQkExQmxDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osWUFBWTt3QkFDWix3QkFBd0I7cUJBQ3hCO29CQUNELFlBQVksRUFBRTt3QkFDYixnQ0FBZ0M7cUJBQ2hDO29CQUNELE9BQU8sRUFBRTt3QkFDUixnQ0FBZ0M7cUJBQ2hDO29CQUNELFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsOEJBQThCLEVBQUU7d0JBQzNFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTt3QkFDdEUsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLCtCQUErQixFQUFFO3dCQUVsRix5Q0FBeUM7d0JBRXpDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDO3dCQUN0RCwwQkFBMEIsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDbkQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7d0JBQ3JELDBCQUEwQixDQUFDLHlCQUF5QixDQUFDO3dCQUNyRCwwQkFBMEIsQ0FBQywwQkFBMEIsQ0FBQztxQkFDdEQ7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvcmVDb250YWluZXIsIEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBzdW1tYXJpZXNJbml0aWFsaXplciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9hcGkvc3VtbWFyaWVzLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BhbmVsL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9sMTBuL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi9zdW1tYXJpZXMucHJvdmlkZXJzJztcbmltcG9ydCB7IEJvb2xlYW5TdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2RvbWFpbi9jYWxjdWxhdGlvbi9ib29sZWFuL2Jvb2xlYW4tc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgRGF0ZVN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvZG9tYWluL2NhbGN1bGF0aW9uL2RhdGUvZGF0ZS1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBOdW1iZXJTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2RvbWFpbi9jYWxjdWxhdGlvbi9udW1iZXIvbnVtYmVyLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFN0cmluZ1N1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvZG9tYWluL2NhbGN1bGF0aW9uL3N0cmluZy9zdHJpbmctc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgVW5rbm93blN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvZG9tYWluL2NhbGN1bGF0aW9uL3Vua25vd24vdW5rbm93bi1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBTdW1tYXJpZXNQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvYXBpL3N1bW1hcmllcy5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2FwaS9zdW1tYXJpZXMuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvYXBpL3N1bW1hcmllcy53YXJlaG91c2UnO1xuXG5cbnN1bW1hcmllc0luaXRpYWxpemVyLmluaXQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdW1tYXJpZXNDb21tYW5kSW52b2tlcigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTdW1tYXJpZXNQdWJsaXNoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN1bW1hcmllc1dhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTdW1tYXJpZXNXYXJlaG91c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnkpO1xufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY01vZHVsZSxcblx0XHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogU3VtbWFyaWVzUHVibGlzaGVyLCB1c2VGYWN0b3J5OiBwcm92aWRlU3VtbWFyaWVzQ29tbWFuZEludm9rZXIgfSxcblx0XHR7IHByb3ZpZGU6IFN1bW1hcmllc1dhcmVob3VzZSwgdXNlRmFjdG9yeTogcHJvdmlkZVN1bW1hcmllc1dhcmVob3VzZSB9LFxuXHRcdHsgcHJvdmlkZTogU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBwcm92aWRlU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5IH0sXG5cblx0XHQvLyBwcm92aWRlQ2xhc3MoU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUpLFxuXG5cdFx0cHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoQm9vbGVhblN1bW1hcmllc0NhbGN1bGF0b3IpLFxuXHRcdHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yKERhdGVTdW1tYXJpZXNDYWxjdWxhdG9yKSxcblx0XHRwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvcihOdW1iZXJTdW1tYXJpZXNDYWxjdWxhdG9yKSxcblx0XHRwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvcihTdHJpbmdTdW1tYXJpZXNDYWxjdWxhdG9yKSxcblx0XHRwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvcihVbmtub3duU3VtbWFyaWVzQ2FsY3VsYXRvcilcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxufVxuIl19