namespace SpriteKind {
    export const SHARP_ROCK = SpriteKind.create()
    export const axe = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (FLOATING_SWORD.vy == 0) {
        FLOATING_SWORD.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    FLOATING_SWORD.setPosition(31, 13)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.slash)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SHARP_ROCK, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (FLOATING_SWORD.y < otherSprite.y) {
        info.changeScoreBy(5)
    } else {
        info.changeLifeBy(-1)
    }
})
let axe: Sprite = null
let SHARP_ROCK: Sprite = null
let FLOATING_SWORD: Sprite = null
FLOATING_SWORD = sprites.create(assets.image`Floating sword`, SpriteKind.Player)
controller.moveSprite(FLOATING_SWORD, 100, 0)
info.setLife(5)
info.setScore(0)
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccbbbbbbbbbbbbbccccccccc
    ccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
    cccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
    cccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
    cccccbbbbbbbbdddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddbbbbbbccccc
    cccccbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddbbbbbbcccc
    cccccbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbcccc
    cccccbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbccc
    cccccbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbcc
    cccccbbbbbbddddddddddd111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbcc
    cccccbbbbbbdddddddddd111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddd11111111111111111111111111111dddddddddddddddddddddddddddddddbbbbbbbcc
    cccccbbbbbbdddddddddd11111111111111111111111111111111111ddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111dddddddddddddddddddddddbbbbbbbcc
    cccccbbbbbbddddddddd11111111111111111111111111111111111111dddddddddddddddddddddddddddddd1111111111111111111111111111111111111111111111dddddddddddddddddbbbbbbbcc
    cccccbbbbbbddddd1111111111111111111111111111111111111111111ddddddddddddddddddddddddddd1111111111111111111111111111111111111111111111111111ddddddddddddbbbbbbbbcc
    cccccbbbbbbddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddbbbbbbbbcc
    cccccbbbbbbdddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddbbbbbcccc
    cccccbbbbbbdddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbbcccc
    cccccbbbbbbdddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbccccc
    cccccbbbbbbdddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbccccc
    cccccbbbbbbddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbccccc
    cccccbbbbbbddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbcccccc
    cccccbbbbbbddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddbbbbcccccc
    cccccbbbbbbddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddbbbbcccccc
    cccccbbbbbbddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddbbbbbcccccc
    cccccbbbbbbddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddbbbbbcccccc
    cccccbbbbbbddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddbbbbbcccccc
    cccccbbbbbbddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddbbbbcccccc
    cccccbbbbbbddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddbbbbbccccc
    cccccbbbbbbddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddbbbbbccccc
    cccccbbbbbbdddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddbbbbbccccc
    cccccbbbbbbdddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddbbbbbccccc
    cccccbbbbbbdddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddbbbbbccccc
    cccccbbbbbbddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddbbbbbccccc
    cccccbbbbbbddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddbbbbbccccc
    cccccbbbbbbddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddbbbbbccccc
    cccccbbbbbbddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddbbbbbccccc
    cccccbbbbbbddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddbbbbbccccc
    cccccbbbbbbddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddbbbbbbcccc
    cccccbbbbbbddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbcccc
    cccccbbbbbbddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbcccc
    ccccccbbbbbddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbcccc
    ccccccbbbbbddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbcccc
    ccccccbbbbbddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbcccc
    ccccccbbbbbddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbcccc
    ccccccbbbbbddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbcccc
    ccccccbbbbbddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbbccc
    ccccccbbbbbbdddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbbccc
    ccccccbbbbbbdddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbbbbccc
    ccccccbbbbbbdddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbbbbccc
    ccccccbbbbbbdddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddbbbccc
    ccccccbbbbbbddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddbbbccc
    ccccccbbbbbbddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddbbbccc
    ccccccbbbbbbddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddbbbccc
    cccccccbbbbbdddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddbbbccc
    cccccccbbbbbddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddbbbccc
    cccccccbbbbbddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbccc
    ccccccccbbbbddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbccc
    ccccccccbbbbddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbccc
    ccccccccbbbbddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbccc
    ccccccccbbbbdddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbccc
    ccccccccbbbbbddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbccc
    ccccccccbbbbbddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddbbbccc
    ccccccccbbbbbddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddbbbccc
    ccccccccbbbbbddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddbbbccc
    ccccccccbbbbbbdddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddbbbccc
    ccccccccbbbbbbdddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddbbbccc
    cccccccccbbbbbddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddbbbccc
    cccccccccbbbbbbdddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddbbbccc
    cccccccccbbbbbbdddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddbbbccc
    cccccccccbbbbbbdddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddbbbccc
    cccccccccbbbbbbddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddbbbccc
    ccccccccbbbbbbdddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddbbbccc
    ccccccccbbbbbbdddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddbbbccc
    ccccccccbbbbbbdddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddbbbccc
    ccccccccbbbbbbdddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddbbbbccc
    cccccccccbbbbbdddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbcccc
    ccccccccbbbbbbdddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbcccc
    ccccccccbbbbbbdddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbbccccc
    ccccccccbbbbbbdddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddbbbbbccccc
    ccccccbbbbbbbdddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddbbbbbccccc
    ccccccbbbbbbddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddbbbbbccccc
    ccccccbbbbbbddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddbbbbbccccc
    ccccccbbbbbbdddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddbbbbbccccc
    ccccccbbbbbddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbbbccccc
    ccccccbbbbbddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbbbccccc
    ccccccbbbbbdddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbbbccccc
    ccccccbbbbbdddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbbbccccc
    ccccccbbbdddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbbbccccc
    ccccccbbbdddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbbbccccc
    ccccccbbbdddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbbbccccc
    ccccccbbbdddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbbbccccc
    ccccccbbbdddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbbcccccc
    ccccccbbbdddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddbbbbcccccc
    cccccbbbbbddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddbbbbcccccc
    cccccbbbbbbdddddddddddddddddd11111111111111111111111111111111111dddd11111111111111111111111111111111111111111111111111111111111111111111111111ddddddddbbbbcccccc
    cccccbbbbbbbddddddddddddddddddddddddd111111111111111ddddddddddddddddddddddddddddddddddd11111111111111111111111111111111111111111111111111111dddddddddbbbbbcccccc
    cccccbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111111111111111111111111111ddddddddddbbbbbcccccc
    cccccbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111ddddddddddbbbbbcccccc
    cccccbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111dddddddddddbbbbbcccccc
    cccccbbbbbbbbdddddddddddddddddbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111ddddddddddddddbbbcccccc
    ccccccbbbbbbbdddddddbbbdddddddbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111ddddddddddddddbbbcccccc
    cccccbbbbbbbbddddddbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbcccccc
    cccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddbbccccccc
    cccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddbbccccccc
    cccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddbbbccccccc
    cccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbbbbbccccccc
    ccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddbbbbbbbccccccc
    ccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
scene.setBackgroundColor(9)
FLOATING_SWORD.ay = 350
scene.cameraFollowSprite(FLOATING_SWORD)
tiles.setCurrentTilemap(tilemap`level0`)
FLOATING_SWORD.setBounceOnWall(false)
for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
    sprites.destroy(value)
}
for (let value of sprites.allOfKind(SpriteKind.SHARP_ROCK)) {
    sprites.destroy(value)
}
for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
    SHARP_ROCK = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c c c . . . . 
        . . . . . c b b b b b c . . . . 
        . . . . c b b b b b b c . . . . 
        . . . c b b b b b b b c . . . . 
        . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.SHARP_ROCK)
    animation.runImageAnimation(
    SHARP_ROCK,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . c d d d d d c . . . . . 
        . . . c d d d d d d c . . . . . 
        . . c d d d d d d d c . . . . . 
        . c c c c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . c d d d d d c . . . . . 
        . . . c d d d d d d c . . . . . 
        . . c c c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . c d d d d d c . . . . . 
        . . c c c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c . . . . . . 
        . . c c c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c c c . . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c c c . . . . . 
        . . . . c d d d d d c . . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c c c . . . . . 
        . . . c d d d d d d c . . . . . 
        . . . . c d d d d d c . . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . c c c c c c c c c c . . . . . 
        . . c d d d d d d d c . . . . . 
        . . . c d d d d d d c . . . . . 
        . . . . c d d d d d c . . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(SHARP_ROCK, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        axe = sprites.create(assets.image`AXE`, SpriteKind.Enemy)
        tiles.placeOnTile(axe, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        axe.setPosition(axe.x + 80, axe.y + 80)
        axe.follow(FLOATING_SWORD)
    }
}
game.onUpdate(function () {
    FLOATING_SWORD.setImage(assets.image`Floating sword`)
    if (FLOATING_SWORD.vy < 0) {
        FLOATING_SWORD.setImage(img`
            . . . . . . . . . . . . f f f . 
            . . . . . . . . . . . f d d d f 
            . . . . . . . . . . f d d d d f 
            . . . . . . . . . f d d d d d f 
            . . . . . . . . f d d d d d f . 
            . . . . . . . f d d d d d f . . 
            . . . f . . f d d d d d f . . . 
            . . f b f f d d d d d f . . . . 
            . . f b b f d d d d f . . . . . 
            . . . f b b f d d f . . . . . . 
            . . . f f b b f f . . . . . . . 
            . . f e e f b b f . . . . . . . 
            . f e e e f f b b f . . . . . . 
            . f e e f . . f f . . . . . . . 
            . . f f . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (FLOATING_SWORD.vy > 0) {
        FLOATING_SWORD.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . f f . . . . . . . . . . . . 
            . f e e f . . f f . . . . . . . 
            . f e e e f f b b f . . . . . . 
            . . f e e f b b f . . . . . . . 
            . . . f f b b f f . . . . . . . 
            . . . f b b f d d f . . . . . . 
            . . f b b f d d d d f . . . . . 
            . . f b f f d d d d d f . . . . 
            . . . f . . f d d d d d f . . . 
            . . . . . . . f d d d d d f . . 
            . . . . . . . . f d d d d d f . 
            . . . . . . . . . f d d d d d f 
            . . . . . . . . . . f d d d d f 
            . . . . . . . . . . . f d d d f 
            . . . . . . . . . . . . f f f . 
            `)
    } else if (FLOATING_SWORD.x % 2 == 0) {
    	
    } else {
    	
    }
    if ((FLOATING_SWORD.isHittingTile(CollisionDirection.Left) || FLOATING_SWORD.isHittingTile(CollisionDirection.Right)) && FLOATING_SWORD.vy >= 0) {
        FLOATING_SWORD.vy = 0
        FLOATING_SWORD.ay = 0
        FLOATING_SWORD.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . f . . . . . . . . . . . 
            . . . . f b f . . . . . . . . . . 
            f f f f f b f f f f f f f f f f . 
            f e e e f b f d d d d d d d d d f 
            f e e e f b f d d d d d d d d d f 
            f f f f f b f f f f f f f f f f . 
            . . . . f b f . . . . . . . . . . 
            . . . . . f . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else {
        FLOATING_SWORD.ay = 350
    }
    if (0 < 0) {
        FLOATING_SWORD.image.flipX()
    }
})
