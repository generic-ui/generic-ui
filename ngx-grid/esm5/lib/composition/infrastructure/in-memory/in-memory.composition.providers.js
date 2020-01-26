/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InMemoryCompositionAggregateStore } from './command/in-memory.composition.aggregate-store';
import { CompositionAggregateRepository } from '../../domain/command/composition.aggregate-repository';
import { InMemoryCompositionAggregateRepository } from './command/in-memory.composition.aggregate-repository';
import { InMemoryCompositionReadStore } from './read/in-memory.composition.read-store';
import { CompositionRepository } from '../../domain/read/composition.repository';
import { InMemoryCompositionRepository } from './read/in-memory.composition.repository';
import { InMemoryCompositionStore } from './in-memory.composition.store';
/** @type {?} */
export var inMemoryCompositionCommandProviders = [
    InMemoryCompositionAggregateStore,
    {
        provide: CompositionAggregateRepository,
        useClass: InMemoryCompositionAggregateRepository
    },
];
/** @type {?} */
export var inMemoryCompositionQueryProviders = [
    InMemoryCompositionReadStore,
    {
        provide: CompositionRepository,
        useClass: InMemoryCompositionRepository
    }
];
/** @type {?} */
export var inMemoryCompositionProviders = [
    InMemoryCompositionStore
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuY29tcG9zaXRpb24ucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFFekUsTUFBTSxLQUFPLG1DQUFtQyxHQUFHO0lBQ2xELGlDQUFpQztJQUNqQztRQUNDLE9BQU8sRUFBRSw4QkFBOEI7UUFDdkMsUUFBUSxFQUFFLHNDQUFzQztLQUNoRDtDQUNEOztBQUVELE1BQU0sS0FBTyxpQ0FBaUMsR0FBRztJQUNoRCw0QkFBNEI7SUFDNUI7UUFDQyxPQUFPLEVBQUUscUJBQXFCO1FBQzlCLFFBQVEsRUFBRSw2QkFBNkI7S0FDdkM7Q0FDRDs7QUFFRCxNQUFNLEtBQU8sNEJBQTRCLEdBQUc7SUFDM0Msd0JBQXdCO0NBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi9jb21tYW5kL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbW1hbmQvY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuL2NvbW1hbmQvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUgfSBmcm9tICcuL3JlYWQvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3JlYWQvY29tcG9zaXRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5jb21wb3NpdGlvbi5zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBpbk1lbW9yeUNvbXBvc2l0aW9uQ29tbWFuZFByb3ZpZGVycyA9IFtcblx0SW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVN0b3JlLFxuXHR7XG5cdFx0cHJvdmlkZTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdHVzZUNsYXNzOiBJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeVxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGluTWVtb3J5Q29tcG9zaXRpb25RdWVyeVByb3ZpZGVycyA9IFtcblx0SW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSxcblx0e1xuXHRcdHByb3ZpZGU6IENvbXBvc2l0aW9uUmVwb3NpdG9yeSxcblx0XHR1c2VDbGFzczogSW5NZW1vcnlDb21wb3NpdGlvblJlcG9zaXRvcnlcblx0fVxuXTtcblxuZXhwb3J0IGNvbnN0IGluTWVtb3J5Q29tcG9zaXRpb25Qcm92aWRlcnMgPSBbXG5cdEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZVxuXTtcbiJdfQ==