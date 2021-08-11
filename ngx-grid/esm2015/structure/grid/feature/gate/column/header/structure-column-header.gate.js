/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { StructureHeaderTopEnabledArchive } from '../../../header/structure-header-top-enabled.archive';
import { StructureHeaderBottomEnabledArchive } from '../../../header/structure-header-bottom-enabled.archive';
export class StructureColumnHeaderGate extends Gate {
    /**
     * @param {?} structureHeaderTopEnabledArchive
     * @param {?} structureHeaderBottomEnabledArchive
     */
    constructor(structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive) {
        super();
        this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('columnHeaderTop', changes)) {
            this.structureHeaderTopEnabledArchive.next(this.columnHeaderTop);
        }
        if (this.isDefined('columnHeaderBottom', changes)) {
            this.structureHeaderBottomEnabledArchive.next(this.columnHeaderBottom);
        }
    }
}
StructureColumnHeaderGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[columnHeaderTop][columnHeaderBottom], gui-structure[columnHeaderTop], gui-structure[columnHeaderBottom]'
            },] }
];
/** @nocollapse */
StructureColumnHeaderGate.ctorParameters = () => [
    { type: StructureHeaderTopEnabledArchive },
    { type: StructureHeaderBottomEnabledArchive }
];
StructureColumnHeaderGate.propDecorators = {
    columnHeaderTop: [{ type: Input }],
    columnHeaderBottom: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureColumnHeaderGate.prototype.columnHeaderTop;
    /** @type {?} */
    StructureColumnHeaderGate.prototype.columnHeaderBottom;
    /**
     * @type {?}
     * @private
     */
    StructureColumnHeaderGate.prototype.structureHeaderTopEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    StructureColumnHeaderGate.prototype.structureHeaderBottomEnabledArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi1oZWFkZXIuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9nYXRlL2NvbHVtbi9oZWFkZXIvc3RydWN0dXJlLWNvbHVtbi1oZWFkZXIuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBTTlHLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxJQUFJOzs7OztJQVFsRCxZQUE2QixnQ0FBa0UsRUFDM0UsbUNBQXdFO1FBQzNGLEtBQUssRUFBRSxDQUFDO1FBRm9CLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDM0Usd0NBQW1DLEdBQW5DLG1DQUFtQyxDQUFxQztJQUU1RixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUE2QztRQUV4RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN2RTtJQUNGLENBQUM7OztZQXpCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVIQUF1SDthQUNqSTs7OztZQU5RLGdDQUFnQztZQUNoQyxtQ0FBbUM7Ozs4QkFRMUMsS0FBSztpQ0FHTCxLQUFLOzs7O0lBSE4sb0RBQ3lCOztJQUV6Qix1REFDNEI7Ozs7O0lBRWhCLHFFQUFtRjs7Ozs7SUFDNUYsd0VBQXlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItdG9wLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLWJvdHRvbS1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbY29sdW1uSGVhZGVyVG9wXVtjb2x1bW5IZWFkZXJCb3R0b21dLCBndWktc3RydWN0dXJlW2NvbHVtbkhlYWRlclRvcF0sIGd1aS1zdHJ1Y3R1cmVbY29sdW1uSGVhZGVyQm90dG9tXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uSGVhZGVyR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlclRvcDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJCb3R0b206IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVDb2x1bW5IZWFkZXJHYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdjb2x1bW5IZWFkZXJUb3AnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZS5uZXh0KHRoaXMuY29sdW1uSGVhZGVyVG9wKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2NvbHVtbkhlYWRlckJvdHRvbScsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlLm5leHQodGhpcy5jb2x1bW5IZWFkZXJCb3R0b20pO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=