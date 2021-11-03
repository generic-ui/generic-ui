import { NgModule } from '@angular/core';
import { HermesModule } from '@generic-ui/hermes';
import { ListViewDispatcher } from './list-view.dispatcher';
import { listViewKey } from '../api/list-view.api-module';
import { SetListViewModeCommandHandler } from './mode/set-list-view-mode.command-handler';
import { ToggleListViewSelectorCommandHandler } from './mode/selector/toggle-list-view-selector.command-handler';
export class ListViewDomainModule {
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(SetListViewModeCommandHandler, listViewKey),
            HermesModule.registerCommandHandler(ToggleListViewSelectorCommandHandler, listViewKey)
        ];
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9saXN0L2NvcmUvZG9tYWluL2xpc3Qtdmlldy5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQVdqSCxNQUFNLE9BQU8sb0JBQW9CO0lBRWhDLE1BQU0sQ0FBQyxlQUFlO1FBQ3JCLE9BQU87WUFDTixZQUFZLENBQUMsc0JBQXNCLENBQUMsNkJBQTZCLEVBQUUsV0FBVyxDQUFDO1lBQy9FLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxvQ0FBb0MsRUFBRSxXQUFXLENBQUM7U0FDdEYsQ0FBQztJQUNILENBQUM7OztZQWZELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUUsRUFBRTtnQkFDWCxTQUFTLEVBQUU7b0JBQ1Ysa0JBQWtCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3RGlzcGF0Y2hlciB9IGZyb20gJy4vbGlzdC12aWV3LmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgbGlzdFZpZXdLZXkgfSBmcm9tICcuLi9hcGkvbGlzdC12aWV3LmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU2V0TGlzdFZpZXdNb2RlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL21vZGUvc2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL21vZGUvc2VsZWN0b3IvdG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLWhhbmRsZXInO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRMaXN0Vmlld0Rpc3BhdGNoZXJcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdEb21haW5Nb2R1bGUge1xuXG5cdHN0YXRpYyBjb21tYW5kSGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldExpc3RWaWV3TW9kZUNvbW1hbmRIYW5kbGVyLCBsaXN0Vmlld0tleSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZEhhbmRsZXIsIGxpc3RWaWV3S2V5KVxuXHRcdF07XG5cdH1cblxufVxuIl19