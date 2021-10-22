/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, A
 */
export class AggregateDefinitionInitializer {
    /**
     * @param {?} definedAggregate
     * @param {?} injector
     * @param {?} aggregateFactoryArchive
     * @param {?} aggregateRepositoryArchive
     * @return {?}
     */
    register(definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive) {
        if (definedAggregate) {
            /** @type {?} */
            const set = new Set();
            /** @type {?} */
            const filteredDefinitions = [];
            definedAggregate.filter((/**
             * @param {?} def
             * @return {?}
             */
            (def) => {
                if (!set.has(def.key)) {
                    set.add(def.key);
                    filteredDefinitions.push(def);
                }
            }));
            filteredDefinitions.forEach((/**
             * @param {?} def
             * @return {?}
             */
            (def) => {
                /** @type {?} */
                const factory = injector.get(def.factory);
                /** @type {?} */
                const repository = injector.get(def.repository);
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWRlZmluaXRpb24uaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi9jb21tYW5kL2NvbmZpZy9hZ2dyZWdhdGUtZGVmaW5pdGlvbi5pbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUEsTUFBTSxPQUFPLDhCQUE4Qjs7Ozs7Ozs7SUFFMUMsUUFBUSxDQUNQLGdCQUFrRCxFQUNsRCxRQUFrQixFQUNsQix1QkFBc0QsRUFDdEQsMEJBQTREO1FBRzVELElBQUksZ0JBQWdCLEVBQUU7O2tCQUVmLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRTs7a0JBQ2YsbUJBQW1CLEdBQXFDLEVBQUU7WUFFaEUsZ0JBQWdCLENBQUMsTUFBTTs7OztZQUFDLENBQUMsR0FBOEIsRUFBRSxFQUFFO2dCQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzlCO1lBQ0YsQ0FBQyxFQUFDLENBQUM7WUFFSCxtQkFBbUIsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxHQUE4QixFQUFFLEVBQUU7O3NCQUV4RCxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDOztzQkFDeEMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFFMUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUM5QztnQkFFRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDN0MsMEJBQTBCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7aUJBQ3BEO1lBQ0YsQ0FBQyxFQUFDLENBQUM7WUFFSCxnRkFBZ0Y7WUFDaEYsd0VBQXdFO1NBQ3hFO0lBQ0YsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRGVmaW5pdGlvbiB9IGZyb20gJy4vYWdncmVnYXRlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsIEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlIH0gZnJvbSAnLi9kZWZpbmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0ZURlZmluaXRpb25Jbml0aWFsaXplcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+PiB7XG5cblx0cmVnaXN0ZXIoXG5cdFx0ZGVmaW5lZEFnZ3JlZ2F0ZTogQXJyYXk8QWdncmVnYXRlRGVmaW5pdGlvbjxJLCBBPj4sXG5cdFx0aW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdGFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlOiBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTxJLCBBPixcblx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU8SSwgQT5cblx0KTogdm9pZCB7XG5cblx0XHRpZiAoZGVmaW5lZEFnZ3JlZ2F0ZSkge1xuXG5cdFx0XHRjb25zdCBzZXQgPSBuZXcgU2V0KCk7XG5cdFx0XHRjb25zdCBmaWx0ZXJlZERlZmluaXRpb25zOiBBcnJheTxBZ2dyZWdhdGVEZWZpbml0aW9uPEksIEE+PiA9IFtdO1xuXG5cdFx0XHRkZWZpbmVkQWdncmVnYXRlLmZpbHRlcigoZGVmOiBBZ2dyZWdhdGVEZWZpbml0aW9uPEksIEE+KSA9PiB7XG5cdFx0XHRcdGlmICghc2V0LmhhcyhkZWYua2V5KSkge1xuXHRcdFx0XHRcdHNldC5hZGQoZGVmLmtleSk7XG5cdFx0XHRcdFx0ZmlsdGVyZWREZWZpbml0aW9ucy5wdXNoKGRlZik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRmaWx0ZXJlZERlZmluaXRpb25zLmZvckVhY2goKGRlZjogQWdncmVnYXRlRGVmaW5pdGlvbjxJLCBBPikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGZhY3RvcnkgPSBpbmplY3Rvci5nZXQoZGVmLmZhY3RvcnkpLFxuXHRcdFx0XHRcdHJlcG9zaXRvcnkgPSBpbmplY3Rvci5nZXQoZGVmLnJlcG9zaXRvcnkpO1xuXG5cdFx0XHRcdGlmICghYWdncmVnYXRlRmFjdG9yeUFyY2hpdmUuaGFzKGRlZi5rZXkpKSB7XG5cdFx0XHRcdFx0YWdncmVnYXRlRmFjdG9yeUFyY2hpdmUuYWRkKGRlZi5rZXksIGZhY3RvcnkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCFhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZS5oYXMoZGVmLmtleSkpIHtcblx0XHRcdFx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZS5hZGQoZGVmLmtleSwgcmVwb3NpdG9yeSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBhZ2dyZWdhdGUgZGVmaW5pdGlvbjonICsgZmlsdGVyZWREZWZpbml0aW9ucy5sZW5ndGgpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQgYWdncmVnYXRlIGRlZmluaXRpb246JywgZmlsdGVyZWREZWZpbml0aW9ucyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==