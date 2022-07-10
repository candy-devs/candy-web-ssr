import { useState } from "react";

export class RemoteCallError extends Error {
  private _handled = false;

  get handled() {
    return this._handled;
  }

  markAsHandled() {
    this._handled = true;
  }
}

type MayRemoteCallError = any | RemoteCallError;

export const remoteAction = <T extends Array<any>>(
  fn: (...args: T) => Promise<void>
) => {
  const [loading, setLoading] = useState(false);

  return async (...args: T) => {
    if (loading) {
      return Promise.resolve();
    }

    try {
      setLoading(true);
      return await fn(...args);
    } catch (e: MayRemoteCallError) {
      if (e instanceof RemoteCallError && e.handled) {
      } else {
        throw e;
      }
    } finally {
      setLoading(false);
    }

    return null as any;
  };
};
