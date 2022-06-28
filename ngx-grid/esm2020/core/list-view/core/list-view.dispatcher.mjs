import { CommandDispatcher, CoreContainer } from '@generic-ui/hermes';
import { CreateListViewCommand } from './create/create-list-view.command';
import { SetListViewModeCommand } from './mode/set-list-view-mode.command';
import { ToggleListViewSelectorCommand } from './mode/selector/toggle-list-view-selector.command';
export class ListViewDispatcher {
    constructor() {
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    create(listViewId) {
        this.commandDispatcher.dispatch(new CreateListViewCommand(listViewId));
    }
    setMode(mode, listViewId) {
        this.commandDispatcher.dispatch(new SetListViewModeCommand(listViewId, mode));
    }
    toggleSelector(enabled, listViewId) {
        this.commandDispatcher.dispatch(new ToggleListViewSelectorCommand(listViewId, enabled));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvbGlzdC12aWV3L2NvcmUvbGlzdC12aWV3LmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3RFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBR2xHLE1BQU0sT0FBTyxrQkFBa0I7SUFBL0I7UUFFa0Isc0JBQWlCLEdBQXNCLGFBQWEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQWNsRyxDQUFDO0lBWkEsTUFBTSxDQUFDLFVBQXNCO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBa0IsRUFBRSxVQUFzQjtRQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELGNBQWMsQ0FBQyxPQUFnQixFQUFFLFVBQXNCO1FBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSw2QkFBNkIsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciwgQ29yZUNvbnRhaW5lciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBDcmVhdGVMaXN0Vmlld0NvbW1hbmQgfSBmcm9tICcuL2NyZWF0ZS9jcmVhdGUtbGlzdC12aWV3LmNvbW1hbmQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgU2V0TGlzdFZpZXdNb2RlQ29tbWFuZCB9IGZyb20gJy4vbW9kZS9zZXQtbGlzdC12aWV3LW1vZGUuY29tbWFuZCc7XG5pbXBvcnQgeyBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZCB9IGZyb20gJy4vbW9kZS9zZWxlY3Rvci90b2dnbGUtbGlzdC12aWV3LXNlbGVjdG9yLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0Rpc3BhdGNoZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyID0gQ29yZUNvbnRhaW5lci5yZXNvbHZlKENvbW1hbmREaXNwYXRjaGVyKTtcblxuXHRjcmVhdGUobGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENyZWF0ZUxpc3RWaWV3Q29tbWFuZChsaXN0Vmlld0lkKSk7XG5cdH1cblxuXHRzZXRNb2RlKG1vZGU6IExpc3RWaWV3TW9kZSwgbGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldExpc3RWaWV3TW9kZUNvbW1hbmQobGlzdFZpZXdJZCwgbW9kZSkpO1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0b3IoZW5hYmxlZDogYm9vbGVhbiwgbGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kKGxpc3RWaWV3SWQsIGVuYWJsZWQpKTtcblx0fVxuXG59XG4iXX0=