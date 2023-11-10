import { GuiPushPipe } from './push/gui.push.pipe';
import { GuiLetDirective } from './let/gui.let.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiIfDirective } from './if/gui.if.directive';
import { GuiForDirective } from './for/gui.for.directive';
import { GuiStyleDirective } from './style/gui.style.directive';
import { GuiClassDirective } from './class/gui.class.directive';
import * as i0 from "@angular/core";
export class GuiTemplateModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiTemplateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: GuiTemplateModule, declarations: [GuiPushPipe,
            GuiLetDirective,
            GuiIfDirective,
            GuiForDirective,
            GuiStyleDirective,
            GuiClassDirective], imports: [CommonModule], exports: [GuiPushPipe,
            GuiLetDirective,
            GuiIfDirective,
            GuiForDirective,
            GuiStyleDirective,
            GuiClassDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiTemplateModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiTemplateModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        GuiPushPipe,
                        GuiLetDirective,
                        GuiIfDirective,
                        GuiForDirective,
                        GuiStyleDirective,
                        GuiClassDirective
                    ],
                    exports: [
                        GuiPushPipe,
                        GuiLetDirective,
                        GuiIfDirective,
                        GuiForDirective,
                        GuiStyleDirective,
                        GuiClassDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLnRlbXBsYXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9ndWktYW5ndWxhci90ZW1wbGF0ZS9ndWkudGVtcGxhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUF1QmhFLE1BQU0sT0FBTyxpQkFBaUI7d0dBQWpCLGlCQUFpQjt5R0FBakIsaUJBQWlCLGlCQWhCNUIsV0FBVztZQUNYLGVBQWU7WUFDZixjQUFjO1lBQ2QsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixpQkFBaUIsYUFSakIsWUFBWSxhQVdaLFdBQVc7WUFDWCxlQUFlO1lBQ2YsY0FBYztZQUNkLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsaUJBQWlCO3lHQUdOLGlCQUFpQixZQW5CNUIsWUFBWTs7NEZBbUJELGlCQUFpQjtrQkFyQjdCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixpQkFBaUI7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsaUJBQWlCO3FCQUNqQjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aVB1c2hQaXBlIH0gZnJvbSAnLi9wdXNoL2d1aS5wdXNoLnBpcGUnO1xuaW1wb3J0IHsgR3VpTGV0RGlyZWN0aXZlIH0gZnJvbSAnLi9sZXQvZ3VpLmxldC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBHdWlJZkRpcmVjdGl2ZSB9IGZyb20gJy4vaWYvZ3VpLmlmLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHdWlGb3JEaXJlY3RpdmUgfSBmcm9tICcuL2Zvci9ndWkuZm9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHdWlTdHlsZURpcmVjdGl2ZSB9IGZyb20gJy4vc3R5bGUvZ3VpLnN0eWxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHdWlDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vY2xhc3MvZ3VpLmNsYXNzLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0R3VpUHVzaFBpcGUsXG5cdFx0R3VpTGV0RGlyZWN0aXZlLFxuXHRcdEd1aUlmRGlyZWN0aXZlLFxuXHRcdEd1aUZvckRpcmVjdGl2ZSxcblx0XHRHdWlTdHlsZURpcmVjdGl2ZSxcblx0XHRHdWlDbGFzc0RpcmVjdGl2ZVxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0R3VpUHVzaFBpcGUsXG5cdFx0R3VpTGV0RGlyZWN0aXZlLFxuXHRcdEd1aUlmRGlyZWN0aXZlLFxuXHRcdEd1aUZvckRpcmVjdGl2ZSxcblx0XHRHdWlTdHlsZURpcmVjdGl2ZSxcblx0XHRHdWlDbGFzc0RpcmVjdGl2ZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEd1aVRlbXBsYXRlTW9kdWxlIHtcbn1cbiJdfQ==