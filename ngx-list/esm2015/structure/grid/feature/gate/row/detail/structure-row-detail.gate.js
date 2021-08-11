/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { StructureRowDetailConfigArchive } from '../../../row-detail/structure.row-detail.config-archive';
export class StructureRowDetailGate extends Gate {
    /**
     * @param {?} structureDetailViewConfigArchive
     */
    constructor(structureDetailViewConfigArchive) {
        super();
        this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('rowDetail', changes)) {
            this.structureDetailViewConfigArchive.next(this.rowDetail);
        }
    }
}
StructureRowDetailGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[rowDetail]'
            },] }
];
/** @nocollapse */
StructureRowDetailGate.ctorParameters = () => [
    { type: StructureRowDetailConfigArchive }
];
StructureRowDetailGate.propDecorators = {
    rowDetail: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureRowDetailGate.prototype.rowDetail;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailGate.prototype.structureDetailViewConfigArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy1kZXRhaWwuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9nYXRlL3Jvdy9kZXRhaWwvc3RydWN0dXJlLXJvdy1kZXRhaWwuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25FLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBTTFHLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxJQUFJOzs7O0lBSy9DLFlBQTZCLGdDQUFpRTtRQUM3RixLQUFLLEVBQUUsQ0FBQztRQURvQixxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWlDO0lBRTlGLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQTBDO1FBRXJELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0Q7SUFDRixDQUFDOzs7WUFqQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7YUFDcEM7Ozs7WUFMUSwrQkFBK0I7Ozt3QkFRdEMsS0FBSzs7OztJQUFOLDJDQUMyQjs7Ozs7SUFFZixrRUFBa0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUm93RGV0YWlsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vcm93LWRldGFpbC9yb3ctZGV0YWlsLmNvbmZpZyc7XG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vcm93LWRldGFpbC9zdHJ1Y3R1cmUucm93LWRldGFpbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtyb3dEZXRhaWxdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSb3dEZXRhaWxHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cm93RGV0YWlsOiBSb3dEZXRhaWxDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVEZXRhaWxWaWV3Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlUm93RGV0YWlsQ29uZmlnQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlUm93RGV0YWlsR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgncm93RGV0YWlsJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmUubmV4dCh0aGlzLnJvd0RldGFpbCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==