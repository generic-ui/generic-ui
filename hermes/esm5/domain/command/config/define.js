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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvY29uZmlnL2RlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBT3BEOzs7O0lBSUM7UUFGaUIsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFrQyxDQUFDO0lBR2pFLENBQUM7Ozs7OztJQUVELHFDQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLE9BQStCO1FBRS9DLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELHFDQUFHOzs7O0lBQUgsVUFBSSxHQUFXO1FBQ2QsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNGLDhCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7Ozs7Ozs7Ozs7SUFiQSxzQ0FBaUU7Ozs7O0FBZWxFOzs7O0lBSUM7UUFGaUIsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFxQyxDQUFDO0lBR3BFLENBQUM7Ozs7OztJQUVELHdDQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLFVBQXFDO1FBRXJELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELHdDQUFHOzs7O0lBQUgsVUFBSSxHQUFXO1FBQ2QsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNGLGlDQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7Ozs7Ozs7Ozs7SUFiQSx5Q0FBb0U7Ozs7OztBQWVyRSxxQ0FZQzs7O0lBVkEscUNBQXNDOztJQUV0QyxrQ0FBZ0M7O0lBRWhDLDhCQUFZOztJQUVaLHdDQUFtRDs7SUFFbkQsMENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9hZ2dyZWdhdGUvY3JlYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi9jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlRmFjdG9yeUFyY2hpdmU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPj4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWFwID0gbmV3IE1hcDxzdHJpbmcsIEFnZ3JlZ2F0ZUZhY3Rvcnk8SSwgQT4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRhZGQoa2V5OiBzdHJpbmcsIGZhY3Rvcnk6IEFnZ3JlZ2F0ZUZhY3Rvcnk8SSwgQT4pOiB2b2lkIHtcblxuXHRcdHRoaXMubWFwLnNldChrZXksIGZhY3RvcnkpO1xuXHR9XG5cblx0Z2V0KGtleTogc3RyaW5nKTogT3B0aW9uYWw8QWdncmVnYXRlRmFjdG9yeTxJLCBBPj4ge1xuXHRcdHJldHVybiBPcHRpb25hbC5vZih0aGlzLm1hcC5nZXQoa2V5KSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBBZ2dyZWdhdGVSZXBvc2l0b3J5PEksIEE+PigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0YWRkKGtleTogc3RyaW5nLCByZXBvc2l0b3J5OiBBZ2dyZWdhdGVSZXBvc2l0b3J5PEksIEE+KTogdm9pZCB7XG5cblx0XHR0aGlzLm1hcC5zZXQoa2V5LCByZXBvc2l0b3J5KTtcblx0fVxuXG5cdGdldChrZXk6IHN0cmluZyk6IE9wdGlvbmFsPEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8SSwgQT4+IHtcblx0XHRyZXR1cm4gT3B0aW9uYWwub2YodGhpcy5tYXAuZ2V0KGtleSkpO1xuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWdncmVnYXRlQ29uZmlnPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPiB7XG5cblx0cmVwb3NpdG9yeTogQWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPjtcblxuXHRmYWN0b3J5OiBBZ2dyZWdhdGVGYWN0b3J5PEksIEE+O1xuXG5cdGtleTogc3RyaW5nO1xuXG5cdGNyZWF0ZUhhbmRsZXI6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPEEsIEM+O1xuXG5cdGNvbW1hbmRIYW5kbGVyczogQXJyYXk8UHJvdmlkZXI+XG5cbn1cbiJdfQ==