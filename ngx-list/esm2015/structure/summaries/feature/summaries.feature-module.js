/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { SummariesApiModule } from '../core/api/summaries.api-module';
import { StructureSummariesPanelComponent } from './panel/structure.summaries-panel.component';
import { StructureSummariesArchive } from './structure.summaries.archive';
import { StructureSummariesConfigService } from './structure.summaries-config.service';
import { StructureSummariesPanelConfigConverter } from './structure.summaries-panel.config-converter';
import { FabricModule } from '@generic-ui/fabric';
import { TranslationFeatureModule } from '../../../l10n/feature/translation.feature-module';
export class SummariesFeatureModule extends FeatureModule {
    /**
     * @param {?} summariesApiModule
     */
    constructor(summariesApiModule) {
        super();
        if (summariesApiModule === null) {
            throw new Error('SummariesApiModule is required.');
        }
    }
    /**
     * @return {?}
     */
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
                    StructureSummariesArchive,
                    StructureSummariesConfigService,
                    StructureSummariesPanelConfigConverter
                ]
            },] }
];
/** @nocollapse */
SummariesFeatureModule.ctorParameters = () => [
    { type: SummariesApiModule, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2ZlYXR1cmUvc3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9GLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQXNCNUYsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7Ozs7SUFNeEQsWUFBd0Isa0JBQXNDO1FBQzdELEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxrQkFBa0IsS0FBSyxJQUFJLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ25EO0lBQ0YsQ0FBQzs7OztJQVRELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7O1lBdkJELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsa0JBQWtCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsZ0NBQWdDO2lCQUNoQztnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsZ0NBQWdDO2lCQUNoQztnQkFDRCxTQUFTLEVBQUU7b0JBQ1YseUJBQXlCO29CQUN6QiwrQkFBK0I7b0JBQy9CLHNDQUFzQztpQkFDdEM7YUFDRDs7OztZQTNCUSxrQkFBa0IsdUJBa0NiLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzQXBpTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hcGkvc3VtbWFyaWVzLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BhbmVsL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2wxMG4vZmVhdHVyZS90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlLFxuXHRcdFN1bW1hcmllc0FwaU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZSxcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlLFxuXHRcdFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBzdW1tYXJpZXNBcGlNb2R1bGU6IFN1bW1hcmllc0FwaU1vZHVsZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0aWYgKHN1bW1hcmllc0FwaU1vZHVsZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdW1tYXJpZXNBcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==