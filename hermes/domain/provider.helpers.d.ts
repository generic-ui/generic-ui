import { StaticProvider, Type } from '@angular/core';
import { Aggregate } from './command/aggregate';
import { CommandHandler } from './command/command.handler';
import { DomainEventHandler } from './event/domain-event.handler';
export declare function provideCommandHandlers(handlers: Array<Type<CommandHandler<Aggregate>>>): Array<StaticProvider>;
export declare function provideEventHandlers(handlers: Array<Type<DomainEventHandler>>): Array<StaticProvider>;
