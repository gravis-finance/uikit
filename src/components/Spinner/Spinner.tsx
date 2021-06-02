import React, { lazy, Suspense } from 'react'
import spinnerConfig from './spinner.config.json'
import { SpinnerProps } from './types'

const LazyLottie = lazy(() => import('react-lottie-player' as any))

const Spinner: React.FC<SpinnerProps> = ({ size } = { size: 128 }) => {
  return (
    <Suspense fallback={null}>
      <LazyLottie style={{width: size}} loop animationData={spinnerConfig} play />
    </Suspense>
  )
}

export default Spinner
