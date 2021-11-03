import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../header/structure-header-top-enabled.archive";
import * as i2 from "../../../header/structure-header-bottom-enabled.archive";
export class StructureColumnHeaderGate extends Gate {
    constructor(structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive) {
        super();
        this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('columnHeaderTop', changes)) {
            this.structureHeaderTopEnabledArchive.next(this.columnHeaderTop);
        }
        if (this.isDefined('columnHeaderBottom', changes)) {
            this.structureHeaderBottomEnabledArchive.next(this.columnHeaderBottom);
        }
    }
}
StructureColumnHeaderGate.ɵfac = function StructureColumnHeaderGate_Factory(t) { return new (t || StructureColumnHeaderGate)(i0.ɵɵdirectiveInject(i1.StructureHeaderTopEnabledArchive), i0.ɵɵdirectiveInject(i2.StructureHeaderBottomEnabledArchive)); };
StructureColumnHeaderGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructureColumnHeaderGate, selectors: [["gui-structure", "columnHeaderTop", "", "columnHeaderBottom", ""], ["gui-structure", "columnHeaderTop", ""], ["gui-structure", "columnHeaderBottom", ""]], inputs: { columnHeaderTop: "columnHeaderTop", columnHeaderBottom: "columnHeaderBottom" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureColumnHeaderGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[columnHeaderTop][columnHeaderBottom], gui-structure[columnHeaderTop], gui-structure[columnHeaderBottom]'
            }]
    }], function () { return [{ type: i1.StructureHeaderTopEnabledArchive }, { type: i2.StructureHeaderBottomEnabledArchive }]; }, { columnHeaderTop: [{
            type: Input
        }], columnHeaderBottom: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi1oZWFkZXIuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9nYXRlL2NvbHVtbi9oZWFkZXIvc3RydWN0dXJlLWNvbHVtbi1oZWFkZXIuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFRbkUsTUFBTSxPQUFPLHlCQUEwQixTQUFRLElBQUk7SUFRbEQsWUFBNkIsZ0NBQWtFLEVBQzNFLG1DQUF3RTtRQUMzRixLQUFLLEVBQUUsQ0FBQztRQUZvQixxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO1FBQzNFLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7SUFFNUYsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUE2QztRQUV4RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN2RTtJQUNGLENBQUM7O2tHQXRCVyx5QkFBeUI7NEVBQXpCLHlCQUF5Qjt1RkFBekIseUJBQXlCO2NBSHJDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsdUhBQXVIO2FBQ2pJO3FJQUlBLGVBQWU7a0JBRGQsS0FBSztZQUlOLGtCQUFrQjtrQkFEakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLXRvcC1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci1ib3R0b20tZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW2NvbHVtbkhlYWRlclRvcF1bY29sdW1uSGVhZGVyQm90dG9tXSwgZ3VpLXN0cnVjdHVyZVtjb2x1bW5IZWFkZXJUb3BdLCBndWktc3RydWN0dXJlW2NvbHVtbkhlYWRlckJvdHRvbV0nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkhlYWRlckdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJUb3A6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y29sdW1uSGVhZGVyQm90dG9tOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlQ29sdW1uSGVhZGVyR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnY29sdW1uSGVhZGVyVG9wJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUubmV4dCh0aGlzLmNvbHVtbkhlYWRlclRvcCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdjb2x1bW5IZWFkZXJCb3R0b20nLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZS5uZXh0KHRoaXMuY29sdW1uSGVhZGVyQm90dG9tKTtcblx0XHR9XG5cdH1cblxufVxuIl19