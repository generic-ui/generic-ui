/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { SummariesApiModule } from '../core/api/summaries.api-module';
import { StructureSummariesPanelComponent } from './panel/structure.summaries-panel.component';
import { StructureSummariesConfigArchive } from '../core/domain/config/structure.summaries-config.archive';
import { StructureSummariesPanelConfigConverter } from '../core/domain/config/structure.summaries-panel.config-converter';
import { FabricModule } from '@generic-ui/fabric';
import { TranslationFeatureModule } from '../../../l10n/feature/translation.feature-module';
var SummariesFeatureModule = /** @class */ (function (_super) {
    tslib_1.__extends(SummariesFeatureModule, _super);
    function SummariesFeatureModule(summariesApiModule) {
        var _this = _super.call(this) || this;
        if (summariesApiModule === null) {
            throw new Error('SummariesApiModule is required.');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    SummariesFeatureModule.forComponent = /**
     * @return {?}
     */
    function () {
        return [];
    };
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
    SummariesFeatureModule.ctorParameters = function () { return [
        { type: SummariesApiModule, decorators: [{ type: Optional }] }
    ]; };
    return SummariesFeatureModule;
}(FeatureModule));
export { SummariesFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2ZlYXR1cmUvc3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMxSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHNUY7SUFrQjRDLGtEQUFhO0lBT3hELGdDQUF3QixrQkFBc0M7UUFBOUQsWUFDQyxpQkFBTyxTQUlQO1FBSEEsSUFBSSxrQkFBa0IsS0FBSyxJQUFJLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ25EOztJQUNGLENBQUM7Ozs7SUFWTSxtQ0FBWTs7O0lBQW5CO1FBQ0MsT0FBTyxFQUNOLENBQUM7SUFDSCxDQUFDOztnQkF2QkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osd0JBQXdCO3dCQUN4QixrQkFBa0I7cUJBQ2xCO29CQUNELFlBQVksRUFBRTt3QkFDYixnQ0FBZ0M7cUJBQ2hDO29CQUNELE9BQU8sRUFBRTt3QkFDUixnQ0FBZ0M7cUJBQ2hDO29CQUNELFNBQVMsRUFBRTt3QkFDViwrQkFBK0I7d0JBQy9CLHNDQUFzQztxQkFDdEM7aUJBQ0Q7Ozs7Z0JBekJRLGtCQUFrQix1QkFpQ2IsUUFBUTs7SUFPdEIsNkJBQUM7Q0FBQSxBQWhDRCxDQWtCNEMsYUFBYSxHQWN4RDtTQWRZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNBcGlNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FwaS9zdW1tYXJpZXMuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vcGFuZWwvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL2NvcmUvZG9tYWluL2NvbmZpZy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyIH0gZnJvbSAnLi4vY29yZS9kb21haW4vY29uZmlnL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29uZmlnLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbDEwbi9mZWF0dXJlL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY01vZHVsZSxcblx0XHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUsXG5cdFx0U3VtbWFyaWVzQXBpTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdBcmNoaXZlLFxuXHRcdFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdF07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBzdW1tYXJpZXNBcGlNb2R1bGU6IFN1bW1hcmllc0FwaU1vZHVsZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0aWYgKHN1bW1hcmllc0FwaU1vZHVsZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdW1tYXJpZXNBcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==