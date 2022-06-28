import { CommandDispatcher, CoreContainer } from '@generic-ui/hermes';
import { SetSchemaThemeCommand } from './theme/set-schema-theme.command';
import { CreateSchemaCommand } from './create/create-schema.command';
import { SetRowColoringCommand } from './row-coloring/set-row-coloring.command';
import { SetSchemaVerticalGridCommand } from './grid/vertical/set-schema-vertical-grid.command';
import { SetSchemaHorizontalGridCommand } from './grid/horizontal/set-schema-horizontal-grid.command';
export class SchemaDispatcher {
    constructor() {
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    create(schemaId) {
        this.commandDispatcher.dispatch(new CreateSchemaCommand(schemaId));
    }
    setTheme(theme, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaThemeCommand(schemaId, theme));
    }
    setRowColoring(rowColoring, schemaId) {
        this.commandDispatcher.dispatch(new SetRowColoringCommand(schemaId, rowColoring));
    }
    setVerticalGrid(verticalGrid, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaVerticalGridCommand(schemaId, verticalGrid));
    }
    setHorizontalGrid(horizontalGrid, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaHorizontalGridCommand(schemaId, horizontalGrid));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc2NoZW1hL2NvcmUvc2NoZW1hLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXRFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWhGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBR3RHLE1BQU0sT0FBTyxnQkFBZ0I7SUFBN0I7UUFFa0Isc0JBQWlCLEdBQXNCLGFBQWEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQXNCbEcsQ0FBQztJQXBCQSxNQUFNLENBQUMsUUFBa0I7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFrQixFQUFFLFFBQWtCO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsY0FBYyxDQUFDLFdBQThCLEVBQUUsUUFBa0I7UUFDaEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxlQUFlLENBQUMsWUFBcUIsRUFBRSxRQUFrQjtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksNEJBQTRCLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELGlCQUFpQixDQUFDLGNBQXVCLEVBQUUsUUFBa0I7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDhCQUE4QixDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBDb3JlQ29udGFpbmVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2V0U2NoZW1hVGhlbWVDb21tYW5kIH0gZnJvbSAnLi90aGVtZS9zZXQtc2NoZW1hLXRoZW1lLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ3JlYXRlU2NoZW1hQ29tbWFuZCB9IGZyb20gJy4vY3JlYXRlL2NyZWF0ZS1zY2hlbWEuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRSb3dDb2xvcmluZ0NvbW1hbmQgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy9zZXQtcm93LWNvbG9yaW5nLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZCB9IGZyb20gJy4vZ3JpZC92ZXJ0aWNhbC9zZXQtc2NoZW1hLXZlcnRpY2FsLWdyaWQuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmQgfSBmcm9tICcuL2dyaWQvaG9yaXpvbnRhbC9zZXQtc2NoZW1hLWhvcml6b250YWwtZ3JpZC5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hRGlzcGF0Y2hlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIgPSBDb3JlQ29udGFpbmVyLnJlc29sdmUoQ29tbWFuZERpc3BhdGNoZXIpO1xuXG5cdGNyZWF0ZShzY2hlbWFJZDogU2NoZW1hSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDcmVhdGVTY2hlbWFDb21tYW5kKHNjaGVtYUlkKSk7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUsIHNjaGVtYUlkOiBTY2hlbWFJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjaGVtYVRoZW1lQ29tbWFuZChzY2hlbWFJZCwgdGhlbWUpKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZywgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Um93Q29sb3JpbmdDb21tYW5kKHNjaGVtYUlkLCByb3dDb2xvcmluZykpO1xuXHR9XG5cblx0c2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZChzY2hlbWFJZCwgdmVydGljYWxHcmlkKSk7XG5cdH1cblxuXHRzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kKHNjaGVtYUlkLCBob3Jpem9udGFsR3JpZCkpO1xuXHR9XG5cbn1cbiJdfQ==