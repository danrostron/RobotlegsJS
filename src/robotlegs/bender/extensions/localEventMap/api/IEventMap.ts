// ------------------------------------------------------------------------------
//  Copyright (c) 2009-2013 the original author or authors. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IEventDispatcher } from "../../../events/IEventDispatcher";

/**
 * The Event Map keeps track of listeners and provides the ability
 * to unregister all listeners with a single method call.
 */
export let IEventMap = Symbol("IEventMap");
export interface IEventMap {
    /**
     * The same as calling <code>addEventListener</code> directly on the <code>IEventDispatcher</code>,
     * but keeps a list of listeners for easy (usually automatic) removal.
     *
     * @param dispatcher The <code>IEventDispatcher</code> to listen to
     * @param type The <code>Event</code> type to listen for
     * @param listener The <code>Event</code> handler
     * @param eventClass Optional Event class for a stronger mapping. Defaults to <code>flash.events.Event</code>.
     * @param useCapture
     * @param priority
     * @param useWeakReference
     */
    mapListener(dispatcher: IEventDispatcher, type: string, listener: Function, eventClass?: Object, useCapture?: Boolean, priority?: number, useWeakReference?: Boolean): void;

    /**
     * The same as calling <code>removeEventListener</code> directly on the <code>IEventDispatcher</code>,
     * but updates our local list of listeners.
     *
     * @param dispatcher The <code>IEventDispatcher</code>
     * @param type The <code>Event</code> type
     * @param listener The <code>Event</code> handler
     * @param eventClass Optional Event class for a stronger mapping. Defaults to <code>flash.events.Event</code>.
     * @param useCapture
     */
    unmapListener(dispatcher: IEventDispatcher, type: string, listener: Function, eventClass?: Object, useCapture?: Boolean): void;

    /**
     * Removes all listeners registered through <code>mapListener</code>
     */
    unmapListeners(): void;

    /**
     * Suspends all listeners registered through <code>mapListener</code>
     */
    suspend(): void;

    /**
     * Resumes all listeners registered through <code>mapListener</code>
     */
    resume(): void;
}
