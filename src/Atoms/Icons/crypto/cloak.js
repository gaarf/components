// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#ff3a00" r="16"/><path d="M16.003 5C22.07 5.01 27.002 9.946 27 16.003 26.998 22.067 22.062 27 15.996 27h-.01C9.926 26.994 4.997 22.053 5 15.986 5.003 9.93 9.94 5 16.003 5zM16 6.418c-5.277 0-9.572 4.298-9.574 9.58-.001 5.276 4.288 9.572 9.562 9.576 5.283 0 9.585-4.296 9.589-9.576a9.504 9.504 0 0 0-2.805-6.77 9.512 9.512 0 0 0-6.77-2.81zm4.728 8.599c.339 1.719-.097 3.163-1.332 4.417l-.17.171-.216-.106a6.326 6.326 0 0 0-.364-.164l-.489-.204.394-.354c.769-.69 1.178-1.591 1.217-2.677.04-1.086-.345-2.033-1.143-2.814a3.725 3.725 0 0 0-2.621-1.066 3.764 3.764 0 0 0-2.83 1.279c-.798.91-1.103 2.018-.88 3.203a3.635 3.635 0 0 0 1.114 2.041l.387.359-.489.197c-.122.049-.25.102-.387.16l-.21.088-.16-.163c-.823-.848-1.269-1.824-1.362-2.984-.197-2.445 1.388-4.599 3.77-5.121a4.996 4.996 0 0 1 1.07-.118 4.798 4.798 0 0 1 4.7 3.856zm-10.755 6.29C8.497 19.661 7.3 16.741 8.37 13.483a8.032 8.032 0 0 1 7.625-5.519 8.028 8.028 0 0 1 7.605 5.429c.946 2.772.288 5.924-1.675 8.03l-.25.267-.897-1.002.198-.223c1.228-1.383 1.798-3.023 1.695-4.873-.096-1.69-.768-3.162-1.998-4.374a6.605 6.605 0 0 0-4.667-1.909 6.699 6.699 0 0 0-4.371 1.625 6.588 6.588 0 0 0-2.009 3.037 6.618 6.618 0 0 0-.12 3.626 6.592 6.592 0 0 0 1.43 2.77l.196.227-.916.986z" fill="#fff" fill-rule="nonzero"/></g>
  </>
)

export const CryptoCloak = withStyle(InnerSvg, 32, 32, 'CryptoCloak', true)
