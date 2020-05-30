/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { FeatureModule } from '@generic-ui/hermes';
import { SearchApiModule } from '../domain-api/search.api-module';
import { SearchIconComponent } from './icon/search-icon.component';
import { SearchComponent } from './search.component';
var SearchFeatureModule = /** @class */ (function (_super) {
    tslib_1.__extends(SearchFeatureModule, _super);
    function SearchFeatureModule(searchApiModule) {
        var _this = _super.call(this) || this;
        if (searchApiModule === null) {
            throw new Error('SearchApiModule is required');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    SearchFeatureModule.forComponent = /**
     * @return {?}
     */
    function () {
        return [];
    };
    SearchFeatureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        // SearchApiModule,
                        ReactiveFormsModule
                    ],
                    declarations: [
                        SearchIconComponent,
                        SearchComponent
                    ],
                    exports: [
                        SearchIconComponent,
                        SearchComponent
                    ]
                },] }
    ];
    /** @nocollapse */
    SearchFeatureModule.ctorParameters = function () { return [
        { type: SearchApiModule }
    ]; };
    return SearchFeatureModule;
}(FeatureModule));
export { SearchFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2ZlYXR1cmUvc2VhcmNoLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JEO0lBZ0J5QywrQ0FBYTtJQU1yRCw2QkFBWSxlQUFnQztRQUE1QyxZQUNDLGlCQUFPLFNBSVA7UUFIQSxJQUFJLGVBQWUsS0FBSyxJQUFJLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1NBQzlDOztJQUNGLENBQUM7Ozs7SUFUTSxnQ0FBWTs7O0lBQW5CO1FBQ0MsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztnQkFwQkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixtQkFBbUI7cUJBQ25CO29CQUNELFlBQVksRUFBRTt3QkFDYixtQkFBbUI7d0JBQ25CLGVBQWU7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLG1CQUFtQjt3QkFDbkIsZUFBZTtxQkFDZjtpQkFDRDs7OztnQkFwQlEsZUFBZTs7SUFrQ3hCLDBCQUFDO0NBQUEsQUE3QkQsQ0FnQnlDLGFBQWEsR0FhckQ7U0FiWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlYXJjaEFwaU1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi1hcGkvc2VhcmNoLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9zZWFyY2gtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2guY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY01vZHVsZSxcblx0XHQvLyBTZWFyY2hBcGlNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTZWFyY2hJY29uQ29tcG9uZW50LFxuXHRcdFNlYXJjaENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U2VhcmNoSWNvbkNvbXBvbmVudCxcblx0XHRTZWFyY2hDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKHNlYXJjaEFwaU1vZHVsZTogU2VhcmNoQXBpTW9kdWxlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRpZiAoc2VhcmNoQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1NlYXJjaEFwaU1vZHVsZSBpcyByZXF1aXJlZCcpXG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==