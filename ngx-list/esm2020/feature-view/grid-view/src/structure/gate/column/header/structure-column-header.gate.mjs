import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../../feature/common/component/src/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../header/structure-header-top-enabled.archive";
import * as i2 from "../../../../header/structure-header-bottom-enabled.archive";
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
StructureColumnHeaderGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureColumnHeaderGate, deps: [{ token: i1.StructureHeaderTopEnabledArchive }, { token: i2.StructureHeaderBottomEnabledArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructureColumnHeaderGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: StructureColumnHeaderGate, selector: "gui-structure[columnHeaderTop][columnHeaderBottom], gui-structure[columnHeaderTop], gui-structure[columnHeaderBottom]", inputs: { columnHeaderTop: "columnHeaderTop", columnHeaderBottom: "columnHeaderBottom" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureColumnHeaderGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[columnHeaderTop][columnHeaderBottom], gui-structure[columnHeaderTop], gui-structure[columnHeaderBottom]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureHeaderTopEnabledArchive }, { type: i2.StructureHeaderBottomEnabledArchive }]; }, propDecorators: { columnHeaderTop: [{
                type: Input
            }], columnHeaderBottom: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi1oZWFkZXIuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvc3RydWN0dXJlL2dhdGUvY29sdW1uL2hlYWRlci9zdHJ1Y3R1cmUtY29sdW1uLWhlYWRlci5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx3REFBd0QsQ0FBQzs7OztBQVE5RSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsSUFBSTtJQVFsRCxZQUE2QixnQ0FBa0UsRUFDM0UsbUNBQXdFO1FBQzNGLEtBQUssRUFBRSxDQUFDO1FBRm9CLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDM0Usd0NBQW1DLEdBQW5DLG1DQUFtQyxDQUFxQztJQUU1RixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQTZDO1FBRXhELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqRTtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUNsRCxJQUFJLENBQUMsbUNBQW1DLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0YsQ0FBQzs7dUhBdEJXLHlCQUF5QjsyR0FBekIseUJBQXlCOzRGQUF6Qix5QkFBeUI7a0JBSHJDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLHVIQUF1SDtpQkFDakk7eUtBSUEsZUFBZTtzQkFEZCxLQUFLO2dCQUlOLGtCQUFrQjtzQkFEakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItdG9wLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLWJvdHRvbS1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtjb2x1bW5IZWFkZXJUb3BdW2NvbHVtbkhlYWRlckJvdHRvbV0sIGd1aS1zdHJ1Y3R1cmVbY29sdW1uSGVhZGVyVG9wXSwgZ3VpLXN0cnVjdHVyZVtjb2x1bW5IZWFkZXJCb3R0b21dJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5IZWFkZXJHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0Y29sdW1uSGVhZGVyVG9wOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlckJvdHRvbTogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZUNvbHVtbkhlYWRlckdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2NvbHVtbkhlYWRlclRvcCcsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLm5leHQodGhpcy5jb2x1bW5IZWFkZXJUb3ApO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnY29sdW1uSGVhZGVyQm90dG9tJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUubmV4dCh0aGlzLmNvbHVtbkhlYWRlckJvdHRvbSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==