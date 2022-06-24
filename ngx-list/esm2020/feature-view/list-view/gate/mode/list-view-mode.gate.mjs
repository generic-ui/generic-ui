import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../feature/common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/list-view/api/global/list-view.read-model-root-id";
import * as i2 from "../../../../core/list-view/api/list-view.publisher";
export class ListViewModeGate extends Gate {
    constructor(listViewReadModelRootId, listViewCommandDispatcher) {
        super();
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.listViewCommandDispatcher = listViewCommandDispatcher;
    }
    ngOnChanges(changes) {
        if (this.isDefined('mode', changes)) {
            this.listViewCommandDispatcher.setMode(this.mode, this.listViewReadModelRootId);
        }
        if (this.isDefined('modeSelector', changes)) {
            this.listViewCommandDispatcher.toggleSelector(this.modeSelector, this.listViewReadModelRootId);
        }
    }
}
ListViewModeGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewModeGate, deps: [{ token: i1.ListViewReadModelRootId }, { token: i2.ListViewPublisher }], target: i0.ɵɵFactoryTarget.Directive });
ListViewModeGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: ListViewModeGate, selector: "gui-list-view[mode]", inputs: { mode: "mode", modeSelector: "modeSelector" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewModeGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[mode]'
                }]
        }], ctorParameters: function () { return [{ type: i1.ListViewReadModelRootId }, { type: i2.ListViewPublisher }]; }, propDecorators: { mode: [{
                type: Input
            }], modeSelector: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2xpc3Qtdmlldy9nYXRlL21vZGUvbGlzdC12aWV3LW1vZGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQU01RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7QUFPckUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLElBQUk7SUFRekMsWUFBNEIsdUJBQWdELEVBQ3hELHlCQUE0QztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQUZtQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ3hELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBbUI7SUFFaEUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFvQztRQUUvQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUNoRjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQy9GO0lBQ0YsQ0FBQzs7OEdBdEJXLGdCQUFnQjtrR0FBaEIsZ0JBQWdCOzRGQUFoQixnQkFBZ0I7a0JBSDVCLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtpQkFDL0I7OElBSUEsSUFBSTtzQkFESCxLQUFLO2dCQUlOLFlBQVk7c0JBRFgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2xpc3Qtdmlldy9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbGlzdC12aWV3L2FwaS9saXN0LXZpZXcucHVibGlzaGVyJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9saXN0LXZpZXcvYXBpL2dsb2JhbC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbbW9kZV0nXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TW9kZUdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRtb2RlOiBMaXN0Vmlld01vZGU7XG5cblx0QElucHV0KClcblx0bW9kZVNlbGVjdG9yOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlcjogTGlzdFZpZXdQdWJsaXNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPExpc3RWaWV3TW9kZUdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ21vZGUnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5saXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyLnNldE1vZGUodGhpcy5tb2RlLCB0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ21vZGVTZWxlY3RvcicsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLmxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIudG9nZ2xlU2VsZWN0b3IodGhpcy5tb2RlU2VsZWN0b3IsIHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=