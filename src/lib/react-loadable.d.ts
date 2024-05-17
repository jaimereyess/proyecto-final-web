declare module 'react-loadable' {
  import { ComponentType } from 'react'

  interface LoadableOptions {
    loader: () => Promise<any>
    loading: ComponentType<{
      isLoading: boolean
      pastDelay: boolean
      timedOut: boolean
      error: any
    }>
    delay?: number
    timeout?: number
    render?: (loaded: any, props: any) => JSX.Element
    webpack?: () => number[]
    modules?: () => string[]
  }

  interface LoadableComponent extends ComponentType {
    preload: () => void
  }

  function Loadable(options: LoadableOptions): LoadableComponent

  export default Loadable
}
