/**
 * Fake fetch :P A fetch is no needed, given the sprites
 * are correlated under the same resource with their pokedex id, 
 * and it is consecutive
 */
export default async function fetchPhotos () {
    return await Array.apply(null, { length: 150 })
        .map((item, index) => {
            return {
                id: index + 1,
                sprite: `https://picsum.photos/200/300?random=${index}`
            }
        })
}