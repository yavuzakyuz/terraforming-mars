import {expect} from 'chai';
import {GHGImportFromVenus} from '../../../src/server/cards/venusNext/GHGImportFromVenus';
import {Game} from '../../../src/server/Game';
import {TestPlayer} from '../../TestPlayer';

describe('GHGImportFromVenus', function() {
  it('Should play', function() {
    const card = new GHGImportFromVenus();
    const player = TestPlayer.BLUE.newPlayer();
    const redPlayer = TestPlayer.RED.newPlayer();
    const game = Game.newInstance('gameid', [player, redPlayer], player);

    const action = card.play(player);
    expect(action).is.undefined;
    expect(player.production.heat).to.eq(3);
    expect(game.getVenusScaleLevel()).to.eq(2);
  });
});
