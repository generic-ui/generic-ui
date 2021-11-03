import { Injectable } from '@angular/core';
import { ToggleSelectedRowCommand } from './toggle/toggle-selected-row.command';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
export class FormationDispatcher {
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    toggleSelectedRow(structureId, selectedRow, type) {
        this.commandDispatcher.dispatch(new ToggleSelectedRowCommand(structureId, selectedRow, type));
    }
}
FormationDispatcher.ɵfac = function FormationDispatcher_Factory(t) { return new (t || FormationDispatcher)(i0.ɵɵinject(i1.CommandDispatcher)); };
FormationDispatcher.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FormationDispatcher, factory: FormationDispatcher.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormationDispatcher, [{
        type: Injectable
    }], function () { return [{ type: i1.CommandDispatcher }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQUloRixNQUFNLE9BQU8sbUJBQW1CO0lBRS9CLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxXQUF3QixFQUFFLFdBQW1CLEVBQUUsSUFBeUI7UUFDekYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDOztzRkFQVyxtQkFBbUI7eUVBQW5CLG1CQUFtQixXQUFuQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUQvQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kIH0gZnJvbSAnLi90b2dnbGUvdG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuL2NvcmUvcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25EaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0ZWRSb3coc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCBzZWxlY3RlZFJvdzogc3RyaW5nLCB0eXBlOiBSb3dTZWxlY3RUb2dnbGVUeXBlKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kKHN0cnVjdHVyZUlkLCBzZWxlY3RlZFJvdywgdHlwZSkpO1xuXHR9XG5cbn1cbiJdfQ==