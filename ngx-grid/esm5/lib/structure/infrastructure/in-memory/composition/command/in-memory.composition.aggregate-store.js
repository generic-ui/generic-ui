/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { InMemoryAggregateStore, AggregateStoreRegister, AggregateId } from '@generic-ui/hermes';
import { Override } from '../../../../../../common/cdk/decorators';
import { CompositionAggregate } from '../../../../domain/composition/command/composition.aggregate';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
var InMemoryCompositionAggregateStore = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryCompositionAggregateStore, _super);
    function InMemoryCompositionAggregateStore(inMemoryCompositionStore, aggregateStoreRegister) {
        return _super.call(this, inMemoryCompositionStore, aggregateStoreRegister) || this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryCompositionAggregateStore.prototype.getById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        /** @type {?} */
        var composition = _super.prototype.getById.call(this, aggregateId);
        if (composition) {
            return composition.clone();
        }
        else {
            return null;
        }
    };
    InMemoryCompositionAggregateStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryCompositionAggregateStore.ctorParameters = function () { return [
        { type: InMemoryCompositionStore },
        { type: AggregateStoreRegister }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [AggregateId]),
        tslib_1.__metadata("design:returntype", CompositionAggregate)
    ], InMemoryCompositionAggregateStore.prototype, "getById", null);
    return InMemoryCompositionAggregateStore;
}(InMemoryAggregateStore));
export { InMemoryCompositionAggregateStore };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvY29tcG9zaXRpb24vY29tbWFuZC9pbi1tZW1vcnkuY29tcG9zaXRpb24uYWdncmVnYXRlLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBRXBHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzFFO0lBQ3VELDZEQUE0QztJQUVsRywyQ0FBWSx3QkFBa0QsRUFDM0Qsc0JBQThDO2VBQ2hELGtCQUFNLHdCQUF3QixFQUFFLHNCQUFzQixDQUFDO0lBQ3hELENBQUM7Ozs7O0lBR0QsbURBQU87Ozs7SUFBUCxVQUFRLFdBQXdCOztZQUMzQixXQUFXLEdBQUcsaUJBQU0sT0FBTyxZQUFDLFdBQVcsQ0FBQztRQUU1QyxJQUFJLFdBQVcsRUFBRTtZQUNoQixPQUFPLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMzQjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUM7U0FDWjtJQUVGLENBQUM7O2dCQWxCRCxVQUFVOzs7O2dCQUhGLHdCQUF3QjtnQkFOQSxzQkFBc0I7O0lBa0J0RDtRQURDLFFBQVE7O2lEQUNZLFdBQVc7Z0RBQUcsb0JBQW9CO29FQVN0RDtJQUNGLHdDQUFDO0NBQUEsQUFuQkQsQ0FDdUQsc0JBQXNCLEdBa0I1RTtTQWxCWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5QWdncmVnYXRlU3RvcmUsIEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIsIEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5jb21wb3NpdGlvbi5zdG9yZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVTdG9yZSBleHRlbmRzIEluTWVtb3J5QWdncmVnYXRlU3RvcmU8Q29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihpbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSxcblx0XHRcdFx0YWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3Rlcikge1xuXHRcdHN1cGVyKGluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSwgYWdncmVnYXRlU3RvcmVSZWdpc3Rlcik7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB7XG5cdFx0bGV0IGNvbXBvc2l0aW9uID0gc3VwZXIuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRpZiAoY29tcG9zaXRpb24pIHtcblx0XHRcdHJldHVybiBjb21wb3NpdGlvbi5jbG9uZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0fVxufVxuIl19