// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const InnerSvg = (
  <>
    <path d="M224.82 0c.26.15 216.57 124.51 217.12 124.72 3.04 1.18 3.7 3.46 3.7 6.56-.07 83.45-.06 166.9-.01 250.36 0 2.77-.98 4.43-3.38 5.78C420.88 399.41 234.39 505.71 223.32 512h-3C141 466.34 2.08 386.56 1.93 386.48c-1.29-.74-1.96-1.75-1.88-3.24.04-.87-.03-225.94-.05-253.1 0-2.44.89-3.79 2.93-4.93C26.19 112.11 212.2 5.98 223.07 0h1.75zM214.4 20.42l-.22-.16C149.43 57.12 84.69 94 19.95 130.87c.04.12.08.23.13.35 10.19 3.84 20.39 7.69 30.86 11.64-7.71 5.99-8.32 6.03-10.65 5.13-.1-.04-24.17-9.28-26.8-9.99v230.42c.88-1.41 64.07-110.91 64.13-111.01 1.62-2.82 3.03-1.92 9.12-1.52 1.4.09 1.48.22.78 1.42-41.19 71.33-36.4 62.99-67.48 116.94-.81 1.4-.61 1.13 1.25 1.13 227.73 0 176.4 0 186.5.03 1.44 0 1.69-.23 1.7-1.64.01-2.96.01-5.92 0-8.88 0-1.34 2.36-.81-18.37-1.01-7.46-.07-14.14-3.22-21.38-12.7-7.38-9.66-14.62-19.43-21.85-29.21-2.28-3.08-3.45-2.38-16.76-2.38-1.75 0-1.78 0-1.76 1.82.29 26.21.15 25.27 1.04 32.66.52 4.37 2.16 4.2 9.69 4.81 3.14.26 3.88 4.08.52 4.92-1.57.39-31.6.51-33.67-.1-2.27-.66-2.55-4.08.3-4.73 3.29-.76 6.16.81 6.66-4.44 1.3-13.66 1.17-9.04 1.1-79.42-.01-10.82-.35-12.58-5.36-13.55-1.22-.24-3.54-.16-4.69-.55-2.88-.97-2-4.84 1.77-4.85 33.67-.03 46.08-1.07 56.06 4.86 7.74 4.61 11.98 11.48 12.51 20.4.88 14.59-6.51 22.35-14.99 32.59-.68.82-.72 1.38-.04 2.22 2.6 3.25 5.05 6.63 7.71 9.83 27.56 33.23 24.11 30.54 41.28 33.06.89.13 1.02-.42 1.01-1.15-.02-3.67.01-7.33-.02-11-.01-1.02.32-1.43 1.41-1.26 12.54 1.91 21.85-.07 23.58-.3 1.08-.15 1.5.2 1.48 1.33 0 .11.88 26.69.87 26.8-.05 1.52.67 1.62 1.89 1.62 62.38-.02 125.15-.02 186.71-.02-27.12-47.03-54.11-93.85-81.18-140.81 2.26-.66-.4-.03 6.69-1.39 2.03-.39 2.05-.41 3.11 1.44 7.31 12.64 77.31 133.96 77.37 134.06V137.98c-1.72.5-103.3 38.72-105.76 39.68-1.08.42-1.55.2-1.91-.88-.63-1.9-1.34-3.76-2.09-5.62-.32-.79-.09-1.13.65-1.39.1-.04 95.53-35.85 103.04-38.77C360.69 93.43 295.55 56 230.1 18.4c29.07 50.36 57.95 100.37 86.82 150.39-.09.11-.18.22-.28.33-9.57-.9-10.46-1.6-11.8-3.94-.96-1.69-73.5-127.71-82-142.16-9.1 14.67-83.56 146.21-85.37 146.32-2.93.17-5.88.08-9.25.08 28.83-49.83 57.5-99.42 86.18-149zm51.93 129.92c1.85-.05 3.7-.52 5.54-.85 1.69-.3 2.53.2 2.6 1.92 0 .11.07 19.06-.86 20.45-.87 1.3-1.88 1.22-2.6-.19-4.96-9.69 6.22-9.66-39.12-12.05-.7-.04-1 .23-.97.93 0 .13 3.72 121.98 3.73 122.11.02.89.52 1.2 1.21 1.51 2.92 1.31 5.96 2.42 8.7 4.05 7.31 4.33 11.38 10.84 12.41 19.31 1.44 11.8-2.77 35.77-32.21 37.14-2.75.13-28.26 1.08-34.14-23.25-4.66-19.26 8.26-32.7 19.89-36.4 1.49-.47 1.95-1.26 1.98-2.66.1-5.63 3-107.1 3.71-121.35.05-1.08-.62-1.16-1.35-1.15-32.35.52-36.75-.34-40.22 8.52-2.42 6.18-4.14 1.32-3.95.23a1361.1 1361.1 0 0 1 3.31-18.03c.4-2.11 1.43-2.61 3.43-1.86 5.59 2.11 6.72 1.7 37.25 1.92 1.73.01 1.78-.08 1.82-1.85.68-27.49.58-22.59.97-29.55.07-1.29-.41-2.17-1.63-2.8-5.6-2.91-8.75-7.55-8.9-13.87-.35-14.81 17.72-21.67 27.38-11.51 6.84 7.19 5.8 18.91-2.45 24.15-1.66 1.06-2.31 2.33-2.22 4.34.03.59-.11-4.31.98 30.05.03.9.43 1.12 1.24 1.11.1 0 23.01-.09 34.47-.37zM67.27 141.7c19.84-4.51 32.68-.56 52.49 1.69 2.76.31 3.74 1.22 3.62 3.99-.21 4.99-1.16 22.33-1.24 23.15-.1 1.04-.6 1.91-1.63 2.34-4.06 1.7-3.61-4.45-4.01-7.29-3.13-22.43-73.87-32.7-74.63 25.4-.31 23.92 17.01 53.63 54.08 50.88 27.24-2.01 19.05-20.19 24.84-20.47 1.98-.1 3.33 1.33 2.98 3.36-1.83 10.85-3.42 18.95-3.45 19.15-1.51 9.18-86.67 22.08-93.35-42.05-2.68-25.87 10.47-53.37 40.3-60.15zm79.99 87.67c-6.5-.03-12.99 0-19.49-.04-1.96-.01-2.78-1.61-2.66-1.79 2.38-3.75 5.89.92 5.86-6.14-.08-25.75.21-37.99.23-40.1.03-3.42-.53-4.65-3.32-4.94-7-.72-3.11-3.37-1.11-3.38 11.84-.1 22.62-.18 30.05.72 8.77 1.07 16.71 12.63 7.93 22.62-1.98 2.25-4.03 4.42-6.14 6.73.95 1.15 6.9 8.82 17.28 19.68 2.66 2.78 6.15 3.51 9.88 3.13 1.22-.12 2.11-.75 2.23-2.12.3-3.42.26 4.73.45-40.58.02-5.65-.34-6.58-3.23-6.83-3.95-.35-4.03-2.26-.69-3.37.12-.04 18.98-.09 19.09-.09.32 0 4.49.53 1.05 3.38-.05.05-.16.03-.24.04-3.61.26-3.94.98-3.96 4.62-.27 43.93.07 40.23.41 42.82.11.84.27 2.23 5.1 2.14 2.49-.04 3.86 3.37-.02 3.4-10.37.08-20.74.03-31.11.07-10.67.04-13.47-6.2-24.21-20.82-1.6-2.18-8.31-2.36-8.2-.37.88 16.47 0 17.78 3.99 17.67 4.75-.1 4.73 3.57.83 3.55zm274.97-10.15c-1.21 7.13.17 10.38-5.3 10.34-61.55-.42-47.82-.22-50.72-.31-1.22-.04-2.43-.44-3.63-.73-2.53-.6 1.48-1.23-.38-5.6-1.43-3.37-2.78-6.78-4.11-10.19-.38-.98-.94-1.44-2.04-1.44-3.12 0-7.27-.44-14.58.07-.58.04-1.4.55-1.62 1.06-1.58 3.62-3.07 7.29-4.51 10.96-1.27 3.23 7.86 1.32 12.19 2.16 2.97.57 4.53 3.72.66 3.73-8.79.03-17.58.06-26.37.05-2.92 0-3.09-3.15-.74-3.21 2.67-.07 4.74-1.13 5.92-3.47 1.5-2.97 2.8-6.04 4.11-9.09 18.18-42.14 17.06-40.17 18.42-41.61 1-1.06 2.07-1.05 3.03.04 2.93 3.34 18.4 44.71 23.62 51.92 1.96 2.7 5.74 1.98 6.36 2.01 3.61.13 3.97-1.11 4.13-4.29.09-1.87.08 1.17.07-41.24 0-4.46-2.36-3.74-5.55-4.27-.26-.04-2.56-.63-.08-3.06.21-.2-.89-.24 21.7-.15 2.32.01 5.32 2.75-1.21 3.45-1.81.19-2.58 1-2.66 2.83-.07 1.63-.19 38.89.29 41.21.35 1.73 1.73 2.38 3.23 2.43 13.25.43 14.92.44 16.04-3.41 1.67-5.78 4.13-2.52 3.73-.19zm-104.68 64.37c-4.24 0-4.42-3.39-.61-3.41 35.91-.16 28.11.38 37.19-.65 1.68-.19 2.38.24 2.25 1.89-.26 3.39-.64 6.78-1.03 10.16-.25 2.16-3.2 2.61-3.4-.15-.38-5.31-2.15-4.45-15.63-5.08-1.58-.07-1.64-.02-1.64 1.52v16.12c0 1.65 0 1.6 1.62 1.47 3.12-.25 10.31.34 15.69-1.52.47-.16 3.3-1.79 3.07 1.76-.01.21-.76 10.35-1.18 11.39-.53 1.29-1.88 1.51-2.58.32-1.17-1.95 0-5.08-3.71-5.3-15.42-.9-12.91-2.55-12.91 5.99 0 12.25-.76 16.11 3.89 16.24 16.64.48 14.4 0 16.43-5.71.84-2.37 3.5-1.77 3.18.58-.44 3.21-.85 6.43-1.23 9.64-.04.36-.16 2.4-4.66 2.39-37.16-.08-34.54-.19-35.21-.31-2.72-.51-2.2-3.04.22-3.45 1.1-.19 4.03.54 4.16-2.56 2.44-56.22-.07-51.34-3.91-51.33zm-.41-109.52c2.46.61 3.13 1.76 2.95 4.65-.33 5.3-.34 8.98-.55 9.69-.66 2.23-3.15 2.12-3.34-.27-.38-4.81-3.05-7.82-7.57-9.15-26.28-7.73-32.81 15.46-27.17 30.22 5.88 15.41 21.99 15.92 28.86 13.78 5.92-1.85 5.88-6.5 6.91-7.58 1.23-1.3 2.25-1.84 3.12 1.1.03.1.57 11.89-5.97 12.75-1.6.21-19.38 3.69-32.68-3.39-21.01-11.19-16.74-35.47-6.88-45.33 14.03-14.06 39.91-7.06 42.32-6.47zM288.8 280.14c3.28 0 3.66 3 .16 3.43-2.61.32-4.97-.42-5 5.46-.01 1.98-.19 29.05.4 41.45.11 2.29 1.15 3.52 3.44 3.65 22.03 1.21 14.95-1.65 18.79-6.34 1.83-2.24 2.76.84 2.76 1.08.35 13.62-3.96 12.39-5.19 12.4-.1 0-38.08-.18-38.18-.19-1.93-.23-2.06-2.99-.42-3.38 1.99-.48 4.94.4 5.13-2.8.96-15.87.57-44.65.34-47.81-.27-3.77-2.8-3.27-5.68-3.71-2.47-.38-1.99-3.22.34-3.22 1.47-.02 17.99-.03 23.11-.02zm-31.63-57.79c.07 4.08 2.86 3.46 6.01 3.58 2.61.1 2.53 3.41-.07 3.43-6.48.04-13.7-.02-21.61-.06-3.84-.02-3.38-3.35.04-3.37 4.49-.03 3.24 1.61 3.41-45.54.02-5.08-3.27-3.54-4.72-4.23-2.58-1.23-1.36-3.09.41-3.15 1.29-.05 20.19-.41 21.17.21 1.13.72 1.87 1.65-.42 2.86-.99.52-3.86-.28-4.15 2.47-.02.21-.82 1.63-.07 43.8zm-36.91 274.27c1.14.66 2.12.66 3.26 0 16.99-9.79 181.97-103.57 197.42-112.51-.14-.43 11.26-.18-181.52-.27-1.22 0-1.57.37-1.53 1.56 0 .1 1.25 44.51 1.22 50.38-.02 2.58-.62 5.22-1.36 7.71-.55 1.83.38-.5-13.5 32.23-.73 1.72-1.04 2.21-1.97-.08-4.19-10.34-8.28-20.72-12.57-31.01-1.46-3.5-2.24-7-2-10.79.16-2.46.8-16.12 1.51-48.02.04-1.95.01-1.96-1.96-1.96h-183c2.58 1.63 178.32 102.57 196 112.76zm-90.9-188.75c0 2.4.36 2.79 2.76 3.03 11.54 1.17 21.04 3.74 25.64-7.32 6.01-14.46 2.66-34.41-12.48-38.84-2.01-.59-15.96-2.76-15.94 1.51.05 8.01.01 11.58.02 41.62zm105.75-15.05c0 2.13 1.07 38.68 1.09 39.13.34 9.94-25.58 5.77-25.23-2.59.08-2.02 1.37-37.42 1.1-39.43-14.1 7.44-14.42 40.21 6.44 48.8 8.43 3.47 17.54.6 22.39-7.07 4.91-7.76 6.84-29.47-5.43-38.96-.12.05-.24.09-.36.12zM222.83 94.78c-9.83-.03-9.73 14.75-.07 14.87 9.59.11 10.1-14.84.07-14.87zm-80.15 103.87c.02 1.8.41 2.4 2.17 2.58 13.62 1.39 12.51-10.99 12.16-13.36-1.69-11.22-14.38-10.2-14.35-7.81.05 4.5-.03 13.68.02 18.59zm212.31 6.4c-2.03-5.28-4-10.39-6.1-15.84-2.16 5.48-4.16 10.57-6.23 15.84h12.33z"/>
  </>
)

export const FabCriticalRole = withStyle(InnerSvg, 445.64, 512, 'FabCriticalRole')
