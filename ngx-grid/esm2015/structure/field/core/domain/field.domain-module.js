import { NgModule } from '@angular/core';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { FieldCollectionFactory } from './field-collection.factory';
import { DataFieldFactory } from './field/data/data-field.factory';
import { FieldEntityIdGenerator } from './field/field-entity-id.generator';
import { InitFieldsCommandHandler } from './init/init-fields.command-handler';
import { FieldEntityFactory } from './field/field.entity-factory';
import { structureKey } from '../../../core/api/structre.key';
import { FieldsInitedEventHandler } from '../domain-read/init/fields-inited.event-handler';
import { FieldDispatcher } from './field.dispatcher';
export class FieldDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(InitFieldsCommandHandler, structureKey)
        ];
    }
    static domainEventHandlers() {
        return [
            HermesModule.registerDomainEventHandler(FieldsInitedEventHandler)
        ];
    }
}
FieldDomainModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    FieldCollectionFactory,
                    FieldEntityFactory,
                    FieldEntityIdGenerator,
                    DataFieldFactory,
                    FieldDispatcher
                ]
            },] }
];
FieldDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZG9tYWluLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFZckQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFlBQVk7SUFFbEQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZTtRQUNyQixPQUFPO1lBQ04sWUFBWSxDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixFQUFFLFlBQVksQ0FBQztTQUMzRSxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxtQkFBbUI7UUFDekIsT0FBTztZQUNOLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FBQztTQUNqRSxDQUFDO0lBQ0gsQ0FBQzs7O1lBekJELFFBQVEsU0FBQztnQkFDVCxTQUFTLEVBQUU7b0JBQ1Ysc0JBQXNCO29CQUN0QixrQkFBa0I7b0JBQ2xCLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixlQUFlO2lCQUNmO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluTW9kdWxlLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZENvbGxlY3Rpb25GYWN0b3J5IH0gZnJvbSAnLi9maWVsZC1jb2xsZWN0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgRGF0YUZpZWxkRmFjdG9yeSB9IGZyb20gJy4vZmllbGQvZGF0YS9kYXRhLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRFbnRpdHlJZEdlbmVyYXRvciB9IGZyb20gJy4vZmllbGQvZmllbGQtZW50aXR5LWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBJbml0RmllbGRzQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEZpZWxkRW50aXR5RmFjdG9yeSB9IGZyb20gJy4vZmllbGQvZmllbGQuZW50aXR5LWZhY3RvcnknO1xuaW1wb3J0IHsgc3RydWN0dXJlS2V5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0cmUua2V5JztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2luaXQvZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IEZpZWxkRGlzcGF0Y2hlciB9IGZyb20gJy4vZmllbGQuZGlzcGF0Y2hlcic7XG5cblxuQE5nTW9kdWxlKHtcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmllbGRDb2xsZWN0aW9uRmFjdG9yeSxcblx0XHRGaWVsZEVudGl0eUZhY3RvcnksXG5cdFx0RmllbGRFbnRpdHlJZEdlbmVyYXRvcixcblx0XHREYXRhRmllbGRGYWN0b3J5LFxuXHRcdEZpZWxkRGlzcGF0Y2hlclxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkRG9tYWluTW9kdWxlIGV4dGVuZHMgRG9tYWluTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihJbml0RmllbGRzQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSlcblx0XHRdO1xuXHR9XG5cblx0c3RhdGljIGRvbWFpbkV2ZW50SGFuZGxlcnMoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKEZpZWxkc0luaXRlZEV2ZW50SGFuZGxlcilcblx0XHRdO1xuXHR9XG5cbn1cbiJdfQ==