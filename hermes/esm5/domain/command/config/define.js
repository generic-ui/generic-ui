/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../../common/optional';
/**
 * @template I, A
 */
var /**
 * @template I, A
 */
AggregateFactoryArchive = /** @class */ (function () {
    function AggregateFactoryArchive() {
        this.map = new Map();
    }
    /**
     * @param {?} key
     * @param {?} factory
     * @return {?}
     */
    AggregateFactoryArchive.prototype.add = /**
     * @param {?} key
     * @param {?} factory
     * @return {?}
     */
    function (key, factory) {
        this.map.set(key, factory);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    AggregateFactoryArchive.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return Optional.of(this.map.get(key));
    };
    return AggregateFactoryArchive;
}());
/**
 * @template I, A
 */
export { AggregateFactoryArchive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateFactoryArchive.prototype.map;
}
/**
 * @template I, A
 */
var /**
 * @template I, A
 */
AggregateRepositoryArchive = /** @class */ (function () {
    function AggregateRepositoryArchive() {
        this.map = new Map();
    }
    /**
     * @param {?} key
     * @param {?} repository
     * @return {?}
     */
    AggregateRepositoryArchive.prototype.add = /**
     * @param {?} key
     * @param {?} repository
     * @return {?}
     */
    function (key, repository) {
        this.map.set(key, repository);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    AggregateRepositoryArchive.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return Optional.of(this.map.get(key));
    };
    return AggregateRepositoryArchive;
}());
/**
 * @template I, A
 */
export { AggregateRepositoryArchive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateRepositoryArchive.prototype.map;
}
/**
 * @record
 * @template I, A, C
 */
export function AggregateConfig() { }
if (false) {
    /** @type {?} */
    AggregateConfig.prototype.repository;
    /** @type {?} */
    AggregateConfig.prototype.factory;
    /** @type {?} */
    AggregateConfig.prototype.key;
    /** @type {?} */
    AggregateConfig.prototype.createHandler;
    /** @type {?} */
    AggregateConfig.prototype.commandHandlers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvY29uZmlnL2RlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBT3BEOzs7O0lBSUM7UUFGaUIsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFrQyxDQUFDO0lBR2pFLENBQUM7Ozs7OztJQUVELHFDQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLE9BQStCO1FBRS9DLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELHFDQUFHOzs7O0lBQUgsVUFBSSxHQUFXO1FBQ2QsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNGLDhCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7Ozs7Ozs7Ozs7SUFiQSxzQ0FBaUU7Ozs7O0FBZWxFOzs7O0lBSUM7UUFGaUIsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFxQyxDQUFDO0lBR3BFLENBQUM7Ozs7OztJQUVELHdDQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLFVBQXFDO1FBRXJELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELHdDQUFHOzs7O0lBQUgsVUFBSSxHQUFXO1FBQ2QsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNGLGlDQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7Ozs7Ozs7Ozs7SUFiQSx5Q0FBb0U7Ozs7OztBQWVyRSxxQ0FZQzs7O0lBVkEscUNBQXNDOztJQUV0QyxrQ0FBZ0M7O0lBRWhDLDhCQUFZOztJQUVaLHdDQUE2Qzs7SUFFN0MsMENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9hZ2dyZWdhdGUvY3JlYXRlL2FnZ3JlZ2F0ZS1jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uL2NvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+PiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYXAgPSBuZXcgTWFwPHN0cmluZywgQWdncmVnYXRlRmFjdG9yeTxJLCBBPj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGFkZChrZXk6IHN0cmluZywgZmFjdG9yeTogQWdncmVnYXRlRmFjdG9yeTxJLCBBPik6IHZvaWQge1xuXG5cdFx0dGhpcy5tYXAuc2V0KGtleSwgZmFjdG9yeSk7XG5cdH1cblxuXHRnZXQoa2V5OiBzdHJpbmcpOiBPcHRpb25hbDxBZ2dyZWdhdGVGYWN0b3J5PEksIEE+PiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMubWFwLmdldChrZXkpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPj4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWFwID0gbmV3IE1hcDxzdHJpbmcsIEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8SSwgQT4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRhZGQoa2V5OiBzdHJpbmcsIHJlcG9zaXRvcnk6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8SSwgQT4pOiB2b2lkIHtcblxuXHRcdHRoaXMubWFwLnNldChrZXksIHJlcG9zaXRvcnkpO1xuXHR9XG5cblx0Z2V0KGtleTogc3RyaW5nKTogT3B0aW9uYWw8QWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPj4ge1xuXHRcdHJldHVybiBPcHRpb25hbC5vZih0aGlzLm1hcC5nZXQoa2V5KSk7XG5cdH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZ2dyZWdhdGVDb25maWc8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ+IHtcblxuXHRyZXBvc2l0b3J5OiBBZ2dyZWdhdGVSZXBvc2l0b3J5PEksIEE+O1xuXG5cdGZhY3Rvcnk6IEFnZ3JlZ2F0ZUZhY3Rvcnk8SSwgQT47XG5cblx0a2V5OiBzdHJpbmc7XG5cblx0Y3JlYXRlSGFuZGxlcjogQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz47XG5cblx0Y29tbWFuZEhhbmRsZXJzOiBBcnJheTxQcm92aWRlcj5cblxufVxuIl19