import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/list-view.read-model-root-id";
import * as i2 from "../../../core/api/list-view.command-invoker";
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
ListViewModeGate.ɵfac = function ListViewModeGate_Factory(t) { return new (t || ListViewModeGate)(i0.ɵɵdirectiveInject(i1.ListViewReadModelRootId), i0.ɵɵdirectiveInject(i2.ListViewCommandInvoker)); };
ListViewModeGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ListViewModeGate, selectors: [["gui-list-view", "mode", ""]], inputs: { mode: "mode", modeSelector: "modeSelector" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewModeGate, [{
        type: Directive,
        args: [{
                selector: 'gui-list-view[mode]'
            }]
    }], function () { return [{ type: i1.ListViewReadModelRootId }, { type: i2.ListViewCommandInvoker }]; }, { mode: [{
            type: Input
        }], modeSelector: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9nYXRlL21vZGUvbGlzdC12aWV3LW1vZGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQU01RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFPaEUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLElBQUk7SUFRekMsWUFBNEIsdUJBQWdELEVBQ3hELHlCQUFpRDtRQUNwRSxLQUFLLEVBQUUsQ0FBQztRQUZtQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ3hELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBd0I7SUFFckUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFvQztRQUUvQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUNoRjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQy9GO0lBQ0YsQ0FBQzs7Z0ZBdEJXLGdCQUFnQjttRUFBaEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FINUIsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7YUFDL0I7K0dBSUEsSUFBSTtrQkFESCxLQUFLO1lBSU4sWUFBWTtrQkFEWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2xpc3Qtdmlldy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1ttb2RlXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdNb2RlR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdG1vZGU6IExpc3RWaWV3TW9kZTtcblxuXHRASW5wdXQoKVxuXHRtb2RlU2VsZWN0b3I6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyOiBMaXN0Vmlld0NvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxMaXN0Vmlld01vZGVHYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdtb2RlJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMubGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlci5zZXRNb2RlKHRoaXMubW9kZSwgdGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdtb2RlU2VsZWN0b3InLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5saXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyLnRvZ2dsZVNlbGVjdG9yKHRoaXMubW9kZVNlbGVjdG9yLCB0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkKTtcblx0XHR9XG5cdH1cblxufVxuIl19