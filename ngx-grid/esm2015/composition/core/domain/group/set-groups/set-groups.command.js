/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompositionCommand } from '../../composition.command';
export class SetGroupsCommand extends CompositionCommand {
    /**
     * @param {?} compositionId
     * @param {?} configs
     */
    constructor(compositionId, configs) {
        super(compositionId, 'SetGroupsCommand');
        this.compositionId = compositionId;
        this.configs = configs;
    }
    /**
     * @return {?}
     */
    getConfigs() {
        return this.configs;
    }
}
if (false) {
    /** @type {?} */
    SetGroupsCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SetGroupsCommand.prototype.configs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWdyb3Vwcy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9ncm91cC9zZXQtZ3JvdXBzL3NldC1ncm91cHMuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFJL0QsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGtCQUFrQjs7Ozs7SUFFdkQsWUFBcUIsYUFBNEIsRUFDN0IsT0FBZ0Q7UUFDbkUsS0FBSyxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRnJCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQXlDO0lBRXBFLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Q0FFRDs7O0lBVFkseUNBQXFDOzs7OztJQUM5QyxtQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2NvbXBvc2l0aW9uLmlkJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgU2V0R3JvdXBzQ29tbWFuZCBleHRlbmRzIENvbXBvc2l0aW9uQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3IocmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb25maWdzOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4pIHtcblx0XHRzdXBlcihjb21wb3NpdGlvbklkLCAnU2V0R3JvdXBzQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0Q29uZmlncygpOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4ge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3M7XG5cdH1cblxufVxuIl19