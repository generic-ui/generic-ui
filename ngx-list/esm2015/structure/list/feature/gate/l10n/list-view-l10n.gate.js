import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../l10n/core/api/translation.facade";
export class ListViewL10nGate extends Gate {
    constructor(translationService) {
        super();
        this.translationService = translationService;
    }
    ngOnChanges(changes) {
        if (this.isDefined('localization', changes)) {
            if (this.localization.translationResolver) {
                this.translationService.setResolver(this.localization.translationResolver);
            }
            if (this.localization.translation) {
                this.translationService.changeTranslation(this.localization.translation);
            }
        }
    }
}
ListViewL10nGate.ɵfac = function ListViewL10nGate_Factory(t) { return new (t || ListViewL10nGate)(i0.ɵɵdirectiveInject(i1.TranslationFacade)); };
ListViewL10nGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ListViewL10nGate, selectors: [["gui-list-view", "localization", ""]], inputs: { localization: "localization" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewL10nGate, [{
        type: Directive,
        args: [{
                selector: 'gui-list-view[localization]'
            }]
    }], function () { return [{ type: i1.TranslationFacade }]; }, { localization: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWwxMG4uZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9nYXRlL2wxMG4vbGlzdC12aWV3LWwxMG4uZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUc1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMENBQTBDLENBQUM7OztBQVNoRSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsSUFBSTtJQUt6QyxZQUE2QixrQkFBcUM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFEb0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUVsRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQW9DO1FBRS9DLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFFNUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFO2dCQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUMzRTtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Q7SUFDRixDQUFDOztnRkFyQlcsZ0JBQWdCO21FQUFoQixnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUg1QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjthQUN2QztvRUFJQSxZQUFZO2tCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBHdWlMaXN0TG9jYWxpemF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZ3VpL2xpc3QvY29yZS9hcGkvZ3VpLmxpc3QucHVibGljLWFwaSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbbG9jYWxpemF0aW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdMMTBuR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGxvY2FsaXphdGlvbjogR3VpTGlzdExvY2FsaXphdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25GYWNhZGUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPExpc3RWaWV3TDEwbkdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2xvY2FsaXphdGlvbicsIGNoYW5nZXMpKSB7XG5cblx0XHRcdGlmICh0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvblJlc29sdmVyKSB7XG5cdFx0XHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnNldFJlc29sdmVyKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uUmVzb2x2ZXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb24pIHtcblx0XHRcdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2UuY2hhbmdlVHJhbnNsYXRpb24odGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iXX0=