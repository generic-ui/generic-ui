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
import { StructureSummariesArchive } from './structure.summaries.archive';
import { StructureSummariesConfigService } from './structure.summaries-config.service';
import { StructureSummariesPanelConfigConverter } from './structure.summaries-panel.config-converter';
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
                        StructureSummariesArchive,
                        StructureSummariesConfigService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2ZlYXR1cmUvc3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHNUY7SUFtQjRDLGtEQUFhO0lBTXhELGdDQUF3QixrQkFBc0M7UUFBOUQsWUFDQyxpQkFBTyxTQUlQO1FBSEEsSUFBSSxrQkFBa0IsS0FBSyxJQUFJLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ25EOztJQUNGLENBQUM7Ozs7SUFUTSxtQ0FBWTs7O0lBQW5CO1FBQ0MsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztnQkF2QkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osd0JBQXdCO3dCQUN4QixrQkFBa0I7cUJBQ2xCO29CQUNELFlBQVksRUFBRTt3QkFDYixnQ0FBZ0M7cUJBQ2hDO29CQUNELE9BQU8sRUFBRTt3QkFDUixnQ0FBZ0M7cUJBQ2hDO29CQUNELFNBQVMsRUFBRTt3QkFDVix5QkFBeUI7d0JBQ3pCLCtCQUErQjt3QkFDL0Isc0NBQXNDO3FCQUN0QztpQkFDRDs7OztnQkEzQlEsa0JBQWtCLHVCQWtDYixRQUFROztJQU90Qiw2QkFBQztDQUFBLEFBaENELENBbUI0QyxhQUFhLEdBYXhEO1NBYlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN1bW1hcmllc0FwaU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvYXBpL3N1bW1hcmllcy5hcGktbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9wYW5lbC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyJztcbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9sMTBuL2ZlYXR1cmUvdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSxcblx0XHRTdW1tYXJpZXNBcGlNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUsXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSxcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlclxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc0ZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgc3VtbWFyaWVzQXBpTW9kdWxlOiBTdW1tYXJpZXNBcGlNb2R1bGUpIHtcblx0XHRzdXBlcigpO1xuXHRcdGlmIChzdW1tYXJpZXNBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU3VtbWFyaWVzQXBpTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=