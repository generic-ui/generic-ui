import { StaticProvider, Type } from '@angular/core';
import { DomainEventHandler } from './event/domain-event.handler';
export declare function provideEventHandlers(handlers: Array<Type<DomainEventHandler>>): Array<StaticProvider>;
