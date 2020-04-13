/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Reactive } from '../../../../common/cdk/reactive';
/**
 * @abstract
 */
export class StructureReadModelRepository extends Reactive {
    /**
     * @protected
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super();
        domainEventBus
            .ofEvent(...this.forEvents())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            try {
                this.subs(event);
            }
            catch (e) {
                console.error(e);
            }
        }));
    }
}
if (false) {
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    StructureReadModelRepository.prototype.onStructure = function (aggregateId) { };
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    StructureReadModelRepository.prototype.forEvents = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} event
     * @return {?}
     */
    StructureReadModelRepository.prototype.subs = function (event) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFNM0QsTUFBTSxPQUFnQiw0QkFBNkIsU0FBUSxRQUFROzs7OztJQUVsRSxZQUFzQixjQUE4QjtRQUNuRCxLQUFLLEVBQUUsQ0FBQztRQUNSLGNBQWM7YUFDWixPQUFPLENBQ1AsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ25CO2FBQ0EsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUU7WUFFOUMsSUFBSTtnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtRQUNGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQVFEOzs7Ozs7O0lBTkEsZ0ZBQW1GOzs7Ozs7SUFFbkYsbUVBQTBEOzs7Ozs7O0lBRTFELG1FQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRkb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdC4uLnRoaXMuZm9yRXZlbnRzKClcblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiB7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLnN1YnMoZXZlbnQpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRhYnN0cmFjdCBvblN0cnVjdHVyZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPYnNlcnZhYmxlPFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+O1xuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBmb3JFdmVudHMoKTogQXJyYXk8dHlwZW9mIERvbWFpbkV2ZW50PjtcblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3Qgc3VicyhldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KTogdm9pZDtcblxufVxuIl19