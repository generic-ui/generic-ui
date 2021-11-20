import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { SummariesApiModule } from '../core/api/summaries.api-module';
import { StructureSummariesPanelComponent } from './panel/structure.summaries-panel.component';
import { StructureSummariesConfigArchive } from '../core/domain-read/config/structure.summaries-config.archive';
import { StructureSummariesPanelConfigConverter } from '../core/domain-read/config/structure.summaries-panel.config-converter';
import { FabricModule } from '@generic-ui/fabric';
import { TranslationFeatureModule } from '../../../l10n/feature/translation.feature-module';
export class SummariesFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SummariesFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricModule,
                    TranslationFeatureModule,
                    SummariesApiModule
                ],
                declarations: [
                    StructureSummariesPanelComponent
                ],
                exports: [
                    StructureSummariesPanelComponent
                ],
                providers: [
                    StructureSummariesConfigArchive,
                    StructureSummariesPanelConfigConverter
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2ZlYXR1cmUvc3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNoSCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFxQjVGLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxhQUFhO0lBRXhELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7O1lBdEJELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsa0JBQWtCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsZ0NBQWdDO2lCQUNoQztnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsZ0NBQWdDO2lCQUNoQztnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsK0JBQStCO29CQUMvQixzQ0FBc0M7aUJBQ3RDO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNBcGlNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FwaS9zdW1tYXJpZXMuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vcGFuZWwvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL2NvcmUvZG9tYWluLXJlYWQvY29uZmlnL3N0cnVjdHVyZS5zdW1tYXJpZXMtY29uZmlnLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuLi9jb3JlL2RvbWFpbi1yZWFkL2NvbmZpZy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2wxMG4vZmVhdHVyZS90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlLFxuXHRcdFN1bW1hcmllc0FwaU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnQXJjaGl2ZSxcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlclxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc0ZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Ly8gY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgc3VtbWFyaWVzQXBpTW9kdWxlOiBTdW1tYXJpZXNBcGlNb2R1bGUpIHtcblx0Ly8gXHRzdXBlcigpO1xuXHQvLyBcdGlmIChzdW1tYXJpZXNBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0Ly8gXHRcdHRocm93IG5ldyBFcnJvcignU3VtbWFyaWVzQXBpTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG59XG4iXX0=