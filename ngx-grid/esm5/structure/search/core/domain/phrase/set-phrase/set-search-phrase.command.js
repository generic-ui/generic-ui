/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureCommand } from '../../../../../core/domain/structure.command';
var SetSearchPhraseCommand = /** @class */ (function (_super) {
    tslib_1.__extends(SetSearchPhraseCommand, _super);
    function SetSearchPhraseCommand(structureId, phrase, initial) {
        var _this = _super.call(this, structureId, 'SetSearchPhraseCommand') || this;
        _this.phrase = phrase;
        _this.initial = initial;
        return _this;
    }
    /**
     * @return {?}
     */
    SetSearchPhraseCommand.prototype.getPhrase = /**
     * @return {?}
     */
    function () {
        return this.phrase;
    };
    /**
     * @return {?}
     */
    SetSearchPhraseCommand.prototype.isInitial = /**
     * @return {?}
     */
    function () {
        return this.initial;
    };
    return SetSearchPhraseCommand;
}(StructureCommand));
export { SetSearchPhraseCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSearchPhraseCommand.prototype.phrase;
    /**
     * @type {?}
     * @private
     */
    SetSearchPhraseCommand.prototype.initial;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9jb3JlL2RvbWFpbi9waHJhc2Uvc2V0LXBocmFzZS9zZXQtc2VhcmNoLXBocmFzZS5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFaEY7SUFBNEMsa0RBQWdCO0lBRTNELGdDQUFZLFdBQXdCLEVBQ2hCLE1BQWMsRUFDZCxPQUFnQjtRQUZwQyxZQUdDLGtCQUFNLFdBQVcsRUFBRSx3QkFBd0IsQ0FBQyxTQUM1QztRQUhtQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBTyxHQUFQLE9BQU8sQ0FBUzs7SUFFcEMsQ0FBQzs7OztJQUVELDBDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsMENBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRiw2QkFBQztBQUFELENBQUMsQUFoQkQsQ0FBNEMsZ0JBQWdCLEdBZ0IzRDs7Ozs7OztJQWJHLHdDQUErQjs7Ozs7SUFDL0IseUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5jb21tYW5kJztcblxuZXhwb3J0IGNsYXNzIFNldFNlYXJjaFBocmFzZUNvbW1hbmQgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGhyYXNlOiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5pdGlhbDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2V0U2VhcmNoUGhyYXNlQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0UGhyYXNlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucGhyYXNlO1xuXHR9XG5cblx0aXNJbml0aWFsKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluaXRpYWw7XG5cdH1cblxufVxuIl19