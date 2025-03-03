import {expect} from 'chai';
import {LakefrontResorts} from '../../../src/server/cards/turmoil/LakefrontResorts';
import {Game} from '../../../src/server/Game';
import {runAllActions} from '../../TestingUtils';
import {TestPlayer} from '../../TestPlayer';

describe('LakefrontResorts', function() {
  it('Should play', function() {
    const card2 = new LakefrontResorts();
    const player = TestPlayer.BLUE.newPlayer();
    const player2 = TestPlayer.RED.newPlayer();
    const game = Game.newInstance('gameid', [player, player2], player);
    const play = card2.play(player);
    expect(play).is.undefined;
    player.setCorporationForTest(card2);
    game.addOceanTile(player, '06');
    game.addOceanTile(player, '07');
    runAllActions(game);

    expect(player.production.megacredits).to.eq(2);
    // The 2 oceans are adjacent
    expect(player.megaCredits).to.eq(3);
  });
});
