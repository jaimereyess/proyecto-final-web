declare module '@loadable/component' {
  import { ComponentType, ReactNode, FunctionComponent } from 'react'

  interface LoadableOptions<Props> {
    fallback?: ReactNode
  }

  interface LoadableComponent<Props> extends FunctionComponent<Props> {
    preload: () => Promise<void>
  }

  function loadable<Props = {}>(
    loader: () => Promise<ComponentType<Props>>,
    options?: LoadableOptions<Props>,
  ): LoadableComponent<Props>

  export default loadable
}
