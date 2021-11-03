import { NgModule } from '@angular/core';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { FieldCollectionFactory } from './field-collection.factory';
import { DataFieldFactory } from './field/data/data-field.factory';
import { FieldIdGenerator } from './field/field-id.generator';
import { InitFieldsCommandHandler } from './init/init-fields.command-handler';
import { FieldFactory } from './field/field.factory';
import { structureKey } from '../../../core/api/structre.key';
import { FieldsInitedEventHandler } from '../api/read/fields-inited.event-handler';
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
                    FieldFactory,
                    FieldIdGenerator,
                    DataFieldFactory
                ]
            },] }
];
FieldDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZG9tYWluLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFXbkYsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFlBQVk7SUFFbEQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZTtRQUNyQixPQUFPO1lBQ04sWUFBWSxDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixFQUFFLFlBQVksQ0FBQztTQUMzRSxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxtQkFBbUI7UUFDekIsT0FBTztZQUNOLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FBQztTQUNqRSxDQUFDO0lBQ0gsQ0FBQzs7O1lBeEJELFFBQVEsU0FBQztnQkFDVCxTQUFTLEVBQUU7b0JBQ1Ysc0JBQXNCO29CQUN0QixZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO2lCQUNoQjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uRmFjdG9yeSB9IGZyb20gJy4vZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IERhdGFGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2ZpZWxkL2RhdGEvZGF0YS1maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkSWRHZW5lcmF0b3IgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBJbml0RmllbGRzQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEZpZWxkRmFjdG9yeSB9IGZyb20gJy4vZmllbGQvZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3RyZS5rZXknO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vYXBpL3JlYWQvZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRwcm92aWRlcnM6IFtcblx0XHRGaWVsZENvbGxlY3Rpb25GYWN0b3J5LFxuXHRcdEZpZWxkRmFjdG9yeSxcblx0XHRGaWVsZElkR2VuZXJhdG9yLFxuXHRcdERhdGFGaWVsZEZhY3Rvcnlcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZERvbWFpbk1vZHVsZSBleHRlbmRzIERvbWFpbk1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBjb21tYW5kSGFuZGxlcnMoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoSW5pdEZpZWxkc0NvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpXG5cdFx0XTtcblx0fVxuXG5cdHN0YXRpYyBkb21haW5FdmVudEhhbmRsZXJzKCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihGaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIpXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=