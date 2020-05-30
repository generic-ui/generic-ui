/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { HermesModule } from '@generic-ui/hermes';
import { ListViewDispatcher } from './list-view.dispatcher';
import { listViewKey } from '../domain-api/list-view.api-module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi9saXN0LXZpZXcuZG9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUdqSDtJQUFBO0lBaUJBLENBQUM7Ozs7SUFQTyxvQ0FBZTs7O0lBQXRCO1FBQ0Msd0JBQ0ksWUFBWSxDQUFDLHNCQUFzQixDQUFDLDZCQUE2QixFQUFFLFdBQVcsQ0FBQyxFQUMvRSxZQUFZLENBQUMsc0JBQXNCLENBQUMsb0NBQW9DLEVBQUUsV0FBVyxDQUFDLEVBQ3hGO0lBQ0gsQ0FBQzs7Z0JBZkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFBRTt3QkFDVixrQkFBa0I7cUJBQ2xCO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtpQkFDWDs7SUFVRCwyQkFBQztDQUFBLEFBakJELElBaUJDO1NBVFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdEaXNwYXRjaGVyIH0gZnJvbSAnLi9saXN0LXZpZXcuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBsaXN0Vmlld0tleSB9IGZyb20gJy4uL2RvbWFpbi1hcGkvbGlzdC12aWV3LmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU2V0TGlzdFZpZXdNb2RlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL21vZGUvc2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL21vZGUvc2VsZWN0b3IvdG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLWhhbmRsZXInO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRMaXN0Vmlld0Rpc3BhdGNoZXJcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdEb21haW5Nb2R1bGUge1xuXG5cdHN0YXRpYyBjb21tYW5kSGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldExpc3RWaWV3TW9kZUNvbW1hbmRIYW5kbGVyLCBsaXN0Vmlld0tleSksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZEhhbmRsZXIsIGxpc3RWaWV3S2V5KVxuXHRcdF07XG5cdH1cblxufVxuIl19