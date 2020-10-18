/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureCommand } from '../../../../core/domain/structure.command';
export class SetConfigFilterCommand extends StructureCommand {
    /**
     * @param {?} structureId
     * @param {?} filterConfig
     */
    constructor(structureId, filterConfig) {
        super(structureId, 'SetConfigFilterCommand');
        this.filterConfig = filterConfig;
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.filterConfig;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetConfigFilterCommand.prototype.filterConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi9jb25maWcvc2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFN0UsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGdCQUFnQjs7Ozs7SUFFM0QsWUFBWSxXQUF3QixFQUNoQixZQUEwQjtRQUM3QyxLQUFLLENBQUMsV0FBVyxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFEMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFFOUMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztDQUVEOzs7Ozs7SUFSRyw4Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi9hcGkvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5leHBvcnQgY2xhc3MgU2V0Q29uZmlnRmlsdGVyQ29tbWFuZCBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb25maWc6IEZpbHRlckNvbmZpZykge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2V0Q29uZmlnRmlsdGVyQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0Q29uZmlnKCk6IEZpbHRlckNvbmZpZyB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyQ29uZmlnO1xuXHR9XG5cbn1cbiJdfQ==