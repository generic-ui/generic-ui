/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemorySchemaStore } from '../in-memory.schema.store';
import { SchemaReadModelRootConverter } from '../../../read/schema.read-model-root-converter';
export class InMemorySchemaReadModelStore extends InMemoryReadModelStore {
    /**
     * @param {?} inMemorySchemaStore
     * @param {?} schemaReadModelRootConverter
     */
    constructor(inMemorySchemaStore, schemaReadModelRootConverter) {
        super(inMemorySchemaStore);
        this.inMemorySchemaStore = inMemorySchemaStore;
        this.schemaReadModelRootConverter = schemaReadModelRootConverter;
    }
    /**
     * @param {?} schemaAggregate
     * @return {?}
     */
    toReadModel(schemaAggregate) {
        return this.schemaReadModelRootConverter.convert(schemaAggregate);
    }
}
InMemorySchemaReadModelStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemorySchemaReadModelStore.ctorParameters = () => [
    { type: InMemorySchemaStore },
    { type: SchemaReadModelRootConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemorySchemaReadModelStore.prototype.inMemorySchemaStore;
    /**
     * @type {?}
     * @private
     */
    InMemorySchemaReadModelStore.prototype.schemaReadModelRootConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnNjaGVtYS5yZWFkLW1vZGVsLXN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc2NoZW1hL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9yZWFkL2luLW1lbW9yeS5zY2hlbWEucmVhZC1tb2RlbC1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU01RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUk5RixNQUFNLE9BQU8sNEJBQTZCLFNBQVEsc0JBR2pDOzs7OztJQUVoQixZQUFvQixtQkFBd0MsRUFDakQsNEJBQTBEO1FBQ3BFLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRlIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUNqRCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBRXJFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLGVBQWdDO1FBQzNDLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7WUFiRCxVQUFVOzs7O1lBSkYsbUJBQW1CO1lBQ25CLDRCQUE0Qjs7Ozs7OztJQVN4QiwyREFBZ0Q7Ozs7O0lBQ3pELG9FQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi8uLi9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYVN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LnNjaGVtYS5zdG9yZSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290Q29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U2NoZW1hUmVhZE1vZGVsU3RvcmUgZXh0ZW5kcyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlPFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0U2NoZW1hUmVhZE1vZGVsUm9vdCxcblx0U2NoZW1hSWQsXG5cdFNjaGVtYUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5NZW1vcnlTY2hlbWFTdG9yZTogSW5NZW1vcnlTY2hlbWFTdG9yZSxcblx0XHRcdFx0cHJpdmF0ZSBzY2hlbWFSZWFkTW9kZWxSb290Q29udmVydGVyOiBTY2hlbWFSZWFkTW9kZWxSb290Q29udmVydGVyKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlTY2hlbWFTdG9yZSk7XG5cdH1cblxuXHR0b1JlYWRNb2RlbChzY2hlbWFBZ2dyZWdhdGU6IFNjaGVtYUFnZ3JlZ2F0ZSk6IFNjaGVtYVJlYWRNb2RlbFJvb3Qge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIuY29udmVydChzY2hlbWFBZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==