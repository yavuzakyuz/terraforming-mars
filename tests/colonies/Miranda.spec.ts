import {expect} from 'chai';
import {Pets} from '../../src/server/cards/base/Pets';
import {Predators} from '../../src/server/cards/base/Predators';
import {Miranda} from '../../src/server/colonies/Miranda';
import {AddResourcesToCard} from '../../src/server/deferredActions/AddResourcesToCard';
import {Game} from '../../src/server/Game';
import {Player} from '../../src/server/Player';
import {TestPlayer} from '../TestPlayer';
import {cast, runAllActions} from '../TestingUtils';

describe('Miranda', function() {
  let miranda: Miranda;
  let pets: Pets;
  let player: Player;
  let player2: Player;
  let game: Game;

  beforeEach(function() {
    miranda = new Miranda();
    pets = new Pets();
    player = TestPlayer.BLUE.newPlayer();
    player2 = TestPlayer.RED.newPlayer();
    game = Game.newInstance('gameid', [player, player2], player);
    game.gameOptions.coloniesExtension = true;
    game.colonies.push(miranda);
  });

  it('Should activate', function() {
    expect(miranda.isActive).is.false;
    player.playCard(pets);
    expect(miranda.isActive).is.true;
  });

  it('Should build', function() {
    player.playCard(pets);
    miranda.addColony(player);

    expect(game.deferredActions).has.lengthOf(1);
    const action = game.deferredActions.pop()!;
    expect(action).to.be.an.instanceof(AddResourcesToCard);
    expect(action.player).to.eq(player);
    // Should directly add to Pets, since there's no other target
    action.execute();

    expect(pets.resourceCount).to.eq(2); // Pets starts with 1 resource
  });

  it('Should trade', function() {
    player.playCard(pets);
    miranda.trade(player);

    // Should have GiveColonyBonus, AddResourcesToCard and decrease track
    expect(game.deferredActions).has.lengthOf(3);
    game.deferredActions.pop(); // GiveColonyBonus

    const action = cast(game.deferredActions.pop(), AddResourcesToCard);
    expect(action.player).to.eq(player);
    // Should directly add to Pets, since there's no other target
    action.execute();

    expect(pets.resourceCount).to.eq(2);
  });

  it('Should give trade bonus', function() {
    const predators = new Predators();
    player.playCard(pets);
    player2.playCard(predators);

    miranda.addColony(player);
    game.deferredActions.pop()!.execute(); // Gain placement animals

    miranda.trade(player2);
    runAllActions(game); // Gain Trade & Bonus

    expect(pets.resourceCount).to.eq(2);
    expect(predators.resourceCount).to.eq(1);
    expect(player.cardsInHand).has.lengthOf(1);
  });
});
