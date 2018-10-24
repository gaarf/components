// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const SvgCryptoPink = (props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#ed79aa" r={16} />
      <g fill="#fff">
        <path
          d="M23.452 8.929l-1.87 1.883a7.238 7.238 0 0 0-5.152-2.149c-3.915 0-7.11 3.11-7.278 7.01h-.008v7.122A10.003 10.003 0 0 1 6.5 16c0-5.523 4.446-10 9.93-10a9.865 9.865 0 0 1 7.022 2.929zm0 14.142A9.865 9.865 0 0 1 16.592 26v-2.664a7.238 7.238 0 0 0 4.99-2.147z"
          opacity={0.5}
        />
        <path d="M11.681 24.784v-9.11h.007C11.828 13.069 13.97 11 16.592 11c2.712 0 4.911 2.214 4.911 4.946 0 2.731-2.199 4.945-4.91 4.945a4.862 4.862 0 0 1-2.483-.677v5.511a9.822 9.822 0 0 1-2.429-.94zm4.911-6.338a2.491 2.491 0 0 0 2.483-2.5c0-1.381-1.112-2.5-2.483-2.5a2.491 2.491 0 0 0-2.482 2.5c0 1.38 1.111 2.5 2.482 2.5z" />
      </g>
    </g>
  </svg>
)

export const CryptoPink = withStyle(SvgCryptoPink, 'CryptoPink', true)
