/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, A
 */
var /**
 * @template I, A
 */
AggregateDefinitionInitializer = /** @class */ (function () {
    function AggregateDefinitionInitializer() {
    }
    /**
     * @param {?} definedAggregate
     * @param {?} injector
     * @param {?} aggregateFactoryArchive
     * @param {?} aggregateRepositoryArchive
     * @return {?}
     */
    AggregateDefinitionInitializer.prototype.register = /**
     * @param {?} definedAggregate
     * @param {?} injector
     * @param {?} aggregateFactoryArchive
     * @param {?} aggregateRepositoryArchive
     * @return {?}
     */
    function (definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive) {
        if (definedAggregate) {
            /** @type {?} */
            var set_1 = new Set();
            /** @type {?} */
            var filteredDefinitions_1 = [];
            definedAggregate.filter((/**
             * @param {?} def
             * @return {?}
             */
            function (def) {
                if (!set_1.has(def.key)) {
                    set_1.add(def.key);
                    filteredDefinitions_1.push(def);
                }
            }));
            filteredDefinitions_1.forEach((/**
             * @param {?} def
             * @return {?}
             */
            function (def) {
                /** @type {?} */
                var factory = injector.get(def.factory);
                /** @type {?} */
                var repository = injector.get(def.repository);
                if (!aggregateFactoryArchive.has(def.key)) {
                    aggregateFactoryArchive.add(def.key, factory);
                }
                if (!aggregateRepositoryArchive.has(def.key)) {
                    aggregateRepositoryArchive.add(def.key, repository);
                }
            }));
            // console.log('Registered aggregate definition:' + filteredDefinitions.length);
            // console.log('Registered aggregate definition:', filteredDefinitions);
        }
    };
    return AggregateDefinitionInitializer;
}());
/**
 * @template I, A
 */
export { AggregateDefinitionInitializer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWRlZmluaXRpb24uaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi9jb21tYW5kL2NvbmZpZy9hZ2dyZWdhdGUtZGVmaW5pdGlvbi5pbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUE7Ozs7SUFBQTtJQXdDQSxDQUFDOzs7Ozs7OztJQXRDQSxpREFBUTs7Ozs7OztJQUFSLFVBQ0MsZ0JBQWtELEVBQ2xELFFBQWtCLEVBQ2xCLHVCQUFzRCxFQUN0RCwwQkFBNEQ7UUFHNUQsSUFBSSxnQkFBZ0IsRUFBRTs7Z0JBRWYsS0FBRyxHQUFHLElBQUksR0FBRyxFQUFFOztnQkFDZixxQkFBbUIsR0FBcUMsRUFBRTtZQUVoRSxnQkFBZ0IsQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQyxHQUE4QjtnQkFDdEQsSUFBSSxDQUFDLEtBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixLQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIscUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM5QjtZQUNGLENBQUMsRUFBQyxDQUFDO1lBRUgscUJBQW1CLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsR0FBOEI7O29CQUVwRCxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDOztvQkFDeEMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFFMUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUM5QztnQkFFRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDN0MsMEJBQTBCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7aUJBQ3BEO1lBQ0YsQ0FBQyxFQUFDLENBQUM7WUFFSCxnRkFBZ0Y7WUFDaEYsd0VBQXdFO1NBQ3hFO0lBQ0YsQ0FBQztJQUVGLHFDQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZURlZmluaXRpb24gfSBmcm9tICcuL2FnZ3JlZ2F0ZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLCBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSB9IGZyb20gJy4vZGVmaW5lJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGVEZWZpbml0aW9uSW5pdGlhbGl6ZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPj4ge1xuXG5cdHJlZ2lzdGVyKFxuXHRcdGRlZmluZWRBZ2dyZWdhdGU6IEFycmF5PEFnZ3JlZ2F0ZURlZmluaXRpb248SSwgQT4+LFxuXHRcdGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRhZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTogQWdncmVnYXRlRmFjdG9yeUFyY2hpdmU8SSwgQT4sXG5cdFx0YWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+XG5cdCk6IHZvaWQge1xuXG5cdFx0aWYgKGRlZmluZWRBZ2dyZWdhdGUpIHtcblxuXHRcdFx0Y29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuXHRcdFx0Y29uc3QgZmlsdGVyZWREZWZpbml0aW9uczogQXJyYXk8QWdncmVnYXRlRGVmaW5pdGlvbjxJLCBBPj4gPSBbXTtcblxuXHRcdFx0ZGVmaW5lZEFnZ3JlZ2F0ZS5maWx0ZXIoKGRlZjogQWdncmVnYXRlRGVmaW5pdGlvbjxJLCBBPikgPT4ge1xuXHRcdFx0XHRpZiAoIXNldC5oYXMoZGVmLmtleSkpIHtcblx0XHRcdFx0XHRzZXQuYWRkKGRlZi5rZXkpO1xuXHRcdFx0XHRcdGZpbHRlcmVkRGVmaW5pdGlvbnMucHVzaChkZWYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0ZmlsdGVyZWREZWZpbml0aW9ucy5mb3JFYWNoKChkZWY6IEFnZ3JlZ2F0ZURlZmluaXRpb248SSwgQT4pID0+IHtcblxuXHRcdFx0XHRjb25zdCBmYWN0b3J5ID0gaW5qZWN0b3IuZ2V0KGRlZi5mYWN0b3J5KSxcblx0XHRcdFx0XHRyZXBvc2l0b3J5ID0gaW5qZWN0b3IuZ2V0KGRlZi5yZXBvc2l0b3J5KTtcblxuXHRcdFx0XHRpZiAoIWFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLmhhcyhkZWYua2V5KSkge1xuXHRcdFx0XHRcdGFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLmFkZChkZWYua2V5LCBmYWN0b3J5KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUuaGFzKGRlZi5rZXkpKSB7XG5cdFx0XHRcdFx0YWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUuYWRkKGRlZi5rZXksIHJlcG9zaXRvcnkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQgYWdncmVnYXRlIGRlZmluaXRpb246JyArIGZpbHRlcmVkRGVmaW5pdGlvbnMubGVuZ3RoKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIGFnZ3JlZ2F0ZSBkZWZpbml0aW9uOicsIGZpbHRlcmVkRGVmaW5pdGlvbnMpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=