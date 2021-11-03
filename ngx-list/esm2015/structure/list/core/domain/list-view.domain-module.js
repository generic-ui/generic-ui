import { NgModule } from '@angular/core';
import { HermesModule } from '@generic-ui/hermes';
import { ListViewDispatcher } from './list-view.dispatcher';
import { listViewKey } from '../api/list-view.api-module';
import { SetListViewModeCommandHandler } from './mode/set-list-view-mode.command-handler';
import { ToggleListViewSelectorCommandHandler } from './mode/selector/toggle-list-view-selector.command-handler';
import * as i0 from "@angular/core";
export class ListViewDomainModule {
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(SetListViewModeCommandHandler, listViewKey),
            HermesModule.registerCommandHandler(ToggleListViewSelectorCommandHandler, listViewKey)
        ];
    }
}
ListViewDomainModule.ɵfac = function ListViewDomainModule_Factory(t) { return new (t || ListViewDomainModule)(); };
ListViewDomainModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ListViewDomainModule });
ListViewDomainModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        ListViewDispatcher
    ], imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewDomainModule, [{
        type: NgModule,
        args: [{
                imports: [],
                providers: [
                    ListViewDispatcher
                ],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9saXN0L2NvcmUvZG9tYWluL2xpc3Qtdmlldy5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSwyREFBMkQsQ0FBQzs7QUFXakgsTUFBTSxPQUFPLG9CQUFvQjtJQUVoQyxNQUFNLENBQUMsZUFBZTtRQUNyQixPQUFPO1lBQ04sWUFBWSxDQUFDLHNCQUFzQixDQUFDLDZCQUE2QixFQUFFLFdBQVcsQ0FBQztZQUMvRSxZQUFZLENBQUMsc0JBQXNCLENBQUMsb0NBQW9DLEVBQUUsV0FBVyxDQUFDO1NBQ3RGLENBQUM7SUFDSCxDQUFDOzt3RkFQVyxvQkFBb0I7c0VBQXBCLG9CQUFvQjsyRUFOckI7UUFDVixrQkFBa0I7S0FDbEIsWUFIUSxFQUFFO3VGQU9DLG9CQUFvQjtjQVJoQyxRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsU0FBUyxFQUFFO29CQUNWLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0Rpc3BhdGNoZXIgfSBmcm9tICcuL2xpc3Qtdmlldy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IGxpc3RWaWV3S2V5IH0gZnJvbSAnLi4vYXBpL2xpc3Qtdmlldy5hcGktbW9kdWxlJztcbmltcG9ydCB7IFNldExpc3RWaWV3TW9kZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9tb2RlL3NldC1saXN0LXZpZXctbW9kZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9tb2RlL3NlbGVjdG9yL3RvZ2dsZS1saXN0LXZpZXctc2VsZWN0b3IuY29tbWFuZC1oYW5kbGVyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0TGlzdFZpZXdEaXNwYXRjaGVyXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3RG9tYWluTW9kdWxlIHtcblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRMaXN0Vmlld01vZGVDb21tYW5kSGFuZGxlciwgbGlzdFZpZXdLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmRIYW5kbGVyLCBsaXN0Vmlld0tleSlcblx0XHRdO1xuXHR9XG5cbn1cbiJdfQ==