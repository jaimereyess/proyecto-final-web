import { RoomTypes } from '../../types/types'

const CardIcons = ({ room }: { room: RoomTypes }) => {
  return (
    <div className='flex justify-between'>
      {room.has_terrace ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M.768 11.413l1.5 6.75a.75.75 0 0 0 1.464-.326l-1.5-6.75a.75.75 0 0 0-1.464.326zM2.22 23.456l1.5-5.25L3 18.75h3a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 0 1.5 0V19.5A2.25 2.25 0 0 0 6 17.25H3a.75.75 0 0 0-.721.544l-1.5 5.25a.75.75 0 1 0 1.442.412zm19.547-12.369l-1.5 6.75a.75.75 0 1 0 1.464.326l1.5-6.75a.75.75 0 1 0-1.464-.326zm1.453 11.957l-1.5-5.25A.75.75 0 0 0 21 17.25h-3a2.25 2.25 0 0 0-2.25 2.25v3.75a.75.75 0 0 0 1.5 0V19.5a.75.75 0 0 1 .75-.75h3l-.721-.544 1.5 5.25a.75.75 0 1 0 1.442-.412zM11.25 6.75v16.5a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-1.5 0zm-4.5 7.5h10.5a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5zM1.5 6l10.064-4.37c.297-.161.575-.161.803-.033l10.178 4.425L22.5 6H1.5zm0 1.5h21a1.5 1.5 0 0 0 .689-2.832L13.034.255c-.616-.35-1.452-.35-2.136.034L.858 4.646c-.544.28-.856.792-.857 1.352A1.5 1.5 0 0 0 1.499 7.5z'></path>
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M.768 11.413l1.5 6.75a.75.75 0 0 0 1.464-.326l-1.5-6.75a.75.75 0 0 0-1.464.326zM2.22 23.456l1.5-5.25L3 18.75h3a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 0 1.5 0V19.5A2.25 2.25 0 0 0 6 17.25H3a.75.75 0 0 0-.721.544l-1.5 5.25a.75.75 0 1 0 1.442.412zm19.547-12.369l-1.5 6.75a.75.75 0 1 0 1.464.326l1.5-6.75a.75.75 0 1 0-1.464-.326zm1.453 11.957l-1.5-5.25A.75.75 0 0 0 21 17.25h-3a2.25 2.25 0 0 0-2.25 2.25v3.75a.75.75 0 0 0 1.5 0V19.5a.75.75 0 0 1 .75-.75h3l-.721-.544 1.5 5.25a.75.75 0 1 0 1.442-.412zM11.25 6.75v16.5a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-1.5 0zm-4.5 7.5h10.5a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5zM1.5 6l10.064-4.37c.297-.161.575-.161.803-.033l10.178 4.425L22.5 6H1.5zm0 1.5h21a1.5 1.5 0 0 0 .689-2.832L13.034.255c-.616-.35-1.452-.35-2.136.034L.858 4.646c-.544.28-.856.792-.857 1.352A1.5 1.5 0 0 0 1.499 7.5z'></path>
          <line x1='0' y1='0' x2='24' y2='24' stroke='black' strokeWidth='2' />
        </svg>
      )}
      {room.has_air_conditioning ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-snowflake'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M10 4l2 1l2 -1' />
          <path d='M12 2v6.5l3 1.72' />
          <path d='M17.928 6.268l.134 2.232l1.866 1.232' />
          <path d='M20.66 7l-5.629 3.25l.01 3.458' />
          <path d='M19.928 14.268l-1.866 1.232l-.134 2.232' />
          <path d='M20.66 17l-5.629 -3.25l-2.99 1.738' />
          <path d='M14 20l-2 -1l-2 1' />
          <path d='M12 22v-6.5l-3 -1.72' />
          <path d='M6.072 17.732l-.134 -2.232l-1.866 -1.232' />
          <path d='M3.34 17l5.629 -3.25l-.01 -3.458' />
          <path d='M4.072 9.732l1.866 -1.232l.134 -2.232' />
          <path d='M3.34 7l5.629 3.25l2.99 -1.738' />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-snowflake-off'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M10 4l2 1l2 -1' />
          <path d='M12 2v6m1.196 1.186l1.804 1.034' />
          <path d='M17.928 6.268l.134 2.232l1.866 1.232' />
          <path d='M20.66 7l-5.629 3.25l-.031 .75' />
          <path d='M19.928 14.268l-1.015 .67' />
          <path d='M14.212 14.226l-2.171 1.262' />
          <path d='M14 20l-2 -1l-2 1' />
          <path d='M12 22v-6.5l-3 -1.72' />
          <path d='M6.072 17.732l-.134 -2.232l-1.866 -1.232' />
          <path d='M3.34 17l5.629 -3.25l-.01 -3.458' />
          <path d='M4.072 9.732l1.866 -1.232l.134 -2.232' />
          <path d='M3.34 7l5.629 3.25l.802 -.466' />
          <path d='M3 3l18 18' />
        </svg>
      )}
      {room.has_tv ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-device-tv'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
          <path d='M16 3l-4 4l-4 -4' />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-device-tv-off'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M11 7h8a2 2 0 0 1 2 2v8m-1.178 2.824c-.25 .113 -.529 .176 -.822 .176h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2' />
          <path d='M16 3l-4 4l-4 -4' />
          <path d='M3 3l18 18' />
        </svg>
      )}
      {room.has_wifi ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-wifi'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12 18l.01 0' />
          <path d='M9.172 15.172a4 4 0 0 1 5.656 0' />
          <path d='M6.343 12.343a8 8 0 0 1 11.314 0' />
          <path d='M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0' />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-wifi-off'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12 18l.01 0' />
          <path d='M9.172 15.172a4 4 0 0 1 5.656 0' />
          <path d='M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163 .155a7.965 7.965 0 0 1 3.287 2' />
          <path d='M3.515 9.515a12 12 0 0 1 3.544 -2.455m3.101 -.92a12 12 0 0 1 10.325 3.374' />
          <path d='M3 3l18 18' />
        </svg>
      )}
    </div>
  )
}

export default CardIcons
