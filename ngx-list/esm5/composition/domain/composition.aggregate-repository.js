/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateRepository } from '@generic-ui/hermes';
/**
 * @abstract
 */
var /**
 * @abstract
 */
CompositionAggregateRepository = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionAggregateRepository, _super);
    function CompositionAggregateRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CompositionAggregateRepository;
}(AggregateRepository));
/**
 * @abstract
 */
export { CompositionAggregateRepository };
if (false) {
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionAggregateRepository.prototype.getById = function (compositionId) { };
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    CompositionAggregateRepository.prototype.save = function (aggregate) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBWSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBTW5FOzs7O0lBQTZELDBEQUF3RDtJQUFySDs7SUFNQSxDQUFDO0lBQUQscUNBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBNkQsbUJBQW1CLEdBTS9FOzs7Ozs7Ozs7OztJQUpBLGdGQUErRTs7Ozs7O0lBRS9FLHlFQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnksIE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSBleHRlbmRzIEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8Q29tcG9zaXRpb25JZCwgQ29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblxuXHRhYnN0cmFjdCBnZXRCeUlkKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBPcHRpb25hbDxDb21wb3NpdGlvbkFnZ3JlZ2F0ZT47XG5cblx0YWJzdHJhY3Qgc2F2ZShhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlKTogdm9pZDtcblxufVxuIl19