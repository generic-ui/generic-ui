/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
import { Group } from '../../api/group/group';
import { GroupId } from '../../api/group/group.id';
var CompositionGroupFactory = /** @class */ (function () {
    function CompositionGroupFactory() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    CompositionGroupFactory.prototype.create = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return new Group(new GroupId(RandomStringGenerator.generate()), config.header, config.width);
    };
    return CompositionGroupFactory;
}());
export { CompositionGroupFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZ3JvdXAuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4vZ3JvdXAvY29tcG9zaXRpb24uZ3JvdXAuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUduRDtJQUFBO0lBVUEsQ0FBQzs7Ozs7SUFSQSx3Q0FBTTs7OztJQUFOLFVBQU8sTUFBVztRQUNqQixPQUFPLElBQUksS0FBSyxDQUNmLElBQUksT0FBTyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQzdDLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsTUFBTSxDQUFDLEtBQUssQ0FDWixDQUFDO0lBQ0gsQ0FBQztJQUVGLDhCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uL2FwaS9ncm91cC9ncm91cCc7XG5pbXBvcnQgeyBHcm91cElkIH0gZnJvbSAnLi4vLi4vYXBpL2dyb3VwL2dyb3VwLmlkJztcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Hcm91cEZhY3Rvcnkge1xuXG5cdGNyZWF0ZShjb25maWc6IGFueSk6IEdyb3VwIHtcblx0XHRyZXR1cm4gbmV3IEdyb3VwKFxuXHRcdFx0bmV3IEdyb3VwSWQoUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCkpLFxuXHRcdFx0Y29uZmlnLmhlYWRlcixcblx0XHRcdGNvbmZpZy53aWR0aFxuXHRcdCk7XG5cdH1cblxufVxuIl19