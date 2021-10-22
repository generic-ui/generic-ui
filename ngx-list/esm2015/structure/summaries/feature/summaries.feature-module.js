/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { SummariesApiModule } from '../core/api/summaries.api-module';
import { StructureSummariesPanelComponent } from './panel/structure.summaries-panel.component';
import { StructureSummariesConfigArchive } from '../core/domain/config/structure.summaries-config.archive';
import { StructureSummariesPanelConfigConverter } from '../core/domain/config/structure.summaries-panel.config-converter';
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
                    StructureSummariesConfigArchive,
                    StructureSummariesPanelConfigConverter
                ]
            },] }
];
/** @nocollapse */
SummariesFeatureModule.ctorParameters = () => [
    { type: SummariesApiModule, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2ZlYXR1cmUvc3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9GLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzFILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQXFCNUYsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7Ozs7SUFPeEQsWUFBd0Isa0JBQXNDO1FBQzdELEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxrQkFBa0IsS0FBSyxJQUFJLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ25EO0lBQ0YsQ0FBQzs7OztJQVZELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFDTixDQUFDO0lBQ0gsQ0FBQzs7O1lBdkJELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsa0JBQWtCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsZ0NBQWdDO2lCQUNoQztnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsZ0NBQWdDO2lCQUNoQztnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsK0JBQStCO29CQUMvQixzQ0FBc0M7aUJBQ3RDO2FBQ0Q7Ozs7WUF6QlEsa0JBQWtCLHVCQWlDYixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN1bW1hcmllc0FwaU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvYXBpL3N1bW1hcmllcy5hcGktbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9wYW5lbC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vY29yZS9kb21haW4vY29uZmlnL3N0cnVjdHVyZS5zdW1tYXJpZXMtY29uZmlnLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuLi9jb3JlL2RvbWFpbi9jb25maWcvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyJztcbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9sMTBuL2ZlYXR1cmUvdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSxcblx0XHRTdW1tYXJpZXNBcGlNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ0FyY2hpdmUsXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXJcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHN1bW1hcmllc0FwaU1vZHVsZTogU3VtbWFyaWVzQXBpTW9kdWxlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRpZiAoc3VtbWFyaWVzQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1N1bW1hcmllc0FwaU1vZHVsZSBpcyByZXF1aXJlZC4nKTtcblx0XHR9XG5cdH1cblxufVxuIl19