/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { FeatureModule } from '@generic-ui/hermes';
import { PagingComponent } from './paging.component';
import { PagingSelectComponent } from './select/paging-select.component';
import { AlternativePagingNavigatorComponent } from './advanced/navigator/alternative-paging-navigator.component';
import { AlternativePagingPagesComponent } from './advanced/pages/alternative-paging-pages.component';
import { PagingDisplayModeArchive } from './mode/paging-display-mode.archive';
import { PagingApiModule } from '../core/api/paging.api-module';
import { PagingNavigatorComponent } from './basic/navigator/paging-navigator.component';
import { PagingStatsComponent } from './basic/stats/paging-stats.component';
import { TranslationFeatureModule } from '../../../l10n/feature/translation.feature-module';
var PagingFeatureModule = /** @class */ (function (_super) {
    tslib_1.__extends(PagingFeatureModule, _super);
    function PagingFeatureModule(pagingApiModule) {
        var _this = _super.call(this) || this;
        if (pagingApiModule === null) {
            throw new Error('PagingApiModule is required.');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    PagingFeatureModule.forComponent = /**
     * @return {?}
     */
    function () {
        return [
            PagingDisplayModeArchive
        ];
    };
    PagingFeatureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        PagingApiModule,
                        TranslationFeatureModule
                    ],
                    declarations: [
                        PagingComponent,
                        PagingNavigatorComponent,
                        PagingSelectComponent,
                        PagingStatsComponent,
                        AlternativePagingNavigatorComponent,
                        AlternativePagingPagesComponent
                    ],
                    exports: [
                        PagingComponent,
                        PagingNavigatorComponent,
                        PagingSelectComponent,
                        PagingStatsComponent,
                        AlternativePagingNavigatorComponent,
                        AlternativePagingPagesComponent
                    ]
                },] }
    ];
    /** @nocollapse */
    PagingFeatureModule.ctorParameters = function () { return [
        { type: PagingApiModule, decorators: [{ type: Optional }] }
    ]; };
    return PagingFeatureModule;
}(FeatureModule));
export { PagingFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUU1RjtJQXdCeUMsK0NBQWE7SUFRckQsNkJBQXdCLGVBQWdDO1FBQXhELFlBQ0MsaUJBQU8sU0FJUDtRQUhBLElBQUksZUFBZSxLQUFLLElBQUksRUFBRTtZQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7U0FDaEQ7O0lBQ0YsQ0FBQzs7OztJQVhNLGdDQUFZOzs7SUFBbkI7UUFDQyxPQUFPO1lBQ04sd0JBQXdCO1NBQ3hCLENBQUM7SUFDSCxDQUFDOztnQkE5QkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osZUFBZTt3QkFDZix3QkFBd0I7cUJBQ3hCO29CQUNELFlBQVksRUFBRTt3QkFDYixlQUFlO3dCQUNmLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLG1DQUFtQzt3QkFDbkMsK0JBQStCO3FCQUMvQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsZUFBZTt3QkFDZix3QkFBd0I7d0JBQ3hCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixtQ0FBbUM7d0JBQ25DLCtCQUErQjtxQkFDL0I7aUJBQ0Q7Ozs7Z0JBNUJRLGVBQWUsdUJBcUNWLFFBQVE7O0lBT3RCLDBCQUFDO0NBQUEsQUF2Q0QsQ0F3QnlDLGFBQWEsR0FlckQ7U0FmWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC9wYWdpbmctc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCB9IGZyb20gJy4vYWR2YW5jZWQvbmF2aWdhdG9yL2FsdGVybmF0aXZlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkL3BhZ2VzL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBQYWdpbmdBcGlNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FwaS9wYWdpbmcuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgfSBmcm9tICcuL2Jhc2ljL25hdmlnYXRvci9wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTdGF0c0NvbXBvbmVudCB9IGZyb20gJy4vYmFzaWMvc3RhdHMvcGFnaW5nLXN0YXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9sMTBuL2ZlYXR1cmUvdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY01vZHVsZSxcblx0XHRQYWdpbmdBcGlNb2R1bGUsXG5cdFx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFBhZ2luZ0NvbXBvbmVudCxcblx0XHRQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0UGFnaW5nU2VsZWN0Q29tcG9uZW50LFxuXHRcdFBhZ2luZ1N0YXRzQ29tcG9uZW50LFxuXHRcdEFsdGVybmF0aXZlUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFBhZ2luZ0NvbXBvbmVudCxcblx0XHRQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0UGFnaW5nU2VsZWN0Q29tcG9uZW50LFxuXHRcdFBhZ2luZ1N0YXRzQ29tcG9uZW50LFxuXHRcdEFsdGVybmF0aXZlUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmVcblx0XHRdO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcGFnaW5nQXBpTW9kdWxlOiBQYWdpbmdBcGlNb2R1bGUpIHtcblx0XHRzdXBlcigpO1xuXHRcdGlmIChwYWdpbmdBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignUGFnaW5nQXBpTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=