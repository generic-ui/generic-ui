import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { RowSelectionTypeArchive } from '../../formation/core/api/type/row-selection-type.archive';
import { FormationApiModule } from '../core/api/formation.api-module';
export class FormationFeatureModule extends FeatureModule {
    static forComponent() {
        return [
            RowSelectionTypeArchive
        ];
    }
}
FormationFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormationApiModule
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2ZlYXR1cmUvZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVd0RSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTtJQUV4RCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPO1lBQ04sdUJBQXVCO1NBQ3ZCLENBQUM7SUFDSCxDQUFDOzs7WUFkRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vZm9ybWF0aW9uL2NvcmUvYXBpL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uQXBpTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hcGkvZm9ybWF0aW9uLmFwaS1tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybWF0aW9uQXBpTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlXG5cdFx0XTtcblx0fVxuXG5cdC8vIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHNvdXJjZUFwaU1vZHVsZTogU291cmNlQXBpTW9kdWxlKSB7XG5cdC8vIFx0c3VwZXIoKTtcblx0Ly8gXHRpZiAoc291cmNlQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdC8vIFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1NvdXJjZUFwaU1vZHVsZSBpcyByZXF1aXJlZCcpO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG59XG4iXX0=