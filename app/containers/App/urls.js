/*
 *
 * URLs file
 *
 */

const BASE_URL_PATH_PUBLIC = 'https://gateway.marvel.com/v1/public'
export const COMICS_LIST_API = `${BASE_URL_PATH_PUBLIC}/comics`
export const COMIC_DETAILS_API = `${COMICS_LIST_API}/:id`
export const CHARACTERS_LIST_API = `${BASE_URL_PATH_PUBLIC}/characters`

// Route Paths
export const COMIC_DETAILS_PATH = '/comics-details/:id'
