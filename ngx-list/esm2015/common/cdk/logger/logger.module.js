import { NgModule } from '@angular/core';
import { Logger } from './logger';
import { ConsoleLogger } from './console.logger';
export class LoggerModule {
}
LoggerModule.decorators = [
    { type: NgModule, args: [{
                providers: [{
                        provide: Logger,
                        useClass: ConsoleLogger
                    }]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBU2pELE1BQU0sT0FBTyxZQUFZOzs7WUFOeEIsUUFBUSxTQUFDO2dCQUNULFNBQVMsRUFBRSxDQUFDO3dCQUNYLE9BQU8sRUFBRSxNQUFNO3dCQUNmLFFBQVEsRUFBRSxhQUFhO3FCQUN2QixDQUFDO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgQ29uc29sZUxvZ2dlciB9IGZyb20gJy4vY29uc29sZS5sb2dnZXInO1xuXG5cbkBOZ01vZHVsZSh7XG5cdHByb3ZpZGVyczogW3tcblx0XHRwcm92aWRlOiBMb2dnZXIsXG5cdFx0dXNlQ2xhc3M6IENvbnNvbGVMb2dnZXJcblx0fV1cbn0pXG5leHBvcnQgY2xhc3MgTG9nZ2VyTW9kdWxlIHtcbn1cbiJdfQ==