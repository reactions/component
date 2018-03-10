import React from 'react'

export type Args<P, S> = {
  props: P
  state: S
  setState<K extends keyof S>(
    state:
      | ((prevState: Readonly<S>, props: P) => Pick<S, K> | S | null)
      | (Pick<S, K> | S | null),
    callback?: () => void,
  ): void
  forceUpdate(callBack?: () => void): void
}

export type ComponentProps<P, S> = {
  initialState?: S
  didMount?(args: Args<P, S>): void
  shouldUpdate?(args: {state: S; props: P; nextProps: P; nextState: S}): void
  didUpdate?(args: Args<P, S> & {prevProps: P; prevState: S}): void
  willUnmount?(args: {state: S; props: P}): void
  children?(args: Args<P, S>): void
  render?(args: Args<P, S>): void
}

export default class Component<
  P extends ComponentProps<P, S>,
  S = any
> extends React.Component<P, {}> {}
