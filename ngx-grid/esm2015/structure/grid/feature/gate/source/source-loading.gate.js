import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/api/structure.id";
import * as i2 from "../../../../source/core/api/source.command-invoker";
export class SourceLoadingGate extends Gate {
    constructor(structureId, sourceCommandInvoker) {
        super();
        this.structureId = structureId;
        this.sourceCommandInvoker = sourceCommandInvoker;
    }
    ngOnChanges(changes) {
        if (this.isDefined('loading', changes)) {
            this.sourceCommandInvoker.setLoading(this.loading, this.structureId);
        }
    }
    ngOnInit() {
    }
}
SourceLoadingGate.ɵfac = function SourceLoadingGate_Factory(t) { return new (t || SourceLoadingGate)(i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.SourceCommandInvoker)); };
SourceLoadingGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SourceLoadingGate, selectors: [["gui-structure", "loading", ""]], inputs: { loading: "loading" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceLoadingGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[loading]'
            }]
    }], function () { return [{ type: i1.StructureId }, { type: i2.SourceCommandInvoker }]; }, { loading: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWxvYWRpbmcuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9nYXRlL3NvdXJjZS9zb3VyY2UtbG9hZGluZy5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFTaEUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLElBQUk7SUFLMUMsWUFBNkIsV0FBd0IsRUFDakMsb0JBQTBDO1FBQzdELEtBQUssRUFBRSxDQUFDO1FBRm9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFFOUQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFxQztRQUdoRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckU7SUFDRixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7O2tGQW5CVyxpQkFBaUI7b0VBQWpCLGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBSDdCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2FBQ2xDO2lHQUlBLE9BQU87a0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbbG9hZGluZ10nXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUxvYWRpbmdHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRsb2FkaW5nOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmRJbnZva2VyOiBTb3VyY2VDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U291cmNlTG9hZGluZ0dhdGU+KTogdm9pZCB7XG5cblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnbG9hZGluZycsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRJbnZva2VyLnNldExvYWRpbmcodGhpcy5sb2FkaW5nLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxufVxuIl19