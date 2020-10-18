/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { HermesModule } from '@generic-ui/hermes';
import { ListViewDispatcher } from './list-view.dispatcher';
import { listViewKey } from '../api/list-view.api-module';
import { SetListViewModeCommandHandler } from './mode/set-list-view-mode.command-handler';
import { ToggleListViewSelectorCommandHandler } from './mode/selector/toggle-list-view-selector.command-handler';
var ListViewDomainModule = /** @class */ (function () {
    function ListViewDomainModule() {
    }
    /**
     * @return {?}
     */
    ListViewDomainModule.commandHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerCommandHandler(SetListViewModeCommandHandler, listViewKey), HermesModule.registerCommandHandler(ToggleListViewSelectorCommandHandler, listViewKey));
    };
    ListViewDomainModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    providers: [
                        ListViewDispatcher
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    return ListViewDomainModule;
}());
export { ListViewDomainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvZG9tYWluL2xpc3Qtdmlldy5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBR2pIO0lBQUE7SUFpQkEsQ0FBQzs7OztJQVBPLG9DQUFlOzs7SUFBdEI7UUFDQyx3QkFDSSxZQUFZLENBQUMsc0JBQXNCLENBQUMsNkJBQTZCLEVBQUUsV0FBVyxDQUFDLEVBQy9FLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxvQ0FBb0MsRUFBRSxXQUFXLENBQUMsRUFDeEY7SUFDSCxDQUFDOztnQkFmRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsU0FBUyxFQUFFO3dCQUNWLGtCQUFrQjtxQkFDbEI7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNYOztJQVVELDJCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FUWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0Rpc3BhdGNoZXIgfSBmcm9tICcuL2xpc3Qtdmlldy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IGxpc3RWaWV3S2V5IH0gZnJvbSAnLi4vYXBpL2xpc3Qtdmlldy5hcGktbW9kdWxlJztcbmltcG9ydCB7IFNldExpc3RWaWV3TW9kZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9tb2RlL3NldC1saXN0LXZpZXctbW9kZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9tb2RlL3NlbGVjdG9yL3RvZ2dsZS1saXN0LXZpZXctc2VsZWN0b3IuY29tbWFuZC1oYW5kbGVyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0TGlzdFZpZXdEaXNwYXRjaGVyXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3RG9tYWluTW9kdWxlIHtcblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRMaXN0Vmlld01vZGVDb21tYW5kSGFuZGxlciwgbGlzdFZpZXdLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmRIYW5kbGVyLCBsaXN0Vmlld0tleSlcblx0XHRdO1xuXHR9XG5cbn1cbiJdfQ==